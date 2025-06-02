import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { userDataContext } from '../Context-Api/UserContext'

const TeacherSidebar = () => {
  const {userData} = useContext(userDataContext);
  const [Incharge,setIncharge] = useState(false);
  useEffect(()=>{
     if(userData.role === "Teacher" && userData.assignedClass[0].incharge === true){
      setIncharge(true);
      console.log("userData teacher incharge is true in if condition",userData.assignedClass[0].incharge);
     }
  },[userData])
  return (
       <aside className="bg-white w-full md:w-64 shadow-lg p-5">
              <h2 className="text-2xl font-bold text-blue-600 mb-6">Teacher Panel</h2>
              <ul className="space-y-4 flex  flex-col  text-gray-700 font-medium">
                <Link to="/teacher/dash" className='hover:text-blue-500 cursor-pointer'>Dashboard</Link>
               {Incharge &&
                <Link to="/Mark/Attendance" className="hover:text-blue-500 cursor-pointer">
                Mark Attendance
                </Link>
}
                <Link className="hover:text-blue-500 cursor-pointer">My Classes</Link>
                <Link className="hover:text-blue-500 cursor-pointer">Assignments</Link>
                <Link className="hover:text-blue-500 cursor-pointer">Students</Link>
                 <Link to="/teacher/announcements">Announcements</Link>
                <Link to="/teacher/profile" className="hover:text-blue-500 cursor-pointer">Profile</Link>
              </ul>
            </aside>
  )
}

export default TeacherSidebar
