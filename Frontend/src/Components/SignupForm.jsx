import React, { useContext, useState } from 'react';
import axios from 'axios';
import { authDataContext } from '../Context-Api/AuthContext';
import { userDataContext } from '../Context-Api/UserContext';
import { useNavigate } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
function SignupForm() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error,setError] = useState(null);
   const [loading,setLoading] = useState(false);
  const {serverUrl} = useContext(authDataContext);
  const {userData,setUserData} = useContext(userDataContext);

//  const [admin,setAdmin] = useState(null);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(serverUrl+'/auth/signup',{
       name:form.username,
       email:form.email,
       password:form.password,
      },{withCredentials:true});
    //  console.log(response.data);
      setUserData(response.data);
      setLoading(false);
      toast.success("Logged IN SuccessFully.")
        navigate("/");
    } catch (err) {
      setLoading(false);
        //setError(err.response.data.message
        //);
        toast.error(err.response?.data?.message || 'Signup Failed');
      //  console.log(err);
      //alert(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="min-h-screen  bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center ">
       <div
        className="absolute inset-0 bg-cover bg-center opacity-70 z-0"
        style={{
          backgroundImage: `url('https://static.vecteezy.com/system/resources/thumbnails/000/448/394/small_2x/63q3_ug56_180116.jpg')` 
          // Replace with your AI image
        }}
      ></div>
      <form
        onSubmit={handleSubmit}
        className="bg-white z-10  px-3 relative shadow-lg p-2 max-w-md w-full space-y-3  rounded-xl"
      >
        <h2 className="text-3xl  font-bold text-center text-purple-700">Sign Up</h2>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
            placeholder="Enter your username"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
            placeholder="Enter your email"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
            placeholder="Create a password"
          />
        </div>

{error && <p className='text-red-500 text-center'>{error}</p>}
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
        >
        {loading ? "Loading...":"Sign Up"}
        </button>
        <p className="text-center cursor-pointer text-sm text-gray-600" onClick={()=>navigate("/login")}>
          Already have an account? <span className="text-purple-600 font-medium">Login</span>
        </p>
      </form>
       <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} theme="colored" />
    </div>
  );
}
export default SignupForm;
