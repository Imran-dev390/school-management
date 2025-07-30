// // import React, { useContext, useState } from 'react';
// // import { userDataContext } from '../Context-Api/UserContext';
// // import { Link } from 'react-router-dom';
// // import { FiMenu } from 'react-icons/fi';
// // import TeacherSidebar from './TeacherSidebar';

// // const TeacherProfile = () => {
// //   const { userData } = useContext(userDataContext);
// //   const [isOpen, setIsOpen] = useState(false);

// //   return (
// //     <div className="flex flex-col md:flex-row min-h-screen bg-zinc-800">
// //       {/* Topbar for small/medium screens */}
// //       <div className="md:hidden bg-black p-4 flex items-center justify-between">
// //         <h2 className="text-xl font-bold text-white">Student Panel</h2>
// //         <button
// //           onClick={() => setIsOpen(!isOpen)}
// //           className="text-white focus:outline-none"
// //         >
// //           <FiMenu className="w-6 h-6" />
// //         </button>
// //       </div>

// //       {/* Sidebar */}
// //       {/* <aside className={`bg-black w-full md:w-64 shadow-md p-6 text-white space-y-4 font-medium ${isOpen ? 'block' : 'hidden'} md:block`}>
// //         <Link className="hover:text-blue-400 block" to="/student/dash">Dashboard</Link>
// //         <Link className="hover:text-blue-400 block" to="#">Profile</Link>
// //         <Link className="hover:text-blue-400 block" to="#">Assignments</Link>
// //         <Link className="hover:text-blue-400 block" to="#">Grades</Link>
// //         <Link className="hover:text-blue-400 block" to="/logout">Logout</Link>
// //       </aside> */}
// //       <TeacherSidebar/>

// //       {/* Profile Content */}
// //       <main className="flex-1 p-6">
// //         <div className="max-w-xl flex items-center justify-center gap-4 flex-col mx-auto rounded-2xl bg-white  shadow-md p-6">
// //           {/* Profile Image */}
// //           <div className="flex flex-col  items-center text-center mb-6">
// //             <img
// //               src={userData?.profile || "https://via.placeholder.com/150"}
// //               alt="Profile"
// //               className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg"
// //             />
// //             <h1 className="mt-4 text-2xl font-bold text-gray-800">{userData?.name || "Teacher Name"}</h1>
// //             <p className="text-gray-500">{userData?.email || "Teacher@email.com"}</p>
// //           </div>

// //           {/* Info Grid */}
// //           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
// //             <InfoField label="Phone" value={userData?.phone} />
// //             {/* <InfoField label="Class" value={userData?.assignedClass?.class.name} />
// //             <InfoField label="Section" value={userData?.assignedClass?.class.section} /> */}
// //             <InfoField
// //   label="Classes"
// //   value={
// //     userData?.assignedClass
// //       ?.flatMap((a) =>
// //         a.class.map((c) => `${c.name} (${c.section})`)
// //       )
// //       .join(', ') || "N/A"
// //   }
// // />
// //             <InfoField label="Email" value={userData?.email} />
// //             <InfoField label="Date of Birth" value={userData?.dob.slice(0,10) || "N/A"} />
// //             <InfoField label="Gender" value={userData?.gender || "N/A"} />
// //             {/* <InfoField label="Fee Paid" value={userData?.feesPaid || "N/A"} /> */}
// //           </div>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // };

// // const InfoField = ({ label, value }) => (
// //   <div>
// //     <p className="text-gray-600 font-semibold">{label}:</p>
// //     <p className="text-gray-800">{value || "N/A"}</p>
// //   </div>
// // );

// // export default TeacherProfile;


















// import React, { useContext, useState } from 'react';
// import { userDataContext } from '../Context-Api/UserContext';
// import { FiMenu } from 'react-icons/fi';
// import TeacherSidebar from './TeacherSidebar';

// const TeacherProfile = () => {
//   const { userData } = useContext(userDataContext);
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-zinc-800 to-gray-900 text-white">
//       {/* Mobile Topbar */}
//       <div className="md:hidden bg-black p-4 flex items-center justify-between">
//         <h2 className="text-xl font-bold">Teacher Panel</h2>
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="focus:outline-none"
//         >
//           <FiMenu className="w-6 h-6" />
//         </button>
//       </div>

//       {/* Sidebar */}
//       <TeacherSidebar />

//       {/* Profile Content */}
//       <main className="flex-1 p-6 flex items-center justify-center">
//         <div className="w-full max-w-4xl bg-white text-gray-900 rounded-2xl shadow-xl overflow-hidden">
//           <div className="flex flex-col lg:flex-row items-center p-8">
//             {/* Profile Image */}
//             <div className="mb-6 lg:mb-0 lg:mr-8">
//               <img
//                 src={userData?.profile || "https://via.placeholder.com/150"}
//                 alt="Profile"
//                 className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-lg object-cover"
//               />
//             </div>

//             {/* Basic Info */}
//             <div className="text-center lg:text-left">
//               <h1 className="text-3xl font-bold mb-1">{userData?.name || "Teacher Name"}</h1>
//               <p className="text-gray-600">{userData?.email || "email@example.com"}</p>
//               <p className="mt-2 text-sm text-blue-600 font-medium">Role: {userData?.role || 'Teacher'}</p>
//             </div>
//           </div>

