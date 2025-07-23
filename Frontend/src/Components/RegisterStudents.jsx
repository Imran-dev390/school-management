import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { adminDataContext } from '../Context-Api/AdminContext'
import AdminLayout from './AdminLayout'
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader'
import { useNavigate } from 'react-router-dom'
import { authDataContext } from '../Context-Api/AuthContext'
import imageCompression from 'browser-image-compression';
import axios from 'axios'
import { FaBars, FaUserCircle } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify'


// const InputField = ({ label, name, type, value, onChange }) => (
//   <div className="relative">
//     <input
//       type={type}
//       name={name}
//       value={value}
//       onChange={onChange}
//       required
//       className="peer w-full p-3 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-green-500"
//       placeholder=" "
//     />
//     {/* <label
//       htmlFor={name}
//        className="absolute left-3 top-3 text-gray-500 text-sm transition-all    peer-focus:top-0 peer-focus:text-sm peer-focus:text-green-600"
//     >
//       {label}
//     </label> */}
//     <label htmlFor={name} className="block mb-1 text-gray-700 text-sm">
//   {label}
// </label>
//   </div>
// );



const InputField = ({ label, name, type, value, onChange }) => (
  <div className="mb-4">
    <label htmlFor={name} className="block mb-1 text-gray-700 text-sm">
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      required
      className="w-full px-3 py-2 border-b  border-gray-300 rounded-md focus:outline-none focus:border-green-500"
    />
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
const RegisterStudents = () => {
//    const {adminData,fetchAdminData} = useContext(adminDataContext);
  const navigate = useNavigate();
  const { fetchAdminData } = useContext(adminDataContext);
  const { adminData } = useContext(adminDataContext);
  const { serverUrl } = useContext(authDataContext);
  const {students = []} = adminData?.admin || {};
// useEffect(()=>{
//  fetchAdminData();
// },[adminData,fetchAdminData])
useEffect(() => {
  fetchAdminData();
}, [fetchAdminData]);

const currentYear = new Date().getFullYear();
const { classes = [], sessions = [] } = adminData?.admin || {};
const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  gender: '',
  dob: '',
  password: '',
  AdmissionNum:"",
  Roll:"",
  prevClass:"",
  concession:"",
  parent: '',
  adress: '',
  Class: '',
  prevschoolName: '',
  prevSchoolAddress: '',
  bformNumber: '',
  CnicNumber: '',
  sessionId: '', // 🔥 ADD THIS
  generateAdmissionVoucher: false,
});
const studentGrade2A = students.filter((student)=>student?.Classs.name === "grade 2");
useEffect(() => {
  const fetchNextNumbers = async () => {
    if (formData.Class && formData.sessionId) {
      try {
        const response = await axios.get(`${serverUrl}/api/admin/students/next-numbers`, {
          params: {
            classId: formData.Class,
            sessionId: formData.sessionId,
          },
          withCredentials: true
        });
        const { nextAdmissionNum, nextRoll } = response.data;
        setFormData(prev => ({
          ...prev,
          AdmissionNum: nextAdmissionNum.toString(),
          Roll: nextRoll.toString()
        }));
       // console.log("students",studentGrade2A);
       // alert(response);
      } catch (err) {
        console.error("Error fetching next numbers:", err);
      }
    }
  };
  fetchNextNumbers();
}, [formData.Class, formData.sessionId]);

const [images, setImages] = useState({
  profileImage: null,
  CnicFrontImage: null,
  CnicBackImage: null,
  bformImage: null,
});
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
  const [isSubmitting,setIsSubmitting] = useState(false);
  // const handleChange = (e) => {
  //   setFormData(prev => ({
  //     ...prev,
  //     [e.target.name]: e.target.value
  //   }));
  // };
  const handleChange = (e) => {
  const { name, value, type } = e.target;

  setFormData(prev => ({
    ...prev,
    [name]: type === 'number' ? Number(value) : value,
  }));
};

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
//   const handleSubmit = async (e) => {
//   e.preventDefault();
//   //alert("submitting");
//   //toast.success("Registering Student it will take few seconds...");
//   // const form = new FormData();
//   // for (const key in formData) {
//   //   form.append(key, formData[key]);
//   // }
// // Before appending, rename the field expected by the backend
// const form = new FormData();
// // for (const key in formData) {
// //   if (key === 'Class') {
// //     form.append('Classs', formData[key]); // Backend expects 'Classs'
// //   } else {
// //     form.append(key, formData[key]);
// //   }
// // }
// for (const key in formData) {
//   if (key === 'Class') {
//     form.append('Classs', formData[key]);
//   } else if (key === 'generateAdmissionVoucher') {
//     form.append('generateAdmissionVoucher', formData[key] ? 'true' : 'false');
//   } else {
//     form.append(key, formData[key]);
//   }
// }

//   // Append image files
//   for (const key in images) {
//     if (images[key]) {
//       form.append(key, images[key]);
//     }
//   }

//   try {
//    const response =  await axios.post(`${serverUrl}/api/admin/Add/Student`, form, {
//       withCredentials: true,
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });
// //    console.log([...formData.entries()]);
// console.log("response",response);
// if(response.status === 201){
// //alert("✅ Student registered successfully!")
//     toast.success("✅ Student registered successfully!");
//     await fetchAdminData();
//     navigate("/admin/dash");
//     setSubmitted(true);
// }
//   } catch (err) {
//     toast.error(err?.response?.data?.message || "Something went wrong");
//     console.log(formData);
//     console.log(err?.response?.data?.message || err.message || "erron when submiting");
//   }
// };


