// const cron = require("node-cron");
// const FeeVoucher = require("../models/FeeVoucher.model");
// const FeeType = require("../models/FeeType.model");
// const User = require("../models/student.model");
// const puppeteer = require('puppeteer');
// const fs = require('fs');
// const path = require('path');

// async function generateFeeVoucherPDF(student, fee, finalAmount, dueDate) {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   const htmlContent = `
//     <html>
//     <head>
//       <style>
//         body { font-family: Arial; padding: 40px; }
//         .container { border: 1px solid #000; padding: 20px; width: 700px; }
//         h2 { text-align: center; }
//         .info { margin-top: 20px; font-size: 16px; }
//         .info p { margin: 5px 0; }
//         .footer { margin-top: 40px; text-align: right; }
//       </style>
//     </head>
//     <body>
//       <div class="container">
//         <h2>Fee Voucher</h2>
//         <div class="info">
//           <p><strong>Student Name:</strong> ${student.name}</p>
//           <p><strong>Class:</strong> ${student.Classs}</p>
//           <p><strong>Voucher Month:</strong> ${new Date().toLocaleString('default', { month: 'long' })}</p>
//           <p><strong>Base Fee:</strong> Rs. ${fee.amount}</p>
//           <p><strong>Concession:</strong> ${student.concession || 0}%</p>
//           <p><strong>Final Amount:</strong> Rs. ${finalAmount}</p>
//           <p><strong>Due Date:</strong> ${dueDate.toDateString()}</p>
//         </div>
//         <div class="footer">
//           <p>Authorized Signature</p>
//         </div>
//       </div>
//     </body>
//     </html>
//   `;

//   await page.setContent(htmlContent);
//   const folder = path.join(__dirname, 'vouchers');
//   if (!fs.existsSync(folder)) fs.mkdirSync(folder); // ensure folder exists
//   const filePath = path.join(folder, `${student._id}.pdf`);
//   await page.pdf({ path: filePath, format: 'A4' });
//   await browser.close();
//   return filePath;
// }
// cron.schedule("0 0 1 * *", async () => {
//   console.log("📅 Generating Monthly Fee Vouchers...");
//   try {
//     const monthlyFees = await FeeType.find({ name: "monthly"});

//     for (const fee of monthlyFees) {
//       const students = await User.find({ Classs: { $in: fee.classIds } });

//       for (const student of students) {
//         // Prevent duplicates
//         const alreadyExists = await FeeVoucher.findOne({
//           student: student._id,
//           feeType: fee._id,
//           dueDate: {
//             $gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
//             $lt: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1)
//           }
//         });

//         if (!alreadyExists) {
//           const base = fee.amount;
//           const discount = (base * (student.concession || 0)) / 100;
//           const finalAmount = Math.round(base - discount);

//         //  const dueDate = fee.dueDate || new Date();
// const dueDate = new Date(new Date().getFullYear(), new Date().getMonth(), 10);
//         //   await FeeVoucher.create({
//         //     student: student._id,
//         //     feeType: fee._id,
//         //     baseAmount: base,
//         //     concession: student.concession || 0,
//         //     finalAmount,
//         //     dueDate,
//         //     paid: false
//         //   });
//         //   console.log(`✅ Voucher created for ${student.name}`);
//         // }
//         await FeeVoucher.create({
//   student: student._id,
//   feeType: fee._id,
//   baseAmount: base,
//   concession: student.concession || 0,
//   finalAmount,
//   dueDate,
//   paid: false
// });
// await generateFeeVoucherPDF(student, fee, finalAmount, dueDate);
// console.log(`✅ Voucher created and PDF generated for ${student.name}`);
//     }
//   }
//   } catch (err) {
//     console.error("❌ Monthly voucher generation failed:", err.message);
//   }
// });



































const cron = require("node-cron");
const FeeVoucher = require("../models/FeeVoucher.model");
const FeeType = require("../models/FeeType.model");
const User = require("../models/student.model");
const puppeteer = "puppeteer";
const fs = require('fs');
const path = require('path');
const toWords = require('number-to-words');
const generateFeeVoucherPDF = require("../utils/pdfGenerator");

//  <tr>
//           <td>Monthly Fees</td>
//           <td>Rs. ${finalAmount}</td>
//         </tr>
//         <tr>
//           <td><strong>Grand Total</strong></td>
//           <td><strong>Rs. ${finalAmount}</strong></td>
//         </tr>
//async function generateFeeVoucherPDF(student, fee, finalAmount, dueDate,concession) {

// async function generateFeeVoucherPDF(student, fee, finalAmount, dueDate) {
//   const browser = await puppeteer.launch({
//     headless: true,
//     args: ['--no-sandbox', '--disable-setuid-sandbox'],
//   });

