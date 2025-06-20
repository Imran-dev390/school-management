// // import React, { useContext } from 'react'
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { authDataContext } from '../Context-Api/AuthContext';
// // import { adminDataContext } from '../Context-Api/AdminContext';
// // const AddExamSchedule = () => {
// //     // url /Add/ExamSchedule
// //   const [classList, setClassList] = useState([]);
// //   const {serverUrl} = useContext(authDataContext);
// //   const {adminData} = useContext(adminDataContext);
// //   const {fetchAdminData} = useContext(adminDataContext);
// //   const classes = adminData?.admin?.classes || [];
// //   const [subjectList, setSubjectList] = useState([]);
// //   const availablesubjects = adminData?.admin?.classes.subjects || [];
// //   const [selectedClass, setSelectedClass] = useState('');
// //   const [subjects, setSubjects] = useState([
// //     { subject: '', date: '', startTime: '', endTime: '', venue: '' }
// //   ]);

// // useEffect(()=>{
// //    fetchAdminData();
// // },[])
// // useEffect(()=>{
// //     if(classes!==null){
// // setClassList(classes);
// //     }
// //   const selected = classes.find(cls => cls.name === selectedClass);
// //   if (selected && selected.subjects) {
// //     setSubjectList(selected.subjects); // set subjectList from selected class
// //   } else {
// //     setSubjectList([]);
// //   }
// // },[selectedClass])
// //   const addSubjectRow = () => {
// //     setSubjects([...subjects, { subject: '', date: '', startTime: '', endTime: '', venue: '' }]);
// //   };

// //   const updateSubjectRow = (index, field, value) => {
// //     const updated = [...subjects];
// //     updated[index][field] = value;
// //     setSubjects(updated);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     await axios.post('/api/exams', {
// //       class: selectedClass,
// //       subjects,
// //     });
// //     setSelectedClass('');
// //     setSubjects([{ subject: '', date: '', startTime: '', endTime: '', venue: '' }]);
// //     onScheduleAdded();
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 rounded space-y-4">
// //       <h2 className="text-xl font-semibold">Create Exam Schedule</h2>

// //       <div>
// //         <label className="block mb-1 font-medium">Select Class</label>
// //         <select
// //           value={selectedClass}
// //           onChange={(e) => setSelectedClass(e.target.value)}
// //           className="w-full p-2 border rounded"
// //           required
// //         >
// //           <option value="">-- Select Class --</option>
// //           {classList.map(cls => (
// //             <option key={cls._id} value={cls.name}>{cls.name}</option>
// //           ))}
// //         </select>
// //       </div>

// //       <div>
// //         <h3 className="font-medium mb-2">Subjects</h3>
// //         {subjects.map((item, idx) => (
// //           <div key={idx} className="grid grid-cols-6 gap-2 mb-3">
// //             <select
// //               className="col-span-2 p-2 border rounded"
// //               value={item.subject}
// //               onChange={(e) => updateSubjectRow(idx, 'subject', e.target.value)}
// //               required
// //             >
// //               <option value="">Subject</option>
// //               {subjectList.map(sub => (
// //                 <option key={sub._id} value={sub.name}>{sub.name}</option>
// //               ))}
// //             </select>
// //             <input
// //               type="date"
// //               className="p-2 border rounded"
// //               value={item.date}
// //               onChange={(e) => updateSubjectRow(idx, 'date', e.target.value)}
// //               required
// //             />
// //             <input
// //               placeholder="Start Time"
// //               className="p-2 border rounded"
// //               value={item.startTime}
// //               onChange={(e) => updateSubjectRow(idx, 'startTime', e.target.value)}
// //               required
// //             />
// //             <input
// //               placeholder="End Time"
// //               className="p-2 border rounded"
// //               value={item.endTime}
// //               onChange={(e) => updateSubjectRow(idx, 'endTime', e.target.value)}
// //               required
// //             />
// //             <input
// //               placeholder="Venue"
// //               className="p-2 border rounded"
// //               value={item.venue}
// //               onChange={(e) => updateSubjectRow(idx, 'venue', e.target.value)}
// //             />
// //           </div>
// //         ))}
// //         <button type="button" onClick={addSubjectRow} className="text-blue-600 hover:underline mt-1">
// //           + Add another subject
// //         </button>
// //       </div>

