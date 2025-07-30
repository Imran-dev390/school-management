import React, { useContext, useEffect, useState } from 'react'
import TeacherSidebar from './TeacherSidebar'
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader'
import axios from 'axios';
import { authDataContext } from '../Context-Api/AuthContext';
import { userDataContext } from '../Context-Api/UserContext';

// const TeacherAddTimetable = () => {
//     const {userData} = useContext(userData);
//   const [classSubjects, setClassSubjects] = useState([]);
//   const { serverUrl } = useContext(authDataContext);
//   const [availableTeachersMap, setAvailableTeachersMap] = useState({});
//   const [classes,setClasses] = useState([]);
//   const [formData, setFormData] = useState({
//     className: '',
//     day: '',
//     periods: [
//       {
//         periodNumber: 1,
//         subject: '',
//         time: ''
//       }
//     ]
//   });


//   useEffect(()=>{
//        const getClasses = async ()=>{
//         try{
//           const getClass = await axios.get(`${serverUrl}/api/teacher/classes`,{withCredentials:true});
//           if(getClass.status===201){
//               setClasses(getClass.data.class);
//           }
//       } catch(err){
//           console.log(err?.response?.data.message || "Error not fetching Classes")
//       }
//        }
//        getClasses();
//   },[serverUrl])

//      useEffect(()=>{
//           const getSubjects = async (req,res)=>{
//               try{
//               const response = await axios.get(`${serverUrl}/api/teacher/subjects`,{withCredentials:true});
//           if(response.status===201){
//               setSubjects(response.data.subjects);
//           }    
//           } catch(err){
//                   console.log("err",err);
//               }
//           }
//           getSubjects();
//       },[serverUrl])
//     useEffect(() => {
//       if (formData.className) {
//         const selectedClass = adminData?.admin?.classes?.find(cls => cls._id === formData.className);
//         setClassSubjects(selectedClass?.subjects || []);
//       } else {
//         setClassSubjects([]);
//       }
//     }, [formData.className, adminData]);
//   useEffect(() => {
//     const selectedSubjects = formData.periods.map(p => p.subject).filter(Boolean);
//     const selectedClassId = formData.className;
  
//     if (!selectedClassId && selectedSubjects.length === 0) {
//       setFilteredTeachers([]);
//       return;
//     }
  
//     const matchingTeachers = teachers.filter((teacher) => {
//       const teachesSubject = selectedSubjects.some((subId) =>
//         teacher.teachSubject?.some((ts) => ts._id === subId)
//       );
  
//       const assignedToClass = teacher.assignedClass?.some((ac) => ac.class?._id === selectedClassId);
  
//       // Match teacher if either subject or class is relevant
//       return teachesSubject || assignedToClass;
//     });
  
//     setFilteredTeachers(matchingTeachers);
//   }, [formData.periods, formData.className, teachers]);
  

//     const fetchAvailableTeachers = async (index, subjectId, time) => {
//     const classId = formData.className;
//   if (!subjectId || !time) return;
//   try {
//    const res = await axios.get(`${serverUrl}/api/teacher/available-teachers`, {
//   params: { subjectId, timeSlot: time,classId},
//   withCredentials: true,
// });
// setAvailableTeachersMap((prev) => ({
//   ...prev,
//   [index]: res.data.availableTeachers
// }));
//   } catch (err) {
//     console.error('Error fetching teachers:', err);
//   }
// };

//     const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   };
//     const handlePeriodChange = (index, field, value) => {
//   const updatedPeriods = [...formData.periods];
//   updatedPeriods[index][field] = value;
//   setFormData((prev) => ({ ...prev, periods: updatedPeriods }));

//   const subject = field === 'subject' ? value : updatedPeriods[index].subject;
//   const time = field === 'time' ? value : updatedPeriods[index].time;

//   if (subject && time) {
//     fetchAvailableTeachers(index, subject, time);
//   }
// };
//       const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//           const res = await axios.post(`${serverUrl}/api/teacher/Add/timetable`, formData,{withCredentials:true});
//         if(res.status === 201){
//       alert(res?.data?.message || 'Timetable created');
//       // reset form
//       setFormData({
//         className: '',
//         day: '',
//         periods: [
//           {
//             periodNumber: 1,
//             subject: '',
//             time: ''
//           }
//         ]
//       });
//     } else {
//       alert("Something went wrong");
//     }
//         } catch (error) {
//          // console.error('Submit error:', error);
//           alert(error?.response?.data.message);
//         }
//       };
//   return (
//     <div className="min-h-screen flex flex-col md:flex-row gap-3 bg-white">
//       <TeacherSidebar/>
//       <div className="flex flex-col gap-3 h-full w-full">
//         <AdminTeachDashboardHeader/>
//         <div className="flex w-full text-white p-3 rounded-md bg-[rgb(1,1,93)] flex-col md:flex-row justify-center items-center border-b pb-3">
//           <h2 className="text-lg font-semibold flex items-center gap-2">
//             <i className="fas fa-calendar-alt"></i> Add Timetable
//           </h2>
//         </div>

