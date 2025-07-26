// models/Session.js
const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true, // e.g. "2024–2025"
    trim: true,
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  Students:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Student"
  }],
  Teachers:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Teacher"
  }],
  Staffs:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Staff"
  }],
  Events:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Event"
  }],
  isActive: {
    type: Boolean,
    default: true,
  }
}, { timestamps: true });

module.exports = mongoose.model('Session', sessionSchema);
