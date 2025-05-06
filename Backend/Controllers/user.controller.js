const User = require("../models/student.model");
const mongoose = require('mongoose');
const Teacher = require("../models/teacher.model");
//let id = req.userId;
//console.log("user Id", id);
const Admin = require("../models/admin.model");


const getCurrentUser = async function(req,res){
  // user is getting Null Why i am reciving the req.userId from id variable
  try {
  let id = req.userId;
  console.log("requeste User Id",req.userId);
    const user = await User.findOne({_id:req.userId}).select("-password");
  //  console.log("🧪 user with findOne:", user);
     const admin = await Admin.findOne({_id:req.userId}).select("-password");
     console.log("🧪 admin with findOne:", admin);
    const teacher = await Teacher.findOne({_id:req.userId}).select("-password");
    console.log("🧪 teacher with findOne:", teacher);
   // const teacher = await Teacher.findOne({_id:req.userId}).select("-password");
   // const admin = await Admin.findOne({_id:req.userId}).select("-password");
   // console.log("teacher is",teacher);
    if (!req.userId) {
      return res.status(400).json({ message: "User ID is missing" });
    }
//    const user = await User.findById(req.userId);
 //   console.log("user",user);
 if(user){      
 return res.status(200).json(user);
 } 
 if(teacher){
  return res.status(200).json(teacher);
 }
 if(admin){
return res.status(200).json(admin);
 }
}
  catch(err){
 console.log("User Controller Error",err);
 res.status(401).json("Error")
  }
}
module.exports = getCurrentUser;