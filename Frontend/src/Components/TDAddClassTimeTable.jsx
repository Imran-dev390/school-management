import React, { useContext, useEffect, useState } from 'react'
import ClassTimeTable from './AddTimetable'
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader'
import AdminLayout from './AdminLayout'
import { Link } from 'react-router-dom'
import { adminDataContext } from '../Context-Api/AdminContext'
import { authDataContext } from '../Context-Api/AuthContext'
import axios from 'axios'



const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const timeSlots = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
  '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM',
];
const TDAddClassTimeTable = () => {
      const { adminData } = useContext(adminDataContext);
  const {fetchAdminData} = useContext(adminDataContext);
  const { serverUrl } = useContext(authDataContext);

  const [classSubjects, setClassSubjects] = useState([]);
  const [formData, setFormData] = useState({
    className: '',
    day: '',
    periods: [
      {
        periodNumber: 1,
        subject: '',
        time: ''
      }
    ]
  });
  const [isLoading,setIsLoading] = useState(true);
  useEffect(() => {
    fetchAdminData().finally(() => setIsLoading(false));
  }, [fetchAdminData]);
  // When class changes, filter its subjects
  useEffect(() => {
    if (formData.className) {
      const selectedClass = adminData?.admin?.classes?.find(cls => cls._id === formData.className);
      setClassSubjects(selectedClass?.subjects || []);
    } else {
      setClassSubjects([]);
    }
  }, [formData.className, adminData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePeriodChange = (index, field, value) => {
    const updatedPeriods = [...formData.periods];
    updatedPeriods[index][field] = value;
    setFormData((prev) => ({
      ...prev,
      periods: updatedPeriods
    }));
  };

  const addPeriod = () => {
    setFormData((prev) => ({
      ...prev,
      periods: [
        ...prev.periods,
        {
          periodNumber: prev.periods.length + 1,
          subject: '',
          time: ''
        }
      ]
    }));
  };
  const [isSidebarOpen,setIsSidebarOpen] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${serverUrl}/api/admin/Add/timetable`, formData,{withCredentials:true});
      alert(res?.data?.message || 'Timetable created');
      setFormData({ className: '',
    day: '',
    periods: [
      {
        periodNumber: 1,
        subject: '',
        time: ''
      }
    ]})
    } catch (error) {
     // console.error('Submit error:', error);
     console.log("error",error);
      alert(error?.response?.data.message);
    }
  };
if(isLoading) return <p>Admin Data is Loading...</p>
  return (
   <AdminLayout>
    <div className="w-full flex gap-3 flex-col h-full mt-4">
    <AdminTeachDashboardHeader/>
 <div className="flex w-full text-white p-3 rounded-md bg-[rgb(1,1,93)] flex-col md:flex-row justify-between items-center border-b pb-3">
      <h2 className="text-lg font-semibold  flex items-center gap-2">
        <i className="fas fa-calendar-alt"></i> Add TimeTable
      </h2>
      <div className="mt-2 md:mt-0 flex gap-2">
        <Link to="/Take/Attendance" className="text-sm px-4 py-1 border border-gray-300 rounded bg-[#C19703]">
          <i className="fas fa-clock"></i>&nbsp;View TimeTable
        </Link>
      </div>
    </div>

    
    {/*  form stat*/}

    <form onSubmit={handleSubmit} className=
    "w-full lg:w-[900px] sm:w-[600px] mx-auto px-4 py-6 bg-white shadow-md rounded-md">
  <h2 className="text-xl font-semibold mb-6">Add Class Timetable</h2>
   <h4 className="text-lg font-semibold mb-4">Subject-wise Periods</h4>

  {/* Class and Day Selection */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        <span className="text-red-500">*</span> Class
      </label>
      <select
        name="className"
        value={formData.className}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">-- Select Class --</option>
        {adminData?.admin?.classes?.map((cls) => (
          <option key={cls._id} value={cls._id}>
            {cls.name} {cls.section}
          </option>
        ))}
      </select>
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        <span className="text-red-500">*</span> Day
      </label>
      <select
        name="day"
        value={formData.day}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">-- Select Day --</option>
        {daysOfWeek.map((day, i) => (
          <option key={i} value={day}>{day}</option>
        ))}
      </select>
    </div>
  </div>

  {/* Periods Section */}
  <div className="mt-8">
    {formData.periods.map((period, index) => (
      <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end mb-4">
        {/* Subject */}
        <div className="md:col-span-6">
          <label className="block text-lg font-medium text-gray-700 mb-1">Subject</label>
          <select
            value={period.subject}
            onChange={(e) => handlePeriodChange(index, 'subject', e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- Select Subject --</option>
            {classSubjects.map((subj, i) => (
              <option key={i} value={subj._id}>{subj.name}</option>
            ))}
          </select>
        </div>

        {/* Time */}
        <div className="md:col-span-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Period Time</label>
          <select
            value={period.time}
            onChange={(e) => handlePeriodChange(index, 'time', e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- Select Time --</option>
            {timeSlots.map((slot, i) => (
              <option key={i} value={slot}>{slot}</option>
            ))}
          </select>
        </div>

        {/* Add Button */}
        {/* {index === formData.periods.length - 1 && (
          <div className="md:col-span-2">
            <button
              type="button"
              onClick={addPeriod}
              className="w-full bg-blue-100 text-blue-700 font-semibold py-2 px-3 rounded hover:bg-blue-200"
            >
              + Add
            </button>
          </div>
        )} */}
      </div>
    ))}
  </div>
  <div className="mt-6 text-center">
    <button
      type="submit"
      className="bg-[rgb(1,1,93)] text-white font-semibold py-2 px-6 rounded transition"
    >
      Add Timetable
    </button>
    </div>
</form>

    </div>
   </AdminLayout>
  )
}

export default TDAddClassTimeTable
