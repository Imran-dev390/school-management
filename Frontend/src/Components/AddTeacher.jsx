import React, { useContext, useEffect, useState } from 'react';
import { userDataContext } from '../Context-Api/UserContext';
import { authDataContext } from '../Context-Api/AuthContext';
import axios from 'axios';
import { ToastContainer ,toast} from 'react-toastify';
import { data, useNavigate } from 'react-router-dom';
import { adminDataContext } from '../Context-Api/AdminContext';

export default function AddTeacher() {
  const {serverUrl} = useContext(authDataContext);
  const { fetchAdminData } = useContext(adminDataContext);
  const {adminData} = useContext(adminDataContext);
  const {subjects = []} = adminData?.admin;
  const {classes = []} = adminData?.admin;
console.log("subjexts",subjects)
  const [subject,setSubjets] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    phone: '',
    dob: '',
    salary: '',
    password: '',
    qualifications:"",
    assignedClass:"",
    teachSubject:"",
  });
  useEffect(() => {
    fetchAdminData();
  }, []);
  
  // Then when adminData updates, set subjects
  useEffect(() => {
    if (adminData?.admin?.subjects?.length > 0) {
      setSubjets(adminData.admin.subjects);
    }
  }, [adminData]);
  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call your API here (axios.post etc.)
    try{
      let result = await axios.post(serverUrl+"/admin/Add/Teacher",{
      name:formData.name,
      email: formData.email,
      gender: formData.gender,
      phone: formData.phone,
      dob: formData.dob,
      salary: formData.salary,
      assignedClass:formData.assignedClass,
      password: formData.password,
      qualifications:formData.qualifications,
      teachSubject:formData.teachSubject,
    },{withCredentials:true});
      // setUserData(result.data);
    console.log("form Data",formData);
    console.log("Result",result);
    toast.success("Teacher Succesfully Registered");

   await  fetchAdminData();
    navigate("/admin/dash");
    }catch(err){
      toast.error(err?.response?.data.message);
      console.log(err);
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-xl transform transition-all duration-500 hover:scale-[1.02]">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">Add New Teacher 👩‍🏫</h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Floating Inputs */}
            {[
              { name: 'name', label: 'Full Name', type: 'text' },
              { name: 'email', label: 'Email', type: 'email' },
              { name: 'phone', label: 'Phone Number', type: 'tel' },
              { name: 'dob', label: 'Date of Birth', type: 'date' },
              { name:"qualifications",label:"Qualification",type:"text"},
              { name: 'salary', label: 'Salary', type: 'number' },
              { name: 'password', label: 'Password', type: 'password' },
              // { name: 'teachSubject', label: 'TeachSubject', type: 'text' },
              // { name: 'assignedClass', label: 'AssignedClass', type: 'text' }
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

{/* assigned Class */}

<div className="relative">
              <select
                name="assignedClass"
                value={formData.assignedClass}
                onChange={handleChange}
                required
                className="w-full p-3 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              >
                <option value="" disabled>Select Assigned Class</option>
               {classes.map((item)=>{
               return ( 
               <option key={item._id} value={item._id}>
                  {item.name} {item.section}
                  </option>               
          )
})}
              </select>
              <label className="absolute left-3 -top-2 text-sm text-blue-500 bg-white px-1">Class</label>
            </div>

        {/* TeachSubjects  */}

        <div className="relative">
              <select
                name="teachSubject"
                value={formData.teachSubject}
                onChange={handleChange}
                required
                className="w-full p-3 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              >
                <option value="" disabled>Select Subject</option>
               {subject.map((item)=>{
               return ( 
               <option key={item._id} value={item._id}>
                  {item.name}
                  </option>               
          )
})}
              </select>
              <label className="absolute left-3 -top-2 text-sm text-blue-500 bg-white px-1">Subject</label>
            </div>
            {/* Gender Dropdown */}
            <div className="relative">
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

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 mt-4 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              ➕ Add Teacher
            </button>
          </form>

          <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} theme="colored" />
      </div>
    </div>
  );
}
