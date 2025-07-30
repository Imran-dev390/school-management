import React from 'react'
import TeacherSidebar from './TeacherSidebar'
import { useContext } from 'react'
import { authDataContext } from '../Context-Api/AuthContext'
import AccountantSidebar from './AccountantSidebar'
import { useEffect } from 'react'
import { userDataContext } from '../Context-Api/UserContext'
import axios from 'axios'
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader'
import { useState } from 'react'

const ViewSubjectsRoleBased = () => {
    const {userData,permissions} = useContext(userDataContext);
    const {serverUrl} = useContext(authDataContext)
    const [subjects,setSubjects] = useState([]);
    const {role} = userData;
     const [searchKeyword, setSearchKeyword] = useState("");
      const [classId, setClassId] = useState("");
      const [sectionId, setSectionId] = useState("");
       const [searchPerformed, setSearchPerformed] = useState(false);
      const [filteredStudents, setFilteredStudents] = useState([]);
      const [nameSearch, setNameSearch] = useState("");
      const [currentPage, setCurrentPage] = useState(1);
      const itemsPerPage = 10;
    useEffect(()=>{
        const getSubjects = async (req,res)=>{
            try{
            const response = await axios.get(`${serverUrl}/api/teacher/subjects`,{withCredentials:true});
        if(response.status===201){
            setSubjects(response.data.subjects);
        }    
        } catch(err){
                console.log("err",err);
            }
        }
        getSubjects();
    },[serverUrl])
    const displayedStudents = subjects;
const nameFiltered = displayedStudents.filter((student) =>
  student.name.toLowerCase().includes(nameSearch.toLowerCase())
);
  const totalPages = Math.ceil(nameFiltered.length / itemsPerPage);
  const paginatedSubjects = nameFiltered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
    console.log("subjects",subjects);
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
        <TeacherSidebar/>
        <div className="flex flex-col gap-3 h-full w-full px-4">
           <AdminTeachDashboardHeader/>
 {/* Header */}
        <div className="w-full text-white p-3 rounded-md bg-[rgb(1,1,93)] flex justify-center items-center border-b pb-3">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <i className="fas fa-calendar-alt" /> View Subjects
          </h2>
        </div>





        
 <div className="overflow-x-auto border border-gray-300 rounded mt-0 bg-white">
            <table className="min-w-full table-auto border-collapse">
              <thead className="bg-[rgb(1,1,93)] text-white">
                <tr>
                  <th className="border p-2">#</th>
                  <th className="border p-2">Name</th>
                  <th className='border p-2'>Code</th>
                  <th className="border p-2">Department</th>
                </tr>
              </thead>
              <tbody>
                {paginatedSubjects.map((subject, index) => (
                  <tr key={subject._id} className="odd:bg-white even:bg-gray-50">
                    <td className="border p-2">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                    <td className="border p-2">{subject.name}</td>
                     <td className="border p-2">{subject.code}</td>
                    <td className="border p-2">{subject.department}</td>
                  </tr>
                ))}
                {paginatedSubjects.length === 0 && (
                  <tr>
                    <td colSpan="8" className="text-center text-gray-500 p-4">
                      No subjects found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

    </div>
  )
}
export default ViewSubjectsRoleBased