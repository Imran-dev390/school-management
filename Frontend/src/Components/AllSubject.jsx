import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { adminDataContext } from '../Context-Api/AdminContext'
import AdminLayout from './AdminLayout'
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader'
import { Link } from 'react-router-dom'

// const AllSubject = () => {
//   const { adminData, fetchAdminData } = useContext(adminDataContext);
//   const { subjects = [], classes = [], sessions = [],teachers = [], currentSession = {} } = adminData?.admin || {};

//   useEffect(() => {
//     fetchAdminData();
//   }, [fetchAdminData]);

//   // Helper: get class names from class IDs
//   const getClassNames = (classIds = []) => {
//     return classIds
//       .map((id) => classes.find((cls) => cls._id === id)?.name)
//       .filter(Boolean)
//       .join(', ');
//   };

// //   const getTeachersForSubject = (subjectClassIds = []) => {
// //   const matchedTeachers = new Set();

// //   teachers.forEach((teacher) => {
// //     teacher.assignedClass?.forEach((assigned) => {
// //       const assignedClassId = assigned.class?._id;
// //       if (subjectClassIds.includes(assignedClassId)) {
// //         matchedTeachers.add(teacher.name); // you can also add profile or role
// //       }
// //     });
// //   });

// //   return Array.from(matchedTeachers).join(', ');
// // };



// // const getTeachersForSubject = (subject) => {
// //   const result = [];

// //   teachers.forEach((teacher) => {
// //     const teachesThisSubject = teacher.teachSubject.includes(subject._id);

// //     if (!teachesThisSubject) return;

// //     // Collect assigned class IDs
// //     const teacherClassIds = teacher.assignedClass.map((assigned) => assigned.class);

// //     // Match classes that are also part of this subject
// //     const matchedClassIds = subject.classes.filter((classId) =>
// //       teacherClassIds.includes(classId)
// //     );

// //     if (matchedClassIds.length > 0) {
// //       // Get class names for display
// //       const matchedClassNames = matchedClassIds
// //         .map((id) => classes.find((cls) => cls._id === id)?.name)
// //         .filter(Boolean);

// //       const teacherLabel =
// //         matchedClassNames.length > 1
// //           ? `${teacher.name} (${matchedClassNames.join(', ')})`
// //           : teacher.name;

// //       result.push(teacherLabel);
// //     }
// //   });

// //   return result.length > 0 ? result.join(', ') : '-';
// // };





// const getTeachersForSubject = (subject) => {
//   const result = [];

//   teachers.forEach((teacher) => {
//     // Check if teacher teaches this subject (by matching _id)
//     const teachesThisSubject = teacher.teachSubject.some(
//       (subj) => subj._id === subject._id
//     );
//     if (!teachesThisSubject) return;

//     // Normalize assigned class IDs
//     const teacherClassIds = teacher.assignedClass.map((assigned) =>
//       typeof assigned.class === 'object' ? assigned.class._id : assigned.class
//     );

//     // Check if any class in subject.classes matches the teacher’s assignedClass
//     const matchedClassIds = subject.classes.filter((classId) =>
//       teacherClassIds.includes(classId)
//     );

//     if (matchedClassIds.length > 0) {
//       const matchedClassNames = matchedClassIds
//         .map((id) => classes.find((cls) => cls._id === id)?.name)
//         .filter(Boolean);

//       const teacherLabel =
//         matchedClassNames.length > 1
//           ? `${teacher.name} (${matchedClassNames.join(', ')})`
//           : teacher.name;

//       result.push(teacherLabel);
//     }
//   });

//   return result.length > 0 ? result.join(', ') : 'Assign';
// };


// console.log("teachers",teachers)
//   return (
//     <AdminLayout adminName='Bright Future'>
//     <div className="flex flex-col gap-3 h-full w-full mt-4 md:ml-4 ml-0">
//       {/* School Header */}
//       <AdminTeachDashboardHeader/>

