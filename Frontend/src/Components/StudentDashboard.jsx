// import React, { useContext, useState } from 'react';
// import { userDataContext } from '../Context-Api/UserContext';
// import { Link, Links } from 'react-router-dom';
// import { adminDataContext } from '../Context-Api/AdminContext';
// import { useEffect } from 'react';
// import axios from 'axios';
// import io from 'socket.io-client';
// import { authDataContext } from '../Context-Api/AuthContext';
// import StudentSidebar from './StudentSidebar';
// //import Sidebar from './Sidebar';
// import { useRef } from 'react'
// //import StudentProfile from './StudentProfile'

// //import {useRef } from 'react';
// //import Chart from 'chart.js/auto';




// const StudentDashboard = () => {
//   const {serverUrl} = useContext(authDataContext);
//   const [showModal,setShowModal]= useState(false);
//   const {userData} = useContext(userDataContext);
//   const socketRef = useRef(null);
//   const [loading,setLoading] = useState(true);
//   const chartRef = useRef(null);
//   // Create socket connection (put this outside the component)
// //const socket = io(serverUrl);
//   //console.log("userData",userData)
// const {Classs} = userData;
// const {teacher} = Classs;
// //console.log("teacher",teacher);
// const announcement = userData?.Classs?.teacher?.announcements || [];
// //const {teachSubject} = teacher;
// console.log("userData",userData);
// const [leaveData,setLeaveData] = useState({
//   leave:"",
//   date:"",
// })
// //console.log("announcement",announcement)

// const handleAnnouncementChange = (e) => {
//     const { name, value } = e.target;
//     setLeaveData({ ...leaveData, [name]: value });
//   };
// //const map = announcement.map(announce=>{
// //  announce.message
// //});
// //console.log("map",map);
// const [notifications, setNotifications] = useState([

// ]);
// //console.log(Classs);

// //console.log("Class",Classs);
// //console.log("teacher",teacher[0].announcements);
//   //setNotifications(teacher[0].announcements.length)
// //console.log("teachSubject",teachSubject);
//   const [showNotif, setShowNotif] = useState(false);
//   const assignments = [
//     { title: 'Biology Lab Report', due: 'Apr 25' },
//     { title: 'Chemistry Worksheet', due: 'Apr 28' },
//   ];

//   const grades = [
//     { subject: 'Math', grade: 'A' ,teacher:"Khalid Mehmood"},
//     { subject: 'Science', grade: 'B+' ,teacher:"Prof Hasnan"},
//     { subject: 'English', grade: 'A-' ,teacher:"Ghafoor Sab"},
//   ];
// /*useEffect(()=>{
//   if(teacher[0].announcements.length > 0){
//     setNotifications(teacher[0].announcements);
//   // const messages = teacher[0].announcements.map(item=>{
//   //      setNotifications({title:item.title,message:item.message})
//   // })
//  // console.log("messages",messages);
//   }
// },[userData])*/

// // useEffect(() => {
// //   if (userData && userData?._id) {
// //     setLoading(false);
// //     socket.emit("register", userData._id); // ✅ Register with server
// //   }
// // }, [userData]);

// // useEffect(() => {
// //   // Register student to their room
// //   if (userData && userData._id) {
// //     socket.emit("register", userData._id);
// //   }

// //   // 🟢 Listen for new announcements
// //   socket.on('new-announcement', (data) => {
// //     const teacherName = data.teacherName || data.name || 'Unknown Teacher';
// //     setNotifications(prev => [
// //       {
// //         ...data,
// //         teacherName,
// //       },
// //       ...prev,
// //     ]);
// //   });

// //   // 🟢 Listen for leave status updates
// //   socket.on('leave-status-updated', (data) => {
// //     setNotifications(prev => [
// //       {
// //         title: data.title || 'Leave Status Updated',
// //         message: data.message || 'Your leave request has been updated.',
// //         teacherName: 'Admin', // or use leave.approvedBy if available
// //       },
// //       ...prev,
// //     ]);

// //     // Optional toast
// //     alert(data.message); // replace with toast or custom popup if preferred
// //   });

// //   return () => {
// //     socket.off('new-announcement');
// //     socket.off('leave-status-updated');
// //   };
// // }, [userData]);

// useEffect(() => {
//   if (userData && userData._id) {
//     setLoading(false);
//   }
// }, [userData]);
// console.log("userData",userData)
// const handleNewAnnouncement = (data) => {
//   const teacherName = data.teacherName || data.name || 'Unknown Teacher';
//   setNotifications(prev => [{ ...data, teacherName }, ...prev]);
// };

// const handleLeaveStatusUpdated = (data) => {
//   setNotifications(prev => [
//     {
//       title: data.title || 'Leave Status Updated',
//       message: data.message || 'Your leave request has been updated.',
//       teacherName: 'Admin',
//     },
//     ...prev,
//   ]);
//   alert(data.message);
// };

// const handleAttendanceAlert = (data) => {
//   alert(data.message); // or use toast
// };




// // useEffect(() => {
// //   if (!userData?._id) return;

// //   if (!socketRef.current) {
// //     socketRef.current = io(serverUrl);
// //   }

// //   const socket = socketRef.current;

// //   socket.emit("register", userData._id);

// //   const handleNewAnnouncement = (data) => {
// //     console.log('Received new-announcement:', data);
// //     alert(`Announcement: ${data.title}\n${data.message}`);
// //     setNotifications(prev => [{ ...data, teacherName: data.teacherName || 'Unknown' }, ...prev]);
// //   };

// //   const handleLeaveStatusUpdated = (data) => {
// //     console.log('Received leave-status-updated:', data);
// //     alert(data.message);
// //     setNotifications(prev => [
// //       {
// //         title: data.title || 'Leave Status Updated',
// //         message: data.message || 'Your leave request has been updated.',
// //         teacherName: 'Admin',
// //       },
// //       ...prev,
// //     ]);
// //   };

