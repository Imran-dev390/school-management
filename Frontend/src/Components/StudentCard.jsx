// import React, { useContext, useEffect, useState } from 'react';
// import { Sidebar } from './Sidebar';
// import { adminDataContext } from '../Context-Api/AdminContext';
// import { authDataContext } from '../Context-Api/AuthContext';
// import axios from 'axios';
// import { ToastContainer,toast } from 'react-toastify';
// import { FaBars, FaUserCircle } from 'react-icons/fa';
// const StudentCard = ({showSidebar,setShowSidebar}) => {
//   const { adminData } = useContext(adminDataContext);
//   const { serverUrl } = useContext(authDataContext);
//   const { students = [] } = adminData?.admin || {};
//   const {fetchAdminData} = useContext(adminDataContext);
//   const [totalStudents, setTotalStudents] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [editData, setEditData] = useState(null); // holds current student data
//   //console.log(totalStudents.Classs.name)
//   useEffect(() => {
//     if (students && students.length > 0) {
//    //   console.log("students",students);
//       setTotalStudents(students);
//     }
//   }, [students]);
// //console.log("totalStudents",totalStudents);
//   const handleDelete = async (index) => {
//     const studentToDelete = totalStudents[index];
//     if (!studentToDelete?._id) {
//   //    console.log("No Valid student id found!");
//       return;
//     }

//     try {
//       const response = await axios.delete(`${serverUrl}/admin/students/${studentToDelete._id}`, {
//         withCredentials: true,
//       });

//       if (response.status === 200) {
//         await fetchAdminData();
//         toast.success("Successfully Deleted Student...")
//         const updatedStudents = totalStudents.filter(s => s._id !== studentToDelete._id);
//         setTotalStudents(updatedStudents);
//     //    console.log(`Deleted student: ${studentToDelete.name}`);
//       }
//       setShowModal(false);
//     } catch (err) {
//       toast.error(err?.response?.data.message)
//       //console.error("Error deleting student:", err);
//     }
//   };
//  const [isSidebarOpen,setIsSidebarOpen] = useState(false);
//   const handleUpdate = (index) => {
//     const student = totalStudents[index];
//     setEditData(student);
//     setShowModal(true);
//   };

