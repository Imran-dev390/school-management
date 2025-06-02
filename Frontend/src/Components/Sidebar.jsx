import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaTimes,
  FaRegDotCircle,
} from 'react-icons/fa';

export function Sidebar({ showSidebar, toggleSidebar }) {
  return (
    <div className={`w-64 min-h-screen  bg-gray-800 text-white fixed top-0 left-0 z-40 transform transition-transform duration-300 ${showSidebar ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
      {/* Close button on mobile */}
      <div className="md:hidden flex justify-end p-4">
        
      </div>

      <div className="px-4 py-4">
        <h2 className="text-2xl font-bold mb-6">🏫 Admin Panel</h2>

        {/* Navigation */}
        <nav className="flex flex-col space-y-4">
          <Link to="/admin/dash" className="hover:bg-gray-700 p-2 rounded">Dashboard</Link>
          <Link to="/admin/students" className="hover:bg-gray-700 p-2 rounded">Students</Link>
          <Link to="/admin/teachers" className="hover:bg-gray-700 p-2 rounded">Teachers</Link>
          <Link to="/admin/classes" className="hover:bg-gray-700 p-2 rounded">Classes</Link>
          <Link to="/admin/staff" className="hover:bg-gray-700 p-2 rounded">Staff</Link>
          <Link to="/logout" className="hover:bg-red-500 p-2 rounded">Logout</Link>
        </nav>

        {/* Track Process Button */}
        <div className="mt-8">
          <button
            onClick={toggleSidebar}
            className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 p-2 rounded mt-4"
          >
            <FaRegDotCircle />
            <span>Track Process</span>
          </button>
        </div>
      </div>
    </div>
  );
}
