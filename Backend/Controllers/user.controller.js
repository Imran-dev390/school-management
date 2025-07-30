const User = require("../models/student.model");
const mongoose = require('mongoose');
const Teacher = require("../models/teacher.model");
//let id = req.userId;
//console.log("user Id", id);
const Admin = require("../models/admin.model");

const Staff = require("../models/addStaff.model");
const Role = require("../models/Role.model");
// const getCurrentUser = async function(req,res){
//   // user is getting Null Why i am reciving the req.userId from id variable
//   try {
//   let id = req.userId;
//  // console.log("requeste User Id",req.userId);
// const user = await User.findOne({ _id: req.userId })
//   .select("-password")
//   .populate("session")
//   .populate({
//     path:"leave",
//     populate:{
//       path:"Class",
//       select:"name section"
//     }
//   })
//   .populate({
//     path: "feeVouchers",
//     populate: {
//       path: "feeType",
//       select: "name", // optional: only get the name field
//     },
//   })
//   .populate({
//     path: "Classs",
//     populate: [
//       {
//         path: "announcements",
//         model: "Announcement"
//       },
//       {
//         path: "timeTable",
//         model: "Timetable",
//         populate: {
//           path: "periods.subject",  // assuming periods is an array of objects with subject refs
//           model: "Subject",
//           select: "name  periodNumber"
//         },
//         select: "day periods time "
//       },
//       {
//         path: "teacher",
//         model: "Teacher",
//         populate: [
//           {
//             path: "assignedClass",
//             // model: "Class" // optional
//           },
//           {
//             path: "announcements",
//             model: "Announcement",
//             select: "title message classes name"
//           },
//           {
//             path: "teachSubject",
//             model: "Subject",
//             select: "name"
//           }
//         ]
//       }
//     ]
//   })
//   .setOptions({ strictPopulate: false });
// const userRole = req.id;
// const role = userRole;
// //console.log("current Role",role);
//   //  console.log("🧪 user with findOne:", user); 
//      const admin = await Admin.findOne({_id:req.userId}).select("-password");
//    //  console.log("🧪 admin with findOne:", admin);
//     // const accountant = await Staff.findOne({_id:req.userId}).select("-password");
//     const accountant = await Staff.findOne({ _id: req.userId, role: "Accountant" }).select("-password"); 
//    // console.log("accountant",accountant);
// //    const teacher = await Teacher.findOne({ _id: req.userId })
// //    .select("-password")
// //    .populate("teachSubject")
// //    /*.populate({
// //      path: "assignedClass.class",
// //      populate: [
// //        {
// //          path: "timeTable",
// //          model: "Timetable",
// //        },
// //        {
// //          path: "students",
// //          model: "Student",
// //          select: "name phone leave",
// //          populate: {
// //            path: "leave",
// //            model: "Leave",
// //            select: "date leave"
// //          }
// //        },
// //        {
// //          path: "subjects",
// //          select: "name"
// //        }
// //      ]
// //    });*/

// //    .populate({
// //   path: "assignedClass.class",
// //   model: "class",
// //   populate: [
// //     {
// //       path: "students",
// //       model: "Student",
// //       select: "name phone leave",
// //       populate: {
// //         path: "leave",
// //         model: "Leave",
// //         select: "date leave"
// //       }
// //     },
// //     {
// //       path: "timeTable",
// //       model: "Timetable"
// //     },
// //     {
// //       path: "subjects",
// //       model: "Subject",
// //       select: "name"
// //     }
// //   ]
// // })


// //  const teacher = await Teacher.findOne({ _id: req.userId })
// //    .select("-password")
// //    .populate("teachSubject")
// //    .populate({
// //      path: "assignedClass.class",
// //      model: "class",
// //      populate: [
// //        {
// //          path: "students",
// //          model: "Student",
// //          select: "name phone leave",
// //          populate: {
// //            path: "leave",
// //           // model: "Leave",
// //            select: "date leave"
// //          }
// //        },
// //        {
// //          path: "timeTable",
// //          model: "Timetable"
// //        },
// //        {
// //          path: "subjects",
// //          model: "Subject",
// //          select: "name"
// //        }
// //      ]
// //    });



// const teacher = await Teacher.findOne({ _id: req.userId })
//   .select("-password")
//   .populate("teachSubject")
//   .populate({
//     path: "assignedClass.class",
//     populate: [
//       {
//         path: "students",
//         select: "name phone leave",
//         populate: {
//           path: "leave",
//           select: "date leave"
//         }
//       },
//       {
//         path: "timeTable"
//       },
//       {
//         path: "subjects",
//         select: "name"
//       }
//     ]
//   });



// // const teacher = await Teacher.findOne({ _id: req.userId })
// //   .select("-password")
// //   .populate("teachSubject")
// //   .populate({
// //     path: "assignedClass.class",
// //     populate: [
// //       {
// //         path: "students",
// //         select: "name phone Leave",
// //         populate: {
// //           path: "leave",
// //           select: "date leave"
// //         }
// //       },
// //       {
// //         path: "timeTable"
// //       },
// //       {
// //         path: "subjects",
// //         select: "name"
// //       }
// //     ]
// //   });


