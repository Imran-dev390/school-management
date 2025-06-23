// // import React, { useContext, useEffect, useState } from 'react';
// // import { adminDataContext } from '../Context-Api/AdminContext';
// // import { Sidebar } from './Sidebar';

// // const StaffCard = () => {
// //   const { adminData, fetchAdminData } = useContext(adminDataContext);
// // const {staff} = adminData?.admin;
// // console.log("teachers",staff);
// //   // Fetch the admin data when the component mounts
// // const [staffList,setStaffLists] = useState([]);
// //   // Check if the staff data exists and map over it
// // console.log("staff",staffList);
// //  useEffect(() => {
// //     fetchAdminData();
// //   }, [fetchAdminData]);
// //   useEffect(()=>{
// //      if(staff && staff.length > 0){
// // setStaffLists(staff);
// //      }
// //   },[])
// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-zinc-800 text-white flex">
// //       {/* Sidebar (if any) */}
// //        <Sidebar /> 

// //       <div className="flex-1 p-8 overflow-y-auto">
// //         <h1 className="text-4xl font-bold mb-8 text-center text-white">All Staff Members</h1>

// //         {staffList.length === 0 ? (
// //           <p className="text-center text-gray-300">No staff found.</p>
// //         ) : (
// //           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
// //             {staffList.map((staff) => {
// //               const { name, role, email, phone, profileImage } = staff;

// //               // Convert buffer data to base64 for the profile image
// //              const imageSrc = profileImage?.data
// //   ? `data:${profileImage.contentType};base64,${profileImage.data}`
// //   : 'https://via.placeholder.com/150';
// //  // Fallback image if profileImage is missing

// //               return (
// //                 <div key={staff._id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-200 p-4 w-full sm:w-64 text-black">
// //                   <img
// //                     src={imageSrc}
// //                     alt={name}
// //                     className="w-full h-40 object-cover rounded-md mb-4"
// //                   />
// //                   <div className="space-y-1">
// //                     <h3 className="text-xl font-bold">{name}</h3>
// //                     <p className="text-sm text-gray-700"><strong>Role:</strong> {role}</p>
// //                     {email && <p className="text-sm text-gray-700"><strong>Email:</strong> {email}</p>}
// //                     <p className="text-sm text-gray-700"><strong>Phone:</strong> {phone}</p>
// //                   </div>
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default StaffCard;












































































// import React, { useContext, useEffect, useState } from 'react';
// import { adminDataContext } from '../Context-Api/AdminContext';
// import { Sidebar } from './Sidebar';
// import { FiMenu } from 'react-icons/fi'; // Hamburger icon

