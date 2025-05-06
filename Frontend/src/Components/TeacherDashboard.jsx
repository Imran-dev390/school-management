import React, { useContext, useState } from 'react';
import { userDataContext } from '../Context-Api/UserContext';

const TeacherDashboard = () => {
  const {userData} = useContext(userDataContext);
  //const {name, assignedClass} = userData;
/*try{
        alert(assignedClass);
}catch(err){
  alert("Not Found")
}*/
  const [notifications] = useState([
    "New message from Principal",
    "Assignment submissions due today",
    "Staff meeting at 3 PM"
  ]);
  const [showNotif, setShowNotif] = useState(false);

  const classes = [
    { name: "Math - 10A", students: 30 },
    { name: "Physics - 10B", students: 28 },
    { name: "Chemistry - 11A", students: 32 },
  ];

  const assignments = [
    { title: "Chapter 4 Quiz", due: "Apr 25", class: "10A" },
    { title: "Lab Report", due: "Apr 26", class: "11A" },
  ];

  const studentsPerformance = [
    { name: "Ali", subject: "Math", grade: "A" },
    { name: "Sara", subject: "Physics", grade: "B+" },
    { name: "Ahmed", subject: "Chemistry", grade: "A-" },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="bg-white w-full md:w-64 shadow-lg p-5">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">Teacher Panel</h2>
        <ul className="space-y-4 text-gray-700 font-medium">
          <li className="hover:text-blue-500 cursor-pointer">Dashboard</li>
          <li className="hover:text-blue-500 cursor-pointer">My Classes</li>
          <li className="hover:text-blue-500 cursor-pointer">Assignments</li>
          <li className="hover:text-blue-500 cursor-pointer">Students</li>
          <li className="hover:text-blue-500 cursor-pointer">Profile</li>
        </ul>
      </aside>

      {/* Main Dashboard */}
      <div className="flex-1 p-6">
        {/* Top Navbar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Welcome, Teacher  👩‍🏫</h1>
          <div className="relative">
            <button
              onClick={() => setShowNotif(!showNotif)}
              className="text-gray-600 hover:text-blue-600"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 
                      6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C8.67 
                      6.165 8 7.388 8 8.75v5.408c0 .538-.214 
                      1.055-.595 1.437L6 17h5m4 0v1a3 3 0 
                      01-6 0v-1h6z" />
              </svg>
            </button>
            {showNotif && (
              <div className="absolute right-0 mt-2 w-64 bg-white shadow-xl rounded-md p-4 z-50 animate-fade-in">
                <h4 className="font-semibold text-gray-800 mb-2">Notifications</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  {notifications.map((note, i) => (
                    <li key={i} className="border-b pb-2">{note}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <DashboardCard title="Total Classes" value="6" color="bg-blue-500" />
          <DashboardCard title="Assignments Given" value="14" color="bg-green-500" />
          <DashboardCard title="Students" value="89" color="bg-yellow-500" />
          <DashboardCard title="Messages" value="5 New" color="bg-purple-500" />
        </div>

        {/* Class Overview */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <h2 className="text-lg font-semibold mb-4">My Classes</h2>
          <ul className="space-y-3 text-sm">
            {classes.map((cls, index) => (
              <li key={index} className="flex justify-between border-b pb-2">
                <span>{cls.name}</span>
                <span className="text-gray-500">{83} students</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Assignments Section */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <h2 className="text-lg font-semibold mb-4">Recent Assignments</h2>
          <ul className="space-y-3 text-sm">
            {assignments.map((a, index) => (
              <li key={index} className="flex justify-between border-b pb-2">
                <span>{a.title} ({a.class})</span>
                <span className="text-gray-500">Due: {a.due}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Student Performance */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-4">Student Performance</h2>
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="text-gray-600">
                <th className="py-2">Name</th>
                <th className="py-2">Subject</th>
                <th className="py-2">Grade</th>
              </tr>
            </thead>
            <tbody>
              {studentsPerformance.map((student, index) => (
                <tr key={index} className="border-t">
                  <td className="py-2">{student.name}</td>
                  <td className="py-2">{student.subject}</td>
                  <td className="py-2">{student.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Reusable Animated Card Component
const DashboardCard = ({ title, value, color }) => (
  <div className={`p-4 rounded-lg shadow text-white ${color} transform hover:scale-105 transition-transform duration-300`}>
    <h3 className="text-sm">{title}</h3>
    <p className="text-xl font-bold">{value}</p>
  </div>
);

export default TeacherDashboard;
