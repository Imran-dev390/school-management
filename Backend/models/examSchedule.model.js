const mongoose = require('mongoose');

const examScheduleSchema = new mongoose.Schema({
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'class',
    required: true,
  },
  subjects: [
    {
      subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject',
        required: true,
      },
      date: {
        type: Date,
        required: true,
      },
      startTime: {
        type: String,
        required: true,
      },
      endTime: {
        type: String,
        required: true,
      },
      venue: {
        type: String,
      },
    }
  ]
}, { timestamps: true });

const examSchedule =  mongoose.model('ExamSchedule', examScheduleSchema);
module.exports = examSchedule;
