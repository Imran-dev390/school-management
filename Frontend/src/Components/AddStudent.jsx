// import React, { useContext, useState } from 'react';
// import { authDataContext } from '../Context-Api/AuthContext';
// import { userDataContext } from '../Context-Api/UserContext';
// import axios from 'axios';
// import { ToastContainer , toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import { adminDataContext } from '../Context-Api/AdminContext';
// import { Sidebar } from './Sidebar';
// import { FaBars } from 'react-icons/fa';
// //FaBars
// export default function AddStudent() {
//   const navigate = useNavigate();
//   const { fetchAdminData } = useContext(adminDataContext);
//   const {adminData} = useContext(adminDataContext);
//   const { classes = [] } = adminData?.admin;
//   //console.log("classes",classes)
//   const {serverUrl}  = useContext(authDataContext);
// //  const {userData} = useContext(userDataContext);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     gender: '',
//     dob: '',
//     password: '',
//     Parent:"",
//     Adress:"",
//     Class:"",
//   });
// const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//   try  {  
//       const result = await axios.post(serverUrl+"/api/admin/Add/Student",{
//       name:formData.name,
//       email:formData.email,
//       phone:formData.phone,
//       gender:formData.gender,
//       dob:formData.dob,
//       password:formData.password,
//       parent:formData.Parent,
//       adress:formData.Adress,
//       Classs:formData.Class,
//     },{withCredentials:true})
//    // console.log("formData",result); // Replace with Axios POST
//     toast.success("Sucessfully Student Registered");
//     await fetchAdminData();
//     navigate("/admin/dash")
//     setSubmitted(true);
// }catch(err){
//  // console.log("formData",formData.Class);
//   toast.error(err?.response?.data.message);
//  // console.log(err);
// }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-300 p-6">
//   {!isSidebarOpen &&
//         <button
//           onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//           className="md:hidden fixed top-4 left-4 z-50 bg-white border p-2 shadow"
//           aria-label="Toggle Sidebar"
//         >
//           <FaBars className="text-xl text-blue-900" />
//         </button>
//   }
//    <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen}/>
//       <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl transform hover:scale-[1.02] transition duration-500">
//         <h2 className="text-3xl font-bold text-center text-green-800 mb-6">📚 Register New Student</h2>

//         {submitted ? (
//           <div className="text-green-600 text-center text-lg font-medium">
//             ✅ Student registered successfully!
//           </div>
//         ) : (
//           <form className="space-y-5" onSubmit={handleSubmit}>
//             {/* Floating Inputs */}
//             {[
//               { name: 'name', label: 'Full Name', type: 'text'},
//               { name: 'email', label: 'Email', type: 'email'},
//               { name: 'phone', label: 'Phone Number', type: 'tel'},
//               { name: 'dob', label: 'Date of Birth', type: 'date'},
//               { name: 'password', label: 'Password', type: 'password'},
//               { name: 'Parent', label: 'Parent', type: 'text'},
//               { name: 'Adress', label: 'Adress', type: 'text'},
            

//             ].map(({ name, label, type }) => (
//               <div key={name} className="relative">
//                 <input
//                   type={type}
//                   name={name}
//                   value={formData[name]}
//                   onChange={handleChange}
//                   required
//                   className="peer w-full p-3 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-green-500"
//                   placeholder=" "
//                 />
//                 <label
//                   htmlFor={name}
//                   className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-green-600"
//                 >
//                   {label}
//                 </label>
//               </div>
//             ))}

//             {/* Gender Selector */}
//             <div className="relative">
//               <select
//                 name="gender"
//                 value={formData.gender}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-green-500"
//               >
//                 <option value="" disabled>Select Gender</option>
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//               </select>
//               <label className="absolute left-3 -top-2 text-sm text-green-600 bg-white px-1">Gender</label>
//             </div>

