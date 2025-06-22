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

const CllassCard = () => {
  const { adminData, fetchAdminData } = useContext(adminDataContext);
  const { serverUrl } = useContext(authDataContext);
  const { classes = [] } = adminData?.admin || {};
  const [totalClasses, setTotalClasses] = useState([]);
  useEffect(() => {
    if (classes && classes.length > 0) {
      setTotalClasses(classes);
    }
  }, [classes]);
  return (
    <AdminLayout adminName="Bright Futue">
      {/* Main Content */}
      <div className="flex-1 mx-auto ml-0 mt-2 md:ml-16  p-4 transition-all duration-300">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 md:mt-4">
          {totalClasses.map((item) => (
            <div
              key={item._id}
              className="bg-white text-lg p-6 rounded-lg shadow-3xl hover:shadow-xl transition-shadow duration-300 ease-in-out w-full"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{item.name}</h2>
              <p className="text-md text-gray-600 mb-2">
                <strong>Female Students:</strong> {item.numFemaleStudents}
              </p>
              <p className="text-md text-gray-600 mb-2">
                <strong>Male Students:</strong> {item.numMaleStudents}
              </p>
              <p className="text-md text-gray-600 mb-4">
                <strong>Section:</strong> {item.section}
              </p>
              <div className="mb-4">
                <strong className="text-gray-700">Subjects:</strong>
                <ul className="list-disc pl-6 text-sm text-gray-600">
                  {item.subjects.length > 0 ? (
                    item.subjects.map((subject, index) => (
                      <li key={index}>{subject ? subject.name : "No Subject Added"}</li>
                    ))
                  ) : (
                    <li>No Subject Added</li>
                  )}
                </ul>
              </div>
              {item.teacher.length > 0 ? (
                item.teacher.map((teachero, i) => (
                  <p key={i} className="text-sm text-gray-600 mb-2">
                    <strong>Instructor:</strong> {teachero.name}
                  </p>
                ))
              ) : (
                <p className="text-red-600 text-[16.5px]">No Teacher Added Yet</p>
              )}
              <p className="text-sm flex gap-3 items-center text-gray-600 mb-4">
                <strong className="text-lg">Status:</strong>
                <strong
                  className={`${
                    item.active
                      ? "bg-emerald-500"
                      : "bg-red-500"
                  } text-white text-md px-3 py-2 rounded-xl`}
                >
                  {item.active ? "Active" : "Inactive"}
                </strong>
              </p>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default CllassCard;
