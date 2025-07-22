const FeeVoucher = require("../models/FeeVoucher.model");

const ShowGeneratedPdf = async (req, res) => {
  const voucher = await FeeVoucher.findById(req.params.id);
  if (!voucher || !voucher.pdfBuffer) {
    return res.status(404).send("Voucher PDF not found");
  }
  res.setHeader('Content-Type', voucher.contentType || 'application/pdf');
  res.setHeader('Content-Disposition', 'inline; filename="voucher.pdf"');
  res.send(voucher.pdfBuffer);
}

module.exports = ShowGeneratedPdf;


