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
import { FaUserCircle } from 'react-icons/fa'; // Import profile icon


export default function AdminDashboard({ recentActivity, setRecentActivity }) {
  const { userData } = useContext(userDataContext);
  const { adminData, loading,fetchAdminData } = useContext(adminDataContext);
  const [darkMode, setDarkMode] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
  if (!adminData) {
    fetchAdminData();
  }
}, [adminData, fetchAdminData]);
if (loading) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4 mx-auto"></div>
        <p className="text-lg font-semibold">Loading dashboard...</p>
      </div>
    </div>
  );
}

  const { teachers = [], sessions = [], students = [], classes = [], name } = adminData.admin || {};
  const toggleDark = () => setDarkMode(!darkMode);
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
//     <div className={`flex min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
//       {/* Sidebar */}
//       <div className={`fixed top-0 left-0 z-40 h-full w-64 bg-white dark:bg-gray-800 shadow transform transition-transform duration-300 ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
//   <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
// </div>
  <div className={`flex min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>

    {/* ✅ Hamburger Toggle Button — Mobile Only */}
    <button
      onClick={toggleSidebar}
      className="md:hidden fixed top-4 left-4 z-50 bg-slate-400 text-black p-2"
    >
      <FaBars className="text-xl" />
    </button>

    {/* ✅ Sidebar */}
    <div
      className={`fixed top-0 left-0 z-40 h-full w-64 bg-white dark:bg-gray-800 shadow transform transition-transform duration-300 ${
        showSidebar ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0`}
    >
      <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
    </div>
      {/* Toggle Button */}
      <button
  onClick={toggleSidebar}
  className="fixed top-4  left-4 z-50 bg-slate-400 text-black p-2 rounded"
>
  {showSidebar ? <FaTimes /> : <FaBars />}
</button>
      {/* Main Content */}
      {/* <div className="flex-1 ml-0 md:ml-64 p-6 transition-all duration-300"> */}
      <div className={`flex-1 p-6 transition-all duration-300 ${showSidebar ? 'ml-64' : 'ml-0'}`}>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8 mb-6 text-center sm:text-left">
  <h1 className="text-2xl ml-8 sm:text-3xl font-bold">
    🏫 School Admin {name} Dashboard
  </h1>
<div className="profileShowSchoolName w-fit flex items-center gap-1 p-4">
  <div className="w-14 h-14 rounded-full flex items-center justify-center bg-transparent">
    <FaUserCircle className="text-4xl" />
  </div>
  <h1 className="text-lg font-semibold">Bright Future</h1>
</div>
</div>
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
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
      </div>
    </div>
  );
}
