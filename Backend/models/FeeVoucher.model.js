// models/FeeVoucher.js
const mongoose = require('mongoose');

const feeVoucherSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  feeType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FeeType',
    required: true
  },
  pdfBuffer: {
    type: Buffer,
    required: false
  },
  contentType: {
    type: String,
    default: 'application/pdf'
  },
  baseAmount: Number,
  concession: Number,  // percentage
  finalAmount: Number, // base - concession
  dueDate: Date,
  paid: {
    type: Boolean,
    default: false
  },
  paidAt: Date
}, { timestamps: true });

feeVoucherSchema.index({ student: 1, feeType: 1 }, { unique: true });

module.exports = mongoose.model('FeeVoucher', feeVoucherSchema);
