// // import React from 'react';

// // const loginItems = [
// //   {
// //     img: 'https://weblizar.com/wp-content/uploads/2019/09/sm-admin-login.png',
// //     link: 'https://wpschool.weblizar.com//?_gl=1*wiuwbn*_ga*NDgxMDg1NjcwLjE3NTQwNjM5NTE.*_ga_FPSWNVGJXT*czE3NTQwNjM5NTEkbzEkZzAkdDE3NTQwNjM5NTEkajYwJGwwJGgw',
// //     username: 'school_administrator',
// //     password: '123456',
// //   },
// //   {
// //     img: 'https://weblizar.com/wp-content/uploads/2019/09/sm-teacher-login.png',
// //     link: 'https://wpschool.weblizar.com/',
// //     username: 'school_teacher',
// //     password: '123456',
// //   },
// //   {
// //     img: 'https://weblizar.com/wp-content/uploads/2019/09/sm-accountant-login.png',
// //     link: 'https://wpschool.weblizar.com/',
// //     username: 'accountant',
// //     password: '123456',
// //   },
// //   {
// //     img: 'https://weblizar.com/wp-content/uploads/2019/09/sm-student-login.png',
// //     link: 'https://wpschool.weblizar.com//student-login',
// //     username: 'student1',
// //     password: '123456',
// //   },
// // ];

// // const LoginGrid = () => {
// //   return (
// //     <div className="container mx-auto px-4 py-10">
     
// //       <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6">
// //         {loginItems.map((item, idx) => (
// //           <div
// //             key={idx}
// //             className="bg-white shadow p-4 text-center hover:shadow-lg transition"
// //           >
// //             <a href={item.link} target="_blank" rel="noopener noreferrer">
// //               <img
// //                 src={item.img}
// //                 alt={`Login ${idx}`}
// //                 className="mx-auto mb-3 rounded-full w-[304px] h-[80px] object-contain"
// //               />
// //             </a>
// //             <strong className="block text-sm md:text-base">
// //               Username: {item.username} <br />
// //               Pass: {item.password}
// //             </strong>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default LoginGrid;





















// import React from 'react';



// const roleBorderColor = {
//   admin: 'border-blue-500',
//   teacher: 'border-green-500',
//   accountant: 'border-orange-500',
//   student: 'border-purple-500',
// };

// const LoginGrid = () => {
//   return (
//     <div className="container mx-auto px-4 py-10">
//       <h2 className="text-center text-2xl font-bold mb-8 text-gray-700">Login Roles</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {loginItems.map((item, idx) => (
//           <div
//             key={idx}
//             className="bg-white shadow-md hover:shadow-xl transition-all rounded-lg p-6 text-center"
//           >
//             <a
//               href={item.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block"
//             >
//               <div className="flex justify-center mb-4">
//                 <img
//                   src={item.img}
//                   alt={`Login ${idx}`}
//                   className={`w-28 h-28 object-cover rounded-full border-4 ${roleBorderColor[item.role]}`}
//                 />
//               </div>
//             </a>
//             <div className="space-y-1">
//               <p className="text-gray-800 font-semibold text-sm">
//                 <span className="text-gray-600">Username:</span> {item.username}
//               </p>
//               <p className="text-gray-800 font-semibold text-sm">
//                 <span className="text-gray-600">Password:</span> {item.password}
//               </p>
//               <span
//                 className={`inline-block px-3 py-1 mt-2 text-xs rounded-full font-medium ${
//                   item.role === 'admin'
//                     ? 'bg-blue-100 text-blue-600'
//                     : item.role === 'teacher'
//                     ? 'bg-green-100 text-green-600'
//                     : item.role === 'accountant'
//                     ? 'bg-orange-100 text-orange-600'
//                     : 'bg-purple-100 text-purple-600'
//                 }`}
//               >
//                 {item.role.charAt(0).toUpperCase() + item.role.slice(1)}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LoginGrid;







































//import React from 'react';

