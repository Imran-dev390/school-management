import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userDataContext } from '../Context-Api/UserContext'
import axios from 'axios';
import { authDataContext } from '../Context-Api/AuthContext';

const TeacherSidebar = () => {
  const {userData,setUserData} = useContext(userDataContext);
  const {serverUrl} = useContext(authDataContext);
  const [Incharge,setIncharge] = useState(false);
  const [isOpen,setIsOpen] = useState(false);
  useEffect(()=>{
     if(userData.role === "Teacher" && userData.assignedClass[0].incharge === true){
      setIncharge(true);
      //console.log("userData teacher incharge is true in if condition",userData.assignedClass[0].incharge);
     }
  },[userData])
  const navigate = useNavigate();
     const handleLogout = async () => {
      try {
        await axios.get(serverUrl + "/api/auth/signout", { withCredentials: true });
        // Clear user data
        setUserData(null);
        // Optional: clear other global contexts if needed
        // fetchAdminData(null); 
       // toast.success("Logged out successfully");
        navigate("/login");
      } catch (err) {
        alert(`"Login Failed` )
        console.error(err);
        //toast.error("Logout failed");
      }
    };
  return (
      //  <aside className="bg-[rgb(1,1,93)] w-full md:w-64 shadow-lg p-5">
//       <>
//        {/* Hamburger Button (Mobile Only) */}
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

//       {/* Overlay (Mobile) */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
//           onClick={() => setIsOpen(false)}
//         ></div>
//       )}
//       {/* Sidebar */}
//       <aside
//         className={`fixed z-40 top-0 left-0 h-full w-64 bg-[rgb(1,1,93)] text-white transform ${
//           isOpen ? 'translate-x-0' : '-translate-x-full'
//         } md:translate-x-0 transition-transform duration-300 ease-in-out md:static md:h-auto md:w-64`}
//       >
//                 <div className="logoImg px-4 py-4">
//               <img src="/logo.jpg" alt="" className='w-full h-8 object-cover'/>
//              </div>
//               <ul className="space-y-3    font-medium">
//                  <li className="hover:text-gray-300">
//                 <Link to="/teacher/dash" className='hover:text-black cursor-pointer'> 📊 Dashboard</Link>
//                </li>
//                {Incharge &&
//                 <li className="hover:text-gray-300">
//                 <Link to="/Mark/Attendance" className="hover:text-black cursor-pointer">
//               ➕  Mark Attendance
//                 </Link>
//                 </li>
// }
//  <li className="hover:text-gray-300">
//                 <Link className="hover:text-black cursor-pointer">My Classes</Link>
//                 </li>
//                  <li className="hover:text-gray-300">
//                 <Link className="hover:text-black cursor-pointer">Students</Link>
//                 </li>
//                  <li className="hover:text-gray-300">
//                  <Link to="/teacher/announcements"> ➕ Announcements</Link>
//                  </li>
//                   <li className="hover:text-gray-300">
//                              <Link
//                                to={`/${userData.role}/${userData.name}/update/password`}
//                                className="block"
//                              >
//                                🔒 Reset Password
//                              </Link>
//                              </li>
//                   <li className="hover:text-gray-300">
//                 <Link to="/teacher/profile" className="hover:text-black cursor-pointer">
//                 👤 Profile</Link>
//                 </li>
//                 <li>
//                 <button
//   onClick={handleLogout}
//   className="text-red-700 cursor-pointer hover:text-black bg-transparent border-none p-0"
// >
//  🚪 Logout
// </button>
// </li>
//               </ul>
//             </aside>
//             </>









<>
  {/* Hamburger Button (Mobile Only) */}
  <div className="md:hidden flex items-center justify-between p-4 bg-white shadow">
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
    className={`fixed z-40 top-0 left-0 h-full w-64 bg-[rgb(1,1,93)] text-white transform  ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    } md:translate-x-0 transition-transform duration-300 ease-in-out md:static md:h-auto md:w-64`}
  >
    <div className="bg-white p-4">
      <img src="/logo.jpg" alt="Logo" className="w-full h-8 object-cover" />
    </div>
    <ul className="p-4 space-y-3 font-medium">
      <li className="hover:text-[rgb(193,151,11)]">
        <Link to="/teacher/dash">📊 Dashboard</Link>
      </li>

      {Incharge && (
        <li className="hover:text-[rgb(193,151,11)]">
          <Link to="/Mark/Attendance">➕ Mark Attendance</Link>
        </li>
      )}

      <li className="hover:text-[rgb(193,151,11)]">
        <Link to="#">📚 My Classes</Link>
      </li>

      <li className="hover:text-[rgb(193,151,11)]">
        <Link to="#">👥 Students</Link>
      </li>

      <li className="hover:text-[rgb(193,151,11)]">
        <Link to="/teacher/announcements">📢 Announcements</Link>
      </li>

      <li className="hover:text-[rgb(193,151,11)]">
        <Link
          to={`/${userData.role}/${userData.name}/update/password`}
          className="block"
        >
          🔒 Reset Password
        </Link>
      </li>

      <li className="hover:text-[rgb(193,151,11)]">
        <Link to="/teacher/profile">👤 Profile</Link>
      </li>
 <li className="hover:text-[rgb(193,151,11)]">
  <Link to="/teacher/add/announcement">📢 Add Announcement</Link>
</li>
<li className="hover:text-[rgb(193,151,11)]">
  <Link to="/teacher/publish/marks">📊 Publish Marks</Link>
</li>
<li className="hover:text-[rgb(193,151,11)]">
  <Link to="/teacher/chat">💬 Chat</Link>
</li>

      <li>
        <button
          onClick={handleLogout}
          className="text-[rgb(193,151,11)] hover:text-[rgb(193,151,11)] w-full text-left"
        >
          🚪 Logout
        </button>
      </li>
    </ul>
  </aside>
</>
  )
}

export default TeacherSidebar
