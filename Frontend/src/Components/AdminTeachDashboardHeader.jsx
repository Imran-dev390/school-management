import React, { useEffect } from 'react'
import { adminDataContext } from '../Context-Api/AdminContext';
const AdminTeachDashboardHeader = () => {
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
  )
}

export default AdminTeachDashboardHeader
