import React, { useContext, useState } from 'react'
import { authDataContext } from '../Context-Api/AuthContext';
import axios from 'axios';
import { userDataContext } from '../Context-Api/UserContext';
import { Link, useNavigate } from 'react-router-dom';
import { FaMoneyBillWave, FaFileInvoice, FaUserTie, FaChartBar } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
//import { FaMoneyBillWave, FaFileInvoice, FaUserTie, FaChartBar } from 'react-icons/fa';

const AccountantSidebar = () => {
    const {serverUrl} = useContext(authDataContext);
    const {userData,setUserData} = useContext(userDataContext);
    const [isOpen,setIsOpen] = useState(false);
    const navigate = useNavigate();
     const handleLogout = async () => {
          try {
            await axios.get(serverUrl + "/api/auth/signout", { withCredentials: true });
            
            // Clear user data
            setUserData(null);
            // Optional: clear other global contexts if needed
            // fetchAdminData(null); 
            //toast.success("Logged out successfully");
            navigate("/login");
          } catch (err) {
            console.error(err);
            //toast.error("Logout failed");
          }
        };
  return (
    // <>
    // {/* Hamburger Button (Mobile Only) */}
    //   <div className="md:hidden flex items-center justify-between p-4 bg-white shadow">
    //     {/* <img src="/logo.jpg" alt="Logo" className="w-4/5 h-8 object-cover" /> */}
    //     <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Sidebar">
    //       <svg
    //         className="w-6 h-6 text-blue-900"
    //         fill="none"
    //         stroke="currentColor"
    //         viewBox="0 0 24 24"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         {isOpen ? (
    //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    //         ) : (
    //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    //         )}
    //       </svg>
    //     </button>
    //   </div>

    //   {/* Overlay (Mobile) */}
    //   {isOpen && (
    //     <div
    //       className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
    //       onClick={() => setIsOpen(false)}
    //     ></div>
    //   )}

    //   {/* Sidebar */}
    //    <aside
    //     className={`fixed z-40 top-0 left-0 h-full w-64 bg-[rgb(1,1,93)] text-white transform ${
    //       isOpen ? 'translate-x-0' : '-translate-x-full'
    //     } md:translate-x-0 transition-transform duration-300 ease-in-out md:static md:h-auto md:w-64`}
    //   >
    //      <div className="logoImg px-4 py-4">
    //           <img src="/logo.jpg" alt="" className='w-full h-8 object-cover'/>
    //          </div>
    //           <nav className="space-y-3 flex flex-col font-medium">
    //             <a href="#" className="active:bg-black p-2 rounded flex items-center space-x-2">
    //               <FaMoneyBillWave />
    //               <span>Fees</span>
    //             </a>
    //             <a href="#" className="active:bg-black p-2 rounded flex items-center space-x-2">
    //               <FaFileInvoice />
    //               <span>Expenses</span>
    //             </a>
    //             <a href="#" className="active:bg-black p-2 rounded flex items-center space-x-2">
    //               <FaUserTie />
    //               <span>Salaries</span>
    //             </a>
    //             <a href="#" className="active:bg-black p-2 rounded flex items-center space-x-2">
    //               <FaChartBar />
    //               <span>Reports</span>
    //             </a>
    //              <button className="bg-red-500 p-2 rounded flex items-center space-x-2" onClick={handleLogout}>Logout</button>
    //           </nav>
    //         </aside>
    //         </>



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
  {/* <aside
    className={`fixed z-40 top-0 left-0 h-full w-64 bg-[rgb(1,1,93)] text-white transform ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    } md:translate-x-0 transition-transform duration-300 ease-in-out md:static md:h-auto md:w-64`}
  >
    <div className="bg-white p-4">
      <img src="/logo.jpg" alt="Logo" className="w-full h-8 object-cover" />
    </div>
    <ul className="p-4 space-y-3 font-medium text-white">
      <li className="active:text-[rgb(193,151,11)] rounded-xl p-2 flex items-center space-x-2">
        <FaMoneyBillWave />
        <a href="#">Fees</a>
      </li>
      <li className="active:text-[rgb(193,151,11)] rounded-xl p-2 flex items-center space-x-2">
        <FaFileInvoice />
        <a href="#">Expenses</a>
      </li>
      <li className="active:text-[rgb(193,151,11)] rounded-xl p-2 flex items-center space-x-2">
        <FaUserTie />
        <a href="#">Salaries</a>
      </li>
      <li className="active:text-[rgb(193,151,11)] rounded-xl p-2 flex items-center space-x-2">
        <FaChartBar />
        <a href="#">Reports</a>
      </li>
       <li className="active:text-[rgb(193,151,11)] p-2 rounded-xl">
            <Link to="/student/chat">💬 Chat</Link>
          </li>
      <li>
        <button
          onClick={handleLogout}
          className="text-[rgb(193,151,11)] active:text-[rgb(193,151,11)] p-2 rounded-xl w-full text-left flex items-center space-x-2"
        >
          <span>🚪</span>
          <span>Logout</span>
        </button>
      </li>
    </ul>
  </aside> */}

<aside
  className={`fixed z-40 top-0 left-0 h-full w-64 bg-[rgb(1,1,93)] text-white transform ${
    isOpen ? 'translate-x-0' : '-translate-x-full'
  } md:translate-x-0 transition-transform duration-300 ease-in-out md:static md:h-auto md:w-64`}
>
  <div className="bg-white p-4">
    <img src="/logo.jpg" alt="Logo" className="w-full h-8 object-cover" />
  </div>
  <ul className="p-4 space-y-3 font-medium">
    <li>
      <NavLink
        to="/fees"
        className={({ isActive }) =>
          `p-2 rounded-xl flex items-center space-x-2 ${
            isActive
              ? 'bg-slate-100 text-[rgb(193,151,11)]'
              : 'text-white hover:text-[rgb(193,151,11)]'
          }`
        }
      >
        <FaMoneyBillWave />
        <span>Fees</span>
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/expenses"
        className={({ isActive }) =>
          `p-2 rounded-xl flex items-center space-x-2 ${
            isActive
              ? 'bg-slate-100 text-[rgb(193,151,11)]'
              : 'text-white hover:text-[rgb(193,151,11)]'
          }`
        }
      >
        <FaFileInvoice />
        <span>Expenses</span>
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/salaries"
        className={({ isActive }) =>
          `p-2 rounded-xl flex items-center space-x-2 ${
            isActive
              ? 'bg-slate-100 text-[rgb(193,151,11)]'
              : 'text-white hover:text-[rgb(193,151,11)]'
          }`
        }
      >
        <FaUserTie />
        <span>Salaries</span>
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/reports"
        className={({ isActive }) =>
          `p-2 rounded-xl flex items-center space-x-2 ${
            isActive
              ? 'bg-slate-100 text-[rgb(193,151,11)]'
              : 'text-white hover:text-[rgb(193,151,11)]'
          }`
        }
      >
        <FaChartBar />
        <span>Reports</span>
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/student/chat"
        className={({ isActive }) =>
          `p-2 rounded-xl flex items-center space-x-2 ${
            isActive
              ? 'bg-slate-100 text-[rgb(193,151,11)]'
              : 'text-white hover:text-[rgb(193,151,11)]'
          }`
        }
      >
        <span>💬 Chat</span>
      </NavLink>
    </li>
    <li>
      <button
        onClick={handleLogout}
        className="text-[rgb(193,151,11)] p-2 rounded-xl w-full text-left flex items-center space-x-2"
      >
        <span>🚪</span>
        <span>Logout</span>
      </button>
    </li>
  </ul>
</aside>
</>
  )
}

export default AccountantSidebar
