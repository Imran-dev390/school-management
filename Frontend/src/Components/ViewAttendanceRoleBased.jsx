// import React from 'react'
// import AdminTeachDashboardHeader from './AdminTeachDashboardHeader'
// import { useContext } from 'react'
// import { userDataContext } from '../Context-Api/UserContext'
// import TeacherSidebar from './TeacherSidebar'
// import AccountantSidebar from './AccountantSidebar'

// const ViewAttendanceRoleBased = () => {
//     const {userData} = useContext(userDataContext);
//     console.log("userData",userData);
//   return (
//     <div className='min-h-screen flex flex-col md:flex-row gap-3 bg-white'>
//  {userData.role === "Teacher" && <TeacherSidebar/>
// }
// {userData.role === "Accountant" && <AccountantSidebar/>
// }
// <div className="flex flex-col gap-3 w-full h-full px-4 mt-3">
//        <AdminTeachDashboardHeader/>
//         <div className="w-full text-white p-3 rounded-md bg-[rgb(1,1,93)] flex justify-center items-center border-b pb-3">
//                  <h2 className="text-lg font-semibold flex items-center gap-2">
//                    <i className="fas fa-calendar-alt" /> View Attendance
//                  </h2>
//                </div>
//        </div>
       
//     </div>
//   )
// }

// export default ViewAttendanceRoleBased


























import React, { useContext } from 'react';
//import { userDataContext } from '../../context/userContext';
import TeacherSidebar from './TeacherSidebar';
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader';
import { userDataContext } from '../Context-Api/UserContext';
//import TeacherSidebar from '../../components/Sidebar/TeacherSidebar';
//import AccountantSidebar from '../../components/Sidebar/AccountantSidebar';
//import AdminTeachDashboardHeader from '../../components/Header/AdminTeachDashboardHeader';

const ViewAttendanceRoleBased = () => {
  const { userData } = useContext(userDataContext);

// const attendanceRows = [];

// userData?.assignedClass?.forEach((assigned) => {
//   const classInfo = assigned.class;
//   const students = classInfo?.students || [];

//   const classAttendance = classInfo?.attendance || [];

//   classAttendance.forEach((record) => {
//     // Loop over each student and assign the same status (not realistic, but matches current structure)
//     students.forEach(student => {
//       attendanceRows.push({
//         date: record.date,
//         status: record.status,
//         studentName: student.name,
//         className: classInfo.name,
//         section: classInfo.section,
//       });
//     });
//   });
// });


// const attendanceRows = [];

// userData?.assignedClass?.forEach((assigned) => {
//   // ✅ Only include classes where teacher is incharge
//   if (!assigned.incharge) return;

//   const classInfo = assigned.class;
//   const students = classInfo?.students || [];
//   const classAttendance = classInfo?.attendance || [];

//   classAttendance.forEach((record) => {
//     students.forEach(student => {
//       attendanceRows.push({
//         date: record.date,
//         status: record.status, // ❗️This is same for all students — ideally fix backend
//         studentName: student.name,
//         className: classInfo.name,
//         section: classInfo.section,
//       });
//     });
//   });
// });


const attendanceRows = [];

userData?.assignedClass?.forEach((assigned) => {
  if (!assigned.incharge) return;

  const classInfo = assigned.class;
  const students = classInfo?.students || [];
  const classAttendance = classInfo?.attendance || [];

  classAttendance.forEach((record) => {
    students.forEach(student => {
      // ✅ Skip if student's current class doesn't match this class
      if (student.Classs?._id !== classInfo._id) return;

      attendanceRows.push({
        date: record.date,
        status: record.status,
        studentName: student.name,
        className: classInfo.name,
        section: classInfo.section,
      });
    });
  });
});


  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
     <TeacherSidebar />

      <div className="flex-1 px-4 mt-3">
        <AdminTeachDashboardHeader />

        <div className="w-full text-white p-3 rounded-md bg-[rgb(1,1,93)] text-center mb-4">
          <h2 className="text-lg font-semibold flex items-center justify-center gap-2">
            <i className="fas fa-calendar-alt" /> View Attendance
          </h2>
        </div>

        {attendanceRows.length === 0 ? (
          <div className="text-center text-gray-500">
            No attendance records found.
          </div>
        ) : (
          <div className="overflow-x-auto bg-white rounded shadow border">
            <table className="w-full text-sm text-left border">
              {/* <thead className="bg-[rgb(1,1,93)] text-white">
                <tr>
                  <th className="px-4 py-2 border">#</th>
                  <th className="px-4 py-2 border">Date</th>
                  <th className="px-4 py-2 border">Student</th>
                  <th className="px-4 py-2 border">Roll No</th>
                  <th className="px-4 py-2 border">Status</th>
                  <th className="px-4 py-2 border">Class</th>
                  <th className="px-4 py-2 border">Section</th>
                </tr>
              </thead> */}

              <thead className="bg-[rgb(1,1,93)] text-white">
  <tr>
    <th className="px-4 py-2 border">#</th>
    <th className="px-4 py-2 border">Date</th>
    <th className="px-4 py-2 border">Student</th>
    <th className="px-4 py-2 border">Status</th>
    <th className="px-4 py-2 border">Class</th>
    <th className="px-4 py-2 border">Section</th>
  </tr>
</thead>

              <tbody>
                {/* {attendanceRows.map((att, idx) => (
                  <tr key={idx} className="odd:bg-white even:bg-gray-50">
                    <td className="px-4 py-2 border text-center">{idx + 1}</td>
                    <td className="px-4 py-2 border">{att.date}</td>
                    <td className="px-4 py-2 border">{att.studentName}</td>
                    <td className="px-4 py-2 border">{att.roll}</td>
                    <td
                      className={`px-4 py-2 border ${
                        att.status === "Absent" ? "text-red-500" : "text-green-600"
                      }`}
                    >
                      {att.status}
                    </td>
                    <td className="px-4 py-2 border">{att.className}</td>
                    <td className="px-4 py-2 border">{att.section}</td>
                  </tr>
                ))} */}
                {attendanceRows.map((att, idx) => (
  <tr key={idx} className="odd:bg-white even:bg-gray-50">
    <td className="px-4 py-2 border text-center">{idx + 1}</td>
    <td className="px-4 py-2 border">{new Date (att.date).toLocaleDateString()}</td>
    <td className="px-4 py-2 border">{att.studentName}</td>
    <td className={`px-4 py-2 border ${att.status === 'Absent' ? 'text-red-500' : 'text-green-600'}`}>
      {att.status}
    </td>
    <td className="px-4 py-2 border">{att.className}</td>
    <td className="px-4 py-2 border">{att.section}</td>
  </tr>
))}

              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewAttendanceRoleBased;
