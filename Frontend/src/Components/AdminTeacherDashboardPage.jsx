import React, { useContext, useEffect } from 'react';
import AdminLayout from './AdminLayout';
import { adminDataContext } from '../Context-Api/AdminContext';
import AdminTeachDashboardHeader from './AdminTeachDashboardHeader';
import { Link } from 'react-router-dom';

const AdminTeacherDashboardPage = () => {
  const { fetchAdminData, adminData } = useContext(adminDataContext);
  const { sessions = [] } = adminData?.admin || {};
 

  useEffect(() => {
    fetchAdminData();
  }, [fetchAdminData]);


  const sections = [
    {
      title: 'Class Sections',
      actions: [
        { label: 'Add Sections / Manage', href: '/admin/sections' },
      ],
    },
    {
      title: 'Subjects',
      actions: [
        { label: 'View Subjects', href: '/admin/subjects' },
        { label: 'Add New Subject', href: '/Add/Subject/admin' },
      ],
    },
    {
      title: 'Attendance',
      actions: [
        { label: 'View Attendance', href: '/Admin/View/Attendance' },
        { label: 'Take Attendance', href: '/Take/Attendance' },
      ],
    },
    {
      title: 'TimeTable',
      actions: [
        { label: 'Add Class TimeTable', href: '/admin/Add/Class-TimeTable' },
        { label: 'View Class TimeTable', href: '/admin/View/Class/Timetable' },
      ],
    },
    {
      title: 'Leaves',
      actions: [
        { label: 'Teacher Send Leave', href: '/Admin/Send/Teacher/Leave' },
        { label: 'View All Leaves', href: '/Admin/View/Class/Leaves' },
      ],
    },
    {
      title: 'Noticeboard',
      actions: [
        { label: 'Noticeboard', href: '/admin/notices' },
        { label: 'Add New Notice', href: '/admin/notices/new' },
      ],
    },
    {
      title: 'Events',
      actions: [
        { label: 'View Events', href: '/admin/events' },
        { label: 'Add New Event', href: '/admin/events/new' },
      ],
    },
  ];

  return (
    <AdminLayout adminName="Bright Future">
      <main className="flex-1 pt-12 transition-all  duration-300 md:ml-4 ml-0">
        <div className="flex flex-col gap-6 w-full px-0">

          {/* Header */}
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
      </main>
    </AdminLayout>
  );
};

export default AdminTeacherDashboardPage;

