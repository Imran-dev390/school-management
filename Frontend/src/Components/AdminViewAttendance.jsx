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
































import React, { useContext, useEffect, useState,useRef } from 'react';
import { adminDataContext } from '../Context-Api/AdminContext';
import AdminLayout from './AdminLayout';
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader';
import { Link } from 'react-router-dom';
//import React, { useRef } from 'react';

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

































































// const AdminViewAttendance = () => {
//   const { adminData, fetchAdminData } = useContext(adminDataContext);
//   const { classes = [] } = adminData?.admin || {};

//   const [viewClicked, setViewClicked] = useState(false);
//   const [selectedClassId, setSelectedClassId] = useState('');
//   const [selectedSectionId, setSelectedSectionId] = useState('');
//   const [selectedMonth, setSelectedMonth] = useState('');
//   const [daysInMonth, setDaysInMonth] = useState([]);

//   const printRef = useRef();

//   useEffect(() => {
//     fetchAdminData();
//   }, [fetchAdminData]);

//   useEffect(() => {
//     if (selectedMonth) {
//       const [year, month] = selectedMonth.split('-').map(Number);
//       const totalDays = new Date(year, month, 0).getDate();
//       setDaysInMonth([...Array(totalDays).keys()].map(i => i + 1));
//     } else {
//       setDaysInMonth([]);
//     }
//   }, [selectedMonth]);

//   const selectedClass = classes.find(c => c._id === selectedClassId);
//   const students = selectedClass?.students || [];
//   const attendanceRecords = selectedClass?.attendance || [];

//   const attendanceByStudent = {};
//   attendanceRecords.forEach(rec => {
//     const day = new Date(rec.date).getDate();
//     attendanceByStudent[rec.studentId] ||= {};
//     attendanceByStudent[rec.studentId][day] = rec.status;
//   });

//   const handlePrint = () => {
//     if (!printRef.current) return;
//     let html = printRef.current.innerHTML;

//     // Remove Tailwind color classes
//     html = html
//       .replace(/class="[^"]*?(text|bg|border)-\S+?"/g, '')
//       .replace(/class="[^"]*?font-\S+?"/g, '');

//     const css = `
//       body { font-family: Arial, sans-serif; margin: 20px; color: #000; }
//       .school-header { text-align: center; border-bottom: 2px solid #000; margin-bottom: 20px; padding-bottom: 10px; }
//       .info-bar { display: flex; justify-content: space-between; font-weight: bold; margin-bottom: 20px; }
//       table { width: 100%; border-collapse: collapse; font-size: 11px; }
//       th, td { border: 1px solid #000; padding: 6px; text-align: center; }
//       th { background-color: #f0f0f0; font-weight: bold; }
//       .present, .absent, .leave, .holiday { font-weight: bold; color: #000; }
//       @media print {
//         body { margin: 0; }
//       }
//     `;

//     const printWin = window.open('', '', 'width=1000,height=800');
//     if (!printWin) return;

//     printWin.document.write(`
//       <html>
//         <head>
//           <title>Attendance - ${selectedClass?.name || ''}</title>
//           <style>${css}</style>
//         </head>
//         <body>${html}</body>
//       </html>
//     `);

//     printWin.document.close();
//     printWin.onload = () => {
//       printWin.focus();
//       printWin.print();
//       printWin.close();
//     };
//   };

//   return (
//     <AdminLayout adminName="Bright Future">
//       <div className="px-4 py-4 space-y-6">
//         <AdminTeachDashboardHeader />
//         <div className="flex justify-between items-center bg-blue-900 text-white p-3 mb-4 rounded">
//           <h2 className="text-lg font-semibold">
//             <i className="fas fa-calendar-alt"></i> View Attendance
//           </h2>
//           <Link to="/Take/Attendance" className="btn bg-yellow-600 text-sm">
//             <i className="fas fa-clock"></i> Take Attendance
//           </Link>
//         </div>