// //   const handleAttendanceAlert = (data) => {
// //     console.log('Received attendance alert:', data);
// //     alert(data.message);
// //   };

// //   socket.on("new-announcement", handleNewAnnouncement);
// //   socket.on("leave-status-updated", handleLeaveStatusUpdated);
// //   socket.on(`attendance-${userData._id}`, handleAttendanceAlert);

// //   socket.onAny((event, ...args) => {
// //     console.log('Socket event:', event, args);
// //   });

// //   return () => {
// //     socket.off("new-announcement", handleNewAnnouncement);
// //     socket.off("leave-status-updated", handleLeaveStatusUpdated);
// //     socket.off(`attendance-${userData._id}`, handleAttendanceAlert);
// //   };
// // }, [userData._id]);



// // useEffect(() => {
// //   if (!userData?._id) return;

// //   if (!socketRef.current) {
// //     socketRef.current = io(serverUrl);
// //      console.log('Socket initialized');
// //   }

// //   const socket = socketRef.current;

// //   socket.emit("register", userData._id);

// //   const handleNewAnnouncement = (data) => {
// //     console.log('Received new-announcement:', data);
// //     alert(`Announcement: ${data.title}\n${data.message}`);
// //     setNotifications(prev => [{ ...data, teacherName: data.teacherName || 'Unknown' }, ...prev]);
// //   };

// //   const handleLeaveStatusUpdated = (data) => {
// //     console.log('Received leave-status-updated:', data);
// //     alert(data.message);
// //     setNotifications(prev => [
// //       {
// //         title: data.title || 'Leave Status Updated',
// //         message: data.message || 'Your leave request has been updated.',
// //         teacherName: 'Admin',
// //       },
// //       ...prev,
// //     ]);
// //   };

// //   const handleAttendanceAlert = (data) => {
// //     console.log('Received attendance alert:', data);
// //     alert(data.message);
// //   };

// //   socket.on("new-announcement", handleNewAnnouncement);
// //   socket.on("leave-status-updated", handleLeaveStatusUpdated);
// //   socket.on(`attendance-${userData._id}`, handleAttendanceAlert);

// //   socket.onAny((event, ...args) => {
// //     console.log('Socket event:', event, args);
// //   });

// //   return () => {
// //     socket.off("new-announcement", handleNewAnnouncement);
// //     socket.off("leave-status-updated", handleLeaveStatusUpdated);
// //     socket.off(`attendance-${userData._id}`, handleAttendanceAlert);
// //   };
// // }, [userData._id]);




// // useEffect(() => {
// //   if (!userData?._id) return;

// //   if (!socketRef.current) {
// //     socketRef.current = io(serverUrl);
// //     console.log('Socket initialized');
// //   }

// //   const socket = socketRef.current;

// //   socket.on('connect', () => {
// //     console.log('Socket connected with id:', socket.id);
// //     socket.emit("register", userData._id);
// //     console.log('Emitted register with:', userData._id);
// //   });

// //   socket.on("new-announcement", (data) => {
// //     console.log('Received new-announcement:', data);
// //     alert(`Announcement: ${data.title}\n${data.message}`);
// //     setNotifications(prev => [{ ...data, teacherName: data.teacherName || 'Unknown' }, ...prev]);
// //   });

// //   socket.on("leave-status-updated", (data) => {
// //     console.log('Received leave-status-updated:', data);
// //     alert(data.message);
// //     setNotifications(prev => [
// //       {
// //         title: data.title || 'Leave Status Updated',
// //         message: data.message || 'Your leave request has been updated.',
// //         teacherName: 'Admin',
// //       },
// //       ...prev,
// //     ]);
// //   });

// //   socket.on(`attendance-${userData._id}`, (data) => {
// //     console.log('Received attendance alert:', data);
// //     alert(data.message);
// //   });

// //   socket.onAny((event, ...args) => {
// //     console.log('Socket event:', event, args);
// //   });

// //   return () => {
// //     socket.off("new-announcement");
// //     socket.off("leave-status-updated");
// //     socket.off(`attendance-${userData._id}`);
// //   };
// // }, [userData._id]);




















// useEffect(() => {
//   if (!userData?._id) return;

//   if (!socketRef.current) {
//     socketRef.current = io(serverUrl, {
//       transports: ["websocket"],
//       reconnection: true,
//     });
//     console.log('🔌 Socket initialized');
//   }

//   const socket = socketRef.current;

//   const registerSocket = () => {
//     console.log('📡 Emitting register with:', userData._id);
//     socket.emit("register", userData._id);
//   };

//   socket.on('connect', () => {
//     console.log('✅ Socket connected with id:', socket.id);
//     registerSocket();
//   });

//   registerSocket(); // 👈 Emit once on first setup too


//   socket.on("new-announcement", (data) => {
//     console.log('Received new-announcement:', data);
//     alert(`Announcement: ${data.title}\n${data.message}`);
//     setNotifications(prev => [{ ...data, teacherName: data.teacherName || 'Unknown' }, ...prev]);
//   });

//   socket.on("leave-status-updated", (data) => {
//     console.log('📥 Received leave-status-updated:', data);
//     alert(data.message);
//     setNotifications(prev => [
//       {
//         title: data.title || 'Leave Status Updated',
//         message: data.message || 'Your leave request has been updated.',
//         teacherName: data.teacherName || 'Admin',
//       },
//       ...prev,
//     ]);
//   });
//    socket.on(`attendance-${userData._id}`, (data) => {
//     console.log('Received attendance alert:', data);
//     alert(data.message);
//   });

//   // Other listeners...

//   return () => {
//     socket.off("leave-status-updated");
//     // clean up others as well...
//      socket.off("new-announcement");
//    // socket.off("leave-status-updated");
//     socket.off(`attendance-${userData._id}`);
//   };
// }, [userData?._id]);






