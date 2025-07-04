import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { adminDataContext } from '../Context-Api/AdminContext'
import { authDataContext } from '../Context-Api/AuthContext'
import AdminLayout from './AdminLayout'
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import axios from 'axios'


const AssignTeacherForSubject = () => {
   // const {adminData,fetchAdminData} = useContext(adminDataContext);
     // teachers.map((teacher, index) => (
                    //   <tr key={index} className="hover:bg-gray-100">
                    //     <td className="px-4 py-2 border">{teacher.name}</td>
                    //     <td className="px-4 py-2 border">{teacher.phone}</td>
                    //      <td className="px-4 py-2 border">{teacher.name}</td>

                    //   </tr>
                    // ))
    const {serverUrl} = useContext(authDataContext);
   // const {teachers = [] } = adminData?.admin || {};
    // const { subjectId } = useParams();
const { subjectId } = useParams();
const { adminData, fetchAdminData } = useContext(adminDataContext);
const { teachers = [], subjects = [], classes = [] } = adminData?.admin || {};
const [searchTerm, setSearchTerm] = useState("");
const [filteredTeachers, setFilteredTeachers] = useState([]);
const [selectedTeachers, setSelectedTeachers] = useState([]);


useEffect(() => {
  fetchAdminData();
}, [fetchAdminData]);
useEffect(() => {
  if (!searchTerm.trim()) {
    setFilteredTeachers([]);
    return;
  }

  const filtered = teachers.filter((teacher) =>
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase())
  ).filter((t) => !selectedTeachers.some(sel => sel._id === t._id));

  setFilteredTeachers(filtered);
}, [searchTerm, teachers, selectedTeachers]);

console.log("teachers",teachers)
const subject = subjects.find((sub) => sub._id === subjectId);
const subjectTeachers = teachers.filter((teacher) =>
  teacher.teachSubject?.some((subj) => subj._id === subjectId)
);

     
const handleSelectTeacher = (teacher) => {
  setSelectedTeachers((prev) => [...prev, teacher]);
  setSearchTerm("");
  setFilteredTeachers([]);
};

const removeTeacher = (id) => {
  setSelectedTeachers((prev) => prev.filter(t => t._id !== id));
};


  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!subject || selectedTeachers.length === 0) {
    alert("Please select at least one teacher and ensure subject exists.");
    return;
  }
  // try {
  //   for (const teacher of selectedTeachers) {
  //     const existingSubjects = teacher.teachSubject || [];

  //     const alreadyAssigned = existingSubjects.some((subj) => subj._id === subject._id);
  //     if (alreadyAssigned) continue;
  //     // Send PATCH request to backend to update the teacher
  //     const res = await axios.patch(`${serverUrl}/api/admin/teachers/${teacher._id}/assign-subject`,
  // {
  //   subject: {
  //     _id: subject._id,
  //     name: subject.name,
  //   },
  // },
  // {
  //   withCredentials: true, // ✅ Ensures cookies are sent
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   })

  //     if (!res.ok) throw new Error(`Failed to assign subject to ${teacher.name}`);
  //   }
  //   alert("Teachers successfully assigned to subject!");
  //   setSelectedTeachers([]);
  //   fetchAdminData(); // Refresh UI

  // } catch (error) {
  //   console.error("Assignment failed:", error);
  //   alert("Some assignments failed. Check the console for more info.");
  // }


