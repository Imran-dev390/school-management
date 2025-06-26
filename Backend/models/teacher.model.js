const mongoose = require("mongoose");
const Attendance = require("./attendance.model");
const TeacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength:3,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minLength:11,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, 'Invalid email format']
  },
  gender: {
    type: String,
    minLength:4,
    enum: ["male", "female"],
  },
  password: {
    type: String,
    minLength:8,
    required: true,
    minlength: 3,
  },
  phone: {
    type: String,
    required: true,
    minlength: 11
  },
  dob: {
    type: Date,
    default:Date.now,
  },
  qualifications:{
    type:String,
    required:true,
  },
   profileImage:{ 
    data:Buffer,
    contentType: String,
   },
    CnicFrontImage:{ 
    data:Buffer,
    contentType: String,
   },
   CnicBackImage:{ 
    data:Buffer,
    contentType: String,
   },
    CnicNumber:{
    type:String,
    required:true,
    minLength:11,
   },
  salary: {
    type: Number,
    required:true,
  },
  profile:{
    type: String,
    default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  },
// In Teacher model
teachSubject: [{
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Subject'
}],
studentleave:[{
  type:mongoose.Schema.Types.ObjectId,
  ref:"Leave"
}],
// assignedClass: [{
//   class:[{type: mongoose.Schema.Types.ObjectId, ref: 'class' }],
//   incharge: { type: Boolean, default: false }
// }],
assignedClass: [{
  class: { type: mongoose.Schema.Types.ObjectId, ref: 'class' },
  incharge: { type: Boolean, default: false }
}],
session: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Session'
},
address:{
  type:String,
  minLength:8,
  required:true,
},
announcements:[
  {
  type:mongoose.Schema.Types.ObjectId,
  ref:"Announcement",
}],
  attendance:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Attendance",
  }],
  role:{
    type:String,
    default:"Teacher",
  }
});
// teacher ky pass  reference hai asissigned class ka
// class 
 // 
module.exports = mongoose.model("Teacher", TeacherSchema);
