import React, { useContext, useEffect, useState } from 'react'
import { authDataContext } from '../Context-Api/AuthContext'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { userDataContext } from '../Context-Api/UserContext';
const Register = () => {
  const [username,setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading,setLoading] = useState(false);
  const {serverUrl} = useContext(authDataContext);
  const {userData,setUserData}  = useContext(userDataContext);
const navigate = useNavigate();
 const handleSubmit = async (e)=>{
       e.preventDefault();
       setLoading(true);
       try{
              let result = await axios.post(serverUrl+"/api/auth/signup",{
              username,
              email,
              phone,
              password
              },{withCredentials:true})
           //   console.log(result);
              setUserData(result.data);
              setUserData(result.data);
              setLoading(false);
              if(result.status === 200){
              //  console.log(result.data)
                    navigate("/");
              }
       } catch(err){
           //console.log(err.message)
       }
 }
 
    return (
      <div className="min-h-screen  flex items-center justify-center bg-gray-100">
   <div
        className="absolute inset-0 bg-cover bg-center opacity-70 z-0"
        style={{
          backgroundImage: `url('https://static.vecteezy.com/system/resources/thumbnails/000/448/394/small_2x/63q3_ug56_180116.jpg')` 
          // Replace with your AI image
        }}
      ></div>
      <div className='flex py-2  shadow-2xl  z-10  bg-white  relative flex-col mt-12  max-w-md w-96 rounded-3xl mx-auto items-center justify-center'>
        <h1 className='text-2xl text-bold'>Register to Our School</h1>
        <form onSubmit={handleSubmit} className='flex flex-col items-center gap-3'>
          Name:<input type="text" required onChange={((e)=>setUsername(e.target.value))} value={username} className='w-72      outline-none   py-2 px-3 rounded-xl  block border-[1px] border-blue-500 ' placeholder='Enter Your full Name' name='Name' />
          Email<input type="email" required onChange={(e)=>setEmail(e.target.value)} value={email} className='w-72      outline-none  py-2 px-3 rounded-xl  block border-[1px] border-blue-500 ' placeholder='Enter Your Email' name='Email' />
          Phone:<input type='number' required onChange={(e)=>setPhone(e.target.value)} value={phone} className='w-72      outline-none   py-2 px-3 rounded-xl  block border-[1px] border-blue-500' name='Phone' placeholder='Enter Your Mobile Number' />
          Password:<input type="password" required onChange={(e)=>setPassword(e.target.value)} value={password} className='w-72  outline-none   py-2 px-3 rounded-xl  block border-[1px] border-blue-500 ' placeholder='Create a Password' name='Password' />
          <div className="flex items-center justify-center gap-0 rounded-lg bg-red-500 w-full">
          <input  type="submit" className='cursor-pointer text-white py-2 px-3 rounded-xl' value={loading ? "Loading..." : "Register As a"} />
        {/* <select name="" id="" className='border-[1px] border-black outline-none'>
        <option value="Teacher">Teacher</option>
        <option value="Student">Student</option>
        <option value="Admin">Admin</option>
      </select> */}
        </div>
          <p>Already have an account ? <a className="text-blue-500 underline" href="/login">Login</a></p>
        </form>
      </div>
      </div>
    )
  }

  export default Register;
