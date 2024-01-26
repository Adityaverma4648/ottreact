/* eslint-disable no-unused-vars */
import React,{useEffect, useState} from 'react';

const ShortsModal = ({visibility}) => {

  const [formValue, setFormValue] = useState([]);
  

  // check weather user is authorized intiate upload

  const handleSubmit=(e)=>{
     setFormValue([
      
     ])
  }

  return (
    <>
       <form className='lg:w-[45vw] md:w-2/3 w-11/12  flex flex-col justify-center items-center p-2 z-[2]' onSubmit={(e)=>{handleSubmit(e)}} >
           <div className='w-full flex justify-start text-2xl py-2'>
              Add Shorts Videos
           </div>
           <div className='w-full'>
           <label htmlFor="title" className='w-full'>
              Title
           </label>
           
           <input type="text" className='w-full flex justify-center items-center p-2 outline-none text-black ' placeholder='Enter video title' />
          
           </div>
           <div className='w-full'>
           <label htmlFor="video" className='w-full'>
              Upload Video
           </label>
           <input type="file" className='w-full flex justify-center items-center outline-none text-black py-2 bg-white' />
           </div>
           <div className='w-full mt-4'>
           <input type="submit" className='flex justify-center items-center outline-none text-black py-2 px-4 bg-white' />
           </div>
       </form>
    </>
  )
}

export default ShortsModal;