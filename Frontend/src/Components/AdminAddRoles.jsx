import React from 'react'
import AdminLayout from './AdminLayout'
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { authDataContext } from '../Context-Api/AuthContext'

const AdminAddRoles = () => {
const permissions = [
  { id: 'wlsm_role_permission_add_subjects', value: 'add_subjects', label: 'Add Subjects' },
  { id: 'wlsm_role_permission_view_subjects', value: 'view_subjects', label: 'View Subjects' },
  { id: 'wlsm_role_permission_add_attendance', value: 'add_attendance', label: 'Add Student Attendance' },
  { id: 'wlsm_role_permission_view_attendance', value: 'view_attendance', label: 'View Student Attendance' },
  { id: 'wlsm_role_permission_add_timetable', value: 'add_timetable', label: 'Add Timetable' },
  { id: 'wlsm_role_permission_view_timetable', value: 'view_timetable', label: 'View Timetable' },
  { id: 'wlsm_role_permission_edit_timetable', value: 'edit_timetable', label: 'Edit Timetable' },
  { id: 'wlsm_role_permission_edit_staff_leaves', value: 'edit_staff_leaves', label: 'Add/Edit Staff Leaves' },
  { id: 'wlsm_role_permission_view_staff_leaves', value: 'view_staff_leaves', label: 'View Staff Leaves' },
  { id: 'wlsm_role_permission_view_events', value: 'view_events', label: 'View Events' },
  { id: 'wlsm_role_permission_manage_classes', value: 'manage_classes', label: 'Manage Classes & Sections' },
  { id: 'wlsm_role_permission_delete_sections', value: 'delete_sections', label: 'Delete Class Sections' },

  { id: 'wlsm_role_permission_add_fees', value: 'add_fees', label: 'Add Fee Types' },
  { id: 'wlsm_role_permission_view_fees', value: 'view_fees', label: 'View Fee Types' },
  { id: 'wlsm_role_permission_edit_fees', value: 'edit_fees', label: 'Edit Fee Types' },
  { id: 'wlsm_role_permission_add_invoices', value: 'add_invoices', label: 'Add Invoices' },
  { id: 'wlsm_role_permission_view_invoices', value: 'view_invoices', label: 'View Invoices' },
  { id: 'wlsm_role_permission_edit_invoices', value: 'edit_invoices', label: 'Edit Invoices' },
  { id: 'wlsm_role_permission_stats_payments', value: 'stats_payments', label: 'View Stats - Payments' },
  { id: 'wlsm_role_permission_add_expenses', value: 'add_expenses', label: 'Add Expenses' },
  { id: 'wlsm_role_permission_view_expenses', value: 'view_expenses', label: 'View Expenses' },
  { id: 'wlsm_role_permission_edit_expenses', value: 'edit_expenses', label: 'Edit Expenses' }
];

  const [roleName, setRoleName] = useState('');
  const [selectedPermissions, setSelectedPermissions] = useState([]);

  const handlePermissionChange = (value) => {
    setSelectedPermissions((prev) =>
      prev.includes(value)
        ? prev.filter((perm) => perm !== value)
        : [...prev, value]
    );
  };
const {serverUrl} = useContext(authDataContext);
const handleSubmit = async () => {
  try {
    const payload = {
      name: roleName,
      permissions: selectedPermissions,
    };
    const res = await axios.post(`${serverUrl}/api/admin/create/roles`, payload,{withCredentials:true});
   if(res.status===201){
    alert('Role created successfully!');
    setRoleName('');
    setSelectedPermissions([]);
}
  } catch (err) {
    alert(err.response?.data?.message || 'Failed to create role');
  }
};

  return (
    <AdminLayout adminName='Bright Future'>
      <div className="flex flex-col gap-3 w-full h-full mt-4">
            <AdminTeachDashboardHeader/> 
              {/* Header */}
        <div className="flex w-full text-white p-3 rounded-md bg-[rgb(1,1,93)] flex-col md:flex-row justify-between items-center border-b pb-3">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <i className="fas fa-calendar-alt"></i> Add New Role
          </h2>
          <div className="mt-2 md:mt-0 flex gap-2">
            <Link
              to="/admin/view/roles"
              className="text-sm px-4 py-1 border border-gray-300 rounded bg-[#C19703]"
            >
              <i className="fas fa-clock"></i>&nbsp;View All
            </Link>
          </div>
        </div>

 <div className="max-w-5xl border border-grey-300 mx-auto p-8 mt-2 bg-white shadow-md rounded-lg">
      {/* Role Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Role</h2>
        <div className="w-full md:w-1/2">
          <input
            type="text"
            name="name"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="wlsm_name"
            placeholder="Enter role name"
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
          />
        </div>
      </div>

      {/* Permissions Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Permissions</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
          {permissions.map((perm) => (
            <div key={perm.id} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={perm.id}
                value={perm.value}
                checked={selectedPermissions.includes(perm.value)}
                onChange={() => handlePermissionChange(perm.value)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor={perm.id} className="font-pretty text-gray-700">
                {perm.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-4 text-center">
        <button
          type="button"
          onClick={handleSubmit}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          Add New Role
        </button>
      </div>
    </div>

    </div>
    </AdminLayout>
  )
}

export default AdminAddRoles




























