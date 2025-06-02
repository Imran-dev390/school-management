// // import { createContext, useContext, useState, useEffect } from "react";
// // import axios from "axios";
// // import { authDataContext } from "./AuthContext";

// // export const adminDataContext = createContext();


// // export const AdminProvider = ({ children }) => {
// //   const [adminData, setAdminData] = useState(null); // { teachers, students, classes, ... }
// //   const [loading, setLoading] = useState(true);


// //    // Get the server URL from the auth context
// //    const { serverUrl } = useContext(authDataContext);

// //   // Initial fetch (e.g., on login or app start)
// //   const fetchAdminData = async () => {
// //     try {
// //       setLoading(true);
// //       const res = await axios.get(serverUrl+"/admin/", {
// //         withCredentials: true,
// //       });
// //       setAdminData(res.data);
// //     } catch (err) {
// //       setAdminData(null);
// //       console.error("Failed to fetch admin data:", err.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   let value = {
// //     adminData,
// //     setAdminData,
// //     fetchAdminData,
// //   }

// //   console.log("adminData",adminData);

// //   useEffect(() => {
// //     fetchAdminData();
// //   }, []);

// //   return (
// //     <adminDataContext.Provider value={{value}}>
// //       {children}
// //     </adminDataContext.Provider>
// //   );
// // };

// // AdminContext.jsx
// import { useCallback, useContext } from 'react';
// import { createContext, useState, useEffect } from "react";
// import axios from "axios";
// import { authDataContext } from "./AuthContext";
// import { userDataContext } from './UserContext';

// export const adminDataContext = createContext();
// export const AdminProvider = ({ children }) => {
//   const [adminData, setAdminData] = useState(null); // { teachers, students, classes, ... }
//   const [loading, setLoading] = useState(true);
//   // Get the server URL from the auth context
//   const { serverUrl } = useContext(authDataContext);
//   // Initial fetch (e.g., on login or app start)

//   const fetchAdminData = useCallback(async () => {
//     try {
//       setLoading(true);
//       const res = await axios.get(`${serverUrl}/admin/`, {
//         withCredentials: true,
//       });
//       setAdminData(res.data);
//     } catch (err) {
//       setAdminData(null);
//       console.error("Failed to fetch admin data:", err.message);
//     } finally {
//       setLoading(false);
//     }
//   }, [serverUrl]);
  
//   useEffect(() => {
//     fetchAdminData();
//   }, [serverUrl]);

//   return (
//     <adminDataContext.Provider value={{ adminData, setAdminData,fetchAdminData, loading }}>
//       {children}
//     </adminDataContext.Provider>
//   );
// };

// AdminContext.jsx
import { createContext, useContext, useState, useEffect, useCallback } from "react";
import axios from "axios";
import { authDataContext } from "./AuthContext";

export const adminDataContext = createContext();

export const AdminProvider = ({ children }) => {
  const [adminData, setAdminData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { serverUrl } = useContext(authDataContext);

  const fetchAdminData = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${serverUrl}/admin/`, {
        withCredentials: true,
      });
      setAdminData(res.data);
    } catch (err) {
      setAdminData(null);
      console.error("Failed to fetch admin data:", err.message);
    } finally {
      setLoading(false);
    }
  }, [serverUrl]);

  useEffect(() => {
    fetchAdminData();
  }, [fetchAdminData]);

  return (
    <adminDataContext.Provider value={{ adminData, setAdminData, fetchAdminData, loading }}>
      {children}
    </adminDataContext.Provider>
  );
};