//       {/* Section Header */}
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
//           <i className="fas fa-tags text-gray-500"></i>
//           Subjects
//         </h2>
//         <div className="flex gap-2">
//           <button className="bg-blue-500 text-white text-sm px-3 py-1 rounded hover:bg-blue-600">
//             + Add Subject
//           </button>
//           <button className="bg-green-500 text-white text-sm px-3 py-1 rounded hover:bg-green-600">
//             + Add Subject Type
//           </button>
//         </div>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full border border-gray-300 rounded-md">
//           <thead>
//             <tr className="bg-blue-600 text-white">
//               <th className="py-2 px-4 text-left">Subject Name</th>
//               <th className="py-2 px-4 text-left">Subject Code</th>
//               <th className="py-2 px-4 text-left">Department</th>
//               <th className="py-2 px-4 text-left">Classes</th>
//               <th className='py-2 px-4 text-left'>Teachers</th>
//             </tr>
//           </thead>
//           <tbody>
//             {subjects.length === 0 ? (
//               <tr>
//                 <td colSpan="5" className="text-center text-gray-500 py-4">
//                   No subjects available.
//                 </td>
//               </tr>
//             ) : (
//               subjects.map((subject) => (
//                 <tr key={subject._id} className="border-b hover:bg-gray-50">
//                   <td className="py-2 px-4">{subject.name}</td>
//                   <td className="py-2 px-4">{subject.code}</td>
//                   <td className="py-2 px-4">{subject.department || '-'}</td>
//                   <td className="py-2 px-4">{getClassNames(subject.classes)}</td>
//                 {/* <td className="py-2 px-4">{getTeachersForSubject(subject.classes)}</td> */}
//                 <td className="py-2 px-4">{getTeachersForSubject(subject)}</td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//     </AdminLayout>
//   );
// };





// const AllSubject = () => {
//   const { adminData, fetchAdminData } = useContext(adminDataContext);
//   const {
//     subjects = [],
//     classes = [],
//     teachers = [],
//   } = adminData?.admin || {};

//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     fetchAdminData();
//   }, [fetchAdminData]);

//   const getClassNames = (classIds = []) => {
//     return classIds
//       .map((id) => classes.find((cls) => cls._id === id)?.name)
//       .filter(Boolean)
//       .join(', ');
//   };

// //   const getTeachersForSubject = (subject) => {
// //     const result = [];

// //     teachers.forEach((teacher) => {
// //       const teachesThisSubject = teacher.teachSubject?.some(
// //         (subj) => subj._id === subject._id
// //       );
// //       if (!teachesThisSubject) return;

// //       const teacherClassIds = teacher.assignedClass?.map((assigned) =>
// //         typeof assigned.class === 'object' ? assigned.class._id : assigned.class
// //       ) || [];

// //       const matchedClassIds = subject.classes.filter((classId) =>
// //         teacherClassIds.includes(classId)
// //       );

// //       if (matchedClassIds.length > 0) {
// //         result.push(teacher.name);
// //       }
// //     });

// //     return result.length > 0 ? `${result.join(', ')} (${result.length})` : 'Assign Teachers';
// //   };


// const getTeachersForSubject = (subject) => {
//   let count = 0;

//   teachers.forEach((teacher) => {
//     const teachesThisSubject = teacher.teachSubject?.some(
//       (subj) => subj._id === subject._id
//     );
//     if (!teachesThisSubject) return;

//     const teacherClassIds = teacher.assignedClass?.map((assigned) =>
//       typeof assigned.class === 'object' ? assigned.class._id : assigned.class
//     ) || [];

//     const matchedClassIds = subject.classes.filter((classId) =>
//       teacherClassIds.includes(classId)
//     );

//     if (matchedClassIds.length > 0) {
//       count++;
//     }
//   });

//   return count > 0 ? count : 'Assign Teachers';
// };

//   const filteredSubjects = subjects.filter((subject) => {
//     const teacherNames = getTeachersForSubject(subject);
//     const classNames = getClassNames(subject.classes);
//     return (
//       subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       subject.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       teacherNames.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       classNames.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   });

