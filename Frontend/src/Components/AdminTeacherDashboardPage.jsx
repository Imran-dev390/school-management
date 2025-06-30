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

  return (
    <AdminLayout adminName="Bright Future">
      <main className="flex-1 p-6 pt-20 transition-all duration-300 md:ml-64 ml-0">
        <div className="flex flex-col gap-3">
          <div className="bg-grey headingSchooName">
            <h1>
              Bright Future Public High School{' '}
              {`${currentSession.startDate ? new Date(currentSession.startDate).toLocaleDateString() : '2027'} - ${
                currentSession.endDate ? new Date(currentSession.endDate).toLocaleDateString() : '2045'
              }`}
            </h1>
          </div>
        </div>
      </main>
    </AdminLayout>
  );
};

export default AdminTeacherDashboardPage;
