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
  isActive: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model('Session', sessionSchema);