//   return (
//     <AdminLayout adminName="Bright Future">
//       <div className="flex flex-col gap-3 h-full w-full mt-4 md:ml-4 ml-0">
//         {/* Header */}
       
//         <AdminTeachDashboardHeader />

//         {/* Section Title and Actions */}
//          {/* <div className="w-full text-white justify-around  bg-[rgb(1,1,93)]  hover:bg-[#C19703] text-xl font-semibold flex items-center  rounded-md py-3 shadow-md">
//              <div>
//             <i className="fas fa-graduation-cap mr-2"></i> Subjects
//           </div>
//           <div className="parent flex justify-end">
//           <div className="flex gap-2">
//             <button className="bg-transparent border-[1px] border-white text-white text-sm px-3 py-1 rounded hover:bg-blue-600">
//               + Add Subject
//             </button>
//             <button className="bg-transparent border-[1px] border-white text-white text-sm px-3 py-1 rounded hover:bg-green-600">
//               + Add Subject Type
//             </button>
//           </div>
//           </div>
//         </div> */}

//         <div className="w-full bg-[rgb(1,1,93)] hover:bg-[#C19703] text-xl font-semibold text-white rounded-md py-3 shadow-md flex items-center">
//   {/* Left spacer */}
//   {/* <div className="flex-1"></div> */}

//   {/* Center title */}
//   <div className="flex-1 flex justify-center items-center">
//     <i className="fas fa-graduation-cap font-semibold mr-2"></i> Subjects
//   </div>

//   {/* Right buttons */}
//   <div className="flex-1 flex justify-end gap-2 pr-4">
//     <button className="bg-transparent border border-white text-white text-sm px-3 py-1 rounded hover:bg-blue-600">
//       + Add Subject
//     </button>
//     <button className="bg-transparent border border-white text-white text-sm px-3 py-1 rounded hover:bg-green-600">
//       + Add Subject Type
//     </button>
//   </div>
// </div>

//    <main className='border-[1px] p-4 border-grey-300'>
//         {/* Search Bar */}
//         <div className="mb-4 flex justify-end">
//           <input
//             type="text"
//             placeholder="Search subject, code, teacher, class..."
//             className="w-[30%]  px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>

//         {/* Table */}
//         <div className="overflow-x-auto">
//           <table className="min-w-full border border-gray-300 rounded-md">
//             <thead>
//               <tr className="bg-blue-600 text-white">
//                 <th className="py-2 px-4 border border-gray-300 text-left">Subject Name</th>
//                 <th className="py-2 px-4 border border-gray-300 text-left">Subject Code</th>
//                 <th className="py-2 px-4 border border-gray-300 text-left">Department</th>
//                 <th className="py-2 px-4 border border-gray-300 text-left">Classes</th>
//                 <th className="py-2 px-4 border border-gray-300 text-left">Teachers</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredSubjects.length === 0 ? (
//                 <tr>
//                   <td colSpan="5" className="text-center text-gray-500 py-4">
//                     No subjects found.
//                   </td>
//                 </tr>
//               ) : (
//                 filteredSubjects.map((subject) => (
//                   <tr key={subject._id} className="hover:bg-gray-50">
//                     <td className="py-2 px-4 border border-gray-200">{subject.name}</td>
//                     <td className="py-2 px-4 border border-gray-200">{subject.code}</td>
//                     <td className="py-2 px-4 border border-gray-200">
//                       {subject.department || '-'}
//                     </td>
//                     <td className="py-2 px-4 border border-gray-200">
//                       {getClassNames(subject.classes)}
//                     </td>
//                     <td className="py-2 px-4 border border-gray-200">
//                       {getTeachersForSubject(subject)}
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//         </main>
//       </div>
//     </AdminLayout>
//   );
// };


































// const AllSubject = () => {
//   const { adminData, fetchAdminData } = useContext(adminDataContext);
//   const {
//     subjects = [],
//     classes = [],
//     teachers = [],
//   } = adminData?.admin || {};

//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const pageSize = 13; // Number of subjects per page

//   useEffect(() => {
//     fetchAdminData();
//   }, [fetchAdminData]);

