import React, { useContext, useState } from 'react'
import TeacherSidebar from './TeacherSidebar'
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader'
import { userDataContext } from '../Context-Api/UserContext'

// const TeacherViewStudentsLeave = () => {
//   const { userData } = useContext(userDataContext);
// const [selectedDate, setSelectedDate] = useState("");

// //   const leaveRows = [];

// //   userData?.assignedClass?.forEach((assigned) => {
// //     if (!assigned.incharge) return; // ✅ Only for incharge classes

// //     const classInfo = assigned.class;
// //     const students = classInfo?.students || [];

// //     students.forEach((student) => {
// //       // ✅ Skip if the student has been promoted or transferred
// //       if (student.Classs?._id !== classInfo._id) return;

// //       student.leave?.forEach((leave) => {
// //         leaveRows.push({
// //           studentName: student.name,
// //           className: classInfo.name,
// //           section: classInfo.section,
// //           leaveReason: leave.leave,
// //           date: new Date(leave.date).toLocaleDateString(),
// //         });
// //       });
// //     });
// //   });


// const leaveRows = [];

// userData?.assignedClass?.forEach((assigned) => {
//   if (!assigned.incharge) return;

//   const classInfo = assigned.class;
//   const students = classInfo?.students || [];

//   students.forEach((student) => {
//     if (student.Classs?._id !== classInfo._id) return;

//     student.leave?.forEach((leave) => {
//       const leaveDate = new Date(leave.date).toISOString().split("T")[0]; // 'YYYY-MM-DD'
//       const filterDate = selectedDate;

//       // ✅ Only push if no date selected OR matches selectedDate
//       if (!filterDate || leaveDate === filterDate) {
//         leaveRows.push({
//           studentName: student.name,
//           className: classInfo.name,
//           section: classInfo.section,
//           leaveReason: leave.leave,
//           date: new Date(leave.date).toLocaleDateString(),
//         });
//       }
//     });
//   });
// });
//   return (
//     <div className="flex flex-col md:flex-row gap-3 min-h-screen bg-white">
//       <TeacherSidebar />
//       <div className="flex flex-col gap-3 h-full w-full">
//         <AdminTeachDashboardHeader />
//         <div className="flex w-full text-white p-3 rounded-md bg-[rgb(1,1,93)] flex-col md:flex-row justify-center items-center border-b pb-3">
//           <div className="centerd flex items-center justify-center">
//             <h2 className="text-lg font-semibold justify-center flex items-center gap-2">
//               <i className="fas fa-calendar-alt"></i> Students Leaves
//             </h2>
//           </div>
//         </div>

//         {/* ✅ Table Display */}
//         <div className="overflow-x-auto border border-grey-300 shadow-xl p-4">

//             <div className="flex justify-end px-4 mb-3">
//   <input
//     type="date"
//     className="border border-gray-400 px-3 py-2 rounded-md shadow-sm"
//     value={selectedDate}
//     onChange={(e) => setSelectedDate(e.target.value)}
//   />
// </div>

//           <table className="min-w-full table-auto border">
//             <thead>
//               <tr className="bg-[rgb(1,1,93)] text-white">
//                 <th className="px-4 py-2 border">Student Name</th>
//                 <th className="px-4 py-2 border">Class</th>
//                 <th className="px-4 py-2 border">Section</th>
//                 <th className="px-4 py-2 border">Date</th>
//                 <th className="px-4 py-2 border">Reason</th>
//               </tr>
//             </thead>
//             <tbody>
//               {leaveRows.length > 0 ? (
//                 leaveRows.map((row, index) => (
//                   <tr key={index} className="text-center">
//                     <td className="border px-4 py-2">{row.studentName}</td>
//                     <td className="border px-4 py-2">{row.className}</td>
//                     <td className="border px-4 py-2">{row.section}</td>
//                     <td className="border px-4 py-2">{row.date}</td>
//                     <td className="border px-4 py-2">{row.leaveReason}</td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="5" className="text-center p-4">
//                     No leave records found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };












