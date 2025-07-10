import React from 'react'
import AdminLayout from './AdminLayout'
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader'
import { Link } from 'react-router-dom'

const AdminStudentDashboard = () => {
     const sections = [
    {
      title: 'Admission',
      actions: [
        { label: 'Add New Admission', href: '/admin/students/admission' },
      ],
    },
    {
      title: 'Students',
      actions: [
        { label: 'View Students', href: '/admin/view/students' },
        // { label: 'Add New Subject', href: '/Add/Subject/admin' },
      ],
    },
    {
      title: 'ID Cards',
      actions: [
        { label: 'Print Id Cards', href: '/admin/Print/ID/Card' },
        // { label: 'Take Attendance', href: '/Take/Attendance' },
      ],
    },
    {
      title: 'Students Promotion',
      actions: [
        { label: 'Promote Students', href: '/admin/student/promotion' },
        // { label: 'View Class TimeTable', href: '/admin/View/Class/Timetable' },
      ],
    },
    {
      title: 'Transfer Student',
      actions: [
        { label: 'View Students Transferred', href: '/admin/students/transferred' },
        { label: 'Transfer Student', href: '/admin/students/transferred' },
      ],
    },
    // {
    //   title: 'Noticeboard',
    //   actions: [
    //     { label: 'Noticeboard', href: '/admin/notices' },
    //     { label: 'Add New Notice', href: '/admin/notices/new' },
    //   ],
    // },
    // {
    //   title: 'Events',
    //   actions: [
    //     { label: 'View Events', href: '/admin/events' },
    //     { label: 'Add New Event', href: '/admin/events/new' },
    //   ],
    // },
  ];
  return (
    <AdminLayout adminName='Bright Future'>
        <div className="main w-full h-full flex flex-col gap-3">
       <AdminTeachDashboardHeader/>
        {/* Section Heading */}
          <div className="w-full text-white  bg-[rgb(1,1,93)]  hover:bg-[#C19703] text-xl font-semibold flex items-center justify-center rounded-md py-3 shadow-md">
            <i className="fas fa-graduation-cap mr-2"></i> Academic
          </div>

           {/* Dashboard Grid */}
          <div className="grid mt-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {sections.map((section, idx) => (
              <div
                key={idx}
                className="bg-white w-[300px] text-[rgb(1,1,93)] rounded-lg shadow-md p-8 flex flex-col justify-between h-full border-[1px] border-[#C19703]"
              >
                <span className="text-xl font-semibold mb-4">{section.title}</span>
                <div className="flex flex-col gap-3">
                  {section.actions.map((action, index) => (
                    <Link
                      key={index}
                      to={action.href}
                      className="bg-[rgb(1,1,93)] text-white w-fit hover:bg-[#C19703] py-1 px-2 rounded-md text-sm  text-center"
                    >
                      {action.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
       </div>
    </AdminLayout>
  )
}

export default AdminStudentDashboard
