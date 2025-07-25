const Admin = require("../models/admin.model");
const Student = require("../models/student.model");
const Teacher = require("../models/teacher.model");
const Class = require("../models/class.model");
const Staff  = require("../models/addStaff.model");
const Subject = require("../models/Subjects.model");
const ExamSchedule = require("../models/examSchedule.model");
const anguler  = "anguler";
const bcrypt = require("bcrypt");
const FeeVoucher = require("../models/FeeVoucher.model");
//const Subjects = require("../models/Subjects.model");
// ✅ Get Admin Profile
/*const getAdminProfile = async (req, res) => {
  try {
    const admin = await Admin.findOne({email:"admin@gmail.com"})
    .populate("students")
    .populate("teachers")
    .populate("classes");
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    res.status(200).json({ admin });
  } catch (err) {
    console.error("Error fetching admin profile:", err);
    res.status(500).json({ message: "Server error while fetching admin data" });
  }
};*/














/*const getAdminProfile = async (req, res) => {
  try {
    const admin = await Admin.findOne({ email: "admin@gmail.com" })
      .populate({
        path: "students",
        populate: {
          path: "Classs", // Populate the Class reference in each student
          model: "Class" // Specify the class model to populate
        }
      })
      .populate("teachers")
      .populate("classes");

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    res.status(200).json({ admin });
  } catch (err) {
    console.error("Error fetching admin profile:", err);
    res.status(500).json({ message: "Server error while fetching admin data" });
  }
};*/


/*const getAdminProfile = async (req, res) => {
  try {
    // Get the admin profile, populate students, teachers, and classes
    const admin = await Admin.findOne({ email: "" })
      .populate("students")  // Populate students with basic student info (no nested population yet)
      .populate("teachers")  // Populate teachers with basic teacher info (if needed)
      .populate("classes") // Populate classes with class info (if needed)
      .populate("subjects")

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // Optionally, manually populate Class info for each student after fetching admin
    const populatedStudents = await Promise.all(
      admin.students.map(async (student) => {
        // Populate Classs manually for each student
        const populatedStudent = await Student.findById(student._id).populate("Classs");
        return populatedStudent;
      })
    );

    admin.students = populatedStudents; // Replace original student data with populated student data

    res.status(200).json({ admin });
  } catch (err) {
    console.error("Error fetching admin profile:", err);
    res.status(500).json({ message: "Server error while fetching admin data" });
  }
};*/



const getAdminProfile = async (req, res) => {
  try {
    // STEP 1: Get the admin
    const admin = await Admin.findOne({_id: req.userId}).populate({
  path: "sessions",
  select: "startDate endDate Events",
  populate: {
    path: "Events", // make sure the field name is exactly this
    model: "Event"  // match your actual model name
  }
})
    .populate("transferredStudents")
    .populate("FeeTypes")
    .populate("staff") // Replace with dynamic `req.user.email` or `req.userId`
      .lean(); // use lean() to make the doc plain JS object

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // STEP 2: Manually fetch and populate students with Class
    const populatedStudents = await Student.find({ _id: { $in: admin.students } })
      .populate("Classs")
      .populate("leave")
      .lean();

      // After populatedStudents is fetched
const studentIds = populatedStudents.map(student => student._id);

// Fetch FeeVouchers for all students under this admin
const feeVouchers = await FeeVoucher.find({ student: { $in: studentIds } })
  .populate("student")  // Optional: populate basic student info
  .populate("feeType") // To get fee type name
  .lean();
    // STEP 3: Manually fetch and populate teachers with teachSubject and assignedClass
    // const populatedTeachers = await Teacher.find({ _id: { $in: admin.teachers } })
    //   .populate("teachSubject")
    //   .populate("assignedClass")
    //   .lean();
    const populatedTeachers = await Teacher.find({ _id: { $in: admin.teachers } })
  .populate({
    path: 'teachSubject',
    select: 'name'
  })
  .populate({
    path: 'assignedClass.class',
    select: 'name section'
  })
  .lean();
//console.log("teachers at admin",populatedTeachers)
    // STEP 4: Populate classes and subjects
    const populatedClasses = await Class.find({ _id: { $in: admin.classes } })
  .populate("subjects")
  .populate("teacher")
  .populate("students")
 .populate("attendance")
  .lean();
    const populatedSubjects = await Subject.find({ _id: { $in: admin.subjects } })
    .populate("")
    .lean();
//const populatedStaff = await Staff.find({_id:{ $in: admin.staff}});
    // STEP 5: Assemble final admin object with all populated fields
    const fullAdminProfile = {
      ...admin,
      students: populatedStudents,
      teachers: populatedTeachers,
      classes: populatedClasses,
      subjects: populatedSubjects,
      feeVouchers
  //    staff:populatedStaff,
    };

    res.status(200).json({ admin: fullAdminProfile });

  } catch (err) {
    console.error("Error fetching admin profile:", err);
    res.status(500).json({ message: "Server error while fetching admin data" });
  }
};




