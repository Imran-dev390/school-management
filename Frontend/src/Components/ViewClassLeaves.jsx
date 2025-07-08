import React, { useContext, useEffect, useState } from 'react'
import AdminLayout from './AdminLayout'
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader'
import { adminDataContext } from '../Context-Api/AdminContext'
import { authDataContext } from '../Context-Api/AuthContext'

// const ViewClassLeaves = () => {
//      const {adminData,fetchAdminData} = useContext(adminDataContext);
//         const {serverUrl} = useContext(authDataContext);
//          const [filterClass, setFilterClass] = useState('');
//         const [filterSection, setFilterSection] = useState('');
//         const [filterDate, setFilterDate] = useState('');
//         const {students = [], classes =  []} = adminData?.admin || {};
//           useEffect(()=>{
//             fetchAdminData();
//             },[fetchAdminData])


//             const availableSections = filterClass
//     ? [...new Set(students
//         .filter(stu => stu.Classs?.name === filterClass)
//         .map(stu => stu.Classs?.section)
//         .filter(Boolean))]
//     : [];
//     const filteredLeavesByFilterForm = students.flatMap(student => {
//   const studentClass = student.Classs?.name || '';
//   const studentSection = student.Classs?.section || '';

//   return (student.leave || [])
//     .filter(lv => {
//       const leaveDate = new Date(lv.date).toLocaleDateString('en-CA');
//       return (
//         leaveDate === filterDate &&
//         (filterClass ? studentClass === filterClass : true) &&
//         (filterSection ? studentSection === filterSection : true)
//       );
//     })
//     .map(lv => ({
//       _id: lv._id,
//       name: student.name,
//       parent: student.parent,
//       className: studentClass,
//       section: studentSection,
//       leaveDate: new Date(lv.date).toLocaleDateString('en-CA'),
//       reason: lv.leave,
//       status: lv.status || 'UnApproved'
//     }));
// });
//   return (


















// <AdminLayout adminName='Bright Future'>
//   <div className="flex flex-col mt-4 gap-3 h-full w-full overflow-hidden">
//     <AdminTeachDashboardHeader />

//     {/* Top Header */}
//     <div className="w-full text-white p-3 bg-[rgb(1,1,93)] flex-col md:flex-row justify-center items-center border-b pb-3 flex">
//       <div className="flex items-center justify-center w-full md:w-auto">
//         <h2 className="text-lg font-semibold flex items-center gap-2">
//           <i className="fas fa-calendar-alt"></i> Student Leaves
//         </h2>
//       </div>
//     </div>

//     {/* Main content with scroll */}
//     <main className="p-4 w-full flex-1 overflow-y-auto">
//       {/* Form */}
//       <form
//         className="w-full"
//         onSubmit={(e) => e.preventDefault()}
//       >
//         <div className="mt-6 border p-6 grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
//           {/* Class */}
//           <div className="flex flex-col">
//             <label htmlFor="classSelect" className="font-medium mb-1">
//               Select Class
//             </label>
//             <select
//               id="classSelect"
//               value={filterClass}
//               onChange={(e) => {
//                 setFilterClass(e.target.value);
//                 setFilterSection('');
//               }}
//               className="border rounded px-3 py-3"
//             >
//               <option value="">All Classes</option>
//               {classes.map((cls, idx) => (
//                 <option key={idx} value={cls.name}>{cls.name}</option>
//               ))}
//             </select>
//           </div>

//           {/* Section */}
//           <div className="flex flex-col">
//             <label htmlFor="sectionSelect" className="font-medium mb-1">
//               Select Section
//             </label>
//             <select
//               id="sectionSelect"
//               value={filterSection}
//               onChange={(e) => setFilterSection(e.target.value)}
//               className="border rounded px-3 py-3"
//               disabled={!filterClass}
//             >
//               <option value="">All Sections</option>
//               {availableSections.map((section, idx) => (
//                 <option key={idx} value={section}>{section}</option>
//               ))}
//             </select>
//           </div>

//           {/* Date */}
//           <div className="flex flex-col">
//             <label htmlFor="dateSelect" className="font-medium mb-1">
//               Select Date
//             </label>
//             <input
//               type="date"
//               id="dateSelect"
//               value={filterDate}
//               onChange={(e) => setFilterDate(e.target.value)}
//               className="border rounded px-3 py-3"
//             />
//           </div>
//         </div>