//    <form
//   onSubmit={handleSubmit}
//   className="grid w-full grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-white rounded shadow-2xl"
// >
//   {/* Class */}
//   <div className="flex flex-col">
//     <label className="font-semibold text-gray-700 mb-1">Class:</label>
//     <select
//       name="className"
//       value={formData.className}
//       onChange={handleChange}
//       className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//     >
//       <option value="">-- Select Class --</option>
//       {adminData?.admin?.classes?.map((cls) => (
//         <option key={cls._id} value={cls._id}>
//           {cls.name}{cls.section}
//         </option>
//       ))}
//     </select>
//   </div>

//   {/* Day */}
//   <div className="flex flex-col">
//     <label className="font-semibold text-gray-700 mb-1">Day:</label>
//     <select
//       name="day"
//       value={formData.day}
//       onChange={handleChange}
//       className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//     >
//       <option value="">-- Select Day --</option>
//       {daysOfWeek.map((day, idx) => (
//         <option key={idx} value={day}>{day}</option>
//       ))}
//     </select>
//   </div>

//   {/* Subject-wise Periods */}
//   <div className="col-span-2">
//     <h4 className="font-bold mb-2 text-lg">Subject Wise Periods:</h4>
//     {formData.periods.map((period, index) => (
//       <div
//         key={index}
//         className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mb-4 bg-gray-50 p-4 rounded"
//       >
//         {/* Subject */}
//         <div className="flex flex-col">
//           <label className="font-semibold text-gray-700 mb-1">Subject:</label>
//           <select
//             value={period.subject}
//             onChange={(e) => handlePeriodChange(index, 'subject', e.target.value)}
//             className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="">-- Select Subject --</option>
//             {classSubjects.map((subj, i) => (
//               <option key={i} value={subj._id}>{subj.name}</option>
//             ))}
//           </select>
//         </div>

//         {/* Time */}
//         <div className="flex flex-col">
//           <label className="font-semibold text-gray-700 mb-1">Period Time:</label>
//           <select
//             value={period.time}
//             onChange={(e) => handlePeriodChange(index, 'time', e.target.value)}
//             className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="">-- Select Time --</option>
//             {timeSlots.map((time, i) => (
//               <option key={i} value={time}>{time}</option>
//             ))}
//           </select>
//         </div>
//        {availableTeachersMap[index]?.length > 0 && (
//   <div className="mt-2">
//     <label className="text-sm font-semibold text-gray-600">Available Teachers:</label>
//     {/* <select className="mt-1 border px-2 py-1 rounded">
//        {availableTeachersMap[index].map((teacher) => (
//         <option key={teacher._id} value={teacher._id}>
//           {teacher.name} ({teacher.email})
//         </option>
//       ))}
//     </select> */}
//     <select
//   className="mt-1 border px-2 py-1 rounded"
//   value={period.teacher}
//   onChange={(e) => handlePeriodChange(index, 'teacher', e.target.value)}
// >
//   <option value="">-- Select Teacher --</option>
//   {availableTeachersMap[index].map((teacher) => (
//     <option key={teacher._id} value={teacher._id}>
//       {teacher.name} ({teacher.email})
//     </option>
//   ))}
// </select>

//   </div>
// )}

//       </div>
//     ))}
//   </div>

//   {/* Submit Button */}
//   <div className="col-span-2 flex justify-end">
//     <button
//       type="submit"
//       className="bg-[#c19703] text-white px-6 py-2 rounded shadow transition duration-200"
//     >
//       Submit Timetable
//     </button>
//   </div>
// </form>
//       </div>
//     </div>
//   )
// }
;
const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const timeSlots = ["08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM"];

