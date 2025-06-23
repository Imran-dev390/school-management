import React, { useContext, useEffect, useState } from 'react';
import { authDataContext } from '../Context-Api/AuthContext';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { adminDataContext } from '../Context-Api/AdminContext';
import { Sidebar } from './Sidebar';
import { FaBars, FaCircle, FaUserCircle } from 'react-icons/fa';
import AdminLayout from './AdminLayout';
//FaBars
//FaCircle
//FaUserCircle
export default function AddTeacher() {
  const { serverUrl } = useContext(authDataContext);
  const { fetchAdminData } = useContext(adminDataContext);
  const { adminData } = useContext(adminDataContext);
  const subjects = adminData?.admin?.subjects || [];
  const classes = adminData?.admin?.classes || [];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    phone: '',
    dob: '',
    salary: '',
    password: '',
    qualifications: '',
    assignedClass: '',
    teachSubject: '',
    incharge: false, // ✅ NEW
  });
  const [isSidebarOpen,setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAdminData().finally(() => setIsLoading(false));
  }, [fetchAdminData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let result = await axios.post(
        `${serverUrl}/api/admin/Add/Teacher`,
        {
          ...formData,
        },
        { withCredentials: true }
      );

      toast.success('Teacher Successfully Registered');
      await fetchAdminData();
      navigate('/admin/dash');
    } catch (err) {
      toast.error(err?.response?.data?.message || 'Error registering teacher');
      console.error(err);
    }
  };

  if (isLoading) return <div>Loading admin data...</div>;

  return (
   <AdminLayout>

      {/* <div className="bg-white rounded-2xl shadow-2xl mt-32 sm:mt-8 p-8 w-full max-w-xl transform transition-all duration-500 hover:scale-[1.02]">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">Add New Teacher 👩‍🏫</h2>

        {/* <form className="space-y-5" onSubmit={handleSubmit}>
          {[
            { name: 'name', label: 'Full Name', type: 'text' },
            { name: 'email', label: 'Email', type: 'email' },
            { name: 'phone', label: 'Phone Number', type: 'tel' },
            { name: 'dob', label: 'Date of Birth', type: 'date' },
            { name: 'qualifications', label: 'Qualification', type: 'text' },
            { name: 'salary', label: 'Salary', type: 'number' },
            { name: 'password', label: 'Password', type: 'password' },
          ].map(({ name, label, type }) => (
            <div key={name} className="relative">
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required
                className="peer w-full p-3 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                placeholder=" "
              />
              <label
                htmlFor={name}
                className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-500"
              >
                {label}
              </label>
            </div>
          ))}

          {/* Assigned Class Dropdown */}
          {/* <div className="relative">
            <select
              name="assignedClass"
              value={formData.assignedClass}
              onChange={handleChange}
              required
              className="w-full p-3 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            >
              <option value="" disabled>
                Select Assigned Class
              </option>
              {classes.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.name} {item.section}
                </option>
              ))}
            </select>
            <label className="absolute left-3 -top-2 text-sm text-blue-500 bg-white px-1">Class</label>
          </div> */}

          {/* Teach Subject Dropdown */}
          {/* <div className="relative">
            <select
              name="teachSubject"
              value={formData.teachSubject}
              onChange={handleChange}
              required
              className="w-full p-3 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            >
              <option value="" disabled>
                Select Subject
              </option>
              {subjects.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.name}
                </option>
              ))}
            </select>
            <label className="absolute left-3 -top-2 text-sm text-blue-500 bg-white px-1">Subject</label>
          </div> */}

          {/* Gender Dropdown */}
          {/* <div className="relative">
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-full p-3 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <label className="absolute left-3 -top-2 text-sm text-blue-500 bg-white px-1">Gender</label>
          </div> */}

          {/* ✅ InCharge Checkbox */}
          {/* <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="incharge"
              name="incharge"
              checked={formData.incharge}
              onChange={handleChange}
              className="w-5 h-5"
            />
            <label htmlFor="inCharge" className="text-gray-700 font-medium">
              Is In-Charge of the Class?
            </label>
          </div> */}

          {/* Submit Button */}
          {/* <button
            type="submit"
            className="w-full py-3 mt-4 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            ➕ Add Teacher
          </button> */}
       
<div className="bg-white rounded-2xl shadow-2xl mt-32 sm:mt-8 mx-auto p-8 w-full max-w-xl transform transition-all duration-500 hover:scale-[1.02]">
  <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">Add New Teacher 👩‍🏫</h2>

  <form className="space-y-5" onSubmit={handleSubmit}>
    <div className="flex flex-wrap gap-5">
      {[
        { name: 'name', label: 'Full Name', type: 'text' },
        { name: 'email', label: 'Email', type: 'email' },
        { name: 'phone', label: 'Phone Number', type: 'tel' },
        { name: 'dob', label: 'Date of Birth', type: 'date' },
        { name: 'qualifications', label: 'Qualification', type: 'text' },
        { name: 'salary', label: 'Salary', type: 'number' },
        { name: 'password', label: 'Password', type: 'password' },
      ].map(({ name, label, type }) => (
        <div key={name} className="relative w-full sm:w-[48%]">
          <input
            type={type}
            name={name}
            value={formData[name]}
            onChange={handleChange}
            required
            className="peer w-full p-3 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder=" "
          />
          <label
            htmlFor={name}
            className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-500"
          >
            {label}
          </label>
        </div>
      ))}
      {/* Gender Dropdown */}
<div className="relative w-full sm:w-[48%]">
  <select
    name="gender"
    value={formData.gender}
    onChange={handleChange}
    required
    className="w-full p-3 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
  >
    <option value="" disabled>Select Gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
  </select>
  <label className="absolute left-3 -top-2 text-sm text-blue-500 bg-white px-1">Gender</label>
</div>

{/* Assigned Class Dropdown */}
<div className="relative w-full sm:w-[48%]">
  <select
    name="assignedClass"
    value={formData.assignedClass}
    onChange={handleChange}
    required
    className="w-full p-3 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
  >
    <option value="" disabled>Select Assigned Class</option>
    {classes.map((item) => (
      <option key={item._id} value={item._id}>
        {item.name} {item.section}
      </option>
    ))}
  </select>
  <label className="absolute left-3 -top-2 text-sm text-blue-500 bg-white px-1">Class</label>
</div>

{/* Teach Subject Dropdown */}
<div className="relative w-full sm:w-[48%]">
  <select
    name="teachSubject"
    value={formData.teachSubject}
    onChange={handleChange}
    required
    className="w-full p-3 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
  >
    <option value="" disabled>Select Subject</option>
    {subjects.map((item) => (
      <option key={item._id} value={item._id}>
        {item.name}
      </option>
    ))}
  </select>
  <label className="absolute left-3 -top-2 text-sm text-blue-500 bg-white px-1">Subject</label>
</div>
    </div>
{/* InCharge Checkbox */}
<div className="flex items-center space-x-3">
  <input
    type="checkbox"
    id="incharge"
    name="incharge"
    checked={formData.incharge}
    onChange={handleChange}
    className="w-5 h-5"
  />
  <label htmlFor="incharge" className="text-gray-700 font-medium">
    Is In-Charge of the Class?
  </label>
</div>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full py-3 mt-4 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
    >
      ➕ Add Teacher
    </button>
  </form>

  {/* Toast Notifications */}
  <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} theme="colored" />
</div>
     {/* </div> */}
    </AdminLayout>
  );
}






