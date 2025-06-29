// import React, { useContext, useState, useEffect } from 'react';
// import {
//   FaUserGraduate,
//   FaChalkboardTeacher,
//   FaSchool,
//   FaHistory,
//   FaMoon,
//   FaSun,
//   FaBars,
//   FaTimes,
// } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import { userDataContext } from '../Context-Api/UserContext';
// import { adminDataContext } from '../Context-Api/AdminContext';
// import { Sidebar } from './Sidebar';
// import { FaUserCircle } from 'react-icons/fa'; 


// export default function AdminDashboard({ recentActivity, setRecentActivity }) {
//   const { userData } = useContext(userDataContext);
//   const { adminData, loading,fetchAdminData } = useContext(adminDataContext);
//   const [darkMode, setDarkMode] = useState(false);
//   const [showSidebar, setShowSidebar] = useState(false);

//   useEffect(() => {
//   if (!adminData) {
//     fetchAdminData();
//   }
// }, [adminData, fetchAdminData]);
// if (loading) {
//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       <div className="text-center">
//         <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4 mx-auto"></div>
//         <p className="text-lg font-semibold">Loading dashboard...</p>
//       </div>
//     </div>
//   );
// }

//   const { teachers = [], sessions = [], students = [], classes = [], name } = adminData.admin || {};
//   const toggleDark = () => setDarkMode(!darkMode);
//   const toggleSidebar = () => setShowSidebar(!showSidebar);

//   return (
// //     <div className={`flex min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
// //       {/* Sidebar */}
// //       <div className={`fixed top-0 left-0 z-40 h-full w-64 bg-white dark:bg-gray-800 shadow transform transition-transform duration-300 ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
// //   <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
// // </div>
//   <div className={`flex min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>

//     {/* ✅ Hamburger Toggle Button — Mobile Only */}
//     <button
//       onClick={toggleSidebar}
//       className="md:hidden fixed top-4 left-4 z-50 bg-slate-400 text-black p-2"
//     >
//       <FaBars className="text-xl" />
//     </button>

//     {/* ✅ Sidebar */}
//     <div
//       className={`fixed top-0 left-0 z-40 h-full w-64 bg-white dark:bg-gray-800 shadow transform transition-transform duration-300 ${
//         showSidebar ? 'translate-x-0' : '-translate-x-full'
//       } md:translate-x-0`}
//     >
//       <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
//     </div>
//       {/* Toggle Button */}
//       <button
//   onClick={toggleSidebar}
//   className="fixed top-4  left-4 z-50 bg-slate-400 text-black p-2 rounded"
// >
//   {showSidebar ? <FaTimes /> : <FaBars />}
// </button>
//       {/* Main Content */}
//       {/* <div className="flex-1 ml-0 md:ml-64 p-6 transition-all duration-300"> */}
//       <div className={`flex-1 p-6 transition-all duration-300 ${showSidebar ? 'ml-64' : 'ml-0'}`}>
//         <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8 mb-6 text-center sm:text-left">
//   <h1 className="text-2xl ml-8 sm:text-3xl font-bold">
//     🏫 School Admin {name} Dashboard
//   </h1>
// <div className="profileShowSchoolName w-fit flex items-center gap-1 p-4">
//   <div className="w-14 h-14 rounded-full flex items-center justify-center bg-transparent">
//     <FaUserCircle className="text-4xl" />
//   </div>
//   <h1 className="text-lg font-semibold">Bright Future</h1>
// </div>
// </div>
//         {/* Stats */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
//           {[
//             { icon: <FaUserGraduate />, label: 'Total Students', count: students.length },
//             { icon: <FaChalkboardTeacher />, label: 'Teachers', count: teachers.length },
//             { icon: <FaSchool />, label: 'Classes', count: classes.length },
//             { icon: <FaHistory />, label: 'Sessions', count: sessions.length },
//           ].map(({ icon, label, count }) => (
//             <div key={label} className="bg-white text-black dark:bg-gray-800 shadow-lg rounded-lg p-6 flex items-center space-x-4">
//               <div className="text-3xl text-blue-500">{icon}</div>
//               <div>
//                 <h4 className="text-lg font-semibold">{label}</h4>
//                 <p className="text-xl font-bold">{count}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Actions */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="bg-white dark:bg-gray-800 shadow p-6 rounded-lg">
//             <h2 className="text-xl text-black dark:text-black font-bold mb-4">Quick Actions</h2>
//             <ul className="space-y-4">
//               <Link to="/admin/add-student" className="block p-3  text-black bg-blue-100 dark:bg-blue-700 rounded hover:bg-blue-200 transition">
//                 ➕ Add New Students
//               </Link>
//               <Link to="/admin/add-class" className="block p-3 text-black  bg-blue-100 dark:bg-blue-700 rounded hover:bg-blue-200 transition">
//                 ➕ Add New Class
//               </Link>
//               <Link to="/admin/add-teacher" className="block p-3  text-black bg-blue-100 dark:bg-blue-700 rounded hover:bg-blue-200 transition">
//                 ➕ Register New Teacher
//               </Link>
//               <Link to="/admin/add-staff" className="block p-3  text-black bg-blue-100 dark:bg-blue-700 rounded hover:bg-blue-200 transition">
//                 ➕ Register New Staff
//               </Link>
//               <Link to="/admin/add-subjects" className="block p-3  text-black bg-blue-100 dark:bg-blue-700 rounded hover:bg-blue-200 transition">
//                 ➕ Add New Subjects
//               </Link>
//               <Link to="/admin/add-session" className="block p-3  text-black bg-blue-100 dark:bg-blue-700 rounded hover:bg-blue-200 transition">
//                 ➕ Add New Session
//               </Link>
//                <Link to="/Add/Class/Timetable" className="block p-3  text-black bg-blue-100 dark:bg-blue-700 rounded hover:bg-blue-200 transition">
//                 ➕ Add Class TimeTable
//               </Link>
//                <Link to="/Add/Fee/Voucher" className="block p-3  text-black bg-blue-100 dark:bg-blue-700 rounded hover:bg-blue-200 transition">
//                 ➕ Add Fee Voucher
//               </Link>
//             </ul>
//           </div>

