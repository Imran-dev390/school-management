//import React from 'react'
import { useContext } from 'react'
import { authDataContext } from '../Context-Api/AuthContext'
import { adminDataContext } from '../Context-Api/AdminContext';
//import { useEffect } from 'react';
//import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader';
import AdminLayout from './AdminLayout';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useRef, useEffect } from "react";
// const AddSubjectAdmin = () => {
//     const {serverUrl} = useContext(authDataContext);
//     const {adminData,fetchAdminData} = useContext(adminDataContext);
//     const {classes = []}= adminData?.admin || {};
//   const [subjectData, setSubjectData] = useState({
//       name: '',
//       code: '',
//       classes: [],
//       department: '',
//     });
//       const handleChange = (e) => {
//     const { name, value } = e.target;
//     setSubjectData({
//       ...subjectData,
//       [name]: value
//     });
//   };
//     useEffect(()=>{
//        fetchAdminData();
//     },[fetchAdminData])


//     const handleSubmit = async (e) => {
//         e.preventDefault();
    
//         try {
//           const response = await axios.post(serverUrl+'/api/admin/Add/subjects',{
//              name:subjectData.name,
//              code:subjectData.code,
//              classes:subjectData.classes,
//              department:subjectData.department,
//             },{withCredentials:true});
//           if (response.status === 201) {
//             toast.success('Subject added successfully!');
//             navigate("/admin/dash")
//           }
//         } catch (err) {
//           console.error('Error adding subject:', err);
//           toast.error(err?.response?.data.message);
//         }
//       };
//   return (
//     <div>
      
//     </div>
//   )
// }