//   const page = await browser.newPage();

//   const voucherId = `VCH-${student._id.toString().slice(-5)}-${Date.now().toString().slice(-4)}`;
//   const className = student.Classs?.name || 'Class 2';
//   const fatherName = student.parent || 'Mr. Dummy';
//   const grNo = student.grNo || 'GR12345';
//   const issueDate = new Date().toLocaleDateString();

//   const htmlContent = `
//     <html>
//     <head>
//       <style>
//         body {
//           font-family: Arial, sans-serif;
//           margin: 0;
//           padding: 30px;
//         }

//         .voucher {
//           border: 1px solid #000;
//           padding: 20px;
//           width: 680px;
//           margin-bottom: 50px;
//         }

//         .school-header {
//           text-align: center;
//           font-size: 20px;
//           font-weight: bold;
//           margin-bottom: 10px;
//           border-bottom: 1px solid black;
//           padding-bottom: 5px;
//         }

//         .section-title {
//           text-align: right;
//           font-weight: bold;
//           margin-top: 10px;
//           font-size: 14px;
//         }

//         table.details {
//           width: 100%;
//           border-collapse: collapse;
//           margin-top: 10px;
//         }

//         table.details td {
//           border: 1px solid #000;
//           padding: 6px 10px;
//           font-size: 14px;
//         }

//         .footer {
//           text-align: right;
//           margin-top: 30px;
//           font-size: 14px;
//         }

//         .note {
//           font-size: 12px;
//           margin-top: 20px;
//           border-top: 1px dashed #000;
//           padding-top: 10px;
//         }

//         .duplicate-line {
//           text-align: center;
//           margin: 20px 0;
//           font-size: 13px;
//           font-style: italic;
//         }
//       </style>
//     </head>
//     <body>
//       ${['Student Copy', 'Office Copy'].map(copyType => `
//         <div class="voucher">
//           <div class="school-header">Merit Aleem Public School</div>
//           <div class="section-title">Fee Voucher - ${copyType}</div>

//           <table class="details">
//             <tr>
//               <td><strong>Student Name:</strong> ${student.name || 'N/A'}</td>
//               <td><strong>Father Name:</strong> ${fatherName}</td>
//             </tr>
//             <tr>
//               <td><strong>Class:</strong> ${className}</td>
//               <td><strong>GR No.:</strong> ${grNo}</td>
//             </tr>
//             <tr>
//               <td><strong>Issue Date:</strong> ${issueDate}</td>
//               <td><strong>Due Date:</strong> ${dueDate.toDateString()}</td>
//             </tr>
//             <tr>
//               <td><strong>Voucher No:</strong> ${voucherId}</td>
//               <td><strong>Voucher Month:</strong> ${dueDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</td>
//             </tr>
//             <tr>
//               <td><strong>Base Fee:</strong> Rs. ${fee.amount}</td>
//               <td><strong>Concession:</strong> ${student.concession || 0}%</td>
//             </tr>
//             <tr>
//               <td colspan="2"><strong>Final Amount:</strong> Rs. ${finalAmount}</td>
//             </tr>
//           </table>

//           <div class="footer">Authorized Signature</div>

//           <div class="note">
//             <strong>Note:</strong> Please pay the fee before the due date to avoid late charges. No refunds once paid.
//           </div>
//         </div>

//         <div class="duplicate-line">--------------------------- Cut Here ---------------------------</div>
//       `).join('')}
//     </body>
//     </html>
//   `;

//   const folder = path.join(__dirname, '..', 'public', 'vouchers');
//   if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });

//   const filePath = path.join(folder, `${student._id}_${dueDate.toISOString().split('T')[0]}.pdf`);
//   await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
//   await page.pdf({ path: filePath, format: 'A4' });
//   await browser.close();
//   return filePath;
// }


// async function generateFeeVoucherPDF(student, fee, finalAmount, dueDate) {
//  // const browser = await puppeteer.launch();
//  const browser = await puppeteer.launch({
//   headless: true,
//   args: ['--no-sandbox', '--disable-setuid-sandbox']
// });

//   const page = await browser.newPage();

