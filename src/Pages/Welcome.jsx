import React, { useState , useEffect } from 'react'

// fetchApi
import {fetchApi} from "../utils/api";

// importing redux
import { useSelector , useDispatch } from "react-redux";
import { useNavigate } from 'react-router';

const Welcome = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();



   useEffect(()=>{
        setInterval(()=>{
              navigate("/home")
        },3000)
   },[])
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-slate-900 relative'>   
         <div className='w-full h-full flex justify-center items-center text-9xl bg-gradient-to-tr from-red-500 to-blue-500 bg-clip-text select-none relative z-10 text-transparent' >
           {/* some bg with a girl with a cat and laptop with a 3d text get Started */}
           Get Started
        </div>

      
       
    </div>
  )
}

export default Welcome;