//         <form className="space-y-4">
//           <div className="border p-4 rounded space-y-3">
//             <h3 className="font-bold text-gray-800">
//               <input type="radio" name="month" defaultChecked /> Attendance By Month
//             </h3>
//             <div className="grid md:grid-cols-3 gap-4">
//               {/* Class */}
//               <div>
//                 <label className="font-medium">Class <span className="text-red-500">*</span></label>
//                 <select value={selectedClassId} onChange={e => { setSelectedClassId(e.target.value); setSelectedSectionId(''); }} className="input">
//                   <option value="">Select Class</option>
//                   {classes.map(c => <option key={c._id} value={c._id}>{c.name}</option>)}
//                 </select>
//               </div>
//               {/* Section */}
//               <div>
//                 <label className="font-medium">Section <span className="text-red-500">*</span></label>
//                 <select value={selectedSectionId} onChange={e => setSelectedSectionId(e.target.value)} disabled={!selectedClassId} className="input">
//                   <option value="">Select Section</option>
//                   {selectedClass?.section && <option value={selectedClass.section}>{selectedClass.section}</option>}
//                 </select>
//               </div>
//               {/* Month */}
//               <div>
//                 <label className="font-medium">Month <span className="text-red-500">*</span></label>
//                 <input type="month" value={selectedMonth} onChange={e => setSelectedMonth(e.target.value)} className="input" />
//               </div>
//             </div>
//             <div className="text-center">
//               <button type="button" onClick={() => setViewClicked(true)} className="btn bg-blue-900 text-white">View Attendance</button>
//             </div>
//           </div>
//         </form>

//         {viewClicked && selectedClass && selectedMonth && (
//           students.length > 0 ? (
//             <>
//               <div className="info-bar">
//                 <span>Month: <strong>{new Date(selectedMonth + '-01').toLocaleString('default', { month: 'long', year: 'numeric' })}</strong></span>
//                 <button onClick={handlePrint} className="btn bg-yellow-600 text-sm">Print Attendance Sheet</button>
//               </div>

//               <div ref={printRef}>
//                 <div className="school-header">
//                   <h1>BRIGHT FUTURE HIGH SCHOOL</h1>
//                   <p>Phone: 92323232312 | Email: govin@gmail.com</p>
//                   <p>Address: Sariab Road Quetta</p>
//                 </div>

//                 <div className="info-bar">
//                   <div>Class: <strong>{selectedClass.name}</strong> | Section: <strong>{selectedClass.section}</strong></div>
//                   <div>Month: <strong>{new Date(selectedMonth + '-01').toLocaleString('default', { month: 'long', year: 'numeric' })}</strong></div>
//                 </div>

//                 <table>
//                   <thead>
//                     <tr>
//                       <th>Student</th>
//                       {daysInMonth.map(day => <th key={day}>{String(day).padStart(2, '0')}</th>)}
//                       <th>Present</th><th>Absent</th><th>Holiday</th><th>Leave</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {students.map((stu, i) => {
//                       const recs = attendanceByStudent[stu._id] || {};
//                       let pres = 0, abs = 0, hol = 0, lev = 0;
//                       return (
//                         <tr key={stu._id} className={i % 2 === 0 ? '' : 'bg-gray-100'}>
//                           <td>{stu.name} (Roll {stu.rollNumber || i + 1})</td>
//                           {daysInMonth.map(day => {
//                             const st = recs[day];
//                             if (st === 'Present') pres++;
//                             if (st === 'Absent') abs++;
//                             if (st === 'Holiday') hol++;
//                             if (st === 'Leave') lev++;
//                             return <td key={day}>{st ? st[0] : '-'}</td>;
//                           })}
//                           <td><strong>{pres}</strong></td>
//                           <td><strong>{abs}</strong></td>
//                           <td><strong>{hol}</strong></td>
//                           <td><strong>{lev}</strong></td>
//                         </tr>
//                       );
//                     })}
//                   </tbody>
//                 </table>
//               </div>
//             </>
//           ) : (
//             <p className="text-red-600 font-semibold text-center">No students are registered for this class.</p>
//           )
//         )}
//       </div>
//     </AdminLayout>
//   );
// };








// const AdminViewAttendance = () => {
//   const { adminData, fetchAdminData } = useContext(adminDataContext);
//   const { classes = [] } = adminData?.admin || {};
//   const [viewClicked, setViewClicked] = useState(false);
// const printRef = useRef();


