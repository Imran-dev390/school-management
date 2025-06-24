// import React, { useContext, useEffect, useState } from "react";
// import { Sidebar } from "./Sidebar";
// import { adminDataContext } from "../Context-Api/AdminContext";
// import { authDataContext } from "../Context-Api/AuthContext";

// const CllassCard = () => {
//   // Dummy class data
//     const { adminData } = useContext(adminDataContext);
//     const { serverUrl } = useContext(authDataContext);
//     const { fetchAdminData } = useContext(adminDataContext);
//     const { classes = [] } = adminData?.admin || {};
//     const [totalClasses, setTotalClasses] = useState([]);
//     const [showModal, setShowModal] = useState(false);
//     const [editData, setEditData] = useState(null); // holds current student data
//    // const {assignedClass} = teachers;
//   console.log("teachers",classes);
//     useEffect(() => {
//       if (classes && classes.length > 0) {
//         setTotalClasses(classes);
//       }
//     }, [classes]);

//   return (
//     <div className="main min-h-[200vh]  w-full bg-slate-300">
//     <Sidebar/>
//     <div className="grid absolute top-14 right-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
  
//   {totalClasses.map((item) => (
//     <div
//       key={item._id}
//       className="bg-white  text-lg p-6 rounded-lg shadow-3xl hover:shadow-xl transition-shadow duration-300 ease-in-out w-full sm:w-80"
//     >
//     <h2 className="text-2xl font-semibold text-gray-800 mb-4">{item.name}</h2>
//       <p className="text-md text-gray-600 mb-2">
//         <strong>Female Students:</strong> {item.numFemaleStudents}
//       </p>
//       <p className="text-md text-gray-600 mb-2">
//         <strong>Male Students:</strong> {item.numMaleStudents}
//       </p>
//       <p className="text-md text-gray-600 mb-4">
//         <strong>Section:</strong> {item.section}
//       </p>

//       <div className="mb-4">
//         <strong className="text-gray-700">Subjects:</strong>
//         <ul className="list-disc pl-6 text-sm text-gray-600">
//         {item.subjects.length > 0 ? (
//             item.subjects.map((subject, index) => (
//               <li key={index}>{subject ? subject.name : "No Subject Added for this Class Yet"}</li>
//             ))
//           ) : (
//             <li>No Subject Added for this Class Yet</li>
//           )}
//         </ul>
//       </div>
//       {item.teacher.length > 0 ? (
//       item.teacher.map((teachero)=> (
//           <p className="text-sm text-gray-600 mb-2">
//         <strong>Instructor:</strong> {teachero.name}
//       </p>
//       ))
//         ):(
//         <p className="text-red-600 text-[16.5px]">For this Class Teacher Not Added Yet</p>
//         )
//       }
//       <p className="text-sm flex gap-3 items-center text-gray-600 mb-4">
//         <strong className="text-lg">Status:</strong>
//         <strong className={`${item.active === false ?  "bg-red-500 text-white text-md px-2 py-2 rounded-xl" : "bg-emerald-500 text-white text-lg px-3 py-2 rounded-2xl" }`}>{item.active ? 'Active' : 'InActive'}</strong>
//       </p>
//     </div>
//   ))}

//     </div>
//     </div>
//   );
// };

// export default CllassCard;
import React, { useContext, useEffect, useState } from "react";
import { Sidebar } from "./Sidebar";
import { adminDataContext } from "../Context-Api/AdminContext";
import { authDataContext } from "../Context-Api/AuthContext";
import { FaBars, FaTimes } from "react-icons/fa";
import AdminLayout from "./AdminLayout";
import { ToastContainer,toast} from "react-toastify";

// const CllassCard = () => {
//   const { adminData, fetchAdminData } = useContext(adminDataContext);
//   const { serverUrl } = useContext(authDataContext);
//   const { classes = [] } = adminData?.admin || {};
//   const [totalClasses, setTotalClasses] = useState([]);
//   useEffect(() => {
//     if (classes && classes.length > 0) {
//       setTotalClasses(classes);
//     }
//   }, [classes]);
//   return (
//     <AdminLayout adminName="Bright Futue">
//       {/* Main Content */}
//       <div className="flex-1 mx-auto ml-0 mt-2 md:ml-16  p-4 transition-all duration-300">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 md:mt-4">
//           {totalClasses.map((item) => (
//             <div
//               key={item._id}
//               className="bg-white text-lg p-6 rounded-lg shadow-3xl hover:shadow-xl transition-shadow duration-300 ease-in-out w-full"
//             >
//               <h2 className="text-2xl font-semibold text-gray-800 mb-4">{item.name}</h2>
//               <p className="text-md text-gray-600 mb-2">
//                 <strong>Female Students:</strong> {item.numFemaleStudents}
//               </p>
//               <p className="text-md text-gray-600 mb-2">
//                 <strong>Male Students:</strong> {item.numMaleStudents}
//               </p>
//               <p className="text-md text-gray-600 mb-4">
//                 <strong>Section:</strong> {item.section}
//               </p>
//               <div className="mb-4">
//                 <strong className="text-gray-700">Subjects:</strong>
//                 <ul className="list-disc pl-6 text-sm text-gray-600">
//                   {item.subjects.length > 0 ? (
//                     item.subjects.map((subject, index) => (
//                       <li key={index}>{subject ? subject.name : "No Subject Added"}</li>
//                     ))
//                   ) : (
//                     <li>No Subject Added</li>
//                   )}
//                 </ul>
//               </div>
//               {item.teacher.length > 0 ? (
//                 item.teacher.map((teachero, i) => (
//                   <p key={i} className="text-sm text-gray-600 mb-2">
//                     <strong>Instructor:</strong> {teachero.name}
//                   </p>
//                 ))
//               ) : (
//                 <p className="text-red-600 text-[16.5px]">No Teacher Added Yet</p>
//               )}
//               <p className="text-sm flex gap-3 items-center text-gray-600 mb-4">
//                 <strong className="text-lg">Status:</strong>
//                 <strong
//                   className={`${
//                     item.active
//                       ? "bg-emerald-500"
//                       : "bg-red-500"
//                   } text-white text-md px-3 py-2 rounded-xl`}
//                 >
//                   {item.active ? "Active" : "Inactive"}
//                 </strong>
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </AdminLayout>
//   );
// };

