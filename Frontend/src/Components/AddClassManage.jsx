// // import React, { useContext, useEffect } from 'react'
// // import { adminDataContext } from '../Context-Api/AdminContext'

// // const AddClassManage = () => {
// //     const {adminData,fetchAdminData} = useContext(adminDataContext);
// //     const {classes = []} = adminData?.admin || [];

// //     useEffect(()=>{
// //         fetchAdminData();
// //     },[fetchAdminData])
// //   return (
// //     <div>
      
// //     </div>
// //   )
// // }

// // export default AddClassManage






























// import React, { useContext, useEffect } from 'react';
// import { adminDataContext } from '../Context-Api/AdminContext';
// import AdminLayout from './AdminLayout';
// import AdminTeachDashboardHeader from './AdminTeachDashboardHeader';
// //import { adminDataContext } from '../Context-Api/AdminContext';
// const AddClassManage = () => {
//   const { adminData, fetchAdminData } = useContext(adminDataContext);
//   const { classes = [], sessions = [], current_session_id } = adminData?.admin || {};

//   useEffect(() => {
//     fetchAdminData();
//   }, [fetchAdminData]);
// console.log("classes",classes);
//   return (
//     <AdminLayout adminName='Bright Futures'>
//     <div className="p-6 md:ml-4 ml-0">
//       {/* Header Section */}
//       {/* <div className="bg-white  shadow-md rounded-md p-6 text-center mb-8">
//         <h1 className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
//           <i className="fas fa-school text-blue-600"></i>
//           GOVIND GAURI PUBLIC SCHOOL PIPRA MAAF
//           <small className="text-gray-500 ml-2 text-base">2025-2026</small>
//         </h1>
//         <div className="mt-4">
//           <label htmlFor="wlsm_user_current_session" className="text-gray-700 font-medium mr-2">
//             Current Session:
//           </label>
//           <select
//             id="wlsm_user_current_session"
//             className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             value={current_session_id || ''}
//           >
//             {sessions.map((session) => (
//               <option key={session.id} value={session.id}>
//                 {session.label}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div> */}
// <AdminTeachDashboardHeader/>
//       {/* Section Heading */}
//       <div className="text-center mb-6">
//         <h2 className="text-xl font-semibold text-gray-700 inline-flex items-center gap-2">
//           <i className="fas fa-layer-group text-blue-600"></i>
//           Classes and Sections
//         </h2>
//       </div>

//       {/* Table Section */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full border border-gray-200 shadow-sm rounded-md overflow-hidden">
//           <thead className="bg-blue-600 text-white text-left">
//             <tr>
//               <th className="p-3 font-semibold">Class</th>
//               <th className="p-3 font-semibold">Number of Sections</th>
//                <th className="p-3 font-semibold">Total Students</th>
//             </tr>
//           </thead>
//           <tbody>
//             {classes.length > 0 ? (
//               classes.map((cls) => (
//                 <tr key={cls._id} id={cls._id} className="bg-white even:bg-gray-50 border-t">
//                   <td className="p-3">
//                     <span className="font-medium text-gray-800">{cls.name}</span>
//                     <span className="ml-4 space-x-2">
//                       <a
//                         href={`/manage-section/${cls.id}`}
//                         className="bg-green-500 text-white px-2 py-1 text-sm rounded hover:bg-green-600"
//                       >
//                         Add New / Manage
//                       </a>
//                       <a
//                         href={`/view-section/${cls.id}`}
//                         className="bg-blue-500 text-white px-2 py-1 text-sm rounded hover:bg-blue-600"
//                       >
//                         View
//                       </a>
//                     </span>
//                   </td>
//                   <td className="p-3 text-blue-600 font-semibold">{cls.section}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="2" className="p-4 text-center text-gray-500">
//                   No classes available.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//     </AdminLayout>
//   );
// };

// export default AddClassManage;

































































import React, { useContext, useEffect, useState } from 'react';
import { adminDataContext } from '../Context-Api/AdminContext';
import AdminLayout from './AdminLayout';
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader';
import { Link } from 'react-router-dom';

