 import React, { useContext, useEffect, useState } from 'react'
 import AdminLayout from './AdminLayout'
 import AdminTeachDashboardHeader from './AdminTeachDashboardHeader'
import { adminDataContext } from '../Context-Api/AdminContext';
import { authDataContext } from '../Context-Api/AuthContext';
import axios from 'axios';
// const StudentPromotion = () => {
//   return (
//     <AdminLayout adminName='Bright Future'>
//         <div className="main w-full h-full mt-4 flex flex-col gap-3">
//       <AdminTeachDashboardHeader/>
//       </div>
//     </AdminLayout>
//   )
// }

// export default StudentPromotion

// const StudentPromotion = () => {
//   const [promoteToSession, setPromoteToSession] = useState("");
//   const {adminData,fetchAdminData} = useContext(adminDataContext);
//   const {sessions = [],classes = []} = adminData?.admin || {};
//   const [fromClass, setFromClass] = useState("");
//   const [toClass, setToClass] = useState("");

//   //const sessions = ["2026-2027"];
// //   const classes = [
// //     { id: 1, name: "1st" },
// //     { id: 2, name: "2nd" },
// //     { id: 3, name: "3rd" },
// //     { id: 4, name: "4th" },
// //     { id: 5, name: "5th" },
// //     { id: 6, name: "6th" },
// //     { id: 7, name: "7th" },
// //     { id: 8, name: "8th" },
// //     { id: 13, name: "LKG" },
// //     { id: 14, name: "UKG" },
// //     { id: 15, name: "PLAY" }
// //   ];

// useEffect(()=>{
//      fetchAdminData();
// },[fetchAdminData])
//   return (
//     <AdminLayout adminName="Bright Future">
//       <div className="main w-full h-full mt-4 flex flex-col gap-3">
//         <AdminTeachDashboardHeader />
// <div className="w-full text-white p-3 rounded-md bg-[rgb(1,1,93)] flex justify-center items-center border-b pb-3">
//           <h2 className="text-lg font-semibold flex items-center gap-2">
//             <i className="fas fa-calendar-alt" /> Student Promotion
//           </h2>
//         </div>
//         <form className="bg-white border border-gray-300 shadow-sm rounded-md p-6 max-w-5xl ">
//           {/* Info note */}
//           <div className="bg-blue-100 text-blue-800 px-4 py-3 rounded mb-4 text-sm">
//             <strong>Note:</strong> Promoting student from the present class to the
//             next class will create an enrollment of that student for the next session.
//           </div>

//           {/* Section heading */}
//           <div className="mb-6">
//             <h2 className="text-lg font-semibold text-gray-800">
//               Promotion
//               <br />
//               <small className="text-sm text-gray-600">
//                 <em>Select class to promote, next session and new class.</em>
//               </small>
//             </h2>
//           </div>

//           {/* Form fields */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Current Session */}
//             <div>
//               <label className="font-semibold mb-1 block">Current Session:</label>
//               <div className="ml-1 text-gray-700">2025-2026</div>
//             </div>

//             {/* Promote to Session */}
//             <div>
//               <label htmlFor="promoteToSession" className="font-semibold block mb-1">
//                 <span className="text-red-500">*</span> Promote to Session:
//               </label>
//               <select
//                 id="promoteToSession"
//                 value={promoteToSession}
//                 onChange={(e) => setPromoteToSession(e.target.value)}
//                 className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 <option value="">Select Next Session</option>
//                 {sessions.map((session) => (
//                   <option key={session} value={session}>
//                     {session}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* From Class */}
//             <div>
//               <label htmlFor="fromClass" className="font-semibold block mb-1">
//                 <span className="text-red-500">*</span> Promotion From Class:
//               </label>
//               <select
//                 id="fromClass"
//                 value={fromClass}
//                 onChange={(e) => setFromClass(e.target.value)}
//                 className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 <option value="">Select Class</option>
//                 {classes.map((cls) => (
//                   <option key={cls.id} value={cls.id}>
//                     {cls.name}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* To Class */}
//             <div>
//               <label htmlFor="toClass" className="font-semibold block mb-1">
//                 <span className="text-red-500">*</span> Promotion To Class:
//               </label>
//               <select
//                 id="toClass"
//                 value={toClass}
//                 onChange={(e) => setToClass(e.target.value)}
//                 className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 <option value="">Select Class</option>
//                 {classes.map((cls) => (
//                   <option key={cls.id} value={cls.id}>
//                     {cls.name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           {/* Submit button */}
//           <div className="mt-6 text-center">
//             <button
//               type="button"
//               className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow-sm transition"
//               onClick={() => {
//                 // Handle submission or open student promotion modal
//                 console.log({ promoteToSession, fromClass, toClass });
//               }}
//             >
//               Manage Promotion
//             </button>
//           </div>
//         </form>
//       </div>
//     </AdminLayout>
//   );
// };













// const StudentPromotion = () => {
//   const [promoteToSession, setPromoteToSession] = useState("");
//   const [fromClass, setFromClass] = useState("");
//   const [toClass, setToClass] = useState("");

//   const { adminData, fetchAdminData } = useContext(adminDataContext);
//   const { sessions = [], classes = [] } = adminData?.admin || {};
//   const {students = []} = adminData?.admin || {};