// const loginItems = [
//   {
//     img: 'https://weblizar.com/wp-content/uploads/2019/09/sm-admin-login.png',
//     link: 'https://wpschool.weblizar.com//?_gl=1*wiuwbn*_ga*NDgxMDg1NjcwLjE3NTQwNjM5NTE.*_ga_FPSWNVGJXT*czE3NTQwNjM5NTEkbzEkZzAkdDE3NTQwNjM5NTEkajYwJGwwJGgw',
//     username: 'school_administrator',
//     password: '123456',
//     role: 'admin',
//   },
//   {
//     img: 'https://weblizar.com/wp-content/uploads/2019/09/sm-teacher-login.png',
//     link: 'https://wpschool.weblizar.com/',
//     username: 'school_teacher',
//     password: '123456',
//     role: 'teacher',
//   },
//   {
//     img: 'https://weblizar.com/wp-content/uploads/2019/09/sm-accountant-login.png',
//     link: 'https://wpschool.weblizar.com/',
//     username: 'accountant',
//     password: '123456',
//     role: 'accountant',
//   },
//   {
//     img: 'https://weblizar.com/wp-content/uploads/2019/09/sm-student-login.png',
//     link: 'https://wpschool.weblizar.com//student-login',
//     username: 'student1',
//     password: '123456',
//     role: 'student',
//   },
// ];

// const roleBorderColor = {
//   admin: 'border-blue-500',
//   teacher: 'border-green-500',
//   accountant: 'border-orange-500',
//   student: 'border-purple-500',
// };


// const loginItems = [
//   {
//     img: 'https://randomuser.me/api/portraits/men/1.jpg',
//     link: 'https://wpschool.weblizar.com/',
//     username: 'school_administrator',
//     password: '123456',
//     role: 'admin',
//   },
//   {
//     img: 'https://randomuser.me/api/portraits/men/2.jpg',
//     link: 'https://wpschool.weblizar.com/',
//     username: 'school_teacher',
//     password: '123456',
//     role: 'teacher',
//   },
//   {
//     img: 'https://randomuser.me/api/portraits/men/3.jpg',
//     link: 'https://wpschool.weblizar.com/',
//     username: 'accountant',
//     password: '123456',
//     role: 'accountant',
//   },
//   {
//     img: 'https://randomuser.me/api/portraits/women/4.jpg',
//     link: 'https://wpschool.weblizar.com/',
//     username: 'student1',
//     password: '123456',
//     role: 'student',
//   },
// ];




// const loginItems = [
//   {
//     img: 'https://weblizar.com/wp-content/uploads/2019/09/sm-admin-login.png',
//     link: 'https://wpschool.weblizar.com/',
//      role: 'Admin',
//     intro: 'Manage All Activities Almost All Features.',
//   },
//   {
//     img: 'https://weblizar.com/wp-content/uploads/2019/09/sm-teacher-login.png',
//     link: 'https://wpschool.weblizar.com/',
//     role: 'Teacher',
//     intro: 'Manage Students and Academies Activities.',
//   },
//   {
//     img: 'https://weblizar.com/wp-content/uploads/2019/09/sm-accountant-login.png',
//     link: 'https://wpschool.weblizar.com/',
//     username: 'accountant',
//     role: 'Accountant',
//     intro: 'Trace Student Fees Expenses all at a Place.',
//   },
//   {
//     img: 'https://weblizar.com/wp-content/uploads/2019/09/sm-student-login.png',
//     link: 'https://wpschool.weblizar.com/',
//     role: 'Student',
//     intro: 'Collaborate With School Teacher , Exam , Classes Activities at all.',
//   },
// ];
// const LoginGrid = () => {
//   return (
//     <div className="container mx-auto px-4 py-12">
//       <h2 className="text-center text-3xl font-bold mb-10 text-gray-800">Login Accounts</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//         {loginItems.map((item, idx) => (
//           <div
//             key={idx}
//             className="bg-white shadow-lg hover:shadow-xl transition rounded-xl p-6 text-center"
//           >
//             <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
//               <div className="flex justify-center mb-4">
//                 <img
//                   src={item.img}
//                   alt={`${item.role} avatar`}
//                   className={`w-24 h-24 rounded-full border-4 ${roleBorderColor[item.role]} object-cover`}
//                 />
//               </div>
//             </a>
//             <div>
//               <p className="text-xl font-bold">
//                {item.role}
//               </p>
//               <p className="text-gray-800 font-medium text-sm">
//                 {item.intro}
//               </p>
//               {/* <div
//                 className={`mt-3 inline-block text-xs px-3 py-1 rounded-full font-semibold ${
//                   item.role === 'admin'
//                     ? 'bg-blue-100 text-blue-600'
//                     : item.role === 'teacher'
//                     ? 'bg-green-100 text-green-600'
//                     : item.role === 'accountant'
//                     ? 'bg-orange-100 text-orange-600'
//                     : 'bg-purple-100 text-purple-600'
//                 }`}
//               >
//                 {item.role.charAt(0).toUpperCase() + item.role.slice(1)}
//               </div> */}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LoginGrid;



















