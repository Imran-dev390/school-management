 import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { adminDataContext } from "../Context-Api/AdminContext";
import { userDataContext } from "../Context-Api/UserContext";
import { authDataContext } from "../Context-Api/AuthContext";
import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
const DashboardCard = ({ title, value, color }) => (
  <div className={`p-4 rounded-lg shadow text-white ${color} transform hover:scale-105 transition-transform duration-300`}>
    <h3 className="text-sm">{title}</h3>
    <p className="text-xl font-bold">{value}</p>
  </div>
);

const TeacherDashboard = () => {
  const { userData ,permissions} = useContext(userDataContext);
  const { serverUrl } = useContext(authDataContext);
 
  const [publishMarksModal, setPublishMarksModal] = useState(false);
  const [studentMarks, setStudentMarks] = useState({});
  const [selectedClassForMarks, setSelectedClassForMarks] = useState(null);
  const [showNotif, setShowNotif] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [announcement, setAnnouncement] = useState({ title: "", message: "", classes: [] });
 //const assignedClass = userData?.assignedClass?.class || [];
//  const assignedClass = userData?.assignedClass?.flatMap(ac => ac.class) || [];
// const allStudents = assignedClass.flatMap(cls => cls.students || []);
// // const allStudents = assignedClass.flatMap(cls => cls.students || []);
 // console.log("assginecLASS", assignedClass);
   //console.log("all students",allStudents)

   const assignedClass = userData?.assignedClass?.flatMap(ac => ac.class) || [];

const inChargeClass = assignedClass.find(cls =>
  cls.students?.some(student => student.Classs?._id === cls._id)
);

// Optional: fallback if no in-charge class is found
const filteredStudents = inChargeClass
  ? inChargeClass.students?.filter(student => student.Classs?._id === inChargeClass._id) || []
  : [];

  const notifications = ["Meeting at 3PM", "Grade submissions due", "New resources uploaded"];

  const handlePublishMarks = (cls) => {
    setSelectedClassForMarks(cls);
    const initialMarks = {};
    cls.students.forEach(student => {
      initialMarks[student._id] = '';
    });
    setStudentMarks(initialMarks);
    setPublishMarksModal(true);
  };

  const handleMarksChange = (studentId, value) => {
    setStudentMarks(prev => ({
      ...prev,
      [studentId]: value
    }));
  };

  const submitMarks = async () => {
    try {
      const res = await axios.post(`${serverUrl}/api/teacher/publishMarks`, {
        classId: selectedClassForMarks._id,
        marks: studentMarks
      }, { withCredentials: true });

      if (res.status === 200) {
        alert("Marks published successfully!");
        setPublishMarksModal(false);
      }
    } catch (err) {
      alert("Failed to publish marks.");
    }
  };

  const handleAnnouncementChange = (e) => {
    const { name, value } = e.target;
    setAnnouncement(prev => ({ ...prev, [name]: value }));
  };

  const handleClassSelection = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(option => option.value);
    setAnnouncement(prev => ({ ...prev, classes: selectedOptions }));
  };

  const handleSubmitAnnouncement = async () => {
    try {
      const res = await axios.post(`${serverUrl}/api/teacher/Add/Announcement`, {
        title: announcement.title,
        message: announcement.message,
        classes: announcement.classes,
      }, { withCredentials: true });

      if (res.status === 200) {
        alert("Created Announcement Successfully!");
        setAnnouncement({ title: "", message: "", classes: [] });
        setShowModal(false);
      }
    } catch (err) {
      alert(err?.response?.data?.message || "Something went wrong.");
      setShowModal(false);
    }
  };

  const handleLeaveDetails = (student) => {
    setSelectedStudent(student);
  };
  const closeLeaveModal = () => {
    setSelectedStudent(null);
  };
