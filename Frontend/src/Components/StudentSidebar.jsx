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
// const StudentSidebar = () => {
//   const { serverUrl } = useContext(authDataContext);
//   const { userData, setUserData } = useContext(userDataContext);
//   const [loading, setLoading] = useState(true);
//   const [isOpen, setIsOpen] = useState(false); // Sidebar toggle
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
//   useEffect(() => {
//     if (userData) {
//       setLoading(false);
//     }
//   }, [userData]);
//   if (loading) return <p>Loading ...</p>;
//   return (
//     <div className="md:flex">
//       {/* Hamburger button */}
//       <button
//         className="md:hidden p-4 focus:outline-none"
//         onClick={() => setIsOpen(!isOpen)}
//         aria-label="Toggle sidebar"
//       >
//         <svg
//           className="w-6 h-6 text-blue-900"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           {isOpen ? (
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//           ) : (
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//           )}
//         </svg>
//       </button>

//       {/* Sidebar */}
//       <aside
//         className={`${
//           isOpen ? 'block' : 'hidden'
//         } md:block bg-[rgb(1,1,93)] shadow-md w-full md:w-64 p-5 space-y-4 transition-all duration-300`}
//       >
//         <div className="logoImg px-4 py-4 bg-white">
//           <img src="/logo.jpg" alt="Logo" className="w-full h-8 object-cover" />
//         </div>
//         <ul className="space-y-2 flex flex-col text-white font-medium">
//           <li className="hover:text-black"><a href="#">Dashboard</a></li>
//           <li className="hover:text-black"><a href="#">Assignments</a></li>
//           <li className="hover:text-black"><a href="#">Grades</a></li>
//           <Link
//             to={`/${userData.role}/${userData.name}/update/password`}
//             className="text-sm lg:text-base font-medium block hover:text-black"
//           >
//             Reset Password
//           </Link>
//           <Link to="/student/profile" className="hover:text-black">Profile</Link>
//           <button
//             onClick={handleLogout}
//             className="text-red-700 cursor-pointer hover:text-black bg-transparent border-none p-0"
//           >
//             Logout
//           </button>
//         </ul>
//       </aside>
//     </div>
//   );
// };



const StudentSidebar = () => {
  const { serverUrl } = useContext(authDataContext);
  const { userData, setUserData } = useContext(userDataContext);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
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

  useEffect(() => {
    if (userData) setLoading(false);
  }, [userData]);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      {/* Hamburger Button (Mobile Only) */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white shadow">
        <img src="/logo.jpg" alt="Logo" className="h-8 w-auto" />
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

      {/* Overlay (Mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed z-40 top-0 left-0 h-full w-64 bg-[rgb(1,1,93)] text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-300 ease-in-out md:static md:h-auto md:w-64`}
      >
        <div className="bg-white p-4">
          <img src="/logo.jpg" alt="Logo" className="w-full h-10 object-cover" />
        </div>
        <ul className="p-4 space-y-3 font-medium">
          <li className="hover:text-gray-300">
          <Link to='/student/dash'>
           📊 Dashboard
          </Link>
          </li>
          <li className="hover:text-gray-300">
            <a href="#">📝 Assignments</a>
          </li>
          <li className="hover:text-gray-300">
            <a href="#">📈 Grades</a>
          </li>
          <li className="hover:text-gray-300">
            <Link
              to={`/${userData.role}/${userData.name}/update/password`}
              className="block"
            >
              🔒 Reset Password
            </Link>
          </li>
          <li className="hover:text-gray-300">
            <Link to="/student/profile">👤 Profile</Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="text-red-500 hover:text-white w-full text-left"
            >
              🚪 Logout
            </button>
          </li>
        </ul>
      </aside>
    </>
  );
};
//export default StudentSidebar;
export default StudentSidebar;