//   useEffect(() => {
//     fetchAdminData();
//   }, [fetchAdminData]);

//   return (
//     <AdminLayout adminName="Bright Future">
//       <div className="main w-full h-full mt-4 flex flex-col gap-3">
//         <AdminTeachDashboardHeader />

//         <div className="w-full text-white p-3 rounded-md bg-[rgb(1,1,93)] flex justify-center items-center border-b pb-3">
//           <h2 className="text-lg font-semibold flex items-center gap-2">
//             <i className="fas fa-calendar-alt" /> Student Promotion
//           </h2>
//         </div>

//         <form className="bg-white border border-gray-300 shadow-sm rounded-md p-6 max-w-5xl">
//           {/* Info note */}
//           <div className="bg-blue-100 text-blue-800 px-4 py-3 rounded mb-4 text-sm">
//             <strong>Note:</strong> Promoting student from the present class to the
//             next class will create an enrollment of that student for the next session.
//           </div>

//           {/* Section heading */}
//           <div className="mb-6">
//             <h2 className="text-lg font-semibold text-gray-800">
//               Promotion
//               <br />
//               <small className="text-sm text-gray-600">
//                 <em>Select class to promote, next session and new class.</em>
//               </small>
//             </h2>
//           </div>

//           {/* Form fields */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Current Session */}
//             <div>
//               <label className="font-semibold mb-1 block">Current Session:</label>
//               <div className="ml-1 text-gray-700">2025-2026</div>
//             </div>

//             {/* Promote to Session */}
//             <div>
//               <label htmlFor="promoteToSession" className="font-semibold block mb-1">
//                 <span className="text-red-500">*</span> Promote to Session:
//               </label>
//               <select
//                 id="promoteToSession"
//                 value={promoteToSession}
//                 onChange={(e) => setPromoteToSession(e.target.value)}
//                 className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 <option value="">Select Next Session</option>
//                 {sessions.map((session) => (
//                   <option key={session._id} value={session._id}>
//                     {(new Date(session.startDate).getFullYear())} - {(new Date(session.endDate).getFullYear())}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Promotion From Class */}
//             <div>
//               <label htmlFor="fromClass" className="font-semibold block mb-1">
//                 <span className="text-red-500">*</span> Promotion From Class:
//               </label>
//               <select
//                 id="fromClass"
//                 value={fromClass}
//                 onChange={(e) => setFromClass(e.target.value)}
//                 className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 <option value="">Select Class</option>
//                 {classes.map((cls) => (
//                   <option key={cls._id} value={cls._id}>
//                     {cls.name} {cls.section ? `- ${cls.section}` : ""}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Promotion To Class */}
//             <div>
//               <label htmlFor="toClass" className="font-semibold block mb-1">
//                 <span className="text-red-500">*</span> Promotion To Class:
//               </label>
//               <select
//                 id="toClass"
//                 value={toClass}
//                 onChange={(e) => setToClass(e.target.value)}
//                 className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 <option value="">Select Class</option>
//                 {classes.map((cls) => (
//                   <option key={cls._id} value={cls._id}>
//                     {cls.name} {cls.section ? `- ${cls.section}` : ""}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="mt-6 text-center">
//             <button
//               type="button"
//               onClick={() =>
//                 console.log({ promoteToSession, fromClass, toClass })
//               }
//               className="bg-[#c19703] text-white px-6 py-2 rounded shadow-sm transition"
//             >
//               Manage Promotion
//             </button>
//           </div>
//         </form>
//       </div>
//     </AdminLayout>
//   );
// };










// const StudentPromotion = () => {
//   const [promoteToSession, setPromoteToSession] = useState("");
//   const [fromClass, setFromClass] = useState("");
//   const [toClass, setToClass] = useState("");
//   const [selectedStudents, setSelectedStudents] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const { adminData, fetchAdminData } = useContext(adminDataContext);
//   const { sessions = [], classes = [], students = [] } = adminData?.admin || {};
//   useEffect(() => {
//     fetchAdminData();
//   }, [fetchAdminData]);
// console.log("students",students);
//   // Get current session
//   const currentSession = sessions.find(s => {
//     const start = new Date(s.startDate);
//     const end = new Date(s.endDate);
//     const now = new Date();
//     return now >= start && now <= end;
//   });
// console.log("current",currentSession);  // Sort and find the next session
//   const sortedSessions = [...sessions].sort((a, b) =>
//     new Date(a.startDate) - new Date(b.startDate)
//   );

//   const currentIndex = sortedSessions.findIndex(s => s._id === currentSession?._id);
//   const nextSession = sortedSessions[currentIndex + 1];

//   // When Manage Promotion is clicked
//   const handlePromotionClick = () => {
//     if (!promoteToSession) {
//       alert("⚠️ Please select the next session first.");
//       setShowForm(false);
//       return;
//     }

//     if (!fromClass || !toClass) {
//       alert("⚠️ Please select both From Class and To Class.");
//       setShowForm(false);
//       return;
//     }

//     // Show the promotion form
//     setShowForm(true);
//   };

//   // Filter students for selected class
//   const filteredStudents = students.filter(student => student.Classs?._id === fromClass);

