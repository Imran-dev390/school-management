import React, { useContext, useEffect, useRef, useState } from "react";
import Register from "./Components/Register";
import Login from "./Components/Signin";
import Admin from "./Components/Admin";
import Logout from "./Components/Logout";
//import Student from "./Components/student";
import Home from "./Components/Home";
import { Routes,Route, Navigate, useLocation } from "react-router-dom";
import  { userDataContext } from "./Context-Api/UserContext";
import SignupForm from "./Components/SignupForm";
import StudentDashboard from "./Components/StudentDashboard";
import TeacherDashboard from "./Components/TeacherDashboard";
import AdminDashboard from "./Components/AdminDashboard";
import AddTeacher from "./Components/AddTeacher";
import AddStudent from "./Components/AddStudent";
import ClassRegistrationForm from "./Components/ClassRegistrationForm";
import { adminDataContext } from "./Context-Api/AdminContext";
import StudentCard from "./Components/StudentCard";
import { Sidebar } from "./Components/Sidebar";
import TeachersCard from "./Components/TeachersCard";
import AddSubjects from "./Components/AddSubjects";
import CllassCard from "./Components/CllassCard";
import AddSession from "./Components/AddSession";
import StudentProfile from "./Components/StudentProfile";
//import Login from "./Components/Login";
import gsap from "gsap"
import AddStaff from "./Components/AddStaff";
import StaffCard from "./Components/StaffCard";
import AccountantDashboard from "./Components/AccountantDashboard";
import ClassTimeTable from "./Components/AddTimetable";
import AddExamSchedule from "./Components/AddExamSchedule";
import AddFeeVoucher from "./Components/Feevoucher";
import MarkAttendance from "./Components/MarkAttendance";
import TeacherProfile from "./Components/TeacherProfile";
import UpdatePasswordForm from "./Components/UpdatePasswordForm";
function App() {
    const mainRef  = useRef(null);
    const ranOnce = useRef(false);
    const location = useLocation();
const isHomePage = location.pathname === "/";
  const [recentActivity,setRecentActivity] = useState([{
    teacherCreated:"",
    classesCreated:"",
    subjectAdded:"",
    promotedStudents:"",
    teacherUpdated:"",
    studentCreated:"",
    studentUpdated:"",
    SessionStarted:"",
    
  }]);
  const [issignup,SetSignUp] = useState(true);
  const  {fetchAdminData,adminData} = useContext(adminDataContext); 
  const {userData} = useContext(userDataContext);
  //const {role} =   userData;
 // console.log(userData.avatar)
//  useEffect(()=>{

//  },[recentActivity])
 const role = userData?.role;
// console.log(userData)
// console.log("userData:", userData);
//console.log("role:", role);
// useEffect(()=>{
//   if (!isHomePage) return; // Prevent reruns
//   //ranOnce.current = true;
//   gsap.fromTo(
//     mainRef.current,
//     { scale: 0.3, opacity: 1,duration:3.6},
//     {
//       scale: 1,
//       opacity: 1,
//       duration: 3.6,
//       ease: "power3.out",
//     }
//   );
//   if(adminData && adminData.length > 0){
//     SetSignUp(false);
//   fetchAdminData();
//   }
// },[isHomePage])
useEffect(() => {
  fetchAdminData(); // Always fetch to stay updated

  if (!isHomePage) return;

  gsap.fromTo(
    mainRef.current,
    { scale: 0.3, opacity: 1, duration: 3.6 },
    {
      scale: 1,
      opacity: 1,
      duration: 3.6,
      ease: "power3.out",
    }
  );
}, [isHomePage, fetchAdminData]);

  return (
    <>
    <div className="main min-h-screen w-full  bg-zinc-800s" ref={mainRef}>
   <Routes>
      <Route path="/" element={userData ? <Home/> : <Navigate to="/login"/>}/>
    <Route path="/login" element={userData ? <Navigate to="/"/> :<Login/>}/>
    <Route path="/register" element={adminData && adminData.length > 0 ? <Navigate to="/login" /> : <SignupForm />} />

    {/* <Route path="/register" element={userData && role === "Admin" && userData.length > 0 ? <Navigate to="/"/>:<SignupForm/>}/> */}
    <Route path="/logout" element={userData ? <Logout/>:<Navigate to= "/register"/>}/>
        {/* Student Dashboard Route */}
 
 
 
 
 
  <Route
    path="/student/dash"
    element={
      userData ? (
        role === "Student" ? (
          <StudentDashboard />
        ) : (
          <Navigate to="/" /> // or "/teacher/dash"
        )
      ) : (
        <Navigate to="/login" />
      )
    }
  />
  <Route
    path="/student/profile"
    element={
      userData ? (
        role === "Student" ? (
          <StudentProfile/>
        ) : (
          <Navigate to="/" /> // or "/teacher/dash"
        )
      ) : (
        <Navigate to="/login" />
      )
    }
  />






 <Route
    path="/teacher/profile"
    element={
      userData ? (
        role === "Teacher" ? (
          <TeacherProfile/>
        ) : (
          <Navigate to="/" /> // or "/teacher/dash"
        )
      ) : (
        <Navigate to="/login" />
      )
    }
  />

{userData &&
<Route path={`${userData.role}/${userData.name}/update/password`} element={<UpdatePasswordForm/>}/>
 }




<Route
  path="/teacher/dash"
  element={
    userData ? (
      role === "Teacher" ? (
        <TeacherDashboard />
      ) : (
        <Navigate to="/" />
      )
    ) : (
      <Navigate to="/login" />
    )
  }
/> 

<Route
  path="/admin/dash"
  element={
    userData ? (
      role === "Admin" ? (
        <AdminDashboard recentActivity={recentActivity} setRecentActivity={setRecentActivity}/>
      ) : (
        <Navigate to="/" />
      )
    ) : (
      <Navigate to="/login" />
    )
  }
/>



{userData &&
  <Route path="/admin/add-teacher" recentActivity={recentActivity}   setRecentActivity={setRecentActivity} element={role==="Admin" ? <AddTeacher/>:<Navigate to="/login"/>}/>
}
{userData &&
  <Route path="/admin/add-staff" recentActivity={recentActivity}   setRecentActivity={setRecentActivity} element={role==="Admin" ? <AddStaff/>:<Navigate to="/login"/>}/>
}
{userData &&
  <Route path="/admin/add-subjects" recentActivity={recentActivity}  setRecentActivity={setRecentActivity} element={role==="Admin" ? <AddSubjects/>:<Navigate to="/login"/>}/>
}
{userData &&
   <Route path="/admin/add-student" recentActivity={recentActivity}   setRecentActivity={setRecentActivity} element={role==="Admin" ? <AddStudent/> : <Navigate to="/login"/>} />
}
{userData &&
   <Route path="/admin/add-class" recentActivity={recentActivity}  setRecentActivity={setRecentActivity} element={role==="Admin" ? <ClassRegistrationForm/> : <Navigate to="/login"/>} />
}
{userData &&
<Route path="/admin/add-session" recentActivity={recentActivity}  setRecentActivity={setRecentActivity} element={role === "Admin" ?  <AddSession/> : <Navigate to="/login" />} />
}
<Route
          path="/admin/students"
            element={
             userData && role === 'Admin' ? (
                  <StudentCard />
              ) : (
                <Navigate to="/login" />
              )
            }
          />

<Route
          path="/admin/staff"
            element={
             userData && role === 'Admin' ? (
                  <StaffCard />
              ) : (
                <Navigate to="/login" />
              )
            }
          />

{userData &&
<Route path="/Add/Class/Timetable"  recentActivity={recentActivity}  setRecentActivity={setRecentActivity} element={role === "Admin" ?  <ClassTimeTable/> : <Navigate to="/login" />} />
}
<Route
  path="/accountant/dash"
  element={
    userData ? (
      role === "Accountant" ? (
        <AccountantDashboard />
      ) : (
        <Navigate to="/" />
      )
    ) : (
      <Navigate to="/login" />
    )
  }
/>
{userData &&
<Route path="/Mark/Attendance" element={userData.role === "Teacher" ? <MarkAttendance/> : <Navigate to="/login"/>}/>
}
{userData &&
<Route path="/Add/Fee/Voucher" element={userData.role === "Admin" ? <AddFeeVoucher/> : <Navigate to="/login"/>}/>
}
{userData &&
<Route path="/Add/ExamSchedule" element={ userData.role === "Admin" ?
  <AddExamSchedule/> : <Navigate to="/login"/>}/>
}
<Route
          path="/admin/classes"
            element={
             userData && role === 'Admin' ? (
                  <CllassCard/>
              ) : (
                <Navigate to="/login" />
              )
            }
          />





   <Route
          path="/admin/teachers"
            element={
             userData && role === 'Admin' ? (
                  <TeachersCard/>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
   </Routes>
   </div>
   </>
  )
}

export default App
