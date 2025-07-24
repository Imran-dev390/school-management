import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { authDataContext } from '../Context-Api/AuthContext'
import { adminDataContext } from '../Context-Api/AdminContext'
import AdminLayout from './AdminLayout'
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const TransferStudent = () => {
    const {adminData,fetchAdminData} = useContext(adminDataContext);
    const {classes = [],students = []} = adminData?.admin || {};
    const [sectionId,setSectionId] = useState('');
    const [classId,setClassId] = useState('');
    const [schoolId, setSchoolId] = useState('');
    const [studentId,setStudentId]  = useState("");
  const [note, setNote] = useState('');
  const [toClass,setToClass] = useState("");
  const {serverUrl} = useContext(authDataContext);
    useEffect(()=>{
      fetchAdminData();
    },[fetchAdminData]);
   const sectionObj = classes.find((cls)=> cls._id === classId);
//  const sectionOptions = sectionObj?.section || [];

   const sectionOptions = sectionObj ? [sectionObj.section] : [];

//   const toClassObj = classes.find((cls) => cls._id === toClassId);
//const toSectionOptions = toClassObj ? [toClassObj.section] : [];

//     const filteredStudents = students.filter(st => {
//   // Check if student's class matches selected classId
//   const classMatch = st.Classs === classId || (st.Classs?._id === classId);
  
//   // If sectionId is empty or "All Sections", don't filter by section
//   const sectionMatch = !sectionId || sectionId === "" || sectionId === "All Sections" 
//     ? true 
//     : st.section === sectionId;
// //: st.section.trim().toLowerCase() === sectionId.trim().toLowerCase();
//   return classMatch && sectionMatch;
// });






const navigate = useNavigate();
console.log("students",students);
const filteredStudents = students.filter(st => {
  const classMatch = st.Classs === classId || (st.Classs?._id === classId);

  // const sectionMatch = !sectionId || sectionId === "" || sectionId === "All Sections"
  //   ? true
  //   : st.Classs?.section === sectionId || st.section === sectionId;
  const sectionMatch = !sectionId || sectionId === "" || sectionId === "All Sections"
  ? true
  : st.Classs?.section === sectionId;


  return classMatch && sectionMatch;
});
console.log("filtered Students",filteredStudents);
const handleTransfer = async (e) => {
  e.preventDefault();

  if (!studentId || !schoolId || !classId) {
    alert("Please fill in all required fields");
    return;
  }

  const payload = {
    studentId,
    toSchool: schoolId,
    toClass,
    //toSection: sectionId,
    note,
  };
  try {
  const response = await axios.post(
    `${serverUrl}/api/admin/student/transfer`,
    payload,
    {
      withCredentials: true,
    }
  );
  if(response.status === 200){
    alert("Student Transferred Successfully!");
    navigate("/admin/students/transferred")
  }
}
   catch (err) {  
  console.error(err);
    alert(err?.response?.data.message ||"Error transferring student");
  }
};

    console.log("optionsSec",sectionOptions);
  return (
    <AdminLayout adminName='Bright Futre'>
        <div className="main w-full h-full flex flex-col gap-3 mt-4 items-center">
       <AdminTeachDashboardHeader/>
        <div className="flex w-full text-white p-3 pb-3 justify-between   rounded-md bg-[rgb(1,1,93)] flex-col md:flex-row  items-center border-b ">
           <div className="flex ">
 <h2 className="text-xl font-bold  flex items-center gap-2">
               <i className="fas fa-calendar-alt"></i> Transfer Students
             </h2>
           </div>
             <div className="mt-2  font-semibold   md:mt-0 flex items-center  justify-end gap-2">
               <Link to="/admin/students/transferred" className="text-sm px-4 py-1 border border-gray-300 rounded bg-[#C19703]">
                 <i className="fas fa-clock"></i>&nbsp;View Transfered Students
               </Link>
             </div>
           </div>

           {/* formContainer*/}
             {/* <div className="father w-full h-full flex flex-col p-4 shadow-xl gap-3 bg-grey-400">
                <form className=''>
               <div className="child p-3 border grid grid-cols-3 border-grey-300">
                  <select name="class" id={classId} 
                  onChange={(e)=>setClassId(e.target.value)}
                  className='form-select   border border-gray-300 rounded'>
                    <option value="">Select Class</option>
                    {classes.map((clas)=>{
                        return <option  value={clas._id} key={clas._id}>{clas.name}</option>
                    })}
                     <label htmlFor="class">Class:</label>
                  </select>
                  <select name="section" id={sectionId}
                  onChange={(e)=>setSectionId(e.target.value)} 
                  className='form-select  p-2 border border-gray-300 rounded'>
                    <label htmlFor="section">Section:</label>
                    <option value="">All Section</option>
                    {sectionOptions.map((section)=>{
                        return <option value={section} key={section}>{section}</option>
                    })}
                  </select>
               </div>

                </form>
             </div> */}

                     <form onSubmit={handleTransfer} className="w-full mt-4 border border-grey-300 p-4 bg-white shadow-md rounded">
          {/* Select Student */}
          <div className="mb-4">
            <h3 className="font-semibold text-lg mb-2">Student</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block font-semibold mb-1">Class:</label>
                <select
                  className="w-full border border-gray-300 p-2 rounded"
                  value={classId}
                  onChange={(e) => setClassId(e.target.value)}
                >
                  <option value="">Select Class</option>
                  {classes.map(cl => (
                    <option key={cl._id} value={cl._id}>{`${cl.name}`}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block font-semibold mb-1">Section:</label>
                <select
                  className="w-full border border-gray-300 p-2 rounded"
                  value={sectionId}
                  onChange={(e) => setSectionId(e.target.value)}
                >
                  <option value="">All Sections</option>
                  {sectionOptions.map((sec, i) => (
                    <option key={i} value={sec}>{sec}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block font-semibold mb-1">Student:</label>
                <select
                value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded"
                >
                  <option value="">Select Student</option>
                  {filteredStudents.map(st => (
                    <option key={st._id} value={st._id}>{st.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Transfer to School */}
          <div className="mb-8">
            <h3 className="font-semibold text-lg mb-2">Transfer to School</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block font-semibold mb-1">School:</label>
                {/* <select
                  className="w-full border border-gray-300 p-2 rounded"
                  value={schoolId}
                  onChange={(e) => setSchoolId(e.target.value)}
                >
                  <option value="">Select School</option>
                  {/* {schools.map(s => (
                    <option key={s._id} value={s._id}>{s.name}</option>
                  ))} */}
                  {/* <option value="mern">Bright Kids</option>
                 <option value="mern">Bright Future</option>
                </select> */} 
                <input
  type="text"
  placeholder="Enter school name"
  className="w-full border border-gray-300 p-2 rounded"
  value={schoolId}
  onChange={(e) => setSchoolId(e.target.value)}
/>

            
              </div>
              <div>
                <label className="block font-semibold mb-1">Class:</label>
              <input type="text" value={toClass} onChange={(e)=>setToClass(e.target.value)} className='w-full p-2 rounded border borde-grey-300'/>
              </div>
            </div>
          </div>

          {/* Note Section */}
          <div className="mb-4 mt-8">
            <h3 className="font-semibold text-lg mb-2">Add Note</h3>
            <textarea
              className="w-full border resize-none border-gray-300 p-2 rounded"
              rows="3"
              placeholder="Enter note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary px-4 py-2 bg-[#c19703] text-white rounded"
            >
              Transfer Student
            </button>
          </div>
        </form>
           {/*  */}
</div>
    </AdminLayout>
  )
}

export default TransferStudent