//   // Checkbox selection
//   const handleCheckboxChange = (studentId) => {
//     setSelectedStudents((prev) =>
//       prev.includes(studentId)
//         ? prev.filter((id) => id !== studentId)
//         : [...prev, studentId]
//     );
//   };

//   return (
//     <AdminLayout adminName="Bright Future">
//       <div className="main w-full h-full mt-4 flex flex-col gap-3">
//         <AdminTeachDashboardHeader />

//         <div className="w-full text-white p-3 rounded-md bg-[rgb(1,1,93)] flex justify-center items-center border-b pb-3">
//           <h2 className="text-lg font-semibold flex items-center gap-2">
//             <i className="fas fa-calendar-alt" /> Student Promotion
//           </h2>
//         </div>

//         <form className="bg-white border border-gray-300 shadow-sm rounded-md p-6 max-w-5xl">
//           <div className="bg-blue-100 text-blue-800 px-4 py-3 rounded mb-4 text-sm">
//             <strong>Note:</strong> Promoting a student will create an enrollment for the next session.
//           </div>

//           <div className="mb-6">
//             <h2 className="text-lg font-semibold text-gray-800">
//               Promotion
//               <br />
//               <small className="text-sm text-gray-600">
//                 <em>Select current class, next session, and new class.</em>
//               </small>
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label className="font-semibold mb-1 block">Current Session:</label>
//               <div className="ml-1 text-gray-700">
//                  {new Date(currentSession.startDate).getFullYear()} - {new Date(currentSession.endDate).getFullYear()} 
//               </div>
//             </div>

//             <div>
//               <label htmlFor="promoteToSession" className="font-semibold block mb-1">
//                 <span className="text-red-500">*</span> Promote to Session:
//               </label>
//               <select
//                 id="promoteToSession"
//                 value={promoteToSession}
//                 onChange={(e) => setPromoteToSession(e.target.value)}
//                 className="w-full border border-gray-300 rounded px-3 py-2"
//               >
//                 <option value="">Select Next Session</option>
//                 {nextSession && (
//                   <option value={nextSession._id}>
//                     {new Date(nextSession.startDate).getFullYear()} - {new Date(nextSession.endDate).getFullYear()}
//                   </option>
//                 )}
//               </select>
//               {!nextSession && (
//                 <p className="text-red-600 text-sm mt-1">⚠️ Please create a new session first.</p>
//               )}
//             </div>

//             <div>
//               <label htmlFor="fromClass" className="font-semibold block mb-1">
//                 <span className="text-red-500">*</span> From Class:
//               </label>
//               <select
//                 id="fromClass"
//                 value={fromClass}
//                 onChange={(e) => setFromClass(e.target.value)}
//                 className="w-full border border-gray-300 rounded px-3 py-2"
//               >
//                 <option value="">Select Class</option>
//                 {classes.map((cls) => (
//                   <option key={cls._id} value={cls._id}>
//                     {cls.name} {cls.section ? `- ${cls.section}` : ""}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <label htmlFor="toClass" className="font-semibold block mb-1">
//                 <span className="text-red-500">*</span> To Class:
//               </label>
//               <select
//                 id="toClass"
//                 value={toClass}
//                 onChange={(e) => setToClass(e.target.value)}
//                 className="w-full border border-gray-300 rounded px-3 py-2"
//               >
//                 <option value="">Select Class</option>
//                 {classes.map((cls) => (
//                   <option key={cls._id} value={cls._id}>
//                     {cls.name} {cls.section ? `- ${cls.section}` : ""}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           <div className="mt-6 text-center">
//             <button
//               type="button"
//               onClick={handlePromotionClick}
//               className="bg-[#c19703] text-white px-6 py-2 rounded shadow-sm"
//             >
//               Manage Promotion
//             </button>
//           </div>
//         </form>

//         {/* Show promotion form if valid */}
//         {showForm && (
//           <div className="bg-white mt-6 border border-gray-300 shadow-md rounded-md p-6 max-w-5xl">
//             <h3 className="text-lg font-semibold mb-4">Select Students to Promote</h3>
//             {filteredStudents.length > 0 ? (
//               <ul className="space-y-2 max-h-64 overflow-y-auto">
//                 {filteredStudents.map((student) => (
//                   <li key={student._id} className="flex items-center gap-3 border-b py-2">
//                     <input
//                       type="checkbox"
//                       checked={selectedStudents.includes(student._id)}
//                       onChange={() => handleCheckboxChange(student._id)}
//                       className="h-4 w-4"
//                     />
//                     <span>{student.name} ({student.rollNumber})</span>
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p className="text-gray-600">No students found in this class.</p>
//             )}

//             <div className="mt-6 text-right">
//               <button
//                 className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded"
//                 onClick={() => {
//                   // TODO: implement API call to promote selectedStudents
//                   console.log("Promote", selectedStudents, "to class", toClass, "for session", promoteToSession);
//                 }}
//               >
//                 Confirm Promotion
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </AdminLayout>
//   );
// };





























// const StudentPromotion = () => {
//   const [promoteToSession, setPromoteToSession] = useState("");
//   const [fromClassName, setFromClassName] = useState("");
//   const [fromSection, setFromSection] = useState("");
//   const [toClass, setToClass] = useState("");
//   const [showForm, setShowForm] = useState(false);
//   const [selectedStudents, setSelectedStudents] = useState([]);

//   const { adminData, fetchAdminData } = useContext(adminDataContext);
//   const { sessions = [], classes = [], students = [] } = adminData?.admin || {};

//   useEffect(() => {
//     fetchAdminData();
//   }, []);

//   // Determine current and next session
//   const currentDate = new Date();
//   const sortedSessions = [...sessions].sort(
//     (a, b) => new Date(a.startDate) - new Date(b.startDate)
//   );
//   const currentSession = sortedSessions.find(
//     (s) => new Date(s.startDate) <= currentDate && currentDate <= new Date(s.endDate)
//   );
//   const nextSession = sortedSessions.find(
//     (s) => new Date(s.startDate) > new Date(currentSession?.endDate)
//   );

//   useEffect(() => {
//     if (nextSession) setPromoteToSession(nextSession._id);
//   }, [nextSession]);

//   // Sections belonging to selected class
//   const filteredSections = classes.filter((cls) => cls.name === fromClassName);

//   // From-class section selected object
//   const fromClassObj = classes.find(
//     (cls) => cls.name === fromClassName && cls.section === fromSection
//   );

//   // Students belonging to that class and section
//   const filteredStudents = students.filter(
//     (s) => s.Classs?._id === fromClassObj?._id
//   );

//   const handlePromotionClick = () => {
//     if (!promoteToSession || !fromClassName || !fromSection || !toClass) {
//       alert("⚠️ Please select session, class, section and target class.");
//       setShowForm(false);
//       return;
//     }
//     setShowForm(true);
//   };

//   const handleCheckboxToggle = (studentId) => {
//     setSelectedStudents((prev) =>
//       prev.includes(studentId)
//         ? prev.filter((id) => id !== studentId)
//         : [...prev, studentId]
//     );
//   };

//   const getClassLabel = (id) => {
//     const cls = classes.find((c) => c._id === id);
//     return cls ? `${cls.name}${cls.section ? " - " + cls.section : ""}` : "N/A";
//   };

//   return (
//     <AdminLayout adminName="Bright Future">
//       <div className="main w-full h-full mt-4 flex flex-col gap-3">
//         <AdminTeachDashboardHeader />

//         <div className="w-full text-white p-3 rounded-md bg-[rgb(1,1,93)] flex justify-center items-center border-b pb-3">
//           <h2 className="text-lg font-semibold flex items-center gap-2">
//             <i className="fas fa-calendar-alt" /> Student Promotion
//           </h2>
//         </div>

//         <form className="bg-white border border-gray-300 shadow-sm rounded-md p-6 max-w-5xl">
//           <div className="bg-blue-100 text-blue-800 px-4 py-3 rounded mb-4 text-sm">
//             <strong>Note:</strong> Promote students from one class section to another for the next session.
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Current & Promote to Session */}
//             <div>
//               <label className="font-semibold block mb-1">Current Session:</label>
//               <div className="text-gray-700">
//                 {currentSession
//                   ? `${new Date(currentSession.startDate).getFullYear()} - ${new Date(currentSession.endDate).getFullYear()}`
//                   : "N/A"}
//               </div>
//             </div>

//             <div>
//               <label className="font-semibold block mb-1">Promote To Session:</label>
//               <select
//                 className="w-full border border-gray-300 rounded px-3 py-2"
//                 value={promoteToSession}
//                 onChange={(e) => setPromoteToSession(e.target.value)}
//               >
//                 <option value="">Select Next Session</option>
//                 {nextSession && (
//                   <option value={nextSession._id}>
//                     {new Date(nextSession.startDate).getFullYear()} -{" "}
//                     {new Date(nextSession.endDate).getFullYear()}
//                   </option>
//                 )}
//               </select>
//               {!nextSession && (
//                 <p className="text-red-600 text-sm mt-1">⚠️ Please create a new session first.</p>
//               )}
//             </div>

//             {/* From Class and Section */}
//             <div>
//               <label className="font-semibold block mb-1">Promotion From Class:</label>
//               <select
//                 value={fromClassName}
//                 onChange={(e) => {
//                   setFromClassName(e.target.value);
//                   setFromSection(""); // Reset section
//                 }}
//                 className="w-full border border-gray-300 rounded px-3 py-2"
//               >
//                 <option value="">Select Class</option>
//                 {[...new Set(classes.map((cls) => cls.name))].map((className) => (
//                   <option key={className} value={className}>
//                     {className}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {fromClassName && (
//               <div>
//                 <label className="font-semibold block mb-1">Promotion From Section:</label>
//                 <select
//                   value={fromSection}
//                   onChange={(e) => setFromSection(e.target.value)}
//                   className="w-full border border-gray-300 rounded px-3 py-2"
//                 >
//                   <option value="">Select Section</option>
//                   {filteredSections.map((cls) => (
//                     <option key={cls._id} value={cls.section}>
//                       {cls.section}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             )}

