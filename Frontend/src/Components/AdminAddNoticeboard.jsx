import React from 'react'
import AdminLayout from './AdminLayout'
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Select from "react-select";
import { useContext } from 'react'
import { adminDataContext } from '../Context-Api/AdminContext'
import { useEffect } from 'react'
import { authDataContext } from '../Context-Api/AuthContext'
import axios from 'axios'

const AdminAddNoticeboard = () => {
     const [linkTo, setLinkTo] = useState("url");
  const [isActive, setIsActive] = useState(true);
  const {serverUrl} = useContext(authDataContext);
  const {adminData,fetchAdminData} = useContext(adminDataContext);
  const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [url, setUrl] = useState('');
const [attachment, setAttachment] = useState(null);
const {classes = []} = adminData?.admin || {};
const [selectedClassIds, setSelectedClassIds] = useState([]);
const [selectedSectionIds, setSelectedSectionIds] = useState([]);
const [selectedStudentIds, setSelectedStudentIds] = useState([]);
useEffect(()=>{
fetchAdminData();
},[fetchAdminData])
console.log("classes",classes);

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!title || !description) {
    alert("Title and description are required.");
    return;
  }

  try {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("linkTo", linkTo);
    formData.append("isActive", isActive);

    if (linkTo === "url") {
      formData.append("url", url);
    } else if (linkTo === "attachment" && attachment) {
      formData.append("attachment", attachment);
    }

    formData.append("classIds", JSON.stringify(selectedClassIds));
    formData.append("sectionIds", JSON.stringify(selectedSectionIds));
    formData.append("studentIds", JSON.stringify(selectedStudentIds));

    const response = await axios.post(
      `${serverUrl}/api/admin/Add/Notice`,
      formData,
      {
        withCredentials:true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
      if(response.status===201){
        alert("Notice Successfully Created");
        setTitle("");
        setDescription("");
        setUrl("");
        setSelectedStudentIds([]);
        setSelectedSectionIds([]);
        setSelectedClassIds([]);
        setAttachment("");
      }
    // Optionally reset form state here
  } catch (error) {
    console.error("Error submitting notice:", error);
    if (error.response?.data?.message) {
      alert("Error: " + error.response.data.message);
    } else {
      alert("Something went wrong!");
    }
  }
};
  return (
    <AdminLayout adminName='Bright Future'>
       <div className="flex w-full h-full flex-col gap-3 mt-4">
 <AdminTeachDashboardHeader/>
  <div className="flex w-full text-white p-3 rounded-md bg-[rgb(1,1,93)] flex-col md:flex-row justify-between items-center border-b pb-3">
           <h2 className="text-xl font-semibold flex items-center gap-2">
             <i className="fas fa-calendar-alt"></i> Add New Notice
           </h2>
           <div className="flex justify-end">
             <span className="bg-[#c19703] px-3 py-2 rounded">
               <Link to="/admin/view/notice">View All</Link>
             </span>
           </div>
         </div>



         <div className="w-full p-4 bg-white rounded shadow">
      {/* Notice Title */}
      <div className="mb-4">
        <label className="block font-bold mb-1">
          <span className="text-red-500">*</span> Notice Title:
        </label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
          placeholder="Enter notice"
        />
      </div>

      {/* Class, Section, Student */}
     {/* Class Selection */}
<div className="grid grid-cols-3 items-start gap-4">
  {/* Class Selector */}
  <div className="flex flex-col gap-1">
    <label className="font-semibold text-sm text-gray-700">Class:</label>
    <Select
      isMulti
      options={classes.map((cls) => ({ value: cls._id, label: cls.name }))}
      value={classes
        .filter((cls) => selectedClassIds.includes(cls._id))
        .map((cls) => ({ value: cls._id, label: cls.name }))}
      onChange={(selected) => setSelectedClassIds(selected.map((s) => s.value))}
    />
  </div>

  {/* Section Selector */}
  <div className="flex flex-col gap-1">
    <label className="font-semibold text-sm text-gray-700">Section:</label>
    <Select
      isMulti
      options={classes
        .filter((cls) => selectedClassIds.includes(cls._id))
        .map((cls) => ({
          value: cls._id + "_" + cls.section,
          label: `${cls.name} - Section ${cls.section}`,
        }))}
      value={classes
        .filter((cls) => selectedSectionIds.includes(cls._id + "_" + cls.section))
        .map((cls) => ({
          value: cls._id + "_" + cls.section,
          label: `${cls.name} - Section ${cls.section}`,
        }))}
      onChange={(selected) => setSelectedSectionIds(selected.map((s) => s.value))}
    />
  </div>

  {/* Student Selector */}
  <div className="flex flex-col gap-1">
    <label className="font-semibold text-sm text-gray-700">Student</label>
    <Select
      isMulti
      options={classes
        .filter((cls) => selectedClassIds.includes(cls._id))
        .flatMap((cls) => cls.students || [])
        .map((stu) => ({ value: stu._id, label: stu.name }))}
      value={classes
        .flatMap((cls) => cls.students || [])
        .filter((stu) => selectedStudentIds.includes(stu._id))
        .map((stu) => ({ value: stu._id, label: stu.name }))}
      onChange={(selected) => setSelectedStudentIds(selected.map((s) => s.value))}
    />
  </div>
</div>

      {/* Description */}
      <div className="mb-4 mt-3">
        <label className="block font-bold mb-1">
          <span className="text-red-500">*</span> Notice Description:
        </label>
        <textarea
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
          placeholder="Enter notice"
          rows={3}
        ></textarea>
      </div>

      {/* Link To */}
      <div className="mb-4 md:flex md:items-center gap-6">
        <div className="mb-2 md:mb-0">
          <label className="block font-bold mb-1">
            <span className="text-red-500">*</span> Link to:
          </label>
          <div className="flex gap-4">
            {["none", "attachment", "url"].map((type) => (
              <label key={type} className="flex items-center font-semibold">
                <input
                  type="radio"
                  name="link_to"
                  value={type}
                  checked={linkTo === type}
                  onChange={() => setLinkTo(type)}
                  className="mr-2"
                />
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </label>
            ))}
          </div>
        </div>

        {/* URL input */}
        {linkTo === "url" && (
          <div className="flex-1">
            <label className="block font-bold mb-1">Notice URL:</label>
            <input
              type="text"
              name="url"
              value={url}
              onChange={(e)=>setUrl(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter notice URL"
            />
          </div>
        )}

        {/* Attachment input */}
        {linkTo === "attachment" && (
          <div className="flex-1">
            <label className="block font-bold mb-1">Attachment:</label>
            <input
              type="file"
              name="attachment"
              onChange={(e) => setAttachment(e.target.files[0])}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        )}
      </div>

      <hr className="my-6" />

      {/* Status */}
      <div>
        <label className="block font-bold mb-2">
          <span className="text-red-500">*</span> Status:
        </label>
        <div className="flex gap-4">
          <label className="flex items-center text-blue-600 font-semibold">
            <input
              type="radio"
              name="is_active"
              value="1"
              checked={isActive}
              onChange={() => setIsActive(true)}
              className="mr-2"
            />
            Active
          </label>
          <label className="flex items-center text-red-600 font-semibold">
            <input
              type="radio"
              name="is_active"
              value="0"
              checked={!isActive}
              onChange={() => setIsActive(false)}
              className="mr-2"
            />
            Inactive
          </label>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-center">
     <button onClick={handleSubmit} className='px-3 py-2 rounded bg-[rgb(1,1,93)] text-white'>Add New Notice</button>
     </div>
       </div>
    </AdminLayout>
  )
}

export default AdminAddNoticeboard