//           <div className="bg-white dark:bg-gray-800  text-black shadow p-6 rounded-lg">
//             <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
//             <ul className="space-y-2">
//               <li>✅ {recentActivity.studentCreated} 4 Students Created</li>
//               <li>📆 {recentActivity.SessionStarted} New Session Started</li>
//               <li>👩‍🏫 {recentActivity.teacherCreated} Teacher Created for Grade 8</li>
//               <li>📚 {recentActivity.classesCreated} Class grade 2 Created </li>
//               <li>✅ {recentActivity.studentUpdated} Student Updated Now</li>
//               <li>✅ {recentActivity.teacherUpdated} Teacher Updated</li>
//               <li>✅ {recentActivity.subjectAdded} Subject Added Successfully</li>
//             </ul>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="mt-12 text-center">
//           <p className="text-sm text-gray-500 dark:text-gray-400">
//             Logged in as: <strong>admin@school.edu</strong> • Role: <strong>Super Admin</strong>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }


















































import React, { useContext, useState, useEffect } from 'react';
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaSchool,
  FaHistory,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { userDataContext } from '../Context-Api/UserContext';

import { adminDataContext } from '../Context-Api/AdminContext';
import { Sidebar } from './Sidebar';
import { FaUserCircle } from 'react-icons/fa';
export default function AdminDashboard({ recentActivity, setRecentActivity }) {
  const { userData } = useContext(userDataContext);
  const [adminName,setName] = useState("Bright Futureees");
  const { adminData, loading, fetchAdminData } = useContext(adminDataContext);
//  const [showSidebar, setShowSidebar] = useState(false);
const [hasUserToggled, setHasUserToggled] = useState(false);

 const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
  if (typeof window !== "undefined") {
    return window.innerWidth >= 768; 
  }
  return true;
});
const handleSidebarToggle = () => {
  setIsSidebarOpen(!isSidebarOpen);
  setHasUserToggled(true); // only set to true once user interacts
};

useEffect(() => {
  function handleResize() {
    if (window.innerWidth >= 768) {
      setIsSidebarOpen(true);  // open sidebar on desktop
    } else {
      setIsSidebarOpen(false); // close sidebar on mobile
    }
  }

  window.addEventListener("resize", handleResize);

  // optional: run on mount to ensure correct state if window size changed
  handleResize();

  return () => window.removeEventListener("resize", handleResize);
}, []);

  useEffect(() => {
    if (!adminData) {
      fetchAdminData();
    }
  }, [adminData,userData,fetchAdminData]);

  // if (loading) {
  //   return (
  //     <div className="min-h-screen">
  //       <div className="img">
  //         <img src="/logo.jpg" alt="" className="w-72 h-24 object-cover">
  //         </img>
  //       </div>
  //       <div className="text-center flex w-full h-full mt-12 items-center justify-center">
  //         <div className="loader flex items-center justify-center ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4 mx-auto"></div>
  //         <p className="text-lg font-semibold">Loading dashboard...</p>
  //       </div>
  //     </div>
  //   );
  // }
