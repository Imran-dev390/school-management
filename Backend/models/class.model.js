const mongoose = require( "mongoose");
const classSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  section:{
    type:String,
    required:true,
  },
  year: {
    type: Number,
    required: true
  },
  teacher: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher'
  }],
  // currentCapacity: {
  //   type: Number, 
  //   default: 0 
  // },
  // maxCapacity: {
  //   type: Number,
  //   required: true
  // },
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student'
  }],
  numMaleStudents: {
    type: Number,
    default: 0
  },
  numFemaleStudents: {
    type: Number,
    default: 0
  },
  active:{
    type:Boolean,
    default:false,
  },
  subjects:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Subject"
  }]
},{timestamps:true})

// Composite unique index to allow same name but different sections
classSchema.index({ name: 1, section: 1 }, { unique: true })
  const Class = mongoose.model("class",classSchema);
  module.exports =  Class;