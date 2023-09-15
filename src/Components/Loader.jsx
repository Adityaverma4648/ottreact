import React, { useEffect } from 'react'
import { useState } from 'react';
import {FaUikit} from "react-icons/fa";

const Loader = (props) => {
  const [color, setColor] = useState("red");
  useEffect(()=>{
    if(props.color)
      setColor(props.color);
  },[props.color])
  return (
    <div className='w-full h-full flex justify-center items-center'>
         <FaUikit color={color} className='animate-spin' />
    </div>
  )
}

export default Loader