// import React from 'react'
// import StudentSidebar from './StudentSidebar'
// import { useContext } from 'react'
// import { userDataContext } from '../Context-Api/UserContext'
// import { useEffect } from 'react'
// import { useState } from 'react'

// const StudentMDAttendance = () => {
//     const {userData} = useContext(userDataContext);
//     useEffect(()=>{

//     },[userData])
//   return (
//     <div className='w-full flex min-h-screen md:flex-col  bg-white'>
//       <StudentSidebar/>
//     </div>
//   )
// }

// export default StudentMDAttendance

























import React, { useContext, useState, useEffect, useRef } from 'react';
import StudentSidebar from './StudentSidebar';
import { userDataContext } from '../Context-Api/UserContext';
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader';

const StudentMDAttendance = () => {
  const { userData } = useContext(userDataContext);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [daysInMonth, setDaysInMonth] = useState([]);
  const [attendanceByDay, setAttendanceByDay] = useState({});
  const [showAttendance,setshowAttendance] = useState(false);
  const printRef = useRef();

  // 1️⃣ Recompute days when month changes
  useEffect(() => {
    if (selectedMonth) {
      const [year, month] = selectedMonth.split('-').map(Number);
      setDaysInMonth(Array.from({ length: new Date(year, month, 0).getDate() }, (_, i) => i + 1));
    }
  }, [selectedMonth]);

  // 2️⃣ Load attendance from `userData.attendance` for chosen month
  useEffect(() => {
    if (userData?.attendance && selectedMonth) {
      const [year, month] = selectedMonth.split('-').map(Number);
      const monthRecords = userData.attendance.filter(rec => {
        const d = new Date(rec.date);
        return d.getFullYear() === year && d.getMonth() + 1 === month;
      });
      const map = {};
      monthRecords.forEach(r => {
        const day = new Date(r.date).getDate();
        map[day] = r.status;
      });
      setAttendanceByDay(map);
    }
  }, [userData, selectedMonth]);


  console.log("attendance",userData);
  // 3️⃣ Print handler (same as Admin)
  const handlePrint = () => {
    if (!printRef.current) return;
    let html = printRef.current.innerHTML;
    html = html
      .replace(/class="[^"]*?(text|bg|border|font|shadow|ring|space|grid|flex|items|justify|px|py|mt|mb|w|h|rounded|gap)-[^"]*"/g, '')
      .replace(/class="\s*"/g, '');
    const css = `
      body { font-family: Arial, sans-serif; margin: 20px; color: #000; }
      .school-header {border-bottom: 2px solid #000;display:flex;flex-direction:column;align-items:center;justify-content:center;margin-bottom: 20px; padding-bottom: 10px; }
      table {width: 100%; border-collapse: collapse; font-size: 12px;}
      th,td { border:1px solid #000; padding:6px; text-align:center;}
      th { background: #ddd; font-weight: bold;}
    `;
    const win = window.open('', '', 'width=800,height=700');
    win.document.write(`<html><head><style>${css}</style></head><body>${html}</body></html>`);
    win.document.close();
    win.onload = () => { win.focus(); win.print(); win.close(); };
  };

  // 4️⃣ Render UI
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
  <StudentSidebar />

      <main className="flex-grow flex flex-col gap-3 p-6 overflow-x-auto max-w-5xl mx-auto">
        <AdminTeachDashboardHeader/>
        <div className="flex w-full text-white p-3 rounded-md bg-[rgb(1,1,93)] flex-col md:flex-row justify-center items-center border-b pb-3">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <i className="fas fa-calendar-alt"></i> View Attendance
          </h2>
        </div>
<div className="box border border-grey-300 mt-3 p-4">
        <h1 className="text-xl font-semibold mb-4">My Attendance by Month</h1>

        {/* <div className="mb-6 max-w-sm">
          <label htmlFor="monthInput" className="block mb-1 text-gray-700 font-medium">
            Select Month:
          </label>
          <input
            type="month"
            id="monthInput"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-indigo-500"
            value={selectedMonth}
            onChange={e => setSelectedMonth(e.target.value)}
          />
        </div> */}

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">
  <div>
    <label htmlFor="monthInput" className="block mb-1 text-gray-700 font-medium">
      Select Month:
    </label>
    <input
      type="month"
      id="monthInput"
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      value={selectedMonth}
      onChange={e => setSelectedMonth(e.target.value)}
    />
  </div>
</div>


<button onClick={()=>setshowAttendance(true)} className="bg-yellow-600 text-white mt-2 px-4 py-2 rounded">
                View My Attendance
              </button>
</div>
        {selectedMonth && showAttendance && (
          <>
            <div>
              <div className="school-header mb-6 text-center">
                <h2 className="text-2xl font-bold">BRIGHT FUTURE HIGH SCHOOL</h2>
                <p className="text-sm">Phone: … | Email: … | Address: …</p>
              </div>

              <div className="mb-4 text-sm font-medium flex justify-between">
                <span>Student: <span className="font-normal">{userData.name} - {userData?.Classs?.name || "N/A"} - {userData?.Classs?.section || "N/A"}</span></span>
                <span>Month: <span className="font-normal">{new Date(selectedMonth+'-01').toLocaleString('default',{month:'long',year:'numeric'})}</span></span>
              </div>

              {/* <div className="overflow-x-auto">
                <table className="table-auto p-10 w-full text-md border-collapse border border-gray-300">
                  <thead className='bg-[rgb(1,1,93)]'>
                    <tr className=" text-white">
                      <th className="border px-2 py-1">Day</th>
                      <th className="border px-2 py-1">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {daysInMonth.map(day => {
                      const st = attendanceByDay[day] || '—';
                      let cls = '';
                      if (st === 'Present') cls = 'text-green-600';
                      else if (st === 'Absent') cls = 'text-red-600';
                      else if (st === 'Holiday') cls = 'text-yellow-600';
                      else if (st === 'Leave') cls = 'text-blue-500';

                      return (
                        <tr key={day}>
                          <td className="border px-2 py-1">{day}</td>
                          <td className={`border px-2 py-1 text-center font-semibold ${cls}`}>{st[0] || st}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div> */}

              {/* <div className="overflow-x-auto">
  <table className="table-auto w-full text-sm border-collapse border border-gray-300">
    <thead className="bg-[rgb(1,1,93)] text-white text-center">
      <tr>
        <th className="border px-2 py-1">Day</th>
        <th className="border px-2 py-1">Status</th>
      </tr>
    </thead>
    <tbody>
      {daysInMonth.map((day, idx) => {
        const st = attendanceByDay[day] || '—';
        let cls = '';
        if (st === 'Present') cls = 'text-green-600 font-semibold';
        else if (st === 'Absent') cls = 'text-red-600 font-semibold';
        else if (st === 'Holiday') cls = 'text-yellow-600 font-semibold';
        else if (st === 'Leave') cls = 'text-blue-500 font-semibold';

        return (
          <tr key={day} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
            <td className="border px-2 py-1 text-center font-medium">{String(day).padStart(2, '0')}</td>
            <td className={`border px-2 py-1 text-center ${cls}`}>{st[0] || st}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
</div> */}

<div className="overflow-x-auto">
  <table className="table-auto w-full text-sm border-collapse border border-gray-300">
    <thead className="bg-[rgb(1,1,93)] text-white text-center">
      <tr>
        <th className="border px-2 py-1 text-left">
          Date →<br /> Student ↓
        </th>
        {daysInMonth.map(day => (
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
      <tr className="bg-white">
        <td className="border px-2 py-1 text-left font-medium">
          {userData?.name}
          <br />
          <span className="text-gray-600 font-semibold">Roll No. {userData?.Roll || 'N/A'}</span>
        </td>
        {daysInMonth.map(day => {
          const status = attendanceByDay[day] || '';
          let cls = '';
          if (status === 'Present') cls = 'text-green-600 font-semibold';
          else if (status === 'Absent') cls = 'text-red-600 font-semibold';
          else if (status === 'Holiday') cls = 'text-yellow-600 font-semibold';
          else if (status === 'Leave') cls = 'text-blue-500 font-semibold';

          return (
            <td key={day} className="border px-2 py-1 text-center">
              {status ? <span className={cls}>{status[0]}</span> : '-'}
            </td>
          );
        })}

        {/* Totals */}
        <td className="border px-2 py-1 text-center font-bold text-green-600">
          {Object.values(attendanceByDay).filter(s => s === 'Present').length}
        </td>
        <td className="border px-2 py-1 text-center font-bold text-red-600">
          {Object.values(attendanceByDay).filter(s => s === 'Absent').length}
        </td>
        <td className="border px-2 py-1 text-center font-bold text-yellow-600">
          {Object.values(attendanceByDay).filter(s => s === 'Holiday').length}
        </td>
        <td className="border px-2 py-1 text-center font-bold text-blue-500">
          {Object.values(attendanceByDay).filter(s => s === 'Leave').length}
        </td>
      </tr>
    </tbody>
  </table>
</div>


            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default StudentMDAttendance;
