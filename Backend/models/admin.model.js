const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    trim: true
  },
  email: {
    type: String,
    required: true,
    minLength: 11,
    unique: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, 'Invalid email format']
  },
  password: {
    type: String,
    required: true,
    minLength: 8
  },
  role:{
    type:String,
    default:"Admin",
  },
  teachers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher"
    }
  ],
  subjects:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Subject"
  }],
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student"
    }
  ],
  announcements:[{
type:mongoose.Schema.Types.ObjectId,
ref:"Announcement"
  }],
  staff:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Staff"
  }],
  classes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "class"
    }
  ],
  transferredStudents:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"TransferRecord"
  }],
  sessions:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Session"
  }],
  FeeTypes:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"FeeType"
  }]
}, {
  timestamps: true // adds createdAt and updatedAt
});

module.exports = mongoose.model("Admin", adminSchema);
