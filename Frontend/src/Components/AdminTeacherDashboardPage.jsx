import React, { useContext, useEffect } from 'react';
import AdminLayout from './AdminLayout';
import { adminDataContext } from '../Context-Api/AdminContext';

const AdminTeacherDashboardPage = () => {
  const { fetchAdminData, adminData } = useContext(adminDataContext);
  const { sessions = [] } = adminData?.admin || {};
  const currentSession = sessions[0] || {};

  useEffect(() => {
    fetchAdminData();
  }, [fetchAdminData]);

  const formatDate = (dateStr) => {
    return dateStr ? new Date(dateStr).toLocaleDateString() : '';
  };

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
        { label: 'Add New Subject', href: '/admin/subjects/new' },
      ],
    },
    {
      title: 'Attendance',
      actions: [
        { label: 'View Attendance', href: '/admin/attendance' },
        { label: 'Take Attendance', href: '/admin/attendance/take' },
      ],
    },
    {
      title: 'Study Materials',
      actions: [
        { label: 'Study Materials', href: '/admin/study-materials' },
        { label: 'Add New Study Material', href: '/admin/study-materials/new' },
      ],
    },
    {
      title: 'Homework',
      actions: [
        { label: 'Homework', href: '/admin/homework' },
        { label: 'Assign Homework', href: '/admin/homework/new' },
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
      <main className="flex-1 pt-16 transition-all duration-300 md:ml-32 ml-0">
        <div className="flex flex-col gap-6 items-center justify-center w-full px-0">

          {/* Header */}
          <div className="bg-slate-100 rounded-md p-6 text-center shadow-md w-full">
            <h1 className="text-3xl font-bold uppercase">
              Bright Future Public High School{' '}
              <small className="block text-sm text-gray-600">
                {`${formatDate(currentSession.startDate) || '2027'} - ${formatDate(currentSession.endDate) || '2045'}`}
              </small>
            </h1>
            <div className="mt-4">
              <label htmlFor="session" className="text-gray-700 font-medium">
                Current Session:
              </label>
              <select
                name="session"
                id="session"
                className="ml-2 px-2 py-1 rounded-md border border-gray-300 bg-white text-black"
              >
                {sessions.map((session, idx) => {
                  const label = `${formatDate(session.startDate)} - ${formatDate(session.endDate)}`;
                  return (
                    <option value={session._id || idx} key={session._id || idx}>
                      {label}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          {/* Section Heading */}
          <div className="w-full  bg-[rgb(1,1,93)]  hover:bg-yellow-300 text-xl font-semibold flex items-center justify-center rounded-md py-3 shadow-md">
            <i className="fas fa-graduation-cap mr-2"></i> Academic
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
            {sections.map((section, idx) => (
              <div
                key={idx}
                className="bg-white w-[400px] text-[rgb(1,1,93)] rounded-lg shadow-md p-8 flex flex-col justify-between h-full"
              >
                <span className="text-2xl font-semibold mb-4">{section.title}</span>
                <div className="flex flex-col gap-3">
                  {section.actions.map((action, index) => (
                    <a
                      key={index}
                      href={action.href}
                      className="bg-[rgb(1,1,93)] text-white hover:bg-yellow-400 py-2 px-4 rounded-md text-md text-center"
                    >
                      {action.label}
                    </a>
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

