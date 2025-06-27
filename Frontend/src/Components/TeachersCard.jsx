 import React, { useContext, useEffect, useState } from 'react';
 import { Sidebar } from './Sidebar';
 import { adminDataContext } from '../Context-Api/AdminContext';
 import { authDataContext } from '../Context-Api/AuthContext';
 import axios from 'axios';
 import { ToastContainer,toast } from 'react-toastify';
 import "react-toastify/dist/ReactToastify.css"; // Ensure this is imported
import { FaBars, FaUserCircle } from 'react-icons/fa';
import AdminLayout from './AdminLayout';
import imageCompression from 'browser-image-compression';



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
  const { subjects = [] } = adminData?.admin || {};
  const [totalTeachers,setTotalTeachers] = useState([]);
  const [filterName, setFilterName] = useState("");
  const {classes = [] } = adminData?.admin || {};
  const [filterPhone, setFilterPhone] = useState("");
  const [filterClass, setFilterClass] = useState("");
  const [filterSection, setFilterSection] = useState("");
  const [filterDOB, setFilterDOB] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingTeacher, setEditingTeacher] = useState(null);
  const [formData, setFormData] = useState({
  name: "",
  phone: "",
  dob: "",
  address: "",
  salary: "",
  sessionId:"",
  CnicNumber: '',
  assignedClass: [],
  teachSubject: [],
  profileImageFile: null,
  CnicFrontImage: null,
  CnicBackImage: null,
  CnicFrontPreview: null,
  CnicBackPreview: null,

});


  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);



useEffect(() => {
  if (Array.isArray(teachers)) {
    setTotalTeachers(teachers);
  }
  setCurrentPage(1);
}, [teachers,classes]); // instead of including filterName, filterPhone, etc.
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

const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: type === 'checkbox' ? checked : value,
  }));
};



const handleFileChange = async (e) => {
  const { name, files } = e.target;
  if (!files || files.length === 0) return;

  try {
    const compressedFile = await imageCompression(files[0], {
      maxSizeMB: 1,
      maxWidthOrHeight: 1024,
      useWebWorker: true,
    });

    const previewURL = URL.createObjectURL(compressedFile);

    setFormData((prev) => ({
      ...prev,
      [name]: compressedFile,
      [`${name}Preview`]: previewURL,
    }));
  } catch (error) {
    console.error("Image compression error:", error);
    toast.error("Failed to compress image. Please try a smaller file.");
  }
};



  const indexOfLast = currentPage * entriesPerPage;
  const indexOfFirst = indexOfLast - entriesPerPage;
  const currentData = filteredTeachers.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredTeachers.length / entriesPerPage);





