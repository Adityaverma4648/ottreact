import React from 'react'
import {FaUikit} from "react-icons/fa";

const Loader = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
         <FaUikit color='red' className='animate-spin' />
    </div>
  )
}

export default Loader