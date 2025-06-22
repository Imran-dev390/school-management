// import React, { useContext, useEffect, useState } from 'react';
// import { Sidebar } from './Sidebar';
// import { adminDataContext } from '../Context-Api/AdminContext';

// const AddFeeVoucher = () => {
//   const {adminData} = useContext(adminDataContext);
//   const {fetchAdminData} = useContext(adminDataContext);
//   const Allclasses = adminData?.admin?.classes || [];
//   const Allstudents = Allclasses?.students || [];
//   console.log("classes",Allclasses);
//   console.log("students",Allstudents);
//   const [voucherData, setVoucherData] = useState({
//     studentName: '',
//     amount: '',
//     dueDate: '',
//     notes: ''
//   });
//   const handleChange = (e) => {
//     setVoucherData({
//       ...voucherData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Voucher Submitted:', voucherData);
//     // You can replace this with an API call or database logic
//   };
// useEffect(()=>{
//  fetchAdminData();
// },[])
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-5">
//   {/*  <Sidebar/> */}
//   <Sidebar/>
//       <div className="bg-white/20 backdrop-blur-md shadow-2xl rounded-xl p-8 w-full max-w-md border border-white/30">
//         <h2 className="text-2xl font-bold  mb-6 text-center">
//           🎓 Add Fee Voucher
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm text-white mb-1">Student Name</label>
//             <input
//               type="text"
//               name="studentName"
//               value={voucherData.studentName}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-pink-400"
//               placeholder="e.g. John Doe"
//             />
//           </div>
//           <div>
//             <label className="block text-sm text-white mb-1">Amount</label>
//             <input
//               type="number"
//               name="amount"
//               value={voucherData.amount}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-pink-400"
//               placeholder="e.g. 1500"
//             />
//           </div>
//           <div>
//             <label className="block text-sm text-white mb-1">Due Date</label>
//             <input
//               type="date"
//               name="dueDate"
//               value={voucherData.dueDate}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-pink-400"
//             />
//           </div>
//           <div>
//             <label className="block text-sm text-white mb-1">Notes (optional)</label>
//             <textarea
//               name="notes"
//               value={voucherData.notes}
//               onChange={handleChange}
//               rows="3"
//               className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-pink-400"
//               placeholder="e.g. Tuition for March"
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="w-full py-2 bg-pink-500 hover:bg-pink-600 transition duration-300 text-white font-semibold rounded-lg shadow-lg"
//           >
//             Submit Voucher
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddFeeVoucher;














import React, { useContext, useEffect, useState } from 'react';
import { Sidebar } from './Sidebar';
import { adminDataContext } from '../Context-Api/AdminContext';
import axios from 'axios';
import AdminLayout from './AdminLayout';

const AddFeeVoucher = () => {
  const { adminData, fetchAdminData } = useContext(adminDataContext);
  const classes = adminData?.admin?.classes || [];
 const [isSidebarOpen,setIsSidebarOpen] = useState(false);
  const [selectedClassId, setSelectedClassId] = useState('');
  const [students, setStudents] = useState([]);
  const [voucherData, setVoucherData] = useState({
    classId: '',
    studentId: '',
    amount: '',
    dueDate: '',
    notes: '',
  });

  useEffect(() => {
    fetchAdminData();
  }, []);

  // When class is selected, filter students
  const handleClassChange = (e) => {
    const classId = e.target.value;
    setSelectedClassId(classId);
    setVoucherData({ ...voucherData, classId });

    const selectedClass = classes.find(cls => cls._id === classId);
    if (selectedClass) {
      setStudents(selectedClass.students);
    } else {
      setStudents([]);
    }
  };

  const handleChange = (e) => {
    setVoucherData({
      ...voucherData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/fee-vouchers/whatsapp', voucherData);
      alert('Fee voucher sent via WhatsApp!');
    } catch (err) {
      console.error(err);
      alert('Error sending WhatsApp message');
    }
  };

  return (
    <AdminLayout adminName='Bright Future'>
      <div className="bg-white/20 backdrop-blur-md shadow-2xl rounded-xl p-8 w-full max-w-md border border-white/30">
        <h2 className="text-2xl font-bold mb-6 text-center">🎓 Add Fee Voucher</h2>
        <form onSubmit={handleSubmit} className="space-y-4">    
          {/* Class Selection */}
          <div>
            <label className="block text-sm text-white mb-1">Select Class</label>
            <select
              name="classId"
              value={voucherData.classId}
              onChange={handleClassChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/30 text-black"
            >
              <option value="">-- Choose Class --</option>
              {classes.map(cls => (
                <option key={cls._id} value={cls._id}>
                  {cls.name} - {cls.section}
                </option>
              ))}
            </select>
          </div>

          {/* Student Selection */}
          <div>
            <label className="block text-sm text-white mb-1">Select Student</label>
            <select
              name="studentId"
              value={voucherData.studentId}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/30 "
            >
              <option value="">-- Choose Student --</option>
              {students.map(student => (
                <option key={student._id} value={student._id}>
                  {student.name}
                </option>
              ))}
            </select>
          </div>

          {/* Amount */}
          <div>
            <label className="block text-sm text-white mb-1">Amount</label>
            <input
              type="number"
              name="amount"
              value={voucherData.amount}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/30"
              placeholder="e.g. 1500"
            />
          </div>

          {/* Due Date */}
          <div>
            <label className="block text-sm text-white mb-1">Due Date</label>
            <input
              type="date"
              name="dueDate"
              value={voucherData.dueDate}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/30"
            />
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm text-white mb-1">Notes</label>
            <textarea
              name="notes"
              value={voucherData.notes}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-2 rounded-lg bg-white/30 text-white"
              placeholder="e.g. Tuition for June"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg shadow-lg"
          >
            Send via WhatsApp
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AddFeeVoucher;