// ✅ Delete a Student
const DeleteStudent = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedStudent = await Student.findByIdAndDelete(id);

    if (!deletedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Optional: Remove the student reference from the Admin model, if applicable
    await Admin.updateOne(
      { students: id },
      { $pull: { students: id } }
    );

    return res.status(200).json({
      message: "Student deleted successfully",
      student: deletedStudent
    });
  } catch (err) {
    //console.error("Error deleting student:", err);
    return res.status(500).json({ message: "Server error while deleting student" });
  }
};


// const AdmissionNoRollNoSequance = async (req, res) => {
//   try {
//     const { classId, sessionId } = req.query;

//     const lastStudent = await Student.find({ Classs: classId, sessionId })
//       .sort({ AdmissionNum: -1 }) // assuming AdmissionNum is numeric
//       .limit(1);

//     let nextAdmissionNum = 1;
//     let nextRoll = 1;

//     if (lastStudent.length > 0) {
//       nextAdmissionNum = parseInt(lastStudent[0].AdmissionNum) + 1;
//       nextRoll = parseInt(lastStudent[0].Roll) + 1;
//     }

//     res.status(200).json({
//       nextAdmissionNum,
//       nextRoll,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Failed to fetch next numbers" });
//   }
// }


// const AdmissionNoRollNoSequance = async (req, res) => {
//   try {
//     const { classId, sessionId } = req.query;

//     // ✅ 1. Get the highest AdmissionNum from all students (global)
//     const lastAdmission = await Student.find({})
//       .sort({ AdmissionNum: -1 })
//       .limit(1);

//     let nextAdmissionNum = 1;
//     if (lastAdmission.length > 0) {
//       nextAdmissionNum = parseInt(lastAdmission[0].AdmissionNum) + 1;
//     }

//     // ✅ 2. Get the highest Roll from class + session only (per-class roll)
//     const lastRoll = await Student.find({ Classs: classId, sessionId })
//       .sort({ Roll: -1 })
//       .limit(1);

//     let nextRoll = 1;
//     if (lastRoll.length > 0) {
//       nextRoll = parseInt(lastRoll[0].Roll) + 1;
//     }

//     return res.status(200).json({
//       nextAdmissionNum,
//       nextRoll,
//     });
//   } catch (error) {
//     console.error("Error fetching sequence numbers:", error);
//     return res.status(500).json({ message: "Failed to fetch next numbers" });
//   }
// };


//const mongoose = require("mongoose");

// const AdmissionNoRollNoSequance = async (req, res) => {
//   try {
//     const { classId, sessionId } = req.query;

//     // ✅ Get highest AdmissionNum (global)
//     const lastAdmission = await Student.find({})
//       .sort({ AdmissionNum: -1 })
//       .limit(1);