// export default CllassCard;

































 const CllassCard = () => {
  const { adminData, fetchAdminData } = useContext(adminDataContext);
  const { serverUrl } = useContext(authDataContext);

  const { classes = [] } = adminData?.admin || {};
  const [totalClasses, setTotalClasses] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterSection, setFilterSection] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (classes && classes.length > 0) {
      setTotalClasses(classes);
    }
  }, [classes]);

  const handleDeleteById = async (id) => {
    try {
      const response = await axios.delete(`${serverUrl}/admin/classes/${id}`, {
        withCredentials: true,
      });
      if (response.status === 200) {
        await fetchAdminData();
        toast.success("Class deleted successfully.");
      }
    } catch (err) {
      toast.error(err?.response?.data?.message || "Delete failed.");
    }
  };

  const filteredClasses = totalClasses.filter((cls) => {
    const nameMatch = cls.name?.toLowerCase().includes(filterName.toLowerCase());
    const sectionMatch = cls.section?.toLowerCase().includes(filterSection.toLowerCase());
    return nameMatch && sectionMatch;
  });

  const indexOfLast = currentPage * entriesPerPage;
  const indexOfFirst = indexOfLast - entriesPerPage;
  const currentData = filteredClasses.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredClasses.length / entriesPerPage);

  return (
    <AdminLayout adminName="Bright Future">
      <ToastContainer />
      <div className="p-6">
        <div className="bg-white w-full mt-4 shadow rounded p-4">
          {/* Filters */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium">
                Show
                <select
                  className="ml-2 px-2 py-1 border rounded text-sm"
                  value={entriesPerPage}
                  onChange={(e) => {
                    setEntriesPerPage(parseInt(e.target.value));
                    setCurrentPage(1);
                  }}
                >
                  {[10, 25, 50, 100].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
                entries
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full max-w-md">
              <input
                type="text"
                placeholder="Search by Class Name"
                className="border px-3 py-1 rounded text-sm"
                value={filterName}
                onChange={(e) => {
                  setFilterName(e.target.value);
                  setCurrentPage(1);
                }}
              />
              <input
                type="text"
                placeholder="Search by Section"
                className="border px-3 py-1 rounded text-sm"
                value={filterSection}
                onChange={(e) => {
                  setFilterSection(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-auto">
            <table className="min-w-full text-sm border border-gray-200">
              <thead className="bg-gray-100 text-left">
                <tr>
                  <th className="px-3 py-2 border">#</th>
                  <th className="px-3 py-2 border">Class Name</th>
                  <th className="px-3 py-2 border">Section</th>
                  <th className="px-3 py-2 border">Female Students</th>
                  <th className="px-3 py-2 border">Male Students</th>
                  <th className="px-3 py-2 border">Subjects</th>
                  <th className="px-3 py-2 border">Teachers</th>
                  <th className="px-3 py-2 border">Status</th>
                  <th className="px-3 py-2 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentData.length > 0 ? (
                  currentData.map((cls, i) => (
                    <tr key={cls._id} className="border-t">
                      <td className="px-3 py-2 border">{indexOfFirst + i + 1}</td>
                      <td className="px-3 py-2 border">{cls.name}</td>
                      <td className="px-3 py-2 border">{cls.section || "–"}</td>
                      <td className="px-3 py-2 border">{cls.numFemaleStudents ?? 0}</td>
                      <td className="px-3 py-2 border">{cls.numMaleStudents ?? 0}</td>
                      <td className="px-3 py-2 border">
                        {cls.subjects && cls.subjects.length > 0
                          ? cls.subjects.map((subj) => subj?.name).join(", ")
                          : "No Subjects"}
                      </td>
                      <td className="px-3 py-2 border">
                        {cls.teacher && cls.teacher.length > 0
                          ? cls.teacher.map((t) => t.name).join(", ")
                          : "No Teachers"}
                      </td>
                      <td className="px-3 py-2 border">
                        <span
                          className={`font-semibold ${
                            cls.active ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {cls.active ? "Active" : "Inactive"}
                        </span>
                      </td>
                      <td className="px-3 py-2 border space-x-2">
                        <button className="bg-blue-500 text-white px-2 py-1 rounded text-xs">
                          View
                        </button>
                        <button
                          className="bg-yellow-500 text-white px-2 py-1 rounded text-xs"
                          onClick={() => alert("Edit modal coming soon")}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-500 text-white px-2 py-1 rounded text-xs"
                          onClick={() => handleDeleteById(cls._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={9} className="text-center text-gray-500 py-4">
                      No classes found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-4">
            <div className="text-sm">
              Showing {indexOfFirst + 1} to {Math.min(indexOfLast, filteredClasses.length)} of{" "}
              {filteredClasses.length} entries
            </div>
            <div className="flex items-center gap-1 mt-2 md:mt-0">
              <button
                className={`px-2 py-1 border rounded text-sm ${
                  currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  className={`px-3 py-1 border rounded text-sm ${
                    currentPage === i + 1 ? "bg-blue-500 text-white" : ""
                  }`}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
              <button
                className={`px-2 py-1 border rounded text-sm ${
                  currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};
export default CllassCard;