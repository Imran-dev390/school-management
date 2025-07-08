import React from 'react'
import AdminLayout from './AdminLayout'
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { adminDataContext } from '../Context-Api/AdminContext'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { authDataContext } from '../Context-Api/AuthContext'

const ViewAllLeaves = () => {
    const {adminData,fetchAdminData} = useContext(adminDataContext);
    const {serverUrl} = useContext(authDataContext);
    const [filterClass, setFilterClass] = useState('');
const [filterSection, setFilterSection] = useState('');
const today = new Date().toLocaleDateString('en-CA');
const [filterDate, setFilterDate] = useState('');

    const {students = [], classes =  []} = adminData?.admin || {};
    const [showModal, setShowModal] = useState(false);
const [selectedLeave, setSelectedLeave] = useState(null);
const [approvalStatus, setApprovalStatus] = useState('');
const [approvalReason, setApprovalReason] = useState('');
{/* Pagination States */}
const [currentPage, setCurrentPage] = useState(1);
//const rowsPerPage = 10;
const [rowsPerPage, setRowsPerPage] = useState(10);


// Paginated Leaves


//    const today = new Date().toISOString().split('T')[0];
//const today = new Date().toLocaleDateString('en-CA'); // "YYYY-MM-DD" in local time


    console.log("students",students);
    useEffect(()=>{
    fetchAdminData();
    },[fetchAdminData])
//     const studentLeavesToday = students?.flatMap(student => {
//   return (student.leave || [])
//     .filter(lv => lv.date === today)
//     .map(lv => ({
//       name: student.name,
//       parent: student.parent,
//       className: student.Classs?.name || '',
//       section: student.Classs?.section || '',
//       leaveDate: lv.date,
//       reason: lv.reason,
//       status: lv.status
//     }));
// });

 const availableSections = filterClass
    ? [...new Set(students
        .filter(stu => stu.Classs?.name === filterClass)
        .map(stu => stu.Classs?.section)
        .filter(Boolean))]
    : [];


//const today = new Date().toISOString().split('T')[0];

// const studentLeavesToday = students?.flatMap(student => {
//   return (student.leave || [])
//     .filter(lv => new Date(lv.date).toISOString().split('T')[0] === today)
//     .map(lv => ({
//       name: student.name,
//       parent: student.parent,
//       className: student.Classs?.name || '',
//       section: student.Classs?.section || '',
//       leaveDate: new Date(lv.date).toISOString().split('T')[0],
//       reason: lv.leave, // ✅ fix field name
//       status: lv.status || 'unapproved' // ✅ default status if missing
//     }));
// });


const filteredLeavesByFilterForm = students.flatMap(student => {
  const studentClass = student.Classs?.name || '';
  const studentSection = student.Classs?.section || '';

  return (student.leave || [])
    .filter(lv => {
      const leaveDate = new Date(lv.date).toLocaleDateString('en-CA');
      return (
        leaveDate === filterDate &&
        (filterClass ? studentClass === filterClass : true) &&
        (filterSection ? studentSection === filterSection : true)
      );
    })
    .map(lv => ({
      _id: lv._id,
      name: student.name,
      parent: student.parent,
      className: studentClass,
      section: studentSection,
      leaveDate: new Date(lv.date).toLocaleDateString('en-CA'),
      reason: lv.leave,
      status: lv.status || 'UnApproved'
    }));
});


// const handleSubmitApproval = async () => {
//   try {
//     const res = await fetch(`/api/update-leave-status`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         studentName: selectedLeave.name,
//         leaveDate: selectedLeave.leaveDate,
//         status: approvalStatus,
//         reason: approvalReason,
//       }),
//     });

//     const data = await res.json();

//     if (res.ok) {
//       alert("Status updated successfully!");
//       fetchAdminData(); // refresh leave data
//     } else {
//       alert("Error updating status: " + data.message);
//     }
//   } catch (err) {
//     console.error(err);
//     alert("An error occurred while updating the status.");
//   }
// };



const handleSubmitApproval = async () => {
  try {
    const res = await axios.patch(`${serverUrl}/api/admin/leaves/${selectedLeave._id}`, {
      status: approvalStatus,
      reason: approvalReason,
    },{withCredentials:true});

    if (res.status === 200) {
      alert('Status updated successfully!');
      fetchAdminData(); // Refresh data
      setShowModal(false); // Close modal
    } else {
      alert('Error updating status.');
    }
  } catch (err) {
    console.error('Update error:', err);
    alert('An error occurred while updating the status.');
  }
};


 // 'YYYY-MM-DD'

const studentLeavesToday = students.flatMap(student => {
  return (student.leave || [])
    .filter(lv => new Date(lv.date).toLocaleDateString('en-CA') === today)
    .map(lv => ({
      _id: lv._id,
      name: student.name,
      parent: student.parent,
      className: student.Classs?.name || '',
      section: student.Classs?.section || '',
      leaveDate: new Date(lv.date).toLocaleDateString('en-CA'),
      reason: lv.leave,
      status: lv.status || 'unapproved'
    }));
});

const [searchText, setSearchText] = useState('');
const [selectedDate, setSelectedDate] = useState(today);

// const filteredLeaves = students?.flatMap(student => {
//   return (student.leave || [])
//     .filter(lv => lv.date === selectedDate)
//     .map(lv => ({
//       // name: student.name,
//       // parent: student.parent,
//       // className: student.Classs?.name || '',
//       // section: student.Classs?.section || '',
//       // leaveDate: lv.date,
//       // reason: lv.reason,
//       // status: lv.status
//        name: student.name,
//       parent: student.parent,
//       className: student.Classs?.name  || '',
//       section: student.Classs?.section || '',
//       leaveDate: new Date(lv.date).toLocaleDateString('en-CA'),
//       reason: lv.leave,
//       status: lv.status || 'unapproved'
//     }))
//     .filter(entry => entry.name.toLowerCase().includes(searchText.toLowerCase()));
// });



const filteredLeaves = students.flatMap(student => {
  return (student.leave || [])
    .filter(lv => new Date(lv.date).toLocaleDateString('en-CA') === today)
    .map(lv => ({
      _id: lv._id,
      name: student.name,
      parent: student.parent,
      className: student.Classs?.name || '',
      section: student.Classs?.section || '',
      leaveDate: new Date(lv.date).toLocaleDateString('en-CA'),
      reason: lv.leave,
      status: lv.status || 'UnApproved'
    }));
}).filter(entry =>
  entry.name.toLowerCase().includes(searchText.toLowerCase())
);
const totalPages = Math.ceil(filteredLeaves.length / rowsPerPage);
const paginatedLeaves = filteredLeaves.slice(
  (currentPage - 1) * rowsPerPage,
  currentPage * rowsPerPage
);
  return (
    <AdminLayout adminName='Bright Future'>
        <div className="main w-full h-full flex flex-col items-center mt-4 gap-3">
       <AdminTeachDashboardHeader/>
{/* Top Header*/}
<div className="flex w-full text-white p-3 rounded-md bg-[rgb(1,1,93)] flex-col md:flex-row justify-center items-center border-b pb-3">
     <div className="centerd flex items-center justify-center">
      <h2 className="text-lg font-semibold  justify-center flex items-center gap-2">
        <i className="fas fa-calendar-alt"></i> Today Students Leaves
      </h2>
      </div>
      {/* <div className="mt-2 md:mt-0 flex gap-2">
        <Link to="/Take/Attendance" className="text-sm px-4 py-1 border border-gray-300 rounded bg-[#C19703]">
          <i className="fas fa-clock"></i>&nbsp;Add New Leave
        </Link>
      </div> */}
    </div>
{/* End */}
<main className='border border-grey-300 w-full h-full'>
  
    {/* <div className="flex gap-4 my-4 justify-end px-4">
  <input
    type="text"
    className="border border-[#C19703] sm:w-[30%] px-2 py-2 rounded"
    placeholder="Search by name"
    value={searchText}
    onChange={e => setSearchText(e.target.value)}
  />

</div> */}


<div className="flex flex-col md:flex-row justify-between items-center px-4 py-2 gap-3">
  {/* Rows Per Page Dropdown - Left */}
  <div className="flex items-center space-x-2">
    <label htmlFor="rowsPerPage" className="text-sm text-gray-700">Rows per page:</label>
    <select
      id="rowsPerPage"
      className="border border-[#C19703] rounded px-2 py-1"
      value={rowsPerPage}
      onChange={(e) => {
        setRowsPerPage(Number(e.target.value));
        setCurrentPage(1); // Reset to page 1 when changing rows
      }}
    >
      {[5, 10, 20, 50].map((num) => (
        <option key={num} value={num}>{num}</option>
      ))}
    </select>
  </div>

  {/* Search Input - Right */}
  <input
    type="text"
    className="border border-[#C19703] sm:w-[30%] px-2 py-2 rounded"
    placeholder="Search by name"
    value={searchText}
    onChange={e => setSearchText(e.target.value)}
  />
</div>

{/* <table className="min-w-full mt-4 border text-sm  ">

  <thead className="bg-[rgb(1,1,93)] text-white">
    <tr>
      <th className="p-2 border">Name</th>
      <th className="p-2 border">Father's Name</th>
      <th className="p-2 border">Class</th>
      <th className="p-2 border">Section</th>
      <th className="p-2 border">Leave Date</th>
      <th className="p-2 border">Reason</th>
      <th className="p-2 border">Status</th>
    </tr>
  </thead>
  <tbody>
    {/* {studentLeavesToday?.length ? (
      studentLeavesToday?.map((leave, idx) => ( */}
      {/* {filteredLeaves?.length ? (
  filteredLeaves?.map((leave, idx) => (
        <tr key={idx} className="text-center border">
          <td className="p-2 border">{leave.name}</td>
          <td className="p-2 border">{leave.parent}</td>
          <td className="p-2 border">{leave.className}</td>
          <td className="p-2 border">{leave.section}</td>
          <td className="p-2 border">{leave.leaveDate}</td>
          <td className="p-2 border">{leave.reason}</td> */}
          {/* <td className="p-2 border">
            <span className={`px-2 py-1 rounded text-white ${leave.status === 'approved' ? 'bg-green-600' : 'bg-red-600'}`}>
              {leave.status}
            </span>
           </td> */}
{/* //           <td className="p-2 border">
//   <button
//     onClick={() => {
//       setSelectedLeave(leave);
//       setApprovalStatus(leave.status);
//       setApprovalReason('');
//       setShowModal(true);
//     }}
//     className={`px-2 py-1 rounded text-white ${leave.status === 'approved' ? 'bg-green-600' : 'bg-red-600'}`}
//   >
//     {leave.status}
//   </button>
// </td>

        </tr>
      ))
    ) : (
      <tr>
        <td className="p-2 border text-center" colSpan="7">No leave entries for today.</td> */}
      {/* </tr>
    )}
  </tbody>
</table> */} 












{/* Table Container */}
<div className="w-full overflow-x-auto border rounded mt-4">
  <table className="min-w-full border text-sm">
    <thead className="bg-[rgb(1,1,93)] text-white sticky top-0">
      <tr>
        <th className="p-2 border">Name</th>
        <th className="p-2 border">Father's Name</th>
        <th className="p-2 border">Class</th>
        <th className="p-2 border">Section</th>
        <th className="p-2 border">Leave Date</th>
        <th className="p-2 border">Reason</th>
        <th className="p-2 border">Status</th>
      </tr>
    </thead>
    <tbody>
      {paginatedLeaves.length ? (
        paginatedLeaves.map((leave, idx) => (
          <tr key={idx} className="text-center border hover:bg-gray-100">
            <td className="p-2 border">{leave.name}</td>
            <td className="p-2 border">{leave.parent}</td>
            <td className="p-2 border">{leave.className}</td>
            <td className="p-2 border">{leave.section}</td>
            <td className="p-2 border">{leave.leaveDate}</td>
            <td className="p-2 border">{leave.reason}</td>
            <td className="p-2 border">
              <button
                onClick={() => {
                  setSelectedLeave(leave);
                  setApprovalStatus(leave.status);
                  setApprovalReason('');
                  setShowModal(true);
                }}
                className={`px-2 py-1 rounded text-white ${
                  leave.status === 'approved'
                    ? 'bg-green-600'
                    : 'bg-red-600'
                }`}
              >
                {leave.status}
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="7" className="text-center py-4 text-gray-500">
            No leave entries found.
          </td>
        </tr>
      )}
    </tbody>
  </table>

  {/* Pagination Controls */}
<div className="flex flex-col md:flex-row justify-end items-center px-4 py-2">
  {/* Page Navigation */}
  <div className="flex items-center space-x-1 mt-4">
    <button
      className="px-2 py-1 border rounded disabled:opacity-50"
      disabled={currentPage === 1}
      onClick={() => setCurrentPage(currentPage - 1)}
    >
      Prev
    </button>

    {[...Array(totalPages)].map((_, idx) => {
      const page = idx + 1;
      return (
        <button
          key={page}
          className={`px-3 py-1 border rounded ${
            currentPage === page ? 'bg-blue-600 text-white' : ''
          }`}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      );
    })}

    <button
      className="px-2 py-1 border rounded disabled:opacity-50"
      disabled={currentPage === totalPages}
      onClick={() => setCurrentPage(currentPage + 1)}
    >
      Next
    </button>
  </div>
</div>

</div>


       



{showModal && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
      <h3 className="text-lg font-semibold mb-4">Update Leave Status</h3>

      <div className="mb-4">
        <label className="block mb-2 font-medium">Status:</label>
        <label className="mr-4">
          <input
            type="radio"
            value="Approved" 
            checked={approvalStatus === 'Approved'}
            onChange={(e) => setApprovalStatus(e.target.value)}
          /> Approved
        </label>
        <label>
          <input
            type="radio"
            value="UnApproved"
            checked={approvalStatus === 'UnApproved'}
            onChange={(e) => setApprovalStatus(e.target.value)}
          /> Unapproved
        </label>
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-medium">Reason:</label>
        <textarea
          className="w-full border p-2 rounded"
          value={approvalReason}
          onChange={(e) => setApprovalReason(e.target.value)}
        />
      </div>

      <div className="flex justify-end gap-2">
        <button
          onClick={() => setShowModal(false)}
          className="bg-gray-400 px-4 py-2 rounded text-white"
        >
          Cancel
        </button>
        <button
          onClick={async () => {
            await handleSubmitApproval(); // function we'll define below
            setShowModal(false);
          }}
          className="bg-blue-600 px-4 py-2 rounded text-white"
        >
          Save Changes
        </button>
      </div>
    </div>
  </div>
)}


</main>

</div>
    </AdminLayout>
  )
}

export default ViewAllLeaves
