// import React, { useContext, useEffect } from 'react'
// import { adminDataContext } from '../Context-Api/AdminContext'

// const AddClassManage = () => {
//     const {adminData,fetchAdminData} = useContext(adminDataContext);
//     const {classes = []} = adminData?.admin || [];

//     useEffect(()=>{
//         fetchAdminData();
//     },[fetchAdminData])
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default AddClassManage






























import React, { useContext, useEffect } from 'react';
import { adminDataContext } from '../Context-Api/AdminContext';
import AdminLayout from './AdminLayout';
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader';
//import { adminDataContext } from '../Context-Api/AdminContext';
const AddClassManage = () => {
  const { adminData, fetchAdminData } = useContext(adminDataContext);
  const { classes = [], sessions = [], current_session_id } = adminData?.admin || {};

  useEffect(() => {
    fetchAdminData();
  }, [fetchAdminData]);

  return (
    <AdminLayout adminName='Bright Futures'>
    <div className="p-6 md:ml-4 ml-0">
      {/* Header Section */}
      {/* <div className="bg-white  shadow-md rounded-md p-6 text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
          <i className="fas fa-school text-blue-600"></i>
          GOVIND GAURI PUBLIC SCHOOL PIPRA MAAF
          <small className="text-gray-500 ml-2 text-base">2025-2026</small>
        </h1>
        <div className="mt-4">
          <label htmlFor="wlsm_user_current_session" className="text-gray-700 font-medium mr-2">
            Current Session:
          </label>
          <select
            id="wlsm_user_current_session"
            className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={current_session_id || ''}
          >
            {sessions.map((session) => (
              <option key={session.id} value={session.id}>
                {session.label}
              </option>
            ))}
          </select>
        </div>
      </div> */}
<AdminTeachDashboardHeader/>
      {/* Section Heading */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold text-gray-700 inline-flex items-center gap-2">
          <i className="fas fa-layer-group text-blue-600"></i>
          Classes and Sections
        </h2>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 shadow-sm rounded-md overflow-hidden">
          <thead className="bg-blue-600 text-white text-left">
            <tr>
              <th className="p-3 font-semibold">Class</th>
              <th className="p-3 font-semibold">Number of Sections</th>
            </tr>
          </thead>
          <tbody>
            {classes.length > 0 ? (
              classes.map((cls) => (
                <tr key={cls.id} className="bg-white even:bg-gray-50 border-t">
                  <td className="p-3">
                    <span className="font-medium text-gray-800">{cls.name}</span>
                    <span className="ml-4 space-x-2">
                      <a
                        href={`/manage-section/${cls.id}`}
                        className="bg-green-500 text-white px-2 py-1 text-sm rounded hover:bg-green-600"
                      >
                        Add New / Manage
                      </a>
                      <a
                        href={`/view-section/${cls.id}`}
                        className="bg-blue-500 text-white px-2 py-1 text-sm rounded hover:bg-blue-600"
                      >
                        View
                      </a>
                    </span>
                  </td>
                  <td className="p-3 text-blue-600 font-semibold">{cls.sections_count}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="p-4 text-center text-gray-500">
                  No classes available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
    </AdminLayou>
  );
};

export default AddClassManage;