//   // const htmlContent = `
//   //   <html>
//   //   <head>
//   //     <style>
//   //       body { font-family: Arial; padding: 40px; }
//   //       .container { border: 1px solid #000; padding: 20px; width: 700px; }
//   //       h2 { text-align: center; }
//   //       .info { margin-top: 20px; font-size: 16px; }
//   //       .info p { margin: 5px 0; }
//   //       .footer { margin-top: 40px; text-align: right; }
//   //     </style>
//   //   </head>
//   //   <body>
//   //     <div class="container">
//   //       <h2>Fee Voucher</h2>
//   //       <div class="info">
//   //         <p><strong>Student Name:</strong> ${student.name || 'N/A'}</p>
//   //         <p><strong>Class:</strong> ${student.Classs || 'N/A'}</p>
//   //        <p><strong>Voucher Month:</strong> ${dueDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</p>
//   //         <p><strong>Base Fee:</strong> Rs. ${fee.amount}</p>
//   //         <p><strong>Concession:</strong> ${student.concession || 0}%</p>
//   //         <p><strong>Final Amount:</strong> Rs. ${finalAmount}</p>
//   //         <p><strong>Due Date:</strong> ${dueDate.toDateString()}</p>
//   //       </div>
//   //       <div class="footer">
//   //         <p>Authorized Signature</p>
//   //       </div>
//   //     </div>
//   //   </body>
//   //   </html>
//   // `;
// const htmlContent = `
//   <html>
//     <head>
//       <style>
//         body {
//           font-family: Arial, sans-serif;
//           padding: 30px;
//           font-size: 14px;
//         }
//         .voucher {
//           width: 700px;
//           border: 1px solid #000;
//           padding: 20px;
//         }
//         .header {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           border-bottom: 1px solid #000;
//           padding-bottom: 10px;
//           margin-bottom: 20px;
//         }
//         .header img {
//           width: 100px;
//           height: auto;
//         }
//         .title {
//           text-align: center;
//           font-size: 20px;
//           font-weight: bold;
//           text-transform: uppercase;
//         }
//         .info-table {
//           width: 100%;
//           border-collapse: collapse;
//           margin-top: 20px;
//         }
//         .info-table th, .info-table td {
//           border: 1px solid #000;
//           padding: 8px 12px;
//           text-align: left;
//         }
//         .footer {
//           margin-top: 40px;
//           text-align: right;
//         }
//       </style>
//     </head>
//     <body>
//       <div class="voucher">
//         <div class="header">
//           <img src="https://your-domain.com/logo.png" alt="School Logo" />
//           <div class="title">Fee Voucher</div>
//           <div></div>
//         </div>

//         <table class="info-table">
//           <tr>
//             <th>Student Name</th>
//             <td>${student.name || 'N/A'}</td>
//           </tr>
//           <tr>
//             <th>Class</th>
//             <td>${student.Classs || 'N/A'}</td>
//           </tr>
//           <tr>
//             <th>Voucher Month</th>
//             <td>${dueDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</td>
//           </tr>
//           <tr>
//             <th>Base Fee</th>
//             <td>Rs. ${fee.amount}</td>
//           </tr>
//           <tr>
//             <th>Concession</th>
//             <td>${student.concession || 0}%</td>
//           </tr>
//           <tr>
//             <th>Final Amount</th>
//             <td><strong>Rs. ${finalAmount}</strong></td>
//           </tr>
//           <tr>
//             <th>Due Date</th>
//             <td>${dueDate.toDateString()}</td>
//           </tr>
//         </table>
//         <div class="footer">
//           <p>Authorized Signature</p>
//         </div>
//       </div>
//     </body>
//   </html>
// `;

//   await page.setContent(htmlContent);
//   //const folder = path.join(__dirname, 'vouchers');
//   const folder = path.join(__dirname, '..', 'public', 'vouchers');
//   if (!fs.existsSync(folder)) fs.mkdirSync(folder);
//  // const filePath = path.join(folder, `${student._id}.pdf`);
//  const filePath = path.join(folder, `${student._id}_${dueDate.toISOString().split('T')[0]}.pdf`); 
//  await page.pdf({ path: filePath, format: 'A4' });
//   await browser.close();
//   return filePath;
// }
// 0 0 1 * *
// cron.schedule("24 22 21 7 *", async () => {
//   console.log("📅 Generating Monthly Fee Vouchers...");
//   try {
//     const monthlyFees = await FeeType.find({ name: "monthly" });

//     for (const fee of monthlyFees) {
//       const students = await User.find({ Classs: { $in: fee.classIds } });

//       for (const student of students) {
//         const alreadyExists = await FeeVoucher.findOne({
//           student: student._id,
//           feeType: fee._id,
//           dueDate: {
//             $gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
//             $lt: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1)
//           }
//         });

//       //  if (!alreadyExists) {
//           const base = fee.amount;
//           const discount = (base * (student.concession || 0)) / 100;
//           const finalAmount = Math.round(base - discount);
//           const dueDate = new Date(new Date().getFullYear(), new Date().getMonth(), 10);

//           // await FeeVoucher.create({
//           //   student: student._id,
//           //   feeType: fee._id,
//           //   baseAmount: base,
//           //   concession: student.concession || 0,
//           //   finalAmount,
//           //   dueDate,
//           //   paid: false
//           // });

