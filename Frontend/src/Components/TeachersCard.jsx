 import React, { useContext, useEffect, useState } from 'react';
 import { Sidebar } from './Sidebar';
 import { adminDataContext } from '../Context-Api/AdminContext';
 import { authDataContext } from '../Context-Api/AuthContext';
 import axios from 'axios';
 import { ToastContainer,toast } from 'react-toastify';
 import "react-toastify/dist/ReactToastify.css"; // Ensure this is imported
import { FaBars, FaUserCircle } from 'react-icons/fa';
import AdminLayout from './AdminLayout';
//  const TeachersCard = () => {
//  const { adminData } = useContext(adminDataContext);
//  const { serverUrl } = useContext(authDataContext);
//  const { fetchAdminData } = useContext(adminDataContext);
//  const { teachers = [] } = adminData?.admin || {};
//  const [totalTeachers, setTotalTeachers] = useState([]);
//  const [showModal, setShowModal] = useState(false);
//  const [editData, setEditData] = useState(null); // holds current student data
//  const {assignedClass} = teachers;
//  const [isSidebarOpen,setIsSidebarOpen] = useState(false);
//  const [section,setSections]  = useState('');
//  console.log("teachers",teachers);
//    useEffect(() => {
//      if (teachers && teachers.length > 0) {
//        setTotalTeachers(teachers);
//      }
//    }, [teachers]);

//    const handleDelete = async (index) => {
//      const studentToDelete = totalTeachers[index];
//      if (!studentToDelete?._id) {
//        console.log("No Valid student id found!");
//        return;
//      }

//      try {
//        const response = await axios.delete(`${serverUrl}/api/admin/teacher/${studentToDelete._id}`, {
//          withCredentials: true,
//        });

//        if (response.status === 200) {
//          await fetchAdminData();
//          toast.success("Teacher Deleted SuccessFully")
//          const updatedStudents = totalTeachers.filter(s => s._id !== studentToDelete._id);
//          setTotalTeachers(updatedStudents);
//          console.log(`Deleted student: ${studentToDelete.name}`);
//        }
//      } catch (err) {
//          toast.error(err?.response?.data.message)
//        console.error("Error deleting student:", err);
//      }
//    };
//    const handleUpdate = (index) => {
//      const student = totalTeachers[index];
//      setEditData(student);
//      setShowModal(true);
//    };
//    const handleFormChange = (e) => {
//      setEditData({ ...editData, [e.target.name]: e.target.value });
//    }; 
//    const handleFormSubmit = async (e) => {
//      e.preventDefault();
  
//      try {
//        // Ensure that the correct class ID is used, either class name or _id
//        const assignedClassId = editData.class ? editData.class._id : editData.class; // Assuming 'class' can be an object
  
//        const response = await axios.put(`${serverUrl}/admin/teacher/${editData._id}`, {
//          name: editData.name,
//          assignedClass: assignedClassId,
//          dob: editData.dob,
//          adress: editData.adress,
//          phone: editData.phone,
//          salary: editData.salary,
//        }, {
//          withCredentials: true,
//        });
//        console.log("Response:", response); // Log response to check the data structure
  
