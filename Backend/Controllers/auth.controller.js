const User = require("../models/student.model");
const Jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Teacher = require("../models/teacher.model");
const Class = require("../models/class.model");
//const User = require("../models/student.model");
const Session = require("../models/Session.model");
const Staff = require("../models/addStaff.model");
const Timetable = require('../models/timetable.model');
const Admin = require("../models/admin.model");
const updateClassGenderCount = require("../utils/updateClassGenderCount");
const upload = require("../middlewares/upload");
const Subjects = require("../models/Subjects.model");
const Student = require("../models/student.model");
const Subject = require("../models/Subjects.model");
/*const AddStudent = async (req, res) => {
  const { name, email, password,phone,gender,dob,adress,parent ,Class} = req.body;
  try {
    const student = await User.findOne({ email });
    const classs = await Class.findOne({Class});
    const classes = await Class.find();
  //  const teacher = await Teacher.findOne({ email });
      const number = await User.findOne({phone});
    if (student) {
      return res.status(401).json({ message: 'User already registered with this email' });
    }
    if(classs){
      return res.status(401).json({message:"Class Already Assigned to Student !"});
    }
    if (number) {
      return res.status(401).json({ message: 'User already registered with this Contact Number' });
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
     if(phone.length !==11){
      return res.status(401).json({message:"Phone Digits Should be 11."})
     }
     //Sariab Road Quetta
     if(!adress){
      return res.status(401).json({message:"Adress is Required..."})
     }
    const hashedPass = await bcrypt.hash(password, 10);
    let user = await User.create({name,email,password:hashedPass,phone,gender,dob,adress,parent});
    /*let token;
    token = Jwt.sign({ id: user._id, email: user.email }, process.env.JWT_KEY, {
      expiresIn: "1d" // 👈 This is the token lifespan
    });
    res.cookie("token", token,{
      httpOnly: true,        // 🚫 JavaScript can't access this cookie at all
      secure: true,          // ✅ Only sent over HTTPS
      sameSite: "strict",    // 🚫 Not sent in cross-site requests (CSRF protection)
    });
    console.log("📌 Token:", token);*/
    // ✅ Wait for Class to be populated
 //   user = await user.populate("class");
 //   const admin = await Admin.findById(req.userId);
 //   if(!admin){
 //     return res.status(404).json({message:"Admin Not Found"});
 //   }
 //    admin.students.push(user._id);
 //  await admin.save();
 //   return res.status(201).json(user);
//
 // } catch (err) {
 //   console.error("Signup error:", err.message);
 //   return res.status(500).json({ message: "Server error on signup" });
 // }
/*};*/





/*const AddStudent = async (req, res) => {
  const { name, email, password, phone, gender, dob, adress, parent, Classs: classId } = req.body;
console.log("reqeseted body",req.body)
  try {
    // Class = Class.data;
    // User.findOne({Class});
    // Check if user with email or phone exists
    const existingEmail = await User.findOne({ email });
    const existingPhone = await User.findOne({ phone });
    /// Validate Student Class exists
    const existStudentClass = await User.findOne({Classs:classId});
    if (existingEmail) {
      return res.status(401).json({ message: 'User already registered with this email' });
    }
    if (existingPhone) {
      return res.status(401).json({ message: 'User already registered with this Contact Number' });
    }
       if(existStudentClass){
        return res.status(401).json({message:"Student Already assigned to this Class"})
       }
    // Field validations
    if (name.length < 3) {
      return res.status(401).json({ message: "Name Length Should be 3 Characters." });
    }
    if (email.length < 11 || !email.includes("@gmail.com")) {
      return res.status(401).json({ message: "Invalid Email or Length Should be 11 Characters." });
    }
    if (password.length < 8) {
      return res.status(401).json({ message: "Password Length Should be 8 Characters." });
    }
    if (phone.length !== 11) {
      return res.status(401).json({ message: "Phone Digits Should be 11." });
    }
    if (!adress) {
      return res.status(401).json({ message: "Address is Required..." });
    }
    const enteredClassMatch = await Class.findById(classId);
     if(!enteredClassMatch){
        return res.status(404).json({message:"Entered Class Not Found in System."})
     }
    const hashedPass = await bcrypt.hash(password, 10);

    // Create user with class assigned
    let user = await User.create({
      name,
      email,
      password: hashedPass,
      phone,
      gender,
      dob,
      adress,
      parent,
      Classs: enteredClassMatch._id,
    });

   
    await user.populate("Classs"); // ✅ This works, but doesn’t modify `user` directly in-place (for .create() output)

    // Add to admin
    const admin = await Admin.findById(req.userId);
    if (!admin) {
      return res.status(404).json({ message: "Admin Not Found" });
    }

    admin.students.push(user._id);
    await admin.save();

    return res.status(201).json(user);

  } catch (err) {
    console.error("Signup error:", err.message);
    return res.status(500).json({ message: "Server error on signup" });
  }
};*/