// const MultiSelectDropdown = ({ options, selectedValues, onChange }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef();

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const toggleOption = (value) => {
//     let newSelected;
//     if (selectedValues.includes(value)) {
//       newSelected = selectedValues.filter((v) => v !== value);
//     } else {
//       newSelected = [...selectedValues, value];
//     }
//     onChange(newSelected);
//   };

//   const selectedLabels = options
//     .filter((opt) => selectedValues.includes(opt.value))
//     .map((opt) => opt.label);

//   return (
//     <div className="relative" ref={dropdownRef}>
//       <button
//         type="button"
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-full border border-gray-300 rounded px-3 py-2 text-left focus:outline-none focus:ring-2 focus:ring-blue-400 flex justify-between items-center"
//       >
//         <span className="truncate">
//           {selectedLabels.length > 0 ? selectedLabels.join(", ") : "Select classes"}
//         </span>
//         <svg
//           className={`w-4 h-4 ml-2 transition-transform ${isOpen ? "rotate-180" : ""}`}
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//           aria-hidden="true"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//         </svg>
//       </button>

//       {isOpen && (
//         <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded shadow max-h-60 overflow-auto">
//           {options.map((opt) => (
//             <label
//               key={opt.value}
//               className="flex items-center px-3 py-2 hover:bg-blue-50 cursor-pointer"
//             >
//               <input
//                 type="checkbox"
//                 className="form-checkbox h-4 w-4 text-blue-600"
//                 checked={selectedValues.includes(opt.value)}
//                 onChange={() => toggleOption(opt.value)}
//               />
//               <span className="ml-2">{opt.label}</span>
//             </label>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };



// const MultiSelectDropdown = ({ options, selectedValues, onChange }) => {
//   const selectRef = useRef(null);

//   useEffect(() => {
//     // Initialize bootstrap-select
//     if (window.$ && selectRef.current) {
//       window.$(selectRef.current).selectpicker('refresh');
//     }
//   }, [options, selectedValues]);

//   const handleChange = (e) => {
//     const selected = [...e.target.selectedOptions].map(o => o.value);
//     onChange(selected);
//   };

//   return (
//     <select
//       ref={selectRef}
//       className="selectpicker form-control"
//       multiple
//       data-live-search="true"
//       data-actions-box="true"
//       value={selectedValues}
//       onChange={handleChange}
//     >
//       {options.map(opt => (
//         <option key={opt.value} value={opt.value}>{opt.label}</option>
//       ))}
//     </select>
//   );
// };
// const AddSubjectAdmin = () => {
//   const navigate = useNavigate();
//   const { serverUrl } = useContext(authDataContext);
//   const { adminData, fetchAdminData } = useContext(adminDataContext);
//   const { classes = [] } = adminData?.admin || {};

//   const [subjectData, setSubjectData] = useState({
//     name: "",
//     code: "",
//     classes: [],
//     department: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setSubjectData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleMultiSelectChange = (e) => {
//     const options = e.target.options;
//     const selected = [];
//     for (let i = 0; i < options.length; i++) {
//       if (options[i].selected) selected.push(options[i].value);
//     }
//     setSubjectData((prev) => ({
//       ...prev,
//       classes: selected,
//     }));
//   };



//   const classOptions = classes
//   .filter(cls => cls && cls.id != null && cls.name != null)
//   .map(cls => ({
//     value: cls.id != null ? cls.id.toString() : "",
//     label: cls.name,
//   }));

//   useEffect(() => {
//     fetchAdminData();
//   }, [fetchAdminData]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         serverUrl + "/api/admin/Add/subjects",
//         {
//           name: subjectData.name,
//           code: subjectData.code,
//           classes: subjectData.classes,
//           department: subjectData.department,
//         },
//         { withCredentials: true }
//       );
//       if (response.status === 201) {
//         toast.success("Subject added successfully!");
//   //      navigate("/admin/dash");
//       }
//     } catch (err) {
//       console.error("Error adding subject:", err);
//       toast.error(err?.response?.data.message);
//     }
//   };

//   return (
//     <AdminLayout adminName='Bright Future'>
//     <div className="container mx-auto px-4 py-6">
//       {/* <header className="bg-white shadow rounded p-6 mb-6">
//         <h1 className="text-3xl font-semibold text-center mb-2 flex items-center justify-center gap-3">
//           <i className="fas fa-school text-blue-600"></i>
//           GOVIND GAURI PUBLIC SCHOOL PIPRA MAAF
//           <small className="text-gray-500 text-base ml-2">2025-2026</small>
//         </h1>
//         <div className="text-center mt-2">
//           <label htmlFor="current_session" className="text-gray-800 mr-2 font-medium">
//             Current Session:
//           </label>
//           <select
//             id="current_session"
//             name="current_session"
//             className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             defaultValue="2025-2026"
//           >
//             <option value="2025-2026">2025-2026</option>
//             <option value="2026-2027">2026-2027</option>
//             <option value="Section A">Section A</option>
//           </select>
//         </div>
//       </header> */}
//    <AdminTeachDashboardHeader/>
//       <section className="mb-6">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-semibold border-b-2 border-blue-600 pb-1">
//             Add New Subject
//           </h2>
//           <a
//             href="https://wpschool.weblizar.com/wp-admin/admin.php?page=sm-staff-subjects"
//             className="text-blue-600 border border-blue-600 rounded px-3 py-1 text-sm hover:bg-blue-600 hover:text-white transition"
//           >
//             <i className="fas fa-tags mr-1"></i> View All
//           </a>
//         </div>

//         <form onSubmit={handleSubmit} className="bg-white shadow rounded p-6">
//           <input type="hidden" name="add-subject" value="73e259677f" />
//           <input type="hidden" name="action" value="wlsm-save-subject" />

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
//             <div>
//               <label htmlFor="name" className="block font-semibold mb-1">
//                 <span className="text-red-600">*</span> Subject Name:
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 placeholder="Enter subject name"
//                 value={subjectData.name}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="code" className="block font-semibold mb-1">
//                 Subject Code:
//               </label>
//               <input
//                 type="text"
//                 id="code"
//                 name="code"
//                 placeholder="Enter subject code"
//                 value={subjectData.code}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
//             <div>
//               <label htmlFor="department" className="block font-semibold mb-1">
//                 <span className="text-red-600">*</span> Subject Type:
//               </label>
//               <select
//                 id="department"
//                 name="department"
//                 value={subjectData.department}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 required
//               >
//                 <option value="">Select type</option>
//                 <option value="Numericals">Numericals</option>
//                 <option value="Theory">Theory</option>
//               </select>
//             </div>

//             <div>
//               <label htmlFor="classes" className="block font-semibold mb-1">
//                 Class:
//               </label>
//               {/* <select
//                 id="classes"
//                 name="classes"
//                 multiple
//                 value={subjectData.classes}
//                 onChange={handleMultiSelectChange}
//                 className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               >
//                 {classes.map((cls) => (
//                   <option key={cls.id} value={cls.id}>
//                     {cls.name}
//                   </option>
//                 ))}
//               </select> */}
             
// <MultiSelectDropdown
//   options={classOptions}
//   selectedValues={subjectData.classes}
//   onChange={(selected) =>
//     setSubjectData((prev) => ({ ...prev, classes: selected }))
//   }
// />


//             </div>
//           </div>

//           <div className="text-center">
//             <button
//               type="submit"
//               className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded inline-flex items-center gap-2"
//             >
//               <i className="fas fa-plus-square"></i> Add New Subject
//             </button>
//           </div>
//         </form>
//       </section>
//     </div>
//     </AdminLayout>
//   );
// };























// const AddSubjectAdmin = () => {
//   const navigate = useNavigate();
//   const { serverUrl } = useContext(authDataContext);
//   const { adminData, fetchAdminData } = useContext(adminDataContext);

//   // Show loading until adminData.admin is loaded
//   const classes = Array.isArray(adminData?.admin?.classes) ? adminData.admin.classes : [];

//   const [subjectData, setSubjectData] = useState({
//     name: "",
//     code: "",
//     classes: [], // selected class IDs as strings
//     department: "",
//   });

//   // Fetch admin data on mount
//   useEffect(() => {
//     fetchAdminData();
//   }, [fetchAdminData]);

//   // Prepare options for multi-select (safe map)
//   const classOptions = classes
//     .filter((cls) => cls && cls.id != null && cls.name != null)
//     .map((cls) => ({
//       value: String(cls.id),
//       label: cls.name,
//     }));

//   // Input change for text/select inputs
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setSubjectData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // On multi-select change (receives array of string values)
//   const handleMultiSelectChange = (selected) => {
//     setSubjectData((prev) => ({
//       ...prev,
//       classes: selected.map(String), // Ensure strings
//     }));
//   };

//   // Submit form data
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         `${serverUrl}/api/admin/Add/subjects`,
//         {
//           name: subjectData.name,
//           code: subjectData.code,
//           classes: subjectData.classes,
//           department: subjectData.department,
//         },
//         { withCredentials: true }
//       );
//       if (response.status === 201) {
//         toast.success("Subject added successfully!");
//         // navigate("/admin/dash");
//       }
//     } catch (err) {
//       console.error("Error adding subject:", err);
//       toast.error(err?.response?.data?.message || "Failed to add subject");
//     }
//   };

//   // Render loading if classes not yet loaded
//   if (!adminData?.admin) {
//     return (
//       <AdminLayout adminName="Bright Future">
//         <div className="container mx-auto px-4 py-6 text-center text-gray-500">
//           Loading...
//         </div>
//       </AdminLayout>
//     );
//   }

//   return (
//     <AdminLayout adminName="Bright Future">
//       <div className="container mt-4  px-4 py-6">
//         <AdminTeachDashboardHeader />

//         <section className="mb-6">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl font-semibold border-b-2 border-blue-600 pb-1">
//               Add New Subject
//             </h2>
//             <a
//               href="https://wpschool.weblizar.com/wp-admin/admin.php?page=sm-staff-subjects"
//               className="text-blue-600 border border-blue-600 rounded px-3 py-1 text-sm hover:bg-blue-600 hover:text-white transition"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <i className="fas fa-tags mr-1"></i> View All
//             </a>
//           </div>

//           <form onSubmit={handleSubmit} className="bg-white shadow rounded p-6">
//             <input type="hidden" name="add-subject" value="73e259677f" />
//             <input type="hidden" name="action" value="wlsm-save-subject" />

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
//               <div>
//                 <label htmlFor="name" className="block font-semibold mb-1">
//                   <span className="text-red-600">*</span> Subject Name:
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   placeholder="Enter subject name"
//                   value={subjectData.name}
//                   onChange={handleChange}
//                   className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="code" className="block font-semibold mb-1">
//                   Subject Code:
//                 </label>
//                 <input
//                   type="text"
//                   id="code"
//                   name="code"
//                   placeholder="Enter subject code"
//                   value={subjectData.code}
//                   onChange={handleChange}
//                   className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
//               <div>
//                 <label htmlFor="department" className="block font-semibold mb-1">
//                   <span className="text-red-600">*</span> Subject Type:
//                 </label>
//                 <select
//                   id="department"
//                   name="department"
//                   value={subjectData.department}
//                   onChange={handleChange}
//                   className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                   required
//                 >
//                   <option value="">Select type</option>
//                   <option value="Numericals">Numericals</option>
//                   <option value="Theory">Theory</option>
//                 </select>
//               </div>

//               <div>
//                 <label htmlFor="classes" className="block font-semibold mb-1">
//                   Class:
//                 </label>

//                 <MultiSelectDropdown
//                   options={classOptions}
//                   selectedValues={subjectData.classes}
//                   onChange={handleMultiSelectChange}
//                 />
//               </div>
//             </div>

//             <div className="text-center">
//               <button
//                 type="submit"
//                 className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded inline-flex items-center gap-2"
//               >
//                 <i className="fas fa-plus-square"></i> Add New Subject
//               </button>
//             </div>
//           </form>
//         </section>
//       </div>
//     </AdminLayout>
//   );
// };

























// const MultiSelectDropdown = ({ options, selectedValues, onChange }) => {
//   const handleChange = (e) => {
//     // Collect selected options as array of strings
//     const selected = [...e.target.selectedOptions].map((o) => o.value);
//     onChange(selected);
//   };

//   return (
//     <select
//       multiple
//       value={selectedValues}
//       onChange={handleChange}
//       className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
//       size={Math.min(5, options.length)} // show max 5 visible options at once
//     >
//       {options.map(({ value, label }) => (
//         <option key={value} value={value} className="hover:bg-blue-100">
//           {label}
//         </option>
//       ))}
//     </select>
//   );
// };















const MultiSelectDropdown = ({ options, selectedValues, onChange, placeholder = "Select classes" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Toggle option selection
  const toggleOption = (value) => {
    let newSelected;
    if (selectedValues.includes(value)) {
      newSelected = selectedValues.filter((v) => v !== value);
    } else {
      newSelected = [...selectedValues, value];
    }
    onChange(newSelected);
  };

  // Remove selected tag
  const removeTag = (value) => {
    onChange(selectedValues.filter((v) => v !== value));
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Input area showing selected tags and clickable to toggle dropdown */}
      <div
        className="border border-gray-300 rounded px-3 py-2 flex flex-wrap gap-1 cursor-pointer focus-within:ring-2 focus-within:ring-blue-400"
        onClick={() => setIsOpen(!isOpen)}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
      >
        {selectedValues.length === 0 ? (
          <span className="text-gray-400 select-none">{placeholder}</span>
        ) : (
          selectedValues.map((val) => {
            const label = options.find((opt) => opt.value === val)?.label || val;
            return (
              <span
                key={val}
                className="bg-blue-600 text-white px-2 py-0.5 rounded flex items-center space-x-1"
              >
                <span>{label}</span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeTag(val);
                  }}
                  className="hover:text-red-200"
                  aria-label={`Remove ${label}`}
                >
                  &times;
                </button>
              </span>
            );
          })
        )}
        <div className="flex-grow" />
        <div className="text-gray-500 ml-2">
          <svg
            className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Dropdown options */}
      {isOpen && (
        <ul className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded border border-gray-300 bg-white shadow-lg">
          {options.map(({ value, label }) => (
            <li
              key={value}
              className="flex items-center px-3 py-2 hover:bg-blue-100 cursor-pointer select-none"
              onClick={() => toggleOption(value)}
            >
              <input
                type="checkbox"
                checked={selectedValues.includes(value)}
                onChange={() => toggleOption(value)}
                className="mr-2 cursor-pointer"
                tabIndex={-1}
              />
              <span>{label}</span>
            </li>
          ))}
          {options.length === 0 && (
            <li className="px-3 py-2 text-gray-500">No options available</li>
          )}
        </ul>
      )}
    </div>
  );
};


