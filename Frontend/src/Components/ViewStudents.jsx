import React, { useContext, useEffect, useState } from 'react'
import { adminDataContext } from '../Context-Api/AdminContext'
import AdminLayout from './AdminLayout';
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader';
import axios from 'axios';
import { authDataContext } from '../Context-Api/AuthContext';

// const ViewStudents = () => {
//     const {adminData,fetchAdminData} = useContext(adminDataContext);
//     const {students = []} = adminData?.admin || {};
//     const [searchBy, setSearchBy] = useState('keyword');
// // const [searchField, setSearchField] = useState('');
// // const [keyword, setKeyword] = useState('');
// // const [selectedClass, setSelectedClass] = useState('');
// // const [selectedSection, setSelectedSection] = useState('');
// const [searchType, setSearchType] = useState("search_by_keyword");
// const [searchField, setSearchField] = useState("");
// const [searchKeyword, setSearchKeyword] = useState("");
// const [classId, setClassId] = useState("");
// const [sectionId, setSectionId] = useState("");
// const [filteredStudents, setFilteredStudents] = useState([]);


//     useEffect(()=>{
//        fetchAdminData();
//     },[fetchAdminData])
//     console.log("Students",students);

//     const handleSearch = () => {
//   let result = [...students];

//   if (searchType === "search_by_keyword" && searchField && searchKeyword) {
//     result = result.filter((student) =>
//       student[searchField]?.toString().toLowerCase().includes(searchKeyword.toLowerCase())
//     );
//   } else if (searchType === "search_by_class" && classId) {
//     result = result.filter((student) => student.classId === classId && (!sectionId || student.sectionId === sectionId));
//   }

//   setFilteredStudents(result);
// };

//   return (
//     <AdminLayout adminName='Bright Future'>
//        <div className="main w-full h-full flex flex-col gap-3 items-center">
//           <AdminTeachDashboardHeader/>
//            <div className="flex w-full text-white p-3 rounded-md bg-[rgb(1,1,93)] flex-col md:flex-row justify-center items-center border-b pb-3">
//           <h2 className="text-lg font-semibold flex items-center gap-2">
//             <i className="fas fa-calendar-alt"></i> View Students
//           </h2>
//         </div>
//         <div className="wrapper h-full bg-grey-100 p-4 border border-grey-300 w-full flex flex-col gap-3">
//           <form className="w-full p-4 rounded">
//             <h2 className='border-b text-lg font-semibold border-grey-300 w-fit'>Search Students</h2>
//   <div className="flex gap-4">
//     <label>
//       <input type="radio" value="search_by_keyword" checked={searchType === "search_by_keyword"} onChange={(e) => setSearchType(e.target.value)} />
//       Search by Keyword
//     </label>
//     <label>
//       <input type="radio" value="search_by_class" checked={searchType === "search_by_class"} onChange={(e) => setSearchType(e.target.value)} />
//       Search by Class
//     </label>
//   </div>

//   {searchType === "search_by_keyword" && (
//     <div className="mt-4 grid grid-cols-2 gap-4">
//       <select value={searchField} onChange={(e) => setSearchField(e.target.value)} className="form-select">
//         <option value="">Select Field</option>
//         <option value="name">Name</option>
//         <option value="phone">Phone</option>
//         <option value="email">Email</option>
//         {/* Add all other fields */}
//       </select>
//       <input
//         type="text"
//         placeholder="Enter keyword"
//         value={searchKeyword}
//         onChange={(e) => setSearchKeyword(e.target.value)}
//         className="form-input"
//       />
//     </div>
//   )}

//   {searchType === "search_by_class" && (
//     <div className="mt-4 grid grid-cols-2 gap-4">
//       <select value={classId} onChange={(e) => setClassId(e.target.value)} className="form-select p-3 border border-grey-300">
//         <option value="">Select Class</option>
//         {/* Replace with dynamic list if available */}
//         <option value="1">1st</option>
//         <option value="2">2nd</option>
//       </select>
//       <select value={sectionId} onChange={(e) => setSectionId(e.target.value)} className="form-select">
//         <option value="">Select Section</option>
//         <option value="A">A</option>
//         <option value="B">B</option>
//       </select>
//     </div>
//   )}

