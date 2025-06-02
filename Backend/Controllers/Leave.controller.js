// // const Leave = require("../models/Leave.model");
// // const Student = require("../models/student.model");
// // const Teacher = require("../models/teacher.model");



// // const AddLeave = async (req,res)=>{
// //     try{
// //         const {leave,date} = req.body;
// //         const teacher = await Teacher.findOne({_id:req.userId});
// //         const student = await Student.findOne({_id:req.userId});
// //         if(student){
// //             let created = await Leave.create({
// //                 leave,
// //                 date,
// //                 student:student._id,
// //                 Class:student.Classs,
// //             })
// //             student.leave.push(created._id);
// //             await student.save();
// //             return res.status(200).json({message:"Leave Successfully send to the Teacher"});
// //         }
// //         if(teacher){
// //              let created = await Leave.create({
// //                 leave,
// //                 date,
// //                 teacher:teacher._id,
// //                 Class:teacher.assignedClass,
// //             })
// //             teacher.leave.push(created._id);
// //             await teacher.save();
// //         }
// //     } catch(err){
// //         console.log("error on add leave",err.message)
// //         return res.status(401).json({message:"Error on Add Leave"})
// //     }
// // }

// // module.exports= AddLeave;
































// const Leave = require("../models/Leave.model");
// const Student = require("../models/student.model");
// const Teacher = require("../models/teacher.model");

// const AddLeave = async (req, res) => {
//   try {
//     const { leave, date } = req.body;
//     const { io, userSocketMap } = req;

//     // Check if the requester is a student
//     const student = await Student.findOne({ _id: req.userId });
//    // const existDate = await student.findOne({leave});
//     const existLeave = await Leave.findOne({leave,date});
//     const currentdate = new Date();
//     const getTodayDate = currentdate.toLocaleDateString();
//       console.log("existDate Outer",existLeave);
//     if(existLeave){
//       console.log("existDate inner",existLeave);
//       return res.status(401).json({message:"leave already exist in the record!"});
//     }
//     if (student) {
//       if(getTodayDate){
//       const created = await Leave.create({
//         leave,
//         date,
//         student: student._id,
//         Class: student.Classs,
//       }); 
//       student.leave.push(created._id);
//       await student.save();
//       } else{
//          return res.status(401).json({message:"Only one leave you can send in a day"});
//       }

//       // Find the class teacher
//      // const classTeacher = await Teacher.findOne({ assignedClass: student.Classs });
//      // if (classTeacher) {
//      //   const teacherSocketId = userSocketMap.get(classTeacher._id.toString());
//      //   if (teacherSocketId) {
//      //     io.to(teacherSocketId).emit("leaveRequest", {
//      //       type: "student",
//      //       from: student.name,
//      //       studentId: student._id,
//      //       class: student.Classs,
//      //       leave,
//      //       date,
//      //     });
//      //   }
//      // }
//       return res.status(200).json({ message: "Leave successfully sent to the teacher." });
//     }

//     // Check if the requester is a teacher
//     const teacher = await Teacher.findOne({ _id: req.userId });
//     if (teacher) {
//       const created = await Leave.create({
//         leave,
//         date,
//         teacher: teacher._id,
//         Class: teacher.assignedClass,
//       });

//       teacher.leave.push(created._id);
//       await teacher.save();

//       // Find admin(s) – update this as per your actual admin user management
//      // const adminIds = ["adminUserId1", "adminUserId2"]; // Replace with real admin IDs from your DB


//       return res.status(200).json({ message: "Leave successfully sent to the admin." });
//     }

//     // Neither student nor teacher
//     return res.status(400).json({ message: "User not authorized to submit leave." });

//   } catch (err) {
//     console.error("Error on add leave:", err.message);
//     return res.status(500).json({ message: "Error on Add Leave" });
//   }
// };

// module.exports = AddLeave;





const Leave = require("../models/Leave.model");
const Student = require("../models/student.model");
const Teacher = require("../models/teacher.model");

const AddLeave = async (req, res) => {
  try {
    const { leave, date } = req.body;
    const student = await Student.findOne({ _id: req.userId });

    if (student) {
      const today = new Date();
      const startOfDay = new Date(today.setHours(0, 0, 0, 0));
      const endOfDay = new Date(today.setHours(23, 59, 59, 999));

      // ✅ Check if student has already submitted a leave today
      const alreadySubmittedToday = await Leave.findOne({
        student: student._id,
        createdAt: { $gte: startOfDay, $lte: endOfDay },
      });

      if (alreadySubmittedToday) {
        return res.status(400).json({
          message: "You can only submit one leave request per day.",
        });
      }

      // ✅ Check if a leave exists for the same leave *date*
      const existingLeave = await Leave.findOne({
        student: student._id,
        date: new Date(date).toDateString(),
      });

      if (existingLeave) {
        return res.status(400).json({
          message: "You have already submitted a leave for this date.",
        });
      }
      // ✅ Create the leave
      const createdLeave = await Leave.create({
        leave,
        date: new Date(date).toDateString(),
        student: student._id,
        Class: student.Classs,
      });

      student.leave.push(createdLeave._id);
      await student.save();

      return res.status(200).json({
        message: "Leave successfully sent to the teacher.",
      });
    }

    const teacher = await Teacher.findOne({ _id: req.userId });

    if (teacher) {
      const createdLeave = await Leave.create({
        leave,
        date: new Date(date).toDateString(),
        teacher: teacher._id,
        Class: teacher.assignedClass,
      });

      teacher.leave.push(createdLeave._id);
      await teacher.save();

      return res.status(200).json({
        message: "Leave successfully sent to the Admin.",
      });
    }

    return res.status(400).json({
      message: "User not authorized to submit leave.",
    });
  } catch (err) {
    console.error("Error on add leave:", err.message);
    return res.status(500).json({
      message: "Error on Add Leave",
    });
  }
};

module.exports = AddLeave;