//   const [selectedClassId, setSelectedClassId] = useState('');
//   const [selectedMonth, setSelectedMonth] = useState(''); // format YYYY-MM
//   const [selectedSectionId, setSelectedSectionId] = useState('');

//   const current = new Date();
//   const [daysInMonth, setDaysInMonth] = useState([]);

//   useEffect(() => {
//     fetchAdminData();
//   }, [fetchAdminData]);

//   useEffect(() => {
//     if (selectedMonth) {
//       const [year, month] = selectedMonth.split('-').map(Number);
//       const days = Array.from({ length: new Date(year, month, 0).getDate() }, (_, i) => i + 1);
//       setDaysInMonth(days);
//     }
//   }, [selectedMonth]);

//   const selectedClass = classes.find(c => c._id === selectedClassId);
//   const students = selectedClass?.students || [];
//   const attendanceRecords = selectedClass?.attendance || [];

 


// //const handleViewAttendance = ()=>{
//   const attendanceByStudent = {};
// attendanceRecords.forEach(rec => {
//   const date = new Date(rec.date);
//   const day = date.getDate();
//   if (!attendanceByStudent[rec.studentId]) attendanceByStudent[rec.studentId] = {};
//   attendanceByStudent[rec.studentId][day] = rec.status; // status can be 'Present', 'Absent', etc.
// });



//  const handlePrint = () => {
//     if (!printRef.current) return;
//     let html = printRef.current.innerHTML;

//     // Remove Tailwind color classes
//     html = html
//       .replace(/class="[^"]*?(text|bg|border)-\S+?"/g, '')
//       .replace(/class="[^"]*?font-\S+?"/g, '');

//     const css = `
//       body { font-family: Arial, sans-serif; margin: 20px; color: #000; }
//       .school-header { text-align: center; border-bottom: 2px solid #000; margin-bottom: 20px; padding-bottom: 10px; }
//       .info-bar { display: flex; justify-content: space-between; font-weight: bold; margin-bottom: 20px; }
//       table { width: 100%; border-collapse: collapse; font-size: 11px; }
//       th, td { border: 1px solid #000; padding: 6px; text-align: center; }
//       th { background-color: #f0f0f0; font-weight: bold; }
//       .present, .absent, .leave, .holiday { font-weight: bold; color: #000; }
//       @media print {
//         body { margin: 0; }
//       }
//     `;

//     const printWin = window.open('', '', 'width=1000,height=800');
//     if (!printWin) return;

//     printWin.document.write(`
//       <html>
//         <head>
//           <title>Attendance - ${selectedClass?.name || ''}</title>
//           <style>${css}</style>
//         </head>
//         <body>${html}</body>
//       </html>
//     `);

//     printWin.document.close();
//     printWin.onload = () => {
//       printWin.focus();
//       printWin.print();
//       printWin.close();
//     };
//   }
//   return (
// <AdminLayout adminName="Bright Future">
//   <div className="w-full  px-4 py-4 space-y-6">
//      <AdminTeachDashboardHeader />
    

//     {/* Filter Form */}
//     <form className="space-y-4 ">
//       <div className="child border pb-5 border-grey-300 py-2 px-4">
//       <div>
//         <h3 className="text-base font-bold text-gray-800"><input type="radio" name="Month" id="month" defaultChecked/> Attendance By Month</h3>
//         <p className="text-sm text-gray-600 italic">
//           Select class, section, and month to view attendance.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {/* Class Dropdown */}
//         <div>
//           <label htmlFor="classSelect" className="block text-md font-medium text-gray-700">
//             <span className="text-red-500">*</span> Class:
//           </label>
//           <select
//             id="classSelect"
//              className="mt-1 w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//             //className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//             value={selectedClassId}
//             onChange={(e) => {
//               setSelectedClassId(e.target.value);
//               setSelectedSectionId('');
//             }}
//           >
//             <option value="">Select Class</option>
//             {classes.map((cls) => (
//               <option key={cls._id} value={cls._id}>
//                 {cls.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Section Dropdown */}
//         <div>
//           <label htmlFor="sectionSelect" className="block text-md font-medium text-gray-700">
//             <span className="text-red-500">*</span> Section:
//           </label>
//           <select
//             id="sectionSelect"
//       className="mt-1 w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//             //       className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//             value={selectedSectionId}
//             onChange={(e) => setSelectedSectionId(e.target.value)}
//             disabled={!selectedClassId}
//           >
//             <option value="">Select Section</option>
//             {selectedClass?.section && (
//               <option value={selectedClass.section}>{selectedClass.section}</option>
//             )}
//           </select>
//         </div>