// const AddStudent = async (req, res) => {
//   const { name, email, password, phone, gender, dob, adress, parent, Classs: classId } = req.body;
//   console.log("Requested body:", req.body.classes);

//   try {
//     // Check if classId is a valid MongoDB ObjectId
//     const mongoose = require('mongoose');
//     if (!mongoose.Types.ObjectId.isValid(classId)) {
//       return res.status(400).json({ message: "Invalid class ID format" });
//     }

//     // Check if user with email or phone exists
//     const existingEmail = await User.findOne({ email });
//     const existingPhone = await User.findOne({ phone });

//     if (existingEmail) {
//       return res.status(401).json({ message: 'User already registered with this email' });
//     }

//     if (existingPhone) {
//       return res.status(401).json({ message: 'User already registered with this Contact Number' });
//     }

//     // Check if the entered class exists
//     console.log("Searching for class with ID:", classId);
//     const enteredClassMatch = await Class.findById(classId);
//     if (!enteredClassMatch) {
//       return res.status(404).json({ message: "Entered Class Not Found in System." });
//     }
//     console.log("Class found:", enteredClassMatch);

//     // Create user
//     const hashedPass = await bcrypt.hash(password, 10);
//     let user = await User.create({
//       name,
//       email,
//       password: hashedPass,
//       phone,
//       gender,
//       dob,
//       adress,
//       parent,
//       Classs: enteredClassMatch._id,
//     });

//     await user.populate("Classs"); // Populate the class field
//      enteredClassMatch.students.push(user._id);
//      await enteredClassMatch.save();
//     // Add to admin
//     const admin = await Admin.findById(req.userId);
//     if (!admin) {
//       return res.status(404).json({ message: "Admin Not Found" });
//     }

//     admin.students.push(user._id);
//     await admin.save();
// // ✅ Update gender counts in the class
//  await updateClassGenderCount(classId);  // 👈 Add this line here
//     return res.status(201).json(user);
//   } catch (err) {
//     console.error("Signup error:", err.message);
//     return res.status(500).json({ message: "Server error on signup" });
//   }
// };






























































const AddStudent = async (req, res) => {
  const mongoose = require('mongoose');
  const { 
    name, email, password, phone, gender, dob, adress, parent, 
    Classs: classId, prevschoolName, prevSchoolAddress, 
    bformNumber, CnicNumber, feesPaid 
  } = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(classId)) {
      return res.status(400).json({ message: "Invalid class ID format" });
    }

    // Check if email or phone already exists
    const existingEmail = await User.findOne({ email });
    const existingPhone = await User.findOne({ phone });

    if (existingEmail) {
      return res.status(401).json({ message: 'User already registered with this email' });
    }

    if (existingPhone) {
      return res.status(401).json({ message: 'User already registered with this Contact Number' });
    }

    // Check class existence
    const enteredClassMatch = await Class.findById(classId);
    if (!enteredClassMatch) {
      return res.status(404).json({ message: "Entered Class Not Found in System." });
    }

    // Handle image buffers from multer (files are expected to have same field names)
    const profileImage = req.files?.profileImage?.[0];
    const CnicFrontImage = req.files?.CnicFrontImage?.[0];
    const CnicBackImage = req.files?.CnicBackImage?.[0];
    const bformImage = req.files?.bformImage?.[0];

    const hashedPass = await bcrypt.hash(password, 10);

    let user = await User.create({
      name,
      email,
      password: hashedPass,
      phone,
      gender,
      dob,
      adress,
      parent,
      Classs: enteredClassMatch._id,
      prevschoolName,
      prevSchoolAddress,
      bformNumber,
      CnicNumber,
      feesPaid: feesPaid || null,

      // Images as Buffer
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
    enteredClassMatch.students.push(user._id);
    await enteredClassMatch.save();

    const admin = await Admin.findById(req.userId);
    if (!admin) {
      return res.status(404).json({ message: "Admin Not Found" });
    }

    admin.students.push(user._id);
    await admin.save();

    await updateClassGenderCount(classId);

    return res.status(201).json(user);
  } catch (err) {
    console.error("Signup error:", err.message);
    return res.status(500).json({ message: "Server error on signup" });
  }
};












