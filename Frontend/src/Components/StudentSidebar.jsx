import React from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userDataContext } from '../Context-Api/UserContext'
import { useState } from 'react'
import { useEffect } from 'react'
import { authDataContext } from '../Context-Api/AuthContext'
const StudentSidebar = () => {
  const {serverUrl} = useContext(authDataContext);
  const {userData,setUserData} = useContext(userDataContext);
  const [loading,setLoading] = useState(true);
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
  useEffect(()=>{
if(userData){
  setLoading(false);
}
  },[userData])
if(loading) return <p>Loading ...</p>
  return (
            <aside className="bg-white shadow-md w-full md:w-64 p-5 space-y-4">
              <h2 className="text-2xl font-bold text-blue-600">Student Panel</h2>
              <ul className="space-y-2 text-gray-700 font-medium">
                <li className="hover:text-blue-500"><a href="#">Dashboard</a></li>
                <li className="hover:text-blue-500"><a href="#">Assignments</a></li>
                <li className="hover:text-blue-500"><a href="#">Grades</a></li>
                <Link
                      to={`/${userData.role}/${userData.name}/update/password`}
                      className="text-sm lg:text-base font-medium block text-blue-600 hover:underline"
                    >
                      Reset Password
                    </Link>
                <Link to="/student/profile" className="hover:text-blue-500">Profile </Link>
                   <button
  onClick={handleLogout}
  className="text-red-700 cursor-pointer hover:text-blue-500 bg-transparent border-none p-0"
>
  Logout
</button>
              </ul>
            </aside>
  )
}

export default StudentSidebar