//   <button type="button" className="mt-2 bg-[rgb(1,1,93)] text-white p-1 rounded" onClick={handleSearch}>
//     Get Students!
//   </button>
// </form>
//    <div className="flex justify-end items-center flex-col shadow-md w-fit p-6 rounded-md">
//   <h2 className="text-xl font-semibold mb-4 text-gray-700">Search Students</h2>
// <input
//   type="text"
//   className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
// />
// </div>
// <table className="w-full mt-4 table-auto border-collapse border">
 
//   <thead>
//     <tr className="bg-gray-200">
//       <th className="border p-2">#</th>
//       <th className="border p-2">Name</th>
//       <th className="border p-2">Admission No.</th>
//       <th className="border p-2">Phone</th>
//       <th className="border p-2">Actions</th>
//     </tr>
//   </thead>
//   <tbody>
//     {filteredStudents.map((student, index) => (
//       <tr key={student.id}>
//         <td className="border p-2">{index + 1}</td>
//         <td className="border p-2">{student.name}</td>
//         <td className="border p-2">{student.admissionNumber}</td>
//         <td className="border p-2">{student.phone}</td>
//         <td className="border p-2">
//           <button className="text-blue-500">View</button>
//           <button className="text-red-500 ml-2">Delete</button>
//         </td>
//       </tr>
//     ))}
//   </tbody>
// </table>
// </div>
//        </div>
//     </AdminLayout>
//   )
// }











// const ViewStudents = () => {
//   const { adminData, fetchAdminData } = useContext(adminDataContext);
//   const { students = [] } = adminData?.admin || {};

//   const [searchType, setSearchType] = useState("search_by_keyword");
//   const [searchField, setSearchField] = useState("");
//   const [searchKeyword, setSearchKeyword] = useState("");
//   const [classId, setClassId] = useState("");
//   const [sectionId, setSectionId] = useState("");
//   const [filteredStudents, setFilteredStudents] = useState([]);

//   const [nameSearch, setNameSearch] = useState(""); // 🔍 For top-left search
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;

//   useEffect(() => {
//     fetchAdminData();
//   }, [fetchAdminData]);

//   const handleSearch = () => {
//     let result = [...students];
//     if (searchType === "search_by_keyword" && searchField && searchKeyword) {
//       result = result.filter((student) =>
//         student[searchField]?.toString().toLowerCase().includes(searchKeyword.toLowerCase())
//       );
//     } else if (searchType === "search_by_class" && classId) {
//       result = result.filter(
//         (student) =>
//           student.classId === classId && (!sectionId || student.sectionId === sectionId)
//       );
//     }
//     setFilteredStudents(result);
//     setCurrentPage(1); // reset to first page after search
//   };

//   // 🔍 Search by name (inline input above table)
//   const nameFiltered = filteredStudents.filter((student) =>
//     student.name.toLowerCase().includes(nameSearch.toLowerCase())
//   );

//   // 📄 Pagination logic
//   const totalPages = Math.ceil(nameFiltered.length / itemsPerPage);
//   const paginatedStudents = nameFiltered.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   return (
//     <AdminLayout adminName="Bright Future">
//       <div className="main w-full h-full flex flex-col gap-3 items-center">
//         <AdminTeachDashboardHeader />

//         <div className="w-full text-white p-3 rounded-md bg-[rgb(1,1,93)] flex justify-center items-center border-b pb-3">
//           <h2 className="text-lg font-semibold flex items-center gap-2">
//             <i className="fas fa-calendar-alt"></i> View Students
//           </h2>
//         </div>

//         <div className="wrapper h-full bg-grey-100 p-4 border border-grey-300 w-full flex flex-col gap-3">
//           {/* Search Filters */}
//           <form className="w-full p-4 rounded shadow-sm ">
//             <h2 className="border-b text-lg font-semibold border-grey-300 mb-3">Search Students</h2>