const TeacherViewStudentsLeave = () => {
  const { userData } = useContext(userDataContext);

  const [selectedDate, setSelectedDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  const leaveRows = [];

  userData?.assignedClass?.forEach((assigned) => {
    if (!assigned.incharge) return;

    const classInfo = assigned.class;
    const students = classInfo?.students || [];

    students.forEach((student) => {
      if (student.Classs?._id !== classInfo._id) return;

      student.leave?.forEach((leave) => {
        const leaveDate = new Date(leave.date).toISOString().split("T")[0];
        const filterDate = selectedDate;

        if (!filterDate || leaveDate === filterDate) {
          leaveRows.push({
            studentName: student.name,
            className: classInfo.name,
            section: classInfo.section,
            leaveReason: leave.leave,
            date: new Date(leave.date).toLocaleDateString(),
          });
        }
      });
    });
  });

  // Pagination logic
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = leaveRows.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(leaveRows.length / recordsPerPage);

  const goToPage = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-3 min-h-screen bg-white">
      <TeacherSidebar />
      <div className="flex flex-col gap-3 h-full w-full">
        <AdminTeachDashboardHeader />
        <div className="flex w-full text-white p-3 rounded-md bg-[rgb(1,1,93)] flex-col md:flex-row justify-center items-center border-b pb-3">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <i className="fas fa-calendar-alt"></i> Students Leaves
          </h2>
        </div>

        <div className="overflow-x-auto border border-gray-300 shadow-xl p-4">
          <div className="flex justify-between items-center mb-4 px-2">
            <label className="text-sm sm:text-md md:text-lg font-medium text-gray-700">Filter by Date:</label>
            <input
              type="date"
              className="border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={selectedDate}
              onChange={(e) => {
                setSelectedDate(e.target.value);
                setCurrentPage(1); // reset to page 1 on date change
              }}
            />
          </div>

          <table className="min-w-full table-auto border">
            <thead>
              <tr className="bg-[rgb(1,1,93)] text-white">
                <th className="px-4 py-2 border">Student Name</th>
                <th className="px-4 py-2 border">Class</th>
                <th className="px-4 py-2 border">Section</th>
                <th className="px-4 py-2 border">Date</th>
                <th className="px-4 py-2 border">Reason</th>
              </tr>
            </thead>
            <tbody>
              {currentRecords.length > 0 ? (
                currentRecords.map((row, index) => (
                  <tr key={index} className="text-center">
                    <td className="border px-4 py-2">{row.studentName}</td>
                    <td className="border px-4 py-2">{row.className}</td>
                    <td className="border px-4 py-2">{row.section}</td>
                    <td className="border px-4 py-2">{row.date}</td>
                    <td className="border px-4 py-2">{row.leaveReason}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center p-4">
                    No leave records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Pagination Controls */}
          {/* {leaveRows.length > recordsPerPage && (
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={() => goToPage(currentPage - 1)}
                className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-300"
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span className="text-sm text-gray-700">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => goToPage(currentPage + 1)}
                className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-300"
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )} */}

          <div className="flex justify-end items-center gap-4 mt-4">
  <button
    onClick={() => goToPage(currentPage - 1)}
    className="px-3 py-1 cursor-pointer bg-blue-600 text-white rounded hover:bg-blue-700"
    disabled={currentPage === 1 || totalPages === 0}
  >
    Previous
  </button>
  <span className="text-sm text-gray-700">
    Page {totalPages === 0 ? 0 : currentPage} of {totalPages}
  </span>
  <button
    onClick={() => goToPage(currentPage + 1)}
    className="px-3 py-1 cursor-pointer bg-blue-600 text-white rounded"
    disabled={currentPage === totalPages || totalPages === 0}
  >
    Next
  </button>
</div>

        </div>
      </div>
    </div>
  );
};
export default TeacherViewStudentsLeave
