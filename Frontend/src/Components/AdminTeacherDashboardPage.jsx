import React, { useContext, useEffect, useState } from 'react'
import AdminLayout from './AdminLayout'
import { adminDataContext } from '../Context-Api/AdminContext'
import { authDataContext } from '../Context-Api/AuthContext'
import { userDataContext } from '../Context-Api/UserContext'
const AdminTeacherDashboardPage = () => {
    const {fetchAdminData,adminData} = useContext(adminDataContext);
    const {sessions = []} = adminData?.admin || [];
   // const [sessionName,setSessionName] = useState({startDate:"",endDate:""});

    useEffect(()=>{
     if(sessions.length > 0){
        fetchAdminData();
     }
    },[fetchAdminData])
  return (
    <AdminLayout adminName='Bright Future'>
              <main
  className="flex-1 p-6 pt-20 transition-all duration-300  md:ml-64 ml-0"
>
 <div className="flex flex-col gap-3">
  <div className="bg-grey headingSchooName">
<h1>Bright Future Public High School {`${new Date(sessions.startDate.toLocaleDateString() || "2027")} - ${new Date(sessions.endDate.toLocaleDateString() || "2045")}`}</h1>
  </div>
      </div>
      </main>
    </AdminLayout>
  )
}

export default AdminTeacherDashboardPage
