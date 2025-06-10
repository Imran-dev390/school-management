// import React, { createContext } from 'react'


// export const authDataContext = createContext();

// function AuthContext({children}) { 
//    let serverUrl = import.meta.env.VITE_SERVER2;; // Backend Url
//    let value = {
//     serverUrl
//    }   
//   return (
//     <div>
//       <authDataContext.Provider value={value}>
//      {children}
//      </authDataContext.Provider>
//     </div>
//   )
// }

// export default AuthContext







import React, { createContext } from 'react';

export const authDataContext = createContext();

function AuthContext({ children }) {
  const serverUrl =
    import.meta.env.MODE === 'development'
      ? import.meta.env.VITE_SERVER1
      : import.meta.env.VITE_SERVER2;

  const value = {
    serverUrl,
  };
  return (
    <authDataContext.Provider value={value}>
      {children}
    </authDataContext.Provider>
  );
}

export default AuthContext;