// useEffect(() => {
//   const saved = localStorage.getItem("notifications");
//   if (saved) {
//     setNotifications(JSON.parse(saved));
//   }
// }, []);

// useEffect(() => {
//   localStorage.setItem("notifications", JSON.stringify(notifications));
// }, [notifications]);


// const [attendanceData, setAttendanceData] = useState({
//   studentId: "",
//   studentName: "",
//   classId: "",
//   monthlyAttendance: [],
// });


// useEffect(() => {
//   const gettingPercentageAttendance = async () => {
//     try {
//       const api = await axios.get(`${serverUrl}/api/student/percentage`, {
//         withCredentials: true,
//       });

//       if (api.status === 200) {
//         setAttendanceData({
//           studentId: api.data.studentId,
//           studentName: api.data.studentName,
//           classId: api.data.classId,
//           monthlyAttendance: api.data.monthlyAttendance,
//         });
//       }
//     } catch (error) {
//       setAttendanceData(null);
//     //alert("Not Getting Percentage. Why: " + error?.response?.data?.message);
//     }
//   };
//   gettingPercentageAttendance();
// }, []);

// // useEffect(() => {

// // // console.log("attendancePercent",AttendancePercentage)
// //   // Listen for new real-time announcements
// //   socket.on('new-announcement', (data) => {
// //     // Add teacher name if missing
// //     const teacherName = data.teacherName || data.name || 'Unknown Teacher';

// //     // Append to notifications
// //     setNotifications(prev => [
// //       {
// //         ...data,
// //         teacherName: teacherName,
// //       },
// //       ...prev
// //     ]);
// //   });
// //   socket.on(`attendance-${userData._id}`, (data) => {
// //   alert(data.message); // or show in-app toast
// // });



// //   // Clean up on component unmount
// //   return () => {
// //     socket.off('new-announcement');
// //   };
// // }, []);

// const latestMonthData = [...attendanceData.monthlyAttendance]
//   .sort((a, b) => new Date(b.month) - new Date(a.month))[0]; // Most recent month


// const handleSubmitLeave = async ()=>{
//   try{
//        const api = await axios.post(serverUrl+"/api/student/Add/Leave",{
//         leave:leaveData.leave,
//         date:leaveData.date,
//        },{withCredentials:true})
//        if(api.status === 200){
//         alert("Leave Request Successfully Submitted!");
//         setShowModal(false);
//        }
//   } catch(err){
//          alert(err?.response?.data.message);
//   }
// }

// useEffect(() => {
//   if (!latestMonthData || !chartRef.current) return;

//   const chartInstance = new Chart(chartRef.current, {
//     type: 'pie',
//     data: {
//       labels: ['Present', 'Absent', 'Late', 'Holiday'],
//       datasets: [{
//         data: [
//           latestMonthData.present || 0,
//           latestMonthData.absent || 0,
//           latestMonthData.late || 0,
//           latestMonthData.holiday || 0
//         ],
//         backgroundColor: ['#4caf50', '#ef5350', '#03a9f4', '#ff9800'],
//         borderColor: '#ffffff',
//         borderWidth: 1
//       }]
//     },
//     options: {
//       responsive: true,
//       maintainAspectRatio: false,
//       plugins: {
//         legend: {
//           position: 'bottom',
//           labels: {
//             padding: 20,
//             usePointStyle: true,
//             font: {
//               size: 12
//             }
//           }
//         }
//       }
//     }
//   });

//   return () => chartInstance.destroy();
// }, [latestMonthData]);

// if(loading) return <p>Loading Data...</p>
//   return (
//        <div className="flex flex-col md:flex-row min-h-screen bg-grey-100">
//          <StudentSidebar/>
// <div className="p-4 flex-1">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Profile Card */}
//           <div className="col-span-1 bg-white shadow rounded-lg p-6">
//             <div className="flex items-center space-x-4">
//               <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold">
//                 {photoInitial}
//               </div>
//               <div>
//                 <h3 className="text-lg font-medium">{student.name}</h3>
//                 <span className="text-sm text-gray-500">
//                   {cls.standard} – {cls.section}
//                 </span>
//               </div>
//             </div>
//             <ul className="mt-6 space-y-2 text-sm text-gray-700">
//               <li><span className="font-semibold">Enrollment Number:</span> {student.enrollmentNumber}</li>
//               <li><span className="font-semibold">Admission Number:</span> {student.admissionNumber}</li>
//               <li><span className="font-semibold">Session:</span> {student.session}</li>
//               <li><span className="font-semibold">Class:</span> {cls.standard}</li>
//               <li><span className="font-semibold">Section:</span> {cls.section}</li>
//               <li><span className="font-semibold">Roll Number:</span> {student.rollNumber}</li>
//               <li><span className="font-semibold">Father's Name:</span> {student.fatherName}</li>
//               <li><span className="font-semibold">Father's Phone:</span> {student.fatherPhone}</li>
//               <li>
//                 <span className="font-semibold">ID Card:</span>
//                 <button title="Print ID Card" className="ml-2 text-blue-600">
//                   <i className="fa fa-print"></i>
//                 </button>
//               </li>
//             </ul>
//           </div>

//           {/* Stats cards (Attendance + Fee) */}
//           <div className="lg:col-span-2 space-y-6">
//             <div className="bg-white shadow rounded-lg p-6 w-full">
//               <h4 className="text-lg font-medium mb-4">Attendance</h4>
//               <div className="flex items-center">
//                 <div className="text-3xl font-bold text-gray-800 mr-6">
//                   {latest ? `${((latest.present / (latest.present + latest.absent + latest.late + latest.holiday)) * 100).toFixed(1)}%` : '—'}
//                 </div>
//                 <div className="w-48 h-48">
//                   <canvas ref={chartRef} />
//                 </div>
//               </div>
//               <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-700">
//                 <div className="flex items-center"><i className="fas fa-check-circle text-green-500 mr-2"></i> Present: {latest?.present || 0}</div>
//                 <div className="flex items-center"><i className="fas fa-times-circle text-red-500 mr-2"></i> Absent: {latest?.absent || 0}</div>
//                 <div className="flex items-center"><i className="fas fa-clock text-blue-500 mr-2"></i> Late: {latest?.late || 0}</div>
//                 <div className="flex items-center"><i className="fas fa-umbrella-beach text-yellow-500 mr-2"></i> Holiday: {latest?.holiday || 0}</div>
//               </div>
//             </div>

