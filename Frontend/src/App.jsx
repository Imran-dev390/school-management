// import React, { useContext, useEffect, useRef, useState } from "react";
// import Register from "./Components/Register";
// import Login from "./Components/SignIIn";
// import Admin from "./Components/Admin";
// import Logout from "./Components/Logout";
// //import Student from "./Components/student";
// import Home from "./Components/Home";
// import { Routes,Route, Navigate, useLocation, useNavigate } from "react-router-dom";
// import  { userDataContext } from "./Context-Api/UserContext";
// import SignupForm from "./Components/SignupForm";
// import StudentDashboard from "./Components/StudentDashboard";
// import TeacherDashboard from "./Components/TeacherDashboard";
// import AdminDashboard from "./Components/AdminDashboard";
// import AddTeacher from "./Components/AddTeacher";
// import AddStudent from "./Components/AddStudent";
// import ClassRegistrationForm from "./Components/ClassRegistrationForm";
// import { adminDataContext } from "./Context-Api/AdminContext";
// import StudentCard from "./Components/StudentCard";
// import { Sidebar } from "./Components/Sidebar";
// import TeachersCard from "./Components/TeachersCard";
// import AddSubjects from "./Components/AddSubjects";
// import CllassCard from "./Components/CllassCard";
// import AddSession from "./Components/AddSession";
// import StudentProfile from "./Components/StudentProfile";
// //import Login from "./Components/Login";
// import gsap from "gsap"
// import AddStaff from "./Components/AddStaff";
// import StaffCard from "./Components/StaffCard";
// import AccountantDashboard from "./Components/AccountantDashboard";
// import ClassTimeTable from "./Components/AddTimetable";
// import AddExamSchedule from "./Components/AddExamSchedule";
// import AddFeeVoucher from "./Components/Feevoucher";
// import MarkAttendance from "./Components/MarkAttendance";
// import TeacherProfile from "./Components/TeacherProfile";
// import UpdatePasswordForm from "./Components/UpdatePasswordForm";
// import axios from "axios";
// import { authDataContext } from "./Context-Api/AuthContext";

// // In App.js or separate file
// const RoleRedirect = () => {
//   const { userData } = useContext(userDataContext);
//   const navigate = useNavigate();
//   useEffect(() => {
//     if (!userData) {
//       navigate("/login");
//     } else {
//       switch (userData.role) {
//         case "Admin":
//           navigate("/admin/dash");
//           break;
//         case "Teacher":
//           navigate("/teacher/dash");
//           break;
//         case "Student":
//           navigate("/student/dash");
//           break;
//         case "Accountant":
//           navigate("/accountant/dash");
//           break;
//         default:
//           navigate("/login");
//       }
//     }
//   }, [userData, navigate]);

//   return <p>Loading...</p>; // Or a loading spinner while redirecting
// };

// function App() {
//   //const navigate = useNavigate();
//   const {serverUrl} = useContext(authDataContext);
//     const location = useLocation();
// const isHomePage = location.pathname === "/";
//   const [recentActivity,setRecentActivity] = useState([{
//     teacherCreated:"",
//     classesCreated:"",
//     subjectAdded:"",
//     promotedStudents:"",
//     teacherUpdated:"",
//     studentCreated:"",
//     studentUpdated:"",
//     SessionStarted:"", 
//   }]);
//    const {userData,setUserData} = useContext(userDataContext);
//   const [issignup,SetSignUp] = useState(true);
//   const  {fetchAdminData,adminData} = useContext(adminDataContext); 
//   //const {role} =   userData;
//  // console.log(userData.avatar)
// //  useEffect(()=>{

// //  },[recentActivity])
//  const role = userData?.role;
// // console.log(userData)
// // console.log("userData:", userData);
// //console.log("role:", role);
// // useEffect(()=>{
// //   if (!isHomePage) return; // Prevent reruns
// //   //ranOnce.current = true;
// //   gsap.fromTo(
// //     mainRef.current,
// //     { scale: 0.3, opacity: 1,duration:3.6},
// //     {
// //       scale: 1,
// //       opacity: 1,
// //       duration: 3.6,
// //       ease: "power3.out",
// //     }
// //   );
// //   if(adminData && adminData.length > 0){
// //     SetSignUp(false);
// //   fetchAdminData();
// //   }
// // },[isHomePage])
// useEffect(() => {
//   fetchAdminData(); // Always fetch to stay updated
//   if (!isHomePage) return;
// }, [isHomePage, fetchAdminData]);

