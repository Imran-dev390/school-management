import axios from 'axios';
import React, { useContext, useState } from 'react';
import { authDataContext } from '../Context-Api/AuthContext';
import { useNavigate } from 'react-router-dom';
import { ToastContainer ,toast } from 'react-toastify';
import { adminDataContext } from '../Context-Api/AdminContext';

const ClassRegistrationForm = ({recentActivity,setRecentAcitviy}) => {
    const navigate  = useNavigate();
    const { fetchAdminData } = useContext(adminDataContext);
   const {serverUrl} =  useContext(authDataContext);
  const [formData, setFormData] = useState({
    name: '',
    year: '',
    section: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
  try {  
    const api = await axios.post(serverUrl+"/api/admin/Add/Class",{
        name:formData.name,
        year:formData.year,
        section:formData.section,
    },{withCredentials:true});
   // console.log("api",api);
    toast.success("Successfully Created Class ...")
    await fetchAdminData();
    setRecentAcitviy(prev => ({
      ...prev,
     classesCreated:"class created succussfully"
    }));
    navigate("/admin/dash");
   // console.log('Form submitted:', formData);
} catch(err){
    toast.error(err?.response?.data.message);
   // console.log(err);
}
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Class Registration</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="year" className="block text-sm font-medium text-gray-600">Year</label>
            <input
              type="number"
              id="year"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="section" className="block text-sm font-medium text-gray-600">Section</label>
            <input
              type="text"
              id="section"
              name="section"
              value={formData.section}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Register Class
          </button>
        </form>
          <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} theme="colored" />
      </div>
    </div>
  );
};

export default ClassRegistrationForm;