const AddClassManage = () => {
  const { adminData, fetchAdminData } = useContext(adminDataContext);
  const { classes = [], sessions = [], current_session_id } = adminData?.admin || {};
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchAdminData();
  }, [fetchAdminData]);

  const filteredClasses = classes.filter(cls =>
    cls.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout adminName="Bright Futures">
      <div className="p-6 flex flex-col gap-3">
        {/* Main Header */}
        {/* <div className="bg-white shadow-md rounded-md px-4 py-6 text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 flex flex-col md:flex-row items-center justify-center gap-2">
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
              onChange={() => {}}
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
        {/* Section Header */}
        {/* <div className="text-center mb-6">
          <span className="inline-block text-lg font-semibold text-gray-700 border-b pb-1">
            <i className="fas fa-layer-group text-blue-600 mr-2"></i>
            Classes and Sections
          </span>
        </div> */}
         <div className="w-full text-white  bg-[rgb(1,1,93)]  hover:bg-[#C19703] text-xl font-semibold flex items-center justify-center rounded-md py-3 shadow-md">
            <i className="fas fa-graduation-cap mr-2"></i> Classes and Sections
          </div>

<main className=' border-[1px] border-grey-200 p-4'>
        {/* Search Box */}
        <div className="mb-4 text-right">
          <input
            type="text"
            placeholder="Search by class"
            className="border border-gray-300 rounded px-4 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Table */}
        {/* <div className="overflow-x-auto ">
          <table className="table-auto w-[950px]   shadow-sm rounded-md overflow-hidden">
            <thead className="bg-blue-600 text-white text-left">
              <tr>
                <th className="p-3 text-left font-semibold">Class</th>
                <th className="p-3 text-center font-semibold">Number of Sections</th>
                <th className="p-3 text-center font-semibold">Total Students</th>
              </tr>
            </thead>
            <tbody>
              {filteredClasses.length > 0 ? (
                filteredClasses.map((cls) => {
                  const sections = Array.isArray(cls.section) ? cls.section.length : 1;
                  const male = cls.numMaleStudents || 0;
                  const female = cls.numFemaleStudents || 0;
                  const total = male + female;

                  return (
                    <tr key={cls._id} className="bg-white even:bg-gray-50 border-t">
                      <td className="p-3">
                        <span className="font-medium text-gray-800">{cls.name}</span>
                        <span className="ml-4 space-x-2">
                          <a
                            href={`/manage-section/${cls._id}`}
                            className="bg-green-500 text-white px-2 py-1 text-sm rounded hover:bg-green-600"
                          >
                            Add New / Manage
                          </a>
                          <a
                            href={`/view-section/${cls._id}`}
                            className="bg-blue-500 text-white px-2 py-1 text-sm rounded hover:bg-blue-600"
                          >
                            View
                          </a>
                        </span>
                      </td>
                      <td className='text-center'>
                        <a
                          href={`/manage-section/${cls._id}`}
                          className="text-blue-600 font-semibold"
                        >
                          {sections}
                        </a>
                      </td>
                      <td className="text-center">
                        <span className="inline-block bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded mr-2">
                          Male: {male}
                        </span>
                        <span className="inline-block bg-pink-500 text-white text-xs font-medium px-2 py-1 rounded mr-2">
                          Female: {female}
                        </span>
                        <span className="inline-block bg-indigo-600 text-white text-xs font-medium px-2 py-1 rounded">
                          Total: {total}
                        </span>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="3" className="p-4 text-center text-gray-500">
                    No classes found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div> */}
        <div className="overflow-x-auto">
  <table className="table-auto w-[950px] border border-gray-300 border-collapse">
    <thead className="bg-[rgb(1,1,93)] text-white">
      <tr>
        <th className="border border-gray-300 p-3 text-left font-semibold">Class</th>
        <th className="border border-gray-300 p-3 text-center font-semibold">Number of Sections</th>
        <th className="border border-gray-300 p-3 text-center font-semibold">Total Students</th>
      </tr>
    </thead>
    <tbody>
      {filteredClasses.length > 0 ? (
        filteredClasses.map((cls) => {
          const sections = Array.isArray(cls.section) ? cls.section.length : 1;
          const male = cls.numMaleStudents || 0;
          const female = cls.numFemaleStudents || 0;
          const total = male + female;

          return (
            <tr key={cls._id} className="bg-white even:bg-gray-50">
              <td className="border border-gray-300 p-3">
                <span className="font-medium text-gray-800">{cls.name}</span>
                <span className="ml-4 space-x-2">
                  <Link
                  to="/admin/add-class-section"
                    //href={`/manage-section/${cls._id}`}
                    state={{ selectedClassId: cls._id }}
                    className="bg-[#c19703] text-white px-2 py-1 font-semibold text-sm rounded"
                  >
                    Add New / Manage
                  </Link>
                  <Link
                   to="/admin/add-class-section"
                   state={{ selectedClassId: cls._id }}
                    className="bg-[rgb(1,1,93)] text-white px-2 py-1 font-semibold text-sm rounded"
                  >
                    View
                  </Link>
                </span>
              </td>
              <td className="border border-gray-300 p-3 text-center">
                <a
                  href={`/manage-section/${cls._id}`}
                  className="text-blue-600 font-semibold"
                >
                  {sections}
                </a>
              </td>
              <td className="border border-gray-300 p-3 text-center">
                <span className="inline-block bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded mr-2">
                  Male: {male}
                </span>
                <span className="inline-block bg-pink-500 text-white text-xs font-medium px-2 py-1 rounded mr-2">
                  Female: {female}
                </span>
                <span className="inline-block bg-indigo-600 text-white text-xs font-medium px-2 py-1 rounded">
                  Total: {total}
                </span>
              </td>
            </tr>
          );
        })
      ) : (
        <tr>
          <td colSpan="3" className="border border-gray-300 p-4 text-center text-gray-500">
            No classes found.
          </td>
        </tr>
      )}
    </tbody>
  </table>
</div>




{/* Add Section Form */}
                    {/* <div className="bg-gray-50 p-4 rounded border">
                      <h3 className="text-md font-semibold mb-2 border-b pb-1">
                        <i className="fas fa-plus-square text-blue-600 mr-1"></i>
                        Add New Section
                      </h3>
                      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                        <div>
                          <label className="block font-medium mb-1">Section</label>
                          <input
                            type="text"
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter section name"
                          />
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="is_default"
                            className="h-4 w-4 text-blue-600"
                          />
                          <label htmlFor="is_default" className="text-gray-700">
                            Set as default section?
                          </label>
                        </div>
                        <div className="text-right">
                          <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded"
                          >
                            <i className="fas fa-plus-square mr-1"></i>
                            Add New Section
                          </button>
                        </div>
                      </form>
                    </div> */}

        </main>
      </div>
    </AdminLayout>
  );
};



export default AddClassManage;
