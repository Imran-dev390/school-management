import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from "axios"
import { authDataContext } from './AuthContext';

export const userDataContext = createContext();
//const  getCurrentUser = require( '../../../Backend/Controllers/user.controller');


const UserContext = ({children}) => {
    let {serverUrl} = useContext(authDataContext);
    const [userData,setUserData ] = useState(null);
    const getCurrentUser = async()=>{
        try { 
          let result = await axios.get(serverUrl+"/user/home",{withCredentials:true});
        console.log(result.data);
        setUserData(result.data);
    } catch(err){
      console.log(err.messsage);
      setUserData(null);
    }
    }
   let value = {
         userData,
         setUserData 
   }
   useEffect(() => {
     getCurrentUser()
   }, [])
   
  return (
    <div>
      <userDataContext.Provider value={value}>
      {children}
      </userDataContext.Provider>
    </div>
  )
}

export default UserContext
