// import React, { useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import {
//   FaTimes,
//   FaRegDotCircle,
// } from 'react-icons/fa';
// import { userDataContext } from '../Context-Api/UserContext';
// import axios from 'axios';
// import { authDataContext } from '../Context-Api/AuthContext';

// // export function Sidebar({ showSidebar, toggleSidebar }) {
// //    const logoImg = "/logo.jpg";
// //   const {userData,setUserData} = useContext(userDataContext);
// //   const {serverUrl} = useContext(authDataContext);
// //   const navigate = useNavigate();
// //       const handleLogout = async () => {
// //       try {
// //         await axios.get(serverUrl + "/api/auth/signout", { withCredentials: true });
// //         // Clear user data
// //         setUserData(null);
// //         // Optional: clear other global contexts if needed
// //         // fetchAdminData(null); 
// //         //toast.success("Logged out successfully");
// //         navigate("/login");
// //       } catch (err) {
// //         console.error(err);
// //         //toast.error("Logout failed");
// //       }
// //     };
// //   return (
// //     <div  className={`w-64 min-h-screen  bg-[rgb(1,1,93)] text-white fixed top-0 left-0 z-40 transform transition-transform duration-300 ${showSidebar ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
// //       {/* Close button on mobile */}
// //       <div className="md:hidden flex justify-end p-4">

// //       </div>
// //      {/* Logo with white background */}
// //   <div className="bg-white px-4 py-4">
// //     <img src={logoImg} alt="Logo" className="w-full h-8 object-cover" />
// //   </div>
// //       <div className="px-4 py-4">
// //         {/* Navigation */}
// //         <nav className="flex flex-col  space-y-4">
// //           <Link to="/admin/dash" className="active:bg-gray-700 p-2 rounded">Dashboard</Link>
// //           <Link to="/admin/students" className="active:bg-gray-700 p-2 rounded">Students</Link>
// //           <Link to="/admin/teachers" className="active:bg-gray-700 p-2 rounded">Teachers</Link>
// //           <Link to="/admin/classes" className="active:bg-gray-700 p-2 rounded">Classes</Link>
// //           <Link to="/admin/staff" className="active:bg-gray-700 p-2 rounded">Staff</Link>
// //           <button className="bg-red-500 p-2  rounded" onClick={handleLogout}>Logout</button>
// //         </nav>
// //         {/* Track Process Button */}
// //         <div className="mt-8">
// //           <button
// //             onClick={toggleSidebar}
// //             className="w-full flex items-center justify-center  bg-blue-600 active:bg-blue-700 p-2 rounded mt-4"
// //           >
// //             <FaRegDotCircle />
// //             <span>Track Process</span>
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
























































// import React, { useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { userDataContext } from '../Context-Api/UserContext';
// import { authDataContext } from '../Context-Api/AuthContext';
// import axios from 'axios';
// import { FaTimes, FaBars, FaRegDotCircle } from 'react-icons/fa';

// import React, { useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { userDataContext } from '../Context-Api/UserContext';
// import { authDataContext } from '../Context-Api/AuthContext';
// import axios from 'axios';
// import { FaTimes, FaBars, FaRegDotCircle } from 'react-icons/fa';





























































































// import React, { useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { userDataContext } from '../Context-Api/UserContext';
// // import axios from 'axios';
//  import { authDataContext } from '../Context-Api/AuthContext';
// import axios from 'axios';
// import { FaTimes, FaBars, FaRegDotCircle } from 'react-icons/fa';
// export function Sidebar({ showSidebar, toggleSidebar }) {
//   const logoImg = "/logo.jpg";
//   const { userData, setUserData } = useContext(userDataContext);
//   const { serverUrl } = useContext(authDataContext);
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await axios.get(serverUrl + "/api/auth/signout", { withCredentials: true });
//       setUserData(null);
//       navigate("/login");
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <>
//       {/* Overlay for mobile */}
//       {showSidebar && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
//           onClick={toggleSidebar}
//         ></div>
//       )}

//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 z-40 w-64 min-h-screen bg-[rgb(1,1,93)] text-white transform transition-transform duration-300 ${
//           showSidebar ? 'translate-x-0' : '-translate-x-full'
//         } md:translate-x-0`}
//       >
//         {/* Close Button (Mobile Only) */}
//         <div className="md:hidden flex justify-end p-4">
//           <button onClick={toggleSidebar} aria-label="Close Sidebar">
//             <FaTimes className="text-2xl" />
//           </button>
//         </div>

//         {/* Logo */}
//         <div className="px-4 py-4">
//           <img src={logoImg} alt="Logo" className="w-full h-10 object-cover bg-white p-1 rounded" />
//         </div>