//           {/* Info Grid */}
//           <div className="border-t border-gray-200 px-8 py-6 grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50">
//             <InfoField label="Phone" value={userData?.phone} />
//             <InfoField
//               label="Classes"
//               value={
//                 userData?.assignedClass
//                   ?.flatMap((a) =>
//                     a.class.map((c) => `${c.name} (${c.section})`)
//                   )
//                   .join(', ') || "N/A"
//               }
//             />
//             <InfoField label="Date of Birth" value={userData?.dob?.slice(0, 10) || "N/A"} />
//             <InfoField label="Gender" value={userData?.gender || "N/A"} />
//             <InfoField label="Qualification" value={userData?.qualifications || "N/A"} />
//             <InfoField label="Salary" value={`PKR ${userData?.salary?.toLocaleString() || "N/A"}`} />
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// const InfoField = ({ label, value }) => (
//   <div>
//     <p className="text-gray-500 text-sm font-semibold mb-1">{label}</p>
//     <p className="text-gray-800 font-medium">{value}</p>
//   </div>
// );

// export default TeacherProfile;






















import React, { useContext, useEffect, useState } from 'react';
import { userDataContext } from '../Context-Api/UserContext';
import { authDataContext } from '../Context-Api/AuthContext';
import { FiMenu } from 'react-icons/fi';
import TeacherSidebar from './TeacherSidebar';
import { Link } from 'react-router-dom';
const TeacherProfile = () => {
  const { userData } = useContext(userDataContext);
  const { serverUrl } = useContext(authDataContext);
  const [isOpen, setIsOpen] = useState(false);
  const [loading,setLoading] = useState(true);
useEffect(()=>{
    if(userData){
        setLoading(false);
    }
},[userData])
if(loading) return <p>Loading...</p> 
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-zinc-800 to-gray-900 text-white">
      {/* Mobile Topbar */}
      <div className="md:hidden bg-black p-4 flex items-center justify-between">
        <h2 className="text-xl font-bold">Teacher Panel</h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          <FiMenu className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar */}
      <TeacherSidebar />

      {/* Profile Content */}
      <main className="flex-1 p-6 flex flex-col items-center justify-start gap-6">
        <div className="w-full max-w-4xl bg-white text-gray-900 rounded-2xl shadow-xl overflow-hidden">
          {/* Top Section */}
          {/* <div className="flex flex-col lg:flex-row items-center p-8">
            <div className="mb-6 lg:mb-0 lg:mr-8">
              <img
                src={userData?.profile || "https://via.placeholder.com/150"}
                alt="Profile"
                className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-lg object-cover"
              />
            </div>
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-bold mb-1">{userData?.name}</h1>
              <p className="text-gray-600">{userData?.email}</p>
              <p className="mt-2 text-sm text-blue-600 font-medium">Role: {userData?.role}</p>
            </div>
           <div className=" mt-4 absolute right-28 flex justify-end pr-4">
  <Link
    to={`/${userData.role}/${userData.name}/update/password`}
    className="text-lg font-medium text-blue-600 hover:underline"
  >
    Reset Password
  </Link>
</div>

          </div> */}

          <div className="relative w-full">
  {/* Profile Info Row */}
  <div className="flex flex-col lg:flex-row items-center p-8">
    <div className="mb-6 lg:mb-0 lg:mr-8">
      <img
        src={userData?.profile || "https://via.placeholder.com/150"}
        alt="Profile"
        className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-lg object-cover"
      />
    </div>
    <div className="flex-1 text-center lg:text-left">
      <h1 className="text-3xl font-bold mb-1">{userData?.name}</h1>
      <p className="text-gray-600">{userData?.email}</p>
      <p className="mt-2 text-sm text-blue-600 font-medium">Role: {userData?.role}</p>
    </div>
  </div>

  {/* Absolute Link Positioned in Top-Right */}
  <div className="absolute top-4 right-6">
    <Link
      to={`/${userData.role}/${userData.name}/update/password`}
      className="text-sm lg:text-base font-medium text-blue-600 hover:underline"
    >
      Reset Password
    </Link>
  </div>
</div>


          {/* Info Grid */}
          <div className="border-t border-gray-200 px-8 py-6 grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50">
            <InfoField label="Phone" value={userData?.phone} />
            <InfoField
              label="Classes"
              value={
                userData?.assignedClass
                  ?.flatMap((a) =>
                    a.class[0].map((c) => `${c.name} (${c.section})`)
                  )
                  .join(', ') || "N/A"
              }
            />
            <InfoField label="DOB" value={userData?.dob?.slice(0, 10)} />
            <InfoField label="Gender" value={userData?.gender} />
            <InfoField label="Qualification" value={userData?.qualifications} />
            <InfoField label="Salary" value={`PKR ${userData?.salary?.toLocaleString()}`} />
          </div>
        </div>
      </main>
    </div>
  );
};

const InfoField = ({ label, value }) => (
  <div>
    <p className="text-gray-500 text-sm font-semibold mb-1">{label}</p>
    <p className="text-gray-800 font-medium">{value || "N/A"}</p>
  </div>
);

export default TeacherProfile;


