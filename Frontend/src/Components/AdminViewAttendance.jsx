// import React, { useContext, useEffect } from 'react'
// import { adminDataContext } from '../Context-Api/AdminContext'
// import AdminLayout from './AdminLayout';
// import AdminTeachDashboardHeader from './AdminTeachDashboardHeader';

// const ViewAttendance = () => {
//     const {adminData,fetchAdminData} = useContext(adminDataContext);
//     const {classes = [], students = []} = adminData?.admin || {};
//         useEffect(()=>{
//        fetchAdminData();
//     },[fetchAdminData])
//   return (
//     <AdminLayout adminName='Bright Future'>
//       <AdminTeachDashboardHeader/>

//     </AdminLayout>
//   )
// }

// export default ViewAttendance
































import React, { useContext, useEffect, useState } from 'react';
import { adminDataContext } from '../Context-Api/AdminContext';
import AdminLayout from './AdminLayout';
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader';
import { Link } from 'react-router-dom';

// const AdminViewAttendance = () => {
//   const { adminData, fetchAdminData } = useContext(adminDataContext);
//   const { classes = [] } = adminData?.admin || {};

//   const [selectedClassId, setSelectedClassId] = useState('');
//   //const [selectedSectionId, setSelectedSectionId] = useState('');
//   const [selectedSectionId, setSelectedSectionId] = useState('');

//   const [selectedMonth, setSelectedMonth] = useState('');
//   const [selectedYear, setSelectedYear] = useState('');
// // Add these near top of your component
// const months = [
//   'January', 'February', 'March', 'April', 'May', 'June',
//   'July', 'August', 'September', 'October', 'November', 'December'
// ];

// const currentYear = new Date().getFullYear();
// const years = Array.from({ length: 10 }, (_, i) => currentYear - i); // Last 10 years

//   useEffect(() => {
//     fetchAdminData();
//   }, [fetchAdminData]);

//   // Find selected class object to access its sections
//   const selectedClass = classes.find((cls) => cls._id === selectedClassId);
//   const sections = selectedClass?.section || [];
// console.log("selected class section",selectedClass);
// //console.log("classes",classes);
//   return (

//   );
// };
































