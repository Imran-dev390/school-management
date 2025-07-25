import React from 'react'
import StudentSidebar from './StudentSidebar'
import { useContext } from 'react'
import { userDataContext } from '../Context-Api/UserContext'
import { useEffect } from 'react'
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader'
import { Link } from 'react-router-dom'
import { adminDataContext } from '../Context-Api/AdminContext'
import { useState } from 'react'
import { authDataContext } from '../Context-Api/AuthContext'

// const StudentDBClassTimetable = () => {
//     const {userData} = useContext(userDataContext);
//     useEffect(()=>{
    
//     },[userData])
//     console.log("userData",userData);
//     const validTimeTable = userData?.Classs?.timeTable?.filter(dayEntry =>
//   dayEntry.periods.some(period => period.subject)
// );

//   return (
//     <div className='flex flex-col md:flex-row min-h-screen bg-white gap-3'>
//       <StudentSidebar/>
//        <div className="flex h-full w-full flex-col gap-4 mt-2 px-4">
//        <AdminTeachDashboardHeader/>
//         <div className="flex w-full text-white  p-3 text-center rounded-md bg-[rgb(1,1,93)] flex-col md:flex-row items-center border-b pb-3 gap-2 justify-center">
//           <h2 className="text-lg font-semibold justify-center text-center flex items-center gap-2">
//             <i className="fas fa-calendar-alt"></i> View Class Timetable
//           </h2>
//         </div>



//           {/* Timetable Table */}
//         {/* {userData?.Classs?.map((cls, classIndex) => ( */}
// {validTimeTable.map(day => (
//   <div key={day._id}>
//     <h3>{day.day}</h3>
//     {day.periods
//       .filter(p => p.subject)
//       .map(period => (
//         <div key={period._id}>
//           <p>Period {period.periodNumber}</p>
//           <p>Subject: {period.subject.name}</p>
//           <p>Time: {period.time}</p>
//         </div>
//       ))}
//   </div>
// ))}


//        </div>
//     </div>
//   )
// }




const StudentDBClassTimetable = () => {
  const { userData } = useContext(userDataContext);
  const [teachers, setTeachers] = useState([]);
  const {serverUrl} = useContext(authDataContext);

  useEffect(() => {
    const fetchTeachersForStudent = async () => {
      try {
        const res = await fetch(`${serverUrl}/api/student/teachers`);
        const data = await res.json();
        setTeachers(data.teachers);
      } catch (err) {
        console.error("Failed to fetch teachers:", err);
      }
    };

    fetchTeachersForStudent();
  }, []);

  const getTeacherName = (teacherId) => {
    const classTeachers = userData?.Classs?.teacher;
    let teacher = Array.isArray(classTeachers)
      ? classTeachers.find(t => t._id === teacherId)
      : classTeachers?._id === teacherId
      ? classTeachers
      : null;

    if (!teacher) {
      teacher = teachers.find(t => t._id === teacherId);
    }

    return teacher?.name || "No Teacher";
  };
  const validTimeTable = userData?.Classs?.timeTable?.filter(dayEntry =>
    dayEntry.periods?.some(period => period.subject)
  );
//   const getTeacherName = (teacherId) => {
//     const teacher = userData?.Classs?.teacher?.find(t => t._id === teacherId);
//     return teacher?.name || "No Teacher";
//   };



//console.log("getTeacherName",teachers);
  return (
    <div className='flex flex-col md:flex-row min-h-screen bg-white gap-3'>
      <StudentSidebar />
      <div className="flex h-full w-full flex-col gap-4 mt-2 px-4">
        <AdminTeachDashboardHeader />
        <div className="flex w-full text-white p-3 text-center rounded-md bg-[rgb(1,1,93)] flex-col md:flex-row items-center border-b pb-3 gap-2 justify-center">
          <h2 className="text-lg font-semibold justify-center text-center flex items-center gap-2">
            <i className="fas fa-calendar-alt"></i> View Class Timetable
          </h2>
        </div>

        {/* Timetable by Day */}
        {validTimeTable?.map((dayItem) => (
          <div key={dayItem._id} className="mb-6 shadow-xl bg-white px-4 p-4">
            <h3 className="text-xl font-bold text-gray-700 mb-2">{dayItem.day}</h3>
            <table className="min-w-full p-3  text-md text-left border border-gray-800">
              <thead className="bg-[rgb(1,1,93)] text-white">
                <tr>
                  <th className="border px-3 py-2">Period #</th>
                  <th className="border px-3 py-2">Time</th>
                  <th className="border px-3 py-2">Subject</th>
                  <th className="border px-3 py-2">Teacher</th>
                </tr>
              </thead>
              <tbody>
                {dayItem.periods
                  .filter(period => period.subject)
                  .map((period, index) => (
                    <tr key={period._id || index}>
                      <td className="border px-2 py-1">{period.periodNumber || index + 1}</td>
                      <td className="border px-2 py-1">{period.time || "N/A"}</td>
                      <td className="border px-2 py-1">{period.subject?.name || "N/A"}</td>
                      <td className="border px-2 py-1">{getTeacherName(period.teacher)}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDBClassTimetable
