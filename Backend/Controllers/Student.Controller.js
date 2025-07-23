const FeeVoucher = require('../models/FeeVoucher.model');
const Admin  = require("../models/admin.model");
// exports.uploadPaymentScreenshot = async (req, res) => {
//   try {
//     const { voucherId } = req.body;
//     const file = req.file;

//     if (!voucherId || !file) {
//       return res.status(400).json({ message: "Voucher ID and screenshot are required." });
//     }

//     const voucher = await FeeVoucher.findById(voucherId);
//     if (!voucher) {
//       return res.status(404).json({ message: "Voucher not found." });
//     }

//     // Save screenshot
//     voucher.paymentScreenshot = {
//       data: file.buffer,
//       contentType: file.mimetype,
//       uploadedAt: new Date()
//     };
//     voucher.proofSubmitted = true;
//     await voucher.save();

//     return res.status(200).json({ message: "Payment proof uploaded successfully." });
//   } catch (error) {
//     console.error("Upload error:", error);
//     return res.status(500).json({ message: "Failed to upload screenshot." });
//   }
// };



exports.uploadPaymentScreenshot = async (req, res) => {
  try {
    const { voucherId } = req.body;
    const file = req.file;

    if (!voucherId || !file) {
      return res.status(400).json({ message: "Voucher ID and screenshot are required." });
    }

    const voucher = await FeeVoucher.findById(voucherId);
    if (!voucher) {
      return res.status(404).json({ message: "Voucher not found." });
    }

    // 💡 Check if screenshot already submitted
    if (voucher.proofSubmitted) {
      return res.status(409).json({ message: "Screenshot already submitted for this voucher." });
    }

    // Save screenshot
    voucher.paymentScreenshot = {
      data: file.buffer,
      contentType: file.mimetype,
      uploadedAt: new Date()
    };
    voucher.proofSubmitted = true;

    await voucher.save();

    return res.status(200).json({ success: true, message: "Payment proof uploaded successfully." });
  } catch (error) {
    console.error("Upload error:", error);
    return res.status(500).json({ message: "Failed to upload screenshot." });
  }
};
