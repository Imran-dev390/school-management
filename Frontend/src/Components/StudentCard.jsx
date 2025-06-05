import React, { useContext, useEffect, useState } from 'react';
import { Sidebar } from './Sidebar';
import { adminDataContext } from '../Context-Api/AdminContext';
import { authDataContext } from '../Context-Api/AuthContext';
import axios from 'axios';
import { ToastContainer,toast } from 'react-toastify';

const StudentCard = ({showSidebar,setShowSidebar}) => {
  const { adminData } = useContext(adminDataContext);
  const { serverUrl } = useContext(authDataContext);
  const { students = [] } = adminData?.admin || {};
  const {fetchAdminData} = useContext(adminDataContext);
  const [totalStudents, setTotalStudents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState(null); // holds current student data
  //console.log(totalStudents.Classs.name)
  useEffect(() => {
    if (students && students.length > 0) {
   //   console.log("students",students);
      setTotalStudents(students);
    }
  }, [students]);
//console.log("totalStudents",totalStudents);
  const handleDelete = async (index) => {
    const studentToDelete = totalStudents[index];
    if (!studentToDelete?._id) {
  //    console.log("No Valid student id found!");
      return;
    }

    try {
      const response = await axios.delete(`${serverUrl}/admin/students/${studentToDelete._id}`, {
        withCredentials: true,
      });

      if (response.status === 200) {
        await fetchAdminData();
        toast.success("Successfully Deleted Student...")
        const updatedStudents = totalStudents.filter(s => s._id !== studentToDelete._id);
        setTotalStudents(updatedStudents);
    //    console.log(`Deleted student: ${studentToDelete.name}`);
      }
      setShowModal(false);
    } catch (err) {
      toast.error(err?.response?.data.message)
      //console.error("Error deleting student:", err);
    }
  };


  const handleUpdate = (index) => {
    const student = totalStudents[index];
    setEditData(student);
    setShowModal(true);
  };

  const handleFormChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.put(
        `${serverUrl}/api/admin/student/${editData._id}`,
        {
          name: editData.name,
          parent: editData.parent,
          Classs: editData.class,
          dob: editData.dob,
          adress: editData.adress,
          phone: editData.phone,
          feesPaid: editData.feesPaid,
        },
        {
          withCredentials: true,
        }
      );
      //console.log(response);
  
      if (response.status === 200) {
        await fetchAdminData();
        const updatedStudent = response.data.student;
  
        // ✅ Update local state
        setTotalStudents((prevStudents) =>
          prevStudents.map((student) =>
            student._id === updatedStudent._id ? updatedStudent : student
          )
        );
  
        toast.success("Successfully updated the student...");
        //console.log("Student updated:", updatedStudent);
  
        setTimeout(() => setShowModal(false), 200); // Give toast time to render
      }
    } catch (err) {
      toast.error(err?.response?.data?.message || "Update failed.");
      //console.error("Update failed:", err);
    }
  };
  
  

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">
       <Sidebar/>
        {/* <div className={`fixed top-0 left-0 z-40 h-full w-64 bg-white dark:bg-gray-800 shadow transform transition-transform duration-300 ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
      </div> */}
      <main className="flex-1 ml-0 md:ml-64 p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">🎓 Student Profiles</h2>
        <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} theme="colored" />
        {/* <div className="grid grid-cols-3 items-center gap-3">
          {totalStudents.map((student, idx) => (
            <div key={idx} className="bg-white shadow rounded-xl p-6 border">
              <img
                src={student.profile || "https://via.placeholder.com/150"}
                alt={student.name}
                className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-blue-500 shadow"
              />
              <div className="text-center mt-4">
                <h3 className="text-xl font-semibold text-gray-800">{student.name}</h3>
                <p><strong>Class:</strong> {student.Classs?.name || "N/A"}</p>
                <p><strong>DOB:</strong> {new Date(student.dob).toDateString()}</p>
                <p><strong>Parent:</strong> {student.parent}</p>
                <p><strong>Address:</strong> {student.adress}</p>
                <p><strong>Phone:</strong> {student.phone}</p>
                <p><strong>Fees Paid:</strong> {student.feesPaid  ===null?  0:student.feesPaid}</p>
                <button onClick={() => handleUpdate(idx)} className="bg-yellow-400 px-4 py-1 mt-2 rounded">Update</button>
                <button onClick={() => handleDelete(idx)} className="bg-red-500 text-white px-4 py-1 ml-2 rounded">Delete</button>
              </div>
            </div>
          ))}
        </div> */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-start">
  {totalStudents.map((student, idx) => (
    <div key={idx} className="bg-white shadow rounded-xl p-6 border">
      <img
        src={student.profile || "https://via.placeholder.com/150"}
        alt={student.name}
        className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-blue-500 shadow"
      />
      <div className="text-center mt-4">
        <h3 className="text-xl font-semibold text-gray-800">{student.name}</h3>
        <p><strong>Class:</strong> {student.Classs?.name || "N/A"}</p>
        <p><strong>DOB:</strong> {new Date(student.dob).toDateString()}</p>
        <p><strong>Parent:</strong> {student.parent}</p>
        <p><strong>Address:</strong> {student.adress}</p>
        <p><strong>Phone:</strong> {student.phone}</p>
        <p><strong>Fees Paid:</strong> {student.feesPaid === null ? 0 : student.feesPaid}</p>
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
                <input type="text" name="parent" value={editData.parent || ""} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Parent" />
            {/*    <input type="text" name="class" value={editData.class} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Class" /> */}
                <input type="date" name="dob" value={editData.dob?.substring(0, 10) || ""} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="DOB" />
                <input type="text" name="class" value={editData.class || ""} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Class" />
                <input type="text" name="adress" value={editData.adress || ""} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Address" />
                <input type="number" name="phone" value={editData.phone || ""} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Phone" />
                <input type="number" name="feesPaid" value={editData.feesPaid || ""} onChange={handleFormChange} className="w-full border p-2 rounded" placeholder="Fees Paid" />

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

export default StudentCard;