//             <div className="bg-white shadow rounded-lg p-6 w-full">
//               <h4 className="text-lg font-medium mb-4">Session Fee Breakdown</h4>
//               <table className="w-full text-sm text-gray-700">
//                 <thead>
//                   <tr className="border-b"><th className="py-2 text-left">Period</th><th className="py-2 text-left">Session Total</th></tr>
//                 </thead>
//                 <tbody>
//                   <tr><td className="py-2">Monthly</td><td className="py-2">₹6,000.00</td></tr>
//                   <tr><td className="py-2">Quarterly</td><td className="py-2">₹12,000.00</td></tr>
//                   <tr><td className="py-2">One Time</td><td className="py-2">₹2,000.00</td></tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>

//         {/* Notices */}
//         <div className="mt-8">
//           <div className="flex items-center mb-4 text-xl font-semibold">
//             <i className="fas fa-bullhorn mr-2"></i> Latest Notices
//           </div>
//           {notifications.length === 0 ? (
//             <div className="bg-white shadow rounded-lg p-6 flex items-center justify-center space-x-3">
//               <i className="fas fa-bell-slash text-gray-400 text-2xl"></i>
//               <span className="text-gray-600">No notices available</span>
//             </div>
//           ) : (
//             <div className="space-y-4">
//               {notifications.map((n, idx) => (
//                 <div key={idx} className="bg-white shadow rounded-lg p-4">
//                   <div className="font-semibold">{n.title}</div>
//                   <div className="text-sm text-gray-700">{n.message}</div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>


//        </div>
//   );
// };




























































































import { useContext, useEffect, useRef, useState } from 'react';
//import { authDataContext, userDataContext } from '../Context-Api/';
//import Chart from 'chart.js';
//import { Chart } from 'chart.js';
import Chart from 'chart.js/auto'; // ✅ preferred in v3.7+ or v4

import StudentSidebar from './StudentSidebar';
import { authDataContext } from '../Context-Api/AuthContext';
import { userDataContext } from '../Context-Api/UserContext';
import axios from 'axios';