//   const handleFormChange = (e) => {
//     setEditData({ ...editData, [e.target.name]: e.target.value });
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       const response = await axios.put(
//         `${serverUrl}/api/admin/student/${editData._id}`,
//         {
//           name: editData.name,
//           parent: editData.parent,
//           Classs: editData.class,
//           dob: editData.dob,
//           adress: editData.adress,
//           phone: editData.phone,
//           feesPaid: editData.feesPaid,
//         },
//         {
//           withCredentials: true,
//         }
//       );
//       //console.log(response);
  
//       if (response.status === 200) {
//         await fetchAdminData();
//         const updatedStudent = response.data.student;
  
//         // ✅ Update local state
//         setTotalStudents((prevStudents) =>
//           prevStudents.map((student) =>
//             student._id === updatedStudent._id ? updatedStudent : student
//           )
//         );
  
//         toast.success("Successfully updated the student...");
//         //console.log("Student updated:", updatedStudent);
  
//         setTimeout(() => setShowModal(false), 200); // Give toast time to render
//       }
//     } catch (err) {
//       toast.error(err?.response?.data?.message || "Update failed.");
//       //console.error("Update failed:", err);
//     }
//   };
  
  

//   return (
//     <div className="flex min-h-screen bg-gray-100 text-gray-800">
//         {!isSidebarOpen && (
//               <button
//                 onClick={() => setIsSidebarOpen(true)}
//                 className="md:hidden fixed top-4 left-4 z-50 bg-white border p-2 shadow"
//               >
//                 <FaBars className="text-xl text-green-700" />
//               </button>
//             )}
//             <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
//         {/* <div className={`fixed top-0 left-0 z-40 h-full w-64 bg-white dark:bg-gray-800 shadow transform transition-transform duration-300 ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
//       </div> */}
//        <div className="fixed top-0 right-0  w-fit ml-4 z-40 flex items-start p-4">
//               <div className="profileShowSchoolName flex  items-center gap-2">
//                 <div className="w-14 h-14 rounded-full flex items-center justify-center">
//                   <FaUserCircle className="text-4xl text-blue-900" />
//                 </div>
//                 <h1 className="text-lg font-semibold text-blue-900">Bright Future</h1>
//               </div>
//             </div>
//       <main className="flex-1 ml-0 md:ml-64 p-8">
//         <h2 className="text-3xl font-bold mb-6 text-center">🎓 Student Profiles</h2>
//         <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} theme="colored" />
//         {/* <div className="grid grid-cols-3 items-center gap-3">
//           {totalStudents.map((student, idx) => (
//             <div key={idx} className="bg-white shadow rounded-xl p-6 border">
//               <img
//                 src={student.profile || "https://via.placeholder.com/150"}
//                 alt={student.name}
//                 className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-blue-500 shadow"
//               />
//               <div className="text-center mt-4">
//                 <h3 className="text-xl font-semibold text-gray-800">{student.name}</h3>
//                 <p><strong>Class:</strong> {student.Classs?.name || "N/A"}</p>
//                 <p><strong>DOB:</strong> {new Date(student.dob).toDateString()}</p>
//                 <p><strong>Parent:</strong> {student.parent}</p>
//                 <p><strong>Address:</strong> {student.adress}</p>
//                 <p><strong>Phone:</strong> {student.phone}</p>
//                 <p><strong>Fees Paid:</strong> {student.feesPaid  ===null?  0:student.feesPaid}</p>
//                 <button onClick={() => handleUpdate(idx)} className="bg-yellow-400 px-4 py-1 mt-2 rounded">Update</button>
//                 <button onClick={() => handleDelete(idx)} className="bg-red-500 text-white px-4 py-1 ml-2 rounded">Delete</button>
//               </div>
//             </div>
//           ))}
//         </div> */}
// <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-start">
//   {totalStudents.map((student, idx) => (
//     <div key={idx} className="bg-white shadow rounded-xl p-6 border">
//       <img
//         src={student.profile || "https://via.placeholder.com/150"}
//         alt={student.name}
//         className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-blue-500 shadow"
//       />
//       <div className="text-center mt-4">
//         <h3 className="text-xl font-semibold text-gray-800">{student.name}</h3>
//         <p><strong>Class:</strong> {student.Classs?.name || "N/A"}</p>
//         <p><strong>DOB:</strong> {new Date(student.dob).toDateString()}</p>
//         <p><strong>Parent:</strong> {student.parent}</p>
//         <p><strong>Address:</strong> {student.adress}</p>
//         <p><strong>Phone:</strong> {student.phone}</p>
//         <p><strong>Fees Paid:</strong> {student.feesPaid === null ? 0 : student.feesPaid}</p>
//         <div className="mt-2">
//           <button onClick={() => handleUpdate(idx)} className="bg-yellow-400 px-4 py-1 rounded">
//             Update
//           </button>
//           <button onClick={() => handleDelete(idx)} className="bg-red-500 text-white px-4 py-1 ml-2 rounded">
//             Delete
//           </button>
//         </div>
//       </div>
//     </div>
//   ))}
// </div>

//         {/* Modal Popup */}
//         {showModal && editData && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//             <div className="bg-white p-6 rounded-lg w-[90%] max-w-lg shadow-lg">
//               <h2 className="text-xl font-bold mb-4">Update Student</h2>
//               <form onSubmit={handleFormSubmit} className="space-y-3">
//                 <input type="text" name="name" value={editData.name || ""} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Name" />
//                 <input type="text" name="parent" value={editData.parent || ""} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Parent" />
//             {/*    <input type="text" name="class" value={editData.class} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Class" /> */}
//                 <input type="date" name="dob" value={editData.dob?.substring(0, 10) || ""} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="DOB" />
//                 <input type="text" name="class" value={editData.class || ""} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Class" />
//                 <input type="text" name="adress" value={editData.adress || ""} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Address" />
//                 <input type="number" name="phone" value={editData.phone || ""} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Phone" />
//                 <input type="number" name="feesPaid" value={editData.feesPaid || ""} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Fees Paid" />

//                 <div className="flex justify-end gap-2">
//                   <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
//                   <button onClick={() => setShowModal(false)} type="button" className="bg-gray-400 px-4 py-2 rounded">Cancel</button>
//                 </div>
//               </form>

//             </div>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// };

// export default StudentCard;


























































































// import React, { useContext, useEffect, useState } from 'react';
// import { adminDataContext } from '../Context-Api/AdminContext';
// import { authDataContext } from '../Context-Api/AuthContext';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import { FaUserCircle } from 'react-icons/fa';
// import AdminLayout from './AdminLayout';
// //import AdminLayout from './AdminLayout';  // import your layout
// const StudentCard = () => {
//   const { adminData } = useContext(adminDataContext);
//   const { serverUrl } = useContext(authDataContext);
//   const { students = [] } = adminData?.admin || {};
//   const { fetchAdminData } = useContext(adminDataContext);
//   const [totalStudents, setTotalStudents] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [editData, setEditData] = useState(null);
// const [filter, setFilter] = useState('');

//   const filtered = totalStudents.filter(s =>
//     s.name.toLowerCase().includes(filter.toLowerCase()) ||
//     s.Classs?.name?.toLowerCase().includes(filter.toLowerCase())
//   );
//   useEffect(() => {
//     if (students.length > 0) {
//       setTotalStudents(students);
//     }
//   }, [students]);

//   const handleDelete = async (index) => {
//     const studentToDelete = totalStudents[index];
//     if (!studentToDelete?._id) return;

//     try {
//       const response = await axios.delete(`${serverUrl}/admin/students/${studentToDelete._id}`, { withCredentials: true });
//       if (response.status === 200) {
//         await fetchAdminData();
//         toast.success("Successfully Deleted Student...");
//         setTotalStudents(totalStudents.filter(s => s._id !== studentToDelete._id));
//       }
//       setShowModal(false);
//     } catch (err) {
//       toast.error(err?.response?.data.message);
//     }
//   };

//   const handleUpdate = (index) => {
//     setEditData(totalStudents[index]);
//     setShowModal(true);
//   };

//   const handleFormChange = (e) => {
//     setEditData({ ...editData, [e.target.name]: e.target.value });
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put(
//         `${serverUrl}/api/admin/student/${editData._id}`,
//         {
//           name: editData.name,
//           parent: editData.parent,
//           Classs: editData.class,
//           dob: editData.dob,
//           adress: editData.adress,
//           phone: editData.phone,
//           feesPaid: editData.feesPaid,
//         },
//         { withCredentials: true }
//       );
//       if (response.status === 200) {
//         await fetchAdminData();
//         const updatedStudent = response.data.student;
//         setTotalStudents(prev => prev.map(s => (s._id === updatedStudent._id ? updatedStudent : s)));
//         toast.success("Successfully updated the student...");
//         setTimeout(() => setShowModal(false), 200);
//       }
//     } catch (err) {
//       toast.error(err?.response?.data?.message || "Update failed.");
//     }
//   };

//   return (
//     // <AdminLayout adminName="Admin">  {/* Wrap content here, optionally pass adminName */}
//     //   <div>
//     //     <main className="p-8">
//     //       <h2 className="text-3xl font-bold mb-6 text-center">🎓 Student Profiles</h2>
//     //       <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} theme="colored" />

//     //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-start">
//     //         {totalStudents.map((student, idx) => (
//     //           <div key={idx} className="bg-white shadow rounded-xl p-6 border">
//     //             <img
//     //               src={student.profile || "https://via.placeholder.com/150"}
//     //               alt={student.name}
//     //               className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-blue-500 shadow"
//     //             />
//     //             <div className="text-center mt-4">
//     //               <h3 className="text-xl font-semibold text-gray-800">{student.name}</h3>
//     //               <p><strong>Class:</strong> {student.Classs?.name || "N/A"}</p>
//     //               <p><strong>DOB:</strong> {new Date(student.dob).toDateString()}</p>
//     //               <p><strong>Parent:</strong> {student.parent}</p>
//     //               <p><strong>Address:</strong> {student.adress}</p>
//     //               <p><strong>Phone:</strong> {student.phone}</p>
//     //               <p><strong>Fees Paid:</strong> {student.feesPaid === null ? 0 : student.feesPaid}</p>
//     //               <div className="mt-2">
//     //                 <button onClick={() => handleUpdate(idx)} className="bg-yellow-400 px-4 py-1 rounded">
//     //                   Update
//     //                 </button>
//     //                 <button onClick={() => handleDelete(idx)} className="bg-red-500 text-white px-4 py-1 ml-2 rounded">
//     //                   Delete
//     //                 </button>
//     //               </div>
//     //             </div>
//     //           </div>
//     //         ))}
//     //       </div>

//     //       {showModal && editData && (
//     //         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//     //           <div className="bg-white p-6 rounded-lg w-[90%] max-w-lg shadow-lg">
//     //             <h2 className="text-xl font-bold mb-4">Update Student</h2>
//     //             <form onSubmit={handleFormSubmit} className="space-y-3">
//     //               <input
//     //                 type="text"
//     //                 name="name"
//     //                 value={editData.name || ""}
//     //                 onChange={handleFormChange}
//     //                 className="w-full border p-2 rounded"
//     //                 placeholder="Name"
//     //               />
//     //               <input
//     //                 type="text"
//     //                 name="parent"
//     //                 value={editData.parent || ""}
//     //                 onChange={handleFormChange}
//     //                 className="w-full border p-2 rounded"
//     //                 placeholder="Parent"
//     //               />
//     //               <input
//     //                 type="date"
//     //                 name="dob"
//     //                 value={editData.dob?.substring(0, 10) || ""}
//     //                 onChange={handleFormChange}
//     //                 className="w-full border p-2 rounded"
//     //                 placeholder="DOB"
//     //               />
//     //               <input
//     //                 type="text"
//     //                 name="class"
//     //                 value={editData.class || ""}
//     //                 onChange={handleFormChange}
//     //                 className="w-full border p-2 rounded"
//     //                 placeholder="Class"
//     //               />
//     //               <input
//     //                 type="text"
//     //                 name="adress"
//     //                 value={editData.adress || ""}
//     //                 onChange={handleFormChange}
//     //                 className="w-full border p-2 rounded"
//     //                 placeholder="Address"
//     //               />
//     //               <input
//     //                 type="number"
//     //                 name="phone"
//     //                 value={editData.phone || ""}
//     //                 onChange={handleFormChange}
//     //                 className="w-full border p-2 rounded"
//     //                 placeholder="Phone"
//     //               />
//     //               <input
//     //                 type="number"
//     //                 name="feesPaid"
//     //                 value={editData.feesPaid || ""}
//     //                 onChange={handleFormChange}
//     //                 className="w-full border p-2 rounded"
//     //                 placeholder="Fees Paid"
//     //               />

//     //               <div className="flex justify-end gap-2">
//     //                 <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
//     //                   Save
//     //                 </button>
//     //                 <button
//     //                   onClick={() => setShowModal(false)}
//     //                   type="button"
//     //                   className="bg-gray-400 px-4 py-2 rounded"
//     //                 >
//     //                   Cancel
//     //                 </button>
//     //               </div>
//     //             </form>
//     //           </div>
//     //         </div>
//     //       )}
//     //     </main>
//     //   </div>
//     // </AdminLayout>










































//      <AdminLayout adminName="Bright Future">
//       <main className="p-8">
//         <h2 className="text-3xl font-bold mb-4 text-center">📋 Student Records</h2>
//         <input
//           type="text"
//           placeholder="Search by name or class…"
//           className="p-2 mb-4 border rounded w-full"
//           value={filter}
//           onChange={e => setFilter(e.target.value)}
//         />

//         <table className="min-w-full bg-white shadow rounded-lg overflow-hidden">
//           <thead className="bg-gray-200">
//             <tr>
//               {['Name', 'Class', 'DOB', 'Parent', 'Phone', 'Fees Paid', 'Actions'].map(h => (
//                 <th key={h} className="px-4 py-2 text-left">{h}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {filtered.map(student => (
//               <tr key={student._id} className="border-b hover:bg-gray-50">
//                 <td className="px-4 py-2">{student.name}</td>
//                 <td className="px-4 py-2">{student.Classs?.name || '–'}</td>
//                 <td className="px-4 py-2">{new Date(student.dob).toLocaleDateString()}</td>
//                 <td className="px-4 py-2">{student.parent}</td>
//                 <td className="px-4 py-2">{student.phone}</td>
//                 <td className="px-4 py-2">{student.feesPaid ?? 0}</td>
//                 <td className="px-4 py-2 flex space-x-2">
//                   <button onClick={() => handleUpdateById(student._id)} className="text-blue-500 hover:underline">Edit</button>
//                   <button onClick={() => handleViewDetails(student)} className="text-green-500 hover:underline">View</button>
//                   <button onClick={() => handleDeleteById(student._id)} className="text-red-500 hover:underline">Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* Modal for Edit or View Details */}
//       </main>
//     </AdminLayout>
//   );
// };

// export default StudentCard;





































// import { useContext, useEffect, useState } from 'react';
// import { adminDataContext } from '../Context-Api/AdminContext';
// import { authDataContext } from '../Context-Api/AuthContext';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import AdminLayout from './AdminLayout';
// import DataTable from 'react-data-table-component';

// const StudentCard = () => {
//   const { adminData, fetchAdminData } = useContext(adminDataContext);
//   const { serverUrl } = useContext(authDataContext);
//   const { students = [] } = adminData?.admin || [];

//   const [totalStudents, setTotalStudents] = useState([]);
//   const [filter, setFilter] = useState('');
//   const [showModal, setShowModal] = useState(false);
//   const [editData, setEditData] = useState(null);

//   useEffect(() => {
//     if (students.length > 0) {
//       setTotalStudents(students);
//     }
//   }, [students]);

//   const filtered = totalStudents.filter(s =>
//     s.name.toLowerCase().includes(filter.toLowerCase()) ||
//     s.Classs?.name?.toLowerCase().includes(filter.toLowerCase())
//   );

//   const studentsToRender = filter.trim() ? filtered : totalStudents;

//   const handleUpdateById = (id) => {
//     const student = totalStudents.find(s => s._id === id);
//     if (student) {
//       setEditData(student);
//       setShowModal(true);
//     }
//   };

//   const handleDeleteById = async (id) => {
//     try {
//       const response = await axios.delete(`${serverUrl}/admin/students/${id}`, { withCredentials: true });
//       if (response.status === 200) {
//         await fetchAdminData();
//         toast.success("Successfully Deleted Student...");
//         setTotalStudents(prev => prev.filter(s => s._id !== id));
//       }
//     } catch (err) {
//       toast.error(err?.response?.data?.message || "Delete failed.");
//     }
//   };

//   const handleViewDetails = (student) => {
//     alert(`👀 Viewing details for: ${student.name}`);
//   };

//   const handleFormChange = (e) => {
//     setEditData({ ...editData, [e.target.name]: e.target.value });
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put(
//         `${serverUrl}/api/admin/student/${editData._id}`,
//         {
//           name: editData.name,
//           parent: editData.parent,
//           Classs: editData.class,
//           dob: editData.dob,
//           adress: editData.adress,
//           phone: editData.phone,
//           feesPaid: editData.feesPaid,
//         },
//         { withCredentials: true }
//       );

//       if (response.status === 200) {
//         await fetchAdminData();
//         const updatedStudent = response.data.student;
//         setTotalStudents(prev => prev.map(s => (s._id === updatedStudent._id ? updatedStudent : s)));
//         toast.success("Successfully updated the student...");
//         setTimeout(() => setShowModal(false), 200);
//       }
//     } catch (err) {
//       toast.error(err?.response?.data?.message || "Update failed.");
//     }
//   };

//   return (
//     <AdminLayout adminName="Bright Future">
//       <main className="p-8">
//         <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} theme="colored" />
//         <h2 className="text-3xl font-bold mb-4 text-center">📋 Student Records</h2>

//         <input
//           type="text"
//           placeholder="Search by name or class…"
//           className="p-2 mb-4 border rounded w-full"
//           value={filter}
//           onChange={(e) => setFilter(e.target.value)}
//         />

//         <table className="min-w-full bg-white shadow rounded-lg overflow-hidden">
//           <thead className="bg-gray-200">
//             <tr>
//               <th className="px-4 py-2 text-left">Name</th>
//               <th className="px-4 py-2 text-left">Class</th>
//               <th className="px-4 py-2 text-left">DOB</th>
//               <th className="px-4 py-2 text-left">Parent</th>
//               <th className="px-4 py-2 text-left">Phone</th>
//               <th className="px-4 py-2 text-left">Fees Paid</th>
//               <th className="px-4 py-2 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {studentsToRender.map(student => (
//               <tr key={student._id} className="border-b hover:bg-gray-50">
//                 <td className="px-4 py-2">{student.name}</td>
//                 <td className="px-4 py-2">{student.Classs?.name || '–'}</td>
//                 <td className="px-4 py-2">{new Date(student.dob).toLocaleDateString()}</td>
//                 <td className="px-4 py-2">{student.parent}</td>
//                 <td className="px-4 py-2">{student.phone}</td>
//                 <td className="px-4 py-2">{student.feesPaid ?? 0}</td>
//                 <td className="px-4 py-2 flex space-x-2">
//                   <button onClick={() => handleUpdateById(student._id)} className="text-blue-500 hover:underline">Edit</button>
//                   <button onClick={() => handleViewDetails(student)} className="text-green-500 hover:underline">View</button>
//                   <button onClick={() => handleDeleteById(student._id)} className="text-red-500 hover:underline">Delete</button>
//                 </td>
//               </tr>
//             ))}
//             {studentsToRender.length === 0 && (
//               <tr>
//                 <td colSpan="7" className="text-center py-4 text-gray-500">
//                   No students found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>

//         {showModal && editData && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//             <div className="bg-white p-6 rounded-lg w-[90%] max-w-lg shadow-lg">
//               <h2 className="text-xl font-bold mb-4">Update Student</h2>
//               <form onSubmit={handleFormSubmit} className="space-y-3">
//                 <input type="text" name="name" value={editData.name || ""} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Name" />
//                 <input type="text" name="parent" value={editData.parent || ""} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Parent" />
//                 <input type="date" name="dob" value={editData.dob?.substring(0, 10) || ""} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="DOB" />
//                 <input type="text" name="class" value={editData.class || ""} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Class" />
//                 <input type="text" name="adress" value={editData.adress || ""} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Address" />
//                 <input type="number" name="phone" value={editData.phone || ""} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Phone" />
//                 <input type="number" name="feesPaid" value={editData.feesPaid || ""} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Fees Paid" />

//                 <div className="flex justify-end gap-2">
//                   <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
//                   <button type="button" onClick={() => setShowModal(false)} className="bg-gray-400 px-4 py-2 rounded">Cancel</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//       </main>
//     </AdminLayout>
//   );
// };

// export default StudentCard;



































































































//  import React, { useContext, useEffect, useState } from "react";
// import DataTable from "react-data-table-component";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// //import AdminLayout from "../Layouts/AdminLayout";
// import { adminDataContext } from "../Context-Api/AdminContext";
// import { authDataContext } from "../Context-Api/AuthContext";
// import AdminLayout from "./AdminLayout";

// const StudentCard = () => {
//   const { adminData, fetchAdminData } = useContext(adminDataContext);
//   const { serverUrl } = useContext(authDataContext);
//   const { students = [] } = adminData?.admin || [];

//   const [totalStudents, setTotalStudents] = useState([]);
//   const [filterText, setFilterText] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [editData, setEditData] = useState(null);

//   useEffect(() => {
//     if (students.length > 0) {
//       setTotalStudents(students);
//     }
//   }, [students]);

//   const filteredStudents = totalStudents.filter(
//     (s) =>
//       s.name.toLowerCase().includes(filterText.toLowerCase()) ||
//       s.Classs?.name?.toLowerCase().includes(filterText.toLowerCase())
//   );

//   const handleUpdateById = (id) => {
//     const student = totalStudents.find((s) => s._id === id);
//     setEditData(student);
//     setShowModal(true);
//   };

//   const handleDeleteById = async (id) => {
//     try {
//       const response = await axios.delete(`${serverUrl}/admin/students/${id}`, { withCredentials: true });
//       if (response.status === 200) {
//         await fetchAdminData();
//         toast.success("Successfully Deleted Student...");
//         setTotalStudents((prev) => prev.filter((s) => s._id !== id));
//       }
//     } catch (err) {
//       toast.error(err?.response?.data?.message || "Delete failed.");
//     }
//   };

//   const handleFormChange = (e) => {
//     setEditData({ ...editData, [e.target.name]: e.target.value });
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put(
//         `${serverUrl}/api/admin/student/${editData._id}`,
//         {
//           name: editData.name,
//           parent: editData.parent,
//           Classs: editData.class,
//           dob: editData.dob,
//           adress: editData.adress,
//           phone: editData.phone,
//           feesPaid: editData.feesPaid,
//         },
//         { withCredentials: true }
//       );

//       if (response.status === 200) {
//         await fetchAdminData();
//         const updatedStudent = response.data.student;
//         setTotalStudents((prev) =>
//           prev.map((s) => (s._id === updatedStudent._id ? updatedStudent : s))
//         );
//         toast.success("Successfully updated the student...");
//         setTimeout(() => setShowModal(false), 300);
//       }
//     } catch (err) {
//       toast.error(err?.response?.data?.message || "Update failed.");
//     }
//   };

//   const columns = [
//     {
//       name: "Name",
//       selector: (row) => row.name,
//       sortable: true,
//     },
//     {
//       name: "Class",
//       selector: (row) => row.Classs?.name || "–",
//       sortable: true,
//     },
//     {
//       name: "DOB",
//       selector: (row) => new Date(row.dob).toLocaleDateString(),
//       sortable: true,
//     },
//     {
//       name: "Parent",
//       selector: (row) => row.parent,
//       sortable: true,
//     },
//     {
//       name: "Phone",
//       selector: (row) => row.phone,
//       sortable: true,
//     },
//     {
//       name: "Fees Paid",
//       selector: (row) => row.feesPaid ?? 0,
//       sortable: true,
//     },
//     {
//       name: "Actions",
//       cell: (row) => (
//         <div className="flex space-x-2">
//           <button onClick={() => handleUpdateById(row._id)} className="btn btn-sm btn-info">Edit</button>
//           <button onClick={() => handleDeleteById(row._id)} className="btn btn-sm btn-danger">Delete</button>
//         </div>
//       ),
//       ignoreRowClick: true,
//       allowOverflow: true,
//       button: true,
//     },
//   ];

//   return (
//     <AdminLayout adminName="Bright Future">
//       <main className="p-8">
//         <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} theme="colored" />
//         <h2 className="text-3xl font-bold mb-4 text-center">📋 Student Records</h2>
// <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
//   <h3 className="text-xl font-semibold mb-2 sm:mb-0">Students</h3>
//   <input
//     type="text"
//     placeholder="Search by name or class…"
//     className="p-2 border rounded-md w-full sm:w-64 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//     value={filterText}
//     onChange={(e) => setFilterText(e.target.value)}
//   />
// </div>
//         <DataTable
//           columns={columns}
//           data={filteredStudents}
//           pagination
//           highlightOnHover
//           striped
//           responsive
//           noDataComponent="No students found."
//         />

//         {showModal && editData && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//             <div className="bg-white p-6 rounded-lg w-[90%] max-w-lg shadow-lg">
//               <h2 className="text-xl font-bold mb-4">Update Student</h2>
//               <form onSubmit={handleFormSubmit} className="space-y-3">
//                 <input type="text" name="name" value={editData.name || ""} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Name" />
//                 <input type="text" name="parent" value={editData.parent || ""} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Parent" />
//                 <input type="date" name="dob" value={editData.dob?.substring(0, 10) || ""} onChange={handleFormChange} className="w-full border p-2 rounded" />
//                 <input type="text" name="class" value={editData.class || ""} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Class" />
//                 <input type="text" name="adress" value={editData.adress || ""} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Address" />
//                 <input type="text" name="phone" value={editData.phone || ""} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Phone" />
//                 <input type="number" name="feesPaid" value={editData.feesPaid || ""} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Fees Paid" />

//                 <div className="flex justify-end gap-2">
//                   <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
//                   <button type="button" onClick={() => setShowModal(false)} className="bg-gray-400 px-4 py-2 rounded">Cancel</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//       </main>
//     </AdminLayout>
//   );
// };

// export default StudentCard;











































































































































import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import { adminDataContext } from "../Context-Api/AdminContext";
//import { authDataContext } from "../Context-Api/AuthContext";
import AdminLayout from "./AdminLayout";
import { authDataContext } from "../Context-Api/AuthContext";
import { adminDataContext } from "../Context-Api/AdminContext";
const StudentCard = () => {
  const { adminData, fetchAdminData } = useContext(adminDataContext);
  const { serverUrl } = useContext(authDataContext);
  const { students = [] } = adminData?.admin || [];

  const [totalStudents, setTotalStudents] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (students.length > 0) {
      setTotalStudents(students);
    }
  }, [students]);

  const handleDeleteById = async (id) => {
    try {
      const response = await axios.delete(`${serverUrl}/admin/students/${id}`, {
        withCredentials: true,
      });
      if (response.status === 200) {
        await fetchAdminData();
        toast.success("Student deleted successfully.");
      }
    } catch (err) {
      toast.error(err?.response?.data?.message || "Delete failed.");
    }
  };
const [filterName, setFilterName] = useState("");
const [filterClass, setFilterClass] = useState("");
const [filterParent, setFilterParent] = useState("");
//const [filterPhone, setFilterPhone] = useState("");
const [filterSessionDate, setFilterSessionDate] = useState("");
//  const filteredStudents = students.filter((student) => {
//   const nameMatch = student.name.toLowerCase().includes(filterName.toLowerCase());
//   const classMatch = student.Classs?.name.toLowerCase().includes(filterClass.toLowerCase());
//   const parentMatch = student.parent?.toLowerCase().includes(filterParent.toLowerCase());
//   const phoneMatch = student.phone.toLowerCase().includes(filterPhone.toLowerCase());

//   return nameMatch && classMatch && parentMatch && phoneMatch;
// });
 





const filteredStudents = students.filter((student) => {
  const nameMatch = student.name?.toLowerCase().includes(filterName.toLowerCase());
  const classMatch = student.Classs?.name?.toLowerCase().includes(filterClass.toLowerCase());
  const parentMatch = student.parent?.toLowerCase().includes(filterParent.toLowerCase());
  
  const sessionDateMatch = filterSessionDate
    ? new Date(student.sessionDate).toLocaleDateString().includes(filterSessionDate)
    : true;

  return nameMatch && classMatch && parentMatch && sessionDateMatch;
});


const indexOfLast = currentPage * entriesPerPage;
  const indexOfFirst = indexOfLast - entriesPerPage;
  const currentData = filteredStudents.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredStudents.length / entriesPerPage);

  return (
    // <AdminLayout adminName="Bright Future">
    //   <ToastContainer />
    //   <div className="p-6">
    //     <div className="card shadow rounded">
    //       <div className="card-body">
    //         <div className="row mb-3">
    //           <div className="col-md-6 mb-2">
    //             <label>
    //               Show{" "}
    //               <select
    //                 className="form-control form-control-sm w-auto d-inline"
    //                 value={entriesPerPage}
    //                 onChange={(e) => {
    //                   setEntriesPerPage(parseInt(e.target.value));
    //                   setCurrentPage(1);
    //                 }}
    //               >
    //                 {[10, 25, 50, 100].map((num) => (
    //                   <option key={num} value={num}>
    //                     {num}
    //                   </option>
    //                 ))}
    //               </select>{" "}
    //               entries
    //             </label>
    //           </div>
    //           <div className="col-md-6 text-md-end">
    //             <input
    //               type="text"
    //               placeholder="Search by name/class"
    //               className="form-control form-control-sm"
    //               value={filterText}
    //               onChange={(e) => {
    //                 setFilterText(e.target.value);
    //                 setCurrentPage(1);
    //               }}
    //             />
    //           </div>
    //         </div>

    //         <div className="table-responsive">
    //           <table className="table table-hover table-bordered table-striped">
    //             <thead>
    //               <tr>
    //                 <th>#</th>
    //                 <th>Name</th>
    //                 <th>Class</th>
    //                 <th>Phone</th>
    //                 <th>DOB</th>
    //                 <th>Fees Paid</th>
    //                 <th>Actions</th>
    //               </tr>
    //             </thead>
    //             <tbody>
    //               {currentData.map((student, i) => (
    //                 <tr key={student._id}>
    //                   <td>{indexOfFirst + i + 1}</td>
    //                   <td>{student.name}</td>
    //                   <td>{student.Classs?.name || "–"}</td>
    //                   <td>{student.phone}</td>
    //                   <td>{new Date(student.dob).toLocaleDateString()}</td>
    //                   <td>{student.feesPaid ?? 0}</td>
    //                   <td>
    //                     <div className="btn-group btn-group-sm">
    //                       <button className="btn btn-info">View</button>
    //                       <button
    //                         className="btn btn-warning"
    //                         onClick={() => alert("Edit modal coming soon")}
    //                       >
    //                         Edit
    //                       </button>
    //                       <button
    //                         className="btn btn-danger"
    //                         onClick={() => handleDeleteById(student._id)}
    //                       >
    //                         Delete
    //                       </button>
    //                     </div>
    //                   </td>
    //                 </tr>
    //               ))}
    //               {currentData.length === 0 && (
    //                 <tr>
    //                   <td colSpan="7" className="text-center text-muted">
    //                     No students found.
    //                   </td>
    //                 </tr>
    //               )}
    //             </tbody>
    //           </table>
    //         </div>

    //         <div className="row mt-3">
    //           <div className="col-md-6">
    //             Showing {indexOfFirst + 1} to{" "}
    //             {Math.min(indexOfLast, filteredStudents.length)} of{" "}
    //             {filteredStudents.length} entries
    //           </div>
    //           <div className="col-md-6 text-md-end">
    //             <ul className="pagination pagination-sm justify-content-end mb-0">
    //               <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
    //                 <button
    //                   className="page-link"
    //                   onClick={() => setCurrentPage((prev) => prev - 1)}
    //                 >
    //                   Previous
    //                 </button>
    //               </li>
    //               {[...Array(totalPages)].map((_, i) => (
    //                 <li
    //                   key={i}
    //                   className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
    //                 >
    //                   <button className="page-link" onClick={() => setCurrentPage(i + 1)}>
    //                     {i + 1}
    //                   </button>
    //                 </li>
    //               ))}
    //               <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
    //                 <button
    //                   className="page-link"
    //                   onClick={() => setCurrentPage((prev) => prev + 1)}
    //                 >
    //                   Next
    //                 </button>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </AdminLayout>






















































    <AdminLayout adminName="Bright Future">
  <ToastContainer />
  <div className="p-6">
    <div className="bg-white shadow rounded p-4">
      {/* Top Filters */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">
            Show
            <select
              className="ml-2 px-2 py-1 border rounded text-sm"
              value={entriesPerPage}
              onChange={(e) => {
                setEntriesPerPage(parseInt(e.target.value));
                setCurrentPage(1);
              }}
            >
              {[10, 25, 50, 100].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
            entries
          </label>
        </div>

        {/* Search Filters */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full">
          <input
            type="text"
            placeholder="Search by Name"
            className="border px-3 py-1 rounded text-sm"
            value={filterName}
            onChange={(e) => {
              setFilterName(e.target.value);
              setCurrentPage(1);
            }}
          />
          <input
            type="text"
            placeholder="Search by Class"
            className="border px-3 py-1 rounded text-sm"
            value={filterClass}
            onChange={(e) => {
              setFilterClass(e.target.value);
              setCurrentPage(1);
            }}
          />
          <input
            type="text"
            placeholder="Search by Parent"
            className="border px-3 py-1 rounded text-sm"
            value={filterParent}
            onChange={(e) => {
              setFilterParent(e.target.value);
              setCurrentPage(1);
            }}
          />
          <input
            type="text"
            placeholder="Search by Phone"
            className="border px-3 py-1 rounded text-sm"
            value={filterPhone}
            onChange={(e) => {
              setFilterPhone(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full">
  <input
    type="text"
    placeholder="Search by Name"
    className="border px-3 py-1 rounded text-sm"
    value={filterName}
    onChange={(e) => {
      setFilterName(e.target.value);
      setCurrentPage(1);
    }}
  />
  <input
    type="text"
    placeholder="Search by Class"
    className="border px-3 py-1 rounded text-sm"
    value={filterClass}
    onChange={(e) => {
      setFilterClass(e.target.value);
      setCurrentPage(1);
    }}
  />
  <input
    type="text"
    placeholder="Search by Parent"
    className="border px-3 py-1 rounded text-sm"
    value={filterParent}
    onChange={(e) => {
      setFilterParent(e.target.value);
      setCurrentPage(1);
    }}
  />
  <input
    type="text"
    placeholder="Search by Session Date (e.g. 6/22/2025)"
    className="border px-3 py-1 rounded text-sm"
    value={filterSessionDate}
    onChange={(e) => {
      setFilterSessionDate(e.target.value);
      setCurrentPage(1);
    }}
  />
</div>

      </div>

      {/* Table */}
      <div className="overflow-auto">
        <table className="min-w-full text-sm border border-gray-200">
          {/* <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-3 py-2 border">#</th>
              <th className="px-3 py-2 border">Name</th>
              <th className="px-3 py-2 border">Class</th>
              <th className="px-3 py-2 border">Phone</th>
              <th className="px-3 py-2 border">DOB</th>
              <th className="px-3 py-2 border">Fees Paid</th>
              <th className="px-3 py-2 border">Actions</th>
            </tr>
          </thead> */}

          <thead className="bg-gray-100 text-left">
  <tr>
    <th className="px-3 py-2 border">#</th>
    <th className="px-3 py-2 border">Name</th>
    <th className="px-3 py-2 border">Class</th>
    <th className="px-3 py-2 border">Parent</th>
    <th className="px-3 py-2 border">Phone</th>
    <th className="px-3 py-2 border">DOB</th>
    <th className="px-3 py-2 border">Fees Paid</th>
    <th className="px-3 py-2 border">Actions</th>
  </tr>
</thead>

          {/* <tbody>
            {currentData.map((student, i) => (
              <tr key={student._id} className="border-t">
                <td className="px-3 py-2 border">{indexOfFirst + i + 1}</td>
                <td className="px-3 py-2 border">{student.name}</td>
                <td className="px-3 py-2 border">{student.Classs?.name || "–"}</td>
                <td className="px-3 py-2 border">{student.phone}</td>
                <td className="px-3 py-2 border">{new Date(student.dob).toLocaleDateString()}</td>
                <td className="px-3 py-2 border">{student.feesPaid ?? 0}</td>
                <td className="px-3 py-2 border space-x-2">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded text-xs">View</button>
                  <button
                    className="bg-yellow-500 text-white px-2 py-1 rounded text-xs"
                    onClick={() => alert("Edit modal coming soon")}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded text-xs"
                    onClick={() => handleDeleteById(student._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {currentData.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center text-gray-500 py-4">
                  No students found.
                </td>
              </tr>
            )}
          </tbody> */}


          <tbody>
  {currentData.map((student, i) => (
    <tr key={student._id} className="border-t">
      <td className="px-3 py-2 border">{indexOfFirst + i + 1}</td>
      <td className="px-3 py-2 border">{student.name}</td>
      <td className="px-3 py-2 border">{student.Classs?.name || "–"}</td>
      <td className="px-3 py-2 border">{student.parent || "–"}</td>
      <td className="px-3 py-2 border">{student.phone}</td>
      <td className="px-3 py-2 border">{new Date(student.dob).toLocaleDateString()}</td>
      <td className="px-3 py-2 border">{student.feesPaid ?? 0}</td>
      <td className="px-3 py-2 border space-x-2">
        <button className="bg-blue-500 text-white px-2 py-1 rounded text-xs">View</button>
        <button
          className="bg-yellow-500 text-white px-2 py-1 rounded text-xs"
          onClick={() => alert("Edit modal coming soon")}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white px-2 py-1 rounded text-xs"
          onClick={() => handleDeleteById(student._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  ))}
  {currentData.length === 0 && (
    <tr>
      <td colSpan="8" className="text-center text-gray-500 py-4">
        No students found.
      </td>
    </tr>
  )}
</tbody>

        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-4">
        <div className="text-sm">
          Showing {indexOfFirst + 1} to {Math.min(indexOfLast, filteredStudents.length)} of{" "}
          {filteredStudents.length} entries
        </div>
        <div className="flex items-center gap-1 mt-2 md:mt-0">
          <button
            className={`px-2 py-1 border rounded text-sm ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`px-3 py-1 border rounded text-sm ${
                currentPage === i + 1 ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className={`px-2 py-1 border rounded text-sm ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
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

export default StudentCard;


