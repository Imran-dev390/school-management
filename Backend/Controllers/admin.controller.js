const Admin = require("../models/admin.model");
const Student = require("../models/student.model");
const Teacher = require("../models/teacher.model");
const Class = require("../models/class.model");
const Subject = require("../models/Subjects.model")
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
    const admin = await Admin.findOne({_id: req.userId}).populate("sessions") // Replace with dynamic `req.user.email` or `req.userId`
      .lean(); // use lean() to make the doc plain JS object

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // STEP 2: Manually fetch and populate students with Class
    const populatedStudents = await Student.find({ _id: { $in: admin.students } })
      .populate("Classs")
      .lean();

    // STEP 3: Manually fetch and populate teachers with teachSubject and assignedClass
    const populatedTeachers = await Teacher.find({ _id: { $in: admin.teachers } })
      .populate("teachSubject")
      .populate("assignedClass")
      .lean();

    // STEP 4: Populate classes and subjects
    const populatedClasses = await Class.find({ _id: { $in: admin.classes } })
  .populate("subjects")
  .populate("teacher")
  .populate("students")
  .lean();

    const populatedSubjects = await Subject.find({ _id: { $in: admin.subjects } })
    .populate("")
    .lean();

    // STEP 5: Assemble final admin object with all populated fields
    const fullAdminProfile = {
      ...admin,
      students: populatedStudents,
      teachers: populatedTeachers,
      classes: populatedClasses,
      subjects: populatedSubjects,
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
    console.error("Error deleting student:", err);
    return res.status(500).json({ message: "Server error while deleting student" });
  }
};



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
    console.error("Error deleting student:", err);
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















const UpdateStudent = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
console.log("updatedData",req.body);
  try {
    // Check if student exists
    const existingStudent = await Student.findById(id);
    if (!existingStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    // If 'class' is a string (e.g., "grade 4"), we need to look up the corresponding Class ObjectId
    if (updatedData.Classs && typeof updatedData.Classs === 'string') {
      // Find the Class by name (assuming 'class' is the grade name like "grade 4")
      const classObj = await Class.findOne({ name: updatedData.Classs.trim() });
      
      if (!classObj) {
        return res.status(404).json({ message: "Class not found" });
      }

      // Replace the 'class' field with the corresponding ObjectId of the Class
      updatedData.Classs = classObj._id; // Make sure 'Classs' is the correct field in your model
      delete updatedData.Classs; // Remove the original 'class' field as it's no longer needed
    }

    // Update the student with the new data
    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      { $set: updatedData },
      { new: true, runValidators: true }
    );

    return res.status(200).json({
      message: "Student updated successfully",
      student: updatedStudent
    });
  } catch (err) {
    console.error("Error in UpdateStudent:", err);
    return res.status(500).json({ message: "Server error while updating student" });
  }
};


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
    let updateData = req.body;

    // Convert assignedClass from name to ObjectId if present
    if (updateData.assignedClass && typeof updateData.assignedClass === "string") {
      const classDoc = await Class.findOne({ name: updateData.assignedClass });
      if (!classDoc) {
        return res.status(400).json({ message: "Class not found: " + updateData.assignedClass });
      }
      updateData.assignedClass = classDoc._id;
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
  UpdateStudent,
  DeleteStudent,
  UpdateTeacher,
  DeleteTeacher,
  getAdminProfile,
};