//             <div className="flex gap-4 mb-4">
//               <label>
//                 <input
//                   type="radio"
//                   value="search_by_keyword"
//                   checked={searchType === "search_by_keyword"}
//                   onChange={(e) => setSearchType(e.target.value)}
//                 />{" "}
//                 Search by Keyword
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   value="search_by_class"
//                   checked={searchType === "search_by_class"}
//                   onChange={(e) => setSearchType(e.target.value)}
//                 />{" "}
//                 Search by Class
//               </label>
//             </div>

//             {searchType === "search_by_keyword" && (
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <select
//                   value={searchField}
//                   onChange={(e) => setSearchField(e.target.value)}
//                   className="form-select p-2 border border-gray-300 rounded"
//                 >
//                   <option value="">Select Field</option>
//                   <option value="name">Name</option>
//                   <option value="phone">Phone</option>
//                   <option value="email">Email</option>
//                 </select>
//                 <input
//                   type="text"
//                   placeholder="Enter keyword"
//                   value={searchKeyword}
//                   onChange={(e) => setSearchKeyword(e.target.value)}
//                   className="form-input p-2 border border-gray-300 rounded"
//                 />
//               </div>
//             )}

//             {searchType === "search_by_class" && (
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//                 <select
//                   value={classId}
//                   onChange={(e) => setClassId(e.target.value)}
//                   className="form-select p-2 border border-gray-300 rounded"
//                 >
//                   <option value="">Select Class</option>
//                   <option value="1">1st</option>
//                   <option value="2">2nd</option>
//                 </select>
//                 <select
//                   value={sectionId}
//                   onChange={(e) => setSectionId(e.target.value)}
//                   className="form-select p-2 border border-gray-300 rounded"
//                 >
//                   <option value="">Select Section</option>
//                   <option value="A">A</option>
//                   <option value="B">B</option>
//                 </select>
//               </div>
//             )}

//             <button
//               type="button"
//               onClick={handleSearch}
//               className="mt-4 bg-[rgb(1,1,93)] text-white px-4 py-2 rounded"
//             >
//               Get Students!
//             </button>
//           </form>

//           {/* 🔍 Inline Search above Table */}
//           <div className="flex justify-end items-center mt-4">
//             <div>
//               <input
//                 type="text"
//                 placeholder="Search by Name..."
//                 value={nameSearch}
//                 onChange={(e) => setNameSearch(e.target.value)}
//                 className="border border-gray-300 rounded px-3 py-2 w-64"
//               />
//             </div>
//           </div>

//           {/* Table */}
//           <div className="overflow-x-auto  rounded mt-2 bg-white">
//             <table className="min-w-full border border-gray-300 table-auto border-collapse">
//               <thead className="bg-gray-100">
//                 <tr>
//                   <th className="border p-2">#</th>
//                   <th className="border p-2">Name</th>
//                   <th className="border p-2">Admission No.</th>
//                   <th className="border p-2">Phone</th>
//                   <th className="border p-2">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {paginatedStudents.map((student, index) => (
//                   <tr key={student.id} className="odd:bg-white even:bg-gray-50">
//                     <td className="border p-2">{(currentPage - 1) * itemsPerPage + index + 1}</td>
//                     <td className="border p-2">{student.name}</td>
//                     <td className="border p-2">{student.admissionNumber}</td>
//                     <td className="border p-2">{student.phone}</td>
//                     <td className="border p-2">
//                       <button className="text-blue-500">View</button>
//                       <button className="text-red-500 ml-2">Delete</button>
//                     </td>
//                   </tr>
//                 ))}
//                 {paginatedStudents.length === 0 && (
//                   <tr>
//                     <td colSpan="5" className="text-center text-gray-500 p-4">
//                       No students found.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//             <div className="text-sm text-gray-600">
//               Showing {paginatedStudents.length} of {nameFiltered.length} students
//             </div>
//           </div>