//           await FeeVoucher.create({
//   student: student._id,
//   feeType: fee._id,
//   baseAmount: base,
//   concession: student.concession || 0,
//   finalAmount,
//   dueDate,
//   paid: false,
//   pdfPath: `/vouchers/${student._id}_${dueDate.toISOString().split('T')[0]}.pdf`
//  // pdfPath: `/vouchers/${student._id}.pdf` // Store relative or full path
// });
//           await generateFeeVoucherPDF(student, fee, finalAmount, dueDate);
//           console.log(`✅ Voucher for ${student.name} created and PDF generated.`);
//         }
//       //}
//     }
//   } catch (err) {
//     console.error("❌ Monthly voucher generation failed:", err.message);
//   }
// });


// cron.schedule("42 1 * * *", async () => {
//   console.log("📅 Generating Monthly Fee Vouchers...");
//   try {
//     const monthlyFees = await FeeType.find({ name: "Monthly" });
//     console.log("📘 Monthly Fee Types found:", monthlyFees.length); // <- ADD THIS

//     if (monthlyFees.length === 0) {
//       console.log("⚠️ No monthly fees found.");
//     }

//     for (const fee of monthlyFees) {
//       console.log(`➡️ Processing Fee Type: ${fee.name}`);
//       const students = await User.find({ Classs: { $in: fee.classIds } });
//       console.log(`👨‍🎓 Students found for fee ${fee._id}:`, students.length); // <- ADD THIS

//       if (students.length === 0) {
//         console.log("⚠️ No students found for this fee.");
//       }

//       for (const student of students) {
//         const base = fee.amount;
//         const discount = (base * (student.concession || 0)) / 100;
//         const finalAmount = Math.round(base - discount);
//         const dueDate = new Date(new Date().getFullYear(), new Date().getMonth(), 10);

//         console.log(`📝 Creating voucher for student: ${student.name} (${student._id})`);

//         const created = await FeeVoucher.create({
//           student: student._id,
//           feeType: fee._id,
//           baseAmount: base,
//           concession: student.concession || 0,
//           finalAmount,
//           dueDate,
//           paid: false,
//           pdfPath: `/vouchers/${student._id}_${dueDate.toISOString().split('T')[0]}.pdf`
//         });
//         student.feeVouchers.push(created._id);
//         await student.save();
//         console.log("✅ DB Voucher Created:", created._id);

//         const pdfPath = await generateFeeVoucherPDF(student, fee, finalAmount, dueDate);
//         console.log(`📄 PDF generated: ${pdfPath}`);
//       }
//     }
//   } catch (err) {
//     console.error("❌ Monthly voucher generation failed:", err);
//   }
// });



















cron.schedule("24 3 * * *", async () => {
  console.log("📅 Generating Monthly Fee Vouchers...");

  try {
    const monthlyFees = await FeeType.find({ name: "Monthly" });
    console.log("📘 Monthly Fee Types found:", monthlyFees.length);

    if (monthlyFees.length === 0) {
      console.log("⚠️ No monthly fees found.");
      return;
    }
    for (const fee of monthlyFees) {
      console.log(`➡️ Processing Fee Type: ${fee.name}`);
      const students = await User.find({ Classs: { $in: fee.classIds } });
      console.log(`👨‍🎓 Students found for fee ${fee._id}:`, students.length);

      for (const student of students) {
        const base = fee.amount;
        const discount = (base * (student.concession || 0)) / 100;
        const finalAmount = Math.round(base - discount);
        const dueDate = new Date(new Date().getFullYear(), new Date().getMonth(), 10); // Always 10th of current month

        // 🛑 Prevent duplicate voucher creation
        const existing = await FeeVoucher.findOne({
          student: student._id,
          feeType: fee._id,
          dueDate: {
            $gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
            $lt: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1)
          }
        });

        if (existing) {
          console.log(`⛔ Voucher already exists for ${student.name} for ${fee.name}. Skipping.`);
          continue;
        }

        console.log(`📝 Creating voucher for student: ${student.name} (${student._id})`);

        const created = await FeeVoucher.create({
          student: student._id,
          feeType: fee._id,
          baseAmount: base,
          concession: student.concession || 0,
          finalAmount,
          dueDate,
          paid: false,
          pdfPath: `/vouchers/${student._id}_${dueDate.toISOString().split('T')[0]}.pdf`
        });

        student.feeVouchers.push(created._id);
        await student.save();

        console.log("✅ DB Voucher Created:", created._id);

        const pdfPath = await generateFeeVoucherPDF(student, fee, finalAmount, dueDate);
        console.log(`📄 PDF generated: ${pdfPath}`);
      }
    }
  } catch (err) {
    console.error("❌ Monthly voucher generation failed:", err);
  }
});