// //       <button type="submit" className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700">
// //         Save Schedule
// //       </button>
// //     </form>
// //   );
// // };
// // export default AddExamSchedule























// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { authDataContext } from '../Context-Api/AuthContext';
// import { adminDataContext } from '../Context-Api/AdminContext';

// const AddExamSchedule = () => {
//   const [classList, setClassList] = useState([]);
//   const [subjectList, setSubjectList] = useState([]);
//   const [selectedClass, setSelectedClass] = useState('');
//   const [subjects, setSubjects] = useState([
//     { subject: '', date: '', startTime: '', endTime: '', venue: '' }
//   ]);

//   const { serverUrl } = useContext(authDataContext);
//   const { adminData, fetchAdminData } = useContext(adminDataContext);
//   const classes = adminData?.admin?.classes || [];

//   useEffect(() => {
//     fetchAdminData(); // get admin's classes with subjects
//   }, []);

//   useEffect(() => {
//     setClassList(classes);
//   }, [classes]);

//   // update subject list when class changes
//   useEffect(() => {
//     const selected = classes.find(cls => cls.name === selectedClass);
//     if (selected && selected.subjects) {
//       setSubjectList(selected.subjects);
//     } else {
//       setSubjectList([]);
//     }
//   }, [selectedClass]);

//   const addSubjectRow = () => {
//     setSubjects([...subjects, { subject: '', date: '', startTime: '', endTime: '', venue: '' }]);
//   };

//   const updateSubjectRow = (index, field, value) => {
//     const updated = [...subjects];
//     updated[index][field] = value;
//     setSubjects(updated);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//      if (!selectedClass || subjects.length === 0) {
//     alert("Please select a class and enter at least one subject schedule.");
//     return;
//   }
//     try {
//     await axios.post(`${serverUrl}/admin/Add/ExamSchedule`, {
//       class: selectedClass,
//       subjects: subjects.map(sub => ({
//         subject: sub.subject,
//         date: sub.date,
//         startTime: sub.startTime,
//         endTime: sub.endTime,
//         venue: sub.venue
//       }))
//     },{withCredentials:true});

//     alert("Exam schedule saved successfully!");

//     // Reset form
//     setSelectedClass('');
//     setSubjects([{ subject: '', date: '', startTime: '', endTime: '', venue: '' }]);
//   } catch (err) {
//     alert(err?.response?.data.message);
//    // alert("Failed to save exam schedule. Please try again.");
//   }
// };
    

//   return (
//     // <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 rounded space-y-4">
//     //   <h2 className="text-xl font-semibold">Create Exam Schedule</h2>

//     //   <div>
//     //     <label className="block mb-1 font-medium">Select Class</label>
//     //     <select
//     //       value={selectedClass}
//     //       onChange={(e) => setSelectedClass(e.target.value)}
//     //       className="w-full p-2 border rounded"
//     //       required
//     //     >
//     //       <option value="">-- Select Class --</option>
//     //       {classList.map(cls => (
//     //         <option key={cls._id} value={cls.name}>{cls.name}</option>
//     //       ))}
//     //     </select>
//     //   </div>

//     //   <div>
//     //     <h3 className="font-medium mb-2">Subjects</h3>
//     //     {subjects.map((item, idx) => (
//     //       <div key={idx} className="grid grid-cols-6 gap-2 mb-3">
//     //         <select
//     //           className="col-span-2 p-2 border rounded"
//     //           value={item.subject}
//     //           onChange={(e) => updateSubjectRow(idx, 'subject', e.target.value)}
//     //           required
//     //         >
//     //           <option value="">Subject</option>
//     //           {subjectList.map(sub => (
//     //             <option key={sub._id || sub.name} value={sub.name}>
//     //               {sub.name}
//     //             </option>
//     //           ))}
//     //         </select>
//     //         <input
//     //           type="date"
//     //           className="p-2 border rounded"
//     //           value={item.date}
//     //           onChange={(e) => updateSubjectRow(idx, 'date', e.target.value)}
//     //           required
//     //         />
//     //         <input
//     //           placeholder="Start Time"
//     //           className="p-2 border rounded"
//     //           value={item.startTime}
//     //           onChange={(e) => updateSubjectRow(idx, 'startTime', e.target.value)}
//     //           required
//     //         />
//     //         <input
//     //           placeholder="End Time"
//     //           className="p-2 border rounded"
//     //           value={item.endTime}
//     //           onChange={(e) => updateSubjectRow(idx, 'endTime', e.target.value)}
//     //           required
//     //         />
//     //         <input
//     //           placeholder="Venue"
//     //           className="p-2 border rounded"
//     //           value={item.venue}
//     //           onChange={(e) => updateSubjectRow(idx, 'venue', e.target.value)}
//     //         />
//     //       </div>
//     //     ))}
//     //     <button type="button" onClick={addSubjectRow} className="text-blue-600 hover:underline mt-1">
//     //       + Add another subject
//     //     </button>
//     //   </div>

