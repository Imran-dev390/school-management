const Attendance = require('../models/attendance.model');
const Class = require("../models/class.model");
const Student = require("../models/student.model");
const Teacher = require("../models/teacher.model");

const MarkStudentAttendance = async (req, res) => {
  try {
    const attendanceList = req.body.attendance;
    const teacherId = req.userId; // from auth middleware

    if (!Array.isArray(attendanceList) || attendanceList.length === 0) {
      return res.status(400).json({ error: 'Attendance list is empty or invalid.' });
    }

    const classId = attendanceList[0].classId;
    const date = new Date(attendanceList[0].date);

    // ✅ Disallow marking attendance for future dates
    const today = new Date();
    const inputDate = new Date(date.toDateString());
    const currentDate = new Date(today.toDateString());

    if (inputDate > currentDate) {
      return res.status(400).json({ error: 'Cannot mark attendance for a future date.' });
    }

    // ✅ Check class exists and validate teacher
    const classExists = await Class.findById(classId);
    if (!classExists) {
      return res.status(404).json({ error: 'Class not found' });
    }

    // ✅ Allow only incharge teacher to mark attendance
  // Check that inchargeTeacher exists and matches teacherId
const isIncharge = await Teacher.exists({
  _id: teacherId,
  "assignedClass.class": classId,
  "assignedClass.incharge": true
});
console.log("testing InCharge",isIncharge);
if (!isIncharge) {
  return res.status(403).json({ error: "Only the incharge teacher can mark attendance for this class." });
}
    // ✅ Prevent duplicate marking for same date
    const startOfDay = new Date(inputDate.setHours(0, 0, 0, 0));
    const endOfDay = new Date(inputDate.setHours(23, 59, 59, 999));

    const alreadyMarked = await Attendance.exists({
      classId,
      date: { $gte: startOfDay, $lte: endOfDay }
    });

    if (alreadyMarked) {
      return res.status(400).json({ error: 'Attendance has already been marked for this date.' });
    }

    // ✅ Insert attendance
    const insertedAttendance = await Attendance.insertMany(attendanceList);

    // ✅ Push IDs to class
    const attendanceIds = insertedAttendance.map(a => a._id);
    classExists.attendance.push(...attendanceIds);
    await classExists.save();

    // ✅ Emit socket notifications
    const io = req.app.get("io");

    await Promise.all(attendanceList.map(async (record) => {
      const student = await Student.findById(record.studentId);
      if (student) {
        io.emit(`attendance-${student._id}`, {
          studentId: student._id,
          studentName: student.name,
          date: date.toDateString(),
          message: `${student.name}, your attendance was marked on ${date.toDateString()}.`,
        });
      }
    }));

    res.status(200).json({
      message: 'Attendance saved and notifications sent to students.',
      savedCount: insertedAttendance.length
    });

  } catch (error) {
    console.error('Attendance Error:', error);
    res.status(500).json({ error: 'Failed to save attendance' });
  }
};
module.exports = MarkStudentAttendance;
