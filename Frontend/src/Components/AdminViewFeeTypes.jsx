import React, { useContext, useEffect } from 'react'
import AdminLayout from './AdminLayout'
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader'
import { Link } from 'react-router-dom'
import { adminDataContext } from '../Context-Api/AdminContext'

const AdminViewFeeTypes = () => {
  const {adminData,fetchAdminData} = useContext(adminDataContext);
  const {classes = []} = adminData?.admin || {};
  const {FeeTypes = []}  = adminData?.admin || {};
    const data = [
    { feeType: 'Transport', className: '1st', amount: '₹3,000.00',period:"One Time", },
    { feeType: 'Tuition Fees', className: '1st', amount: '₹500.00' ,period:"Monthly"},
    { feeType: 'Uniform', className: '1st', amount: '₹2,000.00',period:"Quarterly (3 Months)" },
    { feeType: 'School Uniform', className: '1st', amount: '₹1,500.00',period:"One Time" },
    // Add more rows as needed
  ];
  const {classIds} = FeeTypes;
  const findClass  = classes.find((cls)=> cls._id === classIds);
console.log("findClass",findClass);
  useEffect(()=>{
          fetchAdminData();
  },[fetchAdminData])
  console.log("FeeTypes",FeeTypes);
  return (
    <AdminLayout adminName='Bright Future'>
      <div className="main w-full h-full flex flex-col gap-4 mt-4">
             <AdminTeachDashboardHeader/>
                   {/* Header */}
  <div className="bg-[rgb(1,1,93)] text-white text-center py-3 px-2 rounded flex items-center justify-between">
    <span className="text-lg font-semibold">
      <i className="fas fa-clock mr-2" />
      Fee Types
    </span>
    <span className="flex justify-around gap-4 items-center">
      <Link
        to="/admin/add/fee/type"
        className="border border-white bg-[#C19703] text-white transition px-3 py-1 rounded text-sm"
      >
        <i className="fas fa-calendar-alt mr-1" />
        Add New Fee Type
      </Link>
    </span>
  </div>
    <div className="w-full p-4 bg-white rounded shadow-md">
      {/* Search Input */}
      <div className="flex justify-end mb-3">
        <input
          type="search"
          placeholder="Search"
          className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 text-sm">
          <thead>
            <tr className="bg-blue-600 text-white text-left">
              <th className="px-4 py-2 border">Fee Type</th>
              <th className="px-4 py-2 border">Class</th>
              <th className="px-4 py-2 border">Amount</th>
              <th className="px-4 py-2 border">Period</th>
              {/* <th className="px-4 py-2 border">Period</th> */}
               <th className="px-4 py-2 border">Action</th> 
            </tr>
          </thead>
          <tbody>
          {FeeTypes.map((fee, idx) => {
  const className = classes.find(cls => cls._id === fee.classIds[0])?.name || 'N/A';
  return (
    <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
      <td className="px-4 py-2 border">{fee.name}</td>
      <td className="px-4 py-2 border">{className}</td>
      <td className="px-4 py-2 border">Rs,{Number(fee.amount).toLocaleString('en-IN')}</td>
      <td className="px-4 py-2 border capitalize">{fee.period.replace('-', ' ')}</td>
      <td className="px-4 py-2 border flex items-center gap-4">
        <button className='underline p-0.5 text-red-500 rounded-md'>Delete</button>
        <button className='text-blue-600 p-0.5 underline rounded-md'>Edit</button>
      </td>
    </tr>
  );
})}

          </tbody>
        </table>
      </div>

      {/* Pagination (static sample) */}
      <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
        <span>Showing 1 to {data.length} of {data.length} Records</span>
        <div className="flex gap-1">
          <button className="px-3 py-1 border rounded bg-gray-200 text-gray-700" disabled>Previous</button>
          <button className="px-3 py-1 border rounded bg-blue-600 text-white">1</button>
          <button className="px-3 py-1 border rounded bg-gray-200 text-gray-700" disabled>Next</button>
        </div>
      </div>
    </div>
      </div>
    </AdminLayout>
  )
}

export default AdminViewFeeTypes
