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
            <aside className="bg-[rgb(1,1,93)] shadow-md w-full md:w-64 p-5 space-y-4">
              <div className="logoImg px-4 py-4 bg-white">
<img src="/logo.jpg" alt="" className='w-4/5 h-8 object-cover'/>
              </div>
              <ul className="space-y-2 text-white font-medium">
                <li className="hover:text-black"><a href="#">Dashboard</a></li>
                <li className="hover:text-black"><a href="#">Assignments</a></li>
                <li className="hover:text-black"><a href="#">Grades</a></li>
                <Link
                      to={`/${userData.role}/${userData.name}/update/password`}
                      className="text-sm lg:text-base font-medium block  hover:text-black"
                    >
                      Reset Password
                    </Link>
                <Link to="/student/profile" className="">Profile </Link>
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

export default StudentSidebar