//         {/* Button */}
//         <div className="flex justify-center mt-4">
//           <button type="submit" className="bg-[rgb(1,1,93)] text-white px-4 py-2 rounded">
//             View Leaves
//           </button>
//         </div>
//       </form>

//       {/* Table */}
//       {filteredLeavesByFilterForm.length > 0 ? (
//         <div className="mt-6 border rounded overflow-x-auto">
//           <h3 className="font-semibold mb-2 text-lg">Filtered Leaves</h3>
//           <table className="w-full min-w-[800px] border-collapse text-sm">
//             <thead className="bg-gray-800 text-white">
//               <tr>
//                 <th className="border px-4 py-2 text-left">Name</th>
//                 <th className="border px-4 py-2 text-left">Father's Name</th>
//                 <th className="border px-4 py-2 text-center">Class</th>
//                 <th className="border px-4 py-2 text-center">Section</th>
//                 <th className="border px-4 py-2 text-center">Leave Date</th>
//                 <th className="border px-4 py-2 text-left">Reason</th>
//                 <th className="border px-4 py-2 text-center">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredLeavesByFilterForm.map((leave, idx) => (
//                 <tr key={idx} className="odd:bg-gray-50">
//                   <td className="border px-4 py-2">{leave.name}</td>
//                   <td className="border px-4 py-2">{leave.parent}</td>
//                   <td className="border px-4 py-2 text-center">{leave.className}</td>
//                   <td className="border px-4 py-2 text-center">{leave.section}</td>
//                   <td className="border px-4 py-2 text-center">{leave.leaveDate}</td>
//                   <td className="border px-4 py-2">{leave.reason}</td>
//                   <td className="border px-4 py-2 text-center">
//                     <span className={`px-2 py-1 rounded text-white ${
//                       leave.status.toLowerCase() === 'approved' ? 'bg-green-600' : 'bg-red-600'
//                     }`}>
//                       {leave.status}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         filterDate && (
//           <p className="mt-4 text-center text-gray-600">
//             No leaves found for the selected filters.
//           </p>
//         )
//       )}
//     </main>
//   </div>
// </AdminLayout>

//   )
// }





