//   return (
//     <>
//     <div className="main min-h-screen w-full">
//    {/* <Routes>
//       <Route
//   path="/"
//   element={
//     userData ? (
//       userData.role === "Admin" ? (
//         <Navigate to="/admin/dash" />
//       ) : userData.role === "Teacher" ? (
//         <Navigate to="/teacher/dash" />
//       ) : userData.role === "Student" ? (
//         <Navigate to="/student/dash" />
//       ) : userData.role === "Accountant" ? (
//         <Navigate to="/accountant/dash" />
//       ) : (
//         <Navigate to="/login" />
//       )
//     ) : (
//       <Navigate to="/login" />
//     )
//   }
// /> */}
// <Route path="/" element={<RoleRedirect/>} />

//     <Route path="/login" element={userData ? <Navigate to="/"/> :<Login/>}/>
//     <Route path="/register" element={userData ? <Navigate to="/login" /> : <SignupForm />} /> 

//     {/* <Route path="/register" element={userData && role === "Admin" && userData.length > 0 ? <Navigate to="/"/>:<SignupForm/>}/> */}
//     {/* <Route path="/logout" element={userData ? <Login/>:<Navigate to= "/register"/>}/> */}
//         {/* Student Dashboard Route */}
 
 
 
 
 
//   <Route
//     path="/student/dash"
//     element={
//       userData ? (
//         role === "Student" ? (
//           <StudentDashboard />
//         ) : (
//           <Navigate to="/" /> // or "/teacher/dash"
//         )
//       ) : (
//         <Navigate to="/login" />
//       )
//     }
//   />
//   <Route
//     path="/student/profile"
//     element={
//       userData ? (
//         role === "Student" ? (
//           <StudentProfile/>
//         ) : (
//           <Navigate to="/" /> // or "/teacher/dash"
//         )
//       ) : (
//         <Navigate to="/login" />
//       )
//     }
//   />






//  <Route
//     path="/teacher/profile"
//     element={
//       userData ? (
//         role === "Teacher" ? (
//           <TeacherProfile/>
//         ) : (
//           <Navigate to="/" /> // or "/teacher/dash"
//         )
//       ) : (
//         <Navigate to="/login" />
//       )
//     }
//   />

// {userData &&
// <Route path={`${userData.role}/${userData.name}/update/password`} element={<UpdatePasswordForm/>}/>
//  }




// <Route
//   path="/teacher/dash"
//   element={
//     userData ? (
//       role === "Teacher" ? (
//         <TeacherDashboard />
//       ) : (
//         <Navigate to="/" />
//       )
//     ) : (
//       <Navigate to="/login" />
//     )
//   }
// /> 

// <Route
//   path="/admin/dash"
//   element={
//     userData ? (
//       role === "Admin" ? (
//         <AdminDashboard recentActivity={recentActivity} setRecentActivity={setRecentActivity}/>
//       ) : (
//         <Navigate to="/" />
//       )
//     ) : (
//       <Navigate to="/login" />
//     )
//   }
// />