const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true); // 👈 Start loader

  const form = new FormData();

  for (const key in formData) {
    if (key === 'Class') {
      form.append('Classs', formData[key]);
    } else if (key === 'generateAdmissionVoucher') {
      form.append('generateAdmissionVoucher', formData[key] ? 'true' : 'false');
    } else {
      form.append(key, formData[key]);
    }
  }

  for (const key in images) {
    if (images[key]) {
      form.append(key, images[key]);
    }
  }

  try {
    const response = await axios.post(`${serverUrl}/api/admin/Add/Student`, form, {
      withCredentials: true,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      timeout: 30000, // 20 seconds
    });

    if (response.status === 201) {
      toast.success("✅ Student registered successfully!");
      await fetchAdminData();
      navigate("/admin/dash");
    }
    else {
    toast.error(`Unexpected status: ${response.status}`);
  }
  } catch (err) {
    if (err.code === 'ECONNABORTED') {
  toast.error("Request timed out. Please try again.");
} else {
  toast.error(err?.response?.data?.message || err.message || "Something went wrong");
}
  }
finally {
  setIsSubmitting(false); // ✅ Always reset the loader
}
};
        const currentSession = sessions[0] || {};
// const CurrentYear = new Date().getFullYear().toString();
// const current = currentSession.filter((session)=>{
//   if(session.startDate===currentYear){
//      session = currentYear;
//      console.log("true session is getting currenYear filtered Success",session);
//      return session;
//   }
// })
//console.log("currentSession",current);
  return (
    <AdminLayout adminName='Bright Future'>
       <div className="main w-full h-full mt-4 flex flex-col gap-3 items-center">
         <AdminTeachDashboardHeader/>    
<div className="w-full text-white  bg-[rgb(1,1,93)]   hover:bg-[#C19703] text-xl font-semibold flex items-center justify-center rounded-md py-3 shadow-md">
            <i className="fas fa-graduation-cap mr-2"></i> New Admission for Session :  
              <span className='ml-2'>  {new Date(currentSession.startDate).getFullYear()} - {new Date(currentSession.endDate).getFullYear()}
            </span>
          </div>
<form onSubmit={handleSubmit} encType="multipart/form-data" className='flex mt-4 border border-grey-300 p-3 w-full flex-col'>
  {/* Student Details Section */}
   <div className="mb-6">
    <h3 className="text-xl font-semibold text-[rgb(1,1,93)] border-b mb-4 pb-1">👤 Personal  Details</h3>
    <div className="grid  grid-cols-1 sm:grid-cols-3 gap-4">
      <InputField label="Full Name" name="name" type="text" value={formData.name} onChange={handleChange}/>
      <InputField label="Email" name="email" type="email"value={formData.email}onChange={handleChange} />
      <InputField label="Date of Birth" name="dob" type="date" value={formData.dob} onChange={handleChange}/>
      <InputField label="Password" name="password" type="password" value={formData.password} onChange={handleChange}/>
      <InputField label="B-Form Number" name="bformNumber"  type="text" value={formData.bformNumber} onChange={handleChange}/>
     {/* <InputField label=" Concession %" name=" concession" type="Number" value={formData.concession} onChange={handleChange}/> */}
  <InputField label="Fee Concession %" name="concession" type="number" value={formData.concession} onChange={handleChange} />
<div className="flex items-center gap-2 mt-2">
  <input
    type="checkbox"
    name="generateAdmissionVoucher"
    checked={formData.generateAdmissionVoucher}
    onChange={(e) =>
      setFormData((prev) => ({
        ...prev,
        generateAdmissionVoucher: e.target.checked,
      }))
    }
    className="w-4 h-4"
  />
  <label htmlFor="generateAdmissionVoucher" className="text-sm text-[rgb(1,1,93)]">
    Generate Admission Fee Voucher
  </label>
</div>

      <SelectField label="Gender" name="gender" value={formData.gender} onChange={handleChange} options={["Male", "Female"]} />
      <SelectField label="Class" name="Class" value={formData.Class} onChange={handleChange} options={classes.map(c => ({ value: c._id, label: `${c.name} - ${c.section}` }))} />
   
       <SelectField
  label="Session"
  name="sessionId"
  value={formData.sessionId}
  onChange={handleChange}
  options={sessions.map(s => ({
    value: s._id,
    label: `${new Date(s.startDate).getFullYear()}-${new Date(s.endDate).getFullYear()}`
  }))}
/>
 <InputField label="Admission Number" name="AdmissionNum"  type="text" value={formData.AdmissionNum} onChange={handleChange}  disabled/>
      <InputField label="Roll No" name="Roll" type="text"  value={formData.Roll} onChange={handleChange}  disabled/>
    {/* Profile Picture */}
      <div className="sm:col-span-2 grid grid-cols-1">
        <label htmlFor="profileImage" className="cursor-pointer text-md  text-[rgb(1,1,93)] mt-2 relative group">
            Profile
        </label>
        <input type="file" id="profileImage" name="profileImage" accept="image/*" onChange={handleFileChange} required className="" />
      </div>

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
  <button
  type="submit"
  disabled={isSubmitting}
  className={`w-[50%] mt-4 mx-auto py-3 rounded-xl shadow-lg transition-transform ${
    isSubmitting
      ? 'bg-gray-400 cursor-not-allowed'
      : 'bg-[rgb(193,151,5)] hover:scale-105 text-white'
  }`}
>
  {isSubmitting ? '⏳ Processing...' : '➕ Add Student'}
</button>

</form>
<ToastContainer position="top-right" autoClose={3000} />
       </div>
    </AdminLayout>
  )
}

export default RegisterStudents