//     let nextAdmissionNum = 1;
//     if (lastAdmission.length > 0) {
//       nextAdmissionNum = parseInt(lastAdmission[0].AdmissionNum) + 1;
//     }

//     // ✅ Use aggregation to safely get max Roll for given class/session
//     const rollAgg = await Student.aggregate([
//       {
//         $match: {
//           Classs: new mongoose.Types.ObjectId(classId),
//           sessionId: new mongoose.Types.ObjectId(sessionId),
//         },
//       },
//       {
//         $addFields: {
//           rollNum: { $toInt: "$Roll" }, // convert string to int
//         },
//       },
//       { $sort: { rollNum: -1 } },
//       { $limit: 1 },
//     ]);

//     let nextRoll = 1;
//     if (rollAgg.length > 0) {
//       nextRoll = rollAgg[0].rollNum + 1;
//     }

//     return res.status(200).json({
//       nextAdmissionNum,
//       nextRoll,
//     });
//   } catch (error) {
//     console.error("Error fetching sequence numbers:", error);
//     return res.status(500).json({ message: "Failed to fetch next numbers" });
//   }
// };


// const AdmissionNoRollNoSequance = async (req, res) => {
//   try {
//     const { classId, sessionId } = req.query;

//     // ✅ Get all AdmissionNums and parse max
//     const allAdmissions = await Student.find({}, { AdmissionNum: 1 });
//     let nextAdmissionNum = 1;
//     if (allAdmissions.length > 0) {
//       const maxAdmission = Math.max(
//         ...allAdmissions.map(s => parseInt(s.AdmissionNum)).filter(n => !isNaN(n))
//       );
//       nextAdmissionNum = maxAdmission + 1;
//     }

//     // ✅ Get all Roll numbers for the class+session and parse max
//     const classRolls = await Student.find(
//       { Classs: classId, sessionId },
//       { Roll: 1 }
//     );
//     let nextRoll = 1;
//     if (classRolls.length > 0) {
//       const maxRoll = Math.max(
//         ...classRolls.map(s => parseInt(s.Roll)).filter(n => !isNaN(n))
//       );
//       nextRoll = maxRoll + 1;
//     }

//     return res.status(200).json({
//       nextAdmissionNum,
//       nextRoll,
//     });
//   } catch (error) {
//     console.error("Error fetching sequence numbers:", error);
//     return res.status(500).json({ message: "Failed to fetch next numbers" });
//   }
// };


const mongoose = require("mongoose");

//const mongoose = require("mongoose");
//const Student = require("../models/student.model");






//const mongoose = require("mongoose");
//const Student = require("../models/student.model");

