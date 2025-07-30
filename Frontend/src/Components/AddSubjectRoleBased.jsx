import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { adminDataContext } from '../Context-Api/AdminContext';
import { authDataContext } from '../Context-Api/AuthContext';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { FaBars, FaUserCircle } from 'react-icons/fa';
import AdminLayout from './AdminLayout';
import { useRef } from 'react';
import TeacherSidebar from './TeacherSidebar';
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader';
import AccountantSidebar from './AccountantSidebar';
import { userDataContext } from '../Context-Api/UserContext';


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
const AddSubjectRoleBased = () => {
const { serverUrl } = useContext(authDataContext);
const [classes,setClasses] = useState([]); 
const {userData} = useContext(userDataContext);
  const [subjectData, setSubjectData] = useState({
    name: "",
    code: "",
    classes: [], // array of class IDs as strings
    department: "",
  });
useEffect(()=>{
     const getClasses = async ()=>{
      try{
        const getClass = await axios.get(`${serverUrl}/api/teacher/classes`,{withCredentials:true});
        if(getClass.status===201){
            setClasses(getClass.data.class);
        }
    } catch(err){
        console.log(err?.response?.data.message || "Error not fetching Classes")
    }
     }
     getClasses();
},[serverUrl])
 
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
        `${serverUrl}/api/teacher/Add/subjects`,
        {
          name: subjectData.name,
          code: subjectData.code,
          classes: subjectData.classes,
          department: subjectData.department,
        },
        { withCredentials: true }
      );

      if (response.status === 201 || response.status === 200) {
        alert("Subject added successfully!");
       subjectData.name="";
       subjectData.classes=[];
       subjectData.code="";
       subjectData.department="";
        // navigate("/admin/dash");
      }
    } catch (err) {
      console.error("Error adding subject:", err);
      console.log(err?.response?.data?.message || "Failed to add subject");
    }
  };
     return (
       <div className="flex flex-col md:flex-row min-h-screen bg-white gap-3">
        {userData.role==="Teacher" &&
        <TeacherSidebar/>
}
    <div className="flex h-full w-full flex-col gap-3 px-4">
        <AdminTeachDashboardHeader/>
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
         <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} theme="colored" />
       </div>
       </div>
     );
   };

export default AddSubjectRoleBased