//        if (response.status === 200) {
//          await fetchAdminData();
//          const updatedTeacher = response.data.teacher;
//           // ✅ Update local state
//         setTotalTeachers((prevTeachers) =>
//           prevTeachers.map((teacher) =>
//             teacher._id === updatedTeacher._id ? updatedTeacher : teacher
//           )
//         );
//         toast.success("Teacher Updated Successfully!");
//  setTimeout(() => setShowModal(false), 200); // Give the toast time to rende
//          //setShowModal(false); // Close the modal
//         // .success("Teacher Updated Successfully!"); // Trigger success toast
//        }
//      } catch (err) {
//        toast.error(err?.response?.data.message || "An error occurred while updating teacher.");
//        console.error("Update failed:", err);
//      }
//    };
  
  
//    return (
//      <AdminLayout adminName='Bright Future'>
//        <main className="flex-1 ml-0 md:ml-64 p-8">
//          <h2 className="text-3xl font-bold mb-6 text-center">🎓 Teachers Profiles</h2>
//            {/* ToastContainer placed here — always mounted */}
//        <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} theme="colored" />
//          {/* <div className="grid grid-cols-3 items-center gap-3">
// //           {totalTeachers.map((student, idx) => (
// //             <div key={idx} className="bg-white shadow rounded-xl p-6 border">
// //               <img
// //                 src={student.profile || "https://via.placeholder.com/150"}
// //                 alt={student.name}
// //                 className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-blue-500 shadow"
// //               />
// //               <div className="text-center  mt-4">
// //                 <h3 className="text-xl font-semibold text-gray-800">{student.name}</h3>
// //                 <p><strong>Class:</strong> {student.assignedClass.name}</p>
// //                 <p><strong>Section:</strong> {student.assignedClass.section}</p>
// //                 <p><strong>DOB:</strong> {new Date(student.dob).toDateString()}</p>
// //                 <p><strong>Address:</strong> {student.adress}</p>
// //                 <p><strong>Phone:</strong> {student.phone}</p>
// //                 <p><strong>Salary:</strong> {student.salary}</p>
// //                 <button onClick={() => handleUpdate(idx)} className="bg-yellow-400 px-4 py-1 mt-2 rounded">Update</button>
// //                 <button onClick={() => handleDelete(idx)} className="bg-red-500 text-white px-4 py-1 ml-2 rounded">Delete</button>
// //               </div>
// //             </div>
// //           ))}
//          </div> */}
//          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-start">
//    {totalTeachers.map((teacher, idx) => (
//      <div key={idx} className="bg-white shadow rounded-xl p-6 border">
//        <img
//          src={teacher.profile || "https://via.placeholder.com/150"}
//          alt={teacher.name}
//          className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-blue-500 shadow"
//        />
//        <div className="text-center mt-4">
//          <h3 className="text-xl font-semibold text-gray-800">{teacher.name}</h3>
//          {teacher.assignedClass.map((item,idx)=>{
//           return (
//             <>
//           <p key={idx}><strong>Class:</strong> {item.name || "N/A"}</p>
//          <p key={idx}><strong>Section:</strong> {item.section || "N/A"}</p>
//          </>
//           )
//          })}
//          <p><strong>DOB:</strong> {new Date(teacher.dob).toDateString()}</p>
//          <p><strong>Address:</strong> {teacher.adress}</p>
//          <p><strong>Phone:</strong> {teacher.phone}</p>
//          <p><strong>Salary:</strong> {teacher.salary}</p>
//          <div className="mt-2">
//            <button onClick={() => handleUpdate(idx)} className="bg-yellow-400 px-4 py-1 rounded">
//              Update
//            </button>
//            <button onClick={() => handleDelete(idx)} className="bg-red-500 text-white px-4 py-1 ml-2 rounded">
//              Delete
//            </button>
//          </div>
//        </div>
//      </div>
//    ))}
//  </div>


//          {/* Modal Popup */}
//          {showModal && editData && (
//            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//              <div className="bg-white p-6 rounded-lg w-[90%] max-w-lg shadow-lg">
//                <h2 className="text-xl font-bold mb-4">Update Student</h2>
//                <form onSubmit={handleFormSubmit} className="space-y-3">
//                  <input type="text" name="name" value={editData.name || ""} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Name" />
//              {/*    <input type="text" name="class" value={editData.class} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Class" /> */}
//                  <input type="date" name="dob" value={editData.dob?.substring(0, 10) || ""} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="DOB" />
//                  <input type="text" name="class" value={editData.class || ""} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Class" />
//                  <input type="text" name="section" value={editData.section || ""} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Section" />
//                  <input type="text" name="adress" value={editData.adress || ""} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Address" />
//                  <input type="number" name="phone" value={editData.phone || ""} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Phone" />
//                  <input type="number" name="salary" value={editData.salary || ""} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Salary" />
//                  <div className="flex justify-end gap-2">
//                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
//                    <button onClick={() => setShowModal(false)} type="button" className="bg-gray-400 px-4 py-2 rounded">Cancel</button>
//                  </div>
//                </form>
//              </div>
//            </div>
//          )}
//        </main>
//      </AdminLayout>
//    );
//  };
// export default TeachersCard;




































































//import React, { useContext, useEffect, useState } from "react";
//import { ToastContainer, toast } from "react-toastify";
//import 'react-toastify/dist/ReactToastify.css';
//import axios from "axios";
//import { adminDataContext, authDataContext } from "../context"; // adjust path

// const TeachersCard = () => {
//   const { adminData, fetchAdminData } = useContext(adminDataContext);
//   const { serverUrl } = useContext(authDataContext);
//   const { teachers = [] } = adminData?.admin || {};