//   // Reset page to 1 whenever searchTerm changes
//   useEffect(() => {
//     setCurrentPage(1);
//   }, [searchTerm]);

//   const getClassNames = (classIds = []) => {
//     return classIds
//       .map((id) => classes.find((cls) => cls._id === id)?.name)
//       .filter(Boolean)
//       .join(', ');
//   };

//   const getTeachersForSubject = (subject) => {
//     let count = 0;

//     teachers.forEach((teacher) => {
//       const teachesThisSubject = teacher.teachSubject?.some(
//         (subj) => subj._id === subject._id
//       );
//       if (!teachesThisSubject) return;

//       const teacherClassIds = teacher.assignedClass?.map((assigned) =>
//         typeof assigned.class === 'object' ? assigned.class._id : assigned.class
//       ) || [];

//       const matchedClassIds = subject.classes.filter((classId) =>
//         teacherClassIds.includes(classId)
//       );

//       if (matchedClassIds.length > 0) {
//         count++;
//       }
//     });

//     return count > 0 ? count : 'Assign Teachers';
//   };

//   const filteredSubjects = subjects.filter((subject) => {
//     const teacherNames = getTeachersForSubject(subject);
//     const classNames = getClassNames(subject.classes);
//     return (
//       subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       subject.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       teacherNames.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
//       classNames.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   });

//   // Pagination logic
//   const totalPages = Math.ceil(filteredSubjects.length / pageSize);
//   const paginatedSubjects = filteredSubjects.slice(
//     (currentPage - 1) * pageSize,
//     currentPage * pageSize
//   );

//   return (
//     <AdminLayout adminName="Bright Future">
//       <div className="flex flex-col gap-3 h-full w-full mt-4 md:ml-4 ml-0">
//         <AdminTeachDashboardHeader />

//         <div className="w-full bg-[rgb(1,1,93)] hover:bg-[#C19703] text-xl font-semibold text-white rounded-md py-3 shadow-md flex items-center">
//           <div className="flex-1 flex justify-center items-center">
//             <i className="fas fa-graduation-cap font-semibold mr-2"></i> Subjects
//           </div>

//           <div className="flex-1 flex justify-end gap-2 pr-4">
//             <button className="bg-transparent border border-white text-white text-sm px-3 py-1 rounded hover:bg-blue-600">
//               + Add Subject
//             </button>
//             <button className="bg-transparent border border-white text-white text-sm px-3 py-1 rounded hover:bg-green-600">
//               + Add Subject Type
//             </button>
//           </div>
//         </div>

//         <main className="border-[1px] p-4 border-grey-300">
//           {/* Search Bar */}
//           <div className="mb-4 flex justify-end">
//             <input
//               type="text"
//               placeholder="Search subject, code, teacher, class..."
//               className="w-[30%] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>

//           {/* Table */}
//           <div className="overflow-x-auto">
//             <table className="min-w-full border border-gray-300 rounded-md">
//               <thead>
//                 <tr className="bg-blue-600 text-white">
//                   <th className="py-2 px-4 border border-gray-300 text-left">Subject Name</th>
//                   <th className="py-2 px-4 border border-gray-300 text-left">Subject Code</th>
//                   <th className="py-2 px-4 border border-gray-300 text-left">Department</th>
//                   <th className="py-2 px-4 border border-gray-300 text-left">Classes</th>
//                   <th className="py-2 px-4 border border-gray-300 text-left">Teachers</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {paginatedSubjects.length === 0 ? (
//                   <tr>
//                     <td colSpan="5" className="text-center text-gray-500 py-4">
//                       No subjects found.
//                     </td>
//                   </tr>
//                 ) : (
//                   paginatedSubjects.map((subject) => (
//                     <tr key={subject._id} className="hover:bg-gray-50">
//                       <td className="py-2 px-4 border border-gray-200">{subject.name}</td>
//                       <td className="py-2 px-4 border border-gray-200">{subject.code}</td>
//                       <td className="py-2 px-4 border border-gray-200">
//                         {subject.department || '-'}
//                       </td>
//                       <td className="py-2 px-4 border border-gray-200">
//                         {getClassNames(subject.classes)}
//                       </td>
//                       <td className="py-2 px-4 border border-gray-200">
//                         {getTeachersForSubject(subject)}
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>

