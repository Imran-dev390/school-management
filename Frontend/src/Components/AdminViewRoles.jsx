import React from 'react'
import AdminLayout from './AdminLayout'
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { authDataContext } from '../Context-Api/AuthContext'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { FaTrash, FaEdit } from 'react-icons/fa';

const AdminViewRoles = () => {
    const {serverUrl}  = useContext(authDataContext);
    const [roles,setRoles] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(()=>{
        const getAllRoles = async ()=>{
          try {
            const response = await axios.get(`${serverUrl}/api/admin/view/roles`,{withCredentials:true});
            if(response.status===201){
                console.log("response.data.role = ",response.data.role);
                setRoles(response.data.role);
            }
        } catch(err){
            console.log(err?.response?.data.message || "Something went wrong!")
        }
        }
        getAllRoles();
    },[serverUrl])
const filteredRoles = roles.filter((role) =>
    role.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <AdminLayout adminName="Bright Future">
       <div className="flex flex-col gap-3 mt-4 h-full w-full  ">
         <AdminTeachDashboardHeader/>
          {/* Header */}
                       <div className="flex w-full text-white p-3 rounded-md bg-[rgb(1,1,93)] flex-col md:flex-row justify-between items-center border-b pb-3">
                         <h2 className="text-lg font-semibold flex items-center gap-2">
                           <i className="fas fa-calendar-alt"></i> Roles
                         </h2>
                         <div className="mt-2 md:mt-0 flex gap-2">
                           <Link
                             to="/admin/add/roles"
                             className="text-sm px-4 py-1 border border-gray-300 rounded bg-[#C19703]"
                           >
                             <i className="fas fa-clock"></i>&nbsp;Add New Role
                           </Link>
                         </div>
                       </div>


             <div className="overflow-x-auto p-8 mt-2 shadow-xl border border-grey-300 rounded">
      {/* Search Bar */}
      <div className="flex justify-end mb-4">
        <label className="flex items-center space-x-2 text-sm">
          <span>Search</span>
          <input
            type="search"
            className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter role name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>

      {/* Table */}
      <table className="min-w-full table-auto border border-gray-300 text-md">
        <thead>
          <tr className="bg-[rgb(1,1,93)] text-white">
            <th className="px-4 py-2 text-left">Role</th>
            <th className="px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredRoles.map((role, index) => (
            <tr
              key={role._id}
              className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
            >
              <td className="px-4 py-2">{role.name}</td>
              <td className="px-4 py-2 space-x-4">
                <button
                  title="Edit"
                  className="text-blue-600 hover:text-blue-800"
                  onClick={() => alert(`Edit Role: ${role.name}`)}
                >
                  <FaEdit />
                </button>
                <button
                  title="Delete"
                  className="text-red-600 hover:text-red-800"
                  onClick={() => {
                    if (
                      window.confirm('This will delete the role. Are you sure?')
                    ) {
                      // TODO: Implement delete logic
                    }
                  }}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}

          {roles.length === 0 && (
            <tr>
              <td colSpan={2} className="px-4 py-2 text-center text-gray-500">
                No roles found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Footer Info */}
      <div className="mt-2 text-sm text-gray-600">
        Showing {filteredRoles.length} of {roles.length} Records
      </div>
    </div>
       </div>
    </AdminLayout>
  )
}

export default AdminViewRoles
