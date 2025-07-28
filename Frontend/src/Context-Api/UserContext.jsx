// import React, { createContext, useContext, useEffect, useState } from 'react'
// import axios from "axios"
// import { authDataContext } from './AuthContext';

// export const userDataContext = createContext();
// //const { serverUrl } = useContext(authDataContext);
// //const  getCurrentUser = require( '../../../Backend/Controllers/user.controller');


// const UserContext = ({children}) => {
//     let {serverUrl} = useContext(authDataContext);
//     const [userData,setUserData ] = useState(null);
//     const getCurrentUser = async()=>{
//         try { 
//           let result = await axios.get(serverUrl+"/user/home",{withCredentials:true});
//         console.log(result.data);
//         setUserData(result.data);
//     } catch(err){
//       console.log(err.messsage);
//       setUserData(null);
//     }
//     }
//    useEffect(() => {
//    if(serverUrl) return getCurrentUser();
//    }, [serverUrl])
//    let value = {
//     userData,
//     setUserData,
//     getCurrentUser,
// }
   
//   return (
//     <div>
//       <userDataContext.Provider value={value}>
//       {children}
//       </userDataContext.Provider>
//     </div>
//   )
// }

// export default UserContext

import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { authDataContext } from './AuthContext';

// Create a new context for user data
export const userDataContext = createContext();

const UserContext = ({ children }) => {
  const { serverUrl } = useContext(authDataContext); // Get server URL from AuthContext
  const [userData, setUserData] = useState(null);
const [loadingUser, setLoadingUser] = useState(true);
const [permissions,setPermissions] = useState([]);
  /*const getCurrentUser = async () => {
    try {
      const result = await axios.get(`${serverUrl}/api/user/home`, { withCredentials: true });
     // console.log(result.data);
      setUserData(result.data);
    } catch (err) {
//      console.error('Failed to fetch user:', err.message);
      setUserData(null);
    }
  };*/





const getCurrentUser = async () => {
  try {
    setLoadingUser(true);
    const result = await axios.get(`${serverUrl}/api/user/home`, { withCredentials: true });
    setUserData(result.data);
  } catch (err) {
    setUserData(null);
  } finally {
    setLoadingUser(false);
  }
};

  useEffect(() => {
    if (serverUrl) {
      getCurrentUser();
    }
  }, [serverUrl]);
useEffect(()=>{
    if (
    userData?.role === "Teacher" || 
    userData?.role === "Accountant"
  ) {
    setPermissions(userData.permissions || []);
  } else {
    setPermissions([]); // reset permissions for other roles
  }
},[userData])

  const value = {
    userData,
    setUserData,
    getCurrentUser,
    permissions,
     loadingUser
  };

  return (
    <userDataContext.Provider value={value}>
      {children}
    </userDataContext.Provider>
  );
};

export default UserContext;
