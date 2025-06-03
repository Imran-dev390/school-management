// // // import React, { useState } from 'react'

// // // const AddTimetable = () => {
// // //     const [formData,setFormData] = useState({
// // //         className:"",
// // //         day:"",
// // //         periods:"",
// // //     })
// // //     const handleSubmit = async ()=>{
// // //         e.preventDefault();
// // //         try{

// // //         } catch(err){
// // //             alert(err);
// // //             console.log("error on frontend ",err.message);
// // //         }
// // //     }
// // //   return (
// // //   <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center p-4">
// // //        <Sidebar/>
// // //         <div className="w-full max-w-xl bg-white text-black rounded-xl shadow-lg p-8">
// // //           <h2 className="text-3xl font-bold mb-6 text-center">Add Staff</h2>
// // //           <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-0">
            
// // //             <div>
// // //               <label className="block font-semibold mb-1">Name</label>
// // //               <select
// // //               name="className"
// // //               className="w-full border px-4 py-2 rounded focus:outline-none focus:ring"
// // //               value={formData.className}
// // //               onChange={handleChange}
// // //               required
// // //             >
// // //               <option value="">-- Select Role --</option>
// // //               <option value="Accountant">Accountant</option>
// // //               <option value="Guard">Guard</option>
// // //               <option value="Sweeper">Sweeper</option>
// // //               <option value="Peon">Peon</option>
// // //               <option value="Librarian">Librarian</option>
// // //             </select>
// // //             </div>
  
// // //             <div>
// // //               <label className="block font-semibold mb-1">Role</label>
// // //               <select
// // //                 name="role"
// // //                 className="w-full border px-4 py-2 rounded focus:outline-none focus:ring"
// // //                 value={formData.role}
// // //                 onChange={handleChange}
// // //                 required
// // //               >
// // //                 <option value="">-- Select Role --</option>
// // //                 <option value="Accountant">Accountant</option>
// // //                 <option value="Guard">Guard</option>
// // //                 <option value="Sweeper">Sweeper</option>
// // //                 <option value="Peon">Peon</option>
// // //                 <option value="Librarian">Librarian</option>
// // //               </select>
// // //             </div>
  
// // //             {formData.role === 'Accountant' && (
// // //               <>
// // //                 <div>
// // //                   <label className="block font-semibold mb-1">Email</label>
// // //                   <input
// // //                     type="email"
// // //                     name="email"
// // //                     className="w-full border px-4 py-2 rounded focus:outline-none focus:ring"
// // //                     value={formData.email}
// // //                     onChange={handleChange}
// // //                     required
// // //                   />
// // //                 </div>
  
// // //                 <div>
// // //                   <label className="block font-semibold mb-1">Password</label>
// // //                   <input
// // //                     type="password"
// // //                     name="password"
// // //                     className="w-full border px-4 py-2 rounded focus:outline-none focus:ring"
// // //                     value={formData.password}
// // //                     onChange={handleChange}
// // //                     required
// // //                   />
// // //                 </div>
// // //               </>
// // //             )}
  
// // //             <div>
// // //               <label className="block font-semibold mb-1">Phone</label>
// // //               <input
// // //                 type="text"
// // //                 name="phone"
// // //                 className="w-full border px-4 py-2 rounded focus:outline-none focus:ring"
// // //                 value={formData.phone}
// // //                 onChange={handleChange}
// // //               />
// // //             </div>
// // //              <div>
// // //               <label className="block font-semibold mb-1">Address</label>
// // //               <input
// // //                 type="text"
// // //                 name="address"
// // //                 className="w-full border px-4 py-2 rounded focus:outline-none focus:ring"
// // //                 value={formData.address}
// // //                 onChange={handleChange}
// // //               />
// // //             </div>
  