// {userData &&
//   <Route path="/admin/add-teacher" recentActivity={recentActivity}   setRecentActivity={setRecentActivity} element={role==="Admin" ? <AddTeacher/>:<Navigate to="/login"/>}/>
// }
// {userData &&
//   <Route path="/admin/add-staff" recentActivity={recentActivity}   setRecentActivity={setRecentActivity} element={role==="Admin" ? <AddStaff/>:<Navigate to="/login"/>}/>
// }
// {userData &&
//   <Route path="/admin/add-subjects" recentActivity={recentActivity}  setRecentActivity={setRecentActivity} element={role==="Admin" ? <AddSubjects/>:<Navigate to="/login"/>}/>
// }
// {userData &&
//    <Route path="/admin/add-student" recentActivity={recentActivity}   setRecentActivity={setRecentActivity} element={role==="Admin" ? <AddStudent/> : <Navigate to="/login"/>} />
// }
// {userData &&
//    <Route path="/admin/add-class" recentActivity={recentActivity}  setRecentActivity={setRecentActivity} element={role==="Admin" ? <ClassRegistrationForm/> : <Navigate to="/login"/>} />
// }
// {userData &&
// <Route path="/admin/add-session" recentActivity={recentActivity}  setRecentActivity={setRecentActivity} element={role === "Admin" ?  <AddSession/> : <Navigate to="/login" />} />
// }
// <Route
//           path="/admin/students"
//             element={
//              userData && role === 'Admin' ? (
//                   <StudentCard />
//               ) : (
//                 <Navigate to="/login" />
//               )
//             }
//           />

// <Route
//           path="/admin/staff"
//             element={
//              userData && role === 'Admin' ? (
//                   <StaffCard />
//               ) : (
//                 <Navigate to="/login" />
//               )
//             }
//           />

// {userData &&
// <Route path="/Add/Class/Timetable"  recentActivity={recentActivity}  setRecentActivity={setRecentActivity} element={role === "Admin" ?  <ClassTimeTable/> : <Navigate to="/login" />} />
// }
// <Route
//   path="/accountant/dash"
//   element={
//     userData ? (
//       role === "Accountant" ? (
//         <AccountantDashboard />
//       ) : (
//         <Navigate to="/" />
//       )
//     ) : (
//       <Navigate to="/login" />
//     )
//   }
// />
// {userData &&
// <Route path="/Mark/Attendance" element={userData.role === "Teacher" ? <MarkAttendance/> : <Navigate to="/login"/>}/>
// }
// {userData &&
// <Route path="/Add/Fee/Voucher" element={userData.role === "Admin" ? <AddFeeVoucher/> : <Navigate to="/login"/>}/>
// }
// {userData &&
// <Route path="/Add/ExamSchedule" element={ userData.role === "Admin" ?
//   <AddExamSchedule/> : <Navigate to="/login"/>}/>
// }
// <Route
//           path="/admin/classes"
//             element={
//              userData && role === 'Admin' ? (
//                   <CllassCard/>
//               ) : (
//                 <Navigate to="/login" />
//               )
//             }
//           />





//    <Route
//           path="/admin/teachers"
//             element={
//              userData && role === 'Admin' ? (
//                   <TeachersCard/>
//               ) : (
//                 <Navigate to="/login" />
//               )
//             }
//           />
//    </Routes>
//    </div>
//    </>
//   )
// }

// export default App













































































import React, { useContext, useEffect, useRef, useState } from "react";
import { Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/SignIIn";
import Admin from "./Components/Admin";
import Logout from "./Components/Logout";
import Home from "./Components/Home";
import SignupForm from "./Components/SignupForm";
import StudentDashboard from "./Components/StudentDashboard";
import TeacherDashboard from "./Components/TeacherDashboard";
import AdminDashboard from "./Components/AdminDashboard";
import AddTeacher from "./Components/AddTeacher";
import AddStudent from "./Components/AddStudent";
import ClassRegistrationForm from "./Components/ClassRegistrationForm";
import StudentCard from "./Components/StudentCard";
import TeachersCard from "./Components/TeachersCard";
import AddSubjects from "./Components/AddSubjects";
import CllassCard from "./Components/CllassCard";
import AddSession from "./Components/AddSession";
import StudentProfile from "./Components/StudentProfile";
import AddStaff from "./Components/AddStaff";
import StaffCard from "./Components/StaffCard";
import AccountantDashboard from "./Components/AccountantDashboard";
import ClassTimeTable from "./Components/AddTimetable";
import AddExamSchedule from "./Components/AddExamSchedule";
import AddFeeVoucher from "./Components/Feevoucher";
import MarkAttendance from "./Components/MarkAttendance";
import TeacherProfile from "./Components/TeacherProfile";
import UpdatePasswordForm from "./Components/UpdatePasswordForm";

import { userDataContext } from "./Context-Api/UserContext";
import { adminDataContext } from "./Context-Api/AdminContext";
import { authDataContext } from "./Context-Api/AuthContext";

// ✅ Extracted RoleRedirect to standalone functional component
const RoleRedirect = () => {
  const { userData } = useContext(userDataContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) {
      navigate("/login");
    } else {
      switch (userData.role) {
        case "Admin":
          navigate("/admin/dash");
          break;
        case "Teacher":
          navigate("/teacher/dash");
          break;
        case "Student":
          navigate("/student/dash");
          break;
        case "Accountant":
          navigate("/accountant/dash");
          break;
        default:
          navigate("/login");
      }
    }
  }, [userData, navigate]);
  return null;
};