const AdminViewAttendance = () => {
  const { adminData, fetchAdminData } = useContext(adminDataContext);
  const { classes = [] } = adminData?.admin || {};
  const [viewClicked, setViewClicked] = useState(false);


  const [selectedClassId, setSelectedClassId] = useState('');
  const [selectedMonth, setSelectedMonth] = useState(''); // format YYYY-MM
  const [selectedSectionId, setSelectedSectionId] = useState('');

  const current = new Date();
  const [daysInMonth, setDaysInMonth] = useState([]);

  useEffect(() => {
    fetchAdminData();
  }, [fetchAdminData]);

  useEffect(() => {
    if (selectedMonth) {
      const [year, month] = selectedMonth.split('-').map(Number);
      const days = Array.from({ length: new Date(year, month, 0).getDate() }, (_, i) => i + 1);
      setDaysInMonth(days);
    }
  }, [selectedMonth]);

  const selectedClass = classes.find(c => c._id === selectedClassId);
  const students = selectedClass?.students || [];
  const attendanceRecords = selectedClass?.attendance || [];

 


//const handleViewAttendance = ()=>{
  const attendanceByStudent = {};
attendanceRecords.forEach(rec => {
  const date = new Date(rec.date);
  const day = date.getDate();
  if (!attendanceByStudent[rec.studentId]) attendanceByStudent[rec.studentId] = {};
  attendanceByStudent[rec.studentId][day] = rec.status; // status can be 'Present', 'Absent', etc.
});
  return (
<AdminLayout adminName="Bright Future">
  <div className="w-full  px-4 py-4 space-y-6">
     <AdminTeachDashboardHeader />
    {/* Header */}
    <div className="flex w-full text-white p-3 rounded-md bg-[rgb(1,1,93)] flex-col md:flex-row justify-between items-center border-b pb-3">
      <h2 className="text-lg font-semibold  flex items-center gap-2">
        <i className="fas fa-calendar-alt"></i> View Attendance
      </h2>
      <div className="mt-2 md:mt-0 flex gap-2">
        <button className="text-sm px-4 py-1 border border-gray-300 rounded bg-[#C19703]">
          <i className="fas fa-clock"></i>&nbsp;Bulk Upload
        </button>
        <Link to="/Take/Attendance" className="text-sm px-4 py-1 border border-gray-300 rounded bg-[#C19703]">
          <i className="fas fa-clock"></i>&nbsp;Take Attendance
        </Link>
      </div>
    </div>

    {/* Filter Form */}
    <form className="space-y-4 ">
      <div className="child border pb-5 border-grey-300 py-2 px-4">
      <div>
        <h3 className="text-base font-bold text-gray-800"><input type="radio" name="Month" id="month" defaultChecked/> Attendance By Month</h3>
        <p className="text-sm text-gray-600 italic">
          Select class, section, and month to view attendance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Class Dropdown */}
        <div>
          <label htmlFor="classSelect" className="block text-md font-medium text-gray-700">
            <span className="text-red-500">*</span> Class:
          </label>
          <select
            id="classSelect"
             className="mt-1 w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            //className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            value={selectedClassId}
            onChange={(e) => {
              setSelectedClassId(e.target.value);
              setSelectedSectionId('');
            }}
          >
            <option value="">Select Class</option>
            {classes.map((cls) => (
              <option key={cls._id} value={cls._id}>
                {cls.name}
              </option>
            ))}
          </select>
        </div>

        {/* Section Dropdown */}
        <div>
          <label htmlFor="sectionSelect" className="block text-md font-medium text-gray-700">
            <span className="text-red-500">*</span> Section:
          </label>
          <select
            id="sectionSelect"
      className="mt-1 w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            //       className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            value={selectedSectionId}
            onChange={(e) => setSelectedSectionId(e.target.value)}
            disabled={!selectedClassId}
          >
            <option value="">Select Section</option>
            {selectedClass?.section && (
              <option value={selectedClass.section}>{selectedClass.section}</option>
            )}
          </select>
        </div>

        {/* Month Picker */}
        <div>
          <label htmlFor="monthInput" className="block text-md  font-medium text-gray-700">
            <span className="text-red-500">*</span> Month:
          </label>
          <input
            type="month"
            id="monthInput"
         className="mt-1 w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            //    className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          />
        </div>
      </div>

</div>

      <div className="text-center">
        <button
          type="button"
          className="bg-[rgb(1,1,93)] text-white text-sm px-6 py-2 rounded hover:bg-indigo-900"
         onClick={() => setViewClicked(true)}
        >
          View Attendance
        </button>
      </div>
   
    </form>



    {/* Attendance Table */}
    {viewClicked && selectedClass && selectedMonth && (
       students.length > 0 ? (
        <>

        <div className="flex flex-col items-center space-y-2">
          <p className="text-md font-medium">
            Month:{' '}
            <span className="font-bold text-gray-800">
              {new Date(selectedMonth + '-01').toLocaleString('default', {
                month: 'long',
                year: 'numeric',
              })}
            </span>
          </p>
          <button
            type="button"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded text-sm"
          >
            Print Attendance Sheet
          </button>
        </div>
      <div className="mt-8 border border-grey-300 px-8 space-y-4">
       

        {/* School Info */}
        <div className="w-full max-w-4xl mx-auto text-center border-b border-gray-300 pb-2">
          <h1 className="text-2xl font-bold">BRIGHT FUTURE HIGH SCHOOL</h1>
          <p className="text-sm mt-1">
            <span className="font-semibold">Phone:</span> 92323232312 |{' '}
            <span className="font-semibold">Email:</span> govin@gmail.com
          </p>
          <p className="text-sm">
            <span className="font-semibold">Address:</span> Sariab Road Quetta
          </p>
        </div>

        {/* Class + Month Info */}
        <div className="flex justify-between max-w-4xl mx-auto text-sm font-semibold">
          <span>
            Attendance - Class: <span className="text-gray-600">{selectedClass.name}</span> | Section:{' '}
            <span className="text-gray-600">{selectedClass.section}</span>
          </span>
          <span>
            Month:{' '}
            <span className="text-gray-800">
              {new Date(selectedMonth + '-01').toLocaleString('default', {
                month: 'long',
                year: 'numeric',
              })}
            </span>
          </span>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto p-10 w-full text-md border-collapse border border-gray-300">
            <thead className="bg-blue-600 text-white text-center">
              <tr>
                <th className="border px-2 py-1 text-left">Date →<br />Students ↓</th>
                {daysInMonth.map((day) => (
                  <th key={day} className="border px-2 py-1">{String(day).padStart(2, '0')}</th>
                ))}
                <th className="border px-2 py-1">Total Present</th>
                <th className="border px-2 py-1">Total Absent</th>
                <th className="border px-2 py-1">Total Holiday</th>
                <th className="border px-2 py-1">Total Leave</th>
              </tr>
            </thead>
            <tbody>
              {students.map((stu, idx) => {
                const records = attendanceByStudent[stu._id] || {};
                let present = 0, absent = 0, holiday = 0, leave = 0;

                const getStatusClass = (status) => {
                  switch (status) {
                    case 'Present': present++; return 'text-green-600 font-semibold';
                    case 'Absent': absent++; return 'text-red-600 font-semibold';
                    case 'Holiday': holiday++; return 'text-yellow-600 font-semibold';
                    case 'Leave': leave++; return 'text-blue-500 font-semibold';
                    default: return '';
                  }
                };

                return (
                  <tr key={stu._id} className={idx % 2 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="border px-2 py-1 text-left font-medium">
                      {stu.name}<br />
                      <span className="text-gray-600 font-semibold">
                        Roll No. {stu.rollNumber || idx + 1}
                      </span>
                    </td>
                    {daysInMonth.map((day) => {
                      const status = records[day] || '';
                      return (
                        <td key={day} className="border px-2 py-1 text-center">
                          {status ? <span className={getStatusClass(status)}>{status[0]}</span> : '-'}
                        </td>
                      );
                    })}
                    <td className="border px-2 py-1 text-center font-bold text-green-600">{present}</td>
                    <td className="border px-2 py-1 text-center font-bold text-red-600">{absent}</td>
                    <td className="border px-2 py-1 text-center font-bold text-yellow-600">{holiday}</td>
                    <td className="border px-2 py-1 text-center font-bold text-blue-500">{leave}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
       </>
       ) 
       : (
    <div className="mt-8 text-center text-red-600 font-semibold">
      No students are registered for this class.
    </div>
  )
    )}
  </div>
</AdminLayout>

  );
};
export default AdminViewAttendance;
