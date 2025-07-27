import React from 'react'
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader'
import { Link } from 'react-router-dom'
import AdminLayout from './AdminLayout'
import { useContext } from 'react'
import { adminDataContext } from '../Context-Api/AdminContext'
import { useEffect } from 'react'
import { useState } from 'react'

const AdminViewNotices = () => {
    const {adminData,fetchAdminData} = useContext(adminDataContext);
    const { sessions = [] } = adminData?.admin || {};
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    useEffect(()=>{
       fetchAdminData();
    },[fetchAdminData])
      const allEvents = sessions.flatMap((session) =>
    session?.Notices?.map((Notice) => ({
      ...Notice,
      sessionId: session._id,
    })) || []
  );
  const filteredEvents = allEvents.filter((Notice) =>
    Notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    Notice.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const totalItems = filteredEvents.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedEvents = filteredEvents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };
    console.log("adminData",allEvents);
  return (
    <AdminLayout adminName="Bright Future">
      <div className="flex flex-col gap-3 w-full h-full items-center mt-4">
      <AdminTeachDashboardHeader/>
        {/* Header */}
              <div className="flex w-full text-white p-3 rounded-md bg-[rgb(1,1,93)] flex-col md:flex-row justify-between items-center border-b pb-3">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <i className="fas fa-calendar-alt"></i> View Notices 
                </h2>
                <div className="mt-2 md:mt-0 flex gap-2">
                  <Link
                    to="/admin/add-new/notices"
                    className="text-sm px-4 py-1 border border-gray-300 rounded bg-[#C19703]"
                  >
                    <i className="fas fa-clock"></i>&nbsp;Add Notices
                  </Link>
                </div>
              </div>

 <div className="overflow-x-auto border w-full   border-grey-300 shadow-md p-4 mt-4">
          <div className="flex justify-end mb-2">
            <input
              type="search"
              className="border outline-none rounded border-slate-500 px-3 py-1"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <table className="min-w-full mt-4 bg-white border border-collapse border-gray-200 rounded shadow">
            <thead className="bg-[rgb(1,1,93)] text-white">
              <tr>
                <th className="px-3 py-2 text-left">Notice</th>
                <th className="px-3 py-2 text-left">Link To</th>
                <th className="px-3 py-2 text-left">is Active</th>
                <th className="px-3 py-2 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {paginatedEvents.map((event) => (
                <tr key={event._id} className="border-b hover:bg-gray-100">
                  <td className="p-2 px-3 font-semibold border border-grey-300">{event.title} : <span className='font-light'>{event.description}</span></td>
                  <td className="p-2 px-3 border border-grey-300">{event.
linkTo==="url" ? <a href={event.url} className='underline text-blue-400'>URL</a> : <a>{event.linkTo}</a>}</td>
                  <td className="p-2 px-3 border border-grey-300 text-blue-600 hover:underline cursor-pointer">
                    {event.isActive ? "Active" : "UnActive"}
                  </td>
                 <td className="p-2 px-3 border border-grey-300">
                    {new Date(event.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex flex-col md:flex-row md:justify-between items-center mt-4 gap-2">
            <span className="text-sm text-gray-700">
              Showing {(currentPage - 1) * itemsPerPage + 1} to{' '}
              {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} entries
            </span>
            <div className="flex gap-2">
              <button
                onClick={handlePrevPage}
                className="px-3 py-1 bg-gray-200 cursor-pointer rounded hover:bg-gray-300 disabled:opacity-50"
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <button
                onClick={handleNextPage}
                className="px-3 py-1 bg-[#c19703] text-white cursor-pointer rounded disabled:opacity-990"
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>

      </div>
    </AdminLayout>
  )
}

export default AdminViewNotices