function App() {
  const { serverUrl } = useContext(authDataContext);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const { userData, setUserData } = useContext(userDataContext);
  const { fetchAdminData, adminData } = useContext(adminDataContext);
  const [recentActivity, setRecentActivity] = useState([
    {
      teacherCreated: "",
      classesCreated: "",
      subjectAdded: "",
      promotedStudents: "",
      teacherUpdated: "",
      studentCreated: "",
      studentUpdated: "",
      SessionStarted: "",
    },
  ]);

  const role = userData?.role;

  useEffect(() => {
    fetchAdminData();
    if (!isHomePage) return;
  }, [isHomePage, fetchAdminData]);

  return (
    <div className="main min-h-screen w-full">
      <Routes>
        <Route path="/" element={<RoleRedirect />} />
        <Route path="/login" element={userData ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={userData ? <Navigate to="/login" /> : <SignupForm />} />

        {/* Student Routes */}
        <Route
          path="/student/dash"
          element={
            userData ? (
              role === "Student" ? <StudentDashboard /> : <Navigate to="/" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/student/profile"
          element={
            userData ? (
              role === "Student" ? <StudentProfile /> : <Navigate to="/" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Teacher Routes */}
        <Route
          path="/teacher/dash"
          element={
            userData ? (
              role === "Teacher" ? <TeacherDashboard /> : <Navigate to="/" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/teacher/profile"
          element={
            userData ? (
              role === "Teacher" ? <TeacherProfile /> : <Navigate to="/" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        {userData && (
          <Route
            path={`${userData.role}/${userData.name}/update/password`}
            element={<UpdatePasswordForm />}
          />
        )}

        {/* Admin Routes */}
        <Route
          path="/admin/dash"
          element={
            userData ? (
              role === "Admin" ? (
                <AdminDashboard
                  recentActivity={recentActivity}
                  setRecentActivity={setRecentActivity}
                />
              ) : (
                <Navigate to="/" />
              )
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {userData && role === "Admin" && (
          <>
            <Route path="/admin/add-teacher" element={<AddTeacher />} />
            <Route path="/admin/add-student" element={<AddStudent />} />
            <Route path="/admin/add-class" element={<ClassRegistrationForm />} />
            <Route path="/admin/add-subjects" element={<AddSubjects />} />
            <Route path="/admin/add-session" element={<AddSession />} />
            <Route path="/admin/add-staff" element={<AddStaff />} />
            <Route path="/admin/students" element={<StudentCard />} />
            <Route path="/admin/staff" element={<StaffCard />} />
            <Route path="/admin/classes" element={<CllassCard />} />
            <Route path="/admin/teachers" element={<TeachersCard />} />
            <Route path="/Add/Class/Timetable" element={<ClassTimeTable />} />
            <Route path="/Add/ExamSchedule" element={<AddExamSchedule />} />
            <Route path="/Add/Fee/Voucher" element={<AddFeeVoucher />} />
          </>
        )}

        {/* Accountant Route */}
        <Route
          path="/accountant/dash"
          element={
            userData ? (
              role === "Accountant" ? <AccountantDashboard /> : <Navigate to="/" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Teacher Tools */}
        {userData && role === "Teacher" && (
          <Route path="/Mark/Attendance" element={<MarkAttendance />} />
        )}
      </Routes>
    </div>
  );
}
export default App;
