import React, { useState } from 'react'
import AdminLayout from './AdminLayout'
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader'
import { Link } from 'react-router-dom'
const ExpenseCategories = () => {
      const [search, setSearch] = useState('');
  const [categories, setCategories] = useState([
    { id: 1, name: 'Fittings' },
    // Add more mock categories here
  ]);
  const [newCategory, setNewCategory] = useState('');

  const filteredCategories = categories.filter((cat) =>
    cat.name.toLowerCase().includes(search.toLowerCase())
  );
  const handleAddCategory = (e) => {
    e.preventDefault();
    if (!newCategory.trim()) return;
    const newId = categories.length + 1;
    setCategories([...categories, { id: newId, name: newCategory }]);
    setNewCategory('');
  }
  return (
    <AdminLayout adminName='Bright Future'>
      <div className="main w-full h-full flex flex-col gap-4">
         <AdminTeachDashboardHeader/>
                {/* Header */}
  <div className="bg-[rgb(1,1,93)] text-white text-center py-3 px-2 rounded flex items-center justify-between">
    <span className="text-lg font-semibold">
      <i className="fas fa-clock mr-2" />
      Expense Categories
    </span>
    <span className="flex justify-around gap-4 items-center">
      <Link
        to="/admin/view/expense"
        className="border border-white bg-[#C19703] text-white transition px-3 py-1 rounded text-sm"
      >
        <i className="fas fa-calendar-alt mr-1" />
        View Expenses
      </Link>
    </span>
  </div>



   <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Table Section */}
      <div className="bg-white p-4 shadow rounded">
        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-1">Search</label>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border px-3 py-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search categories..."
          />
        </div>

        <table className="min-w-full table-auto border rounded shadow">
          <thead>
            <tr className="bg-blue-600 text-white text-left">
              <th className="px-4 py-2">Category</th>
            </tr>
          </thead>
          <tbody>
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category) => (
                <tr key={category.id} className="hover:bg-gray-100">
                  <td className="px-4 py-2">{category.name}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-4 py-2 text-gray-500">No categories found.</td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="mt-2 text-sm text-gray-600">
          Showing {filteredCategories.length} of {categories.length} Records
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-lg font-semibold border-b pb-2 mb-4 text-blue-700 flex items-center">
          <i className="fas fa-plus-square mr-2"></i> Add New Expense Category
        </h2>

        <form onSubmit={handleAddCategory}>
          <div className="mb-4">
            <label htmlFor="category" className="font-medium block mb-1">
              Category:
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="Enter expense category"
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 inline-flex items-center"
            >
              <i className="fas fa-plus-square mr-1"></i>
              Add New Expense Category
            </button>
          </div>
        </form>
      </div>
    </div>
      </div>
    </AdminLayout>
  )
}

export default ExpenseCategories