const handleUpdateTeacher = async (e) => {
  e.preventDefault();

  const data = new FormData();

  // 1. Whitelisted fields to update
  const allowedKeys = [
    "name", "phone", "dob", "address", "salary", "gender",
    "qualifications", "sessionId", "email", "password",
    "CnicNumber", "assignedClass", "teachSubject", "incharge"
  ];

  const updatedFields = {};
  allowedKeys.forEach((key) => {
    const value = formData[key];
    if (
      value !== undefined &&
      value !== null &&
      !(typeof value === 'string' && value.trim() === '') &&
      !(Array.isArray(value) && value.length === 0)
    ) {
      updatedFields[key] = value;
    }
  });

  // 2. Add text/structured fields
  data.append("data", JSON.stringify(updatedFields));

  // 3. Append images/files only if provided
  if (formData.profileImageFile) {
    data.append("profileImage", formData.profileImageFile);
  }
  if (formData.CnicFrontImage) {
    data.append("CnicFrontImage", formData.CnicFrontImage);
  }
  if (formData.CnicBackImage) {
    data.append("CnicBackImage", formData.CnicBackImage);
  }

  // 4. Send request
  try {
    const res = await axios.put(
      `${serverUrl}/api/admin/teacher/${editingTeacher._id}`,
      data,
      {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" }
      }
    );

    if (res.status === 200) {
      toast.success("Teacher updated successfully!");
      const updatedTeacher = res.data?.updatedTeacher || res.data?.teacher || {};

      // Update UI with new teacher data
      setTotalTeachers(prev =>
        prev.map(t => t._id === editingTeacher._id ? { ...t, ...updatedTeacher } : t)
      );

      // Close modal & refresh data
      setShowEditModal(false);
      setEditingTeacher(null);
      await fetchAdminData();
    }
  } catch (err) {
    toast.error(err.response?.data?.message || err.message);
  }
};


  const handleDelete = async (id) => {
      // Optimistically update UI
  setTotalTeachers((prev) => prev.filter((t) => t._id !== id));
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
        <button onClick={() => {
  setEditingTeacher(teacher);
  setFormData({
    name: teacher.name,
    phone: teacher.phone,
    dob: teacher.dob.split('T')[0],
    address: teacher.address,
    salary: teacher.salary,
    gender: teacher.gender,
    email: teacher.email,
    password: "", // don't preload password
    qualifications: teacher.qualifications,
    sessionId: teacher.sessionId || "",
    CnicNumber: teacher.CnicNumber,
    assignedClass: teacher.assignedClass.map(cls => cls.class._id),
    teachSubject: teacher.teachSubject.map(s => s._id),
    profileImageFile: null,
    CnicFrontImage: null,
    CnicBackImage: null,
    incharge: teacher.assignedClass?.some(cls => cls.incharge) || false,

    // ✅ Preview setup
    CnicFrontPreview: teacher.CnicFrontImage?.data
      ? `data:${teacher.CnicFrontImage.contentType};base64,${teacher.CnicFrontImage.data}`
      : null,
    CnicBackPreview: teacher.CnicBackImage?.data
      ? `data:${teacher.CnicBackImage.contentType};base64,${teacher.CnicBackImage.data}`
      : null,
  });
  setShowEditModal(true);
}}

         className="bg-yellow-500 text-white px-2 py-1 rounded text-xs">Edit</button>
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

{showEditModal && (
  <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
    <div className="bg-white max-h-[90vh] overflow-y-auto w-full max-w-3xl rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-[rgb(1,1,93)] mb-4">Edit Teacher</h2>

      <form onSubmit={handleUpdateTeacher} className="space-y-5" encType="multipart/form-data">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Profile Image */}
          <div className="w-full flex flex-col items-center sm:col-span-2">
            <label htmlFor="editProfileImage" className="cursor-pointer relative group">
              {editingTeacher?.profileImage?.data ? (
                <img
                  src={`data:${editingTeacher.profileImage.contentType};base64,${editingTeacher.profileImage.data}`}
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover border-2 border-blue-500"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center border-2 border-gray-300 hover:border-blue-500">
                  <FaUserCircle className="text-4xl text-[rgb(1,1,93)] group-hover:text-[rgb(193,151,5)]" />
                </div>
              )}
              <input
                type="file"
                id="editProfileImage"
                accept="image/*"
                onChange={e => setFormData(prev => ({
                  ...prev, profileImageFile: e.target.files[0]
                }))}
                className="hidden"
              />
            </label>
            <p className="text-xs text-[rgb(1,1,93)] mt-2">Click to upload profile</p>
          </div>

          {/* Name */}
          <InputField label="Full Name" name="name" value={formData.name} onChange={handleChange} />
          {/* Phone */}
          <InputField label="Phone" name="phone" value={formData.phone} onChange={handleChange} />
          {/* DOB */}
          <InputField label="DOB" type="date" name="dob" value={formData.dob} onChange={handleChange} />
          {/* Address */}
          <InputField label="Address" name="address" value={formData.address} onChange={handleChange} />
          {/* Salary */}
          <InputField label="Salary" type="number" name="salary" value={formData.salary} onChange={handleChange} />

          {/* Gender */}
          <SelectField label="Gender" name="gender" value={formData.gender} onChange={handleChange} options={[
            { value: "", label: "Select Gender" },
            { value: "male", label: "Male" },
            { value: "female", label: "Female" }
          ]} />

          {/* Email */}
          <InputField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} />

          {/* Password */}
          <InputField label="Password" type="password" name="password" value={formData.password} onChange={handleChange} />

          {/* CNIC */}
          <InputField label="CNIC Number" name="CnicNumber" value={formData.CnicNumber} onChange={handleChange} minLength={13} />

          {/* Qualifications */}
          <InputField label="Qualifications" name="qualifications" value={formData.qualifications} onChange={handleChange} />

          {/* Session */}
          <SelectField label="Session" name="sessionId" value={formData.sessionId} onChange={handleChange}
            options={[
              { value: "", label: "Select Session" },
              ...adminData.admin.sessions.map(s => ({
                value: s._id,
                label: `${s.name} (${new Date(s.startDate).toLocaleDateString()} - ${new Date(s.endDate).toLocaleDateString()})`
              }))
            ]} />

          {/* Class */}
          <SelectField label="Assigned Class" name="assignedClass" value={formData.assignedClass} onChange={handleChange}
            options={classes.map(cls => ({
              value: cls._id,
              label: `${cls.name} - ${cls.section}`
            }))} />

          {/* Subject */}
          <SelectField label="Subject" name="teachSubject" value={formData.teachSubject} onChange={handleChange}
            options={subjects.map(s => ({ value: s._id, label: s.name }))} />

          {/* CNIC Front & Back Image */}
          {/* {editingTeacher?.CnicFrontImage?.data && (
  <img
    src={`data:${editingTeacher.CnicFrontImage.contentType};base64,${editingTeacher.CnicFrontImage.data}`}
    alt="CNIC Front"
    className="w-24 h-16 object-cover rounded border"
  />
)} */}
          {/* <div className="sm:col-span-2 space-y-2">
            <label className="text-sm text-gray-700">CNIC Front</label>
            <input type="file" accept="image/*" name="CnicFrontImage" onChange={handleFileChange} /> */}

            {/* {editingTeacher?.CnicBackImage?.data && (
  <img
    src={`data:${editingTeacher.CnicBackImage.contentType};base64,${editingTeacher.CnicBackImage.data}`}
    alt="CNIC BACKEND"
    className="w-24 h-16 object-cover rounded border"
  />
)} */}
            {/* <label className="text-sm text-gray-700">CNIC Back</label>
            <input type="file" accept="image/*" name="CnicBackImage" onChange={handleFileChange} />
          </div> */}
{/* <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
  <div>
    <label className="text-sm text-gray-700">CNIC Front</label>
    {editingTeacher?.CnicFrontImage?.data && (
      <img
        src={`data:${editingTeacher.CnicFrontImage.contentType};base64,${editingTeacher.CnicFrontImage.data}`}
        alt="CNIC Front"
        className="w-24 h-16 object-cover rounded border my-1"
      />
    )}
    <input type="file" accept="image/*" name="CnicFrontImage" onChange={handleFileChange} />
  </div>

  <div>
    <label className="text-sm text-gray-700">CNIC Back</label>
    {editingTeacher?.CnicBackImage?.data && (
      <img
        src={`data:${editingTeacher.CnicBackImage.contentType};base64,${editingTeacher.CnicBackImage.data}`}
        alt="CNIC Back"
        className="w-24 h-16 object-cover rounded border my-1"
      />
    )}
    <input type="file" accept="image/*" name="CnicBackImage" onChange={handleFileChange} />
  </div>
</div> */}
{/* CNIC Front & Back Image Upload */}
<div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
  {/* CNIC Front */}
  <div className="flex flex-col">
    <label className="text-sm font-medium text-[rgb(1,1,93)] mb-1">CNIC Front</label>
    {formData.CnicFrontPreview ? (
      <img
        src={formData.CnicFrontPreview}
        alt="CNIC Front Preview"
        className="w-28 h-20 object-cover rounded border mb-2"
      />
    ) : editingTeacher?.CnicFrontImage?.data && (
      <img
        src={`data:${editingTeacher.CnicFrontImage.contentType};base64,${editingTeacher.CnicFrontImage.data}`}
        alt="CNIC Front"
        className="w-28 h-20 object-cover rounded border mb-2"
      />
    )}
    <input
      type="file"
      name="CnicFrontImage"
      accept="image/*"
      onChange={handleFileChange}
      className="text-sm"
    />
  </div>

  {/* CNIC Back */}
  <div className="flex flex-col">
    <label className="text-sm font-medium text-[rgb(1,1,93)] mb-1">CNIC Back</label>
    {formData.CnicBackPreview ? (
      <img
        src={formData.CnicBackPreview}
        alt="CNIC Back Preview"
        className="w-28 h-20 object-cover rounded border mb-2"
      />
    ) : editingTeacher?.CnicBackImage?.data && (
      <img
        src={`data:${editingTeacher.CnicBackImage.contentType};base64,${editingTeacher.CnicBackImage.data}`}
        alt="CNIC Back"
        className="w-28 h-20 object-cover rounded border mb-2"
      />
    )}
    <input
      type="file"
      name="CnicBackImage"
      accept="image/*"
      onChange={handleFileChange}
      className="text-sm"
    />
  </div>
</div>


          {/* Incharge Checkbox */}
          <div className="flex items-center space-x-3 sm:col-span-2">
            <input
              type="checkbox"
              id="incharge"
              name="incharge"
              checked={formData.incharge}
              onChange={handleChange}
              className="w-5 h-5"
            />
            <label htmlFor="incharge" className="text-[rgb(1,1,93)] font-medium">
              Is In-Charge of the Class?
            </label>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-3 mt-6">
          <button
            type="button"
            onClick={() => setShowEditModal(false)}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-[rgb(193,151,5)] text-white px-4 py-2 rounded hover:bg-yellow-600"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  </div>
)}


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



const InputField= ({ label, name, type, value, onChange }) => (
  <div className="relative">
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="peer w-full p-3 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-green-500"
      placeholder=" "
    />
    <label
      htmlFor={name}
      className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-green-600"
    >
      {label}
    </label>
  </div>
);


const SelectField = ({ label, name, value, onChange, options }) => (
  <div className="relative">
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full p-3 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-green-500"
    >
      <option value="" disabled>Select {label}</option>
      {options.map(opt =>
        typeof opt === 'string'
          ? <option key={opt} value={opt}>{opt}</option>
          : <option key={opt.value} value={opt.value}>{opt.label}</option>
      )}
    </select>
    <label className="absolute left-3 -top-2 text-sm text-green-600 bg-white px-1">{label}</label>
  </div>
);