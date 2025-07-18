import React, { useState } from 'react'
import AdminLayout from './AdminLayout'
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader'
import { Link } from 'react-router-dom'
const AdminViewExpense = () => {
     const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [total, setTotal] = useState(2000.0); // Dummy value

  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const expenses = [
    {
      title: 'electrician',
      category: 'Fittings',
      supplier: 'abc',
      amount: '₹2,000.00',
      invoiceNumber: '0001',
      date: '13-07-2025',
      note: '-',
    },
  ];

  const handleExport = (e) => {
    e.preventDefault();
    alert('Export initiated...');
  };
  const handleFetchData = () => {
    // Handle your AJAX logic here
    alert(`Fetching data from ${startDate} to ${endDate}`);
  };
  
  return (
    <AdminLayout adminName='Bright Future'>
       <div className="main w-full h-full flex flex-col gap-3 mt-4">
         <AdminTeachDashboardHeader/>
                {/* Header */}
  <div className="bg-[rgb(1,1,93)] text-white text-center py-3 px-2 rounded flex items-center justify-between">
    <span className="text-lg font-semibold">
      <i className="fas fa-clock mr-2" />
      Expenses
    </span>
    <span className="flex justify-around gap-4 items-center">
      <Link
        to="/admin/expense/categories"
        className="border border-white bg-[#C19703] text-white transition px-3 py-1 rounded text-sm"
      >
        <i className="fas fa-calendar-alt mr-1" />
        Expense Categories
      </Link>
       <Link
        to="/admin/add/expense"
        className="border border-white bg-[#C19703] text-white  transition px-3 py-1 rounded text-sm"
      >
        <i className="fas fa-calendar-alt mr-1" />
        Add New Expense
      </Link>
    </span>
  </div>

      <div className="w-full md:w-2/3">
      <form className="mb-6">
        {/* Hidden fields (if needed for actual form submission) */}
        <input type="hidden" name="get-expenses" value="ba90178cba" />
        <input type="hidden" name="action" value="wlsm-fetch-expenses" />

        {/* Header */}
        <div className="pt-2 mb-2">
          <h6 className="text-gray-700 border-b border-gray-300 inline-block">
            Select Date
          </h6>
        </div>

        {/* Form Row */}
        <div className="flex flex-wrap -mx-2 mb-4">
          {/* Start Date */}
          <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
            <label className="font-semibold block mb-1">Start Date:</label>
            <div className="relative">
              <input
                type="date"
                name="start_date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="absolute right-3 top-2.5 text-gray-400 text-sm">📅</span>
            </div>
          </div>

          {/* End Date */}
          <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
            <label className="font-semibold block mb-1">End Date:</label>
            <div className="relative">
              <input
                type="date"
                name="end_date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="absolute right-3 top-2.5 text-gray-400 text-sm">📅</span>
            </div>
          </div>

          {/* Total */}
          <div className="w-full md:w-1/3 px-2">
            <label className="font-semibold block">
              Total: <span className="text-blue-600 font-bold">{total.toFixed(2)}</span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-4">
          <button
            type="button"
            onClick={handleFetchData}
            className="inline-flex items-center px-4 py-2 text-sm text-white border bg-[rgb(1,1,93)] border-blue-500 rounded hover:bg-blue-50"
          >
            <i className="fas fa-file-invoice mr-2"></i> Fetch Data
          </button>
        </div>
      </form>
    </div>


<div className="w-full p-4 bg-white shadow rounded">
      {/* Search Input */}
      <div className="flex justify-end mb-4">
        <label className="flex items-center gap-2 text-sm">
          <span>Search</span>
          <input
            type="search"
            className="form-input px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
            placeholder=""
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>

      {/* Processing Overlay */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 z-10">
          <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded shadow">
            Processing...
          </div>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 table-auto text-sm">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="px-4 py-2 border">Title</th>
              <th className="px-4 py-2 border">Category</th>
              <th className="px-4 py-2 border">Supplier Name</th>
              <th className="px-4 py-2 border">Amount</th>
              <th className="px-4 py-2 border">Invoice Number</th>
               <th className="px-4 py-2 border">Date</th>
                <th className="px-4 py-2 border">Note</th>
              {/* Hidden Columns (Visible only if needed) */}
              {/* <th className="px-4 py-2 border">Date</th>
              <th className="px-4 py-2 border">Note</th>
              <th className="px-4 py-2 border">Action</th> */}
            </tr>
          </thead>
          <tbody>
            {expenses.length > 0 ? (
              expenses.map((item, index) => (
                <tr key={index} className="bg-white hover:bg-gray-50">
                  <td className="px-4 py-2 border">{item.title}</td>
                  <td className="px-4 py-2 border">{item.category}</td>
                  <td className="px-4 py-2 border">{item.supplier}</td>
                  <td className="px-4 py-2 border">{item.amount}</td>
                  <td className="px-4 py-2 border">{item.invoiceNumber}</td>
                   <td className="px-4 py-2 border">2025-24-5</td>
                    <td className="px-4 py-2 border">-</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  No records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Table Info */}
      <div className="text-sm text-gray-600 mt-4">
        Showing {expenses.length} to {expenses.length} of {expenses.length} Records
      </div>

      {/* Pagination */}
      <div className="mt-2 flex justify-end">
        <ul className="inline-flex text-sm">
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
              className="px-3 py-1 border-t border-b border-gray-300 bg-blue-100 text-blue-700 font-semibold"
            >
              1
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

      {/* Export Button */}
      <div className="mt-6">
        <form onSubmit={handleExport}>
          {/* Hidden fields (mimicking the backend requirement) */}
          <input type="hidden" name="nonce" value="2aa219254c" />
          <input type="hidden" name="action" value="wlsm-export-staff-expenses-table" />
          <input type="hidden" name="filter" value="" />
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white text-sm rounded hover:bg-green-700"
          >
            <i className="fas fa-file-export"></i> Export
          </button>
        </form>
      </div>
    </div>

       </div>
    </AdminLayout>
  )
}

export default AdminViewExpense