//           {/* Pagination Controls
//           {totalPages > 1 && (
//             <div className="flex justify-between items-center mt-4">
//               <button
//                 className="px-3 py-1 border rounded disabled:opacity-50"
//                 onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//                 disabled={currentPage === 1}
//               >
//                 Previous
//               </button>

//               <div>
//                 Page {currentPage} of {totalPages}
//               </div>

//               <button
//                 className="px-3 py-1 border rounded disabled:opacity-50"
//                 onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//                 disabled={currentPage === totalPages}
//               >
//                 Next
//               </button>
//             </div>
//           )} */}


          

// {/* Pagination Controls */}
// <div className="flex justify-center items-center mt-4 gap-2">
//   <button
//     className={`px-3 py-1 border rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
//     onClick={() => {
//       if (currentPage > 1) setCurrentPage(currentPage - 1);
//     }}
//   >
//     Previous
//   </button>

//   {/* Render numbered page buttons */}
//   {[...Array(totalPages)].map((_, idx) => {
//     const pageNum = idx + 1;
//     return (
//       <button
//         key={pageNum}
//         className={`px-3 py-1 border rounded ${
//           currentPage === pageNum
//             ? 'bg-blue-600 text-white'
//             : 'hover:bg-gray-200'
//         }`}
//         onClick={() => setCurrentPage(pageNum)}
//       >
//         {pageNum}
//       </button>
//     );
//   })}

//   <button
//     className={`px-3 py-1 border rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
//     onClick={() => {
//       if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//     }}
//   >
//     Next
//   </button>
// </div>

//         </main>
//       </div>
//     </AdminLayout>
//   );
// };







