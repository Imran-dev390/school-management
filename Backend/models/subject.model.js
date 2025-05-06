const mongoose = require("mongoose");

//const subjectSchema = new mongoose.Schema({
   
    name: {
    type: String,
    required: true,
    trim: true,
    minLength: 3
  },
/*  description: {
    type: String,
    trim: true
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
    required: true
  },*/
  /*class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Class",
    required: true
  }*/
}, {
  timestamps: true
});

//module.exports = mongoose.model("Subject", subjectSchema);