//     //   <button type="submit" className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700">
//     //     Save Schedule
//     //   </button>
//     // </form>



//     <div className="flex">
//   {/* Sidebar space */}
//   <div className="w-64 hidden md:block">
//     {/* You can leave this empty or place your Sidebar component here */}
//   </div>

//   {/* Main content */}
//   <div className="flex-1 p-6">
//     <div className="max-w-3xl mx-auto bg-white shadow-md p-6 rounded space-y-4">
//       <h2 className="text-xl font-semibold">Create Exam Schedule</h2>

//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Class Selector */}
//         <div>
//           <label className="block mb-1 font-medium">Select Class</label>
//           <select
//             value={selectedClass}
//             onChange={(e) => setSelectedClass(e.target.value)}
//             className="w-full p-2 border rounded"
//             required
//           >
//             <option value="">-- Select Class --</option>
//             {classList.map(cls => (
//               <option key={cls._id} value={cls.name}>{cls.name}</option>
//             ))}
//           </select>
//         </div>

//         {/* Subject rows */}
//         <div>
//           <h3 className="font-medium mb-2">Subjects</h3>
//           {subjects.map((item, idx) => (
//             <div key={idx} className="grid grid-cols-6 gap-2 mb-3">
//               <select
//                 className="col-span-2 p-2 border rounded"
//                 value={item.subject}
//                 onChange={(e) => updateSubjectRow(idx, 'subject', e.target.value)}
//                 required
//               >
//                 <option value="">Subject</option>
//                 {subjectList.map(sub => (
//                   <option key={sub._id || sub.name} value={sub.name}>
//                     {sub.name}
//                   </option>
//                 ))}
//               </select>
//               <input
//                 type="date"
//                 className="p-2 border rounded"
//                 value={item.date}
//                 onChange={(e) => updateSubjectRow(idx, 'date', e.target.value)}
//                 required
//               />
//               <input
//                 placeholder="Start Time"
//                 className="p-2 border rounded"
//                 value={item.startTime}
//                 onChange={(e) => updateSubjectRow(idx, 'startTime', e.target.value)}
//                 required
//               />
//               <input
//                 placeholder="End Time"
//                 className="p-2 border rounded"
//                 value={item.endTime}
//                 onChange={(e) => updateSubjectRow(idx, 'endTime', e.target.value)}
//                 required
//               />
//               <input
//                 placeholder="Venue"
//                 className="p-2 border rounded"
//                 value={item.venue}
//                 onChange={(e) => updateSubjectRow(idx, 'venue', e.target.value)}
//               />
//             </div>
//           ))}
//           <button type="button" onClick={addSubjectRow} className="text-blue-600 hover:underline mt-1">
//             + Add another subject
//           </button>
//         </div>

//         <button
//           type="submit"
//           className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
//         >
//           Save Schedule
//         </button>
//       </form>
//     </div>
//   </div>
// </div>

//   );
// };

// export default AddExamSchedule;
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { authDataContext } from '../Context-Api/AuthContext';
import { adminDataContext } from '../Context-Api/AdminContext';
import { Sidebar } from './Sidebar';

