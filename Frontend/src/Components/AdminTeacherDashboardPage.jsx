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

  return (
    <AdminLayout adminName="Bright Future">
      <main className="flex-1 p-6 pt-16 transition-all duration-300 md:ml-64 ml-0">
        <div className="flex flex-col gap-3">
          <div className="bg-slate-300 flex flex-col w-fit p-4 rounded-md headingSchooName">
            <div>
              <h1 className="text-4xl font-semibold">
                Bright Future Public High School{' '}
                {`${formatDate(currentSession.startDate) || '2027'} - ${
                  formatDate(currentSession.endDate) || '2045'
                }`}
              </h1>
            </div>
            <div className="mt-4">
              Current Session:
              <select name="session" id="session" className="bg-white text-black ml-2">
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
        </div>
      </main>
    </AdminLayout>
  );
};

export default AdminTeacherDashboardPage;
