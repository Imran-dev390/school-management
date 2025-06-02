const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  section: {
    type: String,
    required: true,
    trim: true
  },
  year: {
    type: Number,
    required: true
  },
  teacher: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher'
  }],
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
  timeTable: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Timetable"
  }],
  active: {
    type: Boolean,
    default: true
  },
  announcements: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Announcement"
  }],
  attendance: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Attendance"
  }],
  subjects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject"
  }],
  examSchedule: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "ExamSchedule"
  }]
}, {
  timestamps: true
});

// Prevent same class name + section duplication in the same year
classSchema.index({ name: 1, section: 1, year: 1 }, { unique: true });

const Class = mongoose.model("class", classSchema);

module.exports = Class;
