// import React from 'react'
// import { useContext } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { userDataContext } from '../Context-Api/UserContext'
// import { useState } from 'react'
// import { useEffect } from 'react'
// import { authDataContext } from '../Context-Api/AuthContext'
// import axios from 'axios'
// const StudentSidebar = () => {
//   const {serverUrl} = useContext(authDataContext);
//   const {userData,setUserData} = useContext(userDataContext);
//   const [loading,setLoading] = useState(true);
//   const navigate = useNavigate();
//       const handleLogout = async () => {
//       try {
//         await axios.get(serverUrl + "/api/auth/signout", { withCredentials: true });
        
//         // Clear user data
//         setUserData(null);
    
//         // Optional: clear other global contexts if needed
//         // fetchAdminData(null); 
//         //toast.success("Logged out successfully");
//         navigate("/login");
//       } catch (err) {
//         console.error(err);
//         //toast.error("Logout failed");
//       }
//     };
//   useEffect(()=>{
// if(userData){
//   setLoading(false);
// }
//   },[userData])
// if(loading) return <p>Loading ...</p>
//   return (
//             <aside className="bg-[rgb(1,1,93)] shadow-md w-full md:w-64 p-5 space-y-4">
//               <div className="logoImg px-4 py-4 bg-white">
// <img src="/logo.jpg" alt="" className='w-full h-8 object-cover'/>
//               </div>
//               <ul className="space-y-2 flex flex-col  text-white font-medium">
//                 <li className="hover:text-black"><a href="#">Dashboard</a></li>
//                 <li className="hover:text-black"><a href="#">Assignments</a></li>
//                 <li className="hover:text-black"><a href="#">Grades</a></li>
//                 <Link
//                       to={`/${userData.role}/${userData.name}/update/password`}
//                       className="text-sm lg:text-base font-medium block  hover:text-black"
//                     >
//                       Reset Password
//                     </Link>
//                 <Link to="/student/profile" className="">Profile </Link>
//                    <button
//   onClick={handleLogout}
//   className="text-red-700 cursor-pointer hover:text-black bg-transparent border-none p-0"
// >
//   Logout
// </button>
//               </ul>
//             </aside>
//   )
// }

// export default StudentSidebar




































 // Updated Code 
 import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userDataContext } from '../Context-Api/UserContext';
import { authDataContext } from '../Context-Api/AuthContext';
import axios from 'axios';
const StudentSidebar = () => {
  const { serverUrl } = useContext(authDataContext);
  const { userData, setUserData } = useContext(userDataContext);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false); // Sidebar toggle
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get(serverUrl + "/api/auth/signout", { withCredentials: true });
      setUserData(null);
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    if (userData) {
      setLoading(false);
    }
  }, [userData]);
  if (loading) return <p>Loading ...</p>;
  return (
    <div className="md:flex">
      {/* Hamburger button */}
      <button
        className="md:hidden p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle sidebar"
      >
        <svg
          className="w-6 h-6 text-blue-900"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:block bg-[rgb(1,1,93)] shadow-md w-full md:w-64 p-5 space-y-4 transition-all duration-300`}
      >
        <div className="logoImg px-4 py-4 bg-white">
          <img src="/logo.jpg" alt="Logo" className="w-full h-8 object-cover" />
        </div>
        <ul className="space-y-2 flex flex-col text-white font-medium">
          <li className="hover:text-black"><a href="#">Dashboard</a></li>
          <li className="hover:text-black"><a href="#">Assignments</a></li>
          <li className="hover:text-black"><a href="#">Grades</a></li>
          <Link
            to={`/${userData.role}/${userData.name}/update/password`}
            className="text-sm lg:text-base font-medium block hover:text-black"
          >
            Reset Password
          </Link>
          <Link to="/student/profile" className="hover:text-black">Profile</Link>
          <button
            onClick={handleLogout}
            className="text-red-700 cursor-pointer hover:text-black bg-transparent border-none p-0"
          >
            Logout
          </button>
        </ul>
      </aside>
    </div>
  );
};
export default StudentSidebar;