/*const AddClass = async (req,res)=>{
  const {name,year,section}  = req.body;
  try {
         let classes = await Class.findOne({name});
         if(classes){
          return res.json(401).json({message:"Class Already Registered..."})
         }
         let admin = await Admin.findOne({_id:req.userId});
         console.log("Admin Id at AddClass",admin);
         if(!admin){
          return res.status(401).json({message:"Only Admin Can Add Class"});
         }
        let classs = await Class.create({name,year,section});
         admin.classes.push(classs);
         await admin.save();
             return res.status(200).json(classs);
  } catch(err){
    return res.json(404).json({message:"Error on AddClass authController.js"})
  }
}*/

/*const AddTeacher = async (req, res) => {
  const { name, email, password,phone,salary,dob,gender,qualifications} = req.body;
  try {
    const teacher = await Teacher.findOne({ email });
  //  const teacher = await Teacher.findOne({ email });

    if (teacher) {
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
     if(phone.length !==11){
      return res.status(401).json({message:"Phone Digits Should be 11."})
     }
    const hashedPass = await bcrypt.hash(password, 10);
    const existemail = await Teacher.find({ email: "amir@gmail.com" })
    console.log("checking email duplicate",existemail)
    let user = await Teacher.create({name,email,password:hashedPass,phone,salary,dob,gender,qualifications});
    const admin = await Admin.findOne({_id:req.userId});
console.log("checking admin id",req.userId);
    if(!admin){
      return res.status(404).json({message:"Admin Not Found"});
    }
     admin.teachers.push(user);
   await admin.save();
    // let token;
    // token = Jwt.sign({ id: user._id, email: user.email }, process.env.JWT_KEY, {
    //   expiresIn: "1d" // 👈 This is the token lifespan
    // });
    // res.cookie("token", token,{
    //   httpOnly: true,        // 🚫 JavaScript can't access this cookie at all
    //   secure: true,          // ✅ Only sent over HTTPS
    //   sameSite: "strict",    // 🚫 Not sent in cross-site requests (CSRF protection)
    // });
    // console.log("📌 Token:", token);
//    return res.status(201).json(us);
//return res.status(200).json(user);
  } catch (err) {
    console.error("Signup error:", err.message);
    return res.status(500).json({ message: "Server error on signup" });
  }
};*/




































/*const AddClass = async (req, res) => {
  const { name, year, section ,subjects} = req.body;

  try {
    // Check if class with same name already exists
   // Check if class with the same name and section already exists
   const existingClass = await Class.findOne({ name,section});
   const existingSubjects = await Subject.findOne({subjects});
   console.log("existingSubjects",existingSubjects)
   if(existingSubjects){
    return res.status(401).json({message:"Class Already Exist this subjects"})
   }
    
   if (existingClass) {
     return res.status(401).json({ message: "This class with the same name and section is already registered..." });
   }

    // Verify admin
    const admin = await Admin.findById(req.userId);
    if (!admin) {
      return res.status(401).json({ message: "Only admin can add class." });
    }

    // Create new class
    const newClass = await Class.create({ name, year, section,subjects});

//existingSubjects.classes.push(newClass._id);
//await existingSubjects.save();
    // Add class to admin's class list
    admin.classes.push(newClass._id);
    await admin.save();

    return res.status(200).json(newClass);
  } catch (err) {
    console.error("Error in AddClass:", err);
    return res.status(500).json({ message: "Internal server error while adding class." });
  }
};*/