// const StaffCard = () => {
//   const { adminData, fetchAdminData } = useContext(adminDataContext);
//   const { staff } = adminData?.admin || {};
//   const [staffList, setStaffLists] = useState([]);
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   useEffect(() => {
//     fetchAdminData();
//   }, [fetchAdminData]);

//   useEffect(() => {
//     if (staff && staff.length > 0) {
//       setStaffLists(staff);
//     }
//   }, [staff]);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-zinc-800 text-white flex flex-col md:flex-row relative">

//       {/* Hamburger for small screens */}
//       <div className="md:hidden flex justify-between items-center p-4 bg-zinc-900 shadow-md sticky top-0 z-50">
//         <h1 className="text-2xl font-bold">Admin Panel</h1>
//         <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white text-2xl">
//           <FiMenu />
//         </button>
//       </div>

//       {/* Sidebar */}
//       <div
//         className={`z-40 transition-all duration-300 bg-zinc-900 md:static absolute top-0 left-0 h-full w-64 ${
//           sidebarOpen ? 'translate-x-0' : '-translate-x-full'
//         } md:translate-x-0`}
//       >
//         <Sidebar />
//       </div>

//       {/* Overlay when sidebar is open on mobile */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
//           onClick={() => setSidebarOpen(false)}
//         ></div>
//       )}

//       {/* Main Content */}
//       <div className="flex-1 p-6 md:p-8 overflow-y-auto">
//         <h1 className="text-4xl font-bold mb-8 text-center text-white">All Staff Members</h1>

//         {staffList.length === 0 ? (
//           <p className="text-center text-gray-300">No staff found.</p>
//         ) : (
//          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
//             {staffList.map((staff) => {
//               const { name, role, email, phone,address, profileImage } = staff;
//               const imageSrc = profileImage?.data
//                 ? `data:${profileImage.contentType};base64,${profileImage.data}`
//                 : 'https://via.placeholder.com/150';

//               return (
//                 <div
//                   key={staff._id}
//                   className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-200 p-4 w-full sm:w-64 text-black"
//                 >
//                   <img
//                     src={imageSrc}
//                     alt={name}
//                     className="w-full h-72  object-cover  rounded-lg mb-4"
//                   />
//                   <div className="space-y-1">
//                     <h3 className="text-xl font-bold">{name}</h3>
//                     <p className="text-sm text-gray-700">
//                       <strong>Role:</strong> {role}
//                     </p>
//                     {email && (
//                       <p className="text-sm text-gray-700">
//                         <strong>Email:</strong> {email}
//                       </p>
//                     )}
//                     <p className="text-sm text-gray-700">
//                       <strong>Phone:</strong> {phone}
//                     </p>
//                     <p className="text-sm text-gray-700">
//                       <strong>Address:</strong> {address}
//                     </p>
//                   </div>
//                 </div> 
//               );
//             })}
//           </div>*/}
          
//         )}
//       </div>
//     </div>
//   );
// };

// export default StaffCard;




































import React, { useContext, useEffect, useState } from 'react';
import { adminDataContext } from '../Context-Api/AdminContext';
import { Sidebar } from './Sidebar';
import { FiMenu } from 'react-icons/fi'; // Hamburger icon
import AdminLayout from './AdminLayout';

const StaffCard = () => {
  const { adminData, fetchAdminData } = useContext(adminDataContext);
  const { staff } = adminData?.admin || {};
  const [staffList, setStaffLists] = useState([]);
//  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSidebarOpen,setIsSidebarOpen] = useState(false);
  // Fetch admin data
  useEffect(() => {
    fetchAdminData();
  }, [fetchAdminData]);

  // Set staff data
  useEffect(() => {
    if (staff && staff.length > 0) {
      setStaffLists(staff);
    }
  }, [staff]);
  const handleDelete = ()=>{
    
  }

  return (
    <AdminLayout adminName="Bright Future">
      {/* Overlay for mobile */}
      {/* {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidde
      {/* Main Content */}
      <div className="flex-1 p-6 md:p-8 overflow-y-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">All Staff Members</h1>

        {staffList.length === 0 ? (
          <p className="text-center text-gray-300">No staff found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center max-w-screen-xl mx-auto">
            {staffList.map((staff) => {
              const { name, role, email, phone, address, profileImage } = staff;
              const imageSrc = profileImage?.data
                ? `data:${profileImage.contentType};base64,${profileImage.data}`
                : 'https://via.placeholder.com/150'; // fallback
              return (
                <div
                  key={staff._id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-200 w-full max-w-xs text-black"
                >
                  <img
                    src={imageSrc}
                    alt={name}
                    className="w-full h-48 object-fill rounded-lg mb-4"
                  />
                  <div className="px-2 pb-2 space-y-2">
                    <h3 className="text-xl font-bold">{name}</h3>
                    <p className="text-sm text-gray-700"><strong>Role:</strong> {role}</p>
                    {email && (
                      <p className="text-sm text-gray-700"><strong>Email:</strong> {email}</p>
                    )}
                    <p className="text-sm text-gray-700"><strong>Phone:</strong> {phone}</p>
                    <p className="text-sm text-gray-700"><strong>Address:</strong> {address}</p>
                    <button onClick={()=>handleDelete()} className='bg-red-500 p-2 text-white rounded'>Delete</button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default StaffCard;
