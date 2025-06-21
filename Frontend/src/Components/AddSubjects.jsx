import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { adminDataContext } from '../Context-Api/AdminContext';
import { authDataContext } from '../Context-Api/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { FaBars, FaUserCircle } from 'react-icons/fa';
const AddSubject = () => {
  const { adminData } = useContext(adminDataContext);
  const { fetchAdminData } = useContext(adminDataContext);
  const navigate = useNavigate();
  const {serverUrl} = useContext(authDataContext);
    const { classes = [] } = adminData?.admin;
//console.log("classes",classes)
  const [subjectData, setSubjectData] = useState({
    name: '',
    code: '',
    classes: [],
    department: '',
  });
  const [teachers, setTeachers] = useState([]);
  const [classe, setClasses] = useState([]);

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubjectData({
      ...subjectData,
      [name]: value
    });
  };

  // Handle the teacher and class options fetch
  /*useEffect(() => {
       // const teacherResponse = await axios.get('/api/teachers'); // Fetch teachers list
      //  const classResponse = await axios.get('/api/classes'); // Fetch classes list
   //     setTeachers(teacherResponse.data);
   if(classes){
        setClasses(classes);
   }
   fetchAdminData();
  }, [classes,fetchAdminData]);*/


  useEffect(() => {
    fetchAdminData();
  }, [fetchAdminData]); // only fetch once
  
  useEffect(() => {
    if (adminData?.admin?.classes) {
      setClasses(adminData.admin.classes);
    }
  }, [adminData]); // set classes only when adminData changes
  const [isSidebarOpen,setIsSidebarOpen] = useState(false);

  // Handle form submit to add the subject
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(serverUrl+'/api/admin/Add/subjects',{
         name:subjectData.name,
         code:subjectData.code,
         classes:subjectData.classes,
         department:subjectData.department,
        },{withCredentials:true});
      if (response.status === 201) {
        toast.success('Subject added successfully!');
        navigate("/admin/dash")
      }
    } catch (err) {
      console.error('Error adding subject:', err);
      toast.error(err?.response?.data.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">
        {!isSidebarOpen && (
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="md:hidden fixed top-4 left-4 z-50 bg-white border p-2 shadow"
              >
                <FaBars className="text-xl text-green-700" />
              </button>
            )}
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">Add New Subject</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Subject Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium">Subject Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={subjectData.name}
              onChange={handleChange}
              required
              className="mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Subject Code */}
          <div className="flex flex-col">
            <label htmlFor="code" className="text-sm font-medium">Subject Code</label>
            <input
              type="text"
              id="code"
              name="code"
              value={subjectData.code}
              onChange={handleChange}
              required
              className="mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Classes */}
          <div className="flex flex-col">
            <label htmlFor="classes" className="text-sm font-medium">Select Classes</label>
            <select
              id="classes"
              name="classes"
              multiple
              value={subjectData.classes}
              onChange={(e) => handleChange({ target: { name: 'classes', value: Array.from(e.target.selectedOptions, option => option.value) } })}
              required
              className="mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {classes.map((cls) => (
                <option key={cls._id} value={cls._id}>
                  {cls.name} {cls.section}
                </option>
              ))}
            </select>
          </div>

          {/* Department */}
          <div className="flex flex-col">
            <label htmlFor="department" className="text-sm font-medium">Department</label>
            <input
              type="text"
              id="department"
              name="department"
              value={subjectData.department}
              onChange={handleChange}
              required
              className="mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Subject
          </button>
        </form>
      </div>

      <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} theme="colored" />
    </div>
  );
};

export default AddSubject;