/*const AddClass = async (req, res) => {
  const { name, year, section,} = req.body;

  try {
    // 1. Check if a class with the same name, section, and year exists
    const existingClass = await Class.findOne({ name, section, year });

    if (existingClass) {
      return res.status(409).json({ message: "A class with the same name, section, and year already exists." });
    }

    // 2. Check if a class with same subjects already exists for the same grade and section (optional logic)

    // 3. Verify admin
    const admin = await Admin.findById(req.userId);
    if (!admin) {
      return res.status(401).json({ message: "Only an admin can add a class." });
    }

    // 4. Create and save new class
    const newClass = await Class.create({ name, year, section, subjects });

    // 5. Link new class to admin
    admin.classes.push(newClass._id);
    await admin.save();

    return res.status(201).json(newClass);
  } catch (err) {
    console.error("Error in AddClass:", err.message);
    return res.status(500).json({ message: "Internal server error while adding class." });
  }
};*/




const AddClass = async (req, res) => {
  const { name, year, section} = req.body;
  try {
    // 1. Normalize inputs to avoid duplicates due to case or whitespace
    const normalizedName = name.trim();
    const normalizedSection = section.trim().toUpperCase();

    // 2. Allow same name (grade) but NOT same section+name in same year
    const duplicateClass = await Class.findOne({
      name: normalizedName,
      section: normalizedSection,
      year
    });

    if (duplicateClass) {
      return res.status(409).json({
        message: `Section "${normalizedSection}" for "${normalizedName}" in year ${year} already exists.`
      });
    }

    // 3. Verify admin user
    const admin = await Admin.findById(req.userId);
    if (!admin) {
      return res.status(401).json({ message: "Only an admin can add a class." });
    }

    // 4. Create the new class
    const newClass = await Class.create({
      name: normalizedName,
      section: normalizedSection,
      year,
    });

    // 5. Link class to admin
    admin.classes.push(newClass._id);
    await admin.save();

    return res.status(201).json(newClass);
  } catch (err) {
    console.error("Error in AddClass:", err.message);
    return res.status(500).json({ message: "Internal server error while adding class." });
  }
};








/*const AddSubjects  = async (req,res)=>{
  const { name, code, classes, department } = req.body;
    try {
      console.log("REQUEST COMMING FROM BACKEND")
      const classes = await Class.findOne({classes});
console.log("classes",classes);
      // Create a new subject
      const existSubject = await Subject.findOne({name,code,classes,department});
      if(existSubject){
        return res.status(401).json({message:"Subject Already Added or Assigned to the Class"})
      }
      if(classes){
        return res.status(401).json({message:"CLass variable is working on AddSubjects"})
      }
      const admin = await Admin.findById(req.userId);
      const newSubject = new Subject({
        name,
        code,
        classes,
        department
      });
  
      // Save the subject to the database
      classes.subjects.push(newSubject._id);
      classes.populate("subjects");
      await classes.save();
      await newSubject.save();
      res.status(201).json({
        message: 'Subject added successfully!',
        subject: newSubject
      });
      admin.subjects.push(newSubject._id);
      await admin.save();
    } catch (err) {
      console.error('Error adding subject:', err);
      res.status(500).json({ message: 'Server error while adding subject' });
    }
  }*/

















    // const AddSubjects = async (req, res) => {
    //   const { name, code, classes, department } = req.body;
    
    //   try {
    //     console.log("REQUEST COMING FROM FRONTEND");
    
    //     // Find the class document
    //     const classDoc = await Class.findById(classes);
    //     if (!classDoc) {
    //       return res.status(404).json({ message: "Class not found" });
    //     }
    
    //     // Check if subject already exists for this class
    //     const existSubject = await Subject.findOne({ name, code, department, classes });
    //     if (existSubject) {
    //       return res.status(409).json({ message: "Subject already exists for this class" });
    //     }
    
    //     // Create new subject
    //     const newSubject = new Subject({
    //       name,
    //       code,
    //       classes,
    //       department
    //     });

    //     await newSubject.save();
    
    //     // Associate with class
    //     classDoc.populate("subjects");
    //     classDoc.subjects.push(newSubject._id);
    //     await classDoc.save();

    //     // Associate with admin
    //     const admin = await Admin.findById(req.userId);
    //     if (admin) {
    //       admin.subjects.push(newSubject._id);
    //       await admin.save();
    //     }
    
    //     res.status(201).json({
    //       message: 'Subject added successfully!',
    //       subject: newSubject
    //     });
    
    //   } catch (err) {
    //     console.error('Error adding subject:', err);
    //     res.status(500).json({ message: 'Server error while adding subject' });
    //   }
    // };
    