//   const [totalTeachers, setTotalTeachers] = useState([]);
//   const [filteredTeachers, setFilteredTeachers] = useState([]);
//   const [search, setSearch] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [editData, setEditData] = useState(null);

//   useEffect(() => {
//     setTotalTeachers(teachers);
//     setFilteredTeachers(teachers);
//   }, [teachers]);

//   useEffect(() => {
//     const lowerSearch = search.toLowerCase();
//     setFilteredTeachers(
//       totalTeachers.filter(t =>
//         t.name.toLowerCase().includes(lowerSearch) ||
//         t.phone?.toString().includes(lowerSearch) ||
//         t.assignedClass?.some(c =>
//           c.name?.toLowerCase().includes(lowerSearch) ||
//           c.section?.toLowerCase().includes(lowerSearch)
//         )
//       )
//     );
//   }, [search, totalTeachers]);

//   const handleDelete = async (index) => {
//     const teacherToDelete = filteredTeachers[index];
//     if (!teacherToDelete?._id) return;

//     try {
//       const response = await axios.delete(`${serverUrl}/api/admin/teacher/${teacherToDelete._id}`, {
//         withCredentials: true,
//       });

//       if (response.status === 200) {
//         toast.success("Teacher Deleted Successfully");
//         await fetchAdminData();
//       }
//     } catch (err) {
//       toast.error(err?.response?.data.message || "Delete Failed");
//     }
//   };

//   const handleUpdate = (index) => {
//     const teacher = filteredTeachers[index];
//     setEditData(teacher);
//     setShowModal(true);
//   };

//   const handleFormChange = (e) => {
//     setEditData({ ...editData, [e.target.name]: e.target.value });
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const assignedClassId = editData.class?._id || editData.class;

//       const response = await axios.put(`${serverUrl}/admin/teacher/${editData._id}`, {
//         name: editData.name,
//         assignedClass: assignedClassId,
//         dob: editData.dob,
//         adress: editData.adress,
//         phone: editData.phone,
//         salary: editData.salary,
//       }, {
//         withCredentials: true,
//       });

//       if (response.status === 200) {
//         toast.success("Teacher Updated Successfully");
//         await fetchAdminData();
//         setShowModal(false);
//       }
//     } catch (err) {
//       toast.error(err?.response?.data.message || "Update Failed");
//     }
//   };

//   return (
//     <AdminLayout>
//     <div className="ml-0 md:ml-64 p-6 bg-gray-100 max-h-full">
//       <ToastContainer position="top-right" autoClose={3000} theme="colored" />
//       <h2 className="text-3xl font-bold mb-6 text-center">🎓 Teachers List</h2>

