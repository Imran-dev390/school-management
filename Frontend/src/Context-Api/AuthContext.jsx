import React, { createContext } from 'react'


export const authDataContext = createContext();

function AuthContext({children}) { 
   let serverUrl = import.meta.env.VITE_SERVER;; // Backend Url
   let value = {
    serverUrl
   }
  return (
    <div>
      <authDataContext.Provider value={value}>
     {children}
     </authDataContext.Provider>
    </div>
  )
}

export default AuthContext
