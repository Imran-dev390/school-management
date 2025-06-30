import React, { useContext, useEffect, useState } from 'react';
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
        { label: 'Add Sections / Manage', href: '/admin/sections', variant: 'primary' },
      ],
    },
    {
      title: 'Subjects',
      actions: [
        { label: 'View Subjects', href: '/admin/subjects', variant: 'primary' },
        { label: 'Add New Subject', href: '/admin/subjects/new', variant: 'outline' },
      ],
    },
    {
      title: 'Attendance',
      actions: [
        { label: 'View Attendance', href: '/admin/attendance', variant: 'primary' },
        { label: 'Take Attendance', href: '/admin/attendance/take', variant: 'outline' },
      ],
    },
    {
      title: 'Study Materials',
      actions: [
        { label: 'Study Materials', href: '/admin/study-materials', variant: 'primary' },
        { label: 'Add New Study Material', href: '/admin/study-materials/new', variant: 'outline' },
      ],
    },
    {
      title: 'Homework',
      actions: [
        { label: 'Homework', href: '/admin/homework', variant: 'primary' },
        { label: 'Assign Homework', href: '/admin/homework/new', variant: 'outline' },
      ],
    },
    {
      title: 'Noticeboard',
      actions: [
        { label: 'Noticeboard', href: '/admin/notices', variant: 'primary' },
        { label: 'Add New Notice', href: '/admin/notices/new', variant: 'outline' },
      ],
    },
    {
      title: 'Events',
      actions: [
        { label: 'View Events', href: '/admin/events', variant: 'primary' },
        { label: 'Add New Event', href: '/admin/events/new', variant: 'outline' },
      ],
    },
  ];

  return (
    <AdminLayout adminName="Bright Future">
      <main className="flex-1 p-6 pt-16 transition-all duration-300 md:ml-32 ml-0">
        <div className="flex flex-col gap-6">
          {/* Header Block */}
          <div className="bg-slate-100  rounded-md p-6 px-12 text-center shadow-md">
            <h1 className="text-3xl font-bold uppercase">
              Bright Future Public High School{' '}
              <small className="block text-sm text-gray-600">
                {`${formatDate(currentSession.startDate) || '2027'} - ${
                  formatDate(currentSession.endDate) || '2045'
                }`}
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
          <div className="text-center text-xl font-semibold text-gray-700 items-center justify-center flex w-full border-b pb-2">
            <button className="fas fa-graduation-cap mr-2 text-[rgb(1,1,93)] bg-yellow-400 p-2 w-full rounded-md"> Academic</button>
          </div>

          {/* Dashboard Grid */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md p-8 flex flex-col justify-between h-full border border-gray-200"
              >
                <span className="text-lg font-semibold mb-3 text-gray-800">{section.title}</span>
                <div className="flex flex-col gap-2">
                  {section.actions.map((action, index) => (
                    <a
                      key={index}
                      href={action.href}
                      className={`btn btn-sm ${
                        action.variant === 'primary'
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'border border-blue-600 text-blue-600 hover:bg-blue-50'
                      } py-1 px-3 rounded-md text-sm text-center`}
                    >
                      {action.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div> */}

          {/* Dashboard Grid */}
{/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
  {sections.map((section, idx) => (
    <div
      key={idx}
      className="bg-white rounded-lg shadow-md  p-12 w-full flex flex-col justify-between h-full border border-gray-200"
    >
      <span className="text-xl font-semibold mb-4 text-gray-800">{section.title}</span>
      <div className="flex flex-col gap-3">
        {section.actions.map((action, index) => (
          <a
            key={index}
            href={action.href}
            className={`btn btn-sm ${
              action.variant === 'primary'
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'border border-blue-600 text-blue-600 hover:bg-blue-50'
            } py-2 px-4 rounded-md text-sm text-center`}
          >
            {action.label}
          </a>
        ))}
      </div>
    </div>
  ))}
</div> */}

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
  {sections.map((section, idx) => (
    <div
      key={idx}
      className="bg-white text-[rgb(1,1,93)] rounded-lg shadow-md p-12 w-[95%] mx-auto flex flex-col justify-between h-full border border-yellow-500"
    >
      <span className="text-xl font-semibold mb-4">{section.title}</span>
      <div className="flex flex-col gap-3">
        {section.actions.map((action, index) => (
          <a
            key={index}
            href={action.href}
            className={`btn btn-sm ${
              action.variant === 'primary'
                ? 'bg-yellow-300 text-[rgb(1,1,93)] hover:bg-gray-100'
                : 'border border-white text-[rgb(1,1,93)] hover:bg-yellow-300'
            } py-2 px-4 rounded-md text-sm text-center`}
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