// // //             <div>
// // //               <label className="block font-semibold mb-1">Profile Image</label>
// // //               <input
// // //                 type="file"
// // //                 name="profileImage"
// // //                 accept="image/*"
// // //                 className="w-full border px-4 py-2 rounded"
// // //                 onChange={handleFileChange}
// // //               />
// // //             </div>
  
// // //             <button
// // //               type="submit"
// // //               className="w-full bg-zinc-900 text-white py-3 rounded font-semibold hover:bg-zinc-800 transition"
// // //             >
// // //               Add Staff
// // //             </button>
// // //           </form>
// // //         </div>
// // //       </div>
// // //   )
// // // }

// // // export default AddTimetable
















// // // ClassForm.jsx
// // // import React, { useContext, useState } from 'react';
// // // //import { AdminContext } from './context/AdminContext';
// // // import axios from 'axios';
// // // import { authDataContext } from '../Context-Api/AuthContext';
// // // import { adminDataContext } from '../Context-Api/AdminContext';

// // // const ClassTimeTable = () => {
// // //   const { adminData } = useContext(adminDataContext);
// // // const {serverUrl} = useContext(authDataContext);
// // //   const [formData, setFormData] = useState({
// // //     className: '',
// // //     day: '',
// // //     period: ''
// // //   });

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;

// // //     setFormData((prev) => ({
// // //       ...prev,
// // //       [name]: value
// // //     }));
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       const res = await axios.post(serverUrl+'/admin/Add/timetable', formData); // ⬅️ Replace with your API
// // //       console.log('Class scheduled:', res.data);
// // //       alert(res?.data?.message);
// // //     } catch (error) {
// // //       console.error('Error submitting form:', error);
// // //     }
// // //   };

// // //   return (
// // //     <form onSubmit={handleSubmit}>
// // //       {/* Class Dropdown */}
// // //       <label>Class Name:</label>
// // //       <select
// // //         name="className"
// // //         value={formData.className}
// // //         onChange={handleChange}
// // //       >
// // //         <option value="">-- Select Class --</option>
// // //         {adminData?.admin?.classes?.map((cls, index) => (
// // //           <option key={index} value={cls.name}>
// // //             {cls.name}
// // //           </option>
// // //         ))}
// // //       </select>

// // //       {/* Day Field */}
// // //       <label>Day:</label>
// // //       <input
// // //         type="text"
// // //         name="day"
// // //         value={formData.day}
// // //         onChange={handleChange}
// // //         placeholder="e.g., Monday"
// // //       />

// // //       {/* Period Field */}
// // //       <label>Period:</label>
// // //       <input
// // //         type="number"
// // //         name="period"
// // //         value={formData.period}
// // //         onChange={handleChange}
// // //         placeholder="e.g., 1, 2, 3..."
// // //       />

// // //       <button type="submit">Submit</button>
// // //     </form>
// // //   );
// // // };

// // // export default ClassTimeTable;







// // import React, { useContext, useState } from 'react';
// // import axios from 'axios';
// // import { authDataContext } from '../Context-Api/AuthContext';
// // import { adminDataContext } from '../Context-Api/AdminContext';

// // const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// // const ClassTimeTable = () => {
// //   const { adminData } = useContext(adminDataContext);
// //   const { serverUrl } = useContext(authDataContext);

// //   const [formData, setFormData] = useState({
// //     className: '',
// //     day: '',
// //     period: ''
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;

// //     setFormData((prev) => ({
// //       ...prev,
// //       [name]: value
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const res = await axios.post(`${serverUrl}/admin/Add/timetable`, formData);
// //       console.log('Class scheduled:', res.data);
// //       alert(res?.data?.message);
// //     } catch (error) {
// //       console.error('Error submitting form:', error);
// //       alert('Failed to submit. Please try again.');
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} style={styles.form}>
// //       {/* Class Dropdown */}
// //       <label style={styles.label}>Class Name:</label>
// //       <select
// //         name="className"
// //         value={formData.className}
// //         onChange={handleChange}
// //         style={styles.select}
// //       >
// //         <option value="">-- Select Class --</option>
// //         {adminData?.admin?.classes?.map((cls, index) => (
// //           <option key={index} value={cls.name+cls.section}>
// //             {cls.name} {cls.section}
// //           </option>
// //         ))}
// //       </select>