//       <div className="mb-4 flex flex-col sm:flex-row gap-3 justify-between">
//         <input
//           type="text"
//           placeholder="Search by name, phone, or class..."
//           className="p-2 border rounded w-full sm:w-1/2"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       <div className="overflow-x-auto bg-white shadow rounded-lg">
//         <table className="min-w-full table-auto">
//           <thead className="bg-blue-600 text-white">
//             <tr>
//               <th className="px-4 py-3 text-left">Name</th>
//               <th className="px-4 py-3 text-left">Class</th>
//               <th className="px-4 py-3 text-left">Section</th>
//               <th className="px-4 py-3 text-left">Phone</th>
//               <th className="px-4 py-3 text-left">DOB</th>
//               <th className="px-4 py-3 text-left">Address</th>
//               <th className="px-4 py-3 text-left">Salary</th>
//               <th className="px-4 py-3 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredTeachers.length > 0 ? (
//               filteredTeachers.map((teacher, idx) => (
//                 <tr key={idx} className="border-b hover:bg-gray-50">
//                   <td className="px-4 py-3">{teacher.name}</td>
//                   <td className="px-4 py-3">
//                     {teacher.assignedClass?.map(cls => cls.name).join(", ")}
//                   </td>
//                   <td className="px-4 py-3">
//                     {teacher.assignedClass?.map(cls => cls.section).join(", ")}
//                   </td>
//                   <td className="px-4 py-3">{teacher.phone}</td>
//                   <td className="px-4 py-3">{new Date(teacher.dob).toDateString()}</td>
//                   <td className="px-4 py-3">{teacher.adress}</td>
//                   <td className="px-4 py-3">{teacher.salary}</td>
//                   <td className="px-4 py-3 space-x-2">
//                     <button
//                       onClick={() => handleUpdate(idx)}
//                       className="bg-yellow-400 text-black px-3 py-1 rounded"
//                     >
//                       Update
//                     </button>
//                     <button
//                       onClick={() => handleDelete(idx)}
//                       className="bg-red-500 text-white px-3 py-1 rounded"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td className="px-4 py-4 text-center text-gray-500" colSpan={8}>
//                   No teachers found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {showModal && editData && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg w-[90%] max-w-lg">
//             <h2 className="text-xl font-semibold mb-4">Edit Teacher</h2>
//             <form onSubmit={handleFormSubmit} className="space-y-3">
//               <input
//                 type="text"
//                 name="name"
//                 value={editData.name || ""}
//                 onChange={handleFormChange}
//                 className="w-full border p-2 rounded"
//                 placeholder="Name"
//               />
//               <input
//                 type="date"
//                 name="dob"
//                 value={editData.dob?.substring(0, 10) || ""}
//                 onChange={handleFormChange}
//                 className="w-full border p-2 rounded"
//               />
//               <input
//                 type="text"
//                 name="adress"
//                 value={editData.adress || ""}
//                 onChange={handleFormChange}
//                 className="w-full border p-2 rounded"
//                 placeholder="Address"
//               />
//               <input
//                 type="number"
//                 name="phone"
//                 value={editData.phone || ""}
//                 onChange={handleFormChange}
//                 className="w-full border p-2 rounded"
//                 placeholder="Phone"
//               />
//               <input
//                 type="number"
//                 name="salary"
//                 value={editData.salary || ""}
//                 onChange={handleFormChange}
//                 className="w-full border p-2 rounded"
//                 placeholder="Salary"
//               />
//               <div className="flex justify-end gap-2">
//                 <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
//                   Save
//                 </button>
//                 <button onClick={() => setShowModal(false)} type="button" className="bg-gray-400 px-4 py-2 rounded">
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//     </AdminLayout>
//   );
// };

//export default TeachersCard;

















const TeachersCard = () => {
  const { adminData, fetchAdminData } = useContext(adminDataContext);
  const { serverUrl } = useContext(authDataContext);
  const { teachers = [] } = adminData?.admin || {};
  const [totalTeachers,setTotalTeachers] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterPhone, setFilterPhone] = useState("");
  const [filterClass, setFilterClass] = useState("");
  const [filterSection, setFilterSection] = useState("");
  const [filterDOB, setFilterDOB] = useState("");

  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
   if (Array.isArray(teachers)) {
    setTotalTeachers(teachers);
    console.log("teachers",teachers);
  }
    setCurrentPage(1); // Reset to page 1 on filter change
  }, [filterName, filterPhone, filterClass, filterSection, filterDOB,teachers]);

  // const filteredTeachers = totalTeachers.filter((t) => {
  //   const nameMatch = t.name?.toLowerCase().includes(filterName.toLowerCase());
  //   const phoneMatch = t.phone?.toString().includes(filterPhone);
  //   const classMatch = t.assignedClass?.some(cls =>
  //     cls.name?.toLowerCase().includes(filterClass.toLowerCase())
  //   );
  //   const sectionMatch = t.assignedClass?.some(cls =>
  //     cls.section?.toLowerCase().includes(filterSection.toLowerCase())
  //   );
  //   const dobMatch = filterDOB
  //     ? new Date(t.dob).toLocaleDateString().includes(filterDOB)
  //     : true;

  //   return nameMatch && phoneMatch && classMatch && sectionMatch && dobMatch;
  // });
