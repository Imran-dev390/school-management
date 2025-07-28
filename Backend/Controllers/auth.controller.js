const User = require("../models/student.model");
const Jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Teacher = require("../models/teacher.model");
const Class = require("../models/class.model");
//const User = require("../models/student.model");
//const Session = require("../models/Session.model");
const Session = require("../models/Session.model");
const Staff = require("../models/addStaff.model");
const Timetable = require('../models/timetable.model');
const Admin = require("../models/admin.model");
const Leave = require("../models/Leave.model");
const updateClassGenderCount = require("../utils/updateClassGenderCount");
const upload = require("../middlewares/upload");
const Subjects = require("../models/Subjects.model");
const Student = require("../models/student.model");
const Subject = require("../models/Subjects.model");
const FeeType = require("../models/FeeType.model");
const FeeVoucher = require("../models/FeeVoucher.model");
const generateFeeVoucherPDF = require("../utils/pdfGenerator");
const Role = require('../models/Role.model');






























































// const AddStudent = async (req, res) => {
//   const mongoose = require("mongoose");
//   const { 
//     name, email, password,AdmissionNum,Roll,phone, gender, dob, adress, parent, 
//    Classs: classId, prevschoolName,prevClass,prevSchoolAddress, 
//     bformNumber, CnicNumber, feesPaid ,sessionId,concession
//   } = req.body;
//   try {
//     if (!mongoose.Types.ObjectId.isValid(sessionId)) {
//   return res.status(400).json({ message: "Invalid session ID format" });
// }

// const session = await Session.findById(sessionId);
// if (!session) {
//   return res.status(404).json({ message: "Session Not Found" });
// }
//     if (!mongoose.Types.ObjectId.isValid(classId)) {
//       return res.status(400).json({ message: "Invalid class ID format" });
//     }
//     // Check if email or phone already exists
//     // const existingEmail = await User.findOne({ email });
//     const existingPhone = await User.findOne({ phone });
//     const existingRoll = await User.findOne({Roll});
//     const existingAdmissionNumber = await User.findOne({AdmissionNum});
//      const isEmailTaken = require("../middlewares/checkisEmailUnique");
// if (await isEmailTaken(email)) {
//   return res.status(401).json({ message: 'This email is already used by another user role' });
// }
//     if(!Roll | !AdmissionNum){
//       return res.status(401).json({message:"Roll No or Admission is Required!"})
//     }
//     if(existingRoll){
//       return res.status(401).json({message:"Roll is Already Taken!"})
//     }
//     if(existingAdmissionNumber){
//       return res.status(401).json({message:"AdmissionNumber is Already Taken!"})
//     }
//     if (existingPhone) {
//       return res.status(401).json({ message: 'User already registered with this Contact Number' });
//     }

//     // Check class existence
//     const enteredClassMatch = await Class.findById(classId);
//     if (!enteredClassMatch) {
//       return res.status(404).json({ message: "Entered Class Not Found in System." });
//     }

//     // Handle image buffers from multer (files are expected to have same field names)
//     const profileImage = req.files?.profileImage?.[0];
//     const CnicFrontImage = req.files?.CnicFrontImage?.[0];
//     const CnicBackImage = req.files?.CnicBackImage?.[0];
//     const bformImage = req.files?.bformImage?.[0];

//     const hashedPass = await bcrypt.hash(password, 10);

//     let user = await User.create({
//       name,
//       email,
//       password: hashedPass,
//       AdmissionNum,
//       Roll,
//       phone,
//       gender,
//       dob,
//       adress,
//       parent,
//       Classs: enteredClassMatch._id,
//       prevschoolName,
//       prevClass,
//       prevSchoolAddress,
//       bformNumber,
//       CnicNumber,
//       feesPaid: feesPaid || null,
//       session: session._id,
//       concession,

//       // Images as Buffer
//       profileImage: profileImage ? {
//         data: profileImage.buffer,
//         contentType: profileImage.mimetype,
//       } : undefined,

//       CnicFrontImage: CnicFrontImage ? {
//         data: CnicFrontImage.buffer,
//         contentType: CnicFrontImage.mimetype,
//       } : undefined,

//       CnicBackImage: CnicBackImage ? {
//         data: CnicBackImage.buffer,
//         contentType: CnicBackImage.mimetype,
//       } : undefined,

//       bformImage: bformImage ? {
//         data: bformImage.buffer,
//         contentType: bformImage.mimetype,
//       } : undefined,
//     });

//     await user.populate("Classs");
//     enteredClassMatch.students.push(user._id);
//     await enteredClassMatch.save();

//     const admin = await Admin.findById(req.userId);
//     if (!admin) {
//       return res.status(404).json({ message: "Admin Not Found" });
//     }
//      session.Students.push(user._id);
//      await session.save();
//     admin.students.push(user._id);
//     await admin.save();
//     await updateClassGenderCount(classId);
//     return res.status(201).json(user);
//   } catch (err) {
//     console.error("Signup error:", err.message);
//    // return res.status(500).json({message:err.message});
//    return res.status(500).json({ 
//   message: err.message,
//   ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
// });

//   }
// };


























































// const AddClass = async (req, res) => {
//   const { name,section} = req.body;
//   try {
//     // 1. Normalize inputs to avoid duplicates due to case or whitespace
//     const normalizedName = name.trim();
//     const normalizedSection = section.trim().toUpperCase();

//     // 2. Allow same name (grade) but NOT same section+name in same year
//     const duplicateClass = await Class.findOne({
//       name: normalizedName,
//       section: normalizedSection,
//       year
//     });

//     if (duplicateClass) {
//       return res.status(409).json({
//         message: `Section "${normalizedSection}" for "${normalizedName}" in year ${year} already exists.`
//       });
//     }

//     // 3. Verify admin user
//     const admin = await Admin.findById(req.userId);
//     if (!admin) {
//       return res.status(401).json({ message: "Only an admin can add a class." });
//     }

//     // 4. Create the new class
//     const newClass = await Class.create({
//       name: normalizedName,
//       section: normalizedSection,
//       year,
//     });

//     // 5. Link class to admin
//     admin.classes.push(newClass._id);
//     await admin.save();

//     return res.status(201).json(newClass);
//   } catch (err) {
//     console.error("Error in AddClass:", err.message);
//     return res.status(500).json({ message: "Internal server error while adding class." });
//   }
// };








// const AddClass = async (req, res) => {
//   const { name, section } = req.body;

//   try {
//     // 1. Get active session
// await Session.updateMany({}, { isActive: false }); // deactivate others
// await Session.findByIdAndUpdate(sessionIdToActivate, { isActive: true });
//     const activeSession = await Session.findOne({ isActive: true });
//     if (!activeSession) {
//       return res.status(400).json({ message: "No active session found. Please set one before adding classes." });
//     }

//     const year = activeSession.year;

//     // 2. Normalize inputs
//     const normalizedName = name.trim();
//     const normalizedSection = section.trim().toUpperCase();

//     // 3. Check for duplicates
//     const duplicateClass = await Class.findOne({
//       name: normalizedName,
//       section: normalizedSection,
//       year,
//     });

//     if (duplicateClass) {
//       return res.status(409).json({
//         message: `Section "${normalizedSection}" for "${normalizedName}" in year ${year} already exists.`,
//       });
//     }

//     // 4. Verify admin
//     const admin = await Admin.findById(req.userId);
//     if (!admin) {
//       return res.status(401).json({ message: "Only an admin can add a class." });
//     }

//     // 5. Create class
//     const newClass = await Class.create({
//       name: normalizedName,
//       section: normalizedSection,
//       year,
//     });

//     // 6. Link class to admin
//     admin.classes.push(newClass._id);
//     await admin.save();

//     return res.status(201).json(newClass);
//   } catch (err) {
//     console.error("Error in AddClass:", err.message);
//     return res.status(500).json({ message: "Internal server error while adding class." });
//   }
// };






