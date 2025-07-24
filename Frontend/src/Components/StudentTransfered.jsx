import React, { useContext, useEffect } from 'react'
import AdminLayout from './AdminLayout'
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader'
import { Link } from 'react-router-dom'
import { adminDataContext } from '../Context-Api/AdminContext'

const StudentTransfered = () => {
const {adminData,fetchAdminData} = useContext(adminDataContext);
const {transferredStudents = []} = adminData?.admin || {};
const {students = []} = adminData?.admin || {};
const {classes = [] } = adminData?.admin || {};
useEffect(()=>{
   fetchAdminData();
},[fetchAdminData])  
console.log("transferredStudents",transferredStudents);
  return (
    <AdminLayout adminName='Bright Future'>
       <div className="main mt-4 w-full h-full flex flex-col gap-3 items-center">
        <AdminTeachDashboardHeader/>
        
        {/* Section Heading */}
        <div className="w-full  bg-[rgb(1,1,93)] p-2 rounded text-white text-center mb-4">
          <div className="flex justify-between items-center  pb-2">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <i className="fas fa-users"></i> Students Transferred
            </h2>
            <Link
              to="/admin/transfer/students"
              className="btn bg-[#c19703] p-1 btn-sm btn-outline-light flex items-center gap-2"
            >
              <i className="fas fa-sign-in-alt"></i>
              Transfer Student
            </Link>
          </div>
        </div>
        {/* Students Transferred to Other Schools */}
       <div className="w-full bg-white p-6 rounded shadow-md overflow-auto">
  {/* Search bar */}
  <div className="flex justify-end mb-4">
    <input
      type="text"
      placeholder="Search"
      className="border border-gray-300 px-3 py-1 w-1/4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>

  {/* Table */}
  <table className="min-w-[900px] w-full border-collapse text-sm text-left">
    <thead className="bg-[rgb(1,1,93)] text-white">
      <tr>
        <th className="px-4 py-2 border">Student Name</th>
        <th className="px-4 py-2 border">Admission No</th>
        <th className="px-4 py-2 border">Phone</th>
        <th className="px-4 py-2 border">Email</th>
        <th className="px-4 py-2 border">Father Name</th>
        <th className="px-4 py-2 border">From Class</th>
        <th className="px-4 py-2 border">Section</th>
        <th className="px-4 py-2 border">To Class</th>
        <th className="px-4 py-2 border">Transferred School Name</th>
      </tr>
    </thead>
    <tbody>
      {transferredStudents.length === 0 ? (
        <tr>
          <td colSpan="10" className="text-center py-4 text-gray-500">
            No transferred students found.
          </td>
        </tr>
      ) : (
        transferredStudents.map((item, idx) => {
          const student = students.find((st) => st._id === item.student) || item.student;
          const className = classes.find((cls) => cls._id === item.fromClass) || item.fromClass;

          return (
            <tr key={idx} className="hover:bg-gray-100 transition">
              <td className="px-4 py-2 border">{student?.name || "N/A"}</td>
              <td className="px-4 py-2 border">{student?.AdmissionNum || "N/A"}</td>
              <td className="px-4 py-2 border">{student?.phone || "N/A"}</td>
              <td className="px-4 py-2 border">{student?.email || "N/A"}</td>
              <td className="px-4 py-2 border">{student?.parent || "N/A"}</td>
              <td className="px-4 py-2 border">{className?.name || "N/A"}</td>
              <td className='px-4 py-2 border'>{className?.section || "N/A"}</td>
              <td className="px-4 py-2 border">{item?.toClass || "N/A"}</td>
              <td className="px-4 py-2 border">{item?.toSchool || "N/A"}</td>
            </tr>
          );
        })
      )}
    </tbody>
  </table>

  {/* Pagination controls */}
  <div className="flex justify-between items-center mt-4">
    <span className="text-sm text-gray-700">Showing 1 to 2 entries</span>
    <div>
      <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition">Prev</button>
      <button className="ml-3 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition">Next</button>
    </div>
  </div>
</div>


        {/* Students Transferred to This School */}
        {/* <div className="text-center font-semibold mt-4 mb-2">
          Students Transferred to this School
        </div>
        <div className="w-full shadow-lg border border-grey-300 overflow-x-auto p-4">
            <div className="files flex  w-[100%] justify-end mt-2 mb-2">
           <input
  type="text"
  placeholder="Search"
  className="form-control form-control-sm mb-2 border border-grey-300 p-2 w-[30%] rounded"
/>

          </div>
          <table className="table  table-bordered table-hover w-full text-sm">
            <thead className="bg-[rgba(1,1,93)] h-12 text-white">
              <tr>
                <th>Student Name</th>
                <th>Admission Number</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Class</th>
                <th>Section</th>
                <th>Father Name</th>
                {/* Add more columns as needed */}
              {/* </tr>
            </thead>
            <tbody>
                 <tr>
                <td>Andrew Smith</td>
                <td>100001</td>
                <td>9999999999</td>
                <td>andrew_smith@gmail.com</td>
                <td>1st</td>
                <td>A</td>
                <td>Ghulam Ali</td>
              </tr>
            </tbody>

            <div className="flex  justify-between items-center gap-3 mt-4">
  <div>
    <span className="font-semibold text-lg">
      Showing 1 to 2 entries
    </span>
  </div>
  <div>
    <button className="text-white px-4 py-1 rounded-xl bg-blue-500 hover:bg-blue-600 transition">
      Next
    </button> */}
     {/* <button className="text-white ml-3 px-4 py-1 rounded-xl bg-blue-500 hover:bg-blue-600 transition">
      Prev
    </button>
  </div>
</div> */}
          {/* </table>
        </div> */} 
       </div>
    </AdminLayout>
  )
}

export default StudentTransfered
