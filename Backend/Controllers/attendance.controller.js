const Attendance = require('../models/attendance.model');
const Class = require("../models/class.model");
const Student = require("../models/student.model");
const Teacher = require("../models/teacher.model");
const Admin = require("../models/admin.model");
const Session = require("../models/Session.model");
// const MarkStudentAttendance = async (req, res) => {
//   try {
//     const attendanceList = req.body.attendance;
//     const teacherId = req.userId; // from auth middleware

//     if (!Array.isArray(attendanceList) || attendanceList.length === 0) {
//       return res.status(400).json({ error: 'Attendance list is empty or invalid.' });
//     }

//     const classId = attendanceList[0].classId;
//     const date = new Date(attendanceList[0].date);

//     // ✅ Disallow marking attendance for future dates
//     const today = new Date();
//     const inputDate = new Date(date.toDateString());
//     const currentDate = new Date(today.toDateString());

//     if (inputDate > currentDate) {
//       return res.status(400).json({ error: 'Cannot mark attendance for a future date.' });
//     }

//     // ✅ Check class exists and validate teacher
//     const classExists = await Class.findById(classId);
//     if (!classExists) {
//       return res.status(404).json({ error: 'Class not found' });
//     }

//     // ✅ Allow only incharge teacher to mark attendance
//   // Check that inchargeTeacher exists and matches teacherId
// // const isIncharge = await Teacher.exists({
// //   _id: teacherId,
// //   "assignedClass.class": classId,
// //   "assignedClass.incharge": true
// // });
// // console.log("testing InCharge",isIncharge);
// // if (!isIncharge) {
// //   return res.status(403).json({ error: "Only the incharge teacher can mark attendance for this class." });
// // }


// // ✅ Allow incharge teachers OR admins
// if (req.userRole !== 'admin') {
//   const isIncharge = await Teacher.exists({
//     _id: teacherId,
//     "assignedClass.class": classId,
//     "assignedClass.incharge": true
//   });

//   if (!isIncharge) {
//     return res.status(403).json({ error: "Only the incharge teacher or admin can mark attendance." });
//   }
// }

//     // ✅ Prevent duplicate marking for same date
//     const startOfDay = new Date(inputDate.setHours(0, 0, 0, 0));
//     const endOfDay = new Date(inputDate.setHours(23, 59, 59, 999));

//     const alreadyMarked = await Attendance.exists({
//       classId,
//       date: { $gte: startOfDay, $lte: endOfDay }
//     });

//     if (alreadyMarked) {
//       return res.status(400).json({ error: 'Attendance has already been marked for this date.' });
//     }

//     // ✅ Insert attendance
//     const insertedAttendance = await Attendance.insertMany(attendanceList);

//     // ✅ Push IDs to class
//     const attendanceIds = insertedAttendance.map(a => a._id);
//     classExists.attendance.push(...attendanceIds);
//     await classExists.save();

//     // ✅ Emit socket notifications
//     const io = req.app.get("io");

//     await Promise.all(attendanceList.map(async (record) => {
//       const student = await Student.findById(record.studentId);
//       if (student) {
//         io.emit(`attendance-${student._id}`, {
//           studentId: student._id,
//           studentName: student.name,
//           date: date.toDateString(),
//           message: `${student.name}, your attendance was marked on ${date.toDateString()}.`,
//         });
//       }
//     }));

//     res.status(200).json({
//       message: 'Attendance saved and notifications sent to students.',
//       savedCount: insertedAttendance.length
//     });

//   } catch (error) {
//     console.error('Attendance Error:', error);
//     res.status(500).json({ error: 'Failed to save attendance' });
//   }
// };


// const MarkStudentAttendance = async (req, res) => {
//   try {
//     const attendanceList = req.body.attendance;
//     const teacherId = req.userId;      // User ID from auth middleware (teacher or admin)
//     const userRole = req.userId;     // User role (e.g., 'admin' or 'teacher') from auth middleware

//     // 1. Validate attendance list
//     if (!Array.isArray(attendanceList) || attendanceList.length === 0) {
//       return res.status(400).json({ error: 'Attendance list is empty or invalid.' });
//     }

//     // 2. Extract classId and date from first attendance record (assuming all are same class & date)
//     const classId = attendanceList[0].classId;
//     const date = new Date(attendanceList[0].date);

//     // 3. Prevent marking attendance for future dates
//     const today = new Date();
//     const inputDate = new Date(date.toDateString());
//     const currentDate = new Date(today.toDateString());

//     if (inputDate > currentDate) {
//       return res.status(400).json({ error: 'Cannot mark attendance for a future date.' });
//     }

//     // 4. Check if class exists
//     const classExists = await Class.findById(classId);
//     if (!classExists) {
//       return res.status(404).json({ error: 'Class not found' });
//     }

//     // 5. Authorization logic:
//     //    - If user is 'admin', allow marking attendance regardless
//     //    - If user is NOT 'admin', verify they are the incharge teacher of this class
//     if (userRole !== 'admin') {
//       // Check if teacher is incharge for this class
//       const isIncharge = await Teacher.exists({
//         _id: teacherId,
//         "assignedClass.class": classId,
//         "assignedClass.incharge": true,
//       });