const ViewClassLeaves = () => {
  const { adminData, fetchAdminData } = useContext(adminDataContext);
  const { serverUrl } = useContext(authDataContext);

  const [filterClass, setFilterClass] = useState('');
  const [filterSection, setFilterSection] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [filterMode, setFilterMode] = useState('date'); // 'date' or 'month'
  const [viewAll, setViewAll] = useState(false);

  const { students = [], classes = [] } = adminData?.admin || {};

  useEffect(() => {
    fetchAdminData();
  }, [fetchAdminData]);

  const availableSections = filterClass
    ? [...new Set(
        students
          .filter(stu => stu.Classs?.name === filterClass)
          .map(stu => stu.Classs?.section)
          .filter(Boolean)
      )]
    : [];

  const filteredLeavesByFilterForm = viewAll
    ? students.flatMap(student =>
        (student.leave || []).map(lv => ({
          _id: lv._id,
          name: student.name,
          parent: student.parent,
          className: student.Classs?.name || '',
          section: student.Classs?.section || '',
          leaveDate: new Date(lv.date).toLocaleDateString('en-CA'),
          reason: lv.leave,
          status: lv.status || 'UnApproved'
        }))
      )
    : students.flatMap(student => {
        const studentClass = student.Classs?.name || '';
        const studentSection = student.Classs?.section || '';

        return (student.leave || [])
          .filter(lv => {
            const dateObj = new Date(lv.date);
            const formatted = filterMode === 'month'
              ? `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, '0')}`
              : new Date(lv.date).toLocaleDateString('en-CA');

            return (
              formatted === filterDate &&
              (filterClass ? studentClass === filterClass : true) &&
              (filterSection ? studentSection === filterSection : true)
            );
          })
          .map(lv => ({
            _id: lv._id,
            name: student.name,
            parent: student.parent,
            className: studentClass,
            section: studentSection,
            leaveDate: new Date(lv.date).toLocaleDateString('en-CA'),
            reason: lv.leave,
            status: lv.status || 'UnApproved'
          }));
      });

  return (
    <AdminLayout adminName='Bright Future'>
      <div className="flex flex-col mt-4 gap-3 h-full w-full overflow-hidden">
        <AdminTeachDashboardHeader />

        {/* Header */}
        <div className="w-full text-white p-3 bg-[rgb(1,1,93)] flex justify-center items-center border-b">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <i className="fas fa-calendar-alt"></i> Student Leaves
          </h2>
        </div>

        {/* Main content */}
        <main className="p-4 w-full flex-1 overflow-y-auto">
          {/* Filter Form */}
          <form
            className="w-full"
            onSubmit={(e) => {
              e.preventDefault();
              setViewAll(false); // Only filter when not clicking "View All"
            }}
          >

 {/* Radio: Filter Type */}
            <div className="flex flex-col md:flex-row gap-4 items-center mb-4">
              <label className="font-semibold text-lg">View Clases Leaves:</label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="date"
                  checked={filterMode === 'date'}
                  onChange={() => setFilterMode('date')}
                />
                By Date
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="month"
                  checked={filterMode === 'month'}
                  onChange={() => setFilterMode('month')}
                />
                By Month
              </label>
              <button
                type="button"
                onClick={() => {
                  setFilterClass('');
                  setFilterSection('');
                  setFilterDate('');
                  setViewAll(true);
                }}
                className="ml-auto bg-[#C19703] text-white px-4 py-2 rounded"
              >
                View All
              </button>
            </div>
          

            {/* Selectors */}
            <div className="border p-6 grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
 
              {/* Class Select */}
              <div className="flex flex-col">
                <label className="font-medium mb-1">Select Class</label>
                <select
                  value={filterClass}
                  onChange={(e) => {
                    setFilterClass(e.target.value);
                    setFilterSection('');
                  }}
                  className="border rounded px-3 py-3"
                >
                  <option value="">All Classes</option>
                  {classes.map((cls, idx) => (
                    <option key={idx} value={cls.name}>
                      {cls.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Section Select */}
              <div className="flex flex-col">
                <label className="font-medium mb-1">Select Section</label>
                <select
                  value={filterSection}
                  onChange={(e) => setFilterSection(e.target.value)}
                  className="border rounded px-3 py-3"
                  disabled={!filterClass}
                >
                  <option value="">All Sections</option>
                  {availableSections.map((section, idx) => (
                    <option key={idx} value={section}>
                      {section}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date or Month */}
              <div className="flex flex-col">
                <label className="font-medium mb-1">
                  {filterMode === 'month' ? 'Select Month' : 'Select Date'}
                </label>
                <input
                  type={filterMode === 'month' ? 'month' : 'date'}
                  value={filterDate}
                  onChange={(e) => setFilterDate(e.target.value)}
                  className="border rounded px-3 py-3"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="bg-[rgb(1,1,93)] text-white px-4 py-2 rounded"
              >
                View Leaves
              </button>
            </div>
          </form>

          {/* Results Table */}
          {filteredLeavesByFilterForm.length > 0 ? (
            <div className="mt-6 border rounded overflow-x-auto">
              <h3 className="font-semibold mb-2 text-lg">Filtered Leaves</h3>
              <table className="w-full min-w-[800px] border-collapse text-sm">
                <thead className="bg-[rgb(1,1,93)] text-white">
                  <tr>
                    <th className="border px-4 py-2 text-left">Name</th>
                    <th className="border px-4 py-2 text-left">Father's Name</th>
                    <th className="border px-4 py-2 text-center">Class</th>
                    <th className="border px-4 py-2 text-center">Section</th>
                    <th className="border px-4 py-2 text-center">Leave Date</th>
                    <th className="border px-4 py-2 text-left">Reason</th>
                    <th className="border px-4 py-2 text-center">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLeavesByFilterForm.map((leave, idx) => (
                    <tr key={idx} className="odd:bg-gray-50">
                      <td className="border px-4 py-2">{leave.name}</td>
                      <td className="border px-4 py-2">{leave.parent}</td>
                      <td className="border px-4 py-2 text-center">{leave.className}</td>
                      <td className="border px-4 py-2 text-center">{leave.section}</td>
                      <td className="border px-4 py-2 text-center">{leave.leaveDate}</td>
                      <td className="border px-4 py-2">{leave.reason}</td>
                      <td className="border px-4 py-2 text-center">
                        <span className={`px-2 py-1 rounded text-white ${
                          leave.status.toLowerCase() === 'approved'
                            ? 'bg-green-600'
                            : 'bg-red-600'
                        }`}>
                          {leave.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            !viewAll && filterDate && (
              <p className="mt-4 text-center text-gray-600">
                No leaves found for the selected filters.
              </p>
            )
          )}
        </main>
      </div>
    </AdminLayout>
  );
};
export default ViewClassLeaves