// if (loading) {
//   return (
//     // <div className="min-h-screen relative bg-white">
//     //   {/* Top-left logo */}
//     //   <div className="absolute top-4 left-4">
//     //     <img src="/logo.jpg" alt="Logo" className="w-72 h-24 object-cover" />
//     //   </div>

//     //   {/* Centered loader and text */}
//     //   <div className="flex flex-col items-center justify-center h-screen">
//     //     <div className="loader animate-spin ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
//     //     <p className="text-lg font-semibold">Loading dashboard...</p>
//     //   </div>
//     // </div>
//     <div className="relative min-h-screen overflow-hidden bg-white/30 backdrop-blur-md">
//   {/* Background image hidden but still affecting the blur */}
//   <div
//     className="absolute inset-0 bg-center bg-cover"
//     style={{
//       backgroundImage: "url('/splash.jpg')",
//       zIndex: -1,
//       opacity: 0.1, // Low opacity to prevent visibility while allowing blur to work
//       pointerEvents: 'none',
//     }}
//   />

//   {/* Centered bouncing logo */}
//   <div className="flex items-center justify-center min-h-screen z-10">
//     <img
//       src="/logo.jpg"
//       alt="Logo"
//       className="w-72 h-24 object-contain animate-bounce"
//     />
//   </div>
// </div>
//   );
// }

if(loading){
  return (
  <div className="relative min-h-screen w-full overflow-hidden">
    {/* Background image container */}
    <div
    
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/splash.jpg')",
        zIndex: -10,
      }}
    />

    {/* Overlay to apply blur and dim background */}
    <div className="absolute inset-0 bg-white/30 backdrop-blur-md z-0" />

    {/* Centered bouncing logo */}
    <div className="relative z-10 flex items-center justify-center min-h-screen">
      <img
        src="/logo.jpg"
        alt="Logo"
        className="w-[300px] h-auto animate-bounce object-contain"
      />
    </div>
  </div>
)}
// TypeError: Failed to fetch dynamically imported module: 
// Uncaught TypeError: Failed to fetch dynamically imported module: 

  const { teachers = [], sessions = [], students = [], classes = [], name } = adminData.admin || {};
  return (
    <div className='flex min-h-screen bg-gray-100 text-gray-900'>

      {/* ✅ Mobile-only hamburger button */}
       {/* <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 bg-slate-400 text-black p-2"
      >
        {showSidebar ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
      </button>  */}
       {/* Mobile hamburger menu */}
      {/* {!isSidebarOpen &&
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-white border p-2 shadow"
        aria-label="Toggle Sidebar"
      >
        <FaBars className="text-xl text-blue-900" />
      </button>
} */}
      {/* ✅ Sidebar with overlay */}
      {/* {showSidebar && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden`}
          onClick={toggleSidebar}
        ></div>
      )} */}
       {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onToggleSidebar={handleSidebarToggle} setIsOpen={setIsSidebarOpen} adminName={adminName}   hasUserToggled={hasUserToggled}/>
       {/* <div
        className={`fixed top-0 left-0 z-40 h-full w-64 bg-white dark:bg-gray-800 shadow transform transition-transform duration-300 ${
          showSidebar ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      > 
        <Sidebar/>
      </div>  */}
      {/* ✅ Main Content */}
      {/* <main className={`flex-1 p-6 pt-20 md:ml-64 transition-all duration-300`}> */}
      <main
  className={`flex-1 p-6 pt-20 transition-all duration-300 ${
    isSidebarOpen ? "md:ml-64" : "ml-0"
  }`}
>

        {/* Header */}
         {/* <div className="flex flex-row sm:flex-row justify-between items-center gap-4 sm:gap-8 mb-6 text-center sm:text-left">
          {/* <h1 className="text-2xl ml-8 sm:text-md font-bold">
            🏫 School Admin {name} Dashboard
          </h1> */}
          {/* <div className="profileShowSchoolName flex items-center gap-1 p-4 w-fit">
            <div className="w-14 h-14 rounded-full flex items-center justify-center bg-transparent">
              <FaUserCircle className="text-4xl" />
            </div>
            <h1 className="text-lg font-semibold">Bright Future</h1>
          </div> */}
       {/* </div>  */}
       {/* Fixed profile block on the far-left of the page */}
{/* <div className="fixed top-0 right-0  w-fit ml-4 z-40 flex items-start p-4">
  <div className="profileShowSchoolName flex  items-center gap-2">
    <div className="w-14 h-14 rounded-full flex items-center justify-center">
      <FaUserCircle className="text-4xl text-blue-900" />
    </div>
    <h1 className="text-lg font-semibold text-blue-900">Bright Future</h1>
  </div>
</div> */}
{/* <div className="hidden md:flex fixed top-0 right-0 w-fit ml-4 z-40 items-start p-4">
  <div className="profileShowSchoolName flex items-center gap-2">
    <div className="w-14 h-14 rounded-full flex items-center justify-center">
      <FaUserCircle className="text-4xl text-blue-900" />
    </div>
    <h1 className="text-lg font-semibold text-blue-900">Bright Future</h1>
  </div>
</div> */}


       {/* Stats */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { icon: <FaUserGraduate />, label: 'Total Students', count: students.length },
            { icon: <FaChalkboardTeacher />, label: 'Teachers', count: teachers.length },
            { icon: <FaSchool />, label: 'Classes', count: classes.length },
            { icon: <FaHistory />, label: 'Sessions', count: sessions.length },
          ].map(({ icon, label, count }) => (
            <div key={label} className="bg-white text-black dark:bg-gray-800 shadow-lg rounded-lg p-6 flex items-center space-x-4">
              <div className="text-3xl text-blue-500">{icon}</div>
              <div>
                <h4 className="text-lg font-semibold">{label}</h4>
                <p className="text-xl font-bold">{count}</p>
              </div>
            </div>
          ))}
        </div> */}
