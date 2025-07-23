import React, { useMemo } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { userDataContext } from '../Context-Api/UserContext'
import StudentSidebar from './StudentSidebar'
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader'
import axios from 'axios'
import { authDataContext } from '../Context-Api/AuthContext'

// const StudentDashFeeInvoice = () => {
//     const {userData} = useContext(userDataContext);
//     useEffect(()=>{
         
//     },[userData])
//   return (
//      <div className='flex flex-col md:flex-row min-h-screen bg-white'>
//       <StudentSidebar/>
//        <div className="main w-full h-full flex flex-col gap-3 justify-center mt-3 px-4 ">
//         <AdminTeachDashboardHeader/>
//         <div className="flex w-full text-white p-3 rounded-md bg-[rgb(1,1,93)] flex-col md:flex-row justify-center items-center border-b pb-3">
//                 <h2 className="text-lg font-semibold flex items-center gap-2">
//                   <i className="fas fa-calendar-alt"></i> View Fee Invoice
//                 </h2>
//               </div>
//        </div>
//     </div>
//   )
// }


const StudentDashFeeInvoice = () => {
  const { userData } = useContext(userDataContext);
   const [searchBy, setSearchBy] = useState("keyword");
   const {serverUrl} = useContext(authDataContext);
  const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
  const { feeVouchers = [] } = userData || {};
const [showPaymentModal, setShowPaymentModal] = useState(false);
const [selectedVoucher, setSelectedVoucher] = useState(null);
const handlePayNow = (voucher) => {
  setSelectedVoucher(voucher);
  setShowPaymentModal(true);
};

const closeModal = () => {
  setShowPaymentModal(false);
  setSelectedVoucher(null);
};
const [screenshot, setScreenshot] = useState(null);



//console.log("feevoucer",feeVouchers);
useEffect(()=>{

},[userData])
  const { paymentReceived, amountPending } = useMemo(() => {
  let paymentReceived = 0;
  let amountPending = 0;

  feeVouchers.forEach(voucher => {
    const amount = parseFloat(voucher.finalAmount?.toString().replace(/[^\d.-]/g, '')) || 0;

    if (voucher.paid === true || voucher.status === 'Paid') {
      paymentReceived += amount;
    } else {
      amountPending += amount;
    }
  });

  return {
    paymentReceived,
    amountPending
  };
}, [feeVouchers]);

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!screenshot) return alert("Please attach a screenshot.");

  const formData = new FormData();
  formData.append("voucherId", selectedVoucher._id);
  formData.append("screenshot", screenshot);

  try {
   const res = await axios.post(`${serverUrl}/api/student/upload-payment-proof`,formData,
    {
    withCredentials:true,
     headers: {
        'Content-Type': 'multipart/form-data',
      },
   });
   if (res.status === 200) {
  alert("Screenshot submitted successfully.");
  closeModal();
} else {
  alert("Upload failed.");
}
  } catch (err) {
    console.error(err);
    alert(err?.response?.data.message || "Something Went Wrong");
  }
};
  return (
    <div className='flex flex-col md:flex-row min-h-screen bg-white'>
      <StudentSidebar />
      <div className="main w-full h-full flex flex-col gap-3 mt-3 px-4">
        <AdminTeachDashboardHeader />
        <div className="flex w-full text-white p-3 rounded-md bg-[rgb(1,1,93)] flex-col md:flex-row justify-center items-center border-b pb-3">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <i className="fas fa-calendar-alt"></i> View Fee Invoice
          </h2>
        </div>

<div className="bg-white p-6 rounded flex flex-col shadow relative">
  <h3 className="text-xl font-semibold border-b pb-2 mb-4">Search Fee Invoices</h3>
  {/* Radio Group */}
  <div className="flex gap-3 mb-6 flex-wrap">
    {[
      { value: "keyword", label: "By Keyword" },
      { value: "date", label: "By Date" },
    ].map(({ value, label }) => (
      <label key={value} className="inline-flex items-center whitespace-nowrap">
        <input
          type="radio"
          name="searchBy"
          value={value}
          checked={searchBy === value}
          onChange={() => setSearchBy(value)}
          className="form-radio text-blue-600"
        />
        <span className="ml-2 font-medium text-gray-700">Search {label}</span>
      </label>
    ))}
  </div>

  {/* Filters + Summary container */}
  <div className="flex flex-col md:flex-row gap-6 mb-0 items-start">
    {/* Filters container - takes full width on small, grows on md+ */}
    <div className="flex-1 min-w-0">
      {/* {searchBy === "keyword" && (
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block font-medium mb-1">Search Field</label>
            <select className="w-full border rounded px-3 py-2">
              <option value="">Select Field</option>
              {[
                "invoice_number",
                "invoice_title",
                "date_issued",
                "due_date",
                "status",
                "name",
                "admission_number",
                "enrollment_number",
                "phone",
                "email",
                "father_name",
                "father_phone",
              ].map((opt) => (
                <option key={opt} value={opt}>
                  {opt.replace("_", " ")}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block font-medium mb-1">Keyword</label>
            <input
              type="text"
              placeholder="Enter keyword"
              className="w-full border rounded px-3 py-2"
            />
          </div>
        </div>
      )} */}

      {searchBy === "keyword" && (
  <div className="grid gap-4 md:grid-cols-2">
    <div>
      <label className="block font-medium mb-1">Fee Type (e.g. Admission, Monthly)</label>
      <input
        type="text"
        placeholder="Search by fee type"
        className="w-full border rounded px-3 py-2"
      />
    </div>
    <div>
      <label className="block font-medium mb-1">Month</label>
      <input
        type="month"
        className="w-full border rounded px-3 py-2"
      />
    </div>
  </div>
)}
      {searchBy === "date" && (
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block font-medium mb-1">Start Date</label>
            <input type="date" className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block font-medium mb-1">End Date</label>
            <input type="date" className="w-full border rounded px-3 py-2" />
          </div>
        </div>
      )}
    </div>

    {/* Summary box */}
    <div className="w-full md:w-1/3 bg-gray-50 border rounded p-4 flex-shrink-0">
      <h4 className="text-lg font-semibold mb-4 border-b pb-1">Fee Invoices Summary</h4>
     <ul className="space-y-2">
  <li className="flex justify-between">
    <span className="font-medium">Payment Sent:</span>
    <span>Rs:{paymentReceived.toLocaleString()}</span>
  </li>
  <li className="flex justify-between">
    <span className="font-medium">Amount Pending:</span>
    <span>Rs:{amountPending.toLocaleString()}</span>
  </li>
</ul>
    </div>
    </div>
    </div>
        {/* Fee Invoices Table */}
        <div className="bg-white p-6 rounded shadow mt-4">
          <h3 className="text-lg font-semibold mb-4">My Fee Invoices</h3>
          <table className="w-full overflow-x-auto table-auto border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white">
                {["Title", "Concession", "Total", "Payable", "Status","Month", "Voucher"].map(th => (
                  <th key={th} className="p-2 border">{th}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {feeVouchers.map((row) => (
                <tr key={row._id} className="hover:bg-gray-50">
                  <td className="p-2 border">{row?.feeType?.name || "-"}</td>
                  <td className="p-2 border">{row?.concession + "%" || "-"}</td>
                  <td className="p-2 border">{row?.baseAmount || "-"}</td>
                  <td className="p-2 border">{row?.finalAmount || "-"}</td>
                  <td className="p-2 border">{row?.paid === true ? "Paid" : "UnPaid"}</td>
                  {/* <td className='p-2 border'>{new Date(row?.dueDate).getMonth()+1} {new Date(row?.dueDate).getFullYear()}</td> */}
<td className='p-2 border'>
  {new Date(row?.dueDate).toLocaleString('en-US', { month: 'long' })} {new Date(row?.dueDate).getFullYear()}
</td>
                 <td className="p-2 border flex items-center flex-col gap-2">
  <a className='underline text-blue-500' href={`${baseURL}/api/admin/voucher/${row._id}/pdf`} target="_blank">View</a>
  {row.paid !== true && (
    <button
      className="bg-green-600 text-white text-sm rounded px-2 py-1 hover:bg-green-700"
      onClick={() => handlePayNow(row)}
    >
      Pay Now
    </button>
  )}
</td>

                </tr>
              ))}
              {feeVouchers.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center p-4 text-gray-500">
                    No fee invoices found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {/* {showPaymentModal && selectedVoucher && (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg w-[90%] max-w-md">
      <h2 className="text-xl font-semibold mb-2 text-[rgb(1,1,93)]">Payment Instructions</h2>
      <p className="mb-2">💳 Bank Account: <strong>1234567890</strong></p>
      <p className="mb-2">📱 JazzCash: <strong>0300-1234567</strong></p>
      <p className="mb-2">⚠️ Use Voucher No. <strong>{selectedVoucher._id}</strong> as payment reference.</p>
      <button onClick={closeModal} className="mt-4 px-4 py-2 bg-[rgb(1,1,93)] text-white rounded-md hover:bg-[rgb(193,151,5)]">Close</button>
    </div>
  </div>
)} */}

{showPaymentModal && selectedVoucher && (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg w-[95%] max-w-2xl p-6 md:p-8 overflow-y-auto max-h-[90vh] shadow-lg">
      <h2 className="text-2xl font-semibold text-[rgb(1,1,93)] mb-4">💳 Payment Instructions</h2>

      <div className="space-y-2 text-sm md:text-base">
        <p>Bank Account: <strong>1234567890</strong></p>
        <p>JazzCash: <strong>0300-1234567</strong></p>
        <p>Voucher No. to Use as Reference: <strong>{selectedVoucher._id}</strong></p>
        <p className="text-red-600 font-semibold mt-4">📸 After payment, share a screenshot of the payment:</p>
      </div>

      <form className="mt-4 flex flex-col gap-4" encType="multipart/form-data" onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          required
          className="border border-gray-300 p-2 rounded-md"
          onChange={(e) => setScreenshot(e.target.files[0])}
        />
        <button
          type="submit"
          className="bg-[#c19703] text-white px-4 py-2 rounded-md"
        >
          Submit Screenshot
        </button>
      </form>

      <button
        onClick={closeModal}
        className="mt-6 px-4 py-2 bg-[rgb(1,1,93)] text-white rounded-md hover:bg-yellow-500"
      >
        Close
      </button>
    </div>
  </div>
)}



    </div>
  );
};

export default StudentDashFeeInvoice
