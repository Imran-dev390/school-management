import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userDataContext } from '../Context-Api/UserContext'
import axios from 'axios';
import { authDataContext } from '../Context-Api/AuthContext';

const TeacherSidebar = () => {
  const {userData,setUserData} = useContext(userDataContext);
  const {serverUrl} = useContext(authDataContext);
  const [Incharge,setIncharge] = useState(false);
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
       <aside className="bg-[rgb(1,1,93)] w-full md:w-64 shadow-lg p-5">
             <div className="logoImg px-4 py-4">
              <img src="/logo.jpg" alt="" className='w-4/5 h-8 object-cover'/>
             </div>
              <ul className="space-y-4 flex  flex-col  text-white font-medium">
                <Link to="/teacher/dash" className='hover:text-black cursor-pointer'>Dashboard</Link>
               {Incharge &&
                <Link to="/Mark/Attendance" className="hover:text-black cursor-pointer">
                Mark Attendance
                </Link>
}
                <Link className="hover:text-black cursor-pointer">My Classes</Link>
                <Link className="hover:text-black cursor-pointer">Assignments</Link>
                <Link className="hover:text-black cursor-pointer">Students</Link>
                 <Link to="/teacher/announcements">Announcements</Link>
                <Link to="/teacher/profile" className="hover:text-black cursor-pointer">Profile</Link>
                <button
  onClick={handleLogout}
  className="text-red-700 cursor-pointer hover:text-black bg-transparent border-none p-0"
>
  Logout
</button>
              </ul>
            </aside>
  )
}

export default TeacherSidebar
