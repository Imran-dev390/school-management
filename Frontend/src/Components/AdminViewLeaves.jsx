import React, { useContext, useEffect, useState } from 'react'
import AdminLayout from './AdminLayout'
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader'
import { adminDataContext } from '../Context-Api/AdminContext';

const AdminViewLeaves = () => {
  const { adminData, fetchAdminData } = useContext(adminDataContext);
  const { students = [] } = adminData?.admin || {};
  const [leaveRecords, setLeaveRecords] = useState([]);
  const [filterClass, setFilterClass] = useState('');
  const [filterSection, setFilterSection] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filterDate, setFilterDate] = useState('');

  useEffect(() => {
    fetchAdminData();
  }, []);

  useEffect(() => {
    const allLeaves = [];

    students.forEach((student) => {
      if (Array.isArray(student.leave)) {
        student.leave.forEach((leav) => {
          allLeaves.push({
            ...leav,
            studentInfo: {
              name: student.name,
              phone: student.phone,
              email: student.email,
              classId: student.Classs?._id,
              className: student.Classs?.name,
              section: student.Classs?.section,
            },
          });
        });
      }
    });

    setLeaveRecords(allLeaves);
  }, [students]);

  const filteredLeaves = leaveRecords.filter((leave) => {
    const matchClass = filterClass ? leave.studentInfo.classId === filterClass : true;
    const matchSection = filterSection ? leave.studentInfo.section === filterSection : true;
    const matchType = filterType
      ? filterType === 'single'
        ? !leave.endDate
        : !!leave.endDate
      : true;
    const matchDate = filterDate
      ? new Date(leave.date).toDateString() === new Date(filterDate).toDateString()
      : true;

    return matchClass && matchSection && matchType && matchDate;
  });

  // Unique class options
const classOptions = [...new Set(students.map(s => s.Classs?._id))];
const sectionOptions = [...new Set(students.map(s => s.Classs?.section))];


  return (
    <AdminLayout adminName='Bright Future'>
      <div className="w-full flex h-full flex-col gap-3">
        <AdminTeachDashboardHeader />
        <div className="bg-[rgb(1,1,93)] text-white text-center py-3 px-2 rounded flex items-center justify-between">
          <span className="text-lg font-semibold">
            <i className="fas fa-clock mr-2" />
            View Students Leave
          </span>
        </div>

        <div className="p-4">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-4">
            <select className="border p-2 rounded" value={filterClass} onChange={(e) => setFilterClass(e.target.value)}>
              <option value="">All Classes</option>
             {classOptions.map((id) => {
  const className = students.find(s => s.Classs?._id === id)?.Classs?.name || 'Unknown';
  return <option key={id} value={id}>{className}</option>;
})}

            </select>

            <select className="border p-2 rounded" value={filterSection} onChange={(e) => setFilterSection(e.target.value)}>
              <option value="">All Sections</option>
              {sectionOptions.map((section) => (
                <option key={section} value={section}>{section}</option>
              ))}
            </select>

            <select className="border p-2 rounded" value={filterType} onChange={(e) => setFilterType(e.target.value)}>
              <option value="">All Types</option>
              <option value="single">Single Day</option>
              <option value="multiple">Multiple Days</option>
            </select>

            <input
              type="date"
              className="border p-2 rounded"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
            />
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full border text-sm">
              <thead className="bg-[rgb(1,1,93)] text-white">
                <tr>
                  <th className="border px-3 py-2">Name</th>
                  <th className="border px-3 py-2">Phone</th>
                  <th className="border px-3 py-2">Email</th>
                  <th className="border px-3 py-2">Class</th>
                  <th className="border px-3 py-2">Section</th>
                  <th className="border px-3 py-2">Leave Date</th>
                  <th className="border px-3 py-2">Type</th>
                  <th className="border px-3 py-2">Reason</th>
                  <th className="border px-3 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeaves.length === 0 ? (
                  <tr>
                    <td colSpan="9" className="text-center py-4 text-gray-500">
                      No leave records found.
                    </td>
                  </tr>
                ) : (
                  filteredLeaves.map((leave, idx) => (
                    <tr key={idx} className="hover:bg-gray-100">
                      <td className="border px-3 py-2">{leave.studentInfo.name}</td>
                      <td className="border px-3 py-2">{leave.studentInfo.phone}</td>
                      <td className="border px-3 py-2">{leave.studentInfo.email}</td>
                      <td className="border px-3 py-2">{leave.studentInfo.className}</td>
                      <td className="border px-3 py-2">{leave.studentInfo.section}</td>
                      <td className="border px-3 py-2">{new Date(leave.date).toLocaleDateString()}</td>
                      <td className="border px-3 py-2">{leave.endDate ? 'Multiple Days' : 'Single Day'}</td>
                      <td className="border px-3 py-2">{leave.leave}</td>
                      <td className="border px-3 py-2 text-white">
                        <span
                          className={`px-2 py-1 rounded ${
                            leave.status === 'Approved'
                              ? 'bg-green-500'
                              : leave.status === 'Rejected'
                              ? 'bg-red-500'
                              : 'bg-yellow-500'
                          }`}
                        >
                          {leave.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};


export default AdminViewLeaves