// const AddClass = async (req, res) => {
//   const { name, section } = req.body;

//   try {
//     // 1. Find the active session
//     let activeSession = await Session.findOne({ isActive: true });

//     // 2. If no session is active, activate the latest one
//     if (!activeSession) {
//       activeSession = await Session.findOne().sort({ createdAt: -1 }); // find latest session
//       if (!activeSession) {
//         return res.status(400).json({ message: "No session found. Please create one first." });
//       }

//       await Session.updateMany({}, { isActive: false }); // deactivate all just in case
//       activeSession.isActive = true;
//       await activeSession.save();
//     }

//     const year = activeSession.year;

//     // 3. Normalize inputs
//     const normalizedName = name.trim();
//     const normalizedSection = section.trim().toUpperCase();

//     // 4. Check for duplicates
//     const duplicateClass = await Class.findOne({
//       name: normalizedName,
//       section: normalizedSection,
//       year,
//     });

//     if (duplicateClass) {
//       return res.status(409).json({
//         message: `Section "${normalizedSection}" for "${normalizedName}" in year ${year} already exists.`,
//       });
//     }

//     // 5. Verify admin
//     const admin = await Admin.findById(req.userId);
//     if (!admin) {
//       return res.status(401).json({ message: "Only an admin can add a class." });
//     }

//     // 6. Create class
//     const newClass = await Class.create({
//       name: normalizedName,
//       section: normalizedSection,
//       year,
//     });

//     // 7. Link class to admin
//     admin.classes.push(newClass._id);
//     await admin.save();

//     return res.status(201).json(newClass);
//   } catch (err) {
//     console.error("Error in AddClass:", err.message);
//     return res.status(500).json({ message: "Internal server error while adding class." });
//   }
// };






































// const AddClass = async (req, res) => {
//   const { name, section } = req.body;

//   try {
//     // Step 1: Check for active session
//     let activeSession = await Session.findOne({ isActive: true });

//     // Step 2: If no active session, activate the most recent one
//     if (!activeSession) {
//       const latestSession = await Session.findOne().sort({ createdAt: -1 });
//       if (!latestSession) {
//         return res.status(400).json({ message: "No session found. Please create one first." });
//       }

//       // Activate it
//       await Session.updateMany({}, { isActive: false }); // Deactivate others
//       latestSession.isActive = true;
//       await latestSession.save();

//       activeSession = latestSession; // Set it as the active session
//     }

//     const year = activeSession.year;

//     // Step 3: Normalize inputs
//     const normalizedName = name.trim();
//     const normalizedSection = section.trim().toUpperCase();

//     // Step 4: Check for duplicates
//     const duplicateClass = await Class.findOne({
//       name: normalizedName,
//       section: normalizedSection,
//       year,
//     });

//     if (duplicateClass) {
//       return res.status(409).json({
//         message: `Section "${normalizedSection}" for "${normalizedName}" in year ${year} already exists.`,
//       });
//     }

//     // Step 5: Verify admin
//     const admin = await Admin.findById(req.userId);
//     if (!admin) {
//       return res.status(401).json({ message: "Only an admin can add a class." });
//     }

//     // Step 6: Create the class
//     const newClass = await Class.create({
//       name: normalizedName,
//       section: normalizedSection,
//       year,
//     });

//     // Step 7: Link class to admin
//     admin.classes.push(newClass._id);
//     await admin.save();

//     return res.status(201).json(newClass);
//   } catch (err) {
//     console.error("Error in AddClass:", err.message);
//     return res.status(500).json({ message: "Internal server error while adding class." });
//   }
// };













// const AddClass = async (req, res) => {
//   const { name, section } = req.body;

//   try {
//     // Step 1: Try finding the active session
//     const Date = new Date();
//     const currenYear = Date.getfullYear()
//     let activeSession = await Session.findOne({year});


//     if()
//     // Step 2: If no active session, try to activate the latest session
//     // if (!activeSession) {
//     //   // Find the most recently created session (even if it's not active)
//     //   const latestSession = await Session.findOne().sort({ createdAt: -1 });

//     //   if (!latestSession) {
//     //     return res.status(400).json({ message: "No session exists. Please create one first." });
//     //   }

//     //   // Activate the latest session
//     //   await Session.updateMany({}, { isActive: false }); // Deactivate all
//     //   latestSession.isActive = true;
//     //   await latestSession.save();

//     //   // Use this newly activated session
//     //   activeSession = latestSession;
//     // }

//     const year = activeSession.year;

//     // Step 3: Normalize class input
//     const normalizedName = name.trim();
//     const normalizedSection = section.trim().toUpperCase();

//     // Step 4: Check for existing class with same name, section, and year
//     const duplicateClass = await Class.findOne({
//       name: normalizedName,
//       section: normalizedSection,
//       year,
//     });

//     if (duplicateClass) {
//       return res.status(409).json({
//         message: `Section "${normalizedSection}" for class "${normalizedName}" in year ${year} already exists.`,
//       });
//     }

//     // Step 5: Verify admin
//     const admin = await Admin.findById(req.userId);
//     if (!admin) {
//       return res.status(401).json({ message: "Only an admin can add a class." });
//     }

//     // Step 6: Create the class
//     const newClass = await Class.create({
//       name: normalizedName,
//       section: normalizedSection,
//       year,
//     });

//     // Step 7: Add class to admin's list
//     admin.classes.push(newClass._id);
//     await admin.save();

//     return res.status(201).json(newClass);
//   } catch (err) {
//     console.error("Error in AddClass:", err.message);
//     return res.status(500).json({ message: "Internal server error while adding class." });
//   }
// };






















// const AddClass = async (req, res) => {
//   const { name, section } = req.body;

//   try {
//     // Step 1: Get current year
// //    const currentYear = new Date().getFullYear();
// // const activeSession = await Session.findOne({ name: currentYear.toString() });


// const currentYear = new Date().getFullYear();
// console.log("Looking for session:", currentYear.toString());
// const activeSession = await Session.findOne({name:"2025"});
// console.log("Found session:", activeSession);
//     if (!activeSession) {
//       return res.status(400).json({
//         message: `No session found for the year ${currentYear}. Please create it first.`,
//       });
//     }

//     const year = activeSession.year;

//     // Step 3: Normalize input
//     const normalizedName = name.trim();
//     const normalizedSection = section.trim().toUpperCase();

//     // Step 4: Check for duplicate class
//     const duplicateClass = await Class.findOne({
//       name: normalizedName,
//       section: normalizedSection,
//       year,
//     });

//     if (duplicateClass) {
//       return res.status(409).json({
//         message: `Section "${normalizedSection}" for class "${normalizedName}" in year ${year} already exists.`,
//       });
//     }

//     // Step 5: Verify admin
//     const admin = await Admin.findById(req.userId);
//     if (!admin) {
//       return res.status(401).json({ message: "Only an admin can add a class." });
//     }

//     // Step 6: Create the class
//     const newClass = await Class.create({
//       name: normalizedName,
//       section: normalizedSection,
//       year,
//     });

//     // Step 7: Link class to admin
//     admin.classes.push(newClass._id);
//     await admin.save();

//     return res.status(201).json(newClass);
//   } catch (err) {
//     console.error("Error in AddClass:", err.message);
//     return res.status(500).json({ message: "Internal server error while adding class." });
//   }
// };













// const AddClass = async (req, res) => {
//   const { name, section } = req.body;

//   try {
//     // Step 1: Find current session by year
//     const currentYear = new Date().getFullYear();
//     console.log("Looking for session:", currentYear);
//     const activeSession = await Session.findOne({ name: currentYear.toString().trim() });
//     console.log("Found session:", activeSession);
//     if (!activeSession) {
//       return res.status(400).json({
//         message: `No session found for the year ${currentYear}. Please create it first.`,
//       });
//     }