<div className="flex flex-wrap gap-6 mb-10">
  {[
    { icon: <FaUserGraduate />, label: 'Total Students', count: students.length },
    { icon: <FaChalkboardTeacher />, label: 'Teachers', count: teachers.length },
    { icon: <FaSchool />, label: 'Classes', count: classes.length },
    { icon: <FaHistory />, label: 'Sessions', count: sessions.length },
  ].map(({ icon, label, count }) => (
    <div key={label} className="bg-white text-black dark:bg-gray-800 shadow-lg rounded-lg p-6 flex items-center space-x-4 w-full sm:w-[45%] lg:w-[22%]">
      <div className="text-3xl text-blue-500">{icon}</div>
      <div>
        <h4 className="text-lg font-semibold">{label}</h4>
        <p className="text-xl font-bold">{count}</p>
      </div>
    </div>
  ))}
</div>

        {/* Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 shadow p-6 rounded-lg">
            <h2 className="text-xl text-black dark:text-black font-bold mb-4">Quick Actions</h2>
            <ul className="space-y-4">
              <Link to="/admin/add-student" className="block p-3  text-black bg-blue-100 dark:bg-blue-700 rounded hover:bg-blue-200 transition">
              ➕ Add New Students
              </Link>
              <Link to="/admin/add-class" className="block p-3 text-black  bg-blue-100 dark:bg-blue-700 rounded hover:bg-blue-200 transition">
                ➕ Add New Class
              </Link>
              <Link to="/admin/add-teacher" className="block p-3  text-black bg-blue-100 dark:bg-blue-700 rounded hover:bg-blue-200 transition">
                ➕ Register New Teacher
              </Link>
              <Link to="/admin/add-staff" className="block p-3  text-black bg-blue-100 dark:bg-blue-700 rounded hover:bg-blue-200 transition">
                ➕ Register New Staff
              </Link>
              <Link to="/admin/add-subjects" className="block p-3  text-black bg-blue-100 dark:bg-blue-700 rounded hover:bg-blue-200 transition">
                ➕ Add New Subjects
              </Link>
              <Link to="/admin/add-session" className="block p-3  text-black bg-blue-100 dark:bg-blue-700 rounded hover:bg-blue-200 transition">
                ➕ Add New Session
              </Link>
               <Link to="/Add/Class/Timetable" className="block p-3  text-black bg-blue-100 dark:bg-blue-700 rounded hover:bg-blue-200 transition">
                ➕ Add Class TimeTable
              </Link>
               <Link to="/Add/Fee/Voucher" className="block p-3  text-black bg-blue-100 dark:bg-blue-700 rounded hover:bg-blue-200 transition">
                ➕ Add Fee Voucher
              </Link>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800  text-black shadow p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
            <ul className="space-y-2">
              <li>✅ {recentActivity.studentCreated} 4 Students Created</li>
              <li>📆 {recentActivity.SessionStarted} New Session Started</li>
              <li>👩‍🏫 {recentActivity.teacherCreated} Teacher Created for Grade 8</li>
              <li>📚 {recentActivity.classesCreated} Class grade 2 Created </li>
              <li>✅ {recentActivity.studentUpdated} Student Updated Now</li>
              <li>✅ {recentActivity.teacherUpdated} Teacher Updated</li>
              <li>✅ {recentActivity.subjectAdded} Subject Added Successfully</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Logged in as: <strong>admin@school.edu</strong> • Role: <strong>Super Admin</strong>
          </p>
        </div>
      </main>
    </div>
  );
}