//         {/* Navigation */}
//         <div className="px-4 py-4">
//           <nav className="flex flex-col space-y-4">
//             <Link to="/admin/dash" className="active:bg-gray-700 p-2 rounded">Dashboard</Link>
//             <Link to="/admin/students" className="active:bg-gray-700 p-2 rounded">Students</Link>
//             <Link to="/admin/teachers" className="active:bg-gray-700 p-2 rounded">Teachers</Link>
//             <Link to="/admin/classes" className="active:bg-gray-700 p-2 rounded">Classes</Link>
//             <Link to="/admin/staff" className="active:bg-gray-700 p-2 rounded">Staff</Link>
//             <button className="bg-red-500 p-2 rounded" onClick={handleLogout}>Logout</button>
//           </nav>

//           {/* Track Process Button */}
//           <div className="mt-8">
//             <button
//               onClick={toggleSidebar}
//               className="w-full flex items-center justify-center bg-blue-600 active:bg-blue-700 p-2 rounded"
//             >
//               <FaRegDotCircle className="mr-2" />
//               <span>Track Process</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }











































































//import React, { useContext } from 'react';
//import { Link, useNavigate } from 'react-router-dom';
//import { userDataContext } from '../Context-Api/UserContext';
//import { authDataContext } from '../Context-Api/AuthContext';
// import axios from 'axios';
// import { FaTimes, FaRegDotCircle } from 'react-icons/fa';

// export function Sidebar({ showSidebar, toggleSidebar }) {
//   const logoImg = "/logo.jpg";
//   const { userData, setUserData } = useContext(userDataContext);
//   const { serverUrl } = useContext(authDataContext);
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await axios.get(serverUrl + "/api/auth/signout", { withCredentials: true });
//       setUserData(null);
//       navigate("/login");
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <>
//       {/* Overlay for mobile */}
//       {showSidebar && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
//           onClick={toggleSidebar}
//         ></div>
//       )}

//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 z-40 w-64 min-h-screen bg-[rgb(1,1,93)] text-white transform transition-transform duration-300 ${
//           showSidebar ? 'translate-x-0' : '-translate-x-full'
//         } md:translate-x-0`}
//       >
//         {/* Close Button (Mobile Only) */}
//         <div className="md:hidden flex justify-end p-4">
//           <button onClick={toggleSidebar} aria-label="Close Sidebar">
//             <FaTimes className="text-2xl" />
//           </button>
//         </div>

//         {/* Logo */}
//         <div className="px-4 py-4">
//           <img src={logoImg} alt="Logo" className="w-full h-10 object-cover bg-white p-1" />
//         </div>

//         {/* Navigation */}
//         <div className="px-4 py-4">
//           <nav className="flex flex-col space-y-4">
//             <Link to="/admin/dash" className="active:bg-gray-700 p-2 rounded">Dashboard</Link>
//             <Link to="/admin/students" className="active:bg-gray-700 p-2 rounded">Students</Link>
//             <Link to="/admin/teachers" className="active:bg-gray-700 p-2 rounded">Teachers</Link>
//             <Link to="/admin/classes" className="active:bg-gray-700 p-2 rounded">Classes</Link>
//             <Link to="/admin/staff" className="active:bg-gray-700 p-2 rounded">Staff</Link>
//             <button className="bg-red-500 p-2 rounded" onClick={handleLogout}>Logout</button>
//           </nav>

//           {/* Track Process Button */}
//           <div className="mt-8">
//             <button
//               onClick={toggleSidebar}
//               className="w-full flex items-center justify-center bg-blue-600 active:bg-blue-700 p-2 rounded"
//             >
//               <FaRegDotCircle className="mr-2" />
//               <span>Track Process</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }















import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaTimes } from "react-icons/fa";
import { FaRegDotCircle } from "react-icons/fa";
import { authDataContext } from "../Context-Api/AuthContext";
import { userDataContext } from "../Context-Api/UserContext";
//import { authDataContext, userDataContext } from "../context"; // adjust path if needed
// export  function Sidebar() {
//   const { userData, setUserData } = useContext(userDataContext);
//   const { serverUrl } = useContext(authDataContext);
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await axios.get(serverUrl + "/api/auth/signout", { withCredentials: true });
//       setUserData(null);
//       navigate("/login");
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <>
//       {/* Hamburger (Mobile Only) */}
//       <div className="md:hidden flex items-center justify-between p-4 bg-white shadow z-50">
//         <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Sidebar">
//           {isOpen ? (
//             <FaTimes className="text-xl text-blue-900" />
//           ) : (
//             <svg
//               className="w-6 h-6 text-blue-900"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* Overlay (Mobile Only) */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
//           onClick={() => setIsOpen(false)}
//         ></div>
//       )}