const AdmissionNoRollNoSequance = async (req, res) => {
  try {
    const { classId, sessionId } = req.query;

    const classObjectId = new mongoose.Types.ObjectId(classId);
    const sessionObjectId = new mongoose.Types.ObjectId(sessionId);

    // ✅ 1. AdmissionNum → Count total students in this session
    // const totalStudentsInSession = await Student.countDocuments({
    //   sessionId: sessionObjectId,
    // });
      const totalStudentsInSession = await Student.find({session:sessionId});
      //console.log("totalStudentsInSession",totalStudentsInSession);
    const nextAdmissionNum = (totalStudentsInSession.length + 1).toString(); // keep as string

    const sessionMatch = { session: sessionId};
    // ✅ 2. Roll → Get highest roll in class+session
    // const rollAgg = await Student.aggregate([
    //   {
    //     $match: {
    //       Classs: classObjectId,
    //       sessionId: sessionObjectId,
    //       Roll: { $regex: "^[0-9]+$" }, // ensure numeric roll only
    //     },
    //   },
    //   {
    //     $addFields: {
    //       rollNum: { $toInt: "$Roll" },
    //     },
    //   },
    //   { $sort: { rollNum: -1 } },
    //   { $limit: 1 },
    // ]);


    // Get Roll No
// const rollAgg = await Student.aggregate([
//   {
//     $match: {
//       ...sessionMatch,
//       Classs: classObjectId,
//       Roll: { $regex: "^[0-9]+$" },
//     },
//   },
//   {
//     $addFields: {
//       rollNum: { $toInt: "$Roll" },
//     },
//   },
//   { $sort: { rollNum: -1 } },
//   { $limit: 1 },
// ]);
// const rollAgg = await Class.find().populate("students");
// let nextRoll = "1";
// if (rollAgg.length > 0 && rollAgg[0].rollNum) {
//   nextRoll = (rollAgg[0].rollNum + 1).toString();
// }

 const rollAgg = await Student.aggregate([
      {
        $match: {
          Classs: classObjectId,
          session: sessionObjectId,
          Roll: { $regex: "^[0-9]+$" }, // only numeric
        },
      },
      {
        $addFields: {
          rollNum: { $toInt: "$Roll" },
        },
      },
      {
        $sort: { rollNum: -1 },
      },
      {
        $limit: 1,
      },
    ]);

    let nextRoll = "1";
    if (rollAgg.length > 0) {
      nextRoll = (rollAgg[0].rollNum + 1).toString();
    }
    // const previosRoll = await Class.findById(classId);
    // console.log("previos class",previosRoll);
    // let nextRoll = "1"; // default
    // if (rollAgg.length > 0 && rollAgg[0].rollNum) {
    //   nextRoll = (rollAgg[0].rollNum + 1).toString();
    // }

    return res.status(200).json({
      nextAdmissionNum,
      nextRoll,
    });
  } catch (error) {
    console.error("Error fetching sequence numbers:", error);
    return res.status(500).json({ message: "Failed to fetch next numbers" });
  }
};



// const AdmissionNoRollNoSequance = async (req, res) => {
//   try {
//     const { classId, sessionId } = req.query;

//     // Use raw string matching for sessionId (assuming it's a string in DB)
//     const totalStudentsInSession = await Student.countDocuments({
//       sessionId: sessionId, // NOT ObjectId
//     });

//     const nextAdmissionNum = totalStudentsInSession + 1;

//     // Fix: Match by classId and sessionId (as strings)
//     const rollAgg = await Student.aggregate([
//       {
//         $match: {
//           Classs: new mongoose.Types.ObjectId(classId),
//           sessionId: sessionId, // Keep string
//           Roll: { $regex: "^[0-9]+$" }, // Only numeric Roll numbers
//         },
//       },
//       {
//         $addFields: {
//           rollNum: { $toInt: "$Roll" },
//         },
//       },
//       { $sort: { rollNum: -1 } },
//       { $limit: 1 },
//     ]);

//     let nextRoll = 1;
//     if (rollAgg.length > 0 && rollAgg[0].rollNum) {
//       nextRoll = rollAgg[0].rollNum + 1;
//     }

//     return res.status(200).json({
//       nextAdmissionNum,
//       nextRoll,
//     });
//   } catch (error) {
//     console.error("Error fetching sequence numbers:", error);
//     return res.status(500).json({ message: "Failed to fetch next numbers" });
//   }
// };

// const AdmissionNoRollNoSequance = async (req, res) => {
//   try {
//     const { classId, sessionId } = req.query;

//     // Convert to ObjectId safely
//     const classObjectId = new mongoose.Types.ObjectId(classId);
//     const sessionObjectId = new mongoose.Types.ObjectId(sessionId);

//     // ✅ 1. Get highest AdmissionNum (global)
//     const lastAdmission = await Student.find({})
//       .sort({ AdmissionNum: -1 })
//       .limit(1);

//     let nextAdmissionNum = 1;
//     if (lastAdmission.length > 0) {
//       nextAdmissionNum = parseInt(lastAdmission[0].AdmissionNum) + 1;
//     }