useEffect(()=>{
 if(userData){
 // console.log("userData in useEffect",userData)
//  alert("User data is ready to user")
 }
},[userData])
console.log("userData",permissions);
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
     <TeacherSidebar/>

      {/* Main Dashboard */}
      <div className="flex-1 p-6">
        {/* Top Navbar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Welcome, Teacher {userData.name} 👩‍🏫</h1>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
            >
              + Add Announcement
            </button>
            <div className="relative flex items-center">
              <button
                onClick={() => setShowNotif(!showNotif)}
                className="text-gray-600 hover:text-blue-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 
                    6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C8.67 
                    6.165 8 7.388 8 8.75v5.408c0 .538-.214 
                    1.055-.595 1.437L6 17h5m4 0v1a3 3 0 
                    01-6 0v-1h6z" />
                </svg>
              </button>
              <div className="bg-red-500 text-white rounded-full px-2 text-xs ml-1">
                {notifications.length}
              </div>
              {showNotif && (
                <div className="absolute right-0 top-8 w-64 bg-white shadow-xl rounded-md p-4 z-50 animate-fade-in">
                  <h4 className="font-semibold text-gray-800 mb-2">Notifications</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {notifications.map((note, i) => (
                      <li key={i} className="border-b pb-2">{note}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <DashboardCard title="Total Classes" value={assignedClass.length} color="bg-blue-500" />
          <DashboardCard title="Assignments Given" value="14" color="bg-green-500" />
          <DashboardCard title="Students" value={filteredStudents.length} color="bg-yellow-500" />
          <DashboardCard title="Messages" value="5 New" color="bg-purple-500" />
        </div>

        {/* Publish Marks Buttons */}
        <div className="flex flex-wrap gap-2 justify-end mb-4">
          {assignedClass.map((cls, index) => (
            <button
              key={index}
              onClick={() => handlePublishMarks(cls)}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Publish Marks for {cls.name}
            </button>
          ))}
        </div>

        {/* Student Table */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-4">Student Details With Class Wise</h2>
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="text-gray-600">
                <th className="py-2">Name</th>
                <th className="py-2">Leave Count</th>
                <th className="py-2">Class Name</th>
                <th className="py-2">Subjects</th>
              </tr>
            </thead>
              {/* {assignedClass.map((cls, classIndex) =>
                (cls.students || []).map((student, studentIndex) => (
                  <tr key={`${classIndex}-${studentIndex}`} className="border-t">
                    <td className="py-2">{student.name}</td>
                    <td className="py-2">
                      {student.leave ? student.leave.length : 0}
                      <button
                        onClick={() => handleLeaveDetails(student)}
                        className="ml-2 text-blue-600 hover:underline"
                      >
                        View Leaves
                      </button>
                    </td>
                    <td className="py-2">{cls.name || "N/A"}</td>
                    <td className="py-2">
                      {Array.isArray(userData.teachSubject) && userData.teachSubject.length > 0
                        ? userData.teachSubject.map(sub => sub.name).join(", ")
                        : "Not Assigned"}
                    </td>
                  </tr>
                ))
              )} */}

              <tbody>
  {filteredStudents.length === 0 ? (
    <tr>
      <td colSpan="4" className="text-center text-gray-500 py-4">
        No students found for your in-charge class.
      </td>
    </tr>
  ) : (
    filteredStudents.map((student, index) => (
      <tr key={student._id} className="border-t">
        <td className="py-2">{student.name}</td>
        <td className="py-2">
          {student.leave?.length || 0}
          <button
            onClick={() => handleLeaveDetails(student)}
            className="ml-2 text-blue-600 hover:underline"
          >
            View Leaves
          </button>
        </td>
        <td className="py-2">{inChargeClass?.name || "N/A"}</td>
        <td className="py-2">
          {Array.isArray(userData.teachSubject) && userData.teachSubject.length > 0
            ? userData.teachSubject.map(sub => sub.name).join(", ")
            : "Not Assigned"}
        </td>
      </tr>
    ))
  )}

            </tbody>
          </table>
        </div>

        {/* Publish Marks Modal */}
        {publishMarksModal && selectedClassForMarks && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Publish Marks</h2>
              <div className="space-y-4 max-h-60 overflow-y-auto">
                {selectedClassForMarks.students.map((student) => (
                  <div key={student._id} className="flex justify-between items-center mb-2">
                    <span>{student.name}</span>
                    <input
                      type="number"
                      className="w-20 p-2 border rounded"
                      value={studentMarks[student._id] || ''}
                      onChange={(e) => handleMarksChange(student._id, e.target.value)}
                      placeholder="Marks"
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-end gap-4 mt-4">
                <button
                  onClick={() => setPublishMarksModal(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={submitMarks}
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Publish
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Announcement Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-96">
              <h2 className="text-xl font-semibold mb-4">Create Announcement</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  name="title"
                  value={announcement.title}
                  onChange={handleAnnouncementChange}
                  className="w-full p-2 border rounded"
                  placeholder="Announcement Title"
                />
                <textarea
                  name="message"
                  value={announcement.message}
                  onChange={handleAnnouncementChange}
                  className="w-full p-2 border rounded"
                  rows="4"
                  placeholder="Announcement Message"
                />
                <select
                  multiple
                  className="w-full p-2 border rounded"
                  onChange={handleClassSelection}
                >
                  {assignedClass.map((cls, index) => (
                    <option key={index} value={cls.name}>
                      {cls.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-4 flex justify-end gap-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmitAnnouncement}
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Leave Details Modal */}
{selectedStudent && (
  <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white rounded-lg shadow-lg p-6 w-96">
      <h2 className="text-xl font-semibold mb-4">Leave Details - {selectedStudent.name}</h2>
      <ul className="space-y-2 max-h-60 overflow-y-auto">
        {selectedStudent.leave && selectedStudent.leave.length > 0 ? (
          selectedStudent.leave.map((leave, index) => (
            <li key={index} className="border p-2 rounded bg-gray-100 text-md">
              {/* Customize this as per your leave structure  
               {leave.date.slice(0,10) || "N/A"}
              */}
              <div className="mt-2"><strong>Date:</strong>  {leave?.date ? new Date(leave.date).toLocaleDateString() : "N/A"}</div>
              <div className="mt-2"><strong>Reason:</strong> {leave.leave || "N/A"}</div>
            </li>
          ))
        ) : (
          <li className="text-gray-500">No leave records available.</li>
        )}
      </ul>
      <div className="flex justify-end mt-4">
        <button
          onClick={closeLeaveModal}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default TeacherDashboard;
