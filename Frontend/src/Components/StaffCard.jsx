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
import { authDataContext } from '../Context-Api/AuthContext';
// const StaffCard = () => {
//   const { adminData, fetchAdminData } = useContext(adminDataContext);
//   const { staff } = adminData?.admin || {};
//   const [staffList, setStaffLists] = useState([]);
// //  const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [isSidebarOpen,setIsSidebarOpen] = useState(false);
//   // Fetch admin data
//   useEffect(() => {
//     fetchAdminData();
//   }, [fetchAdminData]);

//   // Set staff data
//   useEffect(() => {
//     if (staff && staff.length > 0) {
//       setStaffLists(staff);
//     }
//   }, [staff]);
//   const handleDelete = ()=>{
    
//   }

//   return (
//     <AdminLayout adminName="Bright Future">
//       {/* Overlay for mobile */}
//       {/* {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidde
//       {/* Main Content */}
//       <div className="flex-1 p-6 md:p-8 overflow-y-auto">
//         <h1 className="text-4xl font-bold mb-8 text-center text-white">All Staff Members</h1>

//         {staffList.length === 0 ? (
//           <p className="text-center text-gray-300">No staff found.</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center max-w-screen-xl mx-auto">
//             {staffList.map((staff) => {
//               const { name, role, email, phone, address, profileImage } = staff;
//               const imageSrc = profileImage?.data
//                 ? `data:${profileImage.contentType};base64,${profileImage.data}`
//                 : 'https://via.placeholder.com/150'; // fallback
//               return (
//                 <div
//                   key={staff._id}
//                   className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-200 w-full max-w-xs text-black"
//                 >
//                   <img
//                     src={imageSrc}
//                     alt={name}
//                     className="w-full h-48 object-fill rounded-lg mb-4"
//                   />
//                   <div className="px-2 pb-2 space-y-2">
//                     <h3 className="text-xl font-bold">{name}</h3>
//                     <p className="text-sm text-gray-700"><strong>Role:</strong> {role}</p>
//                     {email && (
//                       <p className="text-sm text-gray-700"><strong>Email:</strong> {email}</p>
//                     )}
//                     <p className="text-sm text-gray-700"><strong>Phone:</strong> {phone}</p>
//                     <p className="text-sm text-gray-700"><strong>Address:</strong> {address}</p>
//                     <button onClick={()=>handleDelete()} className='bg-red-500 p-2 text-white rounded'>Delete</button>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     </AdminLayout>
//   );
// };
const StaffCard = () => {
  const { adminData, fetchAdminData } = useContext(adminDataContext);
  const { serverUrl } = useContext(authDataContext);
  const { staff = [] } = adminData?.admin || {};

  const [filterName, setFilterName] = useState("");
  const [filterRole, setFilterRole] = useState("");
  const [filterPhone, setFilterPhone] = useState("");
  const [filterEmail, setFilterEmail] = useState("");
  const [filterAddress, setFilterAddress] = useState("");

  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1); // reset to first page when filters change
  }, [filterName, filterRole, filterPhone, filterEmail, filterAddress]);

  const filteredStaff = staff.filter((s) => {
    const nameMatch = s.name?.toLowerCase().includes(filterName.toLowerCase());
    const roleMatch = s.role?.toLowerCase().includes(filterRole.toLowerCase());
    const phoneMatch = s.phone?.toString().includes(filterPhone);
    const emailMatch = s.email?.toLowerCase().includes(filterEmail.toLowerCase());
    const addressMatch = s.address?.toLowerCase().includes(filterAddress.toLowerCase());
    return nameMatch && roleMatch && phoneMatch && emailMatch && addressMatch;
  });

  const indexOfLast = currentPage * entriesPerPage;
  const indexOfFirst = indexOfLast - entriesPerPage;
  const currentData = filteredStaff.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredStaff.length / entriesPerPage);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${serverUrl}/admin/staff/${id}`, {
        withCredentials: true,
      });
      if (res.status === 200) {
        toast.success("Staff member deleted");
        await fetchAdminData();
      }
    } catch (err) {
      toast.error(err?.response?.data?.message || "Delete failed");
    }
  };

  return (
    <AdminLayout adminName="Bright Future">
      <ToastContainer />
      <div className="p-6">
        <div className="bg-white shadow rounded p-4">
          {/* Filters & Entries Selector */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
            <div className="text-sm font-medium">
              Show
              <select
                className="ml-2 px-2 py-1 border rounded text-sm"
                value={entriesPerPage}
                onChange={(e) => {
                  setEntriesPerPage(parseInt(e.target.value));
                  setCurrentPage(1);
                }}
              >
                {[10, 25, 50, 100].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
              entries
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 w-full">
              <input type="text" placeholder="Name"
                className="border px-3 py-1 rounded text-sm"
                value={filterName}
                onChange={(e) => setFilterName(e.target.value)}
              />
              <input type="text" placeholder="Role"
                className="border px-3 py-1 rounded text-sm"
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
              />
              <input type="text" placeholder="Phone"
                className="border px-3 py-1 rounded text-sm"
                value={filterPhone}
                onChange={(e) => setFilterPhone(e.target.value)}
              />
              <input type="text" placeholder="Email"
                className="border px-3 py-1 rounded text-sm"
                value={filterEmail}
                onChange={(e) => setFilterEmail(e.target.value)}
              />
              <input type="text" placeholder="Address"
                className="border px-3 py-1 rounded text-sm"
                value={filterAddress}
                onChange={(e) => setFilterAddress(e.target.value)}
              />
            </div>
          </div>

          {/* Table Display */}
          <div className="overflow-auto">
            <table className="w-full border border-gray-200 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-3 py-2 border">#</th>
                  <th className="px-3 py-2 border">Name</th>
                  <th className="px-3 py-2 border">Profile</th>
                  <th className="px-3 py-2 border">Role</th>
                  <th className="px-3 py-2 border hidden md:table-cell">Phone</th>
                  <th className="px-3 py-2 border hidden lg:table-cell">Email</th>
                  <th className="px-3 py-2 border hidden lg:table-cell">Address</th>
                  <th className="px-3 py-2 border">Actions</th>
                </tr>
              </thead>
              {/* <tbody>
                {currentData.length > 0 ? currentData.map((staff, i) => {
                    const { profileImage } = staff;
                  const imageSrc = profileImage?.data
                    ? `data:${profileImage.contentType};base64,${profileImage.data}`
                    : 'https://via.placeholder.com/50';
                    return (
                  <tr key={staff._id} className="border-t">
                    <td className="px-3 py-2 border">{indexOfFirst + i + 1}</td>
                    <td className="px-3 py-2 border">{staff.name}</td>
                    <td className="px-3 py-2 border">{staff.role}</td>
                    <td className="px-3 py-2 border hidden md:table-cell">{staff.phone || "No Phone"}</td>
                    <td className="px-3 py-2 border hidden lg:table-cell">{staff.email || "No Email"}</td>
                    <td className="px-3 py-2 border hidden lg:table-cell">{staff.address}</td>
                    <td className="px-3 py-2 border space-x-1">
                      <button className="bg-blue-500 text-white px-2 py-1 rounded text-xs">View</button>
                      <button className="bg-yellow-500 text-white px-2 py-1 rounded text-xs">Edit</button>
                      <button
                        onClick={() => handleDelete(staff._id)}
                        className="bg-red-500 text-white px-2 py-1 rounded text-xs"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
  )) : (
                  <tr>
                    <td colSpan="7" className="text-center py-4 text-gray-500">
                      No staff members found.
                    </td>
                  </tr>
                )}
              </tbody> */}
              <tbody>
  {currentData.length > 0 ? (
    currentData.map((staff, i) => {
      const { profileImage } = staff;
      const imageSrc = profileImage?.data
        ? `data:${profileImage.contentType};base64,${profileImage.data}`
        : 'https://via.placeholder.com/50';
      return (
        <tr key={staff._id} className="border-t">
          <td className="px-3 py-2 border">{indexOfFirst + i + 1}</td>
          <td className="px-3 py-2 border">{staff.name}</td>
           <td className="px-3 py-2 border">
            <img
              src={imageSrc}
              alt={staff.name}
              className="w-10 h-10 rounded-full object-cover"
            />
          </td>
          <td className="px-3 py-2 border">{staff.role}</td>
          <td className="px-3 py-2 border hidden md:table-cell">{staff.phone || "No Phone"}</td>
          <td className="px-3 py-2 border hidden lg:table-cell">{staff.email || "No Email"}</td>
          <td className="px-3 py-2 border hidden lg:table-cell">{staff.address || "No Address"}</td>
          <td className="px-3 py-2 border space-x-1">
            <button className="bg-blue-500 text-white px-2 py-1 rounded text-xs">View</button>
            <button className="bg-yellow-500 text-white px-2 py-1 rounded text-xs">Edit</button>
            <button
              onClick={() => handleDelete(staff._id)}
              className="bg-red-500 text-white px-2 py-1 rounded text-xs"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    })
  ) : (
    <tr>
      <td colSpan="8" className="text-center py-4 text-gray-500">
        No staff members found.
      </td>
    </tr>
  )}
</tbody>

            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-4">
            <div className="text-sm">
              Showing {indexOfFirst + 1} to {Math.min(indexOfLast, filteredStaff.length)} of {filteredStaff.length} entries
            </div>
            <div className="flex gap-1 mt-2 md:mt-0">
              <button
                className={`px-2 py-1 border rounded text-sm ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Prev
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  className={`px-3 py-1 border rounded text-sm ${currentPage === i + 1 ? "bg-blue-500 text-white" : ""}`}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
              <button
                className={`px-2 py-1 border rounded text-sm ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default StaffCard;
//export default StaffCard;