const AddSubjectAdmin = () => {
  const navigate = useNavigate();
  const { serverUrl } = useContext(authDataContext);
  const { adminData, fetchAdminData } = useContext(adminDataContext);

  const classes = Array.isArray(adminData?.admin?.classes) ? adminData.admin.classes : [];

  const [subjectData, setSubjectData] = useState({
    name: "",
    code: "",
    classes: [], // array of class IDs as strings
    department: "",
  });

  useEffect(() => {
    fetchAdminData();
  }, [fetchAdminData]);

  console.log("clases",classes)
//   const classOptions = classes
//     .filter((cls) => cls && cls.id != null && cls.name != null)
//     .map((cls) => ({
//       value: String(cls.id),
//       label: cls.name,
//     }));
const classOptions = classes
  .filter((cls) => cls && cls._id != null && cls.name != null)
  .map((cls) => ({
    value: String(cls._id),
    label: `${cls.name} - ${cls.section}`,
  }));

console.log("classoption",classOptions);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubjectData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMultiSelectChange = (selected) => {
    setSubjectData((prev) => ({
      ...prev,
      classes: selected,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${serverUrl}/api/admin/Add/subjects`,
        {
          name: subjectData.name,
          code: subjectData.code,
          classes: subjectData.classes,
          department: subjectData.department,
        },
        { withCredentials: true }
      );

      if (response.status === 201) {
        toast.success("Subject added successfully!");
        // navigate("/admin/dash");
      }
    } catch (err) {
      console.error("Error adding subject:", err);
      toast.error(err?.response?.data?.message || "Failed to add subject");
    }
  };

  if (!adminData?.admin) {
    return (
      <AdminLayout adminName="Bright Future">
        <div className="container mx-auto px-4 py-6 text-center text-gray-500">
          Loading...
        </div>
      </AdminLayout>
    );
  }
  return (
    <AdminLayout adminName="Bright Future">
      <div className="flex flex-col gap-3 w-full  mt-4 px-4 py-6">
        <AdminTeachDashboardHeader />


          <div className="flex w-full p-2  bg-[rgb(1,1,93)] text-white justify-between items-center mb-4">
            <h2 className="text-xl text-center flex-1  font-semibold">
              Add New Subject
            </h2>
           <Link to="/admin/subjects" className='bg-[#C19703] p-1 border border-white'>
              <i className="fas fa-tags mr-1"></i> View All
            </Link>
          </div>
        <section className="mb-6">


          <form onSubmit={handleSubmit} className="bg-white shadow rounded p-6">
            <input type="hidden" name="add-subject" value="73e259677f" />
            <input type="hidden" name="action" value="wlsm-save-subject" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <label htmlFor="name" className="block font-semibold mb-1">
                  <span className="text-red-600">*</span> Subject Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter subject name"
                  value={subjectData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              <div>
                <label htmlFor="code" className="block font-semibold mb-1">
                  Subject Code:
                </label>
                <input
                  type="text"
                  id="code"
                  name="code"
                  placeholder="Enter subject code"
                  value={subjectData.code}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <label htmlFor="department" className="block font-semibold mb-1">
                  <span className="text-red-600"></span> Subject Department:
                </label>
                <select
                  id="department"
                  name="department"
                  value={subjectData.department}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                >
                  <option value="">Select type</option>
                  <option value="Numericals">Science</option>
                  <option value="Theory">Theory</option>
                </select>
              </div>

              <div>
                <label htmlFor="classes" className="block font-semibold mb-1">
                  Class:
                </label>

                {/* <MultiSelectDropdown
                  options={classOptions}
                  selectedValues={subjectData.classes}
                  onChange={handleMultiSelectChange}
                /> */}

 <MultiSelectDropdown
  options={classOptions}
  selectedValues={subjectData.classes}
  onChange={handleMultiSelectChange}
  placeholder="Select classes"
/>

              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-[rgb(1,1,93)]  text-white font-semibold px-6 py-2 rounded inline-flex items-center gap-2"
              >
                <i className="fas fa-plus-square"></i> Add New Subject
              </button>
            </div>
          </form>
        </section>
      </div>
    </AdminLayout>
  );
};
export default AddSubjectAdmin
