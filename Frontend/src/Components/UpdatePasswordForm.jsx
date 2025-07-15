// import React, { useContext, useEffect, useState } from 'react';
// import axios from 'axios';
// import TeacherSidebar from './TeacherSidebar';
// import StudentSidebar from './StudentSidebar';
// import { Sidebar as AdminSidebar } from './Sidebar';
// import { userDataContext } from '../Context-Api/UserContext';
// import { adminDataContext } from '../Context-Api/AdminContext';
// import { authDataContext } from '../Context-Api/AuthContext';

// const UpdatePasswordForm = ({ serverUrl }) => {
//   const { userData } = useContext(userDataContext);
//   const {serverUrl} = useContext(authDataContext);
//   const {role} = userData;
//   const { fetchAdminData } = useContext(adminDataContext);

//   const [form, setForm] = useState({
//     currentPassword: '',
//     newPassword: '',
//     confirmPassword: '',
//   });
//   const [status, setStatus] = useState(null);

//   useEffect(() => {
//     if (userData.role === 'Admin') {
//       fetchAdminData();
//     }
//   }, [userData, fetchAdminData]);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (form.newPassword !== form.confirmPassword) {
//       setStatus({ type: 'error', message: "Passwords don't match." });
//       return;
//     }

//     const endpointMap = {
//       Teacher: 'teacher',
//       Student: 'student',
//       Admin: 'admin',
//     };

//     const roleEndpoint = endpointMap[userData.role] || 'teacher';

//     try {
//      await axios.put(
//   `${serverUrl}/${role}/update-password`, // Example: /teacher/update-password
//   {
//     userId: userData._id,
//     currentPassword: form.currentPassword,
//     newPassword: form.newPassword,
//   },
//   { withCredentials: true }
// );

//       setStatus({ type: 'success', message: 'Password updated successfully!' });
//       setForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
//     } catch (err) {
//       setStatus({
//         type: 'error',
//         message:
//           err.response?.data?.error || 'Failed to update password. Try again.',
//       });
//     }
//   };

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-zinc-800 to-gray-900 text-white">
//       {/* Sidebar based on role */}
//       {userData.role === 'Teacher' && <TeacherSidebar />}
//       {userData.role === 'Student' && <StudentSidebar />}
//       {userData.role === 'Admin' && <AdminSidebar />}

//       {/* Content */}
//       <main className="flex-1 p-6 flex items-center justify-center">
//         <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8 text-gray-900">
//           <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Update Password</h2>

//           {status && (
//             <p
//               className={`mb-4 text-sm text-center ${
//                 status.type === 'error' ? 'text-red-600' : 'text-green-600'
//               }`}
//             >
//               {status.message}
//             </p>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-5">
//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Current Password
//               </label>
//               <input
//                 type="password"
//                 name="currentPassword"
//                 value={form.currentPassword}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-none"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 New Password
//               </label>
//               <input
//                 type="password"
//                 name="newPassword"
//                 value={form.newPassword}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-none"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Confirm New Password
//               </label>
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 value={form.confirmPassword}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-none"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-150"
//             >
//               Save Changes
//             </button>
//           </form>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default UpdatePasswordForm;


















































import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import TeacherSidebar from './TeacherSidebar';
import StudentSidebar from './StudentSidebar';
import { Sidebar as AdminSidebar } from './Sidebar';
import { userDataContext } from '../Context-Api/UserContext';
import { adminDataContext } from '../Context-Api/AdminContext';
import { authDataContext } from '../Context-Api/AuthContext';
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader';

const UpdatePasswordForm = () => {
  const { userData } = useContext(userDataContext);
  const { serverUrl } = useContext(authDataContext);
  const {role} = userData;
  const { fetchAdminData } = useContext(adminDataContext);

  const [form, setForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (userData.role === 'Admin') {
      fetchAdminData();
    }
  }, [userData, fetchAdminData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  console.log("serverUrl",serverUrl);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.newPassword !== form.confirmPassword) {
      setStatus({ type: 'error', message: "Passwords don't match." });
      return;
    }

    // const endpointMap = {
    //   Teacher: 'Teacher',
    //   Student: 'Student',
    //   Admin: 'Admin',
    // };

    // const roleEndpoint = endpointMap[userData.role] || 'teacher';

    try {
 const api = await axios.put(
  `${serverUrl}/api/user/${role.toLowerCase()}/update-password`,
  {
    userId: userData._id,
    currentPassword: form.currentPassword,
    newPassword: form.newPassword,
  },
  { withCredentials: true }
);
console.log("api",api.data);
      setStatus({ type: 'success', message: 'Password updated successfully!' });
      setForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
    } catch (err) {
        alert(err.response?.data?.error);
      setStatus({
        type: 'error',
        message:
          err.response?.data?.error || 'Failed to update password. Try again.',
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br bg-white">
      {userData.role === 'Teacher' && <TeacherSidebar />}
      {userData.role === 'Student' && <StudentSidebar />}
      {userData.role === 'Admin' &&
      <AdminSidebar/>
      }
      <div className="wrapper flex flex-col w-full  ml-2">
       <AdminTeachDashboardHeader/>
      <main className="flex-1 p-6 flex items-center justify-center">
        <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8 text-gray-900">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Update Password</h2>

          {status && (
            <p
              className={`mb-4 text-sm text-center ${
                status.type === 'error' ? 'text-red-600' : 'text-green-600'
              }`}
            >
              {status.message}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">
                Current Password
              </label>
              <input
                type="password"
                name="currentPassword"
                value={form.currentPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                New Password
              </label>
              <input
                type="password"
                name="newPassword"
                value={form.newPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Confirm New Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-150"
            >
              Save Changes
            </button>
          </form>
        </div>
      </main>
      </div>
    </div>
  );
};

export default UpdatePasswordForm;
