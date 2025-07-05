 import React from 'react'
 import { useContext } from 'react'
 import { adminDataContext } from '../Context-Api/AdminContext'
 import { useEffect } from 'react'
 import AdminLayout from './AdminLayout'
 import AdminTeachDashboardHeader from './AdminTeachDashboardHeader'
import { useState } from 'react'
import { authDataContext } from '../Context-Api/AuthContext'
import axios from 'axios'
import { Link } from 'react-router-dom'

// const TakeAttendance = () => {
//     const {adminData,fetchAdminData} = useContext(adminDataContext);
//     const {students = [],classes = []} = adminData?.admin || {};
//     useEffect(()=>{
//       fetchAdminData();
//     },[fetchAdminData])
//     console.log("students",students);
//   return (
//    <AdminLayout adminName='Bright Future'>
//        <AdminTeachDashboardHeader/>  

//         <div className="mt-4 w-full px-4 flex flex-col gap-3">
//         <div className="bg-blue-600 text-white text-center py-3 rounded relative">
//           <span className="text-lg font-semibold">
//             <i className="fas fa-clock mr-2"></i>Take Attendance
//           </span>
//           <span className="absolute right-4 top-3">
//             <a
//               href="https://wpschool.weblizar.com/wp-admin/admin.php?page=sm-staff-attendance"
//               className="btn btn-sm border border-white text-white hover:bg-white hover:text-blue-600 transition px-3 py-1 rounded"
//             >
//               <i className="fas fa-calendar-alt mr-1"></i>View Attendance
//             </a>
//           </span>
//         </div>
//     <main className='border-[1px] border-grey-200 p-2'>
//         <form
//           action="https://wpschool.weblizar.com/wp-admin/admin-ajax.php"
//           method="post"
//           className="mt-4"
//           id="wlsm-take-attendance-form"
//         >
//           <input type="hidden" name="take-attendance" value="798049d32c" />
//           <input type="hidden" name="action" value="wlsm-take-attendance" />

//           {/* Form Section Heading */}
//           <div className="mb-4">
//             <h3 className="text-lg font-semibold">Attendance By</h3>
//             <p className="text-sm text-gray-600 italic">
//               Select class, section, year, month and By Subject.
//             </p>
//           </div>

//           {/* Attendance By Radio */}
//           <div className="flex gap-4 mb-4">
//             <label className="inline-flex items-center">
//               <input
//                 type="radio"
//                 name="attendance_by"
//                 value="all"
//                 defaultChecked
//                 className="form-radio"
//               />
//               <span className="ml-2 font-semibold">Attendance By Month</span>
//             </label>
//             <label className="inline-flex items-center">
//               <input
//                 type="radio"
//                 name="attendance_by"
//                 value="subject"
//                 className="form-radio"
//               />
//               <span className="ml-2 font-semibold">Attendance By Subject</span>
//             </label>
//           </div>

//           {/* Class, Section, Date, Subject Selects */}
//           <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
//             <div>
//               <label className="font-semibold block mb-1">
//                 <span className="text-red-500">*</span> Class:
//               </label>
//               <select name="class_id" className="w-full   border px-3 py-2 rounded">
//                 <option value="">Select Class</option>
//                 {classes.map((cls) => (
//                   <option key={cls.id} value={cls.id}>
//                     {cls.name}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <label className="font-semibold  block mb-1">Section:</label>
//               <select name="section_id" className="w-full border px-3 py-2 rounded">
//                 {classes.map((sect,idx)=>{
//                    return <option id={sect._id} key={sect._id}>{sect.section || "Fetching..."}</option> 
//                 })}
                
//               </select>
//             </div>

//             <div>
//               <label className="font-semibold block mb-1">
//                 <span className="text-red-500">*</span> Date:
//               </label>
//               <input
//                 type="date"
//                 name="attendance_date"
//                 className="w-full border px-3 py-2 rounded"
//               />
//             </div>