const StudentDashboard = () => {
  const { serverUrl } = useContext(authDataContext);
  const { userData } = useContext(userDataContext);
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState([]);
  const [attendanceData, setAttendanceData] = useState({ monthlyAttendance: [] });
  const chartRef = useRef(null);

  useEffect(() => {
    if (userData && userData._id) setLoading(false);
  }, [userData]);
  useEffect(() => {
    (async () => {
      try {
        const api = await axios.get(`${serverUrl}/api/student/percentage`, { withCredentials: true });
        if (api.status === 200) {
          setAttendanceData(api.data);
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, [serverUrl]);

  // const latest = [...attendanceData.monthlyAttendance]
  //   .sort((a, b) => new Date(b.month) - new Date(a.month))[0];

//console.log("attedance",attendanceData);
  // const latest = [...attendanceData.monthlyAttendance]
  // .sort((a, b) => new Date(b.month) - new Date(a.month))[0] || {
  //   present: 20,
  //   absent: 5,
  //   late: 2,
  //   holiday: 3,
  // };
//console.log("latest",latest);
  // useEffect(() => {
  //   if (!latest || !chartRef.current) return;

  //   const chart = new Chart(chartRef.current, {
  //     type: 'pie',
  //     data: {
  //       labels: ['Present', 'Absent', 'Late', 'Holiday'],
  //       datasets: [{
  //         data: [latest.present || 0, latest.absent || 0, latest.late || 0, latest.holiday || 0],
  //         backgroundColor: ['#4caf50', '#ef5350', '#03a9f4', '#ff9800'],
  //         borderColor: '#fff',
  //         borderWidth: 1
  //       }]
  //     },
  //     options: {
  //       responsive: true,
  //       maintainAspectRatio: false,
  //       plugins: {
  //         legend: { position: 'bottom', labels: { padding: 20, usePointStyle: true, font: { size: 12 } } }
  //       }
  //     }
  //   });
  //   return () => chart.destroy();
  // }, [latest]);


  const rawLatest = [...attendanceData.monthlyAttendance]
  .sort((a, b) => new Date(b.month) - new Date(a.month))[0];

const latest = rawLatest
  ? {
      present: rawLatest.presentDays,
      absent: (rawLatest.totalClasses - rawLatest.presentDays),
      late: 0, // You can update this if late data becomes available
      holiday: 0 // Same for holiday
    }
  : {
      present: 0,
      absent: 0,
      late: 0,
      holiday: 0
    };

  const chartInstance = useRef(null);

useEffect(() => {
  if (!latest || !chartRef.current) return;

  // Destroy existing chart if re-rendering
  if (chartInstance.current) {
    chartInstance.current.destroy();
  }

  chartInstance.current = new Chart(chartRef.current, {
    type: 'pie',
    data: {
      labels: ['Present', 'Absent', 'Late', 'Holiday'],
      datasets: [{
        data: [latest.present || 0, latest.absent || 0, latest.late || 0, latest.holiday || 0],
        backgroundColor: ['#4caf50', '#ef5350', '#03a9f4', '#ff9800'],
        borderColor: '#fff',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            padding: 20,
            usePointStyle: true,
            font: { size: 12 }
          }
        }
      }
    }
  });

  return () => {
    chartInstance.current?.destroy();
  };
}, [latest]);

  if (loading) return <p className="p-4">Loading Data...</p>;

  const student = userData;
  const cls = userData.Classs || {};
  const photoInitial = student.name?.[0]?.toUpperCase() || 'S';

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <StudentSidebar />

      <div className="p-4  flex-1 justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-6">
          {/* Profile Card */}
          <div className="col-span-2 bg-white w-full shadow rounded-lg p-6">
            <div className="flex bg-[#444242] p-8 rounded-lg text-white items-center flex-col justify-center space-x-4">
              <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold">
                {photoInitial}
              </div>
              <div>
                <h3 className="text-lg font-medium">{student.name }</h3>
                {/* <span className="text-sm text-gray-500">
                  {cls.standard} – {cls.section}
                </span> */}
              </div>
            </div>
            <ul className="mt-6 space-y-4 text-md text-gray-700">
              <li><span className="font-semibold">Admission Number:</span> {student.AdmissionNum || "N/A"}</li>
              <li><span className="font-semibold">Session:</span> {new Date (student.session.startDate).getFullYear() || "N/A"} - {new Date(student.session.endDate).getFullYear() || "N/A"}</li>
              <li><span className="font-semibold">Class:</span> {cls.name}</li>
              <li><span className="font-semibold">Section:</span> {cls.section}</li>
              <li><span className="font-semibold">Roll Number:</span> {student.Roll || 
              "N/A"}</li>
              <li><span className="font-semibold">Father's Name:</span> {student.parent}</li>
              <li><span className="font-semibold">Father's Phone:</span> {student.phone}</li>
              <li>
                <span className="font-semibold">ID Card:</span>
                <button title="Print ID Card" className="ml-2 text-grey-700">
                  <i className="fa fa-print">N/A</i>
                </button>
              </li>
            </ul>
          </div>

          {/* Stats cards (Attendance + Fee) */}
          <div className="lg:col-span-1 space-y-3">
            <div className="bg-white shadow rounded-lg p-3 w-[100%]">
              <h4 className="text-lg font-medium mb-4">Attendance</h4>
              <div className="flex items-center">
                <div className="text-3xl font-bold text-gray-800 mr-6">
                  {latest ? `${((latest.present / (latest.present + latest.absent + latest.late + latest.holiday)) * 100).toFixed(1)}%` : '—'}
                </div>
                {/* <div className="w-48 h-48">
                  <canvas ref={chartRef} />
                </div> */}
                <div className="w-48 h-48 relative">
  <canvas ref={chartRef} className="absolute top-0 left-0 w-full h-full" />
</div>

              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-700">
                <div className="flex items-center"><i className="fas fa-check-circle text-green-500 mr-2"></i> Present: {latest?.present || 0}</div>
                <div className="flex items-center"><i className="fas fa-times-circle text-red-500 mr-2"></i> Absent: {latest?.absent || 0}</div>
                <div className="flex items-center"><i className="fas fa-clock text-blue-500 mr-2"></i> Late: {latest?.late || 0}</div>
                <div className="flex items-center"><i className="fas fa-umbrella-beach text-yellow-500 mr-2"></i> Holiday: {latest?.holiday || 0}</div>
              </div>
            </div>

            <div className="bg-white shadow rounded-lg p-6 w-[100%]">
              <h4 className="text-lg font-medium mb-4">Session Fee Breakdown</h4>
              <table className="w-full text-sm text-gray-700">
                <thead>
                  <tr className="border-b"><th className="py-2 text-left">Period</th><th className="py-2 text-left">Session Total</th></tr>
                </thead>
                <tbody>
                  <tr><td className="py-2">Monthly</td><td className="py-2">₹6,000.00</td></tr>
                  <tr><td className="py-2">Quarterly</td><td className="py-2">₹12,000.00</td></tr>
                  <tr><td className="py-2">One Time</td><td className="py-2">₹2,000.00</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Notices */}
        <div className="mt-8">
          <div className="flex items-center mb-4 text-xl font-semibold">
            <i className="fas fa-bullhorn mr-2"></i> Latest Notices
          </div>
          {notifications.length === 0 ? (
            <div className="bg-white shadow rounded-lg p-6 flex items-center justify-center space-x-3">
              <i className="fas fa-bell-slash text-gray-400 text-2xl"></i>
              <span className="text-gray-600">No notices available</span>
            </div>
          ) : (
            <div className="space-y-4">
              {notifications.map((n, idx) => (
                <div key={idx} className="bg-white shadow rounded-lg p-4">
                  <div className="font-semibold">{n.title}</div>
                  <div className="text-sm text-gray-700">{n.message}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

//export default StudentDashboard;


















const Card = ({ title, value, color }) => (
  <div className={`p-4 rounded-lg shadow text-white ${color} hover:scale-105 transform transition-all duration-300`}>
    <h3 className="text-sm">{title}</h3>
    <p className="text-xl font-bold">{value}</p>
  </div>
);

export default StudentDashboard;




//  <div className="flex flex-col md:flex-row min-h-screen bg-grey-100">
//     {/* Sidebar*/}
//     <StudentSidebar/>
//       {/* Main Content */}
//       {/* <div className="flex-1 p-6">
//         {/* Top Navbar */}
//         {/* <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-semibold">Welcome, Student! {userData.name}</h1>
//           <div className="absolute top-3 right-14">
//             <button onClick={()=>setShowModal(true)} className='px-3 py-1 text-white rounded-lg bg-red-500'>Send Leave</button>
//           </div>
//           <div className="relative">
//             <button
//               onClick={() => setShowNotif(!showNotif)}
//               className="relative text-gray-600 focus:outline-none"
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
//                   d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 00-4 0v1.341C8.67 6.165 8 7.388 8 8.75v5.408c0 .538-.214 1.055-.595 1.437L6 17h5m4 0v1a3 3 0 01-6 0v-1h6z"
//                 />
//               </svg>
//               {notifications.length > 0 && (
//                 <div className="absolute top-0 flex flex-col w-full left-5 px-1 rounded-full bg-red-500 right-0 ">
//                  <span className='text-black'>{notifications.length}</span>
//                 </div>
//               )}
//             </button>
//             {showNotif && (
//               <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-50">
//                 <h4 className="font-semibold text-gray-800 mb-2">Notifications</h4>
//                 <ul className="text-sm text-gray-600 space-y-1">
//               {  /*  {notifications.map((note, i) => (
//                     <div key={i} className="border-b pb-2">
//                     <li  className="border-b pb-1">{note.title}</li>
//                     <li  className="border-b pb-1">{note.message}</li>
//                     {Classs?.teacher?.map((item,idx)=>{
//                       return (
//  <li className='border-b pb-1 text-red-500' key={idx}>Teacher : {item.name || "N/A" }</li>
//                       )
//                     })}
//                     </div>
            

//                   ))} */ }

//                   {/* {notifications.map((note, i) => (
//   <div key={i} className="border-b pb-2">
//     <li className="font-semibold">{note.title}</li>
//     <li className="text-gray-600">{note.message}</li>
//     <li className="text-sm text-red-500">Teacher: {note.teacherName}</li>
//   </div>
// ))}

//                 </ul>
//               </div> */}
        
//           {/* </div>
//         </div> */} 

//         {/* Cards */}
//         {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//           <Card title="Grades" value="A+" color="bg-green-500" />
//        {/*   <Card 
//   title="Attendance" 
//   value="40%"
//   color="bg-blue-500" 
// />  */}
//  {/* <Card 
//   title="Attendance" 
//   value={
//     latestMonthData 
//       ? `${latestMonthData.attendancePercentage}` 
//       : "Calculating..."
//   }
//   color="bg-blue-500" 
// />  */}



//           {/* <Card title="Assignments" value="2 Pending" color="bg-yellow-500" />
//           <Card title="Next Class" value="Science @ 10:00 AM" color="bg-purple-500" /> */}
//        {/* </div> */}

//         {/* Assignments Section */}
//         {/* <div className="bg-white rounded-lg shadow-md p-4 mb-6">
//           <h2 className="text-lg font-semibold mb-4">Upcoming Assignments</h2>
//           <ul className="space-y-2">
//             {assignments.map((item, index) => (
//               <li key={index} className="flex justify-between text-sm border-b pb-2">
//                 <span>{item.title}</span>
//                 <span className="text-gray-500">Due: {item.due}</span>
//               </li>
//             ))}
//           </ul>
//         </div> */}
//         {/* Grades Table */}
//         {/* <div className="bg-white rounded-lg shadow-md p-4">
//           <h2 className="text-lg font-semibold mb-4">Your Class Overview</h2>
//           <table className="w-full text-sm text-left">
//             <thead>
//               <tr className="text-gray-600">
//                 <th className="py-2">Subject</th>
//                 <th className="py-2"> Class Timing</th>
//                 <th className='py-2'>Teacher</th>
//               </tr>
//             </thead>
//             <tbody>
//               {/* {Classs.map((item, index) => (
//                 <tr key={index} className="border-t">
//                   <td className="py-2">{item.teacher.name || "No Teacher"}</td>
//                 </tr>
//               ))} */}
//           {/* {Classs?.teacher?.map((item, index) => (
//     <tr key={index} className="border-t">
//      {item.teachSubject.map((subject,idx)=> (
//       <td className="py-2" key={idx}>{subject.name || "N/A"}</td>
//      ))
//      }
//       <td className="py-2">{item.classTiming || "N/A"}</td>
//       <td className="py-2">{item.name || "No Teacher"}</td>
//     </tr>
//   ))} */}

//   {/* {Classs?.teacher?.map((teacher, tIndex) =>
//   teacher.teachSubject.map((subject, sIndex) => {
//     // Find the period for this subject in the timetable
//     let subjectTime = "N/A";
//     for (let day of Classs.timeTable || []) {
//       const found = day.periods?.find(p => p.subject?.name === subject.name);
//       if (found) {
//         subjectTime = found.time || "N/A";
//         break; // only get the first match
//       }
//     }

//     return (
//       <tr key={`${tIndex}-${sIndex}`} className="border-t">
//         <td className="py-2">{subject.name || "N/A"}</td>
//         <td className="py-2">{subjectTime}</td>
//         <td className="py-2">{teacher.name || "No Teacher"}</td>
//       </tr>
//     );
//   })
// )} */}


//   {/* {Classs?.teacher?.map((teacher, tIndex) =>
//   teacher.teachSubject.map((subject, sIndex) => {
//     // Find the period for this subject in the timetable
//     let subjectTime = "N/A";
//     for (let day of Classs.timeTable || []) {
//       const found = day.periods?.find(p => p.subject?.name === subject.name);
//       if (found) {
//         subjectTime = found.time || "N/A";
//         break; // only get the first match
//       }
//     }
//     return (
//       <tr key={`${tIndex}-${sIndex}`} className="border-t">
//         <td className="py-2">{subject.name || "N/A"}</td>
//         <td className="py-2">{subjectTime}</td>
//         <td className="py-2">{teacher.name || "No Teacher"}</td>
//       </tr>
//     );
//   })
// )} */}



// {/* {Classs?.timeTable?.map((day, dIndex) =>
//   day.periods?.map((period, pIndex) => {
//     const subjectName = period.subject?.name || "N/A";
//     const time = period.time || "N/A";

//     // Find the teacher who teaches this subject
//     let teacherName = "Searching...";
//     for (let teacher of Classs.teacher || []) {
//       if (teacher.teachSubject?.some(sub => sub.name === subjectName)) {
//         teacherName = teacher.name;
//         break;
//       }
//     }

//     return (
//       <tr key={`${dIndex}-${pIndex}`} className="border-t">
//         <td className="py-2">{subjectName}</td>
//         <td className="py-2">{time}</td>
//         <td className="py-2">{teacherName}</td>
//       </tr>
//     );
//   })
// )} */}




//   {/* {Classs?.teacher?.announcements.map((item,idx)=>{
//     return (
//       <p key={idx}>{item.message || 
//       "NV"}</p>
//     )
//   })} */}


// {/* 
//             </tbody>
//           </table> */}
//           {/* Class Timetable */}
// {/* <div className="bg-white rounded-lg shadow-md p-4 mt-6">
//   <h2 className="text-lg font-semibold mb-4">Class Timetable</h2>
//   {/* {Classs?.timeTable?.length > 0 ? (
//     Classs.timeTable.map((daySchedule, index) => (
//       <div key={index} className="mb-4">
//         <h3 className="text-md font-bold text-blue-700 mb-2">{daySchedule.day}</h3>
//         <table className="w-full text-sm text-left border">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="py-2 px-3">Period #</th>
//               <th className="py-2 px-3">Subject</th>
//               <th className="py-2 px-3">Time</th>
//             </tr>
//           </thead>
//           <tbody>
//             {daySchedule.periods?.map((period, idx) => (
//               <tr key={idx} className="border-t">
//                 <td className="py-2 px-3">{idx + 1}</td>
//                 <td className="py-2 px-3">{period.subject?.name || "N/A"}</td>
//                 <td className="py-2 px-3">{period.time || "N/A"}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     ))
//   ) : (
//     <p className="text-gray-600">No timetable available for your class yet.</p>
//   )} */}
//   {/* {Classs?.timeTable?.length > 0 ? (() => {
//   let globalIndex = 1; // Start period numbering from 1

//   return Classs.timeTable.map((daySchedule, index) => (
//     <div key={index} className="mb-4">
//       <h3 className="text-md font-bold text-blue-700 mb-2">{daySchedule.day}</h3>
//       <table className="w-full text-sm text-left border">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="py-2 px-3">Period #</th>
//             <th className="py-2 px-3">Subject</th>
//             <th className="py-2 px-3">Time</th>
//           </tr>
//         </thead>
//         <tbody>
//           {daySchedule.periods?.map((period, idx) => (
//             <tr key={`${index}-${idx}`} className="border-t">
//               <td className="py-2 px-3">{globalIndex++}</td>
//               <td className="py-2 px-3">{period.subject?.name || "N/A"}</td>
//               <td className="py-2 px-3">{period.time || "N/A"}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   ));
// })() : (
//   <p className="text-gray-600">No timetable available for your class yet.</p>
// )}
// </div> */} 

//       {/*  </div> */}
//          {/* {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg animate-fade-in">
//             <h2 className="text-xl font-bold mb-4 text-gray-800">Send Leave</h2>
//             <textarea
//               type="text"
//               name="leave"
//               value={leaveData.leave}
//               onChange={handleAnnouncementChange}
//               placeholder="Your Leave Request"
//               className="w-full border resize-none  p-2 mb-3 rounded"
//             />
//             <input type='date'
//               name="date"
//               value={leaveData.date}
//               onChange={handleAnnouncementChange}
//               className="w-full border p-2 mb-3 rounded"
//             />
//             <div className="flex justify-end space-x-3">
//               <button onClick={() => setShowModal(false)} className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400">Cancel</button>
//               <button onClick={handleSubmitLeave} className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">Submit</button>
//             </div>
//           </div>
//         </div>
//       )} */}
//      {/* </div> */}



//     </div>






































































































































// import React, { useContext, useEffect, useState } from 'react';
// import { userDataContext } from '../Context-Api/UserContext';
// import { authDataContext } from '../Context-Api/AuthContext';
// import axios from 'axios';
// import io from 'socket.io-client';
// import StudentSidebar from './StudentSidebar';

//   const StudentDashboard = () => {
//   const { userData } = useContext(userDataContext);
//   const { serverUrl } = useContext(authDataContext);
//   const socket = io(serverUrl);

//   const Classs = userData?.Classs || {};
//   const [notifications, setNotifications] = useState([]);
//   const [showNotif, setShowNotif] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [leaveData, setLeaveData] = useState({ leave: '', date: '' });

//   const [attendanceData, setAttendanceData] = useState({
//     studentId: '',
//     studentName: '',
//     classId: '',
//     monthlyAttendance: [],
//   });

//   const latestMonthData = [...attendanceData.monthlyAttendance]
//     .sort((a, b) => new Date(b.month) - new Date(a.month))[0];

//   useEffect(() => {
//     if (userData?._id) {
//       socket.emit('register', userData._id);
//     }

//     socket.on('new-announcement', (data) => {
//       const teacherName = data.teacherName || data.name || 'Unknown';
//       setNotifications((prev) => [{ ...data, teacherName }, ...prev]);
//     });

//     socket.on(`attendance-${userData._id}`, (data) => {
//       alert(data.message);
//     });

//     return () => {
//       socket.off('new-announcement');
//     };
//   }, [userData]);

//   useEffect(() => {
//     const allAnnouncements = (Classs.teacher || []).flatMap((t) =>
//       (t.announcements || []).map((a) => ({
//         ...a,
//         teacherName: t.name || 'N/A',
//       }))
//     );
//     setNotifications(allAnnouncements);
//   }, [userData]);

//   useEffect(() => {
//     const fetchAttendance = async () => {
//       try {
//         const res = await axios.get(`${serverUrl}/student/percentage`, {
//           withCredentials: true,
//         });
//         setAttendanceData(res.data);
//       } catch (err) {
//         alert('Failed to load attendance: ' + err?.response?.data?.message);
//       }
//     };

//     fetchAttendance();
//   }, []);

//   const handleAnnouncementChange = (e) => {
//     const { name, value } = e.target;
//     setLeaveData({ ...leaveData, [name]: value });
//   };

//   const handleSubmitLeave = async () => {
//     try {
//       await axios.post(`${serverUrl}/student/Add/Leave`, leaveData, {
//         withCredentials: true,
//       });
//       alert('Leave Request Successfully Submitted!');
//       setShowModal(false);
//     } catch (err) {
//       alert('Error: ' + err?.response?.data?.message);
//     }
//   };

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
//       <StudentSidebar />

//       <div className="flex-1 p-6">
//         {/* Top Navbar */}
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-semibold">
//             Welcome, {userData?.name || 'Student'}
//           </h1>

//           <div className="flex space-x-4 items-center">
//             <button
//               onClick={() => setShowModal(true)}
//               className="px-4 py-2 bg-red-500 text-white rounded-lg"
//             >
//               Send Leave
//             </button>

//             <div className="relative">
//               <button
//                 onClick={() => setShowNotif(!showNotif)}
//                 className="relative text-gray-600"
//               >
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 00-4 0v1.341C8.67 6.165 8 7.388 8 8.75v5.408c0 .538-.214 1.055-.595 1.437L6 17h5m4 0v1a3 3 0 01-6 0v-1h6z"
//                   />
//                 </svg>
//                 {notifications.length > 0 && (
//                   <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
//                     {notifications.length}
//                   </span>
//                 )}
//               </button>

//               {showNotif && (
//                 <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-50">
//                   <h4 className="font-semibold mb-2">Notifications</h4>
//                   <ul className="space-y-2 text-sm">
//                     {notifications.map((note, i) => (
//                       <li key={i} className="border-b pb-2">
//                         <strong>{note.title}</strong>
//                         <div>{note.message}</div>
//                         <div className="text-red-500 text-xs">
//                           Teacher: {note.teacherName}
//                         </div>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//           <Card title="Grades" value="A+" color="bg-green-500" />
//           <Card
//             title="Attendance"
//             value={
//               latestMonthData
//                 ? `${latestMonthData.attendancePercentage || 0}%`
//                 : 'Calculating...'
//             }
//             color="bg-blue-500"
//           />
//           <Card title="Assignments" value="2 Pending" color="bg-yellow-500" />
//           <Card title="Next Class" value="Science @ 10:00 AM" color="bg-purple-500" />
//         </div>

//         {/* Class Overview */}
//         <div className="bg-white rounded-lg shadow-md p-4 mb-6">
//           <h2 className="text-lg font-semibold mb-4">Your Class Overview</h2>
//           <table className="w-full text-sm text-left">
//             <thead>
//               <tr className="text-gray-600">
//                 <th className="py-2">Subject</th>
//                 <th className="py-2">Class Timing</th>
//                 <th className="py-2">Teacher</th>
//               </tr>
//             </thead>
//             <tbody>
//               {(Classs?.timeTable || []).flatMap((day, dIndex) =>
//                 (day.periods || []).map((period, pIndex) => {
//                   const subjectName = period.subject?.name || 'N/A';
//                   const time = period.time || 'N/A';

//                   let teacherName = 'No Teacher';
//                   for (const teacher of Classs.teacher || []) {
//                     if (
//                       teacher.teachSubject?.some(
//                         (sub) => sub.name === subjectName
//                       )
//                     ) {
//                       teacherName = teacher.name;
//                       break;
//                     }
//                   }

//                   return (
//                     <tr key={`${dIndex}-${pIndex}`} className="border-t">
//                       <td className="py-2">{subjectName}</td>
//                       <td className="py-2">{time}</td>
//                       <td className="py-2">{teacherName}</td>
//                     </tr>
//                   );
//                 })
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Class Timetable */}
//         <div className="bg-white rounded-lg shadow-md p-4">
//           <h2 className="text-lg font-semibold mb-4">Class Timetable</h2>
//           {Classs?.timeTable?.length > 0 ? (
//             (() => {
//               let periodNum = 1;
//               return Classs.timeTable.map((day, index) => (
//                 <div key={index} className="mb-6">
//                   <h3 className="text-md font-bold text-blue-700 mb-2">{day.day}</h3>
//                   <table className="w-full text-sm border">
//                     <thead>
//                       <tr className="bg-gray-100">
//                         <th className="py-2 px-3">#</th>
//                         <th className="py-2 px-3">Subject</th>
//                         <th className="py-2 px-3">Time</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {day.periods.map((period, idx) => (
//                         <tr key={idx} className="border-t">
//                           <td className="py-2 px-3">{periodNum++}</td>
//                           <td className="py-2 px-3">
//                             {period.subject?.name || 'N/A'}
//                           </td>
//                           <td className="py-2 px-3">{period.time || 'N/A'}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               ));
//             })()
//           ) : (
//             <p>No timetable available.</p>
//           )}
//         </div>
//       </div>

//       {/* Leave Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//             <h3 className="text-lg font-semibold mb-4">Submit Leave Request</h3>
//             <input
//               name="leave"
//               placeholder="Reason for leave"
//               value={leaveData.leave}
//               onChange={handleAnnouncementChange}
//               className="w-full border p-2 mb-3"
//             />
//             <input
//               type="date"
//               name="date"
//               value={leaveData.date}
//               onChange={handleAnnouncementChange}
//               className="w-full border p-2 mb-3"
//             />
//             <div className="flex justify-end">
//               <button
//                 onClick={handleSubmitLeave}
//                 className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
//               >
//                 Submit
//               </button>
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="px-4 py-2 bg-gray-300 rounded"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // Card component (used for dashboard stats)
// const Card = ({ title, value, color }) => (
//   <div className={`p-4 text-white rounded-lg shadow ${color}`}>
//     <h3 className="text-sm font-semibold">{title}</h3>
//     <p className="text-xl font-bold">{value}</p>
//   </div>
// );

// export default StudentDashboard;

