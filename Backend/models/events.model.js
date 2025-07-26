const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  eventDate: { type: Date, required: true },
  description: { type: String },
  image: {
    data: Buffer,
    contentType: String,
  },
  participants:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Student"
  }],
  sessionId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Session"
  }
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);
