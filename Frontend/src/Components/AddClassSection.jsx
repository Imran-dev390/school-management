// import React, { useContext, useEffect } from 'react'
// import { adminDataContext } from '../Context-Api/AdminContext'

// const AddClassSection = () => {
//     const {adminData,fetchAdminData} = useContext(adminDataContext);
//     const {classes = []} = adminData?.admin || {};
//     const {teachers = [] } = adminData?.admin || {};
//     useEffect(()=>{
//         fetchAdminData();
//     },[fetchAdminData])
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default AddClassSection















































import React, { useContext, useEffect, useState } from 'react';
import { adminDataContext } from '../Context-Api/AdminContext';
import AdminLayout from './AdminLayout';
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader';
import axios from 'axios';
import { authDataContext } from '../Context-Api/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
//import { adminDataContext } from '../Context-Api/AdminContext';
const AddClassSection = () => {
  const {serverUrl} = useContext(authDataContext);
  const { adminData, fetchAdminData } = useContext(adminDataContext);
  const { classes = [], sessions = [] , subjects = [] } = adminData?.admin || {};

  const [selectedClassId, setSelectedClassId] = useState(null);
  const [newSection, setNewSection] = useState('');
  const [isDefault, setIsDefault] = useState(false);

//   useEffect(() => {
//     fetchAdminData();
//   }, [fetchAdminData]);

  useEffect(() => {
  console.log("Classes:", classes);
}, [classes]);


// useEffect(() => {
//   if (selectedClassId) {
//     const cls = classes.find((cls) => cls.id === selectedClassId);
//     console.log("Selected Class:", cls);
//   }
// }, [selectedClassId, classes]);



useEffect(() => {
  fetchAdminData();
}, [fetchAdminData]);
console.log("subjects",subjects);

// Automatically set the first class as selected once classes are loaded
useEffect(() => {
  if (classes.length > 0 && !selectedClassId) {
    setSelectedClassId(classes[0].id);
  }
}, [classes, selectedClassId]);

  const selectedClass = classes.find((cls) => cls.id === selectedClassId);


  const [className, setClassName] = useState('');
//const [classYear, setClassYear] = useState('');
const [classSection, setClassSection] = useState('');

// const handleCreateClass = async (e) => {
//   e.preventDefault();
//   if (!className || !classYear || !classSection) return toast.error("All fields required");

//   try {
//     await axios.post(serverUrl + "/api/admin/Add/Class", {
//       name: className,
//       year: classYear,
//       section: classSection
//     }, { withCredentials: true });

//     toast.success("Class created successfully");
//     await fetchAdminData();
//     setClassName('');
//     setClassYear('');
//     setClassSection('');
//   } catch (err) {
//     toast.error(err?.response?.data?.message || "Error creating class");
//   }
// };

  // const handleAddSection = (e) => {
  //   e.preventDefault();
  //   if (!newSection || !selectedClassId) return alert("Class and Section are required");

  //   // TODO: Send this to backend
  //   console.log('Add Section:', {
  //     classId: selectedClassId,
  //     label: newSection,
  //     is_default: isDefault,
  //   });

  //   setNewSection('');
  //   setIsDefault(false);
  // };


const handleCreateClass = async (e) => {
  e.preventDefault();
  if (!className || !classSection) return toast.error("Class name and section are required");

  try {
    await axios.post(serverUrl + "/api/admin/Add/Class", {
      name: className,
      section: classSection
    }, { withCredentials: true });

    toast.success("Class created successfully");
    await fetchAdminData();
    setClassName('');
    setClassSection('');
  } catch (err) {
    toast.error(err?.response?.data?.message || "Error creating class");
  }
};


  return (
   <AdminLayout adminName="Bright Future">
  <div className="p-6 flex flex-col gap-4 w-full">
    {/* Header */}
    <AdminTeachDashboardHeader/>

    {/* Class Selector */}
    {/* <div className="mb-6">
      <label className="font-semibold text-gray-700 mr-3">Select Class:</label>
      <select
        className="border px-3 py-1 rounded"
        onChange={(e) => setSelectedClassId(Number(e.target.value))}
        value={selectedClassId || ''}
      >
        <option value="">-- Select --</option>
        {classes.map((cls) => (
          <option key={cls.id} value={cls.id}>
            {cls.label}
          </option>
        ))}
      </select>
    </div> */}

    {/* Class Sections View */}
    {selectedClass && (
      <div className="card p-4 border shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">
            <span className="text-gray-700">Class:</span>{' '}
            <span className="text-blue-600">{selectedClass.label}</span>
          </h2>
          <a
            href="#"
            className="bg-blue-500 text-white text-sm px-3 py-1 rounded"
          >
            <i className="fas fa-layer-group mr-1"></i> View Classes
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left: Class Sections Table */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-primary">
              <i className="fas fa-layer-group text-blue-600 mr-2"></i>
              Class Sections
            </h3>

            {/* Search Bar */}
            <div className="mb-2">
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 px-3 py-1 rounded w-full"
              />
            </div>

            <table className="w-full border text-sm">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="p-2 text-left">Section</th>
                  <th className="p-2 text-left">Total Students</th>
                  <th className="p-2 text-left hidden md:table-cell">Class Teacher</th>
                  <th className="p-2 text-left hidden md:table-cell">Action</th>
                </tr>
              </thead>
              <tbody>
                {selectedClass.sections?.length > 0 ? (
                  selectedClass.sections.map((section, idx) => {
                    const { male = 0, female = 0 } = section;
                    const total = male + female;
                    return (
                      <tr key={idx} className="border-b">
                        <td className="p-2">
                          {section.label}
                          {section.is_default && (
                            <small className="text-secondary ml-1"> - Default</small>
                          )}
                        </td>
                        <td className="p-2">
                          <span className="badge bg-blue-100 text-blue-800 px-2 rounded">
                            Male: {male}
                          </span>{' '}
                          <span className="badge bg-pink-100 text-pink-800 px-2 rounded">
                            Female: {female}
                          </span>{' '}
                          <span className="badge bg-blue-500 text-white px-2 rounded">
                            Total: {total}
                          </span>
                        </td>
                        <td className="p-2 hidden md:table-cell">-</td>
                        <td className="p-2 hidden md:table-cell">-</td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="4" className="p-4 text-center text-gray-500">
                      No sections found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            {/* Footer: Showing X to X of X */}
            <div className="text-sm text-gray-600 mt-2">
              Showing 1 to {selectedClass.sections?.length || 0} of{' '}
              {selectedClass.sections?.length || 0} Records
            </div>
          </div>

          {/* Right: Add New Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[rgb(1,1,93)]">
              <i className="fas fa-plus-square mr-2"></i>
              Add New Class / Section
            </h3>

            {/* <form onSubmit={handleAddSection} className="space-y-4">
              <div>
                <label htmlFor="sectionLabel" className="block font-medium text-gray-700">
                  Section:
                </label>
                <input
                  id="sectionLabel"
                  type="text"
                  className="w-full border px-3 py-2 rounded"
                  placeholder="Enter section"
                  value={newSection}
                  onChange={(e) => setNewSection(e.target.value)}
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="default"
                  checked={isDefault}
                  onChange={() => setIsDefault(!isDefault)}
                  className="mr-2"
                />
                <label htmlFor="default" className="text-gray-700 font-medium">
                  Set as default section?
                </label>
              </div>

              <button
                type="submit"
                className=" bg-[rgb(1,1,93)] text-white px-4 py-2 rounded text-sm"
              >
                <i className="fas fa-plus-square mr-1"></i> Add New Class / Section
              </button>
            </form> */}
            {/* <form onSubmit={handleCreateClass} className="space-y-4">
  <input value={className} onChange={(e) => setClassName(e.target.value)} placeholder="Class Name" />
  <input value={classYear} onChange={(e) => setClassYear(e.target.value)} type="number" placeholder="Year" />
  <input value={classSection} onChange={(e) => setClassSection(e.target.value)} placeholder="Initial Section" />
  <button type="submit">Create Class</button>
</form> */}



<form onSubmit={handleCreateClass} className="space-y-4 border p-4 rounded shadow-md bg-white">
  <div>
    <label htmlFor="className" className="block text-sm font-medium text-gray-700">Class Name</label>
    <input
      id="className"
      type="text"
      value={className}
      onChange={(e) => setClassName(e.target.value)}
      placeholder="Enter Class Name"
      className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      required
    />
  </div>
  <div>
    <label htmlFor="classSection" className="block text-sm font-medium text-gray-700">Initial Section</label>
    <input
      id="classSection"
      type="text"
      value={classSection}
      onChange={(e) => setClassSection(e.target.value)}
      placeholder="Enter Section (e.g., A)"
      className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      required
    />
  </div>

  <button
    type="submit"
    className="w-full bg-[rgb(193,152,3)] text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
  >
    <i className="fas fa-plus mr-2"></i>Add Class
  </button>
</form>


          </div>
        </div>
      </div>
    )}
    <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} theme="colored" />
  </div>
</AdminLayout>

  );
};

export default AddClassSection;
