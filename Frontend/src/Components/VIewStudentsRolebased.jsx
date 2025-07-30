import React from 'react'
import { useContext } from 'react'
import { userDataContext } from '../Context-Api/UserContext'
import TeacherSidebar from './TeacherSidebar';
import AccountantSidebar from './AccountantSidebar';
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader';
import { useEffect } from 'react';
import { authDataContext } from '../Context-Api/AuthContext';
import axios from 'axios';
import { useState } from 'react';

const ViewStudentsRolebased = () => {
    const {userData} = useContext(userDataContext);
    const {serverUrl} = useContext(authDataContext);
    const [displaystudents,setDisplayStudents] = useState([]);
    const {assignedClass} = userData;
    const [searchTerm, setSearchTerm] = useState('');
const [currentPage, setCurrentPage] = useState(1);
const studentsPerPage = 10;

    const hisClass = assignedClass?.class;
    const students = hisClass?.students;
    useEffect(()=>{
          const getAllStudents = async()=>{
           try{
            const allstudents = await axios.get(`${serverUrl}/api/teacher/classes`,{withCredentials:true});
           if(allstudents.status===201){
            setDisplayStudents(allstudents.data.class)
           }
        } catch(err){
            console.log("error",err.message);
           }  
        }
          getAllStudents();
    },[serverUrl])
   // setStudents(userData?.assignedClass?.class?.students);
//    const allStudents = userData?.assignedClass[0]?.class?.students || [];



// const className = userData?.assignedClass[0]?.class?.name || "No Class";
// const classSection = userData?.assignedClass[0]?.class?.section || "N/A";
// const teacherId = userData?._id;
// const inchargeClassObj = userData?.assignedClass?.find(
//   (assigned) => assigned.class?.incharge === teacherId
// );
// const allStudents = inchargeClassObj?.class?.students || [];
// const className = inchargeClassObj?.class?.name || "N/A";
// const classSection = inchargeClassObj?.class?.section || "N/A";

const classObj = userData?.assignedClass[0]?.class || {};
const classId = classObj?._id;
const className = classObj?.name || "N/A";
const classSection = classObj?.section || "N/A";

// Filter students that truly belong to this class by checking Classs._id
const allStudents = classObj?.students?.filter(
  (student) => student.Classs?._id === classId
) || [];


const filteredStudents = allStudents.filter((student) =>
  student.name.toLowerCase().includes(searchTerm.toLowerCase())
);

const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);
const paginatedStudents = filteredStudents.slice(
  (currentPage - 1) * studentsPerPage,
  currentPage * studentsPerPage
);

    //console.log("students from userData",students);
   const getClassName = userData?.assignedClass.find((cl)=>cl._id===displaystudents._id);
   console.log("userClass attendance",userData?.assignedClass[0].class)
  return (
    <div className='flex flex-col gap-4 md:flex-row min-h-screen bg-white'>
       <TeacherSidebar/> 
       <div className="flex h-full w-full flex-col gap-3">
          <AdminTeachDashboardHeader/>
           <div className="w-full text-white p-3 rounded-md bg-[rgb(1,1,93)] flex justify-center items-center border-b pb-3">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <i className="fas fa-calendar-alt" /> View Students
          </h2>
        </div>

<div className="wrapper w-full h-full border-grey-100 border-2 shadow-xl p-4">

                  {/* 📊 Table */}
                  <div className="flex justify-between items-center p-2">
  <h3 className="text-gray-800 font-semibold">Class: {className} - Section:{classSection}</h3>
  <input
    type="text"
    placeholder="Search by name..."
    className="border-2 outline-none border-grey-900 p-2 rounded w-64"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
</div>

          <div className="overflow-x-auto border border-gray-300 rounded mt-0 bg-white">
            <table className="min-w-full table-auto border-collapse">
              <thead className="bg-[rgb(1,1,93)] text-white">
                <tr>
                  <th className="border p-2">#</th>
                  <th className="border p-2">Name</th>
                  <th className='border p-2'>Roll</th>
                  <th className="border p-2">Gender</th>
                  <th className="border p-2">Phone</th>
                  <th className="border p-2">Email</th>
                  <th className="border p-2">Class</th>
                  <th className="border p-2">Section</th>
                  <th className="border p-2">Actions</th>
                </tr>
              </thead>
               <tbody>
  {paginatedStudents.length === 0 ? (
    <tr>
      <td colSpan="9" className="text-center text-gray-500 p-4">
        No students found in this class.
      </td>
    </tr>
  ) : (
    paginatedStudents.map((student, index) => (
      <tr key={student._id} className="odd:bg-white even:bg-gray-50">
        <td className="border p-2 text-center">
          {(currentPage - 1) * studentsPerPage + index + 1}
        </td>
        <td className="border p-2">{student.name}</td>
        <td className="border p-2">{student.Roll}</td>
        <td className="border p-2">{student.gender}</td>
        <td className="border p-2">{student.phone}</td>
        <td className="border p-2">{student.email}</td>
        <td className="border p-2">{student.Classs?.name || "-"}</td>
        <td className="border p-2">{student.Classs?.section || "-"}</td>
        <td className="border p-2">
          <button className="text-blue-500">View</button>
          <button
            onClick={() => handleDeleteById(student._id)}
            className="text-red-500 ml-2"
          >
            Delete
          </button>
        </td>
      </tr>
    ))
  )}
</tbody>



            </table>

            <div className="flex justify-between w-full items-center">
  <div className="shows p-3 text-pretty flex w-full">
    <p>Showing Students { paginatedStudents.length} of {allStudents.length}</p>
  </div>
              <div className="flex justify-between px-4 items-center gap-3 mt-0">
  <button
    className="px-3 py-1 border rounded cursor-pointer bg-blue-600 text-white disabled:opacity-999/"
    disabled={currentPage === 1}
    onClick={() => setCurrentPage((prev) => prev - 1)}
  >
    Prev
  </button>
  <button
    className="px-3 py-1 border cursor-pointer  bg-blue-600 text-white rounded disabled:opacity-900"
    disabled={currentPage === totalPages}
    onClick={() => setCurrentPage((prev) => prev + 1)}
  >
    Next
  </button>
</div>
</div>
          </div>
</div>
       </div>
    </div>
  )
}

export default ViewStudentsRolebased
