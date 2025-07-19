// models/FeeType.js
const mongoose = require('mongoose');

const feeTypeSchema = new mongoose.Schema({
  name: String,
  classIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'class' }],
  period: {
    type: String,
    enum: ['one-time', 'monthly', 'quarterly', 'quadrimester', 'half-yearly', 'annually']
  },
  amount: Number,
  activeOnAdmission: Boolean,
  activeOnDashboard: Boolean
}, { timestamps: true });

module.exports = mongoose.model('FeeType', feeTypeSchema);
