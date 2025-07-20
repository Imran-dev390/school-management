const cron = require("node-cron");
const FeeVoucher = require("../models/FeeVoucher.model");
const FeeType = require("../models/FeeType.model");
const User = require("../models/student.model");

cron.schedule("0 0 1 * *", async () => {
  console.log("📅 Generating Monthly Fee Vouchers...");

  try {
    const monthlyFees = await FeeType.find({ name: "monthly"});

    for (const fee of monthlyFees) {
      const students = await User.find({ Classs: { $in: fee.classIds } });

      for (const student of students) {
        // Prevent duplicates
        const alreadyExists = await FeeVoucher.findOne({
          student: student._id,
          feeType: fee._id,
          dueDate: {
            $gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
            $lt: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1)
          }
        });

        if (!alreadyExists) {
          const base = fee.amount;
          const discount = (base * (student.concession || 0)) / 100;
          const finalAmount = Math.round(base - discount);

        //  const dueDate = fee.dueDate || new Date();
const dueDate = new Date(new Date().getFullYear(), new Date().getMonth(), 10);
          await FeeVoucher.create({
            student: student._id,
            feeType: fee._id,
            baseAmount: base,
            concession: student.concession || 0,
            finalAmount,
            dueDate,
            paid: false
          });
          console.log(`✅ Voucher created for ${student.name}`);
        }
      }
    }
  } catch (err) {
    console.error("❌ Monthly voucher generation failed:", err.message);
  }
});