//             <div className="form-subject-select hidden">
//               <label className="font-semibold block mb-1">
//                 <span className="text-red-500">*</span> Subject:
//               </label>
//               <select name="subject_id" className="w-full border px-3 py-2 rounded">
//                 <option value="">All Subjects</option>
//               </select>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="text-center mt-4">
//             <button
//               type="button"
//               id="wlsm-manage-attendance-btn"
//               className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
//             >
//               Manage Attendance
//             </button>
//           </div>

//           {/* Students Attendance Placeholder */}
//           <div className="wlsm-students-attendance mt-4"></div>
//         </form>
//         </main>
//       </div> 
//   </AdminLayout>
//   )
// }

// export default TakeAttendance;



















//import { useContext, useEffect, useState } from 'react';
//import { adminDataContext } from '../../contexts/adminDataContext';
//import AdminLayout from '../layouts/AdminLayout';
//import AdminTeachDashboardHeader from '../shared/AdminTeachDashboardHeader';
//import axios from 'axios';


const TakeAttendance = () => {
  const { adminData, fetchAdminData } = useContext(adminDataContext);
  const { students = [], classes = [] } = adminData?.admin || [];
  const [noStudentsMessage, setNoStudentsMessage] = useState('');


  const [date, setDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [attendanceData, setAttendanceData] = useState({});
  const [selectedClass, setSelectedClass] = useState('');
  const [showTable, setShowTable] = useState(false);
   const {serverUrl}  = useContext(authDataContext);
  useEffect(() => {
    fetchAdminData();
  }, [fetchAdminData]);

  // Initialize attendance data when class and students list change
  // useEffect(() => {
  //   if (selectedClass && students.length) {
  //     const entries = {};
  //     students
  //       .filter(s => s.classId === selectedClass)
  //       .forEach(student => {
  //         entries[student._id] = { id: student._id, name: student.name, status: 'Present' };
  //       });
  //     setAttendanceData(entries);
  //   }
  // }, [selectedClass, students]);

//   useEffect(() => {
//   if (students.length) {
//     const entries = {};

//     students
//       .filter(s => !selectedClass || String(s.classId) === String(selectedClass)) // show all if no class selected
//       .forEach(student => {
//         entries[student._id] = {
//           id: student._id,
//           name: student.name,
//           status: 'Present',
//         };
//       });

//     setAttendanceData(entries);
//   }
// }, [selectedClass, students]);


// useEffect(() => {
//   if (students.length && selectedClass) {
//     const entries = {};

//     students
//       .filter(s => s.Classs?._id === selectedClass)
//       .forEach(student => {
//         entries[student._id] = {
//           id: student._id,
//           name: student.name,
//           status: 'Present',
//         };
//       });

//     setAttendanceData(entries);
//   }
// }, [selectedClass, students]);




const handleManageAttendance = () => {
  const filtered = students.filter(s => s.Classs?._id === selectedClass);
  if (filtered.length === 0) {
    setShowTable(false);
    setAttendanceData({});
    return;
  }

  const entries = {};
  filtered.forEach(student => {
    entries[student._id] = {
      id: student._id,
      name: student.name,
      status: 'Present',
    };
  });

  setAttendanceData(entries);
  setShowTable(true);
};

  console.log("selected Class",selectedClass);
  console.log("selected student",students)
  const handleStatusChange = (studentId, status) => {
    setAttendanceData(prev => ({
      ...prev,
      [studentId]: { ...prev[studentId], status },
    }));
  };


//   const markAll = (status) => {
//   const updated = {};
//   students
//     .filter(s => !selectedClass || String(s.classId) === String(selectedClass))
//     .forEach(s => {
//       updated[s._id] = {
//         ...attendanceData[s._id],
//         status,
//       };
//     });
//   setAttendanceData(updated);
// };


const markAll = (status) => {
  const updated = { ...attendanceData };
  Object.keys(updated).forEach(id => {
    updated[id].status = status;
  });
  setAttendanceData(updated);
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalList = Object.values(attendanceData).map(s => ({
      classId: selectedClass,
      studentId: s.id,
      status: s.status,
      date,
    }));

    try {
      // Use your own API endpoint
      await axios.post(`${serverUrl}/api/teacher/Mark/Attendance`, { attendance: finalList }, { withCredentials: true });
      alert('Attendance submitted successfully!');
    } catch (err) {
      console.log(err);
      alert(err.response?.data?.error || 'Submit failed.');
    }
  };

  return (
    <AdminLayout adminName="Bright Future">
      <AdminTeachDashboardHeader />

      {/* <div className="mt- w-full px-1 flex flex-col gap-3">
        <div className="bg-blue-600 text-white text-center py-3 rounded relative">
          <span className="text-lg font-semibold"><i className="fas fa-clock mr-2" />Take Attendance</span>
          <span className="absolute right-4 top-3">
            <a href="/view-attendance" className="border border-white text-white hover:bg-white hover:text-blue-600 transition px-3 py-1 rounded text-sm">
              <i className="fas fa-calendar-alt mr-1" />View Attendance
            </a>
          </span>
        </div>

        <main className=" rounded max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className='border border-gray-200 p-3'>
            <h2>Attendance By</h2>
          <input type="radio" name="month" id="month"/>  Attendance By Month:
            <div className="grid grid-cols-1 md:grid-cols-2 w-5xl gap-6 mb-6">
              {/* Class */}
              {/* <div>
                <label className="font-semibold block mb-1">
                  <span className="text-red-500">*</span> Class:
                </label>
                <select
                  className="w-full border px-3 py-2 rounded"
                  value={selectedClass}
                  onChange={e => setSelectedClass(e.target.value)}
                  required
                >
                  <option value="">Select Class</option>
                  {classes.map(c => (
                    <option key={c._id} value={c._id}>{c.name} {c.section && `– ${c.section}`}</option>
                  ))}
                </select>
              </div> */}

              {/* Date */}
              {/* <div>
                <label className="font-semibold block mb-1">
                  <span className="text-red-500">*</span> Date:
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={e => setDate(e.target.value)}
                  className="w-full border px-3 py-2 rounded"
                  required
                />
              </div>

              <div className="mt-2 col-span-2 flex justify-center items-center">
  <button */}
    {/* type="button"
    onClick={handleManageAttendance}
    className="bg-blue-700  text-white px-4 py-2 rounded hover:bg-blue-800"
    disabled={!selectedClass || !date}
  >
    Manage Attendance
  </button>
</div> */}

            {/* </div> */}

            {/* Students Status Table */}
  {/*showTable 
  // Object.keys(attendanceData).length > 0 ? (
  //   <div className="overflow-x-auto mt-6">
  //     <table className="w-full text-sm border border-gray-300">
  //       <thead className="bg-gray-100">
  //         <tr>
  //           <th className="py-2 px-4 border">Enrollment No</th>
  //           <th className="py-2 px-4 border">Student Name</th>
  //           <th className="py-2 px-4 border">Section</th>
  //           <th className="py-2 px-4 border">Roll No</th>
  //           <th className="py-2 px-4 border">
  //             Status
  //             <div className="mt-2 flex gap-2">
  //               <button
  //                 type="button"
  //                 className="bg-green-600 text-white px-2 py-1 text-xs rounded"
  //                 onClick={() => markAll("Present")}
  //               >
  //                 Mark All Present
  //               </button>
  //               <button
  //                 type="button"
  //                 className="bg-red-600 text-white px-2 py-1 text-xs rounded"
  //                 onClick={() => markAll("Absent")}
  //               >
  //                 Mark All Absent
  //               </button>
  //             </div>
  //           </th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {students
  //           .filter(s => selectedClass && s.Classs?._id === selectedClass)
  //           .map(student => (
  //             <tr key={student._id}>
  //               <td className="py-2 px-4 border">{student.enrollmentNo || '–'}</td>
  //               <td className="py-2 px-4 border">{student.name}</td>
  //               <td className="py-2 px-4 border">{student.Classs?.section || '–'}</td>
  //               <td className="py-2 px-4 border">{student.rollNumber || '–'}</td>
  //               <td className="py-2 px-4 border text-center">
  //                 <div className="flex gap-4 justify-center">
  //                   <label>
  //                     <input
  //                       type="radio"
  //                       name={`status-${student._id}`}
  //                       value="Present"
  //                       checked={attendanceData[student._id]?.status === "Present"}
  //                       onChange={() => handleStatusChange(student._id, "Present")}
  //                     />
  //                     <span className="ml-1">Present</span>
  //                   </label>
  //                   <label>
  //                     <input
  //                       type="radio"
  //                       name={`status-${student._id}`}
  //                       value="Absent"
  //                       checked={attendanceData[student._id]?.status === "Absent"}
  //                       onChange={() => handleStatusChange(student._id, "Absent")}
  //                     />
  //                     <span className="ml-1">Absent</span>
  //                   </label>
  //                 </div>
  //               </td>
  //             </tr>
  //           ))}
  //       </tbody>
  //     </table>

  //     <button
  //       type="submit"
  //       className="mt-6 bg-[rgb(1,1,93)] w-full md:w-auto text-white px-4 py-2 rounded hover:bg-blue-700 transition"
  //     >
  //       Submit Attendance
  //     </button>
  //   </div>
//   ) : (
//     <div className="mt-6 text-center text-gray-600 font-medium">
//       No students are registered for the selected class.
//     </div>
//   )
// )}

// //           </form>
//         </main>
//       </div> */}










<div className="mt-2 w-full px-4 flex flex-col gap-4">
  {/* Header */}
  <div className="bg-[rgb(1,1,93)] text-white text-center py-3 rounded relative">
    <span className="text-lg font-semibold">
      <i className="fas fa-clock mr-2" />
      Take Attendance
    </span>
    <span className="absolute right-4 top-3">
      <Link
        to="/Admin/View/Attendance"
        className="border border-white bg-[#C19703] text-white hover:text-blue-600 transition px-3 py-1 rounded text-sm"
      >
        <i className="fas fa-calendar-alt mr-1" />
        View Attendance
      </Link>
    </span>
  </div>

  {/* Main Form */}
  <main className="rounded max-w-5xl w-full mx-auto">
    <form onSubmit={handleSubmit} className="border border-gray-200 p-6 bg-white rounded">
      <h2 className="text-lg font-semibold mb-4">Attendance By</h2>

      {/* Radio option */}
      <div className="mb-4">
        <label>
          <input type="radio" name="month" defaultChecked id="month" className="mr-2" />
          Attendance By Month
        </label>
      </div>

      {/* Form Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Class Selector */}
        <div>
          <label className="font-semibold block mb-1">
            <span className="text-red-500">*</span> Class:
          </label>
          <select
            className="w-full border px-4 py-2 rounded"
            value={selectedClass}
            // onChange={e => setSelectedClass(e.target.value)}

            onChange={(e) => {
    const selected = e.target.value;
    setSelectedClass(selected);

    const filteredStudents = students.filter(s => s.Classs?._id === selected);
    if (selected && filteredStudents.length === 0) {
      setNoStudentsMessage('No students are registered for the selected class.');
    } else {
      setNoStudentsMessage('');
    }
  }}
            required
          >
            <option value="">Select Class</option>
            {classes.map(c => (
              <option key={c._id} value={c._id}>
                {c.name}  {c.section && ` –  ${c.section}`}
              </option>
            ))}
          </select>

          {noStudentsMessage && (
  <p className="text-red-600 mt-2 text-sm">{noStudentsMessage}</p>
)}

        </div>

        {/* Date Picker */}
        <div>
          <label className="font-semibold block mb-1">
            <span className="text-red-500">*</span> Date:
          </label>
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            className="w-full border px-4 py-2 rounded"
            required
          />
        </div>
      </div>

      {/* Manage Attendance Button */}
      <div className="mt-6 flex justify-center">
        <button
          type="button"
          onClick={handleManageAttendance}
          className="bg-[rgb(1,1,93)] text-white px-6 py-2 rounded hover:bg-blue-800 transition"
          disabled={!selectedClass || !date}
        >
          Manage Attendance
        </button>
      </div>

      {/* Students Table or Message */}
      {showTable && (
        Object.keys(attendanceData).length > 0 ? (
          <div className="overflow-x-auto mt-10">
            <table className="w-full text-sm border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 border">Enrollment No</th>
                  <th className="py-2 px-4 border">Student Name</th>
                  <th className="py-2 px-4 border">Section</th>
                  <th className="py-2 px-4 border">Roll No</th>
                  <th className="py-2 px-4 border">
                    Status
                    <div className="mt-2 flex gap-2">
                      <button
                        type="button"
                        className="bg-green-600 text-white px-2 py-1 text-xs rounded"
                        onClick={() => markAll("Present")}
                      >
                        Mark All Present
                      </button>
                      <button
                        type="button"
                        className="bg-red-600 text-white px-2 py-1 text-xs rounded"
                        onClick={() => markAll("Absent")}
                      >
                        Mark All Absent
                      </button>
                      <button
  type="button"
  className="bg-yellow-500 text-white px-2 py-1 text-xs rounded"
  onClick={() => markAll("Holiday")}
>
  Mark All Holiday
</button>

                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {students
                  .filter(s => selectedClass && s.Classs?._id === selectedClass)
                  .map(student => (
                    <tr key={student._id}>
                      <td className="py-2 px-4 border">{student.enrollmentNo || '–'}</td>
                      <td className="py-2 px-4 border">{student.name}</td>
                      <td className="py-2 px-4 border">{student.Classs?.section || '–'}</td>
                      <td className="py-2 px-4 border">{student.rollNumber || '–'}</td>
                      <td className="py-2 px-4 border text-center">
                        <div className="flex gap-4 justify-center">
                          <label>
                            <input
                              type="radio"
                              name={`status-${student._id}`}
                              value="Present"
                              checked={attendanceData[student._id]?.status === "Present"}
                              onChange={() => handleStatusChange(student._id, "Present")}
                            />
                            <span className="ml-1">Present</span>
                          </label>
                          <label>
                            <input
                              type="radio"
                              name={`status-${student._id}`}
                              value="Absent"
                              checked={attendanceData[student._id]?.status === "Absent"}
                              onChange={() => handleStatusChange(student._id, "Absent")}
                            />
                            <span className="ml-1">Absent</span>
                          </label>
                           <label>
                            <input
                              type="radio"
                              name={`status-${student._id}`}
                              value="Leave"
                              checked={attendanceData[student._id]?.status === "Leave"}
                              onChange={() => handleStatusChange(student._id, "Leave")}
                            />
                            <span className="ml-1">Leave</span>
                          </label>
                          
                           <label>
                            <input
                              type="radio"
                              name={`status-${student._id}`}
                              value="Holiday"
                              checked={attendanceData[student._id]?.status === "Holiday"}
                              onChange={() => handleStatusChange(student._id, "Holiday")}
                            />
                            <span className="ml-1">Holiday</span>
                          </label>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>

            <button
              type="submit"
              className="mt-6 bg-[rgb(1,1,93)] w-full md:w-auto text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Submit Attendance
            </button>
          </div>
        ) : (
          <div className="mt-10 text-center text-gray-600 font-medium">
            No students are registered for the selected class.
          </div>
        )
      )}
    </form>
  </main>
</div>
    </AdminLayout>
  );
};

export default TakeAttendance;
