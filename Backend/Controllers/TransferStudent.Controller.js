const Student  = require("../models/student.model");
//const Class = require("../models/class.model");
// const transferStudent = async (req, res) => {
//   try {
//     const { studentId, toSchool, toClassId, toSection, note } = req.body;

//     if (!studentId || !toSchool || !toClassId) {
//       return res.status(400).json({ message: "Missing required fields" });
//     }

//     const student = await Student.findById(studentId).populate('Classs');

//     if (!student) {
//       return res.status(404).json({ message: "Student not found" });
//     }

//     // Save current class and section as "from"
//     const fromClass = student.Classs?._id;
//     const fromSection = student.section || "";  // Assuming you track section somewhere in student or elsewhere

//     // Add to transfer history
//     student.transferHistory.push({
//       fromSchool: student.prevschoolName || "", // or current school field
//       toSchool,
//       fromClass,
//       toClass: toClassId,
//       fromSection,
//       toSection,
//       note,
//       transferredAt: new Date(),
//     });

//     // Update current class and school in student record
//     student.Classs = toClassId;
//     student.prevschoolName = toSchool; // or update current school field if exists
//     // update section if you track it
//     student.section = toSection; // if you keep section field on student

//     await student.save();

//     return res.status(200).json({ message: "Student transferred successfully" });

//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: "Server error" });
//   }
// };


const Admin = require('../models/admin.model');


const TransferRecord = require("../models/TransferRecord.model");

// const createTransferRecord = async (req, res) => {
//   const { studentId, toSchool, toClassId, toSection, note } = req.body;
// try{
//   const student = await Student.findById(studentId);
//   const admin = await Admin.findById(req.userId);
//   if(!admin){
//     return res.status(401).json({message:"Only Admin Can Transfer Student!"})
//   }
//   if (!student) return res.status(404).json({ message: "Student not found" });

//   const record = new TransferRecord({
//     student: studentId,
//     fromSchool: student.prevschoolName,
//     toSchool,
//     fromClass: student.Classs,
//     toClass: toClassId,
//     fromSection: student.section,
//     toSection,
//     note,
//   });
//   await record.save();
//    admin.transferredStudents.push(record);
//    await admin.save();
//   res.status(200).json({ message: "Transfer logged" });
// } catch(err){
//     res.status(401).json({message:"Error on CreateTransferRecord"});
//     console.log("erron",err.message);
// }
// };







const createTransferRecord = async (req, res) => {
  const { studentId, toSchool, toClass, note } = req.body;
  try {
    const student = await Student.findById(studentId);
    const admin = await Admin.findById(req.userId);

    if (!admin) {
      return res.status(401).json({ message: "Only Admin Can Transfer Student!" });
    }

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // ✅ Check if already transferred to same school
    const existingTransfer = await TransferRecord.findOne({
      student: studentId,
      toSchool: { $regex: new RegExp(`^${toSchool}$`, 'i') } // case-insensitive match
    });

    if (existingTransfer) {
      return res.status(409).json({
        message: `Student has already been transferred to "${existingTransfer.toSchool}".`
      });
    }

    // ✅ Create new transfer record
    const record = new TransferRecord({
      student: studentId,
      fromSchool: student.prevschoolName,
      toSchool,
      fromClass: student.Classs,
      toClass,
      fromSection: student.section,
      note,
    });

    await record.save();

    admin.transferredStudents.push(record._id);
    await admin.save();

    return res.status(200).json({ message: "Transfer logged" });
  } catch (err) {
    console.error("Error on CreateTransferRecord:", err.message);
    return res.status(500).json({ message: "Error on CreateTransferRecord" });
  }
};

module.exports = createTransferRecord;