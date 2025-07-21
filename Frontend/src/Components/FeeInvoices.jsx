import React, { useState } from 'react'
import AdminLayout from './AdminLayout'
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { adminDataContext } from '../Context-Api/AdminContext'
import { useEffect } from 'react'
import { useMemo } from 'react';
const FeeInvoices = () => {
     const [searchBy, setSearchBy] = useState("keyword");
     const {adminData,fetchAdminData} = useContext(adminDataContext);
     const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
     const {feeVouchers = []} = adminData?.admin || {};
  const [tableData, setTableData] = useState([
    {
      id: 19,
      student: "hari shankar maliya",
      father: "rahul",
      admission: "000005",
      invoiceNum: "00020",
      title: "0001",
      payable: "₹5,500.00",
      status: "Paid",
    },
    {
      id: 18,
      student: "mano",
      father: "rahul",
      admission: "000006",
      invoiceNum: "00019",
      title: "ion1",
      payable: "₹5,500.00",
      status: "Partially Paid",
    },
  ]);
  useEffect(()=>{
        fetchAdminData();
  },[fetchAdminData])
//  console.log("students",feeVouchers);
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
  return (
    <AdminLayout adminName='Bright Future'>
       <div className="main w-full h-full flex flex-col gap-3">
      <AdminTeachDashboardHeader/>
       {/* Header */}
  <div className="bg-[rgb(1,1,93)] text-white text-center py-3 px-2 rounded flex items-center justify-between">
    <span className="text-lg font-semibold">
      <i className="fas fa-clock mr-2" />
      Student Fee Invoices
    </span>
    <span className="flex justify-around gap-4 items-center">
      <Link
        to="/admin/pending/payments"
        className="border border-white bg-[#C19703] text-white transition px-3 py-1 rounded text-sm"
      >
        <i className="fas fa-calendar-alt mr-1" />
        Verify Payements
      </Link>
       <Link
        to="/admin/payment/history"
        className="border border-white bg-[#C19703] text-white  transition px-3 py-1 rounded text-sm"
      >
        <i className="fas fa-calendar-alt mr-1" />
        Payement History
      </Link>
       <Link
        to="/admin/add/fee/invoices"
        className="border border-white bg-[#C19703] text-white transition px-3 py-1 rounded text-sm"
      >
        <i className="fas fa-calendar-alt mr-1" />
        Add New Fee Invoice
      </Link>
    </span>
  </div>


    {/* Search Form */}
      {/* <div className="bg-white p-6 rounded flex flex-col shadow">
        <h3 className="text-xl font-semibold border-b pb-2 mb-4">Search Fee Invoices</h3>

        {/* Radio Group */}
        {/* <div className="flex gap-3 mb-6">
          {[
            { value: "keyword", label: "By Keyword" },
            { value: "class", label: "By Class" },
            { value: "date", label: "By Date" },
          ].map(({ value, label }) => (
            <label key={value} className="inline-flex items-center">
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
        </div> */}

        {/* Conditional Filters */}
        {/* {searchBy === "keyword" && (
          <div className="grid md:grid-cols-2 gap-0 mb-6">
            <div>
              <label className="block font-medium mb-1">Search Field</label>
              <select className="w-[50%] border rounded px-3 py-2">
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
                ].map(opt => (
                  <option key={opt} value={opt}>{opt.replace("_", " ")}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block font-medium mb-1">Keyword</label>
              <input type="text" placeholder="Enter keyword" className="w-[50%] border rounded px-3 py-2" />
            </div>
          </div>
        )} */}

        {/* {searchBy === "class" && (
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block font-medium mb-1">Class</label>
              <select className="w-full border rounded px-3 py-2">
                <option value="">Select Class</option>
                {[...Array(8)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>{`${i + 1}${["st","nd","rd"][i] || "th"}`}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block font-medium mb-1">Section</label>
              <select className="w-full border rounded px-3 py-2">
                <option>All Sections</option>
              </select>
            </div>
            <div>
              <label className="block font-medium mb-1">Status</label>
              <select className="w-full border rounded px-3 py-2">
                <option>All Status</option>
                {["Paid", "Unpaid", "Partially Paid"].map(stat => (
                  <option key={stat} value={stat.toLowerCase().replace(" ", "_")}>{stat}</option>
                ))}
              </select>
            </div>
          </div>
        )} */}

        {/* {searchBy === "date" && (
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block font-medium mb-1">Start Date</label>
              <input type="date" className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block font-medium mb-1">End Date</label>
              <input type="date" className="w-full border rounded px-3 py-2" />
            </div>
          </div>
        )} */}
          {/* <div className="w-full md:w-1/3 bg-gray-50 border rounded p-4 self-end">
            <h4 className="text-lg font-semibold mb-4 border-b pb-1">
              Fee Invoices Summary
            </h4>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="font-medium">Payment Received:</span>
                <span>₹10,000.00</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Amount Pending:</span>
                <span>₹1,500.00</span>
              </li>
            </ul>
          </div>
           <button className="bg-blue-600 w-fit hover:bg-blue-700 text-white px-6 py-2 rounded transition">
          <i className="fas fa-file-invoice mr-2"></i> Get Invoices
        </button> */}
       {/* </div> */}


<div className="bg-white p-6 rounded flex flex-col shadow relative">
  <h3 className="text-xl font-semibold border-b pb-2 mb-4">Search Fee Invoices</h3>

  {/* Radio Group */}
  <div className="flex gap-3 mb-6 flex-wrap">
    {[
      { value: "keyword", label: "By Keyword" },
      { value: "class", label: "By Class" },
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
      {searchBy === "keyword" && (
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
      )}

      {searchBy === "class" && (
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <label className="block font-medium mb-1">Class</label>
            <select className="w-full border rounded px-3 py-2">
              <option value="">Select Class</option>
              {[...Array(8)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {`${i + 1}${["st", "nd", "rd"][i] || "th"}`}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block font-medium mb-1">Section</label>
            <select className="w-full border rounded px-3 py-2">
              <option>All Sections</option>
            </select>
          </div>
          <div>
            <label className="block font-medium mb-1">Status</label>
            <select className="w-full border rounded px-3 py-2">
              <option>All Status</option>
              {["Paid", "Unpaid", "Partially Paid"].map((stat) => (
                <option key={stat} value={stat.toLowerCase().replace(" ", "_")}>
                  {stat}
                </option>
              ))}
            </select>
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
    <span className="font-medium">Payment Received:</span>
    <span>Rs:{paymentReceived.toLocaleString()}</span>
  </li>
  <li className="flex justify-between">
    <span className="font-medium">Amount Pending:</span>
    <span>Rs:{amountPending.toLocaleString()}</span>
  </li>
</ul>

    </div>
  </div>

  {/* Submit Button */}
  <button className="bg-[rgb(1,1,93)] w-fit  text-white px-6 py-2 rounded transition self-start">
    <i className="fas fa-file-invoice mr-2"></i> Get Invoices
  </button>
</div>



      {/* Result Table */}
      <div className="bg-white p-6 rounded shadow">
        <div className="flex justify-between items-center mb-4">
          <div>
            <button className="mr-2 px-3 py-1 bg-gray-200 rounded">Copy</button>
            <button className="mr-2 px-3 py-1 bg-gray-200 rounded">CSV</button>
            <button className="mr-2 px-3 py-1 bg-gray-200 rounded">Excel</button>
            <button className="mr-2 px-3 py-1 bg-gray-200 rounded">PDF</button>
            <button className="mr-2 px-3 py-1 bg-gray-200 rounded">Print</button>
          </div>
          <input type="search" placeholder="Search" className="border px-3 py-1 rounded" />
        </div>

        <table className="w-full overflow-x-auto table-auto border-collapse">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-2 border"><input type="checkbox" /></th>
              {["Student Name", "Father's Name", "Admission No.", "Concession.","Title","Total Amount", "Payable", "Status", "Actions"].map(th => (
                <th key={th} className="p-2 border">{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {feeVouchers.map(row => (
              <tr key={row.id} className="hover:bg-gray-50">
                <td className="p-2 border text-center"><input type="checkbox" /></td>
                <td className="p-2 border">{row?.student?.name || "-"}</td>
                <td className="p-2 border">{row?.student?.parent || "-"}</td>
                <td className="p-2 border">{row?.student?.AdmissionNum || "-"}</td>
                <td className="p-2 border">{row?.concession+"%" || "-"}</td>
                <td className="p-2 border">{row?.feeType?.name || "-"}</td>
                <td className='p-2 border'>{row?.baseAmount || "-"}</td>
                <td className="p-2 border">{row?.finalAmount || "-"}</td>
                <td className="p-2 border">{row?.paid === true ? "Paid" : "UnPaid"}</td>
             <td className="p-2 border text-sm">
  <div className="flex flex-col items-center space-y-1">
    <a
      href={`${baseURL}${row?.pdfPath}`}
      target="_blank"
      rel="noopener noreferrer"
      className="text-purple-600 underline"
    >
      View Voucher
    </a>
    <div className="flex space-x-2">
      <button className="text-green-600 hover:underline">
        <i className="fas fa-money-bill-wave mr-1"></i>Collect
      </button>
      <button className="text-blue-600 hover:underline">
        <i className="fas fa-edit mr-1"></i>Edit
      </button>
      <button className="text-red-600 hover:underline">
        <i className="fas fa-trash mr-1"></i>Delete
      </button>
    </div>
  </div>
</td>

              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="mt-4 flex justify-between items-center">
          <span>Showing {tableData.length} records</span>
          <div className="space-x-2">
            <button className="px-3 py-1 bg-gray-200 rounded" disabled>Prev</button>
            <button className="px-3 py-1 bg-gray-200 rounded" disabled>Next</button>
          </div>
        </div>
      </div>
      </div>
    </AdminLayout>
  )
}

export default FeeInvoices