const AllSubject = () => {
  const { adminData, fetchAdminData } = useContext(adminDataContext);
  const {
    subjects = [],
    classes = [],
    teachers = [],
  } = adminData?.admin || {};

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 13; // Number of subjects per page

  useEffect(() => {
    fetchAdminData();
  }, [fetchAdminData]);

  // Reset page to 1 whenever searchTerm changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const getClassNames = (classIds = []) => {
    return classIds
      .map((id) => classes.find((cls) => cls._id === id)?.name)
      .filter(Boolean)
      .join(', ');
  };

  const getTeachersForSubject = (subject) => {
    let count = 0;

    teachers.forEach((teacher) => {
      const teachesThisSubject = teacher.teachSubject?.some(
        (subj) => subj._id === subject._id
      );
      if (!teachesThisSubject) return;

      const teacherClassIds = teacher.assignedClass?.map((assigned) =>
        typeof assigned.class === 'object' ? assigned.class._id : assigned.class
      ) || [];

      const matchedClassIds = subject.classes.filter((classId) =>
        teacherClassIds.includes(classId)
      );

      if (matchedClassIds.length > 0) {
        count++;
      }
    });

    return count > 0 ? count : 'Assign Teachers';
  };

  const filteredSubjects = subjects.filter((subject) => {
    const teacherNames = getTeachersForSubject(subject);
    const classNames = getClassNames(subject.classes);
    return (
      subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subject.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacherNames.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
      classNames.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredSubjects.length / pageSize);
  const paginatedSubjects = filteredSubjects.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // Calculate showing records range
  const startRecord = filteredSubjects.length === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const endRecord = Math.min(currentPage * pageSize, filteredSubjects.length);
  const totalRecords = filteredSubjects.length;

  return (
    <AdminLayout adminName="Bright Future">
      <div className="flex flex-col gap-3 h-full w-full mt-4 md:ml-4 ml-0">
        <AdminTeachDashboardHeader />

        <div className="w-full bg-[rgb(1,1,93)] hover:bg-[#C19703] text-xl font-semibold text-white rounded-md py-3 shadow-md flex items-center">
          <div className="flex-1 flex justify-center items-center">
            <i className="fas fa-graduation-cap font-semibold mr-2"></i> Subjects
          </div>

          <div className="flex-1 flex justify-end gap-2 pr-4">
            <Link to="/Add/Subject/admin" className="bg-transparent border border-white text-white text-sm px-3 py-1 rounded hover:bg-blue-600">
              + Add Subject
            </Link>
            <button className="bg-transparent border border-white text-white text-sm px-3 py-1 rounded hover:bg-green-600">
              + Add Subject Type
            </button>
          </div>
        </div>

        <main className="border-[1px] p-4 border-grey-300">
          {/* Search Bar */}
          <div className="mb-4 flex justify-end">
            <input
              type="text"
              placeholder="Search subject, code, teacher, class..."
              className="w-[30%] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 rounded-md">
              <thead>
                <tr className="bg-[rgb(1,1,93)] text-white">
                  <th className="py-2 px-4 border border-gray-300 text-left">Subject Name</th>
                  <th className="py-2 px-4 border border-gray-300 text-left">Subject Code</th>
                  <th className="py-2 px-4 border border-gray-300 text-left">Department</th>
                  <th className="py-2 px-4 border border-gray-300 text-left">Classes</th>
                  <th className="py-2 px-4 border border-gray-300 text-left">Teachers</th>
                </tr>
              </thead>
              <tbody>
                {paginatedSubjects.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center text-gray-500 py-4">
                      No subjects found.
                    </td>
                  </tr>
                ) : (
                  paginatedSubjects.map((subject) => (
                    <tr key={subject._id} className="hover:bg-gray-50">
                      <td className="py-2 px-4 border border-gray-200">{subject.name}</td>
                      <td className="py-2 px-4 border border-gray-200">{subject.code}</td>
                      <td className="py-2 px-4 border border-gray-200">
                        {subject.department || '-'}
                      </td>
                      <td className="py-2 px-4 border border-gray-200">
                        {getClassNames(subject.classes)}
                      </td>
                      <td className="py-2 px-4 border border-gray-200">
                        {getTeachersForSubject(subject) === 'Assign Teachers' ? (
    <Link
      to={`/assign/teacher/${subject._id}`}
      className="text-[rgb(1,1,93)] hover:underline"
    >
      Assign Teachers
    </Link>
  ) : (
     <Link
      to={`/assign/teacher/${subject._id}`}
      className="text-[rgb(1,1,93)] hover:underline"
    >
      {getTeachersForSubject(subject)}
    </Link>
    
  )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Showing X to Y of Z Records */}
          {/* Showing records text and Pagination Controls */}
<div className="flex justify-between items-center mt-4">
  {/* Left side: Showing records */}
  <div className="text-sm text-gray-600">
    Showing {startRecord} to {endRecord} of {totalRecords} Records
  </div>

  {/* Right side: Pagination buttons */}
  <div className="flex items-center gap-2">
    <button
      className={`px-3 py-1 border rounded ${
        currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'
      }`}
      onClick={() => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
      }}
    >
      Previous
    </button>

    {[...Array(totalPages)].map((_, idx) => {
      const pageNum = idx + 1;
      return (
        <button
          key={pageNum}
          className={`px-3 py-1 border rounded ${
            currentPage === pageNum
              ? 'bg-blue-600 text-white'
              : 'hover:bg-gray-200'
          }`}
          onClick={() => setCurrentPage(pageNum)}
        >
          {pageNum}
        </button>
      );
    })}

    <button
      className={`px-3 py-1 border rounded ${
        currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'
      }`}
      onClick={() => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
      }}
    >
      Next
    </button>
  </div>
</div>

        </main>
      </div>
    </AdminLayout>
  );
};

export default AllSubject;














// const AllSubject = () => {
//     const {adminData,fetchAdminData} = useContext(adminDataContext);
//      const {subjects = [] } = adminData?.admin || [];
//     useEffect(()=>{
//           fetchAdminData();
//     },[fetchAdminData])
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default AllSubject
