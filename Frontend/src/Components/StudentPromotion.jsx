 import React, { useContext, useEffect, useState } from 'react'
 import AdminLayout from './AdminLayout'
 import AdminTeachDashboardHeader from './AdminTeachDashboardHeader'
import { adminDataContext } from '../Context-Api/AdminContext';
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













const StudentPromotion = () => {
  const [promoteToSession, setPromoteToSession] = useState("");
  const [fromClass, setFromClass] = useState("");
  const [toClass, setToClass] = useState("");

  const { adminData, fetchAdminData } = useContext(adminDataContext);
  const { sessions = [], classes = [] } = adminData?.admin || {};

  useEffect(() => {
    fetchAdminData();
  }, [fetchAdminData]);

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
          {/* Info note */}
          <div className="bg-blue-100 text-blue-800 px-4 py-3 rounded mb-4 text-sm">
            <strong>Note:</strong> Promoting student from the present class to the
            next class will create an enrollment of that student for the next session.
          </div>

          {/* Section heading */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800">
              Promotion
              <br />
              <small className="text-sm text-gray-600">
                <em>Select class to promote, next session and new class.</em>
              </small>
            </h2>
          </div>

          {/* Form fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Current Session */}
            <div>
              <label className="font-semibold mb-1 block">Current Session:</label>
              <div className="ml-1 text-gray-700">2025-2026</div>
            </div>

            {/* Promote to Session */}
            <div>
              <label htmlFor="promoteToSession" className="font-semibold block mb-1">
                <span className="text-red-500">*</span> Promote to Session:
              </label>
              <select
                id="promoteToSession"
                value={promoteToSession}
                onChange={(e) => setPromoteToSession(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Next Session</option>
                {sessions.map((session) => (
                  <option key={session._id} value={session._id}>
                    {session.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Promotion From Class */}
            <div>
              <label htmlFor="fromClass" className="font-semibold block mb-1">
                <span className="text-red-500">*</span> Promotion From Class:
              </label>
              <select
                id="fromClass"
                value={fromClass}
                onChange={(e) => setFromClass(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Class</option>
                {classes.map((cls) => (
                  <option key={cls._id} value={cls._id}>
                    {cls.name} {cls.section ? `- ${cls.section}` : ""}
                  </option>
                ))}
              </select>
            </div>

            {/* Promotion To Class */}
            <div>
              <label htmlFor="toClass" className="font-semibold block mb-1">
                <span className="text-red-500">*</span> Promotion To Class:
              </label>
              <select
                id="toClass"
                value={toClass}
                onChange={(e) => setToClass(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Class</option>
                {classes.map((cls) => (
                  <option key={cls._id} value={cls._id}>
                    {cls.name} {cls.section ? `- ${cls.section}` : ""}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() =>
                console.log({ promoteToSession, fromClass, toClass })
              }
              className="bg-[#c19703] text-white px-6 py-2 rounded shadow-sm transition"
            >
              Manage Promotion
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};
export default StudentPromotion;