//             {/* Class Selector (Dynamic later) */}
//             <div className="relative">
//               <select
//                 name="Class"
//                 value={formData.Class}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-green-500"
//               >
//                 <option value="" disabled>Select Class</option>
//               {
//               classes.map((classItem)=>{
//                 return(
//                 <option key={classItem._id} value={classItem._id}>
//                     {classItem.name} {classItem.section}
//                     </option>
//                 )
//               })}
//               </select>
//               <label className="absolute left-3 -top-2 text-sm text-green-600 bg-white px-1">Class</label>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full py-3 mt-4 bg-green-600 text-white rounded-xl shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
//             >
//               ➕ Add Student
//             </button>
//           </form>
//         )}
//          <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} theme="colored" />
//       </div>
//     </div>
//   );
// }







































































































































import React, { useContext, useEffect, useState } from 'react';
import { authDataContext } from '../Context-Api/AuthContext';
import { adminDataContext } from '../Context-Api/AdminContext';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { FaBars, FaUserCircle } from 'react-icons/fa';
import AdminLayout from './AdminLayout';
//import { FaUserCircle } from 'react-icons/fa';
import axios from 'axios';
import imageCompression from 'browser-image-compression';




const InputField = ({ label, name, type, value, onChange }) => (
  <div className="relative">
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="peer w-full p-3 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-green-500"
      placeholder=" "
    />
    <label
      htmlFor={name}
      className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-green-600"
    >
      {label}
    </label>
  </div>
);


const SelectField = ({ label, name, value, onChange, options }) => (
  <div className="relative">
    <select
      name={name}
      value={value}
      onChange={onChange}
      required
      className="w-full p-3 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-green-500"
    >
      <option value="" disabled>Select {label}</option>
      {options.map(opt =>
        typeof opt === 'string'
          ? <option key={opt} value={opt}>{opt}</option>
          : <option key={opt.value} value={opt.value}>{opt.label}</option>
      )}
    </select>
    <label className="absolute left-3 -top-2 text-sm text-green-600 bg-white px-1">{label}</label>
  </div>
);
export default function AddStudent() {
  const navigate = useNavigate();
  const { fetchAdminData } = useContext(adminDataContext);
  const { adminData } = useContext(adminDataContext);
  const { classes = [] } = adminData?.admin || {};
  const { serverUrl } = useContext(authDataContext);


// FaUserCircle
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   gender: '',
  //   dob: '',
  //   password: '',
  //   Parent: '',
  //   Adress: '',
  //   Class: '',
  // });




const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  gender: '',
  dob: '',
  password: '',
  prevClass:"",
  parent: '',
  adress: '',
  Class: '',
  prevschoolName: '',
  prevSchoolAddress: '',
  bformNumber: '',
  CnicNumber: '',
});

const [images, setImages] = useState({
  profileImage: null,
  CnicFrontImage: null,
  CnicBackImage: null,
  bformImage: null,
});