//   // const teacher = await Teacher.findOne({ _id: req.userId })
//   // .select("-password")
//   // .populate("teachSubject")
//   // .populate({
//   //   path: "assignedClass",
//   //   populate: [
//   //     {
//   //       path: "timeTable",
//   //       model: "Timetable"
//   //     },
//   //     {
//   //       path: "students",
//   //       model: "Student",
//   //       select: "name phone leave",
//   //       populate: {
//   //         path: "leave",
//   //         model: "Leave",
//   //         select: "date leave"
//   //       }
//   //     },
//   //     {
//   //       path: "subjects",
//   //       select: "name"
//   //     }
//   //   ]
//   // }).exec(); // <- this ensures full population
//  //   console.log("🧪 teacher with findOne:", teacher);
//     if (!req.userId) {
//       return res.status(400).json({ message: "User ID is missing" });
//     }
//  if(user){      
//  return res.status(200).json(user);
//  } 
//  if(teacher){
//   return res.status(200).json(teacher);
//  }
//  if(admin){
// return res.status(200).json(admin);
//  }
//  if(accountant){
//   return res.status(200).json(accountant);
//  }
// }
//   catch(err){
//  console.log("User Controller Error",err);
//  res.status(401).json("Error")
//   }
// }









































const getCurrentUser = async function(req, res) {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(400).json({ message: "User ID is missing" });
    }

    // Try to find the user in all collections
    const user = await User.findOne({ _id: userId })
      .select("-password")
      .populate("session")
      .populate({
        path: "leave",
        populate: {
          path: "Class",
          select: "name section"
        }
      })
      .populate({
        path: "feeVouchers",
        populate: {
          path: "feeType",
          select: "name"
        }
      })
      .populate({
        path: "Classs",
        populate: [
          {
            path: "announcements",
            model: "Announcement"
          },
          {
            path: "timeTable",
            model: "Timetable",
            populate: {
              path: "periods.subject",
              model: "Subject",
              select: "name periodNumber"
            },
            select: "day periods time"
          },
          {
            path: "teacher",
            model: "Teacher",
            populate: [
              {
                path: "assignedClass"
              },
              {
                path: "announcements",
                model: "Announcement",
                select: "title message classes name"
              },
              {
                path: "teachSubject",
                model: "Subject",
                select: "name"
              }
            ]
          }
        ]
      })
      .setOptions({ strictPopulate: false });

    const admin = await Admin.findOne({ _id: userId }).select("-password");

    const accountant = await Staff.findOne({ _id: userId, role: "Accountant" }).select("-password");

    // const teacher = await Teacher.findOne({ _id: userId })
    //   .select("-password")
    //   .populate("teachSubject")
    //   .populate({
    //     path: "assignedClass.class",
    //     populate:{
    //       path:"attendance",
    //       select:"date status",
    //     },
    //     populate: [
    //       {
    //         path: "students",
    //         select: "name phone leave Classs gender email Roll parent",
    //         populate:{
    //           path:"Classs",
    //           select:"name section"
    //         },
    //         populate: {
    //           path: "leave",
    //           select: "date leave"
    //         }
    //       },
    //       {
    //         path: "timeTable"
    //       },
    //       {
    //         path: "subjects",
    //         select: "name"
    //       }
    //     ]
    //   });


    const teacher = await Teacher.findOne({ _id: userId })
  .select("-password")
  .populate("teachSubject")
  .populate({
    path: "assignedClass.class",
    populate: [
      {
        path: "attendance",
        select: "date status"
      },
      {
        path: "students",
        select: "name phone leave Classs gender email Roll parent",
        populate: [
          {
            path: "Classs",
            select: "name section"
          },
          {
            path: "leave",
            select: "date leave"
          }
        ]
      },
     {
  path: "timeTable",
  populate: {
    path: "periods.teacher periods.subject",
    select: "name email gender"
  }
},

      {
        path: "subjects",
        select: "name"
      }
    ]
  });


    // Now determine which user matched
    let currentUser = null;
    let roleName = "";
    if (user) {
      currentUser = user;
      roleName = "Student";
    } else if (teacher) {
      currentUser = teacher;
      roleName = "Teacher";
    } else if (accountant) {
      currentUser = accountant;
      roleName = "Accountant";
    } else if (admin) {
      currentUser = admin;
      roleName = "Admin";
    }

    if (!currentUser) {
      return res.status(404).json({ message: "User not found" });
    }

   // Now check permissions only for Teacher or Accountant
    // let rolePermissions = [];
    // if (["Teacher", "Accountant"].includes(roleName)) {
    //   const roleDoc = await Role.findOne({ name: roleName });
    //   rolePermissions = roleDoc?.permissions || [];
    // }

    // return res.status(200).json({
    //   ...currentUser.toObject(),
    //   role: roleName,
    //   permissions: rolePermissions
    // });
    let rolePermissions = [];

// Make check case-insensitive
const normalizedRoleName = roleName?.toLowerCase();
if (["teacher", "accountant"].includes(normalizedRoleName)) {
  // Find role in DB regardless of casing
  const roleDoc = await Role.findOne({
    name: { $regex: new RegExp(`^${roleName}$`, 'i') }
  });
  rolePermissions = roleDoc?.permissions || [];

  // Optional: normalize to DB casing if you want consistency
  //roleName = roleDoc?.name || roleName;
}

return res.status(200).json({
  ...currentUser.toObject(),
  role: roleName, // Capitalized as stored in DB
  permissions: rolePermissions
});


  } catch (err) {
    console.log("User Controller Error", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = getCurrentUser;