const AddSubjects = async (req, res) => {
  const { name, code, classes, department } = req.body; // `classes` is an array

  try {
    console.log("REQUEST COMING FROM FRONTEND");

    // 1. Validate all class IDs exist
    const classDocs = await Class.find({ _id: { $in: classes } });
    if (classDocs.length !== classes.length) {
      return res.status(404).json({ message: "One or more classes not found" });
    }

    // 2. Check if subject already exists with same name/code/department and assigned to any of these classes
    const existingSubject = await Subject.findOne({
      name,
      code,
      department,
      classes: { $in: classes }, // checks if any of the given classes already have this subject
    });

    if (existingSubject) {
      return res.status(409).json({ message: "Subject already exists for one or more selected classes" });
    }

    // 3. Create the new subject
    const newSubject = new Subject({
      name,
      code,
      department,
      classes, // store array of class IDs
    });

    await newSubject.save();

    // 4. Add subject to each class document
    await Promise.all(
      classDocs.map(async (cls) => {
        cls.subjects.push(newSubject._id);
        await cls.save();
      })
    );

    // 5. Associate with admin
    const admin = await Admin.findById(req.userId);
    if (admin) {
      admin.subjects.push(newSubject._id);
      await admin.save();
    }

    res.status(201).json({
      message: "Subject added successfully!",
      subject: newSubject,
    });
  } catch (err) {
    console.error("Error adding subject:", err);
    res.status(500).json({ message: "Server error while adding subject" });
  }
};




/*const classes = async(req,res)=>{
  const clas = await Class.find();
  console.log(clas);
}
classes();*/






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





