//     // Step 2: Normalize inputs
//     const normalizedName = name.trim();
//     const normalizedSection = section.trim().toUpperCase();

//     // Step 3: Check for duplicate class based on name + section + session
//     const duplicateClass = await Class.findOne({
//       name: normalizedName,
//       section: normalizedSection,
//       session: activeSession._id,
//     });

//     if (duplicateClass) {
//       return res.status(409).json({
//         message: `Section "${normalizedSection}" for class "${normalizedName}" already exists in session ${activeSession.name}.`,
//       });
//     }

//     // Step 4: Verify admin
//     const admin = await Admin.findById(req.userId);
//     if (!admin) {
//       return res.status(401).json({ message: "Only an admin can add a class." });
//     }

//     // Step 5: Create the class
//     const newClass = await Class.create({
//       name: normalizedName,
//       section: normalizedSection,
//       session: activeSession._id,
//     });

//     // Step 6: Link class to admin
//     admin.classes.push(newClass._id);
//     await admin.save();

//     return res.status(201).json(newClass);
//   } catch (err) {
//     console.error("Error in AddClass:", err.message);
//     return res.status(500).json({ message: "Internal server error while adding class." });
//   }
// };
















const AddStudent = async (req, res) => {
  const mongoose = require("mongoose");
  const bcrypt = require("bcrypt");

  const { 
    name, email, password, AdmissionNum, Roll, phone, gender, dob, adress, parent, 
    Classs: classId, prevschoolName, prevClass, prevSchoolAddress, 
    bformNumber, CnicNumber, feesPaid , sessionId, concession = 0 ,
   // generateAdmissionVoucher = false
  } = req.body;
  //let generateAdmissionVoucher = req.body.generateAdmissionVoucher === 'true';
  let generateAdmissionVoucher = req.body.generateAdmissionVoucher === 'true';
  try {
    if (!mongoose.Types.ObjectId.isValid(sessionId)) {
      return res.status(400).json({ message: "Invalid session ID format" });
    }
    const session = await Session.findById(sessionId);
    if (!session) {
      return res.status(404).json({ message: "Session Not Found" });
    }
    if (!mongoose.Types.ObjectId.isValid(classId)) {
      return res.status(400).json({ message: "Invalid class ID format" });
    }

    // Check existing users etc (your existing validations here) ...
    // const existingEmail = await User.findOne({ email });
    const existingPhone = await User.findOne({ phone });
    const existingRoll = await User.findOne({ Roll, Classs: classId });
   // const existingRoll = await User.findOne({Roll});
   // const existingStudent = await User.findOne({Classs:classId});
    const existingAdmissionNumber = await User.findOne({AdmissionNum});
     const isEmailTaken = require("../middlewares/checkisEmailUnique");
if (await isEmailTaken(email)) {
  return res.status(401).json({ message: 'This email is already used by another user role' });
}
// if(existingStudent){
//   return res.status(401).json({message:"Student Already Registered for that Class."});
// }
    if(!Roll | !AdmissionNum){
      return res.status(401).json({message:"Roll No or Admission is Required!"})
    }
    if(existingRoll){
      return res.status(401).json({message:"Roll is Already Taken!"})
    }
    if(existingAdmissionNumber){
      return res.status(401).json({message:"AdmissionNumber is Already Taken!"})
    }
    if (existingPhone) {
      return res.status(401).json({ message: 'User already registered with this Contact Number' });
    }

    // Check class existence
    // const enteredClassMatch = await Class.findById(classId);
    // if (!enteredClassMatch) {
    //   return res.status(404).json({ message: "Entered Class Not Found in System." });
    // }
    const profileImage = req.files?.profileImage?.[0];
    const CnicFrontImage = req.files?.CnicFrontImage?.[0];
    const CnicBackImage = req.files?.CnicBackImage?.[0];
    const bformImage = req.files?.bformImage?.[0];

    const hashedPass = await bcrypt.hash(password, 10);

    let user = await User.create({
      name,
      email,
      password: hashedPass,
      AdmissionNum,
      Roll,
      phone,
      gender,
      dob,
      adress,
      parent,
      Classs: classId,
      prevschoolName,
      prevClass,
      prevSchoolAddress,
      bformNumber,
      CnicNumber,
      feesPaid: feesPaid || null,
      session: session._id,
      concession,

      profileImage: profileImage ? {
        data: profileImage.buffer,
        contentType: profileImage.mimetype,
      } : undefined,

      CnicFrontImage: CnicFrontImage ? {
        data: CnicFrontImage.buffer,
        contentType: CnicFrontImage.mimetype,
      } : undefined,

      CnicBackImage: CnicBackImage ? {
        data: CnicBackImage.buffer,
        contentType: CnicBackImage.mimetype,
      } : undefined,

      bformImage: bformImage ? {
        data: bformImage.buffer,
        contentType: bformImage.mimetype,
      } : undefined,
    });

    await user.populate("Classs");
    const enteredClassMatch = await Class.findById(classId);
    enteredClassMatch.students.push(user._id);
    await enteredClassMatch.save();

    const admin = await Admin.findById(req.userId);
    if (!admin) {
      return res.status(404).json({ message: "Admin Not Found" });
    }
    session.Students.push(user._id);
    await session.save();
    admin.students.push(user._id);
    await admin.save();

    await updateClassGenderCount(classId);

    // --- FEE VOUCHER CREATION ---

    // Find fee types active on admission for student's class
    const applicableFees = await FeeType.find({
      activeOnAdmission: true,
      classIds: user.Classs._id
    });

    // const vouchers = applicableFees.map(fee => {
    //   const base = fee.amount;
    //   const discount = (base * (concession || 0)) / 100;
    //   const finalAmount = Math.round(base - discount);
    //   return {
    //     student: user._id,
    //     feeType: fee._id,
    //     baseAmount: base,
    //     concession: concession || 0,
    //     finalAmount,
    //     dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Due in 7 days
    //     paid: false
    //   };
    // });

//   const vouchers = applicableFees.map(fee => {
//   const base = fee.amount;
//   const discount = (base * (concession || 0)) / 100;
//   const finalAmount = Math.round(base - discount);

//   // Replace this according to your FeeType schema
//   const dueDate = fee.dueDate 
//     ? fee.dueDate 
//     : (fee.dueDays ? new Date(Date.now() + fee.dueDays * 24 * 60 * 60 * 1000) : new Date(Date.now() + 7 * 24 * 60 * 60 * 1000));

//   return {
//     student: user._id,
//     feeType: fee._id,
//     baseAmount: base,
//     concession: concession || 0,
//     finalAmount,
//     dueDate,
//     paid: false
//   };
// });
// const existingVouchers = await FeeVoucher.find({ student: user._id });

// if (existingVouchers.length > 0) {
//   console.warn("Vouchers already exist for this student, skipping creation.");
// } else {
//   await FeeVoucher.insertMany(vouchers);
// }

   // await FeeVoucher.insertMany(vouchers);


//    const vouchersToInsert = [];

// for (const fee of applicableFees) {
//   const exists = await FeeVoucher.findOne({
//     student: user._id,
//     feeType: fee._id
//   });

//   if (!exists) {
//     const base = fee.amount;
//     const discount = (base * (concession || 0)) / 100;
//     const finalAmount = Math.round(base - discount);

//     const dueDate = fee.dueDate
//       ? fee.dueDate
//       : (fee.dueDays ? new Date(Date.now() + fee.dueDays * 24 * 60 * 60 * 1000) : new Date(Date.now() + 7 * 24 * 60 * 60 * 1000));
//     vouchersToInsert.push({
//       student: user._id,
//       feeType: fee._id,
//       baseAmount: base,
//       concession: concession || 0,
//       finalAmount,
//       dueDate,
//       paid: false
//     });
//   }
// }
// if (vouchersToInsert.length > 0) {
//   await FeeVoucher.insertMany(vouchersToInsert);
//   console.log("Inserted new vouchers:", vouchersToInsert.length);
// } else {
//   console.warn("No new vouchers to insert for student:", user._id);
// }













let vouchersToInsert = [];

if (generateAdmissionVoucher) {
  for (const fee of applicableFees) {
    const exists = await FeeVoucher.findOne({
      student: user._id,
      feeType: fee._id
    });

    if (!exists) {
      const base = fee.amount;
      const discount = (base * (concession || 0)) / 100;
      const finalAmount = Math.round(base - discount);

      const dueDate = fee.dueDate
        ? fee.dueDate
        : (fee.dueDays ? new Date(Date.now() + fee.dueDays * 24 * 60 * 60 * 1000) : new Date(Date.now() + 7 * 24 * 60 * 60 * 1000));

      vouchersToInsert.push({
        student: user._id,
        feeType: fee._id,
        baseAmount: base,
        concession: concession || 0,
        finalAmount,
        dueDate,
        paid: false
      });
    }
  }

//   if (vouchersToInsert.length > 0) {
//     await FeeVoucher.insertMany(vouchersToInsert);
//     console.log("Inserted new vouchers:", vouchersToInsert.length);
//   } else {
//     console.warn("No new vouchers to insert for student:", user._id);
//   }
// } else {
//   console.log("Skipping admission voucher generation due to setting.");
// }
if (vouchersToInsert.length > 0) {
  const insertedVouchers = await FeeVoucher.insertMany(vouchersToInsert);
  console.log("Inserted new vouchers:", insertedVouchers.length);

  // for (const voucher of insertedVouchers) {
  //   const fee = applicableFees.find(f => f._id.equals(voucher.feeType));
  //   const pdfPath = await generateFeeVoucherPDF(user, fee, voucher.finalAmount, voucher.dueDate);
  //   voucher.pdfPath = pdfPath;
  //   await voucher.save();

  //   // Optionally also push it into the user.feeVouchers array if using reference:
  //   if (!user.feeVouchers) user.feeVouchers = [];
  //   user.feeVouchers.push(voucher._id);
  // }
  for (const voucher of insertedVouchers) {
  const fee = applicableFees.find(f => f._id.equals(voucher.feeType));
  // const pdfBuffer = await generateFeeVoucherPDF(user, fee, voucher.finalAmount, voucher.dueDate);
  // voucher.pdfBuffer = pdfBuffer;
  // voucher.contentType = 'application/pdf';
  // await voucher.save();

  if (!user.feeVouchers) user.feeVouchers = [];
  user.feeVouchers.push(voucher._id);
}
await user.save();

//  await user.save();
}

    // Return the student with fee vouchers info optionally
    return res.status(201).json({
      message: "Student registered successfully and fee vouchers created",
      // student: user,
      // vouchersCreated: vouchersToInsert.length
    });
  }
   return res.status(201).json({
      message: "Student registered successfully and fee vouchers created",
      // student: user,
      // vouchersCreated: vouchersToInsert.length
    });
}
    catch (err) {
    console.error("Signup error:", err.message);
    return res.status(500).json({ 
      message: err.message,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
  }
};


  

const AddClass = async (req, res) => {

  const { name, section } = req.body;

  try {
    // Step 1: Get the currently active session
    const currentYear = new Date().getFullYear();
    const activeSession = await Session.findOne({ name : currentYear.toString()});

    if (!activeSession) {
      return res.status(400).json({
        message: "No active session found. Please create or activate a session first.",
      });
    }

    // Step 2: Normalize input
    const normalizedName = name.trim();
    const normalizedSection = section.trim().toUpperCase();

    // Step 3: Check for duplicate class
    const duplicateClass = await Class.findOne({
      name: normalizedName,
      section: normalizedSection,
      session: activeSession._id,
    });

    if (duplicateClass) {
      return res.status(409).json({
        message: `Class "${normalizedName}" with section "${normalizedSection}" already exists in session ${activeSession.name}.`,
      });
    }

    // Step 4: Verify admin
    const admin = await Admin.findById(req.userId);
    if (!admin) {
      return res.status(401).json({ message: "Only an admin can add a class." });
    }

    // Step 5: Create the class
    const newClass = await Class.create({
      name: normalizedName,
      section: normalizedSection,
      session: activeSession._id,
    });

    // Step 6: Link class to admin
    admin.classes.push(newClass._id);
    await admin.save();
    return res.status(201).json(newClass);
  } catch (err) {
    console.error("Error in AddClass:", err.message);
    return res.status(500).json({ message: "Internal server error while adding class." });
  }
};




// const AddSubjects = async (req, res) => {
//   const { name, code, classes, department } = req.body; // `classes` is an array

//   try {
//     console.log("REQUEST COMING FROM FRONTEND");

//     // 1. Validate all class IDs exist
//     const classDocs = await Class.find({ _id: { $in: classes } });
//     if (classDocs.length !== classes.length) {
//       return res.status(404).json({ message: "One or more classes not found" });
//     }

//     // 2. Check if subject already exists with same name/code/department and assigned to any of these classes
//     const existingSubject = await Subject.findOne({
//       name,
//       code,
//       department,
//       classes: { $in: classes }, // checks if any of the given classes already have this subject
//     });

//     if (existingSubject) {
//       return res.status(409).json({ message: "Subject already exists for one or more selected classes" });
//     }

//     // 3. Create the new subject
//     const newSubject = new Subject({
//       name,
//       code,
//       department,
//       classes, // store array of class IDs
//     });

//     await newSubject.save();

//     // 4. Add subject to each class document
//     await Promise.all(
//       classDocs.map(async (cls) => {
//         cls.subjects.push(newSubject._id);
//         await cls.save();
//       })
//     );

//     // 5. Associate with admin
//     const admin = await Admin.findById(req.userId);
//     if (admin) {
//       admin.subjects.push(newSubject._id);
//       await admin.save();
//     }

//     res.status(201).json({
//       message: "Subject added successfully!",
//       subject: newSubject,
//     });
//   } catch (err) {
//     console.error("Error adding subject:", err);
//     res.status(500).json({ message: "Server error while adding subject" });
//   }
// };




const AddSubjects = async (req, res) => {
  const { name, code, classes, department } = req.body;

  try {
    console.log("REQUEST COMING FROM FRONTEND");

    const classDocs = await Class.find({ _id: { $in: classes } });

    if (classDocs.length !== classes.length) {
      return res.status(404).json({ message: "One or more classes not found" });
    }

    // Check if subject exists (by name + code + department)
    let subject = await Subject.findOne({ name, code, department });

    if (subject) {
      const updatedClassIds = [];
      const skippedClassIds = [];

      for (const classId of classes) {
        const alreadyAdded = subject.classes.some(
          existingId => existingId.toString() === classId
        );

        if (!alreadyAdded) {
          subject.classes.push(classId);
          updatedClassIds.push(classId);
        } else {
          skippedClassIds.push(classId);
        }
      }

      if (updatedClassIds.length > 0) {
        await subject.save();

        await Promise.all(
          classDocs.map(async (cls) => {
            if (
              updatedClassIds.includes(cls._id.toString()) &&
              !cls.subjects.includes(subject._id)
            ) {
              cls.subjects.push(subject._id);
              await cls.save();
            }
          })
        );

        const admin = await Admin.findById(req.userId);
        if (admin && !admin.subjects.includes(subject._id)) {
          admin.subjects.push(subject._id);
          await admin.save();
        }

        return res.status(201).json({
          message: "Subject updated for some new classes",
          updatedClassIds,
          skippedClassIds,
          subject,
        });
      } else {
        return res.status(409).json({
          message: "Subject already exists for all selected classes",
        });
      }
    }

    // Create new subject if not exists
    const newSubject = new Subject({
      name,
      code,
      department,
      classes,
    });

    await newSubject.save();

    await Promise.all(
      classDocs.map(async (cls) => {
        cls.subjects.push(newSubject._id);
        await cls.save();
      })
    );

    const admin = await Admin.findById(req.userId);
    if (admin) {
      admin.subjects.push(newSubject._id);
      await admin.save();
    }

    res.status(201).json({
      message: "New subject added successfully!",
      subject: newSubject,
    });
  } catch (err) {
    console.error("Error adding subject:", err);
    res.status(500).json({ message: "Server error while adding subject" });
  }
};



// const AddSubjects = async (req, res) => {
//   const { name, code, classes, department } = req.body;

//   try {
//     console.log("REQUEST COMING FROM FRONTEND");

//     // 1. Validate class IDs
//     const classDocs = await Class.find({ _id: { $in: classes } });
//     if (classDocs.length !== classes.length) {
//       return res.status(404).json({ message: "One or more classes not found" });
//     }

//     // 2. Find if subject already exists (regardless of classes)
//     let subject = await Subject.findOne({ name, code, department });

//     if (subject) {
//       // 3. Filter new class IDs (avoid duplicates)
//       const newClassIds = classes.filter(
//         classId => !subject.classes.some(existingId => existingId.toString() === classId)
//       );

//       if (newClassIds.length === 0) {
//         return res.status(409).json({ message: "Subject already exists for all selected classes" });
//       }

//       // 4. Add new classes to subject
//       subject.classes.push(...newClassIds);
//       await subject.save();

//       // 5. Update each class to include this subject
//       await Promise.all(
//         classDocs.map(async (cls) => {
//           if (!cls.subjects.includes(subject._id)) {
//             cls.subjects.push(subject._id);
//             await cls.save();
//           }
//         })
//       );

//       // 6. Add to admin
//       const admin = await Admin.findById(req.userId);
//       if (admin && !admin.subjects.includes(subject._id)) {
//         admin.subjects.push(subject._id);
//         await admin.save();
//       }

//       return res.status(200).json({
//         message: "Subject updated with new classes",
//         subject,
//       });
//     }

//     // 7. If subject doesn't exist, create a new one
//     const newSubject = new Subject({
//       name,
//       code,
//       department,
//       classes,
//     });

//     await newSubject.save();

//     await Promise.all(
//       classDocs.map(async (cls) => {
//         cls.subjects.push(newSubject._id);
//         await cls.save();
//       })
//     );

//     const admin = await Admin.findById(req.userId);
//     if (admin) {
//       admin.subjects.push(newSubject._id);
//       await admin.save();
//     }

//     res.status(201).json({
//       message: "New subject added successfully!",
//       subject: newSubject,
//     });
//   } catch (err) {
//     console.error("Error adding subject:", err);
//     res.status(500).json({ message: "Server error while adding subject" });
//   }
// };




const AddSession = async (req, res) => {
  const { name, startDate, endDate } = req.body;

  try {
    const existSession = await Session.findOne({ name, startDate, endDate });
    const admin = await Admin.findById(req.userId);

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    if (existSession) {
      return res
        .status(409)
        .json({ message: "Session already exists with this name, start date, or end date" });
    }

    const session = await Session.create({
      name,
      startDate,
      endDate,
    });

    admin.sessions.push(session._id);
    await admin.save();

    // ✅ Send success response
    return res.status(201).json({
      message: "Session created successfully",
      session,
    });

  } catch (err) {
    console.error("Error on AddSession:", err.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};
































// const AddTeacher = async (req, res) => {
//    try {
//    let {
//   name,
//   email,
//   password,
//   phone,
//   salary,
//   dob,
//   gender,
//   qualifications,
//   teachSubject,
//   assignedClass,
//   incharge  // ✅ <-- you missed this!
// } = req.body;

//      // 🔒 Input Sanitization
//      email = email.trim().toLowerCase();
//      name = name.trim();
//      teachSubject = teachSubject.trim();
//      // ✅ Class Name to ObjectId
//      const classDoc = await Class.findOne({_id: assignedClass });
//      if (!classDoc) {
//        return res.status(400).json({ message: "Class not found with name: " + assignedClass });
//      }
//      assignedClass = classDoc._id;  // Now it's valid for MongoDB
//      // ✅ Check if teacher already exists by email or class
//     //  const existingTeacher = await Teacher.findOne({ email });
//     //  if (existingTeacher) {
//     //    return res.status(400).json({ message: "Teacher already registered with this email" });
//     //  }
//     const isEmailTaken = require("../middlewares/checkisEmailUnique");

// if (await isEmailTaken(email)) {
//   return res.status(401).json({ message: 'This email is already used by another user role' });
// }

//  //const newSubject = await Subject.findOne({name});
//  const subjectDoc = await Subject.findById(teachSubject); 
//  //const subjectDoc = await Subject.findOne({ name: teachSubject });
//     if (!subjectDoc) {
//       return res.status(400).json({ message: "Subject not found: " + teachSubject });
//     }
//      const existingTeacherClass = await Teacher.findOne({ assignedClass });
//      /*if (existingTeacherClass) {
//        return res.status(400).json({ message: "Class already assigned to another teacher" });
//      }*/
//      // ✅ Field Validations
//      if (name.length < 3) {
//        return res.status(400).json({ message: "Name must be at least 3 characters" });
//      }
//      if (email.length < 11 || !email.includes("@gmail.com")) {
//        return res.status(400).json({ message: "Email must be valid and at least 11 characters" });
//      }
//      if (password.length < 8) {
//        return res.status(400).json({ message: "Password must be at least 8 characters" });
//      }
//      if (!/^\d{11}$/.test(phone)) {
//        return res.status(400).json({ message: "Phone number must be exactly 11 digits" });
//      }
//      if (teachSubject.length < 4) {
//        return res.status(400).json({ message: "Subject must be at least 4 characters" });
//      }
//      // ✅ Check Admin Exists
//      const admin = await Admin.findById(req.userId);
//      if (!admin) {
//        return res.status(404).json({ message: "Admin not found" });
//      }
//      // 🔐 Hash Password
//      const hashedPassword = await bcrypt.hash(password, 10);
//      // ✅ Create New Teacher
//     //  const newTeacher = await Teacher.create({
//     //    name,
//     //    email,
//     //    password: hashedPassword,
//     //    phone,
//     //    salary,
//     //    dob,
//     //    gender,
//     //    qualifications,
//     //    teachSubject:subjectDoc._id,
//     //    assignedClass
//     //  });
//     const newTeacher = await Teacher.create({
//   name,
//   email,
//   password: hashedPassword,
//   phone,
//   salary,
//   dob,
//   gender,
//   qualifications,
//   teachSubject: subjectDoc._id,
//   assignedClass: [
//     {
//       class: assignedClass,
//       incharge:incharge || false,
//     }
//   ]
// });

//      // ✅ Attach teacher to admin
//      newTeacher.populate("assignedClass");
//      newTeacher.populate("teachSubject");
//      //newTeacher.populate("teachSubject");
//      await newTeacher.save();
//      classDoc.teacher.push(newTeacher._id);
//      await classDoc.save();
//      admin.teachers.push(newTeacher._id);
//      await admin.save();
//     //  // ✅ Populate the assigned class
//     //  await newTeacher.populate({
//     //    path: 'assignedClass', // Populate the class details from the assignedClass field
//     //    select: 'name grade'   // You can select only the fields you need, like 'name' and 'grade'
//     //  });
//      return res.status(201).json({
//        message: "Teacher registered successfully",
//        teacher: newTeacher
//      });
//    } catch (err) {
//      console.error("Signup error:", err);
//      return res.status(500).json({ message: "Server error on signup", error: err.message });
//    }
//  };


const AddTeacher = async (req, res) => {
  try {
    let {
      name,
      email,
      password,
      phone,
      salary,
      dob,
      gender,
      qualifications,
      address,
      teachSubject,
      assignedClass,
      incharge,
      CnicNumber,
      sessionId,
      role = "Teacher"
    } = req.body;

    // 🔒 Input Sanitization
    email = email.trim().toLowerCase();
    name = name.trim();
    teachSubject = teachSubject.trim();
// Validate Session Id From Client_Side 
const session = await Session.findById(sessionId);
if (!session) {
  return res.status(404).json({ message: "Session Not Found" });
}
    // ✅ Validate Required Fields
    if (!CnicNumber || CnicNumber.length < 11) {
      return res.status(400).json({ message: "CNIC Number is required and must be at least 11 digits" });
    }

    // ✅ Handle Image Uploads (Requires multer setup)
    const profileImage = req.files?.profileImage?.[0];
    const CnicFrontImage = req.files?.CnicFrontImage?.[0];
    const CnicBackImage = req.files?.CnicBackImage?.[0];

    // ✅ Class Lookup
 const roleDoc = await Role.findOne({ name: role });
  if (!roleDoc) return res.status(400).json({ message: "Invalid role" });

    const classDoc = await Class.findOne({ _id: assignedClass });
    if (!classDoc) {
      return res.status(400).json({ message: "Class not found with name: " + assignedClass });
    }
    assignedClass = classDoc._id;

    const isEmailTaken = require("../middlewares/checkisEmailUnique");
    if (await isEmailTaken(email)) {
      return res.status(401).json({ message: 'This email is already used by another user role' });
    }

    const subjectDoc = await Subject.findById(teachSubject);
    if (!subjectDoc) {
      return res.status(400).json({ message: "Subject not found: " + teachSubject });
    }
        
    const admin = await Admin.findById(req.userId);
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Create New Teacher with new fields
    const newTeacher = await Teacher.create({
      name,
      email,
      password: hashedPassword,
      phone,
      salary,
      dob,
      gender,
      qualifications,
      address,
      CnicNumber,
      session:session._id,
      role,
      profileImage: profileImage
        ? {
            data: profileImage.buffer,
            contentType: profileImage.mimetype
          }
        : undefined,
      CnicFrontImage: CnicFrontImage
        ? {
            data: CnicFrontImage.buffer,
            contentType: CnicFrontImage.mimetype
          }
        : undefined,
      CnicBackImage: CnicBackImage
        ? {
            data: CnicBackImage.buffer,
            contentType: CnicBackImage.mimetype
          }
        : undefined,
      teachSubject: subjectDoc._id,
      assignedClass: [
        {
          class: assignedClass,
          incharge: incharge || false,
        }
      ]
      
    });
    await newTeacher.save();
    session.Teachers.push(newTeacher._id);
    await session.save();
    classDoc.teacher.push(newTeacher._id);
    await classDoc.save();
    admin.teachers.push(newTeacher._id);
    await admin.save();

    return res.status(201).json({
      message: "Teacher registered successfully",
      teacher: newTeacher
    });
  } catch (err) {
    console.error("Signup error:", err);
    return res.status(500).json({ message: "Server error on signup", error: err.message });
  }
};

const SignupAdmin = async (req, res) => {
  const { name, email, password} = req.body;
  try {
    const admin = await Admin.findOne({ email });
  //  const student = await Student.findOne({email});
  //  const teacher = await Teacher.findOne({email})
  //  const teacher = await Teacher.findOne({ email });
     const totaladmin = await Admin.countDocuments();
    if (admin) {
      return res.status(401).json({ message: "User already registered with this email" });
    }
     if(name.length < 3){
      return res.status(401).json({message:"Name Length Should be 3 Characters."})
     }
     if(email.length < 11  || !email.includes("@gmail.com")){
      return res.status(401).json({message:"Invalid Email or Length Should be 11 Characters."})
     }
     if(password.length < 8){
      return res.status(401).json({message:"Passowrd Length Should be 8 Characters."})
     }
     if(!totaladmin >= 1){
     const hashedPass = await bcrypt.hash(password, 10);
     let user = await Admin.create({name,email,password:hashedPass});
     let token;
     token = Jwt.sign({ id: user._id.toString(), email: user.email }, process.env.JWT_KEY, {
      expiresIn: "1d" // 👈 This is the token lifespan
    });
    res.cookie("token", token,{
      httpOnly: true,        // 🚫 JavaScript can't access this cookie at all
      secure: true,          // ✅ Only sent over HTTPS
      sameSite: "strict",    // 🚫 Not sent in cross-site requests (CSRF protection)
    });
    console.log("📌 Token:", token);
    return res.status(201).json(user);
  }
    return res.status(401).json({message:"Admin already Registered"});
  } catch (err) {
    console.error("Signup error:", err.message);
    return res.status(500).json({ message: "Server error on signup" });
  }
};





const AdminSignIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    let user = await Admin.findOne({ email });
    let role = "admin";

    if (!user) {
      user = await Student.findOne({ email });
      role = "student";
    }

    if (!user) {
      user = await Teacher.findOne({ email });
      role = "teacher";
    }

    /*if (!user) {
      user = await Staff.findOne({ email }); // <-- Added Accountant check
      role = "Accountant";
    }*/

 if (!user) {
      const staff = await Staff.findOne({ email }); // Check for staff
      if (staff && staff.role === "Accountant") {
        user = staff;
        role = "Accountant";
      }
    }



    if (!user) {
      return res.status(404).json({ message: "User not found with this email" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    const token = Jwt.sign(
      { id: user._id.toString(), email: user.email, role },
      process.env.JWT_KEY,
      { expiresIn: "1d" }
    );

    res.cookie("token", token, { httpOnly: true, maxAge: 86400000 });
    return res.status(200).json({ message: `Successfully logged in as ${role}`, token });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error during sign-in" });
  }
};








const AddStaff  = async (req,res)=>{
   try {
    const { name, role, email, password, phone,address,sessionId } = req.body;
    const file = req.file;
const session = await Session.findById(sessionId);
if (!session) {
  return res.status(404).json({ message: "Session Not Found" });
}
    // Validate required fields
    if (!name || !role) {
      return res.status(400).json({ message: 'Name and role are required.' });
    }
    // Build base staff object
    const staffData = {
      name,
      role,
      phone,
      address,
      session:session._id
    };
const admin = await Admin.findById(req.userId);
    // Add login fields only for Accountant
    if(!admin){
      return res.status(404).json({message:"You are Not Allowed This can only Do Admin..."})
    }
    if (role === 'Accountant') {
      if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required for Accountants.' });
      }
 const isEmailTaken = require("../middlewares/checkisEmailUnique");
if (await isEmailTaken(email)) {
  return res.status(401).json({ message: 'This email is already used by another user role' });
}
      const hashedPassword = await bcrypt.hash(password, 10);
      staffData.email = email;
      staffData.password = hashedPassword;
    }

    // Add profile image if provided
    if (file) {
      staffData.profileImage = {
        data: file.buffer,
        contentType: file.mimetype,
      };
    }
    const newStaff = new Staff(staffData);
    await newStaff.save();
    session.Staffs.push(newStaff._id);
    await session.save();
    admin.staff.push(newStaff._id);
    await admin.save();
    res.status(201).json({ message: 'Staff registered successfully', staff: newStaff });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error registering staff', error });
  }
};
// const AddTimeTable = async (req, res) => {
//   try {
//     const { className, day, periods } = req.body;

//     // Find the class by ID (since you're passing _id in frontend)
//     const classDoc = await Class.findById(className);
//     if (!classDoc) {
//       return res.status(404).json({ message: 'Class not found' });
//     }

//     // Optional: Validate that each subject exists (useful but not required for MVP)
//     // const validPeriods = await Promise.all(
//     //   periods.map(async (p,i) => {
//     //     const subjectDoc = await Subject.findById(p.subject);
//     //     if (!subjectDoc) {
//     //       throw new Error(`Subject with ID ${p.subject} not found`);
//     //     }
//     //     return {
//     //       periodNumber: i + 1,
//     //       subject: subjectDoc._id, // or full doc if needed
//     //       time: p.time,
//     //     };
//     //   })
//     // );


//     const validPeriods = await Promise.all(
//   periods.map(async (p, i) => {
//     const subjectDoc = await Subject.findById(p.subject);
//     if (!subjectDoc) {
//       throw new Error(`Subject with ID ${p.subject} not found`);
//     }

//     return {
//       periodNumber: i + 1,
//       subject: subjectDoc._id,
//       time: p.time,
//       teacher: p.teacher || null  // ✅ include teacher
//     };
//   })
// );

//     // Save new timetable
//     const timetable = new Timetable({
//       className: classDoc._id,
//       day,
//       periods: validPeriods,
//     });

//     await timetable.save();

//     // Link timetable to class
//     classDoc.timeTable.push(timetable._id);
//     await classDoc.save();

//     res.status(201).json({ message: 'Timetable saved successfully' });

//   } catch (error) {
//     console.error('Timetable creation error:', error.message);
//     res.status(500).json({ error: error.message || 'Error saving timetable' });
//   }
// };


//const Timetable = require('../models/Timetable');
//const Teacher = require('../models/Teacher');

// const getAvailableTeachers = async (req, res) => {
//   try {
//     const { subjectId, timeSlot } = req.query;

//     if (!subjectId || !timeSlot) {
//       return res.status(400).json({ message: 'Missing subjectId or timeSlot' });
//     }

//     // Find teachers who teach the subject
//     const allSubjectTeachers = await Teacher.find({
//       teachSubject: subjectId
//     });

//     // Get all timetables where this time is already occupied
//     const busyTimetables = await Timetable.find({
//       "periods.time": timeSlot
//     }).populate("periods.subject");

//     // Get all busy teacher IDs at this time
//     const busyTeacherIds = new Set();

//     for (let tt of busyTimetables) {
//       for (let p of tt.periods) {
//         if (p.time === timeSlot) {
//           const subjectId = p.subject?._id?.toString();
//           if (!subjectId) continue;

//           const teachers = await Teacher.find({ teachSubject: subjectId });
//           teachers.forEach(t => busyTeacherIds.add(t._id.toString()));
//         }
//       }
//     }

//     // Filter out busy teachers
//     const availableTeachers = allSubjectTeachers.filter(
//       t => !busyTeacherIds.has(t._id.toString())
//     );

//     res.json({ availableTeachers });

//   } catch (error) {
//     console.error('Error fetching available teachers:', error.message);
//     res.status(500).json({ message: 'Server error' });
//   }
// };




// const getAvailableTeachers = async (req, res) => {
//   try {
//     const { subjectId, timeSlot } = req.query;

//     if (!subjectId || !timeSlot) {
//       return res.status(400).json({ message: 'Missing subjectId or timeSlot' });
//     }

//     // 1. Get all teachers who teach this subject
//     const subjectTeachers = await Teacher.find({ teachSubject: subjectId });

//     // 2. Get all timeTables where this timeSlot is used by any subject
//     const timetables = await Timetable.find({ "periods.time": timeSlot });

//     // 3. Find all teachers who are already teaching something at this time
//     const busyTeacherIds = new Set();

//     for (const timetable of timetables) {
//       for (const period of timetable.periods) {
//         if (period.time === timeSlot && period.teacher) {
//           busyTeacherIds.add(period.teacher.toString());
//         }
//       }
//     }

//     // 4. Filter available teachers (not in busyTeacherIds)
//     const availableTeachers = subjectTeachers.filter(
//       t => !busyTeacherIds.has(t._id.toString())
//     );

//     res.json({ availableTeachers });

//   } catch (error) {
//     console.error('Error fetching available teachers:', error.message);
//     res.status(500).json({ message: 'Server error' });
//   }
// };




const AddTimeTable = async (req, res) => {
  try {
    const { className, day, periods } = req.body;

    const classDoc = await Class.findById(className);
    if (!classDoc) {
      return res.status(404).json({ message: 'Class not found' });
    }

    // ✅ Check for missing teacher in any period
    const periodWithMissingTeacher = periods.find(p => !p.teacher);
    if (periodWithMissingTeacher) {
      return res.status(400).json({ message: 'Please select a teacher for that period.' });
    }

    // ✅ Validate subject IDs and build periods
    const validPeriods = await Promise.all(
      periods.map(async (p, i) => {
        const subjectDoc = await Subject.findById(p.subject);
        if (!subjectDoc) {
          throw new Error(`Subject with ID ${p.subject} not found`);
        }

        return {
          periodNumber: i + 1,
          subject: subjectDoc._id,
          time: p.time,
          teacher: p.teacher
        };
      })
    );

    // Save timetable
    const timetable = new Timetable({
      className: classDoc._id,
      day,
      periods: validPeriods,
    });

    await timetable.save();

    classDoc.timeTable.push(timetable._id);
    await classDoc.save();

    res.status(201).json({ message: 'Timetable saved successfully' });

  } catch (error) {
    console.error('Timetable creation error:', error.message);
    res.status(500).json({ error: error.message || 'Error saving timetable' });
  }
};

// const getAvailableTeachers = async (req, res) => {
//   try {
//     const { subjectId, timeSlot, classId } = req.query;

//     if (!subjectId || !timeSlot || !classId) {
//       return res.status(400).json({ message: 'Missing subjectId, classId or timeSlot' });
//     }

//     // Get teachers who teach this subject
//     const subjectTeachers = await Teacher.find({ teachSubject: subjectId });

//     // 1. Check if this subject is already assigned in this class (regardless of time)
//     const timetableForClass = await Timetable.findOne({ classId });

//     let subjectAlreadyUsed = false;
//     if (timetableForClass) {
//       for (const period of timetableForClass.periods) {
//         if (period.subject?.toString() === subjectId) {
//           subjectAlreadyUsed = true;
//           break;
//         }
//       }
//     }

//     if (subjectAlreadyUsed) {
//       return res.status(200).json({ availableTeachers: [] }); // Subject already scheduled for class
//     }

//     // 2. Get all teachers already busy at this time slot
//     const busyTimetables = await Timetable.find({ "periods.time": timeSlot });

//     const busyTeacherIds = new Set();
//     for (const timetable of busyTimetables) {
//       for (const period of timetable.periods) {
//         if (period.time === timeSlot && period.teacher) {
//           busyTeacherIds.add(period.teacher.toString());
//         }
//       }
//     }

//     // 3. Filter out busy teachers
//     const availableTeachers = subjectTeachers.filter(
//       t => !busyTeacherIds.has(t._id.toString())
//     );

//     res.json({ availableTeachers });

//   } catch (error) {
//     console.error('Error fetching available teachers:', error.message);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// const LeaveAprroval = async (req,res)=>{ 
//   const { id } = req.params;
//   const { status, reason } = req.body;

//   if (!['Approved', 'UnApproved'].includes(status)) {
//     return res.status(400).json({ message: 'Invalid status value' });
//   }

//   try {
//     const leave = await Leave.findById(id);
//     if (!leave) return res.status(404).json({ message: 'Leave not found' });

//     leave.status = status;
//     leave.reason = reason || leave.reason;

//     await leave.save();
//     res.status(200).json({ message: 'Leave updated successfully' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server error' });
//   }
// }








// const getAvailableTeachers = async (req, res) => {
//   try {
//     const { subjectId, timeSlot, classId } = req.query;

//     if (!subjectId || !timeSlot || !classId) {
//       return res.status(400).json({ message: 'Missing subjectId, classId or timeSlot' });
//     }

//     // Get teachers who teach this subject
//     const subjectTeachers = await Teacher.find({ teachSubject: subjectId });

//     // 1. Check if this subject is already assigned to this class
//     const timetableForClass = await Timetable.findOne({ className: classId });

//     let subjectAlreadyUsed = false;
//     if (timetableForClass) {
//       for (const period of timetableForClass.periods) {
//         if (period.subject?.toString() === subjectId) {
//           subjectAlreadyUsed = true;
//           break;
//         }
//       }
//     }

//     if (subjectAlreadyUsed) {
//       return res.status(200).json({ availableTeachers: [] }); // Subject already scheduled for this class
//     }

//     // 2. Find all teachers busy at this time
//     const busyTimetables = await Timetable.find({ "periods.time": timeSlot });

//     const busyTeacherIds = new Set();
//     for (const timetable of busyTimetables) {
//       for (const period of timetable.periods) {
//         if (period.time === timeSlot && period.teacher) {
//           busyTeacherIds.add(period.teacher.toString());
//         }
//       }
//     }

//     // 3. Return teachers who teach this subject and are free at this time
//     const availableTeachers = subjectTeachers.filter(
//       t => !busyTeacherIds.has(t._id.toString())
//     );

//     res.json({ availableTeachers });

//   } catch (error) {
//     console.error('Error fetching available teachers:', error.message);
//     res.status(500).json({ message: 'Server error' });
//   }
// };



const getAvailableTeachers = async (req, res) => {
  try {
    const { subjectId, timeSlot, classId } = req.query;

    if (!subjectId || !timeSlot || !classId) {
      return res.status(400).json({ message: 'Missing subjectId, classId or timeSlot' });
    }

    // Get teachers who teach this subject
    const subjectTeachers = await Teacher.find({ teachSubject: subjectId });

    // 1. Check if this subject is already assigned to this class at the selected time
    const conflictingTimetable = await Timetable.findOne({
      className: classId,
      "periods.subject": subjectId,
      "periods.time": timeSlot
    });

    if (conflictingTimetable) {
      return res.status(200).json({ availableTeachers: [] }); // Subject already scheduled at this time
    }

    // 2. Find all teachers busy at this time
    const busyTimetables = await Timetable.find({ "periods.time": timeSlot });

    const busyTeacherIds = new Set();
    for (const timetable of busyTimetables) {
      for (const period of timetable.periods) {
        if (period.time === timeSlot && period.teacher) {
          busyTeacherIds.add(period.teacher.toString());
        }
      }
    }

    // 3. Return subject teachers who are not busy at that time
    const availableTeachers = subjectTeachers.filter(
      t => !busyTeacherIds.has(t._id.toString())
    );

    res.json({ availableTeachers });

  } catch (error) {
    console.error('Error fetching available teachers:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};







const  LeaveAprroval = async (req, res) => {
  const { id } = req.params;
  const { status, reason } = req.body;

  if (!['Approved', 'UnApproved'].includes(status)) {
    return res.status(400).json({ message: 'Invalid status value' });
  }

  try {
    const leave = await Leave.findById(id).populate('student');
    console.log("Leave.students:", leave.student);
    if (!leave) return res.status(404).json({ message: 'Leave not found' });

    leave.status = status;
    leave.reason = reason || leave.reason;

    await leave.save();

    // ✅ Real-time notification
    // const io = req.app.get("io");

    // if (leave.student && leave.student._id) {
    //   const studentId = leave.student._id.toString();
    //   console.log(`📡 Emitting leave-status-updated to student ID: ${studentId}`);

    //   io.to(studentId).emit("leave-status-updated", {
    //     title: `Leave ${status}`,
    //     message: `Your leave on ${new Date(leave.date).toLocaleDateString()} was ${status}. Reason: ${reason || 'No reason provided.'}`,
    //     teacherName: req.user?.name || req.username || "Admin",
    //   });
    // }








    if (Array.isArray(leave.student) && leave.student.length > 0) {
  const io = req.app.get("io");

  leave.student.forEach(student => {
    const studentId = student._id?.toString(); // Use optional chaining to avoid crash

    if (studentId) {
      console.log(`📡 Emitting leave-status-updated to student ID: ${studentId}`);

      io.to(studentId).emit("leave-status-updated", {
        title: `Leave ${status}`,
        message: `Your leave on ${new Date(leave.date).toLocaleDateString()} was ${status}. Reason: ${reason || 'No reason provided.'}`,
        teacherName: req.user?.name || req.username || "Admin",
      });
    } else {
      console.warn("⚠️ student._id is missing or invalid:", student);
    }
  });
} else {
  console.warn("⚠️ leave.student is empty or not an array");
}

    res.status(200).json({ message: 'Leave updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};


// const  LeaveAprroval = async (req, res, next) => {
//   const { id } = req.params;
//   const { status, reason } = req.body;

//   if (!['Approved', 'UnApproved'].includes(status)) {
//     return res.status(400).json({ message: 'Invalid status value' });
//   }

//   try {
//     const leave = await Leave.findById(id).populate('student'); // populate student info
//     if (!leave) return res.status(404).json({ message: 'Leave not found' });

//     leave.status = status;
//     leave.reason = reason || leave.reason;

//     await leave.save();

//     // ✅ Send real-time notification to student
//     // const io = req.app.get("io"); // get io instance
//     // if (leave.student && leave.student.length > 0) {
//     //   leave.student.forEach(student => {
//     //     io.to(student._id.toString()).emit("leave-status-updated", {
//     //       status,
//     //       reason,
//     //       date: leave.date,
//     //     });
//     //   });
//     // }

//     const io = req.app.get("io"); // get io instance
//      if (Array.isArray(leave.student) && leave.student.length > 0) {
//   leave.student.forEach(student => {
//     const studentId = student._id.toString();
//     console.log(`📡 Emitting to student ID: ${studentId}`);

//     io.to(studentId).emit("leave-status-updated", {
//       title: `Leave ${status}`,
//       message: `Your leave on ${new Date(leave.date).toLocaleDateString()} was ${status}. Reason: ${reason || 'No reason provided.'}`,
//       teacherName: req.user?.name || req.username || "Admin",
//     });
//   });
// }


// //     if (leave.student && leave.student._id) {
// //       console.log(`📡 Emitting leave-status-updated to student ID: ${studentId}`);
// //   const studentId = leave.student._id.toString();
// //   io.to(studentId).emit("leave-status-updated", {
// //     title: `Leave ${status}`,
// //     message: `Your leave on ${new Date(leave.date).toLocaleDateString()} was ${status}. Reason: ${reason || 'No reason provided.'}`,
// //     teacherName: req.user?.name || req.username || "Admin",
// //   });
// // }



// // if (leave.student) {
// //   const studentId = leave.student._id.toString();

// //   io.to(studentId).emit("leave-status-updated", {
// //     title: `Leave ${status}`,
// //     message: `Your leave on ${new Date(leave.date).toLocaleDateString()} was ${status}. Reason: ${reason || 'No reason provided.'}`,
// //     teacherName: req.user.name || req.username || "Admin" // or req.user.name if auth middleware is present
// //   });
// // }

//     res.status(200).json({ message: 'Leave updated successfully' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server error' });
//   }
// };



const SignOut = async function (req, res, next) {
    try {
        res.clearCookie("token");
        res.status(200).json({ message: "User has been logged out." });
    } catch (err) {
        console.error("SignOut error:", err.message);
        return next(err);
    }
};
module.exports = {
    AddTimeTable,
    AddStaff,
    AddSession,
    AddSubjects,
    AddTeacher,
    AddStudent,
    SignupAdmin,
    LeaveAprroval,
    getAvailableTeachers,
    AdminSignIn,
    AddClass,
    SignOut,
};