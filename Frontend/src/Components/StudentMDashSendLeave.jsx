import React, { useContext, useEffect, useState } from 'react'
import { adminDataContext } from '../Context-Api/AdminContext'
import { authDataContext } from '../Context-Api/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader';
import StudentSidebar from './StudentSidebar'
import axios from 'axios';
const StudentMDashSendLeave = () => {
     const { adminData, fetchAdminData } = useContext(adminDataContext);
      const { serverUrl } = useContext(authDataContext);
      const [leave, setLeave] = useState('');
      const [date, setDate] = useState('');
      const [endDate, setEndDate] = useState('');
      const [leaveType, setLeaveType] = useState('single'); // 'single' or 'multiple'
    
      useEffect(() => {
        fetchAdminData();
      }, [fetchAdminData]);
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!leave.trim() || !date || (leaveType === 'multiple' && !endDate)) {
          toast.error('Please fill in all required fields.');
          return;
        }
    
        try {
          const payload = {
            leave,
            date,
            ...(leaveType === 'multiple' && { EndDate: endDate }),
          };
    
          const res = await axios.post(
            `${serverUrl}/api/admin/Add/Leave`,
            payload,
            {
              headers: {
                'Content-Type': 'application/json',
              },
              withCredentials: true,
            }
          );
    
          if (res.status === 200) {
            toast.success(res.data.message || 'Leave request submitted successfully!');
            setLeave('');
            setDate('');
            setEndDate('');
            setLeaveType('single');
          } else {
            toast.error(res.data.message || 'Failed to submit leave request.');
          }
        } catch (error) {
          toast.error(error?.response?.data.message ||'They Actions Will Only Perform the Student Role or Teacher.');
          console.error('Submit leave error:', error);
        }
      };
  return (
    <div className='flex flex-col md:flex-row min-h-screen bg-white'>
         <StudentSidebar/>
       <div className="main w-full h-full flex flex-col gap-3 justify-center mt-3 px-4 ">
              <AdminTeachDashboardHeader />
              <div className="flex w-full text-white p-3 rounded-md bg-[rgb(1,1,93)] flex-col md:flex-row justify-center items-center border-b pb-3">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <i className="fas fa-calendar-alt"></i> Submit Leave Request
                </h2>
              </div>
              <div className="wrapper border border-grey-300 mt-4 px-4 py-2">
                <h2 className="text-2xl font-semibold mb-4">Send Leave By Student</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3">
                  {/* Radio Buttons */}
                  <div className="col-span-2 flex gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="leaveType"
                        value="single"
                        checked={leaveType === 'single'}
                        onChange={() => setLeaveType('single')}
                      />
                      Single-Day
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="leaveType"
                        value="multiple"
                        checked={leaveType === 'multiple'}
                        onChange={() => setLeaveType('multiple')}
                      />
                      Multiple-Days
                    </label>
                  </div>
      
                  {/* Leave Reason */}
                  <label className="flex flex-col text-sm font-medium">
                    Leave Reason
                    <textarea
                      value={leave}
                      onChange={(e) => setLeave(e.target.value)}
                      rows={4}
                      placeholder="Explain the reason for your leave"
                      className="border border-gray-300 rounded p-2 mt-1 resize-none"
                      required
                    />
                  </label>
      
                  {/* Date Fields */}
                  {leaveType === 'single' ? (
                    <label className="flex flex-col text-sm font-medium">
                      Leave Date
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="border border-gray-300 rounded p-2 mt-1"
                        required
                      />
                    </label>
                  ) : (
                    <div className="grid grid-cols-2 gap-2">
                      <label className="flex flex-col text-sm font-medium">
                        Start Date
                        <input
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="border border-gray-300 rounded p-2 mt-1"
                          required
                        />
                      </label>
                      <label className="flex flex-col text-sm font-medium">
                        End Date
                        <input
                          type="date"
                          value={endDate}
                          onChange={(e) => setEndDate(e.target.value)}
                          className="border border-gray-300 rounded p-2 mt-1"
                          required
                        />
                      </label>
                    </div>
                  )}
      
                  <button
                    type="submit"
                    className="bg-[#c19703] text-white py-2 rounded col-span-2"
                  >
                    Submit Leave
                  </button>
                </form>
              </div>
      
              <ToastContainer position="top-right" autoClose={3000} />
            </div>
    </div>
  )
}

export default StudentMDashSendLeave
