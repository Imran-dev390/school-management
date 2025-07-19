import React, { useContext, useEffect, useState } from 'react'
import AdminLayout from './AdminLayout'
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader'
import { Link, useNavigate } from 'react-router-dom'
import Select from 'react-select';
import axios from 'axios';
import { adminDataContext } from '../Context-Api/AdminContext';
import { authDataContext } from '../Context-Api/AuthContext';
  const AdminAddFeeType = () => {
  const [feeType, setFeeType] = useState('');
  const {serverUrl} = useContext(authDataContext);
  const [classIds, setClassIds] = useState([]);
  const [studentTypes, setStudentTypes] = useState([]);
  const [period, setPeriod] = useState('');
  const {adminData,fetchAdminData} = useContext(adminDataContext);
  const {classes = []} = adminData?.admin || {}; 
  const [amount, setAmount] = useState('');
  const [activeOnAdmission, setActiveOnAdmission] = useState(true);
  const [activeOnDashboard, setActiveOnDashboard] = useState(false);
const [selectedClasses, setSelectedClasses] = useState([]);
const [selectedStudentTypes, setSelectedStudentTypes] = useState([]);
const navigate = useNavigate();
const classOptions = classes.map((cls) => ({
  value: cls._id,
  label: cls.name,
}));


  const periodOptions = [
    { value: 'one-time', label: 'One Time' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'quarterly', label: 'Quarterly (3 Months)' },
    { value: 'quadrimester', label: 'Quadrimester (4 Months)' },
    { value: 'half-yearly', label: 'Half Yearly (6 Months)' },
    { value: 'annually', label: 'Annually (12 Months)' }
  ];

  useEffect(()=>{
          fetchAdminData();
  },[fetchAdminData])
    const handleAddFeeType = async () => {
    try {
      if (!feeType || !selectedClasses.length || !period || !amount) {
        alert("Please fill all required fields.");
        return;
      }

      const payload = {
        name: feeType,
        classIds: selectedClasses.map(c => c.value), // Convert to raw _id values
        period,
        amount: parseFloat(amount),
        activeOnAdmission,
        activeOnDashboard
      };
      const response = await axios.post(`${serverUrl}/api/admin/add/fee-types`, payload,{withCredentials:true});
      if(response.status === 201){
      alert("Fee type added successfully!");
      navigate("/admin/view/fee/types"); // redirect to view page
      }
    } catch (error) {
      console.error("Failed to add fee type:", error);
      alert(error.response?.data?.message || "Something went wrong.");
    }
  };
  return (
    <AdminLayout adminName='Bright Future'>
       <div className="main w-full h-full flex flex-col gap-4 mt-4">
      <AdminTeachDashboardHeader/>
       {/* Header */}
        <div className="flex w-full text-white p-3 rounded-md bg-[rgb(1,1,93)] flex-col md:flex-row justify-between items-center border-b pb-3">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <i className="fas fa-calendar-alt"></i> Add New Fee Type
          </h2>
          <div className="mt-2 md:mt-0 flex gap-2">
            <Link
              to="/admin/view/fee/types"
              className="text-sm px-4 py-1 border border-gray-300 rounded bg-[#C19703]"
            >
              <i className="fas fa-clock"></i>&nbsp;View All
            </Link>
          </div>
        </div>


        <div className="bg-white p-6 rounded shadow-md space-y-6">
      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="font-semibold block mb-1" htmlFor="feeType">
            <span className="text-red-600">*</span> Fee Type:
          </label>
          <input
            id="feeType"
            type="text"
            value={feeType}
            onChange={(e) => setFeeType(e.target.value)}
            placeholder="Enter fee type"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="font-semibold block mb-1" htmlFor="classSelect">
              <span className="text-red-600">*</span> Class:
            </label>
             <Select
  isMulti
  name="classes"
  options={classOptions}
  className="react-select-container w-full"
  classNamePrefix="react-select"
  value={selectedClasses}
  onChange={setSelectedClasses}
/>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="font-semibold block mb-1" htmlFor="period">
            <span className="text-red-600">*</span> Period:
          </label>
          <select
            id="period"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
          >
            <option value="">Select period</option>
            {periodOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="font-semibold block mb-1" htmlFor="amount">
            <span className="text-red-600">*</span> Amount:
          </label>
          <input
            id="amount"
            type="number"
            min="0"
            step="any"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Row 3 - Checkboxes */}
      <div className="space-y-4">
        <div className="flex items-center">
          <input
            id="autoInvoice"
            type="checkbox"
            checked={activeOnAdmission}
            onChange={() => setActiveOnAdmission(!activeOnAdmission)}
            className="form-checkbox h-4 w-4 text-blue-600"
          />
          <label htmlFor="autoInvoice" className="ml-3 font-semibold text-gray-700">
            Auto Generate Invoice On Admission
          </label>
        </div>

        <div>
          <div className="flex items-center">
            <input
              id="dashboardDisable"
              type="checkbox"
              checked={activeOnDashboard}
              onChange={() => setActiveOnDashboard(!activeOnDashboard)}
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            <label htmlFor="dashboardDisable" className="ml-3 font-semibold text-gray-700">
              Dashboard Disable?
            </label>
          </div>
          <p className="ml-7 text-sm text-red-600">
            If Enabled: User Can Not Access Dashboard Until Fee is Paid Fully.
          </p>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-center">
     <button  onClick={handleAddFeeType}  className='px-4 py-2 rounded-xl bg-[rgb(1,1,93)] text-white'>Add Fee Type</button>
       </div>
       </div>
    </AdminLayout>
  )
}

export default AdminAddFeeType