// const handleFileChange = (e) => {
//   const { name, files } = e.target;
//   setImages(prev => ({
//     ...prev,
//     [name]: files[0],
//   }));
// };
const handleFileChange = async (e) => {
  const { name, files } = e.target;
  if (!files || files.length === 0) return;

  try {
    const compressedFile = await imageCompression(files[0], {
      maxSizeMB: 1, // Max size per image (adjust as needed)
      maxWidthOrHeight: 1024, // Resize if too large
      useWebWorker: true,
    });
    setImages((prev) => ({
      ...prev,
      [name]: compressedFile,
    }));
  } catch (error) {
    console.error("Image compression error:", error);
    toast.error("Failed to compress image. Please try a smaller file.");
  }
};
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post(`${serverUrl}/api/admin/Add/Student`, {
  //       name: formData.name,
  //       email: formData.email,
  //       phone: formData.phone,
  //       gender: formData.gender,
  //       dob: formData.dob,
  //       password: formData.password,
  //       parent: formData.Parent,
  //       adress: formData.Adress,
  //       Classs: formData.Class,
  //     }, { withCredentials: true });

  //     toast.success("Successfully Student Registered");
  //     await fetchAdminData();
  //     navigate("/admin/dash");
  //     setSubmitted(true);
  //   } catch (err) {
  //     toast.error(err?.response?.data?.message || "Something went wrong");
  //   }
  // };




  const handleSubmit = async (e) => {
  e.preventDefault();
  // const form = new FormData();
  // for (const key in formData) {
  //   form.append(key, formData[key]);
  // }
// Before appending, rename the field expected by the backend
const form = new FormData();
for (const key in formData) {
  if (key === 'Class') {
    form.append('Classs', formData[key]); // Backend expects 'Classs'
  } else {
    form.append(key, formData[key]);
  }
}
  // Append image files
  for (const key in images) {
    if (images[key]) {
      form.append(key, images[key]);
    }
  }

  try {
    await axios.post(`${serverUrl}/api/admin/Add/Student`, form, {
      withCredentials: true,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
//    console.log([...formData.entries()]);
    toast.success("✅ Student registered successfully!");
    await fetchAdminData();
    navigate("/admin/dash");
    setSubmitted(true);
  } catch (err) {
    toast.error(err?.response?.data?.message || "Something went wrong");
    console.log(formData);
    console.log(err?.response?.data?.message || err.message || "erron when submiting");
  }
};
  return (
//     <div className="flex min-h-screen bg-green-100">
//       {/* Sidebar */}
//       {!isSidebarOpen && (
//         <button
//           onClick={() => setIsSidebarOpen(true)}
//           className="md:hidden fixed top-4 left-4 z-50 bg-white border p-2 shadow"
//         >
//           <FaBars className="text-xl text-green-700" />
//         </button>
//       )}
//    <Sidebar
//   isOpen={isSidebarOpen}
//   setIsOpen={setIsSidebarOpen}
//   hasUserToggled={hasUserToggled}
//   onToggleSidebar={handleSidebarToggle}
//   adminName={"Bright Future"} // optional
// />
//       {/* Main Content */}
//       {/* <div className="flex-grow flex flex-col justify-center items-start p-6 md:p-12 overflow-auto"> */}
//      <div
//   className={`flex-grow flex flex-col justify-center items-start p-6 md:p-12 overflow-auto transition-all duration-300 ${
//     isSidebarOpen ? 'md:ml-64' : ''
//   }`}
// >
//         {/* Header */}
//  {/* <div className="flex flex-row sm:flex-row justify-between items-center gap-4 sm:gap-8 mb-6 text-center sm:text-left">
//           {/* <h1 className="text-lg ml-8 sm:text-3xl font-bold">
//             🏫 School Admin {name} Dashboard
//           </h1> */}
//           {/* <div className="profileShowSchoolName w-fit flex items-center gap-1 p-4">
//             <div className="w-14 h-14 rounded-full flex items-center justify-center bg-transparent">
//               <FaUserCircle className="text-4xl" />
//             </div>
//             <h1 className="text-md flex gap-0 sm:text-lg  font-semibold">Bright Future</h1>
//           </div> */}
//       {/*  </div> */}
// {/* end */}
//         <div className="w-full max-w-3xl bg-white  shadow-xl rounded-2xl p-4">
//           <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
//             📚 Register New Student
//           </h2>

//           {submitted ? (
//             <div className="text-green-600 text-center text-lg font-medium">
//               ✅ Student registered successfully!
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit}>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                 {[
//                   { name: 'name', label: 'Full Name', type: 'text' },
//                   { name: 'email', label: 'Email', type: 'email' },
//                   { name: 'phone', label: 'Phone Number', type: 'tel' },
//                   { name: 'dob', label: 'Date of Birth', type: 'date' },
//                   { name: 'password', label: 'Password', type: 'password' },
//                   { name: 'Parent', label: 'Parent Name', type: 'text' },
//                   { name: 'Adress', label: 'Address', type: 'text' },
//                 ].map(({ name, label, type }) => (
//                   <div key={name} className="relative">
//                     <input
//                       type={type}
//                       name={name}
//                       value={formData[name]}
//                       onChange={handleChange}
//                       required
//                       className="peer w-full p-3 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-green-500"
//                       placeholder=" "
//                     />
//                     <label
//                       htmlFor={name}
//                       className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-green-600"
//                     >
//                       {label}
//                     </label>
//                   </div>
//                 ))}

//                 {/* Gender Selector */}
//                 <div className="relative">
//                   <select
//                     name="gender"
//                     value={formData.gender}
//                     onChange={handleChange}
//                     required
//                     className="w-full p-3 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-green-500"
//                   >
//                     <option value="" disabled>Select Gender</option>
//                     <option value="Male">Male</option>
//                     <option value="Female">Female</option>
//                   </select>
//                   <label className="absolute left-3 -top-2 text-sm text-green-600 bg-white px-1">
//                     Gender
//                   </label>
//                 </div>

//                 {/* Class Selector */}
//                 <div className="relative">
//                   <select
//                     name="Class"
//                     value={formData.Class}
//                     onChange={handleChange}
//                     required
//                     className="w-full p-3 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-green-500"
//                   >
//                     <option value="" disabled>Select Class</option>
//                     {classes.map((classItem) => (
//                       <option key={classItem._id} value={classItem._id}>
//                         {classItem.name} {classItem.section}
//                       </option>
//                     ))}
//                   </select>
//                   <label className="absolute left-3 -top-2 text-sm text-green-600 bg-white px-1">
//                     Class
//                   </label>
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full mt-8 py-3 bg-green-600 text-white rounded-xl shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
//               >
//                 ➕ Add Student
//               </button>
//             </form>
//           )}

//           <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} theme="colored" />
//         </div>
//       </div>
//     </div>




















<AdminLayout adminName="Bright Future">
      <div className="w-full max-w-3xl mt-32  sm:max-w-5xl   sm:mt-8 bg-white shadow-xl rounded-2xl p-4">
        <h2 className="text-3xl font-bold text-center text-[rgb(1,1,93)] mb-8">
          📚 Register New Student
        </h2>

        {submitted ? (
          <div className="text-green-600 text-center text-lg font-medium">
            ✅ Student registered successfully!
          </div>
        ) : (
//           <form onSubmit={handleSubmit} encType="multipart/form-data">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//               {[
//                 { name: "name", label: "Full Name", type: "text" },
//                 { name: "email", label: "Email", type: "email" },
//                 { name: "phone", label: "Contact No", type: "tel" },
//                 { name: "dob", label: "Date of Birth", type: "date" },
//                 { name: "password", label: "Password", type: "password" },
//                 { name: "parent", label: "Parent/Gardenian name", type: "text" },
//                 { name: "adress", label: "Address", type: "text" },
//                 { name: 'prevschoolName', label: 'Previous School Name',type:'text' },
//                  { name: 'prevClass', label: 'Previous Class',type:'text' },
//                 { name: 'prevSchoolAddress', label: 'Previous School Address',type:'text'},
//                 { name: 'bformNumber', label: 'B-Form Number',type: 'text'},
//                 { name: 'CnicNumber', label: 'Parent CNIC Number',type: 'text'},
//                ].map(({ name, label, type }) => (
//                  <div key={name} className="relative">
//                    <input
//                      type={type}
//                      name={name}
//                      value={formData[name]}
//                      onChange={handleChange}
//                      required
//                      className="peer w-full p-3 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-green-500"
//                      placeholder=" "
//                    />
//                    <label
//                      htmlFor={name}
//                      className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-green-600"
//                    >
//                      {label}
//                    </label>
//                  </div>
//                ))}
            
// {/* File Uploads */}
// {/*{[
//   { name: 'profileImage', label: 'Profile Image' },
//   { name: 'CnicFrontImage', label: 'CNIC Front Image' },
//   { name: 'CnicBackImage', label: 'CNIC Back Image' },
//   { name: 'bformImage', label: 'B-Form Image' },
// ].map(({ name, label }) => (
//   <div key={name} className="relative">
//     <label className="block text-sm text-gray-700 mb-1">{label}</label>
//     <input
//       type="file"
//       name={name}
//       accept="image/*"
//       onChange={handleFileChange}
//       required
//       className="w-full p-2 border border-gray-300 rounded-md"
//     />
//   </div>
// ))}*/}


// {[
//   { name: 'profileImage', label: 'Profile Image' },
//   { name: 'CnicFrontImage', label: 'CNIC Front Image' },
//   { name: 'CnicBackImage', label: 'CNIC Back Image' },
//   { name: 'bformImage', label: 'B-Form Image' },
// ].map(({ name, label }) => (
//   name === 'profileImage' ? (
//     <div key={name} className="flex flex-col items-center col-span-2">
//       <label htmlFor="profileImage" className="cursor-pointer relative group">
//         {images.profileImage ? (
//           <img
//             src={URL.createObjectURL(images.profileImage)}
//             alt="Profile Preview"
//             className="w-24 h-24 rounded-full object-cover border-2 border-green-500"
//           />
//         ) : (
//           <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center border-2 border-gray-300 hover:border-green-500">
//             <FaUserCircle className="text-4xl text-gray-500 group-hover:text-green-600" />
//           </div>
//         )}
//         <input
//           type="file"
//           name="profileImage"
//           id="profileImage"
//           accept="image/*"
//           onChange={handleFileChange}
//           required
//           className="hidden"
//         />
//       </label>
//       <p className="text-xs mt-2 text-gray-500">{label}</p>
//     </div>
//   ) : (
//     <div key={name} className="relative">
//       <label className="block text-sm text-gray-700 mb-1">{label}</label>
//       <input
//         type="file"
//         name={name}
//         accept="image/*"
//         onChange={handleFileChange}
//         required
//         className="w-full p-2 border border-gray-300 rounded-md"
//       />
//     </div>
//   )
// ))}



     
// {/* Gender Selector */}
//               <div className="relative">
//                 <select
//                   name="gender"
//                   value={formData.gender}
//                   onChange={handleChange}
//                   required
//                   className="w-full p-3 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-green-500"
//                 >
//                   <option value="" disabled>
//                     Select Gender
//                   </option>
//                   <option value="Male">Male</option>
//                   <option value="Female">Female</option>
//                 </select>
//                 <label className="absolute left-3 -top-2 text-sm text-green-600 bg-white px-1">
//                   Gender
//                 </label>
//               </div>

//               {/* Class Selector */}
//               <div className="relative">
//                 <select
//                   name="Class"
//                   value={formData.Class}
//                   onChange={handleChange}
//                   required
//                   className="w-full p-3 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-green-500"
//                 >
//                   <option value="" disabled>
//                     Select Class
//                   </option>
//                   {classes.map((classItem) => (
//                     <option key={classItem._id} value={classItem._id}>
//                       {classItem.name} - {classItem.section}
//                     </option>
//                   ))}
//                 </select>
//                 <label className="absolute left-3 -top-2 text-sm text-green-600 bg-white px-1">
//                   Class
//                 </label>
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="w-full mt-8 py-3 bg-green-600 text-white rounded-xl shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
//             >
//               ➕ Add Student
//             </button>
//           </form>























<form onSubmit={handleSubmit} encType="multipart/form-data">
  {/* Student Details Section */}
  <div className="mb-6">
    <h3 className="text-xl font-semibold text-[rgb(1,1,93)] border-b mb-4 pb-1">👤 Student Details</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Profile Picture */}
      <div className="sm:col-span-2 flex flex-col items-center mt-2">
        <label htmlFor="profileImage" className="cursor-pointer relative group">
          {images.profileImage ? (
            <img src={URL.createObjectURL(images.profileImage)} alt="Profile" className="w-24 h-24 rounded-full object-cover border-2 border-green-500" />
          ) : (
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center border-2 border-gray-300 hover:border-green-500">
              <FaUserCircle className="text-4xl text-[rgb(1,1,93)] group-hover:text-[rgb(193,151,5)]" />
            </div>
          )}
          <input type="file" id="profileImage" name="profileImage" accept="image/*" onChange={handleFileChange} required className="hidden" />
        </label>
        <p className="text-xs text-[rgb(1,1,93)] mt-2">Profile Image</p>
      </div>
      <InputField label="Full Name" name="name" type="text" value={formData.name} onChange={handleChange}/>
      <InputField label="Email" name="email" type="email"value={formData.email}onChange={handleChange} />
      <InputField label="Date of Birth" name="dob" type="date" value={formData.dob} onChange={handleChange}/>
      <InputField label="Password" name="password" type="password" value={formData.password} onChange={handleChange}/>
      <InputField label="B-Form Number" name="bformNumber"  type="text" value={formData.bformNumber} onChange={handleChange}/>
      <SelectField label="Gender" name="gender" value={formData.gender} onChange={handleChange} options={["Male", "Female"]} />
      <SelectField label="Class" name="Class" value={formData.Class} onChange={handleChange} options={classes.map(c => ({ value: c._id, label: `${c.name} - ${c.section}` }))} />
       <div className="sm:col-span-2">
        <label className="block text-sm text-[rgb(1,1,93)] mb-1">B-Form Image</label>
        <input type="file" name="bformImage" accept="image/*" onChange={handleFileChange} required className="w-full p-2 border border-gray-300 rounded-md" />
      </div>
    </div>
  </div>

  {/* Parent Details Section */}
  <div className="mb-6">
    <h3 className="text-xl font-semibold text-[rgb(1,1,93)] border-b mb-4 pb-1">👪 Parent Details</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <InputField label="Parent/Guardian Name" name="parent" type="text" value={formData.parent} onChange={handleChange}/>
      <InputField label="CNIC Number" name="CnicNumber" type="text"value={formData.CnicNumber} onChange={handleChange}/>
      <div>
        <label className="block text-sm text-[rgb(1,1,93)] mb-1">CNIC Front Image</label>
        <input type="file" name="CnicFrontImage" accept="image/*" onChange={handleFileChange} required className="w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div>
        <label className="block text-sm text-[rgb(1,1,93)] mb-1">CNIC Back Image</label>
        <input type="file" name="CnicBackImage" accept="image/*" onChange={handleFileChange} required className="w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <InputField label="Contact No" name="phone" type="tel" value={formData.phone} onChange={handleChange}/>
      <InputField label="Address" name="adress" type="text" value={formData.adress} onChange={handleChange}/>
    </div>
  </div>
  {/* Previous School Section */}
  <div className="mb-6">
    <h3 className="text-xl font-semibold text-[rgb(1,1,93)] border-b mb-4 pb-1">🏫 Previous School</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <InputField label="School Name" name="prevschoolName" type="text" value={formData.prevschoolName} onChange={handleChange}/>
      <InputField label="Class" name="prevClass" type="text" value={formData.prevClass} onChange={handleChange}/>
      <InputField label="School Address" name="prevSchoolAddress" type="text" value={formData.prevSchoolAddress} onChange={handleChange}/>
    </div>
  </div>
  {/* Submit Button */}
  <button type="submit" className="w-[50%] mt-4 mx-auto py-3 bg-[rgb(193,151,5)] text-white rounded-xl shadow-lg  transition-transform hover:scale-105">
    ➕ Add Student
  </button>
</form>

        )}

        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          theme="colored"
        />
      </div>
    </AdminLayout>
  );
}