//         {/* Month Picker */}
//         <div>
//           <label htmlFor="monthInput" className="block text-md  font-medium text-gray-700">
//             <span className="text-red-500">*</span> Month:
//           </label>
//           <input
//             type="month"
//             id="monthInput"
//          className="mt-1 w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//             //    className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//             value={selectedMonth}
//             onChange={(e) => setSelectedMonth(e.target.value)}
//           />
//         </div>
//       </div>

// </div>

//       <div className="text-center">
//         <button
//           type="button"
//           className="bg-[rgb(1,1,93)] text-white text-sm px-6 py-2 rounded hover:bg-indigo-900"
//          onClick={() => setViewClicked(true)}
//         >
//           View Attendance
//         </button>
//       </div>
   
//     </form>


//   <>
//   {viewClicked && selectedClass && selectedMonth && (
//     students.length > 0 ? (
//       <>
//         {/* Print Button */}
//         <div className="flex flex-col items-center space-y-2">
//           <p className="text-md font-medium">
//             Month:{' '}
//             <span className="font-bold text-gray-800">
//               {new Date(selectedMonth + '-01').toLocaleString('default', {
//                 month: 'long',
//                 year: 'numeric',
//               })}
//             </span>
//           </p>
//           <button
//             type="button"
//             onClick={handlePrint}
//             className="bg-[#C19703] text-white px-4 py-1 rounded text-sm"
//           >
//             Print Attendance Sheet
//           </button>
//         </div>

//         {/* Printable Content */}
//         <div ref={printRef}>
//           <div className="mt-8 border border-grey-300 px-8 space-y-4">
//             {/* School Info */}
//             <div className="w-full max-w-4xl mx-auto text-center border-b border-gray-300 pb-2">
//               <h1 className="text-2xl font-bold">BRIGHT FUTURE HIGH SCHOOL</h1>
//               <p className="text-sm mt-1">
//                 <span className="font-semibold">Phone:</span> 92323232312 |{' '}
//                 <span className="font-semibold">Email:</span> govin@gmail.com
//               </p>
//               <p className="text-sm">
//                 <span className="font-semibold">Address:</span> Sariab Road Quetta
//               </p>
//             </div>

//             {/* Class + Month Info */}
//             <div className="flex justify-between max-w-4xl mx-auto text-sm font-semibold">
//               <span>
//                 Attendance - Class:{' '}
//                 <span className="text-gray-600">{selectedClass.name}</span> | Section:{' '}
//                 <span className="text-gray-600">{selectedClass.section}</span>
//               </span>
//               <span>
//                 Month:{' '}
//                 <span className="text-gray-800">
//                   {new Date(selectedMonth + '-01').toLocaleString('default', {
//                     month: 'long',
//                     year: 'numeric',
//                   })}
//                 </span>
//               </span>
//             </div>

//             {/* Table */}
//             <div className="overflow-x-auto">
//               <table className="table-auto p-10 w-full text-md border-collapse border border-gray-300">
//                 <thead className="bg-[rgb(1,1,93)] text-white text-center">
//                   <tr>
//                     <th className="border px-2 py-1 text-left">
//                       Date →<br />
//                       Students ↓
//                     </th>
//                     {daysInMonth.map((day) => (
//                       <th key={day} className="border px-2 py-1">
//                         {String(day).padStart(2, '0')}
//                       </th>
//                     ))}
//                     <th className="border bg-green-600 px-2 py-1">Total Present</th>
//                     <th className="border bg-red-600 px-2 py-1">Total Absent</th>
//                     <th className="border bg-yellow-600 px-2 py-1">Total Holiday</th>
//                     <th className="border bg-blue-500 px-2 py-1">Total Leave</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {students.map((stu, idx) => {
//                     const records = attendanceByStudent[stu._id] || {};
//                     let present = 0, absent = 0, holiday = 0, leave = 0;

