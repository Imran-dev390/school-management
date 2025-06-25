import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { authDataContext } from '../Context-Api/AuthContext';
import { Sidebar } from './Sidebar';
import { useNavigate } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { FaUserCircle } from 'react-icons/fa';
import { adminDataContext } from '../Context-Api/AdminContext';
const AddStaff = () => {
    const navigate = useNavigate();
    const {serverUrl }  = useContext(authDataContext);
     const { adminData } = useContext(adminDataContext);
       const { fetchAdminData } = useContext(adminDataContext);
    const [formData, setFormData] = useState({
    name: '',
    role: '',
    email: '',
    password: '',
    phone: '',
    address:"",
    sessionId:"",
    profileImage: "",
  });
  useEffect(() => {
    fetchAdminData().finally(() => setIsLoading(false));
  }, [fetchAdminData]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };


  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, profileImage: e.target.files[0] }));
  };

 
  /*const handleSubmit = async (e) => {
    e.preventDefault();

    
    // Only include login fields if role is Accountant
    if (formData.role === 'Accountant') {
      data.append('email', formData.email);
      data.append('password', formData.password);
    }
    try {
      const api = await axios.post(`${serverUrl}/admin/Add/staff`,{
       name:formData.name,
       role: formData.role,
       email: formData.email,
       password: formData.password,
       phone: formData.phone,
       profileImage: formData.profileImage,       
      },{withCredentials:true});
      if(api.status === 201){
        navigate("/admin/dash")
      }
    } catch (err) {
      console.error(err);
      alert('Error adding staff.');
    }
  };*/

const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData();
  data.append('name', formData.name);
  data.append('role', formData.role);
  data.append('phone', formData.phone);
  data.append('address', formData.address);
  
  if (formData.role === 'Accountant') {
    data.append('email', formData.email);
    data.append('password', formData.password);
  }

  if (formData.profileImage) {
    data.append('profileImage', formData.profileImage);
  }

  try {
    const api = await axios.post(
      `${serverUrl}/api/admin/Add/staff`,
      data,
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    if (api.status === 201) {
      alert(`registered Successfully...`)
      navigate("/admin/dash");
    }
  } catch (err) {
    console.error(err);
    alert('Error adding staff.');
  }
};


  return (
    <AdminLayout adminName='Bright Future'>
      <div className="w-full  mt-20 sm:mt-8 sm:mx-auto max-w-xl bg-white text-[rgb(1,1,93)]   rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Add Staff</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-0">
        {/* Profile Image*/}
        <div className="sm:col-span-2 flex flex-col items-center mt-2">
        <label htmlFor="profileImage" className="cursor-pointer relative group">
          {formData.profileImage ? (
            <img src={URL.createObjectURL(formData.profileImage)} alt="Profile" className="w-24 h-24 rounded-full object-cover border-2 border-green-500" />
          ) : (
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center border-2 border-gray-300 hover:border-green-500">
              <FaUserCircle className="text-4xl text-[rgb(1,1,93)] group-hover:text-[rgb(193,151,5)]" />
            </div>
          )}
          <input type="file" id="profileImage" name="profileImage" accept="image/*" onChange={handleFileChange} required className="hidden" />
        </label>
        <p className="text-xs text-[rgb(1,1,93)] mt-2">Profile Image</p>
      </div>
        {/* profile Image */}
          <div>
            <label className="block font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Role</label>
            <select
              name="role"
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="">-- Select Role --</option>
              <option value="Accountant">Accountant</option>
              <option value="Guard">Guard</option>
              <option value="Sweeper">Sweeper</option>
              <option value="Peon">Peon</option>
              <option value="Librarian">Librarian</option>
            </select>
          </div>

          {formData.role === 'Accountant' && (
            <>
              <div>
                <label className="block font-semibold mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full border px-4 py-2 rounded focus:outline-none focus:ring"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  className="w-full border px-4 py-2 rounded focus:outline-none focus:ring"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}

          <div>
            <label className="block font-semibold mb-1">Phone</label>
            <input
              type="text"
              name="phone"
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
           <div>
            <label className="block font-semibold mb-1">Address</label>
            <input
              type="text"
              name="address"
              className="w-full block border px-4 py-2 rounded focus:outline-none focus:ring"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
       {/* Profile Image*/}
          {/* <div>
            <label className="block font-semibold mb-1">Profile Image</label>
            <input
              type="file"
              name="profileImage"
              accept="image/*"
              className="w-full border px-4 py-2 rounded"
              onChange={handleFileChange}
            />
          </div> */}

 <div className="mt-8 mb-4">
  <select
    name="sessionId"
    value={formData.sessionId}
    onChange={handleChange}
    required
    className="w-full block border px-4 py-2 text-[rgb(1,1,93)] rounded focus:outline-none focus:ring"
  >
    <option value="" disabled>Select Session</option>
    {adminData?.admin?.sessions?.map((session) => (
      <option key={session._id} value={session._id}>
  {session.name} (
    {new Date(session.startDate).toLocaleDateString('en-GB', { timeZone: 'UTC' })} - 
    {new Date(session.endDate).toLocaleDateString('en-GB', { timeZone: 'UTC' })}
  )
</option>
    ))}
  </select>
</div>


{/* Profile Image*/}
          <button
            type="submit"
            className="w-full mt-[32px] bg-[rgb(193,151,5)] text-white py-3 rounded font-semibold  transition"
          >
            Add Staff
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AddStaff;
