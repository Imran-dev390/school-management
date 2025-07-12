const mongoose = require('mongoose');
const Student = require('../models/student.model');
const Session = require("../models/Session.model");
const Class = require("../models/class.model");
// const PromoteStudents = async (req, res) => {
//   try {
//     const { students, toClass, session: newSessionId } = req.body;

//     if (!Array.isArray(students) || students.length === 0) {
//       return res.status(400).json({ message: "No students selected." });
//     }

//     if (!mongoose.Types.ObjectId.isValid(toClass) || !mongoose.Types.ObjectId.isValid(newSessionId)) {
//       return res.status(400).json({ message: "Invalid class or session ID." });
//     }

//     // Add students to the new session (without removing from old sessions)
//     await Session.findByIdAndUpdate(
//       newSessionId,
//       { $addToSet: { Students: { $each: students } } }
//     );

//     // Update students' current class
//     await Student.updateMany(
//       { _id: { $in: students } },
//       { $set: { Classs: toClass } }
//     );

//     // Update sessionHistory for audit trail - avoiding duplicates
//     await Promise.all(
//       students.map(studentId => 
//         Student.findByIdAndUpdate(studentId, {
//           $addToSet: {
//             sessionHistory: {
//               session: newSessionId,
//               classId: toClass,
//             }
//           }
//         })
//       )
//     );

//     return res.status(200).json({ message: "Students promoted successfully." });
//   } catch (err) {
//     console.error("Promotion error:", err);
//     return res.status(500).json({ message: "Server error during promotion." });
//   }
// }



// const PromoteStudents = async (req, res) => {
//   try {
//     const { students, toClass, session: newSessionId } = req.body;

//     if (!Array.isArray(students) || students.length === 0) {
//       return res.status(400).json({ message: "No students selected." });
//     }

//     if (
//       !mongoose.Types.ObjectId.isValid(toClass) ||
//       !mongoose.Types.ObjectId.isValid(newSessionId)
//     ) {
//       return res.status(400).json({ message: "Invalid class or session ID." });
//     }

//     // Add students to new session
//     await Session.findByIdAndUpdate(newSessionId, {
//       $addToSet: { Students: { $each: students } },
//     });

//     // Update student's current class and session
//     await Student.updateMany(
//       { _id: { $in: students } },
//       {
//         $set: {
//           Classs: toClass,
//           session: newSessionId, // ✅ keep current session updated
//         },
//       }
//     );

//     // Update sessionHistory
//     await Promise.all(
//       students.map((studentId) =>
//         Student.findByIdAndUpdate(studentId, {
//           $addToSet: {
//             sessionHistory: {
//               session: newSessionId,
//               classId: toClass,
//               promotedAt: new Date(), // ✅ optional timestamp
//             },
//           },
//         })
//       )
//     );

//     return res.status(200).json({ message: "Students promoted successfully." });
//   } catch (err) {
//     console.error("Promotion error:", err);
//     return res.status(500).json({ message: "Server error during promotion." });
//   }
// };





// const PromoteStudents = async (req, res) => {
//   try {
//     const { students, toClass, session: newSessionId } = req.body;

//     if (!Array.isArray(students) || students.length === 0) {
//       return res.status(400).json({ message: "No students selected." });
//     }

//     if (
//       !mongoose.Types.ObjectId.isValid(toClass) ||
//       !mongoose.Types.ObjectId.isValid(newSessionId)
//     ) {
//       return res.status(400).json({ message: "Invalid class or session ID." });
//     }

//     // Fetch the session to check if students are already in it
//     const sessionDoc = await Session.findById(newSessionId).select("Students");

//     if (!sessionDoc) {
//       return res.status(404).json({ message: "Session not found." });
//     }

//     // Check for already-promoted students
//     const alreadyPromoted = students.filter((id) =>
//       sessionDoc.Students.includes(id)
//     );

//     if (alreadyPromoted.length > 0) {
//       return res.status(400).json({
//         message: "Some students have already been promoted to this session.",
//         alreadyPromoted, // Optional: return their IDs
//       });
//     }

