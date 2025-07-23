import React from 'react'
import AdminLayout from './AdminLayout'
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader'
import { Link } from 'react-router-dom'
import { FaDollarSign, FaFile, FaFileInvoice, FaSign } from 'react-icons/fa'

const AdminAccountantDashboard = () => {

const statsData = [
  { icon: <FaFileInvoice />, count: '2', label: 'Total Invoices', session: '2025-2026' },
  { icon: <FaFileInvoice />, count: '1', label: 'Paid Invoices', session: '2025-2026' },
  { icon: <FaFileInvoice />, count: '0', label: 'Unpaid Invoices', session: '2025-2026' },
  { icon: <FaFileInvoice />, count: '1', label: 'Partially Paid Invoices', session: '2025-2026' },
  { icon: <FaFileInvoice />, count: '3', label: 'Total Payments', session: '2025-2026' },
  { icon: <FaDollarSign />, count: 'Rs 10,000.00', label: 'Payment Received', session: '2025-2026' },
  { icon: <FaDollarSign />, count: 'Rs 1,500.00', label: 'Amount Pending', session: '2025-2026' },
  { icon: <FaDollarSign />, count: 'Rs 2,000.00', label: 'Expense', session: '2025-2026' },
  { icon: <FaDollarSign />, count: '-', label: 'Donation', session: '2025-2026' },
  { icon: <FaDollarSign />, count: '-', label: 'Daily Payments Total (Today)', session: '2025-2026' },
  { icon: <FaDollarSign />, count: '-', label: 'Daily Expense Total', session: '2025-2026' },
  { icon: <FaDollarSign />, count: '-', label: 'Previous Year Total Pending', session: '2015-2016' },
];

const sections = [
    {
      title: 'Fee Invoices',
      actions: [
        { label: 'Fee Invoices', href: '/admin/student/fee/invoice' },
         { label: 'Add New Fee Invoices', href: '/admin/add/fee/invoices' },
          { label: 'Payment History', href: '/admin/payment/history' },
      ],
    },
    {
      title: 'Expense',
      actions: [
        { label: 'View Expense', href: '/admin/view/expense' },
        { label: 'Add New Expense', href: '/admin/add/expense' },
         { label: 'Expense Category', href: '/admin/expense/categories' },
      ],
    },
    {
      title: 'Fee Types',
      actions: [
        { label: 'View Fee Types', href: '/admin/view/fee/types' },
        { label: 'Add  New Fee Type', href: '/admin/add/fee/type' },
      ],
    }
  ]
  return (
    <AdminLayout adminName='Bright Future'>
        <div className="main flex flex-col gap-4 w-full h-full mt-4">
        <AdminTeachDashboardHeader/>
        {/* Header */}
    <div className="flex w-full text-white p-3 rounded-md bg-[rgb(1,1,93)] flex-col md:flex-row justify-center items-center border-b pb-3">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <i className="fas fa-calendar-alt"></i> Accounting
          </h2>
        </div>
    {/* Header end*/}
     {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col border border-[#c19703] items-center justify-center p-6 bg-white shadow rounded-md text-center"
            >
                <div className="icon absolute text-blue-600 text-3xl left-1/2 right-1/2 ">{stat.icon}</div>
             {/* <i className={`${stat.icon} text-blue-600 text-3xl mb-2`}></i> */}
              <div className="text-2xl font-bold text-gray-800">{stat.count}</div>
              <div className="text-sm text-gray-600">
                {stat.label}
                <br />
                <small className="text-gray-500">- Session: {stat.session}</small>
              </div>
            </div>
          ))}
        </div>
 {/* Dashboard Grid */}
          <div className="grid mt-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {sections.map((section, idx) => (
              <div
                key={idx}
                className="bg-white w-[300px] text-[rgb(1,1,93)] rounded-lg shadow-md p-8 flex flex-col justify-between h-full border-[1px] border-[#C19703]"
              >
                <span className="text-xl font-semibold mb-4">{section.title}</span>
                <div className="flex flex-col gap-3">
                  {section.actions.map((action, index) => (
                    <Link
                      key={index}
                      to={action.href}
                      className="bg-[rgb(1,1,93)] text-white w-fit hover:bg-[#C19703] py-1 px-2 rounded-md text-sm  text-center"
                    >
                      {action.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

<div className="mt-6 p-4 bg-white shadow-md rounded-md border border-gray-200">
  {/* Heading */}
  <div className="mb-4">
    <h3 className="text-lg font-semibold text-gray-800">
      Daily Payment History <small className="text-gray-500">- Session: 2025-2026</small>
    </h3>
  </div>

  {/* Top Controls */}
  <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
    {/* Show entries */}
    <div className="flex items-center gap-2">
      <label htmlFor="entries" className="text-sm text-gray-700">Show</label>
      <select
        id="entries"
        className="border border-gray-300 rounded px-2 py-1 text-sm"
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
      <span className="text-sm text-gray-700">entries</span>
    </div>

    {/* Search */}
    <div className="flex items-center gap-2">
      <label htmlFor="search" className="text-sm text-gray-700">Search:</label>
      <input
        id="search"
        type="search"
        placeholder=""
        className="border border-gray-300 rounded px-2 py-1 text-sm"
      />
    </div>
  </div>

  {/* Table */}
  <div className="overflow-x-auto">
    <table className="min-w-full table-auto text-sm text-left border border-gray-200">
      <thead className="bg-[rgb(1,1,93)] text-white">
        <tr>
          <th className="px-4 py-2">Receipt Number</th>
          <th className="px-4 py-2">Amount</th>
          <th className="px-4 py-2">Payment Method</th>
          <th className="px-4 py-2">Transaction ID</th>
          <th className="px-4 py-2">Date</th>
          <th className="px-4 py-2">Invoice</th>
          <th className="px-4 py-2">Student Name</th>
          <th className="px-4 py-2">Admission Number</th>
          <th className="px-4 py-2">Class</th>
          <th className="px-4 py-2">Section</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-t text-center">
          <td colSpan="7" className="px-4 py-4 text-gray-500">No data available in table</td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* Footer Controls */}
  <div className="flex flex-col md:flex-row justify-between items-center mt-4 text-sm text-gray-700">
    <div>Showing 0 to 0 of 0 entries</div>
    <div className="flex gap-2 mt-2 md:mt-0">
      <button className="px-3 py-1 border border-gray-300 rounded bg-gray-100 text-gray-400 cursor-not-allowed">Previous</button>
      <button className="px-3 py-1 border border-gray-300 rounded bg-gray-100 text-gray-400 cursor-not-allowed">Next</button>
    </div>
  </div>
</div>

        </div>
    </AdminLayout>
  )
}

export default AdminAccountantDashboard
