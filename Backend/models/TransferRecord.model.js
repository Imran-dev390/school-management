const mongoose = require("mongoose");

const transferRecordSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  fromSchool: String,
  toSchool: String,
  fromClass: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "class",
  },
  toClass: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "class",
  },
  fromSection: String,
  toSection: String,
  note: String,
  transferredAt: {
    type: Date,
    default: Date.now,
  },
});

const TransferRecord = mongoose.model("TransferRecord", transferRecordSchema);
module.exports = TransferRecord;
