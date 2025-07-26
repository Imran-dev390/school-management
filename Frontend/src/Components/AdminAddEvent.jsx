// import React from 'react'
// import AdminTeachDashboardHeader from './AdminTeachDashboardHeader'
// import { Link } from 'react-router-dom'
// import AdminLayout from './AdminLayout'

// const AdminAddEvent = () => {
//   return (
//     <AdminLayout adminName="Bright Future">
//       <div className="w-full h-full flex flex-col gap-4 mt-4">
// <AdminTeachDashboardHeader/>
//   {/* Header */}
//     <div className="flex w-full text-white p-3 rounded-md bg-[rgb(1,1,93)] flex-col md:flex-row justify-between items-center border-b pb-3">
//           <h2 className="text-xl font-semibold flex items-center gap-2">
//             <i className="fas fa-calendar-alt"></i> Add New Event
//           </h2>
//           <div className="flex justify-end">
//        <span className="bg-[#c19703] px-3 py-2 rounded">
//         <Link to="/admin/view/events">View All</Link>
//        </span>
//           </div>

//         </div>



//         <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
//   {/* Event Title & Event Date */}
//   <div className="flex flex-col md:flex-row md:space-x-4">
//     <div className="flex-1">
//       <label htmlFor="event_title" className="font-semibold block mb-1">
//         <span className="text-red-500">*</span> Event Title:
//       </label>
//       <input
//         type="text"
//         id="event_title"
//         name="title"
//         placeholder="Enter event title"
//         className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//     </div>

//     <div className="flex-1 mt-4 md:mt-0">
//       <label htmlFor="event_date" className="font-semibold block mb-1">
//         Event Date:
//       </label>
//       <input
//         type="date"
//         id="event_date"
//         name="event_date"
//         className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//     </div>
//   </div>

//   {/* Event Description */}
//   <div>
//     <label htmlFor="description" className="font-semibold block mb-1">
//       Event Description:
//     </label>
//     <textarea
//       id="description"
//       name="description"
//       rows="6"
//       placeholder="Write event details..."
//       className="w-full px-4 py-2 border border-gray-300 rounded resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
//     ></textarea>
//   </div>

//   {/* Upload Event Image */}
//   <div className="md:w-1/2">
//     <label htmlFor="event_image" className="font-semibold block mb-1">
//       Upload Event Image
//     </label>
//     <input
//       type="file"
//       id="event_image"
//       name="image"
//       className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
//         file:rounded file:border-0 file:text-sm file:font-semibold
//         file:bg-blue-50 file:text-blue-700
//         hover:file:bg-blue-100"
//     />
//   </div>
// </div>
// <div className="flex items-center justify-center">
// <button className='bg-[rgb(1,1,93)] px-4 w-fit py-1.5 rounded text-white'>Add New Event</button>
// </div>
//       </div>
//     </AdminLayout>
//   )
// }

// export default AdminAddEvent


























import React, { useState } from 'react';
import AdminLayout from './AdminLayout';
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { authDataContext } from '../Context-Api/AuthContext';

const AdminAddEvent = () => {
  const [title, setTitle] = useState('');
  const {serverUrl} = useContext(authDataContext);
  const [eventDate, setEventDate] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('eventDate', eventDate);
      formData.append('description', description);
      if (image) formData.append('image', image);

      const response = await axios.post(`${serverUrl}/api/admin/Add/Event`, formData, {
        withCredentials:true,
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      if(response.status===201){
      alert(response?.data?.message ||'Event created successfully!');
      // Optional: reset form
      setTitle('');
      setEventDate('');
      setDescription('');
      setImage("");
      }
    } catch (err) {
      console.error(err);
      alert(err?.response?.data.message ||'Failed to create event');
    }
  };

  return (
    <AdminLayout adminName="Bright Future">
      <div className="w-full h-full flex flex-col gap-4 mt-4">
        <AdminTeachDashboardHeader />

        <div className="flex w-full text-white p-3 rounded-md bg-[rgb(1,1,93)] flex-col md:flex-row justify-between items-center border-b pb-3">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <i className="fas fa-calendar-alt"></i> Add New Event
          </h2>
          <div className="flex justify-end">
            <span className="bg-[#c19703] px-3 py-2 rounded">
              <Link to="/admin/view/events">View All</Link>
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} encType="multipart/form-data" className="bg-white p-6 rounded-lg shadow-md space-y-6">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1">
              <label htmlFor="event_title" className="font-semibold block mb-1">
                <span className="text-red-500">*</span> Event Title:
              </label>
              <input
                type="text"
                id="event_title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex-1 mt-4 md:mt-0">
              <label htmlFor="event_date" className="font-semibold block mb-1">
                Event Date:
              </label>
              <input
                type="date"
                id="event_date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="description" className="font-semibold block mb-1">
              Event Description:
            </label>
            <textarea
              id="description"
              rows="6"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write event details..."
              className="w-full px-4  resize-none py-2 border border-gray-300 rounded  focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div className="md:w-1/2">
            <label htmlFor="event_image" className="font-semibold block mb-1">
              Upload Event Image
            </label>
            <input
              type="file"
              accept="image/*"
              name='image'
              onChange={(e) => setImage(e.target.files[0])}
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
            />
          </div>

          <div className="flex items-center justify-center">
            <button type="submit" className="bg-[rgb(1,1,93)] px-4 w-fit py-1.5 rounded text-white">
              Add New Event
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AdminAddEvent;
