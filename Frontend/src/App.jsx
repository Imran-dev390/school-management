import React, { useContext, useEffect, useState } from "react";
import Register from "./Components/Register";
import Login from "./Components/Signin";
import Admin from "./Components/Admin";
import Logout from "./Components/Logout";
//import Student from "./Components/student";
import Home from "./Components/Home";
import { Routes,Route, Navigate } from "react-router-dom";
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
//import Login from "./Components/Login";

function App() {
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
  const {userData} = useContext(userDataContext);
  //const {role} =   userData;
 // console.log(userData.avatar)
 useEffect(()=>{

 },[recentActivity])
 const role = userData?.role;
// console.log(userData)
 console.log("userData:", userData);
console.log("role:", role);
  return (
    <>
   <Routes>
      <Route path="/" element={userData ? <Home/> : <Navigate to="/login"/>}/>
    <Route path="/login" element={userData ? <Navigate to="/"/> :<Login/>}/>
    <Route path="/register" element={userData ? <Navigate to="/"/>:<SignupForm/>}/>
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
   </>
  )
}

export default App