// //       {/* Day Dropdown */}
// //       <label style={styles.label}>Day:</label>
// //       <select
// //         name="day"
// //         value={formData.day}
// //         onChange={handleChange}
// //         style={styles.select}
// //       >
// //         <option value="">-- Select Day --</option>
// //         {daysOfWeek.map((day, idx) => (
// //           <option key={idx} value={day}>
// //             {day}
// //           </option>
// //         ))}
// //       </select>

// //       {/* Period Field */}
// //       <label style={styles.label}>Period:</label>
// //       <input
// //         type="number"
// //         name="period"
// //         value={formData.period}
// //         onChange={handleChange}
// //         placeholder="e.g., 1"
// //         style={styles.input}
// //         min={1}
// //       />

// //       <button type="submit" style={styles.button}>Submit</button>
// //     </form>
// //   );
// // };

// // // Basic inline styling
// // const styles = {
// //   form: {
// //     maxWidth: '400px',
// //     margin: '30px auto',
// //     padding: '20px',
// //     border: '1px solid #ddd',
// //     borderRadius: '8px',
// //     backgroundColor: '#f9f9f9',
// //     boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
// //   },
// //   label: {
// //     display: 'block',
// //     marginBottom: '6px',
// //     fontWeight: 'bold',
// //     marginTop: '12px'
// //   },
// //   input: {
// //     width: '100%',
// //     padding: '8px',
// //     marginBottom: '10px',
// //     borderRadius: '4px',
// //     border: '1px solid #ccc'
// //   },
// //   select: {
// //     width: '100%',
// //     padding: '8px',
// //     marginBottom: '10px',
// //     borderRadius: '4px',
// //     border: '1px solid #ccc'
// //   },
// //   button: {
// //     marginTop: '10px',
// //     padding: '10px 20px',
// //     backgroundColor: '#007bff',
// //     color: '#fff',
// //     border: 'none',
// //     borderRadius: '4px',
// //     cursor: 'pointer'
// //   }
// // };

// // export default ClassTimeTable;















// import React, { useContext, useState } from 'react';
// import axios from 'axios';
// import { authDataContext } from '../Context-Api/AuthContext';
// import { adminDataContext } from '../Context-Api/AdminContext';

// const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// const ClassTimeTable = () => {
//   const { adminData } = useContext(adminDataContext);
//    const subjects = adminData?.admin?.subjects || [];
//   const { serverUrl } = useContext(authDataContext);

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

//   // Update className and day
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   // Update individual period fields
//   const handlePeriodChange = (index, field, value) => {
//     const updatedPeriods = [...formData.periods];
//     updatedPeriods[index][field] = value;
//     setFormData((prev) => ({
//       ...prev,
//       periods: updatedPeriods
//     }));
//   };

//   // Add new period
//   const addPeriod = () => {
//     setFormData((prev) => ({
//       ...prev,
//       periods: [
//         ...prev.periods,
//         {
//           periodNumber: prev.periods.length + 1,
//           subject: '',
//           time: ''
//         }
//       ]
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(`${serverUrl}/admin/Add/timetable`, formData);
//       console.log('Timetable saved:', res.data);
//       alert(res?.data?.message || 'Timetable created');
//     } catch (error) {
//       console.error('Submit error:', error);
//       alert('Submission failed.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} style={styles.form}>
//       {/* Class Dropdown */}
//       <h1 className='text-center text-xl font-bold'>Add Classes TimeTable</h1>
//       <label style={styles.label}>Class:</label>
//       <select
//         name="className"
//         value={formData.className}
//         onChange={handleChange}
//         style={styles.select}
//       >
//         <option value="">-- Select Class --</option>
//         {adminData?.admin?.classes?.map((cls, index) => (
//           <option key={index} value={cls._id}>
//             {cls.name}
//           </option>
//         ))}
//       </select>