const TeacherAddTimetable = () => {
  const { serverUrl } = useContext(authDataContext);
  const { userData } = useContext(userDataContext);
  const [classes, setClasses] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [classSubjects, setClassSubjects] = useState([]);
  const [availableTeachersMap, setAvailableTeachersMap] = useState({});
  const [formData, setFormData] = useState({
    className: '',
    day: '',
    periods: [{ periodNumber: 1, subject: '', time: '', teacher: '' }]
  });

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const res = await axios.get(`${serverUrl}/api/teacher/classes`, { withCredentials: true });
        if (res.status === 201) {
          setClasses(res.data.class);
        }
      } catch (err) {
        console.error("Error fetching classes:", err.response?.data?.message || err.message);
      }
    };
    fetchClasses();
  }, [serverUrl]);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const res = await axios.get(`${serverUrl}/api/teacher/subjects`, { withCredentials: true });
        if (res.status === 201) {
          setSubjects(res.data.subjects);
        }
      } catch (err) {
        console.error("Error fetching subjects:", err.response?.data?.message || err.message);
      }
    };
    fetchSubjects();
  }, [serverUrl]);

  useEffect(() => {
    if (formData.className) {
      const selectedClass = classes.find(cls => cls._id === formData.className);
      setClassSubjects(selectedClass?.subjects || []);
    } else {
      setClassSubjects([]);
    }
  }, [formData.className, classes]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePeriodChange = (index, field, value) => {
    const updated = [...formData.periods];
    updated[index][field] = value;
    setFormData(prev => ({ ...prev, periods: updated }));

    const subject = field === 'subject' ? value : updated[index].subject;
    const time = field === 'time' ? value : updated[index].time;

    if (subject && time) {
      fetchAvailableTeachers(index, subject, time);
    }
  };

  const fetchAvailableTeachers = async (index, subjectId, time) => {
    const classId = formData.className;
    if (!subjectId || !time || !classId) return;

    try {
      const res = await axios.get(`${serverUrl}/api/teacher/available-teachers`, {
        params: { subjectId, timeSlot: time, classId },
        withCredentials: true,
      });
      setAvailableTeachersMap(prev => ({ ...prev, [index]: res.data.availableTeachers }));
    } catch (err) {
      console.error("Error fetching available teachers:", err.response?.data?.message || err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${serverUrl}/api/teacher/Add/timetable`, formData, { withCredentials: true });
      if (res.status === 201) {
        alert(res.data.message || 'Timetable created successfully');
        setFormData({
          className: '',
          day: '',
          periods: [{ periodNumber: 1, subject: '', time: '', teacher: '' }]
        });
        setAvailableTeachersMap({});
      } else {
        alert("Something went wrong!");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Submission failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      <TeacherSidebar />
      <div className="flex flex-col gap-3 w-full px-4">
        <AdminTeachDashboardHeader />
        <div className="bg-[rgb(1,1,93)] text-white p-3 rounded-md text-center font-semibold">
          <i className="fas fa-calendar-alt mr-2"></i> Add Timetable
        </div>

        <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Class */}
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700 mb-1">Class:</label>
              <select
                name="className"
                value={formData.className}
                onChange={handleChange}
                className="border rounded px-3 py-2"
              >
                <option value="">-- Select Class --</option>
                {classes.map(cls => (
                  <option key={cls._id} value={cls._id}>
                    {cls.name} {cls.section}
                  </option>
                ))}
              </select>
            </div>

            {/* Day */}
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700 mb-1">Day:</label>
              <select
                name="day"
                value={formData.day}
                onChange={handleChange}
                className="border rounded px-3 py-2"
              >
                <option value="">-- Select Day --</option>
                {daysOfWeek.map(day => (
                  <option key={day} value={day}>{day}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Periods */}
          <div className="mt-6">
            <h4 className="font-bold text-lg mb-2">Subject Wise Periods:</h4>
            {formData.periods.map((period, index) => (
              <div key={index} className="grid md:grid-cols-3 gap-4 items-center mb-4 bg-gray-50 p-4 rounded">
                {/* Subject */}
                <div className="flex flex-col">
                  <label className="text-gray-700 font-medium mb-1">Subject</label>
                  <select
                    value={period.subject}
                    onChange={(e) => handlePeriodChange(index, 'subject', e.target.value)}
                    className="border rounded px-3 py-2"
                  >
                    <option value="">-- Select Subject --</option>
                    {classSubjects.map(sub => (
                      <option key={sub._id} value={sub._id}>{sub.name}</option>
                    ))}
                  </select>
                </div>

                {/* Time */}
                <div className="flex flex-col">
                  <label className="text-gray-700 font-medium mb-1">Time</label>
                  <select
                    value={period.time}
                    onChange={(e) => handlePeriodChange(index, 'time', e.target.value)}
                    className="border rounded px-3 py-2"
                  >
                    <option value="">-- Select Time --</option>
                    {timeSlots.map((time, idx) => (
                      <option key={idx} value={time}>{time}</option>
                    ))}
                  </select>
                </div>

                {/* Available Teachers */}
                <div className="flex flex-col">
                  <label className="text-gray-700 font-medium mb-1">Available Teachers</label>
                  <select
                    value={period.teacher}
                    onChange={(e) => handlePeriodChange(index, 'teacher', e.target.value)}
                    className="border rounded px-3 py-2"
                  >
                    <option value="">-- Select Teacher --</option>
                    {(availableTeachersMap[index] || []).map(t => (
                      <option key={t._id} value={t._id}>
                        {t.name} ({t.email})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-[#c19703] text-white px-6 py-2 rounded shadow"
            >
              Submit Timetable
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

//export default TeacherAddTimetable;

export default TeacherAddTimetable