//           {/* Pagination */}
//           {totalPages > 1 && (
//             <div className="flex justify-center mt-4 gap-2">
//               <button
//                 disabled={currentPage === 1}
//                 onClick={() => setCurrentPage((prev) => prev - 1)}
//                 className="px-3 py-1 rounded border bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
//               >
//                 Prev
//               </button>
//               {Array.from({ length: totalPages }, (_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setCurrentPage(i + 1)}
//                   className={`px-3 py-1 rounded border ${
//                     currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-gray-100"
//                   }`}
//                 >
//                   {i + 1}
//                 </button>
//               ))}
//               <button
//                 disabled={currentPage === totalPages}
//                 onClick={() => setCurrentPage((prev) => prev + 1)}
//                 className="px-3 py-1 rounded border bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
//               >
//                 Next
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </AdminLayout>
//   );
// };


















const ViewStudents = () => {
  const { adminData, fetchAdminData } = useContext(adminDataContext);
  const { students = [] , classes = []} = adminData?.admin || {};
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [searchType, setSearchType] = useState("search_by_keyword");
  const [searchField, setSearchField] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [classId, setClassId] = useState("");
  const [sectionId, setSectionId] = useState("");
  const [filteredStudents, setFilteredStudents] = useState([]);
  const {serverUrl} = useContext(authDataContext);
  const [nameSearch, setNameSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchAdminData();
  }, [fetchAdminData]);

  // 🔍 Main filter logic
  // const handleSearch = () => {
  //   let result = [...students];

  //   if (searchType === "search_by_keyword" && searchField && searchKeyword) {
  //     result = result.filter((student) =>
  //       student[searchField]?.toString().toLowerCase().includes(searchKeyword.toLowerCase())
  //     );
  //   } else if (searchType === "search_by_class" && classId) {
  //     result = result.filter(
  //       (student) =>
  //         student.Classs?._id === classId && (!sectionId || student.Classs?.section === sectionId)
  //     );
  //   }

  //   setFilteredStudents(result);
  //   setCurrentPage(1);
  // };

const handleSearch = () => {
  let result = [...students];

  if (searchType === "search_by_keyword" && searchField && searchKeyword) {
    result = result.filter((student) =>
      student[searchField]?.toString().toLowerCase().includes(searchKeyword.toLowerCase())
    );
  } else if (searchType === "search_by_class" && classId) {
    result = result.filter(
      (student) =>
        student.Classs?._id === classId &&
        (!sectionId || student.Classs?.section === sectionId)
    );
  }

  setFilteredStudents(result);
  setCurrentPage(1);
  setSearchPerformed(true); // ✅ Mark search as performed
};


  // 🔍 Filtered by name input (top-left)
//  const displayedStudents = filteredStudents.length > 0 ? filteredStudents : students;
const displayedStudents = searchPerformed ? filteredStudents : students;
const nameFiltered = displayedStudents.filter((student) =>
  student.name.toLowerCase().includes(nameSearch.toLowerCase())
);
console.log("classes",classes);
//  const nameFiltered = filteredStudents.filter((student) =>
//    student.name.toLowerCase().includes(nameSearch.toLowerCase())
//  );

