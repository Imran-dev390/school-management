const mongoose = require("mongoose");
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
  salary: {
    type: Number,
    required:true,
  },
  profile:{
    type: String,
    default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  },
  teachSubject:{
    type:String,
    required:true,
  },
  assignedClass: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'class',
  },
  role:{
    type:String,
    default:"Teacher",
  }
});
// teacher ky pass  reference hai asissigned class ka
// class 
 // 
module.exports = mongoose.model("Teacher", TeacherSchema);
