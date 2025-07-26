const mongoose = require('mongoose');

const noticeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  linkTo: {
    type: String,
    enum: ['none', 'attachment', 'url'],
    default: 'none',
  },
  attachment: {
    data: Buffer,
    contentType: String,
    filename: String,
  },
  url: String,
  isActive: {
    type: Boolean,
    default: true,
  },
  classIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'class' }],
  sectionIds: [String], // Example: "classId_sectionName"
  studentIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Notice', noticeSchema);