const selectedClassObj = classes.find((cls) => cls._id === classId);
const sectionOptions = selectedClassObj ? [selectedClassObj.section] : [];
  const totalPages = Math.ceil(nameFiltered.length / itemsPerPage);
  const paginatedStudents = nameFiltered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
 const handleDeleteById = async (id) => {
    // toast.success("Performing Action Wait for few Seconds")
     try {
      const response = await axios.delete(`${serverUrl}/api/admin/students/${id}`, {
        withCredentials: true,
      });
      if (response.status === 200) {
         alert("Student deleted successfully.");
      // displayedStudents.filter(prev => prev._id !== id);
         //setFilteredStudents(prev => prev.filter(t => t._id !== id));
         //  setTotalStudents(prev => prev.filter(t => t._id !== id));
          // Remove from filtered list
      setFilteredStudents((prev) => prev.filter((student) => student._id !== id));

      // Also update from full list if no search is performed
      if (!searchPerformed) {
        adminData.admin.students = adminData.admin.students.filter((student) => student._id !== id);
      }

      // Reset pagination if current page becomes empty
      if (paginatedStudents.length === 1 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    }
    } catch (err) {
      alert(err?.response?.data?.message || "Delete failed.");
    }
  };
  return (
    <AdminLayout adminName="Bright Future">
      <div className="main w-full flex mt-4 flex-col gap-3 items-center">
        <AdminTeachDashboardHeader />

        {/* Header */}
        <div className="w-full text-white p-3 rounded-md bg-[rgb(1,1,93)] flex justify-center items-center border-b pb-3">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <i className="fas fa-calendar-alt" /> View Students
          </h2>
        </div>

        {/* Wrapper */}
        <div className="wrapper h-full bg-grey-100 p-4 border border-grey-300 w-full flex flex-col gap-4">

          {/* Form Filters */}
          <form className="w-full p-4 rounded">
            <h2 className="border-b text-lg font-semibold w-fit border-grey-300 mb-3">Search Students</h2>

            <div className="flex gap-4 mb-4">
              <label>
                <input
                  type="radio"
                  value="search_by_keyword"
                  checked={searchType === "search_by_keyword"}
                  onChange={(e) => setSearchType(e.target.value)}
                />{" "}
                Search by Keyword
              </label>
              <label>
                <input
                  type="radio"
                  value="search_by_class"
                  checked={searchType === "search_by_class"}
                  onChange={(e) => setSearchType(e.target.value)}
                />{" "}
                Search by Class
              </label>
            </div>

            {/* Keyword */}
            {searchType === "search_by_keyword" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select
                  value={searchField}
                  onChange={(e) => setSearchField(e.target.value)}
                  className="form-select  p-2 border border-gray-300 rounded"
                >
                  <option value="">Select Field</option>
                  <option value="name">Name</option>
                  <option value="phone">Phone</option>
                  <option value="email">Email</option>
                  <option value="gender">Gender</option>
                  <option value="adress">Address</option>
                </select>
                <input
                  type="text"
                  placeholder="Enter keyword"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  className="form-input p-2  border border-gray-300 rounded"
                />
              </div>
            )}

            {/* Class & Section */}
            {searchType === "search_by_class" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* <select
                  value={classId}
                  onChange={(e) => setClassId(e.target.value)}
                  className="form-select p-2 border border-gray-300 rounded"
                >
                  <option value="">Select Class</option>
                  <option value="grade 2">Grade 2</option>
                  <option value="grade 3">Grade 3</option>
                </select> */}
                <select
  value={classId}
  onChange={(e) => setClassId(e.target.value)}
  className="form-select p-2 border border-gray-300 rounded"
>
  <option value="">Select Class</option>
  {classes.map((cls) => (
    <option key={cls._id} value={cls._id}>
      {cls.name}
    </option>
  ))}
</select>

                {/* <select
                  value={sectionId}
                  onChange={(e) => setSectionId(e.target.value)}
                  className="form-select p-2 border border-gray-300 rounded"
                >
                    <option value="">Select Section</option>
                    {sectionId?.map((section,idx)=>{
                      return   <option value={section.section}>{section.section}</option>
                    })}
                </select> */}

                <select
  value={sectionId}
  onChange={(e) => setSectionId(e.target.value)}
  className="form-select p-2 border border-gray-300 rounded"
>
  <option value="">Select Section</option>
  {sectionOptions.map((section) => (
    <option key={section} value={section}>
      {section}
    </option>
  ))}
</select>

              </div>
            )}

            <button
              type="button"
              onClick={handleSearch}
              className="mt-4 bg-[rgb(1,1,93)] text-white px-4 py-2 rounded"
            >
              Get Students!
            </button>
          </form>

          {/* 🔍 Name Search */}
          <div className="flex justify-end items-center mt-0">
            <input
              type="text"
              placeholder="Search by name..."
              value={nameSearch}
              onChange={(e) => setNameSearch(e.target.value)}
              className="border border-gray-300 rounded px-3 py-1 w-64"
            />
          </div>

          {/* 📊 Table */}
          <div className="overflow-x-auto border border-gray-300 rounded mt-0 bg-white">
            <table className="min-w-full table-auto border-collapse">
              <thead className="bg-[rgb(1,1,93)] text-white">
                <tr>
                  <th className="border p-2">#</th>
                  <th className="border p-2">Name</th>
                  <th className='border p-2'>Roll</th>
                  <th className="border p-2">Gender</th>
                  <th className="border p-2">Phone</th>
                  <th className="border p-2">Email</th>
                  <th className="border p-2">Class</th>
                  <th className="border p-2">Section</th>
                  <th className="border p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedStudents.map((student, index) => (
                  <tr key={student._id} className="odd:bg-white even:bg-gray-50">
                    <td className="border p-2">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                    <td className="border p-2">{student.name}</td>
                     <td className="border p-2">{student.Roll}</td>
                    <td className="border p-2">{student.gender}</td>
                    <td className="border p-2">{student.phone}</td>
                    <td className="border p-2">{student.email}</td>
                    <td className="border p-2">{student.Classs?.name || "-"}</td>
                    <td className="border p-2">{student.Classs?.section || "-"}</td>
                    <td className="border p-2">
                      <button className="text-blue-500">View</button>
                      <button
                     onClick={()=> handleDeleteById(student._id)}
                      className="text-red-500 ml-2">Delete</button>
                    </td>
                  </tr>
                ))}
                {paginatedStudents.length === 0 && (
                  <tr>
                    <td colSpan="8" className="text-center text-gray-500 p-4">
                      No students found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>


          {/* Pagination Controls */}
          {/* {totalPages > 1 && ( */}
            <div className="flex justify-between items-center mt-4 gap-2">
                <div className="first">
                 <span className="text-gray-600 text-sm">
              Showing {paginatedStudents.length} of {nameFiltered.length} students
            </span>
            </div>
            <div className="second flex gap-3">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300"
              >
                Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 border rounded ${
                    currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-100"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300"
              >
                Next
              </button>
              </div>
            </div>
          {/* )} */}
        </div>
      </div>
    </AdminLayout>
  );
};
export default ViewStudents


//  <div className="w-full px-4">
//           <h2 className="text-xl font-bold mb-4">Students List</h2>
//           <div className="overflow-auto">
//             <table className="table-auto border-collapse w-full text-sm text-left text-gray-700 shadow rounded-md">
//               <thead className="bg-blue-600 text-white">
//                 <tr>
//                   <th className="px-4 py-2"><input type="checkbox" /></th>
//                   <th className="px-4 py-2">Student Name</th>
//                   <th className="px-4 py-2">Admission Number</th>
//                   <th className="px-4 py-2">Phone</th>
//                   <th className="px-4 py-2">Class</th>
//                   <th className="px-4 py-2">Section</th>
//                   <th className="px-4 py-2">Roll Number</th>
//                   <th className="px-4 py-2">Status</th>
//                   <th className="px-4 py-2">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {students.map((student, idx) => (
//                   <tr key={student.id} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
//                     <td className="px-4 py-2">
//                       <input type="checkbox" value={student.id} />
//                     </td>
//                     <td className="px-4 py-2">{student.name}</td>
//                     <td className="px-4 py-2">{student.admission_number || "-"}</td>
//                     <td className="px-4 py-2">{student.phone}</td>
//                     <td className="px-4 py-2">{student.class?.name || '-'}</td>
//                     <td className="px-4 py-2">{student.class?.section || '-'}</td>
//                     <td className="px-4 py-2">{student.roll_number || '-'}</td>
//                     <td className="px-4 py-2">
//                       <span className={`px-2 py-1 text-xs rounded ${student.status === 'Active' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
//                         {student.status}
//                       </span>
//                     </td>
//                     <td className="px-4 py-2">
//                       <button className="text-blue-600 hover:underline text-xs">Edit</button>
//                       <span className="mx-1">|</span>
//                       <button className="text-red-600 hover:underline text-xs">Delete</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>

//             {students.length === 0 && (
//               <div className="text-center py-4 text-gray-500">No students found.</div>
//             )}
//           </div>
//         </div>