import React, { useContext } from 'react'
import { authDataContext } from '../Context-Api/AuthContext';
import axios from 'axios';
import { userDataContext } from '../Context-Api/UserContext';
import { useNavigate } from 'react-router-dom';
import { FaMoneyBillWave, FaFileInvoice, FaUserTie, FaChartBar } from "react-icons/fa";
const AccountantSidebar = () => {
    const {serverUrl} = useContext(authDataContext);
    const {userData,setUserData} = useContext(userDataContext);
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
    <div>
       <div className=" text-white bg-[rgb(1,1,93)] w-64 min-h-screen p-5 fixed">
         <div className="logoImg px-4 py-4">
              <img src="/logo.jpg" alt="" className='w-full h-8 object-cover'/>
             </div>
              <nav className="flex flex-col justify-start items-center space-y-4 text-lg">
                <a href="#" className="hover:bg-black p-2 rounded flex items-center space-x-2">
                  <FaMoneyBillWave />
                  <span>Fees</span>
                </a>
                <a href="#" className="hover:bg-black p-2 rounded flex items-center space-x-2">
                  <FaFileInvoice />
                  <span>Expenses</span>
                </a>
                <a href="#" className="hover:bg-black p-2 rounded flex items-center space-x-2">
                  <FaUserTie />
                  <span>Salaries</span>
                </a>
                <a href="#" className="hover:bg-black p-2 rounded flex items-center space-x-2">
                  <FaChartBar />
                  <span>Reports</span>
                </a>
                 <button className="bg-red-500 p-2 rounded" onClick={handleLogout}>Logout</button>
              </nav>
            </div>
    </div>
  )
}

export default AccountantSidebar
