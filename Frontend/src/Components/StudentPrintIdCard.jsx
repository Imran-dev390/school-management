import React, { useContext, useEffect, useState } from 'react'
import AdminLayout from './AdminLayout'
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader'
import { adminDataContext } from '../Context-Api/AdminContext';

// const StudentPrintIdCard = () => {
//   return (
//     <AdminLayout adminName='Bright Future'>
//        <div className="main w-full h-full flex flex-col gap-3 mt-4">
//             <AdminTeachDashboardHeader/>
//              <div className="w-full text-white p-3 rounded-md bg-[rgb(1,1,93)] flex justify-center items-center border-b pb-3">
//           <h2 className="text-lg font-semibold flex items-center gap-2">
//             <i className="fas fa-calendar-alt" /> Print Id Cards in Bulk
//           </h2>
//         </div>
//        </div>
//     </AdminLayout>
//   )
// }
const StudentPrintIdCard = () => {
  const { adminData, fetchAdminData } = useContext(adminDataContext);
  const { classes = [] } = adminData?.admin || {};

  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [studentFilter, setStudentFilter] = useState("1");


  useEffect(() => {
    fetchAdminData();
  }, [fetchAdminData]);

    // const sectionOptions =
    // classes.find((cls) => cls._id === selectedClass)?.section || [];
//     const selectedClassObj = classes.find((cls) => cls._id === selectedClass);
// const sectionOptions = Array.isArray(selectedClassObj?.section)
//   ? selectedClassObj.section
//   : [];

const selectedClassObj = classes.find((cls) => cls._id === selectedClass);
const sectionOptions = selectedClassObj ? [selectedClassObj.section] : [];
    console.log("classes",sectionOptions)
  return (
    <AdminLayout adminName="Bright Future">
      <div className="main w-full h-full flex flex-col gap-3 mt-4">
        <AdminTeachDashboardHeader />

        <div className="w-full text-white p-3 rounded-md bg-[rgb(1,1,93)] flex justify-center items-center border-b pb-3">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <i className="fas fa-calendar-alt" /> Print ID Cards in Bulk
          </h2>
        </div>

        <form
          className="bg-white border border-gray-300 shadow-sm rounded-md p-6 max-w-5xl"
          onSubmit={(e) => {
            e.preventDefault();
            console.log({ selectedClass, selectedSection, studentFilter });
          }}
        >
          {/* Heading */}
          <div className="mb-4">
            <h4 className="text-lg font-semibold border-b pb-1 w-fit text-gray-700">
              Search Students By Class
            </h4>
          </div>

          {/* Form fields */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Class Dropdown */}
            <div>
              <label htmlFor="classSelect" className="font-medium text-gray-700 mb-1 block">
                Class:
              </label>
              <select
                id="classSelect"
                value={selectedClass}
                onChange={(e) => {
                  setSelectedClass(e.target.value);
                  setSelectedSection(""); // reset section on class change
                }}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Class</option>
                {classes.map((cls) => (
                  <option key={cls._id} value={cls._id}>
                    {cls.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Section Dropdown */}
            <div>
              <label htmlFor="sectionSelect" className="font-medium text-gray-700 mb-1 block">
                Section:
              </label>
              <select
                id="sectionSelect"
                value={selectedSection}
                onChange={(e) => setSelectedSection(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Sections</option>
                {sectionOptions?.map((section, index) => (
                  <option key={index} value={section}>
                    {section}
                  </option>
                ))}
              </select>
            </div>

            {/* Student Filter Dropdown */}
            <div>
              <label htmlFor="studentFilter" className="font-medium text-gray-700 mb-1 block">
                Students:
              </label>
              <select
                id="studentFilter"
                value={studentFilter}
                onChange={(e) => setStudentFilter(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="1">Active Students</option>
                <option value="0">All Students</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="flex items-center gap-2 bg-[#c19703]  text-white px-6 py-2 rounded shadow-sm transition"
            >
              <i className="fas fa-print" />
              Print ID Cards
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};
export default StudentPrintIdCard