//     // ✅ 2. Get highest Roll for this class + session using $toInt
//     const rollAgg = await Student.aggregate([
//       {
//         $match: {
//           Classs: classObjectId,
//           sessionId: sessionObjectId,
//         },
//       },
//       {
//         $addFields: {
//           rollNum: { $toInt: "$Roll" },
//         },
//       },
//       { $sort: { rollNum: -1 } },
//       { $limit: 1 },
//     ]);

//     let nextRoll = 1;
//     if (rollAgg.length > 0) {
//       nextRoll = rollAgg[0].rollNum + 1;
//     }

//     // 🔍 Debug log (optional)
//     console.log("Last Roll Aggregated:", rollAgg);
//     console.log("Next AdmissionNum:", nextAdmissionNum);
//     console.log("Next Roll:", nextRoll);

//     return res.status(200).json({
//       nextAdmissionNum,
//       nextRoll,
//     });
//   } catch (error) {
//     console.error("Error fetching sequence numbers:", error);
//     return res.status(500).json({ message: "Failed to fetch next numbers" });
//   }
// };


//const mongoose = require("mongoose");
//const Student = require("../models/student.model");


const DeleteTeacher = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedteacher = await Teacher.findByIdAndDelete(id);

    if (!deletedteacher) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Optional: Remove the student reference from the Admin model, if applicable
    await Admin.updateOne(
      { teachers: id },
      { $pull: { teachers: id } }
    );

    return res.status(200).json({
      message: "Student deleted successfully",
      teacher: deletedteacher
    });
  } catch (err) {
    //console.error("Error deleting student:", err);
    return res.status(500).json({ message: "Server error while deleting Teacher" });
  }
};





// const UpdateStudent = async (req, res) => {
//   const { id } = req.params;
//   const updatedData = req.body;

//   try {
//     // Check if student exists
//     const existingStudent = await Student.findById(id);
//     if (!existingStudent) {
//       return res.status(404).json({ message: "Student not found" });
//     }

//     // Sanitize the class field if it's a string
//     if (updatedData.class && typeof updatedData.class === 'string') {
//       // Assuming 'class' is meant to be a grade (e.g., "grade 4"), ensure it's a string
//       updatedData.class = updatedData.class.trim();  // Clean up spaces, etc.
//     }

//     // Update all fields passed from frontend
//     const updatedStudent = await Student.findByIdAndUpdate(
//       id,
//       { $set: updatedData },
//       { new: true, runValidators: true }
//     );

//     return res.status(200).json({
//       message: "Student updated successfully",
//       student: updatedStudent
//     });
//   } catch (err) {
//     console.error("Error in UpdateStudent:", err);
//     return res.status(500).json({ message: "Server error while updating student" });
//   }
// };










// Add Exam Time Table;

// Create Exam Schedule
const ExamTimetable =  async (req, res) => {
  try {
    const { class: className, subjects } = req.body;

    // Find class by name
    const classDoc = await Class.findOne({ name: className });
    if (!classDoc) return res.status(400).json({ error: 'Class not found' });

    // Convert subjects to use IDs
    const subjectsWithIds = await Promise.all(subjects.map(async (item) => {
      const subjectDoc = await Subject.findOne({ name: item.subject });
      if (!subjectDoc) throw new Error(`Subject "${item.subject}" not found`);

      return {
        subject: subjectDoc._id,
        date: item.date,
        startTime: item.startTime,
        endTime: item.endTime,
        venue: item.venue,
      };
    }));

    // Create exam schedule
    const examSchedule = new ExamSchedule({
      class: classDoc._id,
      subjects: subjectsWithIds,
    });
    await examSchedule.save();
    classDoc.examSchedule.push(examSchedule);
    await classDoc.save();
    res.status(201).json(examSchedule);
  } catch (err) {
    // console.log("erron on backend examSchedule",err.message)
    res.status(400).json({ error: err.message });
  }
}




// const UpdateStudent = async (req, res) => {
//   const { id } = req.params;
//   const updatedData = req.body;
// console.log("updatedData",req.body);
//   try {
//     // Check if student exists
//     const existingStudent = await Student.findById(id);
//     if (!existingStudent) {
//       return res.status(404).json({ message: "Student not found" });
//     }