const AddExamSchedule = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [subjectList, setSubjectList] = useState([]);
  const [subjects, setSubjects] = useState([
    { subject: '', date: '', startTime: '', endTime: '', venue: '' }
  ]);

  const { serverUrl } = useContext(authDataContext);
  const { adminData, fetchAdminData } = useContext(adminDataContext);
  const classes = adminData?.admin?.classes || [];

  // Fetch admin data once on mount
  useEffect(() => {
    fetchAdminData();
  }, []);

  // Update subjectList whenever selectedClass or classes changes
  useEffect(() => {
    if (!selectedClass) {
      setSubjectList([]);
      return;
    }

    const selected = classes.find(cls => cls.name === selectedClass);
    if (selected?.subjects) {
      setSubjectList(selected.subjects);
    } else {
      setSubjectList([]);
    }
  }, [selectedClass, classes]);

  const addSubjectRow = () => {
    setSubjects([...subjects, { subject: '', date: '', startTime: '', endTime: '', venue: '' }]);
  };

  const updateSubjectRow = (index, field, value) => {
    const updated = [...subjects];
    updated[index][field] = value;
    setSubjects(updated);
  };
  const [isSidebarOpen,setIsSidebarOpen] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedClass || subjects.length === 0) {
      alert("Please select a class and enter at least one subject schedule.");
      return;
    }

    try {
      await axios.post(
        `${serverUrl}/api/admin/Add/ExamSchedule`,
        {
          class: selectedClass,
          subjects: subjects.map(sub => ({
            subject: sub.subject,
            date: sub.date,
            startTime: sub.startTime,
            endTime: sub.endTime,
            venue: sub.venue
          }))
        },
        { withCredentials: true }
      );

      alert("Exam schedule saved successfully!");
      setSelectedClass('');
      setSubjects([{ subject: '', date: '', startTime: '', endTime: '', venue: '' }]);
    } catch (err) {
      alert(err?.response?.data?.message || "Failed to save exam schedule. Please try again.");
    }
  };

  return (
    <div className="min h-screen bg-zinc-800">
      {/* Sidebar space */}
      {/* <Sidebar/>
      <div className="w-64 hidden md:block">
        {/* Optional Sidebar component goes here */}
    {/*    </div> */}
  {!isSidebarOpen && (
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="md:hidden fixed top-4 left-4 z-50 bg-white border p-2 shadow"
        >
          <FaBars className="text-xl text-green-700" />
        </button>
      )}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      {/* Main content */}
      <div className="flex-1 p-6">
        <div className="max-w-2xl mx-auto bg-white shadow-md p-6 rounded space-y-4">
          <h2 className="text-xl font-semibold">Create Exam Schedule</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Class Selector */}
            <div>
              <label className="block mb-1 font-medium">Select Class</label>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">-- Select Class --</option>
                {classes.map(cls => (
                  <option key={cls._id} value={cls.name}>
                    {cls.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Subjects Input */}
            <div>
              <h3 className="font-medium mb-2">Subjects</h3>
              {subjects.map((item, idx) => (
                <div key={idx} className="grid grid-cols-6 gap-2 mb-3">
                  <select
                    className="col-span-2 p-2 border rounded"
                    value={item.subject}
                    onChange={(e) => updateSubjectRow(idx, 'subject', e.target.value)}
                    required
                  >
                    <option value="">Subject</option>
                    {subjectList.map(sub => (
                      <option key={sub._id || sub.name} value={sub.name}>
                        {sub.name}
                      </option>
                    ))}
                  </select>
                  <input
                    type="date"
                    className="p-2 border rounded"
                    value={item.date}
                    onChange={(e) => updateSubjectRow(idx, 'date', e.target.value)}
                    required
                  />
                  <input
                    placeholder="Start Time"
                    className="p-2 border rounded"
                    value={item.startTime}
                    onChange={(e) => updateSubjectRow(idx, 'startTime', e.target.value)}
                    required
                  />
                  <input
                    placeholder="End Time"
                    className="p-2 border rounded"
                    value={item.endTime}
                    onChange={(e) => updateSubjectRow(idx, 'endTime', e.target.value)}
                    required
                  />
                  <input
                    placeholder="Venue"
                    className="p-2 border rounded"
                    value={item.venue}
                    onChange={(e) => updateSubjectRow(idx, 'venue', e.target.value)}
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={addSubjectRow}
                className="text-blue-600 hover:underline mt-1"
              >
                + Add another subject
              </button>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
            >
              Save Schedule
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddExamSchedule;
