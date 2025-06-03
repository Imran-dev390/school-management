import React, { useContext, useState } from 'react';
import { userDataContext } from '../Context-Api/UserContext';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { Sidebar } from './Sidebar';
import StudentSidebar from './StudentSidebar';

const StudentProfile = () => {
  const { userData } = useContext(userDataContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-zinc-800">
      {/* Topbar for small/medium screens */}
      <div className="md:hidden bg-black p-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Student Panel</h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          <FiMenu className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar */}
      {/* <aside className={`bg-black w-full md:w-64 shadow-md p-6 text-white space-y-4 font-medium ${isOpen ? 'block' : 'hidden'} md:block`}>
        <Link className="hover:text-blue-400 block" to="/student/dash">Dashboard</Link>
        <Link className="hover:text-blue-400 block" to="#">Profile</Link>
        <Link className="hover:text-blue-400 block" to="#">Assignments</Link>
        <Link className="hover:text-blue-400 block" to="#">Grades</Link>
        <Link className="hover:text-blue-400 block" to="/logout">Logout</Link>
        <Link
              to={`/${userData.role}/${userData.name}/update/password`}
              className="text-sm lg:text-base font-medium text-blue-600 hover:underline"
            >
              Reset Password
            </Link>
      </aside> */}
      <StudentSidebar/>

      {/* Profile Content */}
      <main className="flex-1 p-6">
        <div className="max-w-xl flex items-center justify-center gap-4 flex-col mx-auto rounded-2xl bg-white  shadow-md p-6">
          {/* Profile Image */}
          <div className="flex flex-col  items-center text-center mb-6">
            <img
              src={userData?.profile || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg"
            />
            <h1 className="mt-4 text-2xl font-bold text-gray-800">{userData?.name || "Student Name"}</h1>
            <p className="text-gray-500">{userData?.email || "student@email.com"}</p>

          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <InfoField label="Phone" value={userData?.phone} />
            <InfoField label="Class" value={userData?.Classs?.name} />
            <InfoField label="Section" value={userData?.Classs?.section} />
            <InfoField label="Email" value={userData?.email} />
            <InfoField label="Date of Birth" value={userData?.dob || "N/A"} />
            <InfoField label="Gender" value={userData?.gender || "N/A"} />
            <InfoField label="Fee Paid" value={userData?.feesPaid || "N/A"} />
          </div>
        </div>
      </main>
    </div>
  );
};

const InfoField = ({ label, value }) => (
  <div>
    <p className="text-gray-600 font-semibold">{label}:</p>
    <p className="text-gray-800">{value || "N/A"}</p>
  </div>
);

export default StudentProfile;
