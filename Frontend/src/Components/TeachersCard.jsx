 import React, { useContext, useEffect, useState } from 'react';
 import { Sidebar } from './Sidebar';
 import { adminDataContext } from '../Context-Api/AdminContext';
 import { authDataContext } from '../Context-Api/AuthContext';
 import axios from 'axios';
 import { ToastContainer,toast } from 'react-toastify';
 import "react-toastify/dist/ReactToastify.css"; // Ensure this is imported
import { FaBars } from 'react-icons/fa';
 const TeachersCard = () => {
 const { adminData } = useContext(adminDataContext);
 const { serverUrl } = useContext(authDataContext);
 const { fetchAdminData } = useContext(adminDataContext);
 const { teachers = [] } = adminData?.admin || {};
 const [totalTeachers, setTotalTeachers] = useState([]);
 const [showModal, setShowModal] = useState(false);
 const [editData, setEditData] = useState(null); // holds current student data
 const {assignedClass} = teachers;
 const [isSidebarOpen,setIsSidebarOpen] = useState(false);
 const [section,setSections]  = useState('');
 console.log("teachers",teachers);
   useEffect(() => {
     if (teachers && teachers.length > 0) {
       setTotalTeachers(teachers);
     }
   }, [teachers]);

   const handleDelete = async (index) => {
     const studentToDelete = totalTeachers[index];
     if (!studentToDelete?._id) {
       console.log("No Valid student id found!");
       return;
     }

     try {
       const response = await axios.delete(`${serverUrl}/api/admin/teacher/${studentToDelete._id}`, {
         withCredentials: true,
       });

       if (response.status === 200) {
         await fetchAdminData();
         toast.success("Teacher Deleted SuccessFully")
         const updatedStudents = totalTeachers.filter(s => s._id !== studentToDelete._id);
         setTotalTeachers(updatedStudents);
         console.log(`Deleted student: ${studentToDelete.name}`);
       }
     } catch (err) {
         toast.error(err?.response?.data.message)
       console.error("Error deleting student:", err);
     }
   };

   const handleUpdate = (index) => {
     const student = totalTeachers[index];
     setEditData(student);
     setShowModal(true);
   };

   const handleFormChange = (e) => {
     setEditData({ ...editData, [e.target.name]: e.target.value });
   };


 
   const handleFormSubmit = async (e) => {
     e.preventDefault();
  
     try {
       // Ensure that the correct class ID is used, either class name or _id
       const assignedClassId = editData.class ? editData.class._id : editData.class; // Assuming 'class' can be an object
  
       const response = await axios.put(`${serverUrl}/admin/teacher/${editData._id}`, {
         name: editData.name,
         assignedClass: assignedClassId,
         dob: editData.dob,
         adress: editData.adress,
         phone: editData.phone,
         salary: editData.salary,
       }, {
         withCredentials: true,
       });
       console.log("Response:", response); // Log response to check the data structure
  
       if (response.status === 200) {
         await fetchAdminData();
         const updatedTeacher = response.data.teacher;
          // ✅ Update local state
        setTotalTeachers((prevTeachers) =>
          prevTeachers.map((teacher) =>
            teacher._id === updatedTeacher._id ? updatedTeacher : teacher
          )
        );
        toast.success("Teacher Updated Successfully!");
 setTimeout(() => setShowModal(false), 200); // Give the toast time to rende
         //setShowModal(false); // Close the modal
        // .success("Teacher Updated Successfully!"); // Trigger success toast
       }
     } catch (err) {
       toast.error(err?.response?.data.message || "An error occurred while updating teacher.");
       console.error("Update failed:", err);
     }
   };
  
  
   return (
     <div className="flex min-h-screen bg-gray-100 text-gray-800">
        {!isSidebarOpen && (
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="md:hidden fixed top-4 left-4 z-50 bg-white border p-2 shadow"
              >
                <FaBars className="text-xl text-green-700" />
              </button>
            )}
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
       <main className="flex-1 ml-0 md:ml-64 p-8">
         <h2 className="text-3xl font-bold mb-6 text-center">🎓 Teachers Profiles</h2>
           {/* ToastContainer placed here — always mounted */}
       <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} theme="colored" />
         {/* <div className="grid grid-cols-3 items-center gap-3">
//           {totalTeachers.map((student, idx) => (
//             <div key={idx} className="bg-white shadow rounded-xl p-6 border">
//               <img
//                 src={student.profile || "https://via.placeholder.com/150"}
//                 alt={student.name}
//                 className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-blue-500 shadow"
//               />
//               <div className="text-center  mt-4">
//                 <h3 className="text-xl font-semibold text-gray-800">{student.name}</h3>
//                 <p><strong>Class:</strong> {student.assignedClass.name}</p>
//                 <p><strong>Section:</strong> {student.assignedClass.section}</p>
//                 <p><strong>DOB:</strong> {new Date(student.dob).toDateString()}</p>
//                 <p><strong>Address:</strong> {student.adress}</p>
//                 <p><strong>Phone:</strong> {student.phone}</p>
//                 <p><strong>Salary:</strong> {student.salary}</p>
//                 <button onClick={() => handleUpdate(idx)} className="bg-yellow-400 px-4 py-1 mt-2 rounded">Update</button>
//                 <button onClick={() => handleDelete(idx)} className="bg-red-500 text-white px-4 py-1 ml-2 rounded">Delete</button>
//               </div>
//             </div>
//           ))}
         </div> */}
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-start">
   {totalTeachers.map((teacher, idx) => (
     <div key={idx} className="bg-white shadow rounded-xl p-6 border">
       <img
         src={teacher.profile || "https://via.placeholder.com/150"}
         alt={teacher.name}
         className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-blue-500 shadow"
       />
       <div className="text-center mt-4">
         <h3 className="text-xl font-semibold text-gray-800">{teacher.name}</h3>
         {teacher.assignedClass.map((item,idx)=>{
          return (
            <>
          <p key={idx}><strong>Class:</strong> {item.name || "N/A"}</p>
         <p key={idx}><strong>Section:</strong> {item.section || "N/A"}</p>
         </>
          )
         })}
         <p><strong>DOB:</strong> {new Date(teacher.dob).toDateString()}</p>
         <p><strong>Address:</strong> {teacher.adress}</p>
         <p><strong>Phone:</strong> {teacher.phone}</p>
         <p><strong>Salary:</strong> {teacher.salary}</p>
         <div className="mt-2">
           <button onClick={() => handleUpdate(idx)} className="bg-yellow-400 px-4 py-1 rounded">
             Update
           </button>
           <button onClick={() => handleDelete(idx)} className="bg-red-500 text-white px-4 py-1 ml-2 rounded">
             Delete
           </button>
         </div>
       </div>
     </div>
   ))}
 </div>


         {/* Modal Popup */}
         {showModal && editData && (
           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
             <div className="bg-white p-6 rounded-lg w-[90%] max-w-lg shadow-lg">
               <h2 className="text-xl font-bold mb-4">Update Student</h2>
               <form onSubmit={handleFormSubmit} className="space-y-3">
                 <input type="text" name="name" value={editData.name || ""} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Name" />
             {/*    <input type="text" name="class" value={editData.class} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Class" /> */}
                 <input type="date" name="dob" value={editData.dob?.substring(0, 10) || ""} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="DOB" />
                 <input type="text" name="class" value={editData.class || ""} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Class" />
                 <input type="text" name="section" value={editData.section || ""} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Section" />
                 <input type="text" name="adress" value={editData.adress || ""} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Address" />
                 <input type="number" name="phone" value={editData.phone || ""} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Phone" />
                 <input type="number" name="salary" value={editData.salary || ""} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Salary" />
                 <div className="flex justify-end gap-2">
                   <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
                   <button onClick={() => setShowModal(false)} type="button" className="bg-gray-400 px-4 py-2 rounded">Cancel</button>
                 </div>
               </form>
             </div>
           </div>
         )}
       </main>
     </div>
   );
 };
export default TeachersCard;
