import React, { useState } from 'react';
//import Sidebar from './Sidebar';

const StudentDashboard = () => {
  const [notifications, setNotifications] = useState([
    'New assignment uploaded: Physics',
    'Your grade for Math has been posted',
    'School will be closed on Friday',
  ]);

  const [showNotif, setShowNotif] = useState(false);

  const assignments = [
    { title: 'Biology Lab Report', due: 'Apr 25' },
    { title: 'Chemistry Worksheet', due: 'Apr 28' },
  ];

  const grades = [
    { subject: 'Math', grade: 'A' ,teacher:"Khalid Mehmood"},
    { subject: 'Science', grade: 'B+' ,teacher:"Prof Hasnan"},
    { subject: 'English', grade: 'A-' ,teacher:"Ghafoor Sab"},
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
     {/* Sidebar */}
      <aside className="bg-white shadow-md w-full md:w-64 p-5 space-y-4">
        <h2 className="text-2xl font-bold text-blue-600">Student Panel</h2>
        <ul className="space-y-2 text-gray-700 font-medium">
          <li className="hover:text-blue-500"><a href="#">Dashboard</a></li>
          <li className="hover:text-blue-500"><a href="#">Assignments</a></li>
          <li className="hover:text-blue-500"><a href="#">Grades</a></li>
          <li className="hover:text-blue-500"><a href="#">Attendance</a></li>
          <li className="hover:text-blue-500"><a href="#">Profile</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Top Navbar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Welcome, Student!</h1>
          <div className="relative">
            <button
              onClick={() => setShowNotif(!showNotif)}
              className="relative text-gray-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 00-4 0v1.341C8.67 6.165 8 7.388 8 8.75v5.408c0 .538-.214 1.055-.595 1.437L6 17h5m4 0v1a3 3 0 01-6 0v-1h6z"
                />
              </svg>
              {notifications.length > 0 && (
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              )}
            </button>
            {showNotif && (
              <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-50">
                <h4 className="font-semibold text-gray-800 mb-2">Notifications</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {notifications.map((note, i) => (
                    <li key={i} className="border-b pb-1">{note}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card title="Grades" value="A+" color="bg-green-500" />
          <Card title="Attendance" value="95%" color="bg-blue-500" />
          <Card title="Assignments" value="2 Pending" color="bg-yellow-500" />
          <Card title="Next Class" value="Science @ 10:00 AM" color="bg-purple-500" />
        </div>

        {/* Assignments Section */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <h2 className="text-lg font-semibold mb-4">Upcoming Assignments</h2>
          <ul className="space-y-2">
            {assignments.map((item, index) => (
              <li key={index} className="flex justify-between text-sm border-b pb-2">
                <span>{item.title}</span>
                <span className="text-gray-500">Due: {item.due}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Grades Table */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-4">Grades Overview</h2>
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="text-gray-600">
                <th className="py-2">Subject</th>
                <th className="py-2">Grade</th>
                <th className='py-2'>Teacher</th>
              </tr>
            </thead>
            <tbody>
              {grades.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="py-2">{item.subject}</td>
                  <td className="py-2">{item.grade}</td>
                  <td className="py-2">{item.teacher}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, value, color }) => (
  <div className={`p-4 rounded-lg shadow text-white ${color} hover:scale-105 transform transition-all duration-300`}>
    <h3 className="text-sm">{title}</h3>
    <p className="text-xl font-bold">{value}</p>
  </div>
);

export default StudentDashboard;