//     // ✅ Add students to new session
//     await Session.findByIdAndUpdate(newSessionId, {
//       $addToSet: { Students: { $each: students } },
//     });

//     // ✅ Update student current class and session
//     await Student.updateMany(
//       { _id: { $in: students } },
//       {
//         $set: {
//           Classs: toClass,
//           session: newSessionId,
//         },
//       }
//     );

//     // ✅ Update sessionHistory
//     await Promise.all(
//       students.map((studentId) =>
//         Student.findByIdAndUpdate(studentId, {
//           $addToSet: {
//             sessionHistory: {
//               session: newSessionId,
//               classId: toClass,
//               promotedAt: new Date(),
//             },
//           },
//         })
//       )
//     );

//     return res.status(200).json({ message: "Students promoted successfully." });
//   } catch (err) {
//     console.error("Promotion error:", err);
//     return res.status(500).json({ message: "Server error during promotion." });
//   }
// };

























const PromoteStudents = async (req, res) => {
  try {
    const { students, toClass, session: newSessionId } = req.body;

    if (!Array.isArray(students) || students.length === 0) {
      return res.status(400).json({ message: "No students selected." });
    }

    if (
      !mongoose.Types.ObjectId.isValid(toClass) ||
      !mongoose.Types.ObjectId.isValid(newSessionId)
    ) {
      return res.status(400).json({ message: "Invalid class or session ID." });
    }

    // 1. ✅ Fetch destination class with name and section
    const destinationClass = await Class.findById(toClass).select("name section");
    if (!destinationClass) {
      return res.status(404).json({ message: "Destination class not found." });
    }

    // 2. ✅ Fetch current class of each student (with name + section)
    const studentDocs = await Student.find({ _id: { $in: students } }).populate({
      path: "Classs",
      select: "name section",
    });

    // 3. ✅ Check if all students are already in the same class + section
    // const allInSameClassAndSection = studentDocs.every(
    //   (student) =>
    //     student.Classs &&
    //     student.Classs.name === destinationClass.name &&
    //     student.Classs.section === destinationClass.section
    // );
const destinationClassId = destinationClass._id.toString();
const allInSameClassAndSection = studentDocs.every(
  (student) => student.Classs && student.Classs._id.toString() === destinationClassId
);

if (allInSameClassAndSection) {
  return res.status(400).json({
    message: `Cannot promote: all selected students are already in ${destinationClass.name} - ${destinationClass.section}`,
  });
}

    // if (allInSameClassAndSection) {
    //   return res.status(400).json({
    //     message: "Cannot promote to the same class and section.",
    //   });
    // }

    // 4. ✅ Check if session exists
    const sessionDoc = await Session.findById(newSessionId).select("Students");
    if (!sessionDoc) {
      return res.status(404).json({ message: "Session not found." });
    }

    // 5. ✅ Check for already-promoted students
    const alreadyPromoted = students.filter((id) =>
      sessionDoc.Students.includes(id)
    );

    if (alreadyPromoted.length > 0) {
      return res.status(400).json({
        message: "Some students have already been promoted to this session.",
        alreadyPromoted,
      });
    }

    // 6. ✅ Add students to session
    await Session.findByIdAndUpdate(newSessionId, {
      $addToSet: { Students: { $each: students } },
    });

    // 7. ✅ Update student class + session
    await Student.updateMany(
      { _id: { $in: students } },
      {
        $set: {
          Classs: toClass,
          session: newSessionId,
        },
      }
    );

    // 8. ✅ Update session history
    await Promise.all(
      students.map((studentId) =>
        Student.findByIdAndUpdate(studentId, {
          $addToSet: {
            sessionHistory: {
              session: newSessionId,
              classId: toClass,
              promotedAt: new Date(),
            },
          },
        })
      )
    );

    return res.status(200).json({ message: "Students promoted successfully." });
  } catch (err) {
    console.error("Promotion error:", err);
    return res.status(500).json({ message: "Server error during promotion." });
  }
};

module.exports = PromoteStudents;