import React from 'react';

// const loginItems = [
//   {
//     img: 'https://weblizar.com/wp-content/uploads/2019/09/sm-admin-login.png',
//     link: 'https://wpschool.weblizar.com/',
//     role: 'Admin',
//     intro: 'Manage All Activities Almost All Features.',
//   },
//   {
//     img: 'https://weblizar.com/wp-content/uploads/2019/09/sm-teacher-login.png',
//     link: 'https://wpschool.weblizar.com/',
//     role: 'Teacher',
//     intro: 'Manage Students and Academies Activities.',
//   },
//   {
//     img: 'https://weblizar.com/wp-content/uploads/2019/09/sm-accountant-login.png',
//     link: 'https://wpschool.weblizar.com/',
//     role: 'Accountant',
//     intro: 'Trace Student Fees Expenses all at a Place.',
//   },
//   {
//     img: 'https://weblizar.com/wp-content/uploads/2019/09/sm-student-login.png',
//     link: 'https://wpschool.weblizar.com/',
//     role: 'Student',
//     intro: 'Collaborate With School Teacher , Exam , Classes Activities at all.',
//   },
// ];


const loginItems = [
  {
    img: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', // Admin
    link: 'https://wpschool.weblizar.com/',
    role: 'Admin',
    intro: 'Manage All Activities Almost All Features.',
  },
  {
    img: 'https://cdn-icons-png.flaticon.com/512/1995/1995574.png', // Teacher
    link: 'https://wpschool.weblizar.com/',
    role: 'Teacher',
    intro: 'Manage Students and Academies Activities.',
  },
  {
    img: 'https://cdn-icons-png.flaticon.com/512/942/942748.png', // Accountant
    link: 'https://wpschool.weblizar.com/',
    role: 'Accountant',
    intro: 'Trace Student Fees Expenses all at a Place.',
  },
  {
    img: 'https://cdn-icons-png.flaticon.com/512/847/847969.png', // Student
    link: 'https://wpschool.weblizar.com/',
    role: 'Student',
    intro: 'Collaborate With School Teacher , Exam , Classes Activities at all.',
  },
];

const roleBorderColor = {
  Admin: 'border-blue-500',
  Teacher: 'border-green-500',
  Accountant: 'border-orange-500',
  Student: 'border-purple-500',
};

const LoginGrid = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {loginItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg hover:shadow-xl transition rounded-xl p-6 text-center"
          >
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
              <div className="flex justify-center  mb-4">
                <img
                  src={item.img}
                  // alt={`${item.role} avatar`}
                  className={`w-32 h-32 rounded-full border-4 object-cover ${roleBorderColor[item.role]}`}
                />
              </div>
            </a>
            <div>
              <p className="text-xl font-bold">{item.role}</p>
              <p className="text-gray-800 font-medium text-sm">{item.intro}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoginGrid;
