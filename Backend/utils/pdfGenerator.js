const cron = require("node-cron");
const FeeVoucher = require("../models/FeeVoucher.model");
const FeeType = require("../models/FeeType.model");
const User = require("../models/student.model");
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const toWords = require('number-to-words');

async function generateFeeVoucherPDF(student, fee, finalAmount, dueDate,) {  
const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
// const FeeType = require("../models/FeeType.model");
   const page = await browser.newPage();
// let feeTypeName = 'N/A';
// if (fee.feeType && typeof fee.feeType === 'string') {
//   const feeTypeDoc = await FeeType.findById(fee.feeType);
//   if (feeTypeDoc) {
//     feeTypeName = feeTypeDoc.name;
//   }
// } else if (fee.feeType?.name) {
//   feeTypeName = fee.feeType.name;
// }
  const voucherId = `VCH-${student._id.toString().slice(-5)}-${Date.now().toString().slice(-4)}`;
  const className = student.Classs?.name || 'Class 2';
  const fatherName = student.parent || 'Mr. Dummy';
  const concession = student?.concession || 0;
  const feeType = fee.name || "N/A";
  const baseAmount = fee.amount || "N/A";
  const grNo = student.grNo || 'GR12345';
  const concessionAmount = ((concession / 100) * baseAmount).toFixed(2);
  const issueDate = new Date().toLocaleDateString();
  const finalAmountInWords = toWords.toWords(finalAmount).replace(/\b\w/g, char => char.toUpperCase());

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
//           margin-bottom: 20px;
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
// table.summary th {
//   border: 1px solid #000;
//   padding: 6px 10px;
//   font-size: 14px;
// }

//         table.details, table.summary {
//           width: 100%;
//           border-collapse: collapse;
//           margin-top: 10px;
//         }

//         table.details td, table.summary td {
//           border: 1px solid #000;
//           padding: 6px 10px;
//           font-size: 14px;
//         }

//         .footer {
//           text-align: right;
//           margin-top: 30px;
//           font-size: 14px;
//         }
        
//         .general-instructions {
//           font-size: 10px;
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
// <div class="voucher">
//   <div class="school-header">Merit Aleem Public School</div>
//   <div class="section-title">Fee Voucher - Student Copy</div>

//   <table class="details">
//     <tr>
//       <td><strong>Student Name:</strong> ${student.name || 'N/A'}</td>
//       <td><strong>Father Name:</strong> ${fatherName}</td>
//     </tr>
//     <tr>
//       <td><strong>Class:</strong> ${className}</td>
//       <td><strong>GR No.:</strong> ${grNo}</td>
//     </tr>
//     <tr>
//       <td><strong>Issue Date:</strong> ${issueDate}</td>
//       <td><strong>Due Date:</strong> ${dueDate.toDateString()}</td>
//     </tr>
//     <tr>
//       <td><strong>Voucher No:</strong> ${voucherId}</td>
//       <td><strong>Voucher Month:</strong> ${dueDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</td>
//     </tr>
//   </table>

//   <table class="summary">
//     <thead>
//       <tr>
//         <th>Particular</th>
//         <th>Amount</th>
//       </tr>
//     </thead>
//     <tr>
//       <td><strong>MONTHLY FEES:</strong></td>
//       <td>Rs. ${finalAmount}</td>
//     </tr>
//     <tr>
//       <td><strong>Grand Total:</strong></td>
//       <td>Rs. ${finalAmount}</td>
//     </tr>
//     <tr>
//       <td><strong>Rupees:</strong></td>
//       <td>${finalAmountInWords} Only</td>
//     </tr>
//   </table>

//   <div class="footer">Authorized Signature</div>
  
//   <div class="general-instructions">
//     <p><strong>General Instructions:</strong></p>
//     <ul>
//       <li>Please pay the fee by the due date to avoid a late payment fine of Rs. 10 per day.</li>
//       <li>Fee is payable for the full academic year (12 months).</li>
//       <li>No student will be allowed to sit for any examination unless all dues are cleared.</li>
//       <li>Fee once paid is not refundable or transferable.</li>
//       <li>Please quote the GR No. in all correspondence with the school.</li>
//     </ul>
//   </div>
// </div>
//     </body>
//     </html>
//   `;


const htmlContent = `
<html>
<head>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
      padding: 40px;
      background-color: #f8f9fa;
    }

    .voucher {
      background: #fff;
      border: 1px solid #dee2e6;
      padding: 30px 40px;
      max-width: 750px;
      margin: auto;
      box-shadow: 0 0 10px rgba(0,0,0,0.08);
    }

    .school-header {
      text-align: center;
      font-size: 24px;
      font-weight: 700;
      color: #343a40;
      border-bottom: 2px solid #6c757d;
      padding-bottom: 8px;
      margin-bottom: 20px;
    }

    .section-title {
      text-align: right;
      font-weight: 600;
      font-size: 16px;
      color: #495057;
      margin-bottom: 20px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 15px;
    }

    table.details td,
    table.summary td,
    table.summary th {
      border: 1px solid #dee2e6;
      padding: 10px 12px;
      font-size: 14px;
      color: #212529;
    }

    table.summary th {
      background-color: #e9ecef;
      font-weight: 600;
      text-align: left;
    }

    .summary td {
      background-color: #fefefe;
    }

    .footer {
      text-align: right;
      font-style: italic;
      color: #495057;
      font-size: 14px;
      margin-top: 40px;
    }

    .general-instructions {
      font-size: 12px;
      color: #495057;
      margin-top: 30px;
      border-top: 1px dashed #adb5bd;
      padding-top: 15px;
    }

    .general-instructions ul {
      padding-left: 20px;
      margin: 0;
    }

    .general-instructions li {
      margin-bottom: 5px;
    }
  </style>
</head>
<body>
  <div class="voucher">
    <div class="school-header">Meritaleem Public School</div>
    <div class="section-title">Fee Voucher - Student Copy</div>

    <table class="details">
      <tr>
        <td><strong>Student Name:</strong> ${student.name || 'N/A'}</td>
        <td><strong>Father Name:</strong> ${fatherName}</td>
      </tr>
      <tr>
        <td><strong>Class:</strong> ${className}</td>
        <td><strong>GR No.:</strong> ${grNo}</td>
      </tr>
      <tr>
        <td><strong>Issue Date:</strong> ${issueDate}</td>
        <td><strong>Due Date:</strong> ${dueDate.toDateString()}</td>
      </tr>
      <tr>
        <td><strong>Voucher No:</strong> ${voucherId}</td>
        <td><strong>Voucher Month:</strong> ${dueDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</td>
        </tr>
    </table>

    <table class="summary">
      <thead>
        <tr>
          <th>Particular</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
  <td>${feeType} Fees</td>
           <td>Rs. ${baseAmount}</td>
         </tr>
         <tr>
          <td>Concession</td>
         <td>${concession}%</td>
         </tr>
<tr>
  <td><strong>Grand Total</strong></td>
  <td><strong>Rs. ${finalAmount}</strong></td>
</tr>
        <tr>
          <td>Amount in Words</td>
          <td>${finalAmountInWords} Only</td>
        </tr>
      </tbody>
    </table>

    <div class="footer">Authorized Signature</div>

    <div class="general-instructions">
      <p><strong>General Instructions:</strong></p>
      <ul>
        <li>Please pay the fee by the due date to avoid a late payment fine of Rs. 10 per day.</li>
        <li>Fee is payable for the full academic year (12 months).</li>
        <li>No student will be allowed to sit for any examination unless all dues are cleared.</li>
        <li>Fee once paid is not refundable or transferable.</li>
        <li>Please quote the GR No. in all correspondence with the school.</li>
      </ul>
    </div>
  </div>
</body>
</html>
`;

  const folder = path.join(__dirname, '..', 'public', 'vouchers');
  if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });

  const filePath = path.join(folder, `${student._id}_${dueDate.toISOString().split('T')[0]}.pdf`);
  await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
  await page.pdf({ path: filePath, format: 'A4', printBackground: true });
  await browser.close();
  return filePath;
}




module.exports = generateFeeVoucherPDF;