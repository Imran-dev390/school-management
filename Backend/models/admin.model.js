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
  classes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "class"
    }
  ],
  sessions:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Session"
  }]
}, {
  timestamps: true // adds createdAt and updatedAt
});

module.exports = mongoose.model("Admin", adminSchema);
