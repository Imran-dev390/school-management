import React, { useState } from 'react'
import AdminLayout from './AdminLayout'
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader'
import { Link } from 'react-router-dom'
const AdminAddNewExpense = () => {
    const [formData, setFormData] = useState({
    title: '',
    category: '',
    supplierName: '',
    amount: '',
    invoiceNumber: '',
    expenseDate: '',
    attachment: null,
    note: '',
  });

  const categories = [
    { id: 1, name: 'Fittings' },
    // Add more if needed
  ];

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process formData here
    console.log(formData);
  };
  return (
    <AdminLayout adminName='Bright Futue'>
      <div className="main w-full h-full flex flex-col gap-4 mt-4">
<AdminTeachDashboardHeader/>
      {/* Header */}
        <div className="flex w-full text-white p-3 rounded-md bg-[rgb(1,1,93)] flex-col md:flex-row justify-between items-center border-b pb-3">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <i className="fas fa-calendar-alt"></i> Add New Expense
          </h2>
          <div className="mt-2 md:mt-0 flex gap-2">
            <Link
              to="/admin/view/expense"
              className="text-sm px-4 py-1 border border-gray-300 rounded bg-[#C19703]"
            >
              <i className="fas fa-clock"></i>&nbsp;View All
            </Link>
          </div>
        </div>

            <form onSubmit={handleSubmit} className="space-y-6 border border-grey-300 py-2 px-4">
      <div className="grid md:grid-cols-3 gap-6">
        {/* Title */}
        <div>
          <label htmlFor="title" className="font-semibold block mb-1">
            <span className="text-red-500">*</span> Title:
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter expense title"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        {/* Category */}
        <div>
          <label htmlFor="category" className="font-semibold block mb-1">
            Category:
          </label>
          <select
            name="category"
            id="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="">Select Expense Category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* Supplier Name */}
        <div>
          <label htmlFor="supplierName" className="font-semibold block mb-1">
            <span className="text-red-500">*</span> Supplier Name:
          </label>
          <input
            type="text"
            name="supplierName"
            id="supplierName"
            value={formData.supplierName}
            onChange={handleChange}
            placeholder="Enter supplier name"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Amount */}
        <div>
          <label htmlFor="amount" className="font-semibold block mb-1">
            <span className="text-red-500">*</span> Amount:
          </label>
          <input
            type="number"
            step="any"
            min="0"
            name="amount"
            id="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Enter amount"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        {/* Invoice Number */}
        <div>
          <label htmlFor="invoiceNumber" className="font-semibold block mb-1">
            Invoice Number:
          </label>
          <input
            type="text"
            name="invoiceNumber"
            id="invoiceNumber"
            value={formData.invoiceNumber}
            onChange={handleChange}
            placeholder="Enter invoice number"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        {/* Expense Date */}
        <div>
          <label htmlFor="expenseDate" className="font-semibold block mb-1">
            <span className="text-red-500">*</span> Expense Date:
          </label>
          <input
            type="date"
            name="expenseDate"
            id="expenseDate"
            value={formData.expenseDate}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Attachment */}
        <div>
          <label htmlFor="attachment" className="font-semibold block mb-1">
            Attachment:
          </label>
          <input
            type="file"
            name="attachment"
            id="attachment"
            onChange={handleChange}
            className="w-full text-sm text-gray-700"
          />
        </div>

        {/* Spacer */}
        {/* <div></div> */}

        {/* Note */}
        <div className="md:col-span-2">
          <label htmlFor="note" className="font-semibold block mb-1">
            Note:
          </label>
          <textarea
            name="note"
            id="note"
            rows="2"
            value={formData.note}
            onChange={handleChange}
            placeholder="Enter note"
            className="w-full px-3 py-2 border rounded resize-none focus:outline-none focus:ring focus:border-blue-300"
          ></textarea>
        </div>
      </div>
    </form>
     <div className='flex items-center justify-center'>
        <button
          type="submit"
          className="px-6 py-2 bg-[rgb(1,1,93)] text-white rounded"
        >
          Add New Expense
        </button>
      </div>

      </div>
    </AdminLayout>
  )
}

export default AdminAddNewExpense
