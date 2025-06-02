const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
  name:{
    type:String,
    minLength:3,
  },
  title: { type: String, required: true },
  message: { type: String, required: true },
  classes: [
    { type: mongoose.Schema.Types.ObjectId,ref:"class"}
  ], // e.g., ["10A"], or ["ALL"]
  createdByRole: {
    type: String,
    enum: ['Teacher', 'Admin'],
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Announcement', announcementSchema);