//     // If 'class' is a string (e.g., "grade 4"), we need to look up the corresponding Class ObjectId
//     if (updatedData.Classs && typeof updatedData.Classs === 'string') {
//       // Find the Class by name (assuming 'class' is the grade name like "grade 4")
//       const classObj = await Class.findOne({ name: updatedData.Classs.trim() });
      
//       if (!classObj) {
//         return res.status(404).json({ message: "Class not found" });
//       }

//       // Replace the 'class' field with the corresponding ObjectId of the Class
//       updatedData.Classs = classObj._id; // Make sure 'Classs' is the correct field in your model
//       delete updatedData.Classs; // Remove the original 'class' field as it's no longer needed
//     }
//     // Update the student with the new data
//     const updatedStudent = await Student.findByIdAndUpdate(
//       id,
//       { $set: updatedData },
//       { new: true, runValidators: true }
//     );

//     return res.status(200).json({
//       message: "Student updated successfully",
//       student: updatedStudent
//     });
//   } catch (err) {
//     console.error("Error in UpdateStudent:", err);
//     return res.status(500).json({ message: "Server error while updating student" });
//   }
// };



const UpdateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = JSON.parse(req.body.data);

    // Optional: Convert class name to ObjectId
    if (updatedData.Classs && typeof updatedData.Classs === 'string') {
      const classDoc = await Class.findOne({ name: updatedData.Classs.trim() });
      if (!classDoc) {
        return res.status(404).json({ message: "Class not found" });
      }
      updatedData.Classs = classDoc._id;
    }

    // Handle profile image
    if (req.files?.profileImage) {
      updatedData.profileImage = {
        data: req.files.profileImage[0].buffer,
        contentType: req.files.profileImage[0].mimetype
      };
    }

    // Handle CNIC images (if relevant for students)
    if (req.files?.CnicFrontImage) {
      updatedData.CnicFrontImage = {
        data: req.files.CnicFrontImage[0].buffer,
        contentType: req.files.CnicFrontImage[0].mimetype
      };
    }

    if (req.files?.CnicBackImage) {
      updatedData.CnicBackImage = {
        data: req.files.CnicBackImage[0].buffer,
        contentType: req.files.CnicBackImage[0].mimetype
      };
    }

    // Hash password if updated
    if (updatedData.password) {
      const salt = await bcrypt.genSalt(10);
      updatedData.password = await bcrypt.hash(updatedData.password, salt);
    }

    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      updatedData,
      { new: true, runValidators: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    return res.status(200).json({
      message: "Student updated successfully",
      student: updatedStudent
    });

  } catch (err) {
    console.error("Error in UpdateStudent:", err);
    return res.status(500).json({ message: "Server error while updating student", error: err.message });
  }
};




const AssignTeacherSubject = async (req, res) => {
  const { teacherId } = req.params;
  const { subject } = req.body;

  if (!subject || !subject._id || !subject.name) {
    return res.status(400).json({ message: 'Invalid subject data.' });
  }

  try {
    const teacher = await Teacher.findById(teacherId);
    if (!teacher) return res.status(404).json({ message: 'Teacher not found.' });

    const alreadyAssigned = teacher.teachSubject.some(
      (subj) => subj._id.toString() === subject._id
    );

    if (!alreadyAssigned) {
      teacher.teachSubject.push({
        _id: subject._id,
        name: subject.name,
      });

      await teacher.save();
    }

    return res.status(200).json({ message: 'Subject assigned successfully.' });
  } catch (err) {
    console.error('Error assigning subject:', err);
    return res.status(500).json({ message: 'Internal server error.' });
  }
}

