import React from 'react'
import AdminLayout from './AdminLayout'
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader'
import { Link } from 'react-router-dom'
const AdminPendingPayments = () => {
  return (
    <AdminLayout adminName='Bright Future'>
       <div className="main w-full h-full flex flex-col gap-4 mt-4">
          <AdminTeachDashboardHeader/>
           {/* Header */}
        <div className="flex w-full text-white p-3 rounded-md bg-[rgb(1,1,93)] flex-col md:flex-row justify-between items-center border-b pb-3">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <i className="fas fa-calendar-alt"></i> Verify Payments
          </h2>
          <div className="mt-2 md:mt-0 flex gap-2">
            <Link
              to="/admin/payment/history"
              className="text-sm px-4 py-1 border border-gray-300 rounded bg-[#C19703]"
            >
              <i className="fas fa-clock"></i>&nbsp;Payment History
            </Link>
              <Link
              to="/admin/add/fee/invoices" 
              className="text-sm px-4 py-1 border border-gray-300 rounded bg-[#C19703]"
            >
              <i className="fas fa-clock"></i>&nbsp;Add New Fee Invoice
            </Link>
              <Link
              to="/admin/student/fee/invoice"
              className="text-sm px-4 py-1 border border-gray-300 rounded bg-[#C19703]"
            >
              <i className="fas fa-clock"></i>&nbsp;View Invoices
            </Link>
          </div>
        </div>

            <div className="w-full overflow-x-auto border border-grey-300 p-4 bg-white shadow rounded">
      {/* Search Bar */}
      <div className="flex justify-end mb-4">
        <label className="flex items-center space-x-2 text-sm">
          <span>Search</span>
          <input
            type="search"
            placeholder=""
            className="form-input form-input-sm px-4 py-1.5  border border-slate-500 rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </label>
      </div>

      {/* Processing Overlay */}
      {/* This can be conditionally rendered based on state */}
      {/* <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-75 z-10">
        <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded shadow">Processing...</div>
      </div> */}

      {/* Table */}
      <table className="table-auto min-w-full border border-gray-200">
        <thead>
          <tr className="bg-blue-600 text-white text-sm">
            <th className="px-4 py-2 border">Receipt Number</th>
            <th className="px-4 py-2 border">Amount</th>
            <th className="px-4 py-2 border">Payment Method</th>
            <th className="px-4 py-2 border">Transaction ID</th>
            <th className="px-4 py-2 border">Attachment</th>
            <th className="px-4 py-2 border whitespace-nowrap">Date</th>
            <th className="px-4 py-2 border">Invoice</th>
             <th className="px-4 py-2 border">Approve</th>
              <th className="px-4 py-2 border">Student Name</th>
          </tr>
        </thead>
        <tbody>
          {/* Empty State */}
          <tr>
            <td colSpan="7" className="text-center py-4 text-gray-500">-</td>
          </tr>
        </tbody>
      </table>

      {/* Table Info */}
      <div className="text-sm text-gray-600 mt-4">
        Showing 0 to 0 of 0 Records
      </div>

      {/* Pagination */}
      <div className="flex justify-end mt-2">
        <ul className="inline-flex -space-x-px text-sm">
          <li>
            <button
              className="px-3 py-1 border border-gray-300 bg-gray-100 text-gray-400 rounded-l cursor-not-allowed"
              disabled
            >
              Previous
            </button>
          </li>
          <li>
            <button
              className="px-3 py-1 border border-gray-300 bg-gray-100 text-gray-400 rounded-r cursor-not-allowed"
              disabled
            >
              Next
            </button>
          </li>
        </ul>
      </div>
    </div>
       </div>
    </AdminLayout>
  )
}

export default AdminPendingPayments