//                     const getStatusClass = (status) => {
//                       switch (status) {
//                         case 'Present':
//                           present++;
//                           return 'text-green-600 font-semibold';
//                         case 'Absent':
//                           absent++;
//                           return 'text-red-600 font-semibold';
//                         case 'Holiday':
//                           holiday++;
//                           return 'text-yellow-600 font-semibold';
//                         case 'Leave':
//                           leave++;
//                           return 'text-blue-500 font-semibold';
//                         default:
//                           return '';
//                       }
//                     };

//                     return (
//                       <tr key={stu._id} className={idx % 2 ? 'bg-gray-50' : 'bg-white'}>
//                         <td className="border px-2 py-1 text-left font-medium">
//                           {stu.name}
//                           <br />
//                           <span className="text-gray-600 font-semibold">
//                             Roll No. {stu.rollNumber || idx + 1}
//                           </span>
//                         </td>
//                         {daysInMonth.map((day) => {
//                           const status = records[day] || '';
//                           return (
//                             <td key={day} className="border px-2 py-1 text-center">
//                               {status ? (
//                                 <span className={getStatusClass(status)}>{status[0]}</span>
//                               ) : (
//                                 '-'
//                               )}
//                             </td>
//                           );
//                         })}
//                         <td className="border px-2 py-1 text-center font-bold text-green-600">
//                           {present}
//                         </td>
//                         <td className="border px-2 py-1 text-center font-bold text-red-600">
//                           {absent}
//                         </td>
//                         <td className="border px-2 py-1 text-center font-bold text-yellow-600">
//                           {holiday}
//                         </td>
//                         <td className="border px-2 py-1 text-center font-bold text-blue-500">
//                           {leave}
//                         </td>
//                       </tr>
//                     );
//                   })}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </>
//     ) : (
//       <div className="mt-8 text-center text-red-600 font-semibold">
//         No students are registered for this class.
//       </div>
//     )
//   )}
// </>
//  </AdminLayout>
//   );
// };




