/*const AddTeacher = async (req, res) => {
  try {
    let { name, email, password, phone, salary, dob, gender, qualifications,teachSubject, assignedClass} = req.body;

    // Normalize email
    email = email.trim().toLowerCase();

    // Check if teacher exists
    const existingTeacher = await Teacher.findOne({ email });
    const existingTeacherClass = await Teacher.findOne({ assignedClass});
//    const classs = await Class.findOne({name:assignedClass})
    if (existingTeacher) {
      return res.status(400).json({ message: "Teacher already registered with this email" });
    }
    if (existingTeacherClass) {
      return res.status(400).json({ message: "Teacher already registered with this Class" });
    }
    // Validations
    if (name.length < 3) {
      return res.status(400).json({ message: "Name length should be at least 3 characters." });
    }

    if (email.length < 11 || !email.includes("@gmail.com")) {
      return res.status(400).json({ message: "Invalid email or length should be at least 11 characters." });
    }

    if (password.length < 8) {
      return res.status(400).json({ message: "Password should be at least 8 characters." });
    }

    if (phone.length !== 11) {
      return res.status(400).json({ message: "Phone number must be exactly 11 digits." });
    }
    if(teachSubject.length < 4){
      return res.status(400).json({message:"Invalid Subject Entered..."})
    }
    // ✅ Check admin first
    const admin = await Admin.findOne({_id:req.userId});
    console.log("admin on add teacher ",admin);
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    /*if(classs){
           return res.status(401).json({message:"Class Already Assigned to this teacher..."})
    }*/
    // ✅ Hash password and create teacher
   // const classes = await Class.find
    /*const hashedPass = await bcrypt.hash(password, 10);

    let newTeacher;
    try {
      newTeacher = await Teacher.create({
        name,
        email,
        password: hashedPass,
        phone,
        salary,
        assignedClass,
        dob,
        gender,
        qualifications,
        teachSubject,
      });
    } catch (err) {
      if (err.code === 11000) {
        return res.status(400).json({ message: "Email already exists" });
      }
      throw err;
    }

// Attach class to Teacher 
//classs.teacher.push(newTeacher);
//await classs.save(); 

    // ✅ Attach to admin and save
  /*  admin.teachers.push(newTeacher._id);
    await admin.save();

    return res.status(201).json({ message: "Teacher registered successfully", teacher: newTeacher });
  } catch (err) {
    console.error("Signup error:", err);
    return res.status(500).json({ message: "Server error on signup" });
  }
};*/



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
  teachSubject,
  assignedClass,
  incharge  // ✅ <-- you missed this!
} = req.body;

     // 🔒 Input Sanitization
     email = email.trim().toLowerCase();
     name = name.trim();
     teachSubject = teachSubject.trim();
     // ✅ Class Name to ObjectId
     const classDoc = await Class.findOne({_id: assignedClass });
     if (!classDoc) {
       return res.status(400).json({ message: "Class not found with name: " + assignedClass });
     }
     assignedClass = classDoc._id;  // Now it's valid for MongoDB
     // ✅ Check if teacher already exists by email or class
     const existingTeacher = await Teacher.findOne({ email });
     if (existingTeacher) {
       return res.status(400).json({ message: "Teacher already registered with this email" });
     }
 //const newSubject = await Subject.findOne({name});
 const subjectDoc = await Subject.findById(teachSubject); 
 //const subjectDoc = await Subject.findOne({ name: teachSubject });
    if (!subjectDoc) {
      return res.status(400).json({ message: "Subject not found: " + teachSubject });
    }
     const existingTeacherClass = await Teacher.findOne({ assignedClass });
     /*if (existingTeacherClass) {
       return res.status(400).json({ message: "Class already assigned to another teacher" });
     }*/
     // ✅ Field Validations
     if (name.length < 3) {
       return res.status(400).json({ message: "Name must be at least 3 characters" });
     }
     if (email.length < 11 || !email.includes("@gmail.com")) {
       return res.status(400).json({ message: "Email must be valid and at least 11 characters" });
     }
     if (password.length < 8) {
       return res.status(400).json({ message: "Password must be at least 8 characters" });
     }
     if (!/^\d{11}$/.test(phone)) {
       return res.status(400).json({ message: "Phone number must be exactly 11 digits" });
     }
     if (teachSubject.length < 4) {
       return res.status(400).json({ message: "Subject must be at least 4 characters" });
     }
     // ✅ Check Admin Exists
     const admin = await Admin.findById(req.userId);
     if (!admin) {
       return res.status(404).json({ message: "Admin not found" });
     }
     // 🔐 Hash Password
     const hashedPassword = await bcrypt.hash(password, 10);
     // ✅ Create New Teacher
    //  const newTeacher = await Teacher.create({
    //    name,
    //    email,
    //    password: hashedPassword,
    //    phone,
    //    salary,
    //    dob,
    //    gender,
    //    qualifications,
    //    teachSubject:subjectDoc._id,
    //    assignedClass
    //  });
    const newTeacher = await Teacher.create({
  name,
  email,
  password: hashedPassword,
  phone,
  salary,
  dob,
  gender,
  qualifications,
  teachSubject: subjectDoc._id,
  assignedClass: [
    {
      class: assignedClass,
      incharge:incharge || false,
    }
  ]
});

     // ✅ Attach teacher to admin
     newTeacher.populate("assignedClass");
     newTeacher.populate("teachSubject");
     //newTeacher.populate("teachSubject");
     await newTeacher.save();
     classDoc.teacher.push(newTeacher._id);
     await classDoc.save();
     admin.teachers.push(newTeacher._id);
     await admin.save();
    //  // ✅ Populate the assigned class
    //  await newTeacher.populate({
    //    path: 'assignedClass', // Populate the class details from the assignedClass field
    //    select: 'name grade'   // You can select only the fields you need, like 'name' and 'grade'
    //  });
     return res.status(201).json({
       message: "Teacher registered successfully",
       teacher: newTeacher
     });
   } catch (err) {
     console.error("Signup error:", err);
     return res.status(500).json({ message: "Server error on signup", error: err.message });
   }
 };