//       {/* Day Dropdown */}
//       <label style={styles.label}>Day:</label>
//       <select
//         name="day"
//         value={formData.day}
//         onChange={handleChange}
//         style={styles.select}
//       >
//         <option value="">-- Select Day --</option>
//         {daysOfWeek.map((day, idx) => (
//           <option key={idx} value={day}>
//             {day}
//           </option>
//         ))}
//       </select>

//       {/* Periods Section */}
//       <div style={{ marginTop: '20px' }}>
//         <h4>Periods</h4>
//         {formData.periods.map((period, index) => (
//           <div key={index} style={styles.periodContainer}>
//             <div style={styles.periodRow}>
//               <label>Period #{index + 1}</label>
//               <input
//                 type="text"
//                 placeholder="Subject ID"
//                 value={period.subject}
//                 onChange={(e) => handlePeriodChange(index, 'subject', e.target.value)}
//                 style={styles.input}
//               />
//               <input
//                 type="text"
//                 placeholder="Time (e.g., 10:00 - 10:45)"
//                 value={period.time}
//                 onChange={(e) => handlePeriodChange(index, 'time', e.target.value)}
//                 style={styles.input}
//               />
//             </div>
//           </div>
//         ))}

//         <button type="button" onClick={addPeriod} style={styles.addButton}>
//           + Add Period
//         </button>
//       </div>

//       <button type="submit" style={styles.button}>Submit Timetable</button>
//     </form>
//   );
// };

// const styles = {
//   form: {
//     maxWidth: '500px',
//     margin: '30px auto',
//     padding: '20px',
//     border: '1px solid #ccc',
//     borderRadius: '10px',
//     backgroundColor: '#f9f9f9'
//   },
//   label: {
//     fontWeight: 'bold',
//     marginTop: '10px',
//     display: 'block'
//   },
//   select: {
//     width: '100%',
//     padding: '8px',
//     marginBottom: '10px'
//   },
//   input: {
//     padding: '8px',
//     margin: '0 5px 10px 0',
//     flex: 1
//   },
//   periodContainer: {
//     marginBottom: '10px',
//     borderBottom: '1px solid #ddd',
//     paddingBottom: '10px'
//   },
//   periodRow: {
//     display: 'flex',
//     gap: '10px',
//     flexWrap: 'wrap'
//   },
//   addButton: {
//     padding: '6px 12px',
//     backgroundColor: '#28a745',
//     color: '#fff',
//     border: 'none',
//     marginTop: '10px',
//     cursor: 'pointer'
//   },
//   button: {
//     padding: '10px 20px',
//     backgroundColor: '#007bff',
//     color: '#fff',
//     border: 'none',
//     marginTop: '20px',
//     borderRadius: '5px',
//     cursor: 'pointer'
//   }
// };

// export default ClassTimeTable;


















import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { authDataContext } from '../Context-Api/AuthContext';
import { adminDataContext } from '../Context-Api/AdminContext';
import { Sidebar } from './Sidebar';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const timeSlots = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
  '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM',
];

