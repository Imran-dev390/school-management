const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength:3,
    required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'],
  },
  dob: {
    type: String,
    required:true,
  },
  concession: {
  type: Number,
  default: 0,
  min: 0,
  max: 100

},
feeVouchers: [{
  type: mongoose.Schema.Types.ObjectId,
  ref: "FeeVoucher"
}],

  AdmissionNum:{
    type:String,
    required:true,
  },
  Roll:{
    type:String,
    required:true,
  },
  phone:{
    type:String,
    minLength:11,
    required:true,
    unique:true,
  },
  email: {
      minLength:11,
      type: String,
      required: true,
      unique:true,
  },
  password:{
    type:String,
    minLength:8,
    required:true,
  },
  feesPaid: {
    type: Number,
    default:null,
  },
  parent:{
    type:String,
    required:true,
  },
  adress:{
     type:String,
     required:true,
  },
  leave:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Leave",
  }],
  session: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Session'
},
  prevschoolName:{
    type:String,
    required:true,
  },
  prevClass:{
    type:String,
    required:true,
  },
  prevSchoolAddress:{
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
   bformImage:{
     data:Buffer,
     contentType:String,
   },
   bformNumber:{
    type:String,
    required:true,
    minLength:11,
   },
   CnicNumber:{
    type:String,
    required:true,
    minLength:11,
   },
  Classs: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'class',
      required:true,
  },
  profile:{
    type: String,
    default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  },
sessionHistory: [{
  session: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Session",
  },
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "class",
  },
  generateAdmissionVoucher:{
    type:Boolean,
    default:false,
  },
  promotedAt: {
    type: Date,
    default: Date.now,
  }
}],
// transferHistory: [{
//   fromSchool: String,
//   toSchool: String,
//   fromClass: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'class',
//   },
//   toClass: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'class',
//   },
//   fromSection: String,  // e.g., 'A'
//   toSection: String,    // e.g., 'B'
//   note: String,
//   transferredAt: {
//     type: Date,
//     default: Date.now,
//   }
// }],
  role:{
    type:String,
    default:"Student"
  }
},{ timestamps: true });

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;

