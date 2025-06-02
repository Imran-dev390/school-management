import React, { useContext, useEffect, useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { authDataContext } from "../Context-Api/AuthContext";
import axios from "axios";
import { userDataContext } from "../Context-Api/UserContext";
import { ToastContainer, toast } from 'react-toastify';
import { adminDataContext } from "../Context-Api/AdminContext";
import gsap from "gsap";
const Home = () => {
  const [user,setUser] = useState("");
    const img = "https://educloud.app/lms/src/erp/smp_i3.png";
   const {serverUrl} = useContext(authDataContext);
   const imgRef = useRef(null);
   const {userData,setUserData} = useContext(userDataContext);
   const [username,setUsername] = useState(null);
  const {name,role} = userData;
  console.log("the current user Role is",typeof role);
  console.log("check its true",role === "Accountant");
const {fetchAdminData} = useContext(adminDataContext);
   const navigate = useNavigate();
   console.log("userData at home",userData);
   const handleLogout = async ()=>{
     try{
         let result = await axios.get(serverUrl+"/auth/signout",{withCredentials:true});
        await setUserData(result.data);
         navigate("/login");
     } catch(err){
       console.log(err.message);
     }
   }
   
  //  useEffect(()=>{
  //   fetchAdminData();
  //  },[userData])
  useEffect(() => {
    if (userData?.role === "Admin") {
      fetchAdminData();
    }
  }, [userData]);

  // useEffect(()=>{
  //   gsap.fromTo(".main",{
  //     x:"-50",
  //     y:"-50",
  //     })
  // },[])
  
useEffect(()=>{
gsap.to(imgRef.current,{
  rotate:"360deg",
  duration:0.9,
})
},[])
  return (
      <>
      <header className="bg-white  text-black shadow-2xl border-b-slate-300 border-[1px]">
        <div  className="max-w-7xl main  mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">MeriTaleem</h1>
          <nav className="space-x-6">
            <a href="#home" className="text-gray-700 hover:text-blue-500">Home</a>
            <a href="#feat" className="text-gray-700 hover:text-blue-500">Features</a>
            {userData ? "" : 
 <Link to="/login" className="text-gray-700 hover:text-blue-500">Login</Link>
            }
 {/* <a onClick={handleLogout} href="" className="text-red-700 cursor-pointer hover:text-blue-500">Logout</a> 
 {userData && (
  <Link
    to={
      role === "Admin"
        ? "/admin/dash"
        : role === "Student"
        ? "/student/dash"
        : "/teacher/dash"
    }
    className="text-gray-700 hover:text-blue-500"
  >
    Dashboard
  </Link>
)} */}

<a onClick={handleLogout} href="" className="text-red-700 cursor-pointer hover:text-blue-500">
  Logout
</a>

{/*{userData && (
  <Link
    to={
      role === "Admin"
        ? "/admin/dash"
        : role === "Student"
        ? "/student/dash"
        : role === "Accountant"
        ? "/accountant/dash"
        : "/teacher/dash"
    }
    className="text-gray-700 hover:text-blue-500"
  >
    Dashboard
  </Link>
)}*/}



{userData && (
  <Link
    to={
      role === "Admin"
        ? "/admin/dash"
        : role === "Student"
        ? "/student/dash"
        : role === "Accountant"
        ? "/accountant/dash"
        : "/teacher/dash"
    }
    className="text-gray-700 hover:text-blue-500"
  >
    Dashboard
  </Link>
)}



          </nav>
        </div>
      </header>
      <section  id="home" className="bg-white  py-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 mt-10 md:mt-0">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Welcome {role} {name} to Meritaleem School Management System
            </h2>
            <p className="text-gray-600 mb-6 text-xl">
              Manage students, staff, grades, and more with a smart, secure, and intuitive platform 
              Our Platform Provides Effieciency for a Student or Teacher or Parent Students Learn Advance.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Get Started
            </button>
          </div>
          <div className="md:w-1/2">
            <img
             ref={imgRef} src={img}
              alt="Smart School AI"
              className="rounded shadow-lg"
            />
          </div>
        </div>
      </section><hr/>
      <section id="feat" className="bg-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-semibold mb-12 text-gray-800">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded shadow">
              <h4 className="text-xl font-semibold mb-2">Student Management</h4>
              <p className="text-gray-600">Enroll, track, and manage student data with ease.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h4 className="text-xl font-semibold mb-2">Attendance Tracking</h4>
              <p className="text-gray-600">Mark and review attendance records efficiently.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h4 className="text-xl font-semibold mb-2">Exam & Grade Reports</h4>
              <p className="text-gray-600">Generate report cards and track academic performance.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-blue-600 text-white py-6 mt-10">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <p>&copy; 2025 SmartSchool. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#" className="hover:underline">Contact</a>
            <a href="#" className="hover:underline">Privacy</a>
          </div>
        </div>
          <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} theme="colored" />
      </footer>
      </>
  );
};

export default Home;
