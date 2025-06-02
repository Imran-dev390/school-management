// models/Timetable.js
const mongoose = require('mongoose');

const PeriodSchema = new mongoose.Schema({
  periodNumber: Number,
  subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' },
  time: String,
});

const TimetableSchema = new mongoose.Schema({
  className:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"class",
  }, // e.g., "10-A"
  day: String, // e.g., "Monday"
  periods: [PeriodSchema],
});

module.exports = mongoose.model('Timetable', TimetableSchema);
