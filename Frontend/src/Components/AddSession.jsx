import React, { useContext, useState } from 'react';
import { authDataContext } from '../Context-Api/AuthContext';
import { adminDataContext } from '../Context-Api/AdminContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Sidebar } from './Sidebar';
const AddSession = ({recentActivity,setRecentActivity}) => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    startDate: '',
    endDate: ''
  });
const {serverUrl} = useContext(authDataContext);
const {fetchAdminData} = useContext(adminDataContext);
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const api = await axios.post(
        serverUrl + "/api/admin/Add/session",
        {
          name: formData.name,
          startDate: formData.startDate,
          endDate: formData.endDate,
        },
        { withCredentials: true }
      );
  
      if (api.status === 200 || api.status === 201) {
    //    console.log("Session created:", api.data);
        setRecentActivity(prev => ({
          ...prev,
          SessionStarted: "Session Added Successfully"
        }));
        
        // Navigate immediately
        navigate("/admin/dash");
  
        // Optionally fetch admin data in the background
        fetchAdminData();
      } else {
       // console.error("Unexpected response:", api);
      }
    } catch (error) {
     // console.log("Backend error:", error?.response?.data?.message);
    }
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex items-center justify-center px-4">
     <Sidebar/>
      <div className="bg-white shadow-2xl rounded-xl w-full max-w-2xl p-8">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          Create New Session
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Session Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="e.g. 2024–2025"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">
                End Date
              </label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg transition duration-300"
          >
            Add Session
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSession;
