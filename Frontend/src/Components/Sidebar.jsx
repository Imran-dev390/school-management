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















// import { useContext, useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { FaTimes } from "react-icons/fa";
// import { FaRegDotCircle } from "react-icons/fa";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";
// import { authDataContext } from "../Context-Api/AuthContext";
// import { userDataContext } from "../Context-Api/UserContext";
// //import { authDataContext, userDataContext } from "../context"; // adjust path if needed
// // export  function Sidebar() {
// //   const { userData, setUserData } = useContext(userDataContext);
// //   const { serverUrl } = useContext(authDataContext);
// //   const [isOpen, setIsOpen] = useState(false);
// //   const navigate = useNavigate();

// //   const handleLogout = async () => {
// //     try {
// //       await axios.get(serverUrl + "/api/auth/signout", { withCredentials: true });
// //       setUserData(null);
// //       navigate("/login");
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   return (
// //     <>
// //       {/* Hamburger (Mobile Only) */}
// //       <div className="md:hidden flex items-center justify-between p-4 bg-white shadow z-50">
// //         <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Sidebar">
// //           {isOpen ? (
// //             <FaTimes className="text-xl text-blue-900" />
// //           ) : (
// //             <svg
// //               className="w-6 h-6 text-blue-900"
// //               fill="none"
// //               stroke="currentColor"
// //               viewBox="0 0 24 24"
// //               xmlns="http://www.w3.org/2000/svg"
// //             >
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
// //             </svg>
// //           )}
// //         </button>
// //       </div>

// //       {/* Overlay (Mobile Only) */}
// //       {isOpen && (
// //         <div
// //           className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
// //           onClick={() => setIsOpen(false)}
// //         ></div>
// //       )}

// //       {/* Sidebar */}
// //       <aside
// //         className={`fixed z-40 top-0 left-0 h-full w-64 bg-[rgb(1,1,93)] text-white transform ${
// //           isOpen ? "translate-x-0" : "-translate-x-full"
// //         } md:translate-x-0 transition-transform duration-300 ease-in-out md:static md:h-auto md:w-64`}
// //       >
// //         {/* Logo */}
// //         <div className="bg-white p-4">
// //           <img src="/logo.jpg" alt="Logo" className="w-full h-10 object-cover" />
// //         </div>

// //         {/* Navigation */}
// //         <ul className="p-4 space-y-3 font-medium">
// //           <li>
// //             <Link to="/admin/dash" className="active:text-gray-300 block">
// //               📊 Dashboardoo
// //             </Link>
// //           </li>
// //           <li>
// //             <Link to="/admin/students" className="active:text-gray-300 block">
// //               👨‍🎓 Students
// //             </Link>
// //           </li>
// //           <li>
// //             <Link to="/admin/teachers" className="active:text-gray-300 block">
// //               👩‍🏫 Teachers
// //             </Link>
// //           </li>
// //           <li>
// //             <Link to="/admin/classes" className="active:text-gray-300 block">
// //               🏫 Classes
// //             </Link>
// //           </li>
// //           <li>
// //             <Link to="/admin/staff" className="active:text-gray-300 block">
// //               👥 Staff
// //             </Link>
// //           </li>
// //           <li>
// //             <button
// //               onClick={handleLogout}
// //               className="text-red-500 active:text-white w-full text-left"
// //             >
// //               🚪 Logout
// //             </button>
// //           </li>
// //         </ul>

// //         <div className="px-4 mt-6">
// //           <button
// //             onClick={() => setIsOpen(false)}
// //             className="w-full flex items-center justify-center bg-blue-600 active:bg-blue-700 p-2 rounded"
// //           >
// //             <FaRegDotCircle className="mr-2" />
// //             <span>Track Process</span>
// //           </button>
// //         </div>
// //       </aside>
// //     </>
// //   );
// // }


























// export function Sidebar({ isOpen, setIsOpen }) {
//   const { userData, setUserData } = useContext(userDataContext);
//   const { serverUrl } = useContext(authDataContext);
//    const location = useLocation(); // track the active li
//    const [openDropdown, setOpenDropdown] = useState(null); // to control open dropdown
//  const [isOpen, setIsOpen] = useState(false);
//   const menuItems = [
//     { label: "📊 Dashboard", path: "/admin/dash" },
//     {
//       label: "👨‍🎓 Students",
//       path: "/admin/students",
//       children: [{ label: "➕ Add New Students", path: "/admin/add-student" }],
//     },
//     {
//       label: "👩‍🏫 Teachers",
//       path: "/admin/teachers",
//       children: [{ label: "➕ Register New Teacher", path: "/admin/add-teacher" }],
//     },
//     {
//       label: "🏫 Classes",
//       path: "/admin/classes",
//       children: [
//         { label: "➕ Add New Class", path: "/admin/add-class" },
//         { label: "➕ Add Class TimeTable", path: "/Add/Class/Timetable" }, // moved here
//       ],
//     },
//     {
//       label: "👥 Staff",
//       path: "/admin/staff",
//       children: [{ label: "➕ Register New Staff", path: "/admin/add-staff" }],
//     },
//     {
//       label: "⏰ Sessions",
//       path: "/admin/sessions",
//       children: [{ label: "➕ Add New Session", path: "/admin/add-session" }],
//     },
//     { label: "💬 Chat", path: "/admin/chat" },
//     { label: "➕ Add Fee Voucher", path: "/Add/Fee/Voucher" },
//   ];
//   const navigate = useNavigate();
// //const [isActive,setActive] = useState(false);
//   const handleLogout = async () => {
//     try {
//       await axios.get(serverUrl + "/api/auth/signout", { withCredentials: true });
//       setUserData(null);
//       navigate("/login");
//     } catch (err) {
//       console.error(err);
//     }
//   };
//    const toggleDropdown = (index) => {
//     setOpenDropdown(openDropdown === index ? null : index);
//   };
//   return (
//     <>
//      {/* Hamburger Button (Mobile Only) */}
//       <div className="md:hidden flex items-center justify-between p-4 bg-white shadow">
//         {/* <img src="/logo.jpg" alt="Logo" className="w-4/5 h-8 object-cover" /> */}
//         <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Sidebar">
//           <svg
//             className="w-6 h-6 text-blue-900"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             {isOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Overlay for mobile */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
//           onClick={() => setIsOpen(false)}
//         ></div>
//       )}
//       {/* Sidebar */}
//       <aside
//         className={`fixed z-40 top-0 left-0 h-full w-64 bg-[rgb(1,1,93)] text-white transform ${isOpen ? "translate-x-0" : "-translate-x-full"
//           } md:translate-x-0 transition-transform duration-300 ease-in-out md:static md:h-auto md:w-64`}
//       >
//         <div className="bg-white p-4">
//           <img src="/logo.jpg" alt="Logo" className="w-full h-10 object-cover" />
//         </div>
//         {/* <ul className="p-4 space-y-3 font-medium">
//           <li  className={`p-4 rounded-xl ${isActive ? "bg-slate-300" : ""} `}   onClick={()=>setActive(true)}><Link to="/admin/dash"  className="active:text-[rgb(193,151,11)] block"    >📊 Dashboard</Link></li>
//           <li  className={`p-4 rounded-xl ${isActive ? "bg-slate-300" : ""}  `} onClick={()=>setActive(true)}><Link to="/admin/students"  className="active:text-[rgb(193,151,11)] block">👨‍🎓 Students</Link></li>
//           <li  className={`p-4 rounded-xl ${isActive ? "bg-slate-300" : ""}  `} onClick={()=>setActive(true)}><Link to="/admin/add-student"  className="active:text-[rgb(193,151,11)] block">
//             ➕ Add New Students
//           </Link>
//           </li>
//           <li   className={`p-4 rounded-xl ${isActive ? "bg-slate-300" : ""} `} onClick={()=>setActive(true)}><Link to="/admin/teachers"    className="active:text-[rgb(193,151,11)] block" >👩‍🏫 Teachers</Link></li>
//           <li   className={`p-4 rounded-xl ${isActive ? "bg-slate-300" : ""} `} onClick={()=>setActive(true)}> <Link to="/admin/add-teacher"  className="active:text-[rgb(193,151,11)] block">
//                           ➕ Register New Teacher
//                         </Link></li>
//           <li   className={`p-4 rounded-xl ${isActive ? "bg-slate-300" : ""} `} onClick={()=>setActive(true)}><Link to="/admin/classes"    className="active:text-[rgb(193,151,11)] block">🏫 Classes</Link></li>
//           <li   className={`p-4 rounded-xl ${isActive ? "bg-slate-300" : ""} `} onClick={()=>setActive(true)}><Link to="/admin/add-class"  className="active:text-[rgb(193,151,11)] block">
//                           ➕ Add New Class
//                         </Link></li>
//           <li   className={`p-4 rounded-xl ${isActive ? "bg-slate-300" : ""} `} onClick={()=>setActive(true)}><Link to="/admin/staff"      className="active:text-[rgb(193,151,11)] block">👥 Staff</Link></li>
//           <li   className={`p-4 rounded-xl ${isActive ? "bg-slate-300" : ""} `} onClick={()=>setActive(true)}><Link to="/admin/add-staff"  className="active:text-[rgb(193,151,11)] block">
//                           ➕ Register New Staff
//                         </Link></li>   
//  <li  className={`p-4 rounded-xl ${isActive ? "bg-slate-300" : ""} `} onClick={()=>setActive(true)}>
//   <Link to="/admin/sessions"  className="active:text-[rgb(193,151,11)] block">⏰ Sessions</Link>
// </li>
// <li  className={`p-4 rounded-xl ${isActive ? "bg-slate-300" : ""} `} onClick={()=>setActive(true)}>
//  <Link to="/admin/add-session"  className="active:text-[rgb(193,151,11)] block">
//                 ➕ Add New Session
//               </Link>         
//               </li>
//               <li  className={`p-4 rounded-xl ${isActive ? "bg-slate-300" : ""} `} onClick={()=>setActive(true)}>
//                <Link to="/Add/Class/Timetable"  className="active:text-[rgb(193,151,11)] block">
//                               ➕ Add Class TimeTable
//                             </Link>
//                             </li>
//                             <li  className={`p-4 rounded-xl ${isActive ? "bg-slate-300" : ""} `} onClick={()=>setActive(true)}><Link to="/Add/Fee/Voucher"  className="active:text-[rgb(193,151,11)] block">
//                               ➕ Add Fee Voucher
//                             </Link>
//                             </li>
//           <li  className={`p-4 rounded-xl ${isActive ? "bg-slate-300" : ""} `} onClick={()=>setActive(true)}>
//             <Link to="/admin/chat"  className="active:text-[rgb(193,151,11)] block">💬 Chat</Link>
//           </li>
//           <li>
//             <button
//               onClick={handleLogout}
//               className="text-[rgb(193,151,11)] active:text-[rgb(193,151,11)] w-full text-left"
//             >
//               🚪 Logout
//             </button>
//           </li>
//         </ul> */}
// {/* <ul className="p-4 space-y-3 font-medium">
//       {menuItems.map((item, index) => (
//         <li
//           key={index}
//           className={`p-4 rounded-xl ${activeIndex === index ? "bg-orange-300 transition-all" : ""}`}
//           onClick={() => setActiveIndex(index)}
//         >
//           <Link to={item.path} className="active:text-[rgb(193,151,11)] block">
//             {item.label}
//           </Link>
//         </li>
//       ))}
//  <li>
//         <button
//           onClick={handleLogout}
//           className="text-[rgb(193,151,11)] active:text-[rgb(193,151,11)] w-full text-left"
//         >
//           🚪 Logout
//         </button>
//       </li>
//     </ul> */}

//       {/* <ul className="p-4 space-y-3 font-medium">
//       {menuItems.map((item, index) => {
//         const isActive = location.pathname === item.path;

//         return (
//           <li
//             key={index}
//             className={`p-4 rounded-xl ${isActive ? "bg-slate-300" : ""}`}
//           >
//             <Link
//               to={item.path}
//               className={`block ${isActive ? "text-[rgb(193,151,11)]" : ""}`}
//             >
//               {item.label}
//             </Link>
//           </li>
//         );
//       })}

//       <li>
//         <button
//           onClick={handleLogout}
//           className="text-[rgb(193,151,11)] active:text-[rgb(193,151,11)] w-full text-left"
//         >
//           🚪 Logout
//         </button>
//       </li>
//     </ul> */}
//      {/* <ul className="p-4 space-y-1 font-medium">
//       {menuItems.map((item, index) => {
//         const isActive = location.pathname === item.path;
//         return (
//           <li key={index}>
//             <div
//               onClick={() => item.children ? toggleDropdown(index) : null}
//               className={`p-4 rounded-xl cursor-pointer ${
//                 isActive ? "bg-slate-300" : ""
//               }`}
//             >
//               <Link
//                 to={item.path}
//                 className={`block ${
//                   isActive ? "text-[rgb(193,151,11)]" : ""
//                 }`}
//               >
//                 {item.label}
//               </Link>
//             </div>

//             {item.children && openDropdown === index && (
//               <ul className="ml-6 mt-2 space-y-2">
//                 {item.children.map((child, childIndex) => {
//                   const isChildActive = location.pathname === child.path;
//                   return (
//                     <li key={childIndex}>
//                       <Link
//                         to={child.path}
//                         className={`block p-2 rounded-lg ${
//                           isChildActive ? "bg-slate-300 text-[rgb(193,151,11)]" : ""
//                         }`}
//                       >
//                         {child.label}
//                       </Link>
//                     </li>
//                   );
//                 })}
//               </ul>
//             )}
//           </li>
//         );
//       })}

//       <li>
//         <button
//           onClick={handleLogout}
//           className="text-[rgb(193,151,11)] active:text-[rgb(193,151,11)] w-full text-left mt-4"
//         >
//           🚪 Logout
//         </button>
//       </li>
//     </ul> */}    
//         <ul className="p-4 space-y-0 font-medium">
//       {menuItems.map((item, index) => {
//         const isActive = location.pathname === item.path;
//         const isDropdownOpen = openDropdown === index;
//         return (
//           <li key={index}>
//             <div
//               onClick={() => (item.children ? toggleDropdown(index) : null)}
//               className={`flex items-center justify-between p-3 rounded-md cursor-pointer ${
//                 isActive ? "bg-slate-300" : ""
//               }`}
//             >
//               <Link
//                 to={item.path}
//                 className={`flex-1 ${
//                   isActive ? "text-[rgb(193,151,11)]" : ""
//                 }`}
//               >
//                 {item.label}
//               </Link>
//               {item.children && (
//                 <span className="ml-2 text-sm text-gray-200">
//                   {isDropdownOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
//                 </span>
//               )}
//             </div>
//             {item.children && isDropdownOpen && (
//               <ul className="ml-6 mt-1 space-y-1">
//                 {item.children.map((child, childIndex) => {
//                   const isChildActive = location.pathname === child.path;
//                   return (
//                     <li key={childIndex}>
//                       <Link
//                         to={child.path}
//                         className={`block px-3 py-2 rounded-md text-sm cursor-pointer ${
//                           isChildActive
//                             ? "bg-slate-300 text-[rgb(193,151,11)]"
//                             : "text-[rgb(193,151,11)] hover:bg-slate-100"
//                         }`}
//                       >
//                         {child.label}
//                       </Link>
//                     </li>
//                   );
//                 })}
//               </ul>
//             )}
//           </li>
//         );
//       })}

//       {/* Aligned Logout Button */}
//       <li>
//         <button
//           onClick={handleLogout}
//           className="flex items-center w-full p-3 rounded-md text-left text-[rgb(193,151,11)] hover:bg-slate-100"
//         >
//           🚪 Logout
//         </button>
//       </li>
//     </ul>
//         {/* <div className="px-4 mt-6">
//           <button
//             onClick={() => setIsOpen(false)}
//             className="w-full flex items-center justify-center bg-blue-600 active:bg-blue-700 p-2 rounded"
//           >
//             <FaRegDotCircle className="mr-2" />
//             <span>Track Process</span>
//           </button>
//         </div> */}
//       </aside>
//     </>
//   );
// }































































































































//  import { useContext, useState, useEffect } from "react";
//  import { Link, useLocation, useNavigate } from "react-router-dom";
//  import { FaBars, FaChevronDown, FaChevronUp, FaUserCircle } from "react-icons/fa";
//  import axios from "axios";
//  import { userDataContext } from "../contexts/userDataContext";
//  import { authDataContext } from "../contexts/authContext";
// export function Sidebar({ isOpen, setIsOpen }) {
//   const { userData, setUserData } = useContext(userDataContext);
//   const { serverUrl } = useContext(authDataContext);
//   const location = useLocation();
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await axios.get(`${serverUrl}/api/auth/signout`, { withCredentials: true });
//       setUserData(null);
//       navigate("/login");
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const toggleDropdown = (index) => {
//     setOpenDropdown(openDropdown === index ? null : index);
//   };

//   const menuItems = [
//     { label: "📊 Dashboard", path: "/admin/dash" },
//     {
//       label: "👨‍🎓 Students",
//       path: "/admin/students",
//       children: [{ label: "➕ Add New Students", path: "/admin/add-student" }],
//     },
//     {
//       label: "👩‍🏫 Teachers",
//       path: "/admin/teachers",
//       children: [{ label: "➕ Register New Teacher", path: "/admin/add-teacher" }],
//     },
//     {
//       label: "🏫 Classes",
//       path: "/admin/classes",
//       children: [
//         { label: "➕ Add New Class", path: "/admin/add-class" },
//         { label: "➕ Add Class TimeTable", path: "/Add/Class/Timetable" },
//       ],
//     },
//     {
//       label: "👥 Staff",
//       path: "/admin/staff",
//       children: [{ label: "➕ Register New Staff", path: "/admin/add-staff" }],
//     },
//     {
//       label: "⏰ Sessions",
//       path: "/admin/sessions",
//       children: [{ label: "➕ Add New Session", path: "/admin/add-session" }],
//     },
//     { label: "💬 Chat", path: "/admin/chat" },
//     { label: "➕ Add Fee Voucher", path: "/Add/Fee/Voucher" },
//   ];

//   return (
//     <>
//       {/* Hamburger Button (Mobile Only) */}
//       <div className="md:hidden flex items-center justify-between p-4 bg-white shadow">
//         <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Sidebar">
//           <svg
//             className="w-6 h-6 text-blue-900"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             {isOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Overlay for mobile */}
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
//         <div className="bg-white p-4">
//           <img src="/logo.jpg" alt="Logo" className="w-full h-8 object-cover" />
//         </div>

//         <ul className="p-4 space-y-3 font-medium">
//           {menuItems.map((item, index) => {
//             const isActive = location.pathname === item.path;
//             const isDropdownOpen = openDropdown === index;

//             return (
//               <li key={index}>
//                 <div
//                   className="flex justify-between items-center cursor-pointer"
//                   onClick={() => item.children && toggleDropdown(index)}
//                 >
//                   <Link
//                     to={item.path}
//                     className={`block w-full ${
//                       isActive ? "text-[rgb(193,151,11)]" : "text-white"
//                     }`}
//                   >
//                     {item.label}
//                   </Link>
//                   {item.children && (
//                     <span className="text-white ml-2">
//                       {isDropdownOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
//                     </span>
//                   )}
//                 </div>

//                 {item.children && isDropdownOpen && (
//                   <ul className="ml-6 mt-2 space-y-2">
//                     {item.children.map((child, childIdx) => {
//                       const isChildActive = location.pathname === child.path;
//                       return (
//                         <li key={childIdx}>
//                           <Link
//                             to={child.path}
//                             className={`block p-2 rounded-lg ${
//                               isChildActive
//                                 ? "bg-slate-300 text-[rgb(193,151,11)]"
//                                 : "text-[rgb(193,151,11)] hover:bg-slate-100"
//                             }`}
//                           >
//                             {child.label}
//                           </Link>
//                         </li>
//                       );
//                     })}
//                   </ul>
//                 )}
//               </li>
//             );
//           })}

//           {/* Logout */}
//           <li>
//             <button
//               onClick={handleLogout}
//               className="text-[rgb(193,151,11)] active:text-[rgb(193,151,11)] w-full text-left"
//             >
//               🚪 Logout
//             </button>
//           </li>
//         </ul>
//       </aside>
//     </>
//   );
// }


















































































// import { useContext, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";
// import axios from "axios";
// import { userDataContext } from "../contexts/userDataContext";
// import { authDataContext } from "../contexts/authContext";

// export function Sidebar({ isOpen, setIsOpen }) {
//   const { userData, setUserData } = useContext(userDataContext);
//   const { serverUrl } = useContext(authDataContext);
//   const location = useLocation();
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await axios.get(`${serverUrl}/api/auth/signout`, { withCredentials: true });
//       setUserData(null);
//       navigate("/login");
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const toggleDropdown = (index) => {
//     setOpenDropdown(openDropdown === index ? null : index);
//   };

//   const menuItems = [
//     { label: "📊 Dashboard", path: "/admin/dash" },
//     {
//       label: "👨‍🎓 Students",
//       path: "/admin/students",
//       children: [{ label: "➕ Add New Students", path: "/admin/add-student" }],
//     },
//     {
//       label: "👩‍🏫 Teachers",
//       path: "/admin/teachers",
//       children: [{ label: "➕ Register New Teacher", path: "/admin/add-teacher" }],
//     },
//     {
//       label: "🏫 Classes",
//       path: "/admin/classes",
//       children: [
//         { label: "➕ Add New Class", path: "/admin/add-class" },
//         { label: "➕ Add Class TimeTable", path: "/Add/Class/Timetable" },
//       ],
//     },
//     {
//       label: "👥 Staff",
//       path: "/admin/staff",
//       children: [{ label: "➕ Register New Staff", path: "/admin/add-staff" }],
//     },
//     {
//       label: "⏰ Sessions",
//       path: "/admin/sessions",
//       children: [{ label: "➕ Add New Session", path: "/admin/add-session" }],
//     },
//     { label: "💬 Chat", path: "/admin/chat" },
//     { label: "➕ Add Fee Voucher", path: "/Add/Fee/Voucher" },
//   ];

//   return (
//     <>
//       {/* ✅ Top Navbar for Mobile Only */}
//       <div className="md:hidden flex items-center justify-between p-4 bg-white shadow z-50 relative">
//         <img src="/logo.jpg" alt="Logo" className="h-8 w-auto object-cover" />
//         <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Sidebar">
//           <svg
//             className="w-6 h-6 text-blue-900"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             {isOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Overlay for mobile */}
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
//         <div className="bg-white p-4 hidden md:block">
//           <img src="/logo.jpg" alt="Logo" className="w-full h-8 object-cover" />
//         </div>

//         <ul className="p-4 space-y-3 font-medium">
//           {menuItems.map((item, index) => {
//             const isActive = location.pathname === item.path;
//             const isDropdownOpen = openDropdown === index;

//             return (
//               <li key={index}>
//                 <div
//                   className="flex justify-between items-center cursor-pointer"
//                   onClick={() => item.children && toggleDropdown(index)}
//                 >
//                   <Link
//                     to={item.path}
//                     className={`block w-full ${
//                       isActive ? "text-[rgb(193,151,11)]" : "text-white"
//                     }`}
//                   >
//                     {item.label}
//                   </Link>
//                   {item.children && (
//                     <span className="text-white ml-2">
//                       {isDropdownOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
//                     </span>
//                   )}
//                 </div>

//                 {item.children && isDropdownOpen && (
//                   <ul className="ml-6 mt-2 space-y-2">
//                     {item.children.map((child, childIdx) => {
//                       const isChildActive = location.pathname === child.path;
//                       return (
//                         <li key={childIdx}>
//                           <Link
//                             to={child.path}
//                             className={`block p-2 rounded-lg ${
//                               isChildActive
//                                 ? "bg-slate-300 text-[rgb(193,151,11)]"
//                                 : "text-[rgb(193,151,11)] hover:bg-slate-100"
//                             }`}
//                           >
//                             {child.label}
//                           </Link>
//                         </li>
//                       );
//                     })}
//                   </ul>
//                 )}
//               </li>
//             );
//           })}

//           {/* Logout */}
//           <li>
//             <button
//               onClick={handleLogout}
//               className="text-[rgb(193,151,11)] active:text-[rgb(193,151,11)] w-full text-left"
//             >
//               🚪 Logout
//             </button>
//           </li>
//         </ul>
//       </aside>
//     </>
//   );
// }



















































































// Sidebar.jsx
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaChevronDown, FaChevronUp, FaUserCircle } from "react-icons/fa";
import axios from "axios";
import { userDataContext } from "../contexts/userDataContext";
import { authDataContext } from "../contexts/authContext";
export function Sidebar({ isOpen, setIsOpen }) {
  const { userData, setUserData } = useContext(userDataContext);
  const { serverUrl } = useContext(authDataContext);
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get(`${serverUrl}/api/auth/signout`, { withCredentials: true });
      setUserData(null);
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const menuItems = [
    { label: "📊 Dashboard", path: "/admin/dash" },
    {
      label: "👨‍🎓 Students",
      path: "/admin/students",
      children: [{ label: "➕ Add New Students", path: "/admin/add-student" }],
    },
    {
      label: "👩‍🏫 Teachers",
      path: "/admin/teachers",
      children: [{ label: "➕ Register New Teacher", path: "/admin/add-teacher" }],
    },
    {
      label: "🏫 Classes",
      path: "/admin/classes",
      children: [
        { label: "➕ Add New Class", path: "/admin/add-class" },
        { label: "➕ Add Class TimeTable", path: "/Add/Class/Timetable" },
      ],
    },
    {
      label: "👥 Staff",
      path: "/admin/staff",
      children: [{ label: "➕ Register New Staff", path: "/admin/add-staff" }],
    },
    {
      label: "⏰ Sessions",
      path: "/admin/sessions",
      children: [{ label: "➕ Add New Session", path: "/admin/add-session" }],
    },
    { label: "💬 Chat", path: "/admin/chat" },
    { label: "➕ Add Fee Voucher", path: "/Add/Fee/Voucher" },
  ];

  return (
    <>
      {/* ✅ Mobile Top Navbar */}
      <div className="md:hidden fixed top-0 left-0 right-0 flex items-center justify-between px-4 py-3 bg-white shadow z-50">
        <img src="/logo.jpg" alt="Logo" className="h-8 w-auto object-cover" />
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Sidebar">
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
      </div>

      {/* ✅ Mobile Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* ✅ Sidebar */}
      <aside
        className={`fixed z-40 top-0 left-0 h-full w-64 bg-[rgb(1,1,93)] text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out md:static`}
      >
        <div className="bg-white p-4 hidden md:block">
          <img src="/logo.jpg" alt="Logo" className="w-full h-8 object-cover" />
        </div>

        <ul className="p-4 space-y-3 font-medium">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            const isDropdownOpen = openDropdown === index;

            return (
              <li key={index}>
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => item.children && toggleDropdown(index)}
                >
                  <Link
                    to={item.path}
                    className={`block w-full ${isActive ? "text-yellow-400" : "text-white"}`}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <span className="text-white ml-2">
                      {isDropdownOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                    </span>
                  )}
                </div>

                {item.children && isDropdownOpen && (
                  <ul className="ml-6 mt-2 space-y-2">
                    {item.children.map((child, childIdx) => {
                      const isChildActive = location.pathname === child.path;
                      return (
                        <li key={childIdx}>
                          <Link
                            to={child.path}
                            className={`block p-2 rounded-lg ${
                              isChildActive
                                ? "bg-slate-300 text-yellow-500"
                                : "text-yellow-500 hover:bg-slate-100"
                            }`}
                          >
                            {child.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}

          <li>
            <button
              onClick={handleLogout}
              className="text-yellow-400 w-full text-left"
            >
              🚪 Logout
            </button>
          </li>
        </ul>
      </aside>
    </>
  );
}
