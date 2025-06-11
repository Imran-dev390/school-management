import React, { useContext, useState } from 'react';
import { userDataContext } from '../Context-Api/UserContext';
import { Link, Links } from 'react-router-dom';
import { adminDataContext } from '../Context-Api/AdminContext';
import { useEffect } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import { authDataContext } from '../Context-Api/AuthContext';
import StudentSidebar from './StudentSidebar';
//import Sidebar from './Sidebar';
const StudentDashboard = () => {
  const {serverUrl} = useContext(authDataContext);
  const [showModal,setShowModal]= useState(false);
  const {userData} = useContext(userDataContext);
  const [loading,setLoading] = useState(true);
  // Create socket connection (put this outside the component)
const socket = io(serverUrl);
  //console.log("userData",userData)
const {Classs} = userData;
const {teacher} = Classs;
//console.log("teacher",teacher);
const announcement = userData?.Classs?.teacher?.announcements || [];
//const {teachSubject} = teacher;
const [leaveData,setLeaveData] = useState({
  leave:"",
  date:"",
})
//console.log("announcement",announcement)

const handleAnnouncementChange = (e) => {
    const { name, value } = e.target;
    setLeaveData({ ...leaveData, [name]: value });
  };
//const map = announcement.map(announce=>{
//  announce.message
//});
//console.log("map",map);
const [notifications, setNotifications] = useState([

]);
//console.log(Classs);

//console.log("Class",Classs);
//console.log("teacher",teacher[0].announcements);
  //setNotifications(teacher[0].announcements.length)
//console.log("teachSubject",teachSubject);
  const [showNotif, setShowNotif] = useState(false);
  const assignments = [
    { title: 'Biology Lab Report', due: 'Apr 25' },
    { title: 'Chemistry Worksheet', due: 'Apr 28' },
  ];

  const grades = [
    { subject: 'Math', grade: 'A' ,teacher:"Khalid Mehmood"},
    { subject: 'Science', grade: 'B+' ,teacher:"Prof Hasnan"},
    { subject: 'English', grade: 'A-' ,teacher:"Ghafoor Sab"},
  ];
/*useEffect(()=>{
  if(teacher[0].announcements.length > 0){
    setNotifications(teacher[0].announcements);
  // const messages = teacher[0].announcements.map(item=>{
  //      setNotifications({title:item.title,message:item.message})
  // })
 // console.log("messages",messages);
  }
},[userData])*/

useEffect(() => {
  if (userData && userData?._id) {
    setLoading(false);
    socket.emit("register", userData._id); // ✅ Register with server
  }
}, [userData]);
useEffect(()=>{
const teachers = Array.isArray(Classs?.teacher) ? Classs.teacher : [];

  const allAnnouncements = teachers.flatMap((t) =>
    (t.announcements || []).map((announcement) => ({
      ...announcement,
      teacherName: t.name || 'N/A',
    }))
  );
  setNotifications(allAnnouncements);
},[userData]);

const [attendanceData, setAttendanceData] = useState({
  studentId: "",
  studentName: "",
  classId: "",
  monthlyAttendance: [],
});

useEffect(() => {
  const gettingPercentageAttendance = async () => {
    try {
      const api = await axios.get(`${serverUrl}/api/student/percentage`, {
        withCredentials: true,
      });

      if (api.status === 200) {
        setAttendanceData({
          studentId: api.data.studentId,
          studentName: api.data.studentName,
          classId: api.data.classId,
          monthlyAttendance: api.data.monthlyAttendance,
        });
      }
    } catch (error) {
      setAttendanceData(null);
    //alert("Not Getting Percentage. Why: " + error?.response?.data?.message);
    }
  };
  gettingPercentageAttendance();
}, []);

useEffect(() => {

// console.log("attendancePercent",AttendancePercentage)
  // Listen for new real-time announcements
  socket.on('new-announcement', (data) => {
    // Add teacher name if missing
    const teacherName = data.teacherName || data.name || 'Unknown Teacher';

    // Append to notifications
    setNotifications(prev => [
      {
        ...data,
        teacherName: teacherName,
      },
      ...prev
    ]);
  });
  socket.on(`attendance-${userData._id}`, (data) => {
  alert(data.message); // or show in-app toast
});



  // Clean up on component unmount
  return () => {
    socket.off('new-announcement');
  };
}, []);

const latestMonthData = [...attendanceData.monthlyAttendance]
  .sort((a, b) => new Date(b.month) - new Date(a.month))[0]; // Most recent month


const handleSubmitLeave = async ()=>{
  try{
       const api = await axios.post(serverUrl+"/api/student/Add/Leave",{
        leave:leaveData.leave,
        date:leaveData.date,
       },{withCredentials:true})
       if(api.status === 200){
        alert("Leave Request Successfully Submitted!");
        setShowModal(false);
       }
  } catch(err){
         alert(err?.response?.data.message);
  }
}
if(loading) return <p>Loading Data...</p>
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
    {/* Sidebar*/}
    <StudentSidebar/>
      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Top Navbar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Welcome, Student! {userData.name}</h1>
          <div className="absolute top-3 right-14">
            <button onClick={()=>setShowModal(true)} className='px-3 py-1 text-white rounded-lg bg-red-500'>Send Leave</button>
          </div>
          <div className="relative">
            <button
              onClick={() => setShowNotif(!showNotif)}
              className="relative text-gray-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 00-4 0v1.341C8.67 6.165 8 7.388 8 8.75v5.408c0 .538-.214 1.055-.595 1.437L6 17h5m4 0v1a3 3 0 01-6 0v-1h6z"
                />
              </svg>
              {notifications.length > 0 && (
                <div className="absolute top-0 flex flex-col w-full left-5 px-1 rounded-full bg-red-500 right-0 ">
                 <span className='text-black'>{notifications.length}</span>
                </div>
              )}
            </button>
            {showNotif && (
              <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-50">
                <h4 className="font-semibold text-gray-800 mb-2">Notifications</h4>
                <ul className="text-sm text-gray-600 space-y-1">
              {  /*  {notifications.map((note, i) => (
                    <div key={i} className="border-b pb-2">
                    <li  className="border-b pb-1">{note.title}</li>
                    <li  className="border-b pb-1">{note.message}</li>
                    {Classs?.teacher?.map((item,idx)=>{
                      return (
 <li className='border-b pb-1 text-red-500' key={idx}>Teacher : {item.name || "N/A" }</li>
                      )
                    })}
                    </div>
            

                  ))} */ }

                  {notifications.map((note, i) => (
  <div key={i} className="border-b pb-2">
    <li className="font-semibold">{note.title}</li>
    <li className="text-gray-600">{note.message}</li>
    <li className="text-sm text-red-500">Teacher: {note.teacherName}</li>
  </div>
))}

                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card title="Grades" value="A+" color="bg-green-500" />
       {/*   <Card 
  title="Attendance" 
  value="40%"
  color="bg-blue-500" 
/>  */}
 <Card 
  title="Attendance" 
  value={
    latestMonthData 
      ? `${latestMonthData.attendancePercentage}` 
      : "Calculating..."
  }
  color="bg-blue-500" 
/> 



          <Card title="Assignments" value="2 Pending" color="bg-yellow-500" />
          <Card title="Next Class" value="Science @ 10:00 AM" color="bg-purple-500" />
        </div>

        {/* Assignments Section */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <h2 className="text-lg font-semibold mb-4">Upcoming Assignments</h2>
          <ul className="space-y-2">
            {assignments.map((item, index) => (
              <li key={index} className="flex justify-between text-sm border-b pb-2">
                <span>{item.title}</span>
                <span className="text-gray-500">Due: {item.due}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Grades Table */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-4">Your Class Overview</h2>
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="text-gray-600">
                <th className="py-2">Subject</th>
                <th className="py-2"> Class Timing</th>
                <th className='py-2'>Teacher</th>
              </tr>
            </thead>
            <tbody>
              {/* {Classs.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="py-2">{item.teacher.name || "No Teacher"}</td>
                </tr>
              ))} */}
          {/* {Classs?.teacher?.map((item, index) => (
    <tr key={index} className="border-t">
     {item.teachSubject.map((subject,idx)=> (
      <td className="py-2" key={idx}>{subject.name || "N/A"}</td>
     ))
     }
      <td className="py-2">{item.classTiming || "N/A"}</td>
      <td className="py-2">{item.name || "No Teacher"}</td>
    </tr>
  ))} */}

  {/* {Classs?.teacher?.map((teacher, tIndex) =>
  teacher.teachSubject.map((subject, sIndex) => {
    // Find the period for this subject in the timetable
    let subjectTime = "N/A";
    for (let day of Classs.timeTable || []) {
      const found = day.periods?.find(p => p.subject?.name === subject.name);
      if (found) {
        subjectTime = found.time || "N/A";
        break; // only get the first match
      }
    }

    return (
      <tr key={`${tIndex}-${sIndex}`} className="border-t">
        <td className="py-2">{subject.name || "N/A"}</td>
        <td className="py-2">{subjectTime}</td>
        <td className="py-2">{teacher.name || "No Teacher"}</td>
      </tr>
    );
  })
)} */}


  {/* {Classs?.teacher?.map((teacher, tIndex) =>
  teacher.teachSubject.map((subject, sIndex) => {
    // Find the period for this subject in the timetable
    let subjectTime = "N/A";
    for (let day of Classs.timeTable || []) {
      const found = day.periods?.find(p => p.subject?.name === subject.name);
      if (found) {
        subjectTime = found.time || "N/A";
        break; // only get the first match
      }
    }
    return (
      <tr key={`${tIndex}-${sIndex}`} className="border-t">
        <td className="py-2">{subject.name || "N/A"}</td>
        <td className="py-2">{subjectTime}</td>
        <td className="py-2">{teacher.name || "No Teacher"}</td>
      </tr>
    );
  })
)} */}



{Classs?.timeTable?.map((day, dIndex) =>
  day.periods?.map((period, pIndex) => {
    const subjectName = period.subject?.name || "N/A";
    const time = period.time || "N/A";

    // Find the teacher who teaches this subject
    let teacherName = "Searching...";
    for (let teacher of Classs.teacher || []) {
      if (teacher.teachSubject?.some(sub => sub.name === subjectName)) {
        teacherName = teacher.name;
        break;
      }
    }

    return (
      <tr key={`${dIndex}-${pIndex}`} className="border-t">
        <td className="py-2">{subjectName}</td>
        <td className="py-2">{time}</td>
        <td className="py-2">{teacherName.name}</td>
      </tr>
    );
  })
)}




  {/* {Classs?.teacher?.announcements.map((item,idx)=>{
    return (
      <p key={idx}>{item.message || 
      "NV"}</p>
    )
  })} */}



            </tbody>
          </table>
          {/* Class Timetable */}
<div className="bg-white rounded-lg shadow-md p-4 mt-6">
  <h2 className="text-lg font-semibold mb-4">Class Timetable</h2>
  {/* {Classs?.timeTable?.length > 0 ? (
    Classs.timeTable.map((daySchedule, index) => (
      <div key={index} className="mb-4">
        <h3 className="text-md font-bold text-blue-700 mb-2">{daySchedule.day}</h3>
        <table className="w-full text-sm text-left border">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-3">Period #</th>
              <th className="py-2 px-3">Subject</th>
              <th className="py-2 px-3">Time</th>
            </tr>
          </thead>
          <tbody>
            {daySchedule.periods?.map((period, idx) => (
              <tr key={idx} className="border-t">
                <td className="py-2 px-3">{idx + 1}</td>
                <td className="py-2 px-3">{period.subject?.name || "N/A"}</td>
                <td className="py-2 px-3">{period.time || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ))
  ) : (
    <p className="text-gray-600">No timetable available for your class yet.</p>
  )} */}
  {Classs?.timeTable?.length > 0 ? (() => {
  let globalIndex = 1; // Start period numbering from 1

  return Classs.timeTable.map((daySchedule, index) => (
    <div key={index} className="mb-4">
      <h3 className="text-md font-bold text-blue-700 mb-2">{daySchedule.day}</h3>
      <table className="w-full text-sm text-left border">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-3">Period #</th>
            <th className="py-2 px-3">Subject</th>
            <th className="py-2 px-3">Time</th>
          </tr>
        </thead>
        <tbody>
          {daySchedule.periods?.map((period, idx) => (
            <tr key={`${index}-${idx}`} className="border-t">
              <td className="py-2 px-3">{globalIndex++}</td>
              <td className="py-2 px-3">{period.subject?.name || "N/A"}</td>
              <td className="py-2 px-3">{period.time || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ));
})() : (
  <p className="text-gray-600">No timetable available for your class yet.</p>
)}
</div>

        </div>
         {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg animate-fade-in">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Send Leave</h2>
            <textarea
              type="text"
              name="leave"
              value={leaveData.leave}
              onChange={handleAnnouncementChange}
              placeholder="Your Leave Request"
              className="w-full border resize-none  p-2 mb-3 rounded"
            />
            <input type='date'
              name="date"
              value={leaveData.date}
              onChange={handleAnnouncementChange}
              className="w-full border p-2 mb-3 rounded"
            />
            <div className="flex justify-end space-x-3">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400">Cancel</button>
              <button onClick={handleSubmitLeave} className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">Submit</button>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

const Card = ({ title, value, color }) => (
  <div className={`p-4 rounded-lg shadow text-white ${color} hover:scale-105 transform transition-all duration-300`}>
    <h3 className="text-sm">{title}</h3>
    <p className="text-xl font-bold">{value}</p>
  </div>
);

export default StudentDashboard;











































































































































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