//       {/* Sidebar */}
//       <aside
//         className={`fixed z-40 top-0 left-0 h-full w-64 bg-[rgb(1,1,93)] text-white transform ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } md:translate-x-0 transition-transform duration-300 ease-in-out md:static md:h-auto md:w-64`}
//       >
//         {/* Logo */}
//         <div className="bg-white p-4">
//           <img src="/logo.jpg" alt="Logo" className="w-full h-10 object-cover" />
//         </div>

//         {/* Navigation */}
//         <ul className="p-4 space-y-3 font-medium">
//           <li>
//             <Link to="/admin/dash" className="active:text-gray-300 block">
//               📊 Dashboardoo
//             </Link>
//           </li>
//           <li>
//             <Link to="/admin/students" className="active:text-gray-300 block">
//               👨‍🎓 Students
//             </Link>
//           </li>
//           <li>
//             <Link to="/admin/teachers" className="active:text-gray-300 block">
//               👩‍🏫 Teachers
//             </Link>
//           </li>
//           <li>
//             <Link to="/admin/classes" className="active:text-gray-300 block">
//               🏫 Classes
//             </Link>
//           </li>
//           <li>
//             <Link to="/admin/staff" className="active:text-gray-300 block">
//               👥 Staff
//             </Link>
//           </li>
//           <li>
//             <button
//               onClick={handleLogout}
//               className="text-red-500 active:text-white w-full text-left"
//             >
//               🚪 Logout
//             </button>
//           </li>
//         </ul>

//         <div className="px-4 mt-6">
//           <button
//             onClick={() => setIsOpen(false)}
//             className="w-full flex items-center justify-center bg-blue-600 active:bg-blue-700 p-2 rounded"
//           >
//             <FaRegDotCircle className="mr-2" />
//             <span>Track Process</span>
//           </button>
//         </div>
//       </aside>
//     </>
//   );
// }


























export function Sidebar({ isOpen, setIsOpen }) {
  const { userData, setUserData } = useContext(userDataContext);
  const { serverUrl } = useContext(authDataContext);
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
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed z-40 top-0 left-0 h-full w-64 bg-[rgb(1,1,93)] text-white transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 transition-transform duration-300 ease-in-out md:static md:h-auto md:w-64`}
      >
        <div className="bg-white p-4">
          <img src="/logo.jpg" alt="Logo" className="w-full h-10 object-cover" />
        </div>

        <ul className="p-4 space-y-3 font-medium">
          <li  className="active:text-[rgb(193,151,11)] block"><Link to="/admin/dash"    >📊 Dashboard</Link></li>
          <li  className="active:text-[rgb(193,151,11)] block"><Link to="/admin/students">👨‍🎓 Students</Link></li>
          <li  className="active:text-[rgb(193,151,11)] block"><Link to="/admin/add-student" >
            ➕ Add New Students
          </Link>
          </li>
          <li  className="active:text-[rgb(193,151,11)] block" ><Link to="/admin/teachers"    >👩‍🏫 Teachers</Link></li>
          <li  className="active:text-[rgb(193,151,11)] block" > <Link to="/admin/add-teacher">
                          ➕ Register New Teacher
                        </Link></li>
          <li  className="active:text-[rgb(193,151,11)] block"><Link to="/admin/classes"  >🏫 Classes</Link></li>
          <li  className="active:text-[rgb(193,151,11)] block"><Link to="/admin/add-class">
                          ➕ Add New Class
                        </Link></li>
          <li  className="active:text-[rgb(193,151,11)] block"><Link to="/admin/staff">👥 Staff</Link></li>
          <li  className="active:text-[rgb(193,151,11)] block"><Link to="/admin/add-staff">
                          ➕ Register New Staff
                        </Link></li>   
 <li className="active:text-[rgb(193,151,11)]">
  <Link to="/admin/sessions">⏰ Sessions</Link>
</li>
<li className="active:text-[rgb(193,151,11)]">
 <Link to="/admin/add-session">
                ➕ Add New Session
              </Link>         
              </li>
              <li className="active:text-[rgb(193,151,11)]">
               <Link to="/Add/Class/Timetable">
                              ➕ Add Class TimeTable
                            </Link>
                            </li>
                            <li className="active:text-[rgb(193,151,11)]"><Link to="/Add/Fee/Voucher">
                              ➕ Add Fee Voucher
                            </Link>
                            </li>
          <li className="active:text-[rgb(193,151,11)]">
            <Link to="/admin/chat">💬 Chat</Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="text-[rgb(193,151,11)] active:text-[rgb(193,151,11)] w-full text-left"
            >
              🚪 Logout
            </button>
          </li>
        </ul>

        {/* <div className="px-4 mt-6">
          <button
            onClick={() => setIsOpen(false)}
            className="w-full flex items-center justify-center bg-blue-600 active:bg-blue-700 p-2 rounded"
          >
            <FaRegDotCircle className="mr-2" />
            <span>Track Process</span>
          </button>
        </div> */}
      </aside>
    </>
  );
}