//             {/* To Class (can be sectioned too if needed) */}
//             <div className="md:col-span-2">
//               <label className="font-semibold block mb-1">Promotion To Class/Section:</label>
//               <select
//                 value={toClass}
//                 onChange={(e) => setToClass(e.target.value)}
//                 className="w-full border border-gray-300 rounded px-3 py-2"
//               >
//                 <option value="">Select Destination Class/Section</option>
//                 {classes.map((cls) => (
//                   <option key={cls._id} value={cls._id}>
//                     {cls.name} {cls.section ? `- ${cls.section}` : ""}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           <div className="mt-6 text-center">
//             <button
//               type="button"
//               onClick={handlePromotionClick}
//               className="bg-[#c19703] text-white px-6 py-2 rounded shadow-sm"
//             >
//               Manage Promotion
//             </button>
//           </div>
//         </form>

//         {/* Show students */}
//         {showForm && (
//           <div className="mt-6 bg-white border rounded-md p-6 max-w-5xl">
//             <h3 className="text-lg font-semibold mb-2">Promoting Students</h3>
//             <div className="mb-4 text-sm text-gray-700">
//               From: <strong>{fromClassName} - {fromSection}</strong> → To: <strong>{getClassLabel(toClass)}</strong>
//             </div>

//             {filteredStudents.length > 0 ? (
//               <ul className="divide-y border rounded">
//                 {filteredStudents.map((student) => (
//                   <li key={student._id} className="flex items-center gap-3 p-2">
//                     <input
//                       type="checkbox"
//                       checked={selectedStudents.includes(student._id)}
//                       onChange={() => handleCheckboxToggle(student._id)}
//                     />
//                     <span>{student.name}</span>
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p className="text-gray-600">No students found in this class section.</p>
//             )}

//             <div className="mt-6 text-right">
//               <button
//                 className="bg-green-600 text-white px-5 py-2 rounded"
//                 onClick={() => {
//                   console.log("Promoting:", {
//                     students: selectedStudents,
//                     fromClass: fromClassObj?._id,
//                     toClass,
//                     session: promoteToSession,
//                   });
//                 }}
//               >
//                 Confirm Promotion
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </AdminLayout>
//   );
// };


































