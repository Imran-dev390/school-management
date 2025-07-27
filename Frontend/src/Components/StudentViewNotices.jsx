import React from 'react'
import StudentSidebar from './StudentSidebar'
import { useContext } from 'react'
import { userDataContext } from '../Context-Api/UserContext'
import { authDataContext } from '../Context-Api/AuthContext'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader'
const StudentViewNotices = () => {
    const {userData} =  useContext(userDataContext);
    const {serverUrl} =  useContext(authDataContext);
    const [searchTerm, setSearchTerm] = useState('');
      const [currentPage, setCurrentPage] = useState(1);
      const itemsPerPage = 5;
    const [Notices,setNotices] = useState([]);
    useEffect(()=>{
       const getNotices = async ()=>{
        try{  
        const api = await axios.get(`${serverUrl}/api/student/notices`,{withCredentials:true});
             if(api.status===201){
                setNotices(api.data.Notice);
             }
            } catch(err){
                alert(err?.response?.data.message || "Fetching Failed notices")
            }
       }
       getNotices();
    },[serverUrl])
    const filteredEvents = Notices.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.description.toLowerCase().includes(searchTerm.toLowerCase())
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
  return (
    <div className="flex flex-col md:flex-row gap-4 min-h-screen bg-white">
        <StudentSidebar/>
         <div className="flex flex-col gap-4 w-full h-full px-4">
         <AdminTeachDashboardHeader/>
          {/* Section Heading */}
                <div className="w-full  bg-[rgb(1,1,93)] p-2 rounded text-white text-center mb-4">
                  <div className="flex justify-center items-center  pb-2">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                      <i className="fas fa-users"></i> View Notices
                    </h2>
                  </div>
                </div>
        
        
                <div className="overflow-x-auto border   border-grey-300 shadow-md p-4 mt-4">
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
                          <td className="p-2 px-3 font-bold border border-grey-300">{event.title} : <span className='font-light font-pretty'>{event.description}</span></td>
                                           <td className="p-2 px-3 border border-grey-300">{event.
linkTo==="url" ? <a href={event.url} className='underline text-blue-400'>URL</a> :  event.linkTo==="attachment" ? <a href={event.attachment}>{event.linkTo}</a> : <a className='text-blue-500'>{event.linkTo}</a>}</td>
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
    </div>
  )
}

export default StudentViewNotices