//       if (!isIncharge) {
//         return res.status(403).json({
//           error: "Only the incharge teacher or admin can mark attendance.",
//         });
//       }
//     }

//     // 6. Prevent duplicate attendance marking for same class and date
//     const startOfDay = new Date(inputDate.setHours(0, 0, 0, 0));
//     const endOfDay = new Date(inputDate.setHours(23, 59, 59, 999));

//     const alreadyMarked = await Attendance.exists({
//       classId,
//       date: { $gte: startOfDay, $lte: endOfDay },
//     });

//     if (alreadyMarked) {
//       return res.status(400).json({
//         error: 'Attendance has already been marked for this date.',
//       });
//     }

//     // 7. Insert attendance records
//     const insertedAttendance = await Attendance.insertMany(attendanceList);

//     // 8. Add attendance record IDs to class attendance array
//     const attendanceIds = insertedAttendance.map(a => a._id);
//     classExists.attendance.push(...attendanceIds);
//     await classExists.save();

//     // 9. Emit notifications for each student asynchronously
//     const io = req.app.get("io");
//     await Promise.all(
//       attendanceList.map(async (record) => {
//         const student = await Student.findById(record.studentId);
//         if (student) {
//           io.emit(`attendance-${student._id}`, {
//             studentId: student._id,
//             studentName: student.name,
//             date: date.toDateString(),
//             message: `${student.name}, your attendance was marked on ${date.toDateString()}.`,
//           });
//         }
//       })
//     );

//     // 10. Send success response
//     res.status(200).json({
//       message: 'Attendance saved and notifications sent to students.',
//       savedCount: insertedAttendance.length,
//     });

//   } catch (error) {
//     console.error('Attendance Error:', error);
//     res.status(500).json({ error: 'Failed to save attendance' });
//   }
// };


const MarkStudentAttendance = async (req, res) => {
  try {
    const attendanceList = req.body.attendance;
    const currentYear = new Date().getFullYear();
    const userId = req.userId; // From auth middleware
   const session = await Session.findOne({name:currentYear.toString()});
    // Validate input
    if (!Array.isArray(attendanceList) || attendanceList.length === 0) {
      return res.status(400).json({ error: 'Attendance list is empty or invalid.' });
    }

    const { classId, date } = attendanceList[0];
    if (!classId || !date) {
      return res.status(400).json({ error: 'Missing classId or date in attendance data.' });
    }

    const attendanceDate = new Date(date);
    const inputDate = new Date(attendanceDate.toDateString());
    const currentDate = new Date(new Date().toDateString());

    if (inputDate > currentDate) {
      return res.status(400).json({ error: 'Cannot mark attendance for a future date.' });
    }

    // Get class
    const classExists = await Class.findById(classId);
    if (!classExists) {
      return res.status(404).json({ error: 'Class not found.' });
    }

    // 🔍 Identify user role
    const isAdmin = await Admin.exists({ _id: userId });
    const isTeacher = await Teacher.exists({ _id: userId });

    if (!isAdmin && !isTeacher) {
      return res.status(403).json({ error: 'Only Admin or Incharge Teacher can mark attendance.' });
    }

    // 🔐 If teacher, check if incharge of this class
    if (isTeacher && !isAdmin) {
      const incharge = await Teacher.exists({
        _id: userId,
        "assignedClass.class": classId,
        "assignedClass.incharge": true,
      });

      if (!incharge) {
        return res.status(403).json({
          error: 'Only the incharge teacher of this class can mark attendance.',
        });
      }
    }

    // 🚫 Check for duplicate attendance
    // const startOfDay = new Date(inputDate.setHours(0, 0, 0, 0));
    // const endOfDay = new Date(inputDate.setHours(23, 59, 59, 999));
     const startOfDay = new Date(inputDate);
startOfDay.setHours(0,0,0,0);
const endOfDay = new Date(inputDate);
endOfDay.setHours(23,59,59,999);

    const alreadyMarked = await Attendance.exists({
      classId,
      date: { $gte: startOfDay, $lte: endOfDay },
    });

    if (alreadyMarked) {
      return res.status(400).json({ error: 'Attendance already marked for this class on the selected date.' });
    }

    // ✅ Save attendance
    const inserted = await Attendance.insertMany(attendanceList);

    // 📌 Update class doc
  const attendanceIds = inserted.map(a => a._id);
     classExists.attendance.push(...attendanceIds);
//     await classExists.save();
    // classExists.attendance.push(...inserted.map(a => a._id));
    await classExists.save();

    // 📢 Notify students via socket
    const io = req.app.get('io');
    await Promise.all(attendanceList.map(async (record) => {
      const student = await Student.findById(record.studentId);
      if (student && io) {
        io.emit(`attendance-${student._id}`, {
          studentId: student._id,
          studentName: student.name,
          date: inputDate.toDateString(),
          message: `${student.name}, your attendance was marked for ${inputDate.toDateString()}.`
        });
      }
    }));

    // ✅ Final response
    return res.status(200).json({
      message: 'Attendance saved successfully and notifications sent.',
      savedCount: inserted.length
    });

  } catch (error) {
    console.error('Attendance Marking Error:', error);
    return res.status(500).json({ error: 'Internal server error while saving attendance.' });
  }
};

module.exports = MarkStudentAttendance;