const ClassTimeTable = () => {
  const { adminData } = useContext(adminDataContext);
  const {fetchAdminData} = useContext(adminDataContext);
  const { serverUrl } = useContext(authDataContext);

  const [classSubjects, setClassSubjects] = useState([]);
  const [formData, setFormData] = useState({
    className: '',
    day: '',
    periods: [
      {
        periodNumber: 1,
        subject: '',
        time: ''
      }
    ]
  });
  const [isLoading,setIsLoading] = useState(true);
  useEffect(() => {
    fetchAdminData().finally(() => setIsLoading(false));
  }, [fetchAdminData]);
  // When class changes, filter its subjects
  useEffect(() => {
    if (formData.className) {
      const selectedClass = adminData?.admin?.classes?.find(cls => cls._id === formData.className);
      setClassSubjects(selectedClass?.subjects || []);
    } else {
      setClassSubjects([]);
    }
  }, [formData.className, adminData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePeriodChange = (index, field, value) => {
    const updatedPeriods = [...formData.periods];
    updatedPeriods[index][field] = value;
    setFormData((prev) => ({
      ...prev,
      periods: updatedPeriods
    }));
  };

  const addPeriod = () => {
    setFormData((prev) => ({
      ...prev,
      periods: [
        ...prev.periods,
        {
          periodNumber: prev.periods.length + 1,
          subject: '',
          time: ''
        }
      ]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${serverUrl}/admin/Add/timetable`, formData,{withCredentials:true});
      alert(res?.data?.message || 'Timetable created');
      setFormData({ className: '',
    day: '',
    periods: [
      {
        periodNumber: 1,
        subject: '',
        time: ''
      }
    ]})
    } catch (error) {
     // console.error('Submit error:', error);
      alert(error?.response?.data.message);
    }
  };
if(isLoading) return <p>Admin Data is Loading...</p>
  return (
    <div className="main min-h-screen w-full pt-3 bg-zinc-800">
      <Sidebar/>
    <form onSubmit={handleSubmit} style={styles.form}>
      <h1 className='text-center text-xl font-bold'>Add Classes TimeTable</h1>

      <label style={styles.label}>Class:</label>
      <select
        name="className"
        value={formData.className}
        onChange={handleChange}
        style={styles.select}
      >
        <option value="">-- Select Class --</option>
        {adminData?.admin?.classes?.map((cls) => (
          <option key={cls._id} value={cls._id}>
            {cls.name}
          </option>
        ))}
      </select>

      <label style={styles.label}>Day:</label>
      <select
        name="day"
        value={formData.day}
        onChange={handleChange}
        style={styles.select}
      >
        <option value="">-- Select Day --</option>
        {daysOfWeek.map((day, idx) => (
          <option key={idx} value={day}>{day}</option>
        ))}
      </select>

      <div style={{ marginTop: '20px' }}>
         <h4 className='font-bold'>Subject Wise Periods:</h4>
        {formData.periods.map((period, index) => (
          <div key={index} style={styles.periodContainer}>
            <div style={styles.periodRow}>

              <select
                value={period.subject}
                onChange={(e) => handlePeriodChange(index, 'subject', e.target.value)}
                style={styles.select}
              >
                <option value="">-- Select Subject --</option>
                {classSubjects.map((subj, i) => (
                  <option key={i} value={subj._id}>{subj.name}</option>
                ))}
              </select>
            <label htmlFor="period.time" className='font-bold'>Period Time:</label>
              <select
                value={period.time}
                onChange={(e) => handlePeriodChange(index, 'time', e.target.value)}
                style={styles.select}
              >
                <option value="">-- Select Time --</option>
                {timeSlots.map((time, i) => (
                  <option key={i} value={time}>{time}</option>
                ))}
              </select>
            </div>
          </div>
        ))}
      </div>
      <button type="submit"  style={styles.addButton}>Submit Timetable</button>
    </form>
    </div>
  );
};

const styles = {
  form: {
    maxWidth: '600px',
    margin: '30px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9'
  },
  label: {
    fontWeight: 'bold',
    marginTop: '10px',
    display: 'block'
  },
  select: {
    width: '100%',
    padding: '8px',
    marginBottom: '10px'
  },
  periodContainer: {
    marginBottom: '10px',
    borderBottom: '1px solid #ddd',
    paddingBottom: '10px'
  },
  periodRow: {
    display: 'flex',
    gap: '10px',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  addButton: {
    padding: '6px 12px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    marginTop: '10px',
    cursor: 'pointer'
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    marginTop: '20px',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default ClassTimeTable;
