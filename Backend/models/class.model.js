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
  session: { type: mongoose.Schema.Types.ObjectId, ref: "Session",},
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
// Make sure this enforces uniqueness *per session*
classSchema.index({ name: 1, section: 1, session: 1 }, { unique: true });

const Class = mongoose.model("class", classSchema);

module.exports = Class;
