import React, { useContext } from 'react'
import TeacherSidebar from './TeacherSidebar'
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader'
import { userDataContext } from '../Context-Api/UserContext'
import { Link } from 'react-router-dom'

const TeacherViewTimetable = () => {
    const {userData} = useContext(userDataContext);
console.log("userDat",userData);

  return (
    <div className='flex flex-col md:flex-row min-h-screen bg-white gap-3'>
       <TeacherSidebar/>
       <div className="flex flex-col gap-3 mt-2 h-full w-full">
      <AdminTeachDashboardHeader/>
                {/* Header */}
  <div className="bg-[rgb(1,1,93)] text-white text-center py-3 px-2 rounded flex items-center justify-between">
    <span className="text-lg font-semibold">
      <i className="fas fa-clock mr-2" />
      View Timetable
    </span>
    <span className="flex justify-around gap-4 items-center">
      <Link
        to="/teacher/add/fee/type"
        className="border border-white bg-[#C19703] text-white transition px-3 py-1 rounded text-sm"
      >
        <i className="fas fa-calendar-alt mr-1" />
        Add Timetable
      </Link>
    </span>
  </div>


  {userData?.assignedClass[0]?.class?.timeTable?.map((timetable) => (
  <div key={timetable._id} className="my-4 border p-4 rounded shadow">
    <h2 className="text-lg font-semibold mb-2">{timetable.day}</h2>
    <table className="w-full border">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-2">Period</th>
          <th className="p-2">Time</th>
          <th className="p-2">Subject</th>
          <th className="p-2">Teacher</th>
        </tr>
      </thead>
      <tbody>
        {timetable.periods.map((period) => (
          <tr key={period._id} className="text-center">
            <td className="p-2">{period.periodNumber}</td>
            <td className="p-2">{period.time}</td>
            <td className="p-2">{period.subject?.name || "N/A"}</td>
            <td className="p-2">{period.teacher?.name || "N/A"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
))}

       </div>
    </div>
  )
}

export default TeacherViewTimetable
