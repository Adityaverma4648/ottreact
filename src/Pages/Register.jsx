/* eslint-disable no-unused-vars */
import {useState ,useEffect } from 'react';
import {Link, useNavigate } from "react-router-dom";

import { FaGoogle }  from "react-icons/fa"

import Loader from "../Components/Loader";

// redux
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/authAction';




const intialState = ({
    userName : "",
    email : "",
    password : ""
})

const Register = () => {
     
    const togglePasswordVisibility = () =>{
    
      var password = document.getElementById('password');
       var value = password.getAttributeNode("type").value;
       if(value === "password")
            password.setAttribute("type" , "text");
       else
           password.setAttribute("type" , "password");
      
   }
    
   const navigate = useNavigate();
   const [formValue, setFormValue] = useState(intialState);
  //  const [isLoading, setIsLoading] = useState(false);
   const {userName ,email , password} = formValue;
   
   const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

   const onInputChange = (e) =>{
       let {name, value} = e.target;
       setFormValue({...formValue, [name] : value}); 
   }

   const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(registerUser(formValue));
  }

  useEffect(() => {
    if (userInfo)
      navigate('/login')
  }, [navigate, userInfo, success])
 
   return (
     <section className="w-screen h-screen bg-gray-50 dark:bg-gray-900 flex justify-center items-center">
   <div className="lg:w-2/3 md:w-10/12 w-11/12 flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    
       <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
           <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
               <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-red-400 text-center">
                   Register your account
               </h1>
 
               <div className='w-full bg-gradient-to-br from-orange-500 to-pink-500 flex flex-col justify-evenly items-center rounded-lg' >
                    <button type='button' className='w-8/12 flex flex-row justify-evenly items-center hover:animate-shake cursor-pointer'>
                      <div className="text-white" >
                             Register using Google
                      </div>
                      <div className='border-0 bg-transparent p-2 flex justify-center items-center' >
                        <FaGoogle className='text-white text-2xl' />
                      </div>
                    </button>
                </div>
 
               <form  onSubmit={handleSubmit} className="space-y-4">
 
                   <div>
                       <label htmlFor="userName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Username</label>
                       <input type="text" name="userName" id="userName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="UserName" onChange={onInputChange} required></input>
                   </div>
 
                   <div>
                       <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                       <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@email.com" onChange={onInputChange} required></input>
                   </div>
                   <div>
                       <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                       <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onInputChange} autoComplete='true' ></input>
                   </div>
                   <div className="flex items-center justify-end">
                  
                           <div className="flex items-center h-5">
                             <input name='remember' id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                             onChange={togglePasswordVisibility}
                             ></input>
                           </div>
                           <div className="ml-3 text-sm">
                             <label htmlFor="remember" className="text-gray-500 dark:text-gray-300" >show password</label>
                           </div>
             
                   </div>
                  {loading ? <Loader /> :  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-gradient-to-br from-orange-500 to-pink-500">Register </button> }
                   <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                       Don’t have an account yet? <Link to ="/login" className="font-medium text-red-400 hover:underline dark:text-primary-500">Login</Link>
                   </p>
               </form>
           </div>
       </div>
   </div>
 </section>
  )
}

export default Register