try {
  for (const teacher of selectedTeachers) {
    const existingSubjects = teacher.teachSubject || [];
    const alreadyAssigned = existingSubjects.some(
      (subj) => subj._id === subject._id
    );
    if (alreadyAssigned) continue;

    const res = await axios.patch(
      `${serverUrl}/api/admin/teachers/${teacher._id}/assign-subject`,
      {
        subject: {
          _id: subject._id,
          name: subject.name,
        },
      },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // ✅ Check response status (only needed if you expect specific success codes)
    if (res.status !== 200) {
      throw new Error(`Failed to assign subject to ${teacher.name}`);
    }
  }

  alert("Teachers successfully assigned to subject!");
  setSelectedTeachers([]);
  fetchAdminData(); // Refresh UI
} catch (error) {
  console.error("Assignment failed:", error);
  alert("Some assignments failed. Check the console for more info.");
}

};

  return (
    <AdminLayout adminName='Bright Future'>
        <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
      <AdminTeachDashboardHeader/>

        {/* Subject Info & View Link */}
        <div className="bg-white rounded shadow p-4 mb-6 flex flex-col sm:flex-row sm:justify-between items-center">
          <div className="text-center sm:text-left">
            {/* <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <i className="fas fa-tag text-blue-500"></i>
              Subject: English (ENG), Class: 1st
            </h2> */}
            <h2 className="text-lg font-semibold text-gray-800 block">
  <i className="fas fa-tag text-blue-500"></i>
  Subject: {subject?.name || "Unknown"} ({subject?.code || "N/A"}), 
</h2>
<h2 className="text-lg font-semibold text-gray-800  block">
  <i>Classes: {
    subject?.classes?.map(
      (classId) => classes.find((cls) => cls._id === classId)?.name
    ).filter(Boolean).join(', ') || "N/A"
  }</i></h2>

          </div>
          <Link
            href="/admin/subjects"
            className="mt-2 sm:mt-0 inline-flex items-center gap-1 text-sm text-white bg-blue-500  px-3 py-1.5 rounded"
          >
            <i className="fas fa-tags"></i>
            View Subjects
          </Link>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-7 gap-6">
          {/* Teachers Table */}
          <div className="md:col-span-4 bg-white rounded shadow p-4">
            <h3 className="text-lg font-semibold border-b pb-2 mb-4 text-gray-800 flex items-center gap-2">
              <i className="fas fa-user-shield text-blue-500"></i>
              Teachers
            </h3>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left text-gray-700 border">
                <thead className="bg-blue-500 text-white">
                  <tr>
                    <th className="px-4 py-2 border">Name</th>
                    <th className="px-4 py-2 border">Phone</th>
                    <th className='px-4 py-2 border'>Username</th>
                    <th className='px-4 py-2 border'>Status</th>
                    <th className='px-4 py-2 border'>Action</th>

                  </tr>
                </thead>
               <tbody>
  {subjectTeachers.length > 0 ? (
    subjectTeachers.map((teacher, index) => (
      <tr key={index} className="hover:bg-gray-100">
        <td className="px-4 py-2 border">{teacher.name}</td>
        <td className="px-4 py-2 border">{teacher.phone}</td>
        <td className="px-4 py-2 border">{teacher.username || teacher.name}</td>
        <td className="px-4 py-2 border">{teacher.status || '-'}</td>
        <td className="px-4 py-2 border"> - </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="5" className="text-center py-4 text-gray-500">
        No teachers available for this subject.
      </td>
    </tr>
  )}
</tbody>

                    
              </table>
            </div>
          </div>

          {/* Assign Form */}
          <div className="md:col-span-3 bg-white rounded shadow p-4">
            <h3 className="text-lg font-semibold border-b pb-2 mb-4 text-gray-800 flex items-center gap-2">
              <i className="fas fa-plus-square text-blue-500"></i>
              Assign Teachers
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="teacher_search"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Teacher:
                </label>
               <input
  type="text"
  id="teacher_search"
  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
  placeholder="Type to search..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  autoComplete="off"
/>

{/* Suggestions dropdown */}
{filteredTeachers.length > 0 && (
  <ul className="border border-gray-300 mt-1 rounded bg-white shadow z-10 max-h-40 overflow-y-auto">
    {filteredTeachers.map((teacher) => (
      <li
        key={teacher._id}
        className="px-3 py-2 cursor-pointer hover:bg-blue-100"
        onClick={() => handleSelectTeacher(teacher)}
      >
        {teacher.name}
      </li>
    ))}
  </ul>
)}

{/* Selected teachers display */}
<div className="flex flex-wrap gap-2 mt-3">
  {selectedTeachers.map((teacher) => (
    <span
      key={teacher._id}
      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center"
    >
      {teacher.name}
      <button
        type="button"
        className="ml-2 text-red-500"
        onClick={() => removeTeacher(teacher._id)}
      >
        ×
      </button>
    </span>
  ))}
</div>

                <p className="text-red-500 text-xs mt-1">
                  Please select at least one teacher to assign.
                </p>
              </div>

              <div className="mb-4">
                {/* Add selected teachers display here */}
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  className="inline-flex items-center gap-1 bg-[rgb(1,1,93)]  text-white text-sm px-4 py-2 rounded"
                >
                  <i className="fas fa-save"></i>
                  Assign Teachers
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>        
    </AdminLayout>
  )
}

export default AssignTeacherForSubject
