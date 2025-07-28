import React, { useContext, useEffect, useState } from 'react';
import { userDataContext } from '../Context-Api/UserContext';
import axios from 'axios';
import { authDataContext } from '../Context-Api/AuthContext';
import TeacherSidebar from './TeacherSidebar';
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader';
import { Link } from 'react-router-dom';

const MarkAttendance = () => {
  const { userData } = useContext(userDataContext);
  const { serverUrl } = useContext(authDataContext);
  //const classes = userData?.assignedClass?.class || []
  const classes = userData?.assignedClass?.flatMap(ac => ac.class) || [];

  const [date, setDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [attendanceData, setAttendanceData] = useState({});

  // Initialize attendance data
 /* useEffect(() => {
    const initial = {};
    classes.forEach((cls) => {
      if (cls?.students?.length) {
        initial[cls._id] = cls.students.map((student) => ({
          id: student._id, // Must be MongoDB ObjectId
          name: student.name,
          status: 'Present',
        }));
      }
    });
    setAttendanceData(initial);
  }, [classes]);*/



  useEffect(() => {
  if (Object.keys(attendanceData).length === 0 && classes.length > 0) {
    const initial = {};
    classes.forEach((cls) => {
      if (cls?.students?.length) {
        initial[cls._id] = cls.students.map((student) => ({
          id: String(student._id),
          name: student.name,
          status: 'Present',
        }));
      }
    });
    setAttendanceData(initial);
  }
}, [classes, attendanceData]);

  /*const handleStatusChange = (classId, studentId, status) => {
    setAttendanceData((prev) => ({
      ...prev,
      [classId]: prev[classId].map((student) =>
        student.id === studentId ? { ...student, status } : student
      ),
    }));
   };*/

   const handleStatusChange = (classId, studentId, status) => {
  //console.log(`Updating status of ${studentId} in class ${classId} to ${status}`);
  setAttendanceData((prev) => ({
    ...prev,
    [classId]: prev[classId].map((student) =>
      student.id === String(studentId) ? { ...student, status } : student
    ),
  }));
};


  const handleSubmit = async (e) => {
    e.preventDefault();

    const finalAttendance = [];

    for (const classId in attendanceData) {
      attendanceData[classId].forEach((student) => {
        finalAttendance.push({
          classId, // Now sending actual _id
          studentId: student.id, // Now using correct ObjectId
          status: student.status,
          date, // YYYY-MM-DD string is fine
        });
      });
    }

    try {
      const response = await axios.post(
        `${serverUrl}/api/teacher/Mark/Attendance`,
        { attendance: finalAttendance },
        { withCredentials: true }
      );
    //  console.log('Backend response:', response.data);
      alert('Attendance submitted successfully!');
    } catch (error) {
      //console.error('Error submitting attendance:', error);
      alert(
        error.response?.data?.error ||
        'Failed to submit attendance. Check server or network.'
      );
    }
  };
  return (
    <div className="min-h-screen w-full bg-white flex flex-col md:flex-row">
      <TeacherSidebar />
      <main className="flex-1 mt-0 flex flex-col px-3 items-center w-full h-full gap-3">
        <AdminTeachDashboardHeader/>
         {/* Header */}
          <div className="bg-[hsl(240,98%,18%)] w-full text-white text-center py-3 px-2 rounded flex items-center justify-between">
            <span className="text-xl  font-semibold">
              <i className="fas fa-clock mr-2" />
              Mark Attendance
            </span>
            <div className="flex justify-end">
<span className="px-2 py-1 rounded bg-[#c19703]">
  <Link to="/teacher/view/attendance">View Attendance</Link>
</span>
            </div>
          </div>
        <div className="w-full  bg-white rounded-lg border border-grey-300 shadow p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block font-semibold mb-1">Select Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>

            {classes.map((cls) => (
              <div key={cls._id} className="mb-8">
                <h2 className="text-xl font-bold mb-2 text-gray-700">
                  Class: {cls.name} - Section: {cls.section}
                </h2>
                <table className="w-full border border-gray-300 text-center">
                  <thead className="bg-[rgb(1,1,93)] text-white">
                    <tr>
                      <th className="py-2 px-4 border">Student Name</th>
                      <th className="py-2 px-4 border">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {attendanceData[cls._id]?.map((student) => (
                      <tr key={`${cls._id}-${student.id}`}>
                        <td className="py-2 px-4 border">{student.name}</td>
                        <td className="py-2 px-4 border">
                          <select
                            value={student.status}
                            onChange={(e) =>
                              handleStatusChange(cls._id, student.id, e.target.value)
                            }
                             className={student.status === "Absent" ? " text-red-500 border rounded px-2 py-1":" text-black border rounded px-2 py-1"}
                          >
                            <option value="Present">Present</option>
                            <option value="Absent">Absent</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
<div className="flex items-center justify-center">
<button
              type="submit"
              className="mt-6 bg-blue-600 w-fit text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Submit Attendance
            </button>
</div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default MarkAttendance;
