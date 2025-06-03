import React from 'react'
import { Link } from 'react-router-dom'

const StudentSidebar = () => {
  return (
            <aside className="bg-white shadow-md w-full md:w-64 p-5 space-y-4">
              <h2 className="text-2xl font-bold text-blue-600">Student Panel</h2>
              <ul className="space-y-2 text-gray-700 font-medium">
                <li className="hover:text-blue-500"><a href="#">Dashboard</a></li>
                <li className="hover:text-blue-500"><a href="#">Assignments</a></li>
                <li className="hover:text-blue-500"><a href="#">Grades</a></li>
                <li className="hover:text-blue-500"><a href="#">Attendance</a></li>
                <Link
                      to={`/${userData.role}/${userData.name}/update/password`}
                      className="text-sm lg:text-base font-medium text-blue-600 hover:underline"
                    >
                      Reset Password
                    </Link>
                <Link to="/student/profile" className="hover:text-blue-500">Profile </Link>
              </ul>
            </aside>
  )
}

export default StudentSidebar