/*const UpdateTeacher = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    // Check if student exists
    const existTeacher = await Teacher.findById(id);
    if (!existTeacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }

    // Update all fields passed from frontend
    const updatedTeacher = await Teacher.findByIdAndUpdate(
      id,
      { $set: updatedData },
      { new: true, runValidators: true }
    );

    return res.status(200).json({
      message: "Student updated successfully",
      teacher: updatedTeacher
    });
  } catch (err) {
    console.error("Error in UpdateStudent:", err);
    return res.status(500).json({ message: "Server error while updating Teacher" });
  }
};*/


const UpdateTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    //let updateData = req.body;
 const updateData = JSON.parse(req.body.data);
    // Convert assignedClass from name to ObjectId if present
    // if (updateData.assignedClass && typeof updateData.assignedClass === "string") {
    //   const classDoc = await Class.findOne({ name: updateData.assignedClass });
    //   if (!classDoc) {
    //     return res.status(400).json({ message: "Class not found: " + updateData.assignedClass });
    //   }
    //   updateData.assignedClass = classDoc._id;
    // }
//     if (updateData.assignedClass && Array.isArray(updateData.assignedClass)) {
//   updateData.assignedClass = await Promise.all(
//     updateData.assignedClass.map(async (classId) => {
//       return {
//         class: classId,
//         incharge: updateData.incharge || false // or get per-class incharge status
//       };
//     })
//   );
// }

// if (updateData.assignedClass && Array.isArray(updateData.assignedClass)) {
//   updateData.assignedClass = updateData.assignedClass.map(classId => ({
//     class: classId,
//     incharge: updateData.incharge || false
//   }));
// }

if (updateData.assignedClass && Array.isArray(updateData.assignedClass)) {
  updateData.assignedClass = updateData.assignedClass.map(item => {
    if (typeof item === 'object' && item.class) {
      return {
        class: item.class,
        incharge: item.incharge || false
      };
    }
    return {
      class: item,
      incharge: updateData.incharge || false
    };
  });
}



//     if (updateData.teachSubject && Array.isArray(updateData.teachSubject)) {
//   updateData.teachSubject = await Subject.find({
//     name: { $in: updateData.teachSubject }
//   }).select('_id'); // or convert if you're already sending IDs
// }

if (updateData.teachSubject && Array.isArray(updateData.teachSubject)) {
  const validSubjects = await Subject.find({ _id: { $in: updateData.teachSubject } }).select('_id');
  updateData.teachSubject = validSubjects.map(s => s._id);
}


if (req.files?.CnicFrontImage) {
  updateData.CnicFrontImage = {
    data: req.files.CnicFrontImage[0].buffer,
    contentType: req.files.CnicFrontImage[0].mimetype
  };
}
if (req.files?.CnicBackImage) {
  updateData.CnicBackImage = {
    data: req.files.CnicBackImage[0].buffer,
    contentType: req.files.CnicBackImage[0].mimetype
  };
}


     // ✅ Handle profile image if uploaded
   // ✅ Handle profile image if uploaded
if (req.files?.profileImage) {
  updateData.profileImage = {
    data: req.files.profileImage[0].buffer,
    contentType: req.files.profileImage[0].mimetype
  };
}

// ✅ Hash password if provided
if (updateData.password) {
  const salt = await bcrypt.genSalt(10);
  updateData.password = await bcrypt.hash(updateData.password, salt);
}


    // Optional: Validate name/email/phone etc. here if needed

    const updatedTeacher = await Teacher.findOneAndUpdate(
      { _id: id },
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedTeacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }

    return res.status(200).json({
      message: "Teacher updated successfully",
      teacher: updatedTeacher
    });

  } catch (err) {
    console.error("Error in UpdateTeacher:", err);
    return res.status(500).json({
      message: "Server error while updating teacher",
      error: err.message
    });
  }
};


module.exports = {
  ExamTimetable,
  UpdateStudent,
  AssignTeacherSubject,
  DeleteStudent,
  UpdateTeacher,
  AdmissionNoRollNoSequance,
  DeleteTeacher,
  getAdminProfile,
};
