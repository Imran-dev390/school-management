// import React, { useContext, useState } from 'react';
// import axios from 'axios';
// import { authDataContext } from '../Context-Api/AuthContext';
// import { userDataContext } from '../Context-Api/UserContext';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import { adminDataContext } from '../Context-Api/AdminContext';
// function Login() {
//   const [form, setForm] = useState({
//     email: '',
//     password: '',
//     role: '',
//   });
//   const [error,setError] = useState(null);
//    const [loading,setLoading] = useState(false);
//   const {serverUrl} = useContext(authDataContext);
//   const {userData,setUserData} = useContext(userDataContext);
//   const {fetchAdminData} = useContext(adminDataContext);
//   const {getCurrentUser}  = useContext(userDataContext);
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };
// const navigate = useNavigate();

// //const notify = () => toast();
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const response = await axios.post(serverUrl+'/api/auth/signin',{
//        email:form.email,
//        password:form.password,
//       },{withCredentials:true});
//     //  console.log(response.data);
//       setUserData(response.data);
//       await getCurrentUser();
//       await fetchAdminData(); 
//       setLoading(false);
//       toast.success("Logged in Succussfull");
//      navigate("/");
//     } catch (err) {
//      setLoading(false);
//    // setError(err?.response?.data.message);
//     let message = err.response?.data?.message || "Login Failed";
//     toast.error(message);
//      //   console.log(err);
//       //alert(err.response?.data?.message || 'Signup failed');
//     }
//   };

//   return (
//     <div className="min-h-screen  bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center ">
//        <div
//         className="absolute inset-0 bg-cover bg-center opacity-70 z-0"
//         style={{
//           backgroundImage: `url('https://static.vecteezy.com/system/resources/thumbnails/000/448/394/small_2x/63q3_ug56_180116.jpg')` 
//           // Replace with your AI image
//         }}
//       ></div>
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white z-10  px-3 relative shadow-lg p-2 max-w-md w-full space-y-3  rounded-xl"
//       >
//         <h2 className="text-3xl  font-bold text-center text-purple-700">Sign In</h2>


//         <div className="space-y-1">
//           <label className="block text-sm font-medium text-gray-700">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             required
//             className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
//             placeholder="Enter your email"
//           />
//         </div>

//         <div className="space-y-2">
//           <label className="block text-sm font-medium text-gray-700">Password</label>
//           <input
//             type="password"
//             name="password"
//             value={form.password}
//             onChange={handleChange}
//             required
//             className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
//             placeholder="Create a password"
//           />
//         </div>
//         {/* <div className="space-y-1">
//           <label className="block text-sm font-medium text-gray-700">Role</label>
//           <select
//             name="role"
//             value={form.role}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
//           >
//             <option value="Student">Student</option>
//             <option value="Teacher">Teacher</option>
//           </select>
//         </div> */}
// {error && <p className='text-red-500 text-center'>{error}</p>}
//         <button
//           type="submit"
//           className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
//         >
//         {loading ? "Loading...":"Sign In"}
//         </button>
//         <p className="text-center cursor-pointer text-sm text-gray-600" onClick={()=>navigate("/register")}>      
//           Dont have an account? <span className="text-purple-600 font-medium">Register</span>
//         </p>
//       </form>
//        <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} theme="colored" />
//     </div>
//   );
// }
// export default Login;
















































































// import React, { useContext, useState } from 'react';
// import axios from 'axios';
// import { authDataContext } from '../Context-Api/AuthContext';
// import { userDataContext } from '../Context-Api/UserContext';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import { adminDataContext } from '../Context-Api/AdminContext';
// import { FaUserShield, FaUserTie, FaChalkboardTeacher, FaUserGraduate } from 'react-icons/fa'; // Importing icons

// function Login() {
//   const [form, setForm] = useState({ email: '', password: '', role: '' });
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const { serverUrl } = useContext(authDataContext);
//   const { userData, setUserData } = useContext(userDataContext);
//   const { fetchAdminData } = useContext(adminDataContext);
//   const { getCurrentUser } = useContext(userDataContext);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const response = await axios.post(serverUrl + '/api/auth/signin', {
//         email: form.email,
//         password: form.password,
//       }, { withCredentials: true });

//       setUserData(response.data);
//       await getCurrentUser();
//       await fetchAdminData();
//       setLoading(false);
//       toast.success("Logged in Successfully");
//       navigate("/");
//     } catch (err) {
//       setLoading(false);
//       let message = err.response?.data?.message || "Login Failed";
//       toast.error(message);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-purple-500 flex flex-col items-center justify-center px-4">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white z-10 px-4 py-6 shadow-xl w-full max-w-md space-y-4 rounded-lg"
//       >
//         <h2 className="text-3xl font-bold text-center text-purple-700">Sign In</h2>

//         <div className="space-y-1">
//           <label className="block text-sm font-medium text-gray-700">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             required
//             className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
//             placeholder="Enter your email"
//           />
//         </div>

//         <div className="space-y-1">
//           <label className="block text-sm font-medium text-gray-700">Password</label>
//           <input
//             type="password"
//             name="password"
//             value={form.password}
//             onChange={handleChange}
//             required
//             className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
//             placeholder="Enter your password"
//           />
//         </div>

//         {error && <p className='text-red-500 text-center'>{error}</p>}

//         <button
//           type="submit"
//           className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
//         >
//           {loading ? "Loading..." : "Sign In"}
//         </button>

//         <p className="text-center text-sm text-gray-600 cursor-pointer" onClick={() => navigate("/register")}>
//           Don't have an account? <span className="text-purple-600 font-medium">Register</span>
//         </p>
//       </form>

//       {/* Cards Section */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 w-full max-w-4xl">
//         {[
//           { label: "Admin", icon: <FaUserShield size={30} />, color: "bg-red-100" },
//           { label: "Accountant", icon: <FaUserTie size={30} />, color: "bg-yellow-100" },
//           { label: "Teacher", icon: <FaChalkboardTeacher size={30} />, color: "bg-green-100" },
//           { label: "Student", icon: <FaUserGraduate size={30} />, color: "bg-blue-100" },
//         ].map(({ label, icon, color }) => (
//           <div key={label} className={`flex flex-col items-center p-4 rounded-lg shadow-md ${color}`}>
//             <div className="text-purple-700">{icon}</div>
//             <span className="mt-2 text-sm font-medium text-gray-700">{label}</span>
//           </div>
//         ))}
//       </div>

//       <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} theme="colored" />
//     </div>
//   );
// }

// export default Login;





















































































// import React, { useContext, useState } from 'react';
// import axios from 'axios';
// import { authDataContext } from '../Context-Api/AuthContext';
// import { userDataContext } from '../Context-Api/UserContext';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import { adminDataContext } from '../Context-Api/AdminContext';
// import {
//   FaUserShield,
//   FaUserTie,
//   FaChalkboardTeacher,
//   FaUserGraduate,
//   FaEye,
//   FaEyeSlash,
// } from 'react-icons/fa';

// function Login() {
//   const logoImg = "logo.jpg";
//   const [form, setForm] = useState({ email: '', password: '' });
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const { serverUrl } = useContext(authDataContext);
//   const { setUserData, getCurrentUser } = useContext(userDataContext);
//   const { fetchAdminData } = useContext(adminDataContext);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const response = await axios.post(
//         `${serverUrl}/api/auth/signin`,
//         {
//           email: form.email,
//           password: form.password,
//         },
//         { withCredentials: true }
//       );

//       setUserData(response.data);
//       await getCurrentUser();
//       await fetchAdminData();
//       toast.success('Logged in Successfully');
//       navigate('/');
//     } catch (err) {
//       const message = err.response?.data?.message || 'Login Failed';
//       toast.error(message);
//       setError(message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br  flex-col from-purple-300 via-purple-500 to-indigo-600 flex items-center justify-center p-4">
//        <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-6 relative z-10">
       
//  <img src={logoImg} alt="" className='w-48 h-48 object-contain'/>       
//         <h2 className="text-3xl font-bold text-center text-purple-700 mb-4">Welcome Back for Login</h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               required
//               className="w-full mt-1 border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
//               placeholder="you@example.com"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Password</label>
//             <div className="relative">
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 name="password"
//                 value={form.password}
//                 onChange={handleChange}
//                 required
//                 className="w-full mt-1 border border-gray-300 rounded-md px-4 py-2 pr-10 focus:ring-2 focus:ring-purple-400 focus:outline-none"
//                 placeholder="Enter your password"
//               />
//               <span
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-3 text-gray-500 cursor-pointer"
//               >
//                 {showPassword ? <FaEyeSlash /> : <FaEye />}
//               </span>
//             </div>
//           </div>

//           {error && <p className="text-sm text-red-500 text-center">{error}</p>}

//           <button
//             type="submit"
//             className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
//           >
//             {loading ? 'Signing in...' : 'Sign In'}
//           </button>

//            <p
//             className="text-center text-sm text-gray-600 cursor-pointer"
//             onClick={() => navigate('/register')}
//           >
//             Don’t have an account?{' '}
//             <span className="text-purple-600 font-medium">Register</span>
//           </p> 
//         </form> 
//       </div> 












































//       {/* Cards Section */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 w-full max-w-4xl z-10">
//         {[
//           { label: 'Admin', icon: <FaUserShield size={28} />, color: 'bg-red-100' },
//           { label: 'Accountant', icon: <FaUserTie size={28} />, color: 'bg-yellow-100' },
//           { label: 'Teacher', icon: <FaChalkboardTeacher size={28} />, color: 'bg-green-100' },
//           { label: 'Student', icon: <FaUserGraduate size={28} />, color: 'bg-blue-100' },
//         ].map(({ label, icon, color }) => (
//           <div
//             key={label}
//             className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-md ${color}`}
//           >
//             <div className="text-purple-700">{icon}</div>
//             <span className="mt-2 text-sm font-medium text-gray-800">{label}</span>
//           </div>
//         ))}
//       </div>

//       <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} theme="colored" />
//     </div>
//   );
// }

// export default Login;

























































































 {/* <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-6 relative z-10">
       
       
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-4">Welcome Back for Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full mt-1 border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full mt-1 border border-gray-300 rounded-md px-4 py-2 pr-10 focus:ring-2 focus:ring-purple-400 focus:outline-none"
                placeholder="Enter your password"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500 cursor-pointer"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          {error && <p className="text-sm text-red-500 text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>

          {/* <p
            className="text-center text-sm text-gray-600 cursor-pointer"
            onClick={() => navigate('/register')}
          >
            Don’t have an account?{' '}
            <span className="text-purple-600 font-medium">Register</span>
          </p> */}
       {/* </form> */}
     {/* </div> */}





























































     import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaUserShield, FaUserTie, FaChalkboardTeacher, FaUserGraduate } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import { FiPhone } from "react-icons/fi";

import 'react-toastify/dist/ReactToastify.css';
import { authDataContext } from '../Context-Api/AuthContext';
import { userDataContext } from '../Context-Api/UserContext';
import { adminDataContext } from '../Context-Api/AdminContext';
//import { authDataContext, userDataContext, adminDataContext } from '../context'; // update path accordingly
function Login() {
  const logoImg = "logo.jpg";
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { serverUrl } = useContext(authDataContext);
  const { setUserData, getCurrentUser } = useContext(userDataContext);
  const { fetchAdminData } = useContext(adminDataContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `${serverUrl}/api/auth/signin`,
        {
          email: form.email,
          password: form.password,
        },
        { withCredentials: true }
      );
      setUserData(response.data);
      await getCurrentUser();
      await fetchAdminData();
      toast.success('Logged in Successfully');
      navigate('/');
    } catch (err) {
      const message = err.response?.data?.message || 'Login Failed';
      toast.error(message);
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
//     <div className="relative min-h-screen bg-gradient-to-br from-slate-100 via-purple-100 to-slate-200 flex flex-col lg:flex-row">

// {/* <div className="min-h-screen bg-gradient-to-br from-slate-100 via-purple-100 to-slate-200  flex flex-col  lg:flex-row "> */}

//   {/* Left Image - Visible only on desktop */}
//   {/* <div className="hidden md:flex md:w-1/2 h-screen">
//     <img
//       src="https://static.vecteezy.com/system/resources/thumbnails/000/448/394/small_2x/63q3_ug56_180116.jpg"
//       alt="Login Visual"
//       className="w-full h-full object-cover"
//     />
//   </div> */}

//   {/* <div className="hidden lg:flex lg:w-1/2 min-h-screen ">
//   <img
//     src="https://static.vecteezy.com/system/resources/thumbnails/000/448/394/small_2x/63q3_ug56_180116.jpg"
//     alt="Login Visual"
//     className="w-full h-full object-cover"
//   />
// </div> */}
// {/* Background image for small devices */}
// <div className="absolute inset-0 lg:hidden opacity-20">
//   <img
//     src="https://static.vecteezy.com/system/resources/thumbnails/000/448/394/small_2x/63q3_ug56_180116.jpg"
//     alt="Background Visual"
//     className="w-full h-full object-cover"
//   />
// </div>



//   {/* Right Side - Login Form */}
//   {/* <div className="flex w-full  items-center justify-center bg-white  border-zinc-300 border-[1px]    p-8 lg:w-1/2"> */}
//   {/* <div className="flex w-full items-center justify-center bg-white border border-zinc-300 p-4 sm:p-6 lg:p-8 lg:border-none lg:w-1/2"> */}
 
 
 
 
 
 
 
 
 
// <div className="flex w-full items-center justify-center bg-white  p-4 sm:p-6 lg:p-8 lg:w-1/2">
 
//  {/* <div className="flex w-full items-center justify-center bg-white border border-transparent md:border md:border-zinc-600 lg:border lg:border-transparent p-4 sm:p-6 lg:p-8 lg:w-1/2"> */}

//  {/* <div className="flex w-full items-center justify-center bg-white border-none md:border md:border-zinc-600 lg:border-none p-4 sm:p-6 lg:p-8 lg:w-1/2"> */}

 
//     <div className="w-full max-w-md space-y-6 "> 
//       {/* Logo + Heading */}
//       <div className="text-center space-y-2">
//         <img src={logoImg} alt="Logo" className="w-96 mx-auto h-24  object-cover" />
//         <h2 className="text-2xl font-bold text-indigo-700">The School Digital Partner</h2>
//         <p>Please login on the ultimate School ERP System</p>
//       </div>

//       {/* Form */}
//       <form onSubmit={handleSubmit} className="space-y-5">
//         {/* Email Field */}
//         <div>
//           <label className="block text-sm font-semibold text-gray-700">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             required
//             className="w-full mt-1 px-2 bg-slate-300 py-3 border rounded-full shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
//             placeholder="Enter your email"
//           />
//         </div>

//         {/* Password Field */}
//         <div>
//           <label className="block text-sm font-semibold text-gray-700">Password</label>
//           <div className="relative">
//             <input
//               type={showPassword ? 'text' : 'password'}
//               name="password"
//               value={form.password}
//               onChange={handleChange}
//               required
//               className="w-full mt-1 px-2 py-3 border rounded-full bg-slate-300 shadow-sm pr-10 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
//               placeholder="Enter your password"
//             />
//             <span
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 cursor-pointer"
//             >
//               {showPassword ? <FaEyeSlash /> : <FaEye />}
//             </span>
//           </div>
//         </div>

//         {/* Error Message */}
//         {error && <p className="text-sm text-red-500 text-center">{error}</p>}

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg transition duration-200"
//           disabled={loading}
//         >
//           {loading ? 'Signing in...' : 'Sign In'}
//         </button>
//       </form>

//       {/* Contact Info */}
//       <div className="text-center text-md space-y-1">
//   <p className="font-semibold flex items-center justify-center gap-2">
//     CS Help: <FiPhone className="text-indigo-600" /> <span className="font-bold">04440-232323</span>
//   </p>
//   <p className="font-semibold flex items-center justify-center gap-2">
//     Sale: <FiPhone className="text-green-600" /> <span className="font-bold">03243-243334</span>
//   </p>
// </div>


//       {/* Role Cards */}
//       <div className="grid grid-cols-2 gap-4 mt-6">
//         {[
//           { label: 'Admin', icon: <FaUserShield size={28} />, color: 'bg-red-100' },
//           { label: 'Accountant', icon: <FaUserTie size={28} />, color: 'bg-yellow-100' },
//           { label: 'Teacher', icon: <FaChalkboardTeacher size={28} />, color: 'bg-green-100' },
//           { label: 'Student', icon: <FaUserGraduate size={28} />, color: 'bg-blue-100' },
//         ].map(({ label, icon, color }) => (
//           <div
//             key={label}
//             className={`flex flex-col items-center justify-center p-4 rounded-xl shadow-md ${color}`}
//           >
//             <div className="text-indigo-700">{icon}</div>
//             <span className="mt-2 text-sm font-medium text-gray-800">{label}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>

//   {/* Toast */}
//   <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} theme="colored" />
// </div>












<div className="relative min-h-screen bg-gradient-to-br  sm:bg-slate-300 from-slate-100 via-purple-100 to-slate-200 flex flex-col lg:flex-row">

  {/* Left Image - visible only on desktop (lg and up) */}
  <div className="hidden lg:flex lg:w-1/2 min-h-screen">
    <img
      src="https://static.vecteezy.com/system/resources/thumbnails/000/448/394/small_2x/63q3_ug56_180116.jpg"
      alt="Login Visual"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Background image for smaller screens - behind content */}
  <div className="absolute inset-0 lg:hidden opacity-20 pointer-events-none z-0">
    <img
      src="https://static.vecteezy.com/system/resources/thumbnails/000/448/394/small_2x/63q3_ug56_180116.jpg"
      alt="Background Visual"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Right Side - Login Form */}
  <div className="flex w-full items-center justify-center sm:shadow-xl lg:shadow-none bg-white p-4 sm:p-6 lg:p-8 lg:w-1/2 relative z-10">

  {/* <div className="flex w-full items-center justify-center sm:shadow-xl bg-white p-4 sm:p-6 lg:p-8 lg:w-1/2 relative z-10"> */}

    <div className="w-full max-w-md space-y-6 shadow-xl p-8 lg:shadow-none ">
      {/* Logo + Heading */}
      <div className="text-center space-y-0">
        <img src={logoImg} alt="Logo" className="w-96 sm:w-full mx-auto h-24 object-cover" />
        <h2 className="text-lg md:text-2xl lg:text-2xl font-bold text-black">Smarter Today, Brighter Tommorow</h2>
        <p className=' sm:mt-3 inline-block  md:text-lg lg:text-lg'>Please login on the ultimate School ERP System</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email Field */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full mt-1 px-2 bg-slate-300 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            placeholder="Enter your email"
          />
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full mt-1 px-2 py-3 border rounded-xl bg-slate-300 shadow-sm pr-10 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="Enter your password"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        {/* Error Message */}
        {error && <p className="text-sm text-red-500 text-center">{error}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[rgb(1,1,57)] hover:bg-yellow-500 text-white font-medium py-2 rounded-lg transition duration-200"
          disabled={loading}
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>

      {/* Contact Info */}
      <div className="text-center text-md space-y-1">
        <p className="font-semibold flex items-center justify-center gap-2">
          CS Help: <FiPhone className="text-indigo-600" /> <span className="font-bold">0326-8808826</span>
        </p>
        <p className="font-semibold flex items-center justify-center gap-2">
          Sale: <FiPhone className="text-green-600" /> <span className="font-bold">0326-8808826</span>
        </p>
      </div>
      {/* Role Cards */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        {[
          { label: 'Admin', icon: <FaUserShield size={28} />, color: 'bg-red-100' },
          { label: 'Accountant', icon: <FaUserTie size={28} />, color: 'bg-yellow-100' },
          { label: 'Teacher', icon: <FaChalkboardTeacher size={28} />, color: 'bg-green-100' },
          { label: 'Student', icon: <FaUserGraduate size={28} />, color: 'bg-blue-100' },
        ].map(({ label, icon, color }) => (
          <div
            key={label}
            className={`flex flex-col items-center justify-center p-4 rounded-xl shadow-md ${color}`}
          >
            <div className="text-indigo-700">{icon}</div>
            <span className="mt-2 text-sm font-medium text-gray-800">{label}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
  {/* Toast */}
  <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} theme="colored" />

</div>

  );
}

export default Login;