const StudentPromotion = () => {
  const {serverUrl}  = useContext(authDataContext);
  const [promoteToSession, setPromoteToSession] = useState("");
  const [fromClassName, setFromClassName] = useState("");
  const [toClass, setToClass] = useState("");
  const [fromSection, setFromSection] = useState("");
  const [toSection, setToSection] = useState("");
  const [showSections, setShowSections] = useState(false);
  const [showStudents, setShowStudents] = useState(false);
  const [selectedStudents, setSelectedStudents] = useState([]);
///promote/students
  const { adminData, fetchAdminData } = useContext(adminDataContext);
  const { sessions = [], classes = [], students = [] } = adminData?.admin || {};

  useEffect(() => {
    fetchAdminData();
  }, [fetchAdminData]);

  console.log("sessions",sessions);

  // Current and next session detection
  const currentDate = new Date();
  const sortedSessions = [...sessions].sort(
    (a, b) => new Date(a.startDate) - new Date(b.startDate)
  );

  // const currentSession = sortedSessions.find(
  //   (s) => new Date(s.startDate) <= currentDate && currentDate <= new Date(s.endDate)
  // );

//   const currentSession = sortedSessions.find((s, i) => {
//   const start = new Date(s.startDate);
//   const end = new Date(s.endDate);
//   const next = sortedSessions[i + 1];
//   return (
//     start <= currentDate && currentDate <= end
//   ) || (
//     i === 0 && currentDate < start
//   );
// });


const currentSession = sortedSessions.find((s) => {
  const start = new Date(s.startDate);
  const end = new Date(s.endDate);
  return start <= currentDate && currentDate <= end;
});

// If no active session, fallback to nearest upcoming session
const fallbackSession = sortedSessions.find((s) => new Date(s.startDate) > currentDate);

const displaySession = currentSession || fallbackSession;


// const nextSession = sortedSessions.find((s) => {
//   const start = new Date(s.startDate);
//   if (currentSession) {
//     const currentEnd = new Date(currentSession.endDate);
//     return start === currentEnd;
//   } else {
//     return start < currentDate;
//   }
// });

const normalize = (date) => {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
};
const today = normalize(currentDate);
// const nextSessions = sessions.filter(
//   (session) => currentSession && session._id !== currentSession._id
// );

// const nextSessions = sortedSessions.filter((s) => {
//   if (!currentSession) return new Date(s.startDate) > currentDate;
//   return new Date(s.startDate) > new Date(currentSession.endDate);
// });


// const nextSession = sessions.map((session)=>{
//   if (session === currentSession){
//          return false;
//   } else{
//     return session;
//   }
// })
// const nextSession = sessions.filter((session)=> session._id !== currentSession);
// console.log("nextSession",nextSession);
// const nextSession = sortedSessions.find((s) => {
//   const start = normalize(s.startDate);
//   if (currentSession) {
//     const currentEnd = normalize(currentSession.endDate);
//     return start > currentEnd;
//   } else {
//     return start > currentDate;
//   }
// });

const nextSession = sortedSessions.find((s) => {
  const start = normalize(s.startDate);
  if (currentSession) {
    const findSess = sessions.find((session)=>session._id !== currentSession);
    return false;
  } else {
    return true;
  //  return start > currentDate;
  }
});

  useEffect(() => {
    if (nextSession) setPromoteToSession(nextSession._id);
  }, [nextSession]);

  useEffect(() => {
  if (sessions.length > 0 && nextSession) {
    setPromoteToSession(nextSession._id);
  }
}, [sessions, nextSession]);


useEffect(() => {
  console.log("=== ALL SESSIONS ===");
  sortedSessions.forEach((s) =>
    console.log(
      `${new Date(s.startDate).toDateString()} - ${new Date(s.endDate).toDateString()}`
    )
  );

  console.log("Current Date:", currentDate.toDateString());

  if (currentSession) {
    console.log("✅ Current Session:", {
      start: new Date(currentSession.startDate).toDateString(),
      end: new Date(currentSession.endDate).toDateString(),
    });
  } else {
    console.log("❌ No Current Session Found");
  }

  if (nextSession) {
    console.log("✅ Next Session:", {
      start: new Date(nextSession.startDate).toDateString(),
      end: new Date(nextSession.endDate).toDateString(),
    });
  } else {
    console.log("❌ No Next Session Found");
  }
}, [sessions]);

  const handlePromotionClick = () => {
    if (!promoteToSession) {
      alert("⚠️ Please create and select a new session first.");
      return;
    }
//     if (!promoteToSession) {
//   // FOR TESTING: Simulate a session even if none is created
//   const dummySessionId = "test-session-id";
//   setPromoteToSession(dummySessionId);
//   console.warn("⚠️ No session selected, using test session.");
// }

    if (!fromClassName || !toClass) {
      alert("⚠️ Please select both From and To classes.");
      return;
    }

    setShowSections(true);
    setShowStudents(false); // Reset in case
  };

  const handleSectionSelection = () => {
    if (!fromSection || !toSection) {
      alert("⚠️ Please select both From and To sections.");
      return;
    }

    setShowStudents(true);
  };

  const filteredSectionsFrom = classes.filter(cls => cls.name === fromClassName);
  const filteredSectionsTo = classes.filter(cls => cls._id === toClass);
//const filteredSectionsFrom = classes.filter(cls => cls.name === fromClassName);
//const filteredSectionsTo = classes.filter(cls => cls.name === toClass);

  // const fromClassObj = classes.find(
  //   (cls) => cls.name === fromClassName && cls.section === fromSection
  // );

  const fromClassObj = classes.find(
  (cls) => cls.name === fromClassName && cls.section === fromSection
);

  const filteredStudents = students.filter(
    (s) => s.Classs?._id === fromClassObj?._id
  );

  const handleCheckboxToggle = (studentId) => {
    setSelectedStudents((prev) =>
      prev.includes(studentId)
        ? prev.filter((id) => id !== studentId)
        : [...prev, studentId]
    );
  };
  const getClassLabel = (id) => {
    const cls = classes.find((c) => c._id === id);
    return cls ? `${cls.name}${cls.section ? " - " + cls.section : ""}` : "N/A";
  };

  return (
    <AdminLayout adminName="Bright Future">
      <div className="main w-full h-full mt-4 flex flex-col gap-3">
        <AdminTeachDashboardHeader />

        <div className="w-full text-white p-3 rounded-md bg-[rgb(1,1,93)] flex justify-center items-center border-b pb-3">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <i className="fas fa-calendar-alt" /> Student Promotion
          </h2>
        </div>

        <form className="bg-white border border-gray-300 shadow-sm rounded-md p-6 max-w-5xl">
          <div className="bg-blue-100 text-blue-800 px-4 py-3 rounded mb-4 text-sm">
            <strong>Note:</strong> Promote students from one class section to another for the next session.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="font-semibold block mb-1">Current Session:</label>
              <div className="text-gray-700">
                {/* {currentSession
                  ? `${new Date(currentSession.startDate).getFullYear()} - ${new Date(currentSession.endDate).getFullYear()}`
                  : "N/A"} */}
                    {/* {currentSession
    ? `${new Date(currentSession.startDate).getFullYear()} - ${new Date(currentSession.endDate).getFullYear()}`
    : "⚠️ Current session not found"} */}
     {displaySession
    ? `${new Date(displaySession.startDate).getFullYear()} - ${new Date(displaySession.endDate).getFullYear()}`
    : "⚠️ No valid session"}
              </div>
            </div>

            <div>
              <label className="font-semibold block mb-1">Promote To Session:</label>
              {/* <select
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={promoteToSession}
                onChange={(e) => setPromoteToSession(e.target.value)}
              >
                <option value="">Select Next Session</option>
                {nextSession && (
                  <option value={nextSession._id}>
                    {new Date(nextSession.startDate).getFullYear()} - {new Date(nextSession.endDate).getFullYear()}
                  </option>
                )}

                {/* {nextSession ? (
  <option value={nextSession._id}>
    {new Date(nextSession.startDate).getFullYear()} - {new Date(nextSession.endDate).getFullYear()}
  </option>
) : (
  <option value="test-session-id">⚠️ Test Session (no session found)</option>
)} */}

            {/* </div>   */}
            {/* </select> */} 

{/* <select
  className="w-full border border-gray-300 rounded px-3 py-2"
  value={promoteToSession}
  onChange={(e) => setPromoteToSession(e.target.value)}
>
  <option value="">Select Next Session</option>

  {sortedSessions.map((s) => {
    const sessionStart = new Date(s.startDate);
    const sessionEnd = new Date(s.endDate);
    const currentStart = currentSession ? new Date(currentSession.startDate) : null;
    const currentEnd = currentSession ? new Date(currentSession.endDate) : null;

    const isFutureSession =
      currentStart && currentEnd &&
      sessionStart > currentEnd && sessionEnd > currentEnd;

    return (
      <option key={s._id} value={s._id}>
        {isFutureSession
          ? `${sessionStart.getFullYear()} - ${sessionEnd.getFullYear()}`
          : "Not Matching..."}
      </option>
    );
  })}
</select> */}

{/* <select
  className="w-full border border-gray-300 rounded px-3 py-2"
  value={promoteToSession}
  onChange={(e) => setPromoteToSession(e.target.value)}
>
  <option value="">Select Next Session</option>

  {sortedSessions
    .filter((s) => {
      const sessionStartYear = new Date(s.startDate).getFullYear();
      const nextYear = new Date().getFullYear() + 1;
      return sessionStartYear === nextYear;
    })
    .map((s) => (
      <option key={s._id} value={s._id}>
        {new Date(s.startDate).getFullYear()} - {new Date(s.endDate).getFullYear()}
      </option>
    ))}
</select> */}

{/* <select
  className="w-full border border-gray-300 rounded px-3 py-2"
  value={promoteToSession}
  onChange={(e) => setPromoteToSession(e.target.value)}
>
  <option value="">Select Next Session</option>

  {sortedSessions
    .filter((s) => new Date(s.startDate) > new Date()) // All future sessions
    .map((s) => (
      <option key={s._id} value={s._id}>
        {new Date(s.startDate).getFullYear()} - {new Date(s.endDate).getFullYear()}
      </option>
    ))}
</select> */}

{/* <select
  className="w-full border border-gray-300 rounded px-3 py-2"
  value={promoteToSession}
  onChange={(e) => setPromoteToSession(e.target.value)}
>
  <option value="">Select Next Session</option>

  {sortedSessions
    .filter((s) => {
      if (!currentSession) return new Date(s.startDate) > new Date(); // No current = just future
      const currentEnd = new Date(currentSession.endDate);
      return new Date(s.startDate) > currentEnd; // Sessions strictly after current one
    })
    .map((s) => (
      <option key={s._id} value={s._id}>
        {new Date(s.startDate).getFullYear()} - {new Date(s.endDate).getFullYear()}
      </option>
    ))}
</select> */}


{/* <select
  className="w-full border border-gray-300 rounded px-3 py-2"
  value={promoteToSession}
  onChange={(e) => setPromoteToSession(e.target.value)}
>
  <option value="">Select Next Session</option>

  {sortedSessions
    .filter((session) => {
      if (!currentSession) return true; // fallback: show all future sessions
      const currentSessionId = currentSession._id?.toString();
      return session._id.toString() !== currentSessionId; // exclude current session
    })
    .map((session) => {
      const startYear = new Date(session.startDate).getFullYear();
      const endYear = new Date(session.endDate).getFullYear();
      return (
        <option key={session._id} value={session._id}>
          {startYear} - {endYear}
        </option>
      );
    })}
</select> */}

{/* <select
  className="w-full border border-gray-300 rounded px-3 py-2"
  value={promoteToSession}
  onChange={(e) => setPromoteToSession(e.target.value)}
>
  <option value="">Select Next Session</option>

 {sortedSessions
  .filter((session) => {
    const sessionStart = new Date(session.startDate);
    const today = new Date();
    sessionStart.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    return sessionStart > today;
  })
  .map((session) => {
    const startYear = new Date(session.startDate).getFullYear();
    const endYear = new Date(session.endDate).getFullYear();
    return (
      <option key={session._id} value={session._id}>
        {startYear} - {endYear}
      </option>
    );
  })}

</select> */}

{/* 
<select
  className="w-full border border-gray-300 rounded px-3 py-2"
  value={promoteToSession}
  onChange={(e) => setPromoteToSession(e.target.value)}
>
  <option value="">Select Next Session</option>

 {sortedSessions
  .filter((session) => {
    const sessionStart = new Date(session.startDate);
    const today = new Date();
    sessionStart.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    return sessionStart > today;
  })
  .map((session) => {
    const startYear = new Date(session.startDate).getFullYear();
    const endYear = new Date(session.endDate).getFullYear();
    return (
      <option key={session._id} value={session._id}>
        {startYear} - {endYear}
      </option>
    );
  })}

</select> */}
<select
  className="w-full border border-gray-300 rounded px-3 py-2"
  value={promoteToSession}
  onChange={(e) => setPromoteToSession(e.target.value)}
>
  <option value="">Select Next Session</option>

  {sortedSessions
    .filter((session) => {
  const currentId = currentSession?._id?.toString();
  const sessionId = session._id?.toString();
  const start = new Date(session.startDate);
  return sessionId !== currentId && start > new Date(); // Not current & future only
})

      // const currentId = currentSession?._id?.toString();
      // const sessionId = session._id?.toString();

      // return sessionId !== currentId; // ⛔ Remove the current session
    .map((session) => {
      const startYear = new Date(session.startDate).getFullYear();
      const endYear = new Date(session.endDate).getFullYear();
      return (
        <option key={session._id} value={session._id}>
          {startYear} - {endYear}
        </option>
      );
    })}
</select>

            </div>

            <div>
              <label className="font-semibold block mb-1">Promotion From Class:</label>
              <select
                value={fromClassName}
                onChange={(e) => {
                  setFromClassName(e.target.value);
                  setFromSection("");
                }}
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                <option value="">Select Class</option>
                {[...new Set(classes.map((cls) => cls.name))].map((name) => (
                  <option key={name} value={name}>{name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-semibold block mb-1">Promotion To Class:</label>
              {/* <select
                value={toClass}
                onChange={(e) => {
                  setToClass(e.target.value);
                  setToSection("");
                }}
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                <option value="">Select Class</option>
                {classes.map((cls) => (
                  <option key={cls._id} value={cls._id}>
                    {cls.name}
                  </option>
                ))}
              </select> */}
              {/* <select
  value={toClass}
  onChange={(e) => {
    setToClass(e.target.value);
    setToSection("");
  }}
  className="w-full border border-gray-300 rounded px-3 py-2"
>
  <option value="">Select Class</option>
  {[...new Set(classes.map(cls => cls.name))].map((name) => (
    <option key={name} value={name}>
      {name}
    </option>
  ))}
</select> */}

<select
  value={toClass}
  onChange={(e) => setToClass(e.target.value)}
  className="w-full border border-gray-300 rounded px-3 py-2"
>
  <option value="">Select Class</option>
  {classes.map(cls => (
    <option key={cls._id} value={cls._id}>
      {cls.name} - {cls.section}
    </option>
  ))}
</select>


            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={handlePromotionClick}
              className="bg-[#c19703] text-white px-6 py-2 rounded shadow-sm"
            >
              Manage Promotion
            </button>
          </div>
        </form>

        {showSections && (
          <div className="mt-4 bg-white border rounded-md p-6 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="font-semibold block mb-1">From Section:</label>
                <select
                  value={fromSection}
                  onChange={(e) => setFromSection(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                >
                  <option value="">Select Section</option>
                  {filteredSectionsFrom.map((cls) => (
                    <option key={cls._id} value={cls.section}>
                      {cls.section}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-semibold block mb-1">To Section:</label>
                {/* <select
                  value={toSection}
                  onChange={(e) => setToSection(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                >
                  <option value="">Select Section</option>
                  {filteredSectionsTo.length > 0 && (
                    <option value={filteredSectionsTo[0].section}>
                      {filteredSectionsTo[0].section}
                    </option>
                  )}
                </select> */}

                <select
  value={toSection}
  onChange={(e) => setToSection(e.target.value)}
  className="w-full border border-gray-300 rounded px-3 py-2"
>
  <option value="">Select Section</option>
  {filteredSectionsTo.map((cls) => (
    <option key={cls._id} value={cls.section}>
      {cls.section}
    </option>
  ))}
</select>

                {/* <select
  value={toSection}
  onChange={(e) => setToSection(e.target.value)}
  className="w-full border border-gray-300 rounded px-3 py-2"
>
  <option value="">Select Section</option>
  {filteredSectionsTo.map((cls) => (
    <option key={cls._id} value={cls.section}>
      {cls.section}
    </option>
  ))}
</select> */}

              </div>
            </div>

            <div className="mt-4 text-center">
              <button
                className="bg-blue-600 text-white px-5 py-2 rounded"
                onClick={handleSectionSelection}
              >
                Show Students
              </button>
            </div>
          </div>
        )}

        {showStudents && (
          <div className="mt-6 bg-white border rounded-md p-6 max-w-5xl">
            <h3 className="text-lg font-semibold mb-2">Promoting Students</h3>
            <div className="mb-4 text-sm text-gray-700">
              From: <strong>{fromClassName} - {fromSection}</strong> → To: <strong>{getClassLabel(toClass)}</strong>
            </div>

            {filteredStudents.length > 0 ? (
              <ul className="divide-y border rounded">
                {filteredStudents.map((student) => (
                  <li key={student._id} className="flex items-center gap-3 p-2">
                    <input
                      type="checkbox"
                      checked={selectedStudents.includes(student._id)}
                      onChange={() => handleCheckboxToggle(student._id)}
                    />
                    <span>{student.name}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No students found in this class section.</p>
            )}

            <div className="mt-6 text-right">
              <button
                className="bg-green-600 text-white px-5 py-2 rounded"
                onClick={async() => {
                  // console.log("Promoting:", {
                  //   students: selectedStudents,
                  //   fromClass: fromClassObj?._id,
                  //   toClass,
                  //   session: promoteToSession,
                  // });
                  try{
              const apipromo =  await axios.post(`${serverUrl}/api/admin/promote/students`, {
  students: selectedStudents,
  toClass:toClass,
  session: promoteToSession,
},{withCredentials:true});
 if(apipromo.status===200){
  alert(apipromo?.response?.data.message || "Student Promoted Successfulyy");
 }
                  } catch(err){
                    console.log('erronr',err?.response?.data.message || err.message);
                    alert(err?.response?.data.message || err.message)
                  }
                }}
              >
                Confirm Promotion
              </button>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};
export default StudentPromotion;
