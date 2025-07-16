// const Attendance = require('../models/attendance.model');
// const Student = require('../models/student.model');

// const getStudentAttendancePercentage = async (req, res) => {
//   try {
//     const studentId = req.userId; // From isAuth middleware

//     const student = await Student.findById(studentId).populate('Classs');
//     if (!student) {
//       return res.status(404).json({ message: 'Student not found' });
//     }
// console.log("student class",student);
//     const classRef = student.Classs;
//     if (!classRef || !classRef._id) {
//       return res.status(400).json({ message: 'Student is not assigned to any class' });
//     }

//     const classId = classRef._id;

//     // Get all unique dates when attendance was taken for the class
//     const totalDates = await Attendance.distinct("date", { classId });

//     const totalClasses = totalDates.length;

//     // Count of classes attended by this student
//     const presentDays = await Attendance.countDocuments({ studentId, classId });

//     const percentage = totalClasses > 0
//       ? ((presentDays / totalClasses) * 100).toFixed(2)
//       : "0.00";

//     res.status(200).json({
//       studentId,
//       studentName: student.name,
//       classId,
//       totalClasses,
//       presentDays,
//       attendancePercentage: `${percentage}%`
//     });

//   } catch (error) {
//     console.error('Attendance Percentage Error:', error);
//     res.status(500).json({ message: 'Failed to calculate attendance percentage' });
//   }
// };

// module.exports = { getStudentAttendancePercentage };

const Attendance = require('../models/attendance.model');
const Student = require('../models/student.model');
const moment = require('moment'); // You’ll need to install this: npm install moment

// const getStudentAttendancePercentage = async (req, res) => {
//   try {
//     const studentId = req.userId;

//     const student = await Student.findById(studentId).populate('Classs');
//     if (!student) {
//       return res.status(404).json({ message: 'Student not found' });
//     }

//     const classRef = student.Classs;
//     if (!classRef || !classRef._id) {
//       return res.status(400).json({ message: 'Student is not assigned to any class' });
//     }

//     const classId = classRef._id;

//     // Get all attendance records for the class
//     const allAttendances = await Attendance.find({ classId });

//     // Group attendance dates by month
//     const monthlyData = {};

//     for (const record of allAttendances) {
//       const monthKey = moment(record.date).format('YYYY-MM'); // e.g., '2025-05'

//       if (!monthlyData[monthKey]) {
//         monthlyData[monthKey] = {
//           totalDays: new Set(),
//           presentDays: 0,
//           AbsentDays:0,
//           LeaveDays:0,
//           HoliDays:0,
//         };
//       }
//       // Add date to total unique days
//       monthlyData[monthKey].totalDays.add(moment(record.date).format('YYYY-MM-DD'));

//       // Count only if the student was present
//       if (String(record.studentId) === String(studentId) && record.status === 'Present') {
//         monthlyData[monthKey].presentDays += 1;
//       }
//         if (String(record.studentId) === String(studentId) && record.status === 'Absent') {
//         monthlyData[monthKey].AbsentDays += 1;
//       }
//        if (String(record.studentId) === String(studentId) && record.status === 'Leave') {
//         monthlyData[monthKey].LeaveDays += 1;
//       }
//        if (String(record.studentId) === String(studentId) && record.status === 'Holiday') {
//         monthlyData[monthKey].HoliDays += 1;
//       }
//     }

//     // Calculate monthly percentages
//     const monthlyPercentages = Object.entries(monthlyData).map(([month, data]) => {
//       const totalClasses = data.totalDays.size;
//       const presentDays = data.presentDays;
//       const percentage = totalClasses > 0
//         ? ((presentDays / totalClasses) * 100).toFixed(2)
//         : "0.00";

//       return {
//         month,
//         totalClasses,
//         presentDays,
//         attendancePercentage: `${percentage}%`
//       };
//     });

//     res.status(200).json({
//       studentId,
//       studentName: student.name,
//       classId,
//       monthlyAttendance: monthlyPercentages
//     });

//   } catch (error) {
//     console.error('Attendance Percentage Error:', error);
//     res.status(500).json({ message: 'Failed to calculate monthly attendance percentage' });
//   }
// };


const getStudentAttendancePercentage = async (req, res) => {
  try {
    const studentId = req.userId;

    const student = await Student.findById(studentId).populate('Classs');
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    const classRef = student.Classs;
    if (!classRef || !classRef._id) {
      return res.status(400).json({ message: 'Student is not assigned to any class' });
    }

    const classId = classRef._id;

    // ✅ Get all attendance records for this student in the class
    const studentAttendances = await Attendance.find({ classId, studentId });

    // ✅ Calculate overall attendance percentage
    const totalRecords = studentAttendances.length;
    const presentCount = studentAttendances.filter(rec => rec.status === 'Present').length;
    const percentage = totalRecords > 0
      ? ((presentCount / totalRecords) * 100).toFixed(2)
      : "0.00";

    // ✅ Return raw data and percentage only
    res.status(200).json({
      studentId,
      studentName: student.name,
      classId,
      attendancePercentage: `${percentage}%`,
      attendanceRecords: studentAttendances  // raw records with status/date
    });

  } catch (error) {
    console.error('Attendance Percentage Error:', error);
    res.status(500).json({ message: 'Failed to fetch attendance data' });
  }
};

module.exports = { getStudentAttendancePercentage };
