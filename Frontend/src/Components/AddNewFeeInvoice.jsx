// import React from 'react'
// import AdminLayout from './AdminLayout'
// import AdminTeachDashboardHeader from './AdminTeachDashboardHeader'
// import { Link } from 'react-router-dom'
// const AddNewFeeInvoice = () => {
//   return (
//     <AdminLayout adminName='Bright Future'>
//       <div className="main w-full h-full  mt-4 flex flex-col gap-4">
//      <AdminTeachDashboardHeader/>
//      {/* Header */}
//          <div className="flex w-full text-white p-3 rounded-md bg-[rgb(1,1,93)] flex-col md:flex-row justify-between items-center border-b pb-3">
//            <h2 className="text-lg font-semibold  flex items-center gap-2">
//              <i className="fas fa-calendar-alt"></i> Add New Fee Invoice
//            </h2>
//            <div className="mt-2 md:mt-0 flex gap-2">
//              <Link to="/Take/Attendance" className="text-sm px-4 py-1 border border-gray-300 rounded bg-[#C19703]">
//                <i className="fas fa-clock"></i>&nbsp;View All
//              </Link>
//            </div>
//          </div>
//       </div>
//     </AdminLayout>
//   )
// }

// export default AddNewFeeInvoice
























import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import AdminLayout from './layouts/AdminLayout';
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader';
import AdminLayout from './AdminLayout';
import InvoiceDetailsSection from './InvoiceDetailsSection';
import CollectPaymentSection from './CollectPaymentSection';
//import AdminTeachDashboardHeader from '../components/AdminTeachDashboardHeader';

const AddNewFeeInvoice = () => {
  const [invoiceType, setInvoiceType] = useState('single_invoice');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [selectedStudent, setSelectedStudent] = useState('');
 // const [showPayemntForm,setShowPaymentForm] = useState(false);

  return (
    <AdminLayout adminName="Bright Future">
      <div className="main w-full h-full mt-4 flex flex-col gap-4">
        <AdminTeachDashboardHeader />

        {/* Header */}
        <div className="flex w-full text-white p-3 rounded-md bg-[rgb(1,1,93)] flex-col md:flex-row justify-between items-center border-b pb-3">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <i className="fas fa-calendar-alt"></i> Add New Fee Invoice
          </h2>
          <div className="mt-2 md:mt-0 flex gap-2">
            <Link
              to="/admin/student/fee/invoice"
              className="text-sm px-4 py-1 border border-gray-300 rounded bg-[#C19703]"
            >
              <i className="fas fa-clock"></i>&nbsp;View All
            </Link>
          </div>
        </div>

        {/* Invoice Type Selection */}
        <div className="flex gap-4 flex-wrap mt-4">
          {[
            { id: 'single_invoice', label: 'Create Single Invoice' },
            { id: 'bulk_invoice', label: 'Create Bulk Invoice' },
            { id: 'single_invoice_fee_type', label: 'Create Single Invoice According Fee Type' }
          ].map(({ id, label }) => (
            <label
              key={id}
              className={`flex items-center gap-2 px-4 py-2 rounded cursor-pointer border 
              ${invoiceType === id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              <input
                type="radio"
                name="invoice_type"
                value={id}
                checked={invoiceType === id}
                onChange={() => setInvoiceType(id)}
                className="form-radio"
              />
              <span className="font-semibold">{label}</span>
            </label>
          ))}
        </div>

        {/* Dropdowns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {/* Class */}
          <div>
            <label htmlFor="classSelect" className="font-semibold block mb-1">Class:</label>
            <select
              id="classSelect"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
            >
              <option value="">Select Class</option>
              {['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'].map((cls, idx) => (
                <option key={idx} value={idx + 1}>{cls}</option>
              ))}
            </select>
          </div>

          {/* Section */}
          <div>
            <label htmlFor="sectionSelect" className="font-semibold block mb-1">Section:</label>
            <select
              id="sectionSelect"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={selectedSection}
              onChange={(e) => setSelectedSection(e.target.value)}
            >
              <option value="">All Sections</option>
              {/* Populate dynamically as needed */}
              <option value="A">A</option>
              <option value="B">B</option>
            </select>
          </div>

          {/* Student */}
          <div>
            <label htmlFor="studentSelect" className="font-semibold block mb-1">Student:</label>
            <select
              id="studentSelect"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={selectedStudent}
              onChange={(e) => setSelectedStudent(e.target.value)}
            >
              <option value="">Select</option>
              {/* Populate dynamically as needed */}
              <option value="1">John Doe</option>
              <option value="2">Jane Smith</option>
            </select>

            <button
              type="button"
              className="mt-2 px-3 py-1 border border-blue-500 text-blue-500 rounded text-sm hover:bg-blue-50"
            >
              <i className="fas fa-print mr-1"></i> Fee Structure
            </button>
          </div>
        </div>
        <InvoiceDetailsSection/><br></br>
        <CollectPaymentSection/>
     <div className="flex items-center justify-center">
        <button className='bg-[rgb(1,1,93)] w-fit px-3 py-2 rounded text-white text-md w'>Add New Fee Invoice</button>
     </div>

      </div>
    </AdminLayout>
  );
};

export default AddNewFeeInvoice;
