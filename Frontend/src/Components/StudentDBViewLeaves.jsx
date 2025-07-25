import React from 'react'
import AdminLayout from './AdminLayout'
import StudentSidebar from './StudentSidebar'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { userDataContext } from '../Context-Api/UserContext'
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader'
import { Link } from 'react-router-dom'
import { adminDataContext } from '../Context-Api/AdminContext'

// const StudentDBViewLeaves = () => {
//     const {userData} = useContext(userDataContext);
//     useEffect(()=>{
//     },[userData])
//   return (
//     <div className='flex flex-col md:flex-row  min-h-screen w-full bg-white gap-3'>
//      <StudentSidebar/>
//      <div className="main w-full h-full flex flex-col gap-3 mt-3 px-4">
//          <AdminTeachDashboardHeader />
//         <div className="flex w-full text-white justify-between p-3 rounded-md bg-[rgb(1,1,93)] flex-col md:flex-row justify-center items-center border-b pb-3">
//           <h2 className="text-lg font-semibold flex items-center gap-2">
//             <i className="fas fa-calendar-alt"></i> View Leaves
//           </h2>
//           <div className="flex justify-end">
//           <span className='text-white px-2 py-1 rounded'>
//             <Link to="/student/send/leave">Send Leave</Link>
//           </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }







const StudentDBViewLeaves = () => {
  const { userData } = useContext(userDataContext);
  const [filteredLeaves, setFilteredLeaves] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
const {fetchAdminData} = useContext(adminDataContext);
useEffect(()=>{
fetchAdminData();
},[fetchAdminData])
  useEffect(() => {
    // Show all leaves initially
    if (userData?.leave) {
      setFilteredLeaves(userData.leave);
    }
  }, [userData]);

  const handleFilter = () => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);

      const filtered = userData.leave.filter((leave) => {
        const leaveDate = new Date(leave.date);
        return leaveDate >= start && leaveDate <= end;
      });

      setFilteredLeaves(filtered);
    } else {
      setFilteredLeaves(userData.leave); // No filter if dates missing
    }
  };

  return (
    <div className='flex flex-col md:flex-row min-h-screen w-full bg-white gap-3'>
      <StudentSidebar />
      <div className="main w-full h-full flex flex-col gap-3 mt-3 px-4">
        <AdminTeachDashboardHeader />
        <div className="flex w-full text-white justify-between p-3 rounded-md bg-[rgb(1,1,93)] flex-col md:flex-row items-center border-b pb-3 gap-2">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <i className="fas fa-calendar-alt"></i> View Leaves
          </h2>

          <span className='text-white px-2 py-1 rounded border'>
              <Link to="/student/send/leave">Send Leave</Link>
            </span>
        </div>

        <div className="overflow-x-auto mt-4">
            <div className="flex flex-wrap items-center gap-2">
           <label htmlFor="date">Start Date:</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="text-black px-2 py-1 rounded"
            />
             <label htmlFor="date">End Date:</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="text-black px-2 py-1 rounded"
            />
            <button
              onClick={handleFilter}
              className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
            >
              Filter
            </button>
          </div>
          <table className="min-w-full border mt-4 border-gray-300 text-sm">
            <thead className="bg-[rgb(1,1,93)] text-white">
              <tr>
                <th className="border px-3 py-2 text-left">Date</th>
                <th className="border px-3 py-2 text-left">Class</th>
                <th className="border px-3 py-2 text-left">Section</th>
                <th className="border px-3 py-2 text-left">Reason</th>
                <th className="border px-3 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeaves?.length > 0 ? (
                filteredLeaves.map((leave, idx) => (
                  <tr key={leave._id || idx}>
                    <td className="border px-3 py-2">
                      {new Date(leave.date).toLocaleDateString()}
                    </td>
                    <td className="border px-3 py-2">{leave.Class?.[0]?.name || 'N/A'}</td>
                    <td className="border px-3 py-2">{leave.Class?.[0]?.section || 'N/A'}</td>
                    <td className="border px-3 py-2">{leave.leave}</td>
                    <td className={`border px-3 py-2 ${leave.status === 'UnApproved' ? 'text-red-600' : 'text-green-600'}`}>
                      {leave.status}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4">No leave records found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default StudentDBViewLeaves