/*const AddTeacher = async (req, res) => {
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
      teachSubject,
      assignedClass  // This comes as a name like "grade 5"
    } = req.body;

    // 🔒 Input Sanitization
    email = email.trim().toLowerCase();
    name = name.trim();
    teachSubject = teachSubject.trim();

    // ✅ Class Name to ObjectId
    const classDoc = await Class.findOne({ name: assignedClass });
    if (!classDoc) {
      return res.status(400).json({ message: "Class not found with name: " + assignedClass });
    }
    assignedClass = classDoc._id;

    // ✅ Check if teacher already exists by email
    const existingTeacher = await Teacher.findOne({ email });
    if (existingTeacher) {
      return res.status(400).json({ message: "Teacher already registered with this email" });
    }

    // ✅ Check if subject exists
    const subjectDoc = await Subject.findOne({ name: teachSubject });
    if (!subjectDoc) {
      return res.status(400).json({ message: "Subject not found: " + teachSubject });
    }

    // ✅ Field Validations
    if (name.length < 3) return res.status(400).json({ message: "Name must be at least 3 characters" });
    if (email.length < 11 || !email.includes("@gmail.com")) return res.status(400).json({ message: "Email must be valid and at least 11 characters" });
    if (password.length < 8) return res.status(400).json({ message: "Password must be at least 8 characters" });
    if (!/^\d{11}$/.test(phone)) return res.status(400).json({ message: "Phone number must be exactly 11 digits" });
    if (teachSubject.length < 4) return res.status(400).json({ message: "Subject must be at least 4 characters" });

    // ✅ Check Admin Exists
    const admin = await Admin.findById(req.userId);
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // 🔐 Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Create New Teacher
    const newTeacher = await Teacher.create({
      name,
      email,
      password: hashedPassword,
      phone,
      salary,
      dob,
      gender,
      qualifications,
      teachSubject: subjectDoc._id,
      assignedClass
    });

    // ✅ Attach teacher to class and admin
    if (!Array.isArray(classDoc.teacher)) classDoc.teacher = [];
    classDoc.teacher.push(newTeacher._id);
    await classDoc.save();

    admin.teachers.push(newTeacher._id);
    await admin.save();

    // ✅ Populate the fields
    await newTeacher.populate("assignedClass", "name grade");
    await newTeacher.populate("teachSubject", "name");

    return res.status(201).json({
      message: "Teacher registered successfully",
      teacher: newTeacher
    });

  } catch (err) {
    console.error("Signup error:", err);
    return res.status(500).json({ message: "Server error on signup", error: err.message });
  }
};*/

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

/*const AdminSignIn = async (req, res, next) => {
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

    res.cookie("token", token, { httpOnly: true, maxAge: 86400000 }); // Optional cookie settings
    return res.status(200).json({ message: `Successfully logged in as ${role}`, token });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error during sign-in" });
  }
};*/






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
    const { name, role, email, password, phone,address } = req.body;
    const file = req.file;

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
    admin.staff.push(newStaff._id);
    await admin.save();
    res.status(201).json({ message: 'Staff registered successfully', staff: newStaff });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error registering staff', error });
  }
};3
const AddTimeTable = async (req, res) => {
  try {
    const { className, day, periods } = req.body;

    // Find the class by ID (since you're passing _id in frontend)
    const classDoc = await Class.findById(className);
    if (!classDoc) {
      return res.status(404).json({ message: 'Class not found' });
    }

    // Optional: Validate that each subject exists (useful but not required for MVP)
    const validPeriods = await Promise.all(
      periods.map(async (p,i) => {
        const subjectDoc = await Subject.findById(p.subject);
        if (!subjectDoc) {
          throw new Error(`Subject with ID ${p.subject} not found`);
        }
        return {
          periodNumber: i + 1,
          subject: subjectDoc._id, // or full doc if needed
          time: p.time,
        };
      })
    );

    // Save new timetable
    const timetable = new Timetable({
      className: classDoc._id,
      day,
      periods: validPeriods,
    });

    await timetable.save();

    // Link timetable to class
    classDoc.timeTable.push(timetable._id);
    await classDoc.save();

    res.status(201).json({ message: 'Timetable saved successfully' });

  } catch (error) {
    console.error('Timetable creation error:', error.message);
    res.status(500).json({ error: error.message || 'Error saving timetable' });
  }
};


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
    AdminSignIn,
    AddClass,
    SignOut,
};