const filteredTeachers = totalTeachers.filter((t) => {
  const nameMatch = filterName === "" || t.name?.toLowerCase().includes(filterName.toLowerCase());
  const phoneMatch = filterPhone === "" || t.phone?.toString().includes(filterPhone);
  const classMatch = filterClass === "" || t.assignedClass?.some(cls =>
    cls.name?.toLowerCase().includes(filterClass.toLowerCase())
  );
  const sectionMatch = filterSection === "" || t.assignedClass?.some(cls =>
    cls.section?.toLowerCase().includes(filterSection.toLowerCase())
  );
  const dobMatch = filterDOB === "" || new Date(t.dob).toLocaleDateString().includes(filterDOB);

  return nameMatch && phoneMatch && classMatch && sectionMatch && dobMatch;
});

  const indexOfLast = currentPage * entriesPerPage;
  const indexOfFirst = indexOfLast - entriesPerPage;
  const currentData = filteredTeachers.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredTeachers.length / entriesPerPage);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${serverUrl}/api/admin/teacher/${id}`, { withCredentials: true });
      if (res.status === 200) {
        toast.success("Teacher deleted");
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
          {/* Top Filter Controls */}
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
              <input type="text" placeholder="Phone"
                className="border px-3 py-1 rounded text-sm"
                value={filterPhone}
                onChange={(e) => setFilterPhone(e.target.value)}
              />
              <input type="text" placeholder="Class"
                className="border px-3 py-1 rounded text-sm"
                value={filterClass}
                onChange={(e) => setFilterClass(e.target.value)}
              />
              <input type="text" placeholder="Section"
                className="border px-3 py-1 rounded text-sm"
                value={filterSection}
                onChange={(e) => setFilterSection(e.target.value)}
              />
              <input type="text" placeholder="DOB (e.g. 6/25/2025)"
                className="border px-3 py-1 rounded text-sm"
                value={filterDOB}
                onChange={(e) => setFilterDOB(e.target.value)}
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-auto">
            <table className="w-full border border-gray-200 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-3 py-2 border">#</th>
                  <th className="px-3 py-2 border">Name</th>
                   <th className="px-3 py-2 border">Profile</th>
                  <th className="px-3 py-2 border">Class</th>
                  <th className="px-3 py-2 border">Section</th>
                   <th className="px-3 py-2 border">Incharge</th>
                   <th className="px-3 py-2 border">Subject</th>
                  <th className="px-3 py-2 border hidden sm:table-cell">Phone</th>
                  <th className="px-3 py-2 border hidden md:table-cell">DOB</th>
                  <th className="px-3 py-2 border hidden lg:table-cell">Address</th>
                  <th className="px-3 py-2 border">Salary</th>
                  <th className="px-3 py-2 border">Actions</th>
                </tr>
              </thead>
              <tbody>
              {currentData.length > 0 ? currentData.map((teacher, i) => {
  const { profileImage } = teacher;
  const imageSrc = profileImage?.data
    ? `data:${profileImage.contentType};base64,${profileImage.data}`
    : 'https://via.placeholder.com/50';

  return (
    <tr key={teacher._id} className="border-t">
      <td className="px-3 py-2 border">{indexOfFirst + i + 1}</td>
      <td className="px-3 py-2 border">{teacher.name}</td>
       <td className="px-3 py-2 border">
            <img
              src={imageSrc}
              alt={teacher.name}
              className="w-10 h-10 rounded-full object-cover"
            />
          </td>
      {/* Class Name */}
      <td className="px-3 py-2 border">
        {teacher.assignedClass?.map(cls => cls.class?.name || "N/A").join(", ")}
      </td>

      {/* Section */}
      <td className="px-3 py-2 border">
        {teacher.assignedClass?.map(cls => cls.class?.section || "N/A").join(", ")}
      </td>

      {/* Incharge */}
      <td className="px-3 py-2 border">
        {teacher.assignedClass?.map(cls => cls.incharge ? "true" : "false").join(", ")}
      </td>

      {/* Subjects */}
      <td className="px-3 py-2 border">
        {teacher.teachSubject?.map(subject => subject.name || "N/A").join(", ")}
      </td>

      {/* Phone */}
      <td className="px-3 py-2 border hidden sm:table-cell">{teacher.phone}</td>

      {/* DOB */}
      <td className="px-3 py-2 border hidden md:table-cell">
        {new Date(teacher.dob).toLocaleDateString()}
      </td>

      {/* Address */}
      <td className="px-3 py-2 border hidden lg:table-cell">{teacher.address}</td>

      {/* Salary */}
      <td className="px-3 py-2 border">{teacher.salary}</td>

      {/* Actions */}
      <td className="px-3 py-2 border space-x-1">
        <button className="bg-blue-500 text-white px-2 py-1 rounded text-xs">View</button>
        <button className="bg-yellow-500 text-white px-2 py-1 rounded text-xs">Edit</button>
        <button
          onClick={() => handleDelete(teacher._id)}
          className="bg-red-500 text-white px-2 py-1 rounded text-xs"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}) : (
  <tr>
    <td colSpan="12" className="text-center py-4 text-gray-500">
      No teachers found.
    </td>
  </tr>
)}

              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-4">
            <div className="text-sm">
              Showing {indexOfFirst + 1} to {Math.min(indexOfLast, filteredTeachers.length)} of {filteredTeachers.length} entries
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

export default TeachersCard;