const AdminViewAttendance = () => {
  const { adminData, fetchAdminData } = useContext(adminDataContext);
  const { classes = [] } = adminData?.admin || {};
  const [viewClicked, setViewClicked] = useState(false);
  const printRef = useRef();

  const [selectedClassId, setSelectedClassId] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedSectionId, setSelectedSectionId] = useState('');
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

  const attendanceByStudent = {};
  attendanceRecords.forEach(rec => {
    const day = new Date(rec.date).getDate();
    if (!attendanceByStudent[rec.studentId]) attendanceByStudent[rec.studentId] = {};
    attendanceByStudent[rec.studentId][day] = rec.status;
  });

  const handlePrint = () => {
    if (!printRef.current) return;
    let html = printRef.current.innerHTML;

    // Strip Tailwind classes for printing
    html = html
      .replace(/class="[^"]*?(text|bg|border|font|shadow|ring|space|grid|flex|items|justify|px|py|mt|mb|w|h|rounded|gap)-[^"]*"/g, '')
      .replace(/class="\s*"/g, '');

    const css = `
      body { font-family: Arial, sans-serif; margin: 20px; color: #000; }
      .school-header {border-bottom: 2px solid #000;display:flex;flex-direction:column;align-items:center;justify-content:center;margin-bottom: 20px; padding-bottom: 10px; }
      .info-bar { display: flex; justify-content: center;align-items:center; font-weight: bold; margin-bottom: 20px; }
      table {margin-top:8px; width: 100%; border-collapse: collapse; font-size: 11px; }
      th, td { border: 1px solid #000; padding: 6px; text-align: center; }
      th { background-color: #f0f0f0; font-weight: bold; }
      .present, .absent, .leave, .holiday { font-weight: bold; color: #000; }
      @media print {
        body { margin: 0;padding:20px; }
      }
    `;

    const printWin = window.open('', '', 'width=1000,height= 800');
    if (!printWin) return;

    printWin.document.write(`
      <html>
        <head>
          <title>Attendance - ${selectedClass?.name || ''} - ${selectedClass?.section || ''}</title>
          <style>${css}</style>
        </head>
        <body>${html}</body>
      </html>
    `);

    printWin.document.close();
    printWin.onload = () => {
      printWin.focus();
      printWin.print();
      printWin.close();
    };
  };

  return (
    <AdminLayout adminName="Bright Future">
      <div className="w-full px-4 py-4 space-y-6">
        <AdminTeachDashboardHeader />


{/* Header */}
    <div className="flex w-full text-white p-3 rounded-md bg-[rgb(1,1,93)] flex-col md:flex-row justify-between items-center border-b pb-3">
      <h2 className="text-lg font-semibold  flex items-center gap-2">
        <i className="fas fa-calendar-alt"></i> View Attendance
      </h2>
      <div className="mt-2 md:mt-0 flex gap-2">
        <Link to="/Take/Attendance" className="text-sm px-4 py-1 border border-gray-300 rounded bg-[#C19703]">
          <i className="fas fa-clock"></i>&nbsp;Take Attendance
        </Link>
      </div>
    </div>
        {/* Your form and JSX content is kept as-is here (omitted for brevity) */}
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

        {/* Printable Section */}
        {viewClicked && selectedClass && selectedMonth && (
          students.length > 0 ? (
            <>
              <div className="text-center">
                <button onClick={handlePrint} className="bg-yellow-600 text-white px-4 py-2 rounded">
                  Print Attendance Sheet
                </button>
              </div>

              <div ref={printRef}>
                {/* Your printable HTML content here (already in your JSX) */}
                <div className="mt-8 border border-grey-300 px-8 space-y-4">
             {/* School Info */}
             <div className="w-full school-header max-w-4xl mx-auto text-center border-b border-gray-300 pb-2">
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
                 Attendance - Class:{' '}
                 <span className="text-gray-600">{selectedClass.name}</span> | Section:{' '}
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
                <thead className="bg-[rgb(1,1,93)] text-white text-center">
                  <tr>
                    <th className="border px-2 py-1 text-left">
                      Date →<br />
                      Students ↓
                    </th>
                    {daysInMonth.map((day) => (
                      <th key={day} className="border px-2 py-1">
                        {String(day).padStart(2, '0')}
                      </th>
                    ))}
                    <th className="border bg-green-600 px-2 py-1">Total Present</th>
                    <th className="border bg-red-600 px-2 py-1">Total Absent</th>
                    <th className="border bg-yellow-600 px-2 py-1">Total Holiday</th>
                    <th className="border bg-blue-500 px-2 py-1">Total Leave</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((stu, idx) => {
                    const records = attendanceByStudent[stu._id] || {};
                    let present = 0, absent = 0, holiday = 0, leave = 0;

                    const getStatusClass = (status) => {
                      switch (status) {
                        case 'Present':
                          present++;
                          return 'text-green-600 font-semibold';
                        case 'Absent':
                          absent++;
                          return 'text-red-600 font-semibold';
                        case 'Holiday':
                          holiday++;
                          return 'text-yellow-600 font-semibold';
                        case 'Leave':
                          leave++;
                          return 'text-blue-500 font-semibold';
                        default:
                          return '';
                      }
                    };

                    return (
                      <tr key={stu._id} className={idx % 2 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="border px-2 py-1 text-left font-medium">
                          {stu.name}
                          <br />
                          <span className="text-gray-600 font-semibold">
                            Roll No. {stu.rollNumber || idx + 1}
                          </span>
                        </td>
                        {daysInMonth.map((day) => {
                          const status = records[day] || '';
                          return (
                            <td key={day} className="border px-2 py-1 text-center">
                              {status ? (
                                <span className={getStatusClass(status)}>{status[0]}</span>
                              ) : (
                                '-'
                              )}
                            </td>
                          );
                        })}
                        <td className="border px-2 py-1 text-center font-bold text-green-600">
                          {present}
                        </td>
                        <td className="border px-2 py-1 text-center font-bold text-red-600">
                          {absent}
                        </td>
                        <td className="border px-2 py-1 text-center font-bold text-yellow-600">
                          {holiday}
                        </td>
                        <td className="border px-2 py-1 text-center font-bold text-blue-500">
                          {leave}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
            </>
          ) : (
            <div className="text-center text-red-600">No students are registered for this class.</div>
          )
        )}
      </div>
    </AdminLayout>
  );
};
export default AdminViewAttendance;













