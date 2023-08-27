import React, { useEffect, useState } from 'react';
import { categories } from "../utils/constants";

const Sidebar = () => {

  const [category, setCategory] = useState([]);
 
  useEffect(()=>{
    setCategory(categories);
    console.log(category);
  },[category])

  return (
    <div className='h-screen w-16 md:w-2/12 bg-yellow-500 shadow-md flex flex-col justify-center items-center'>
      {category?.map((d , index)=>{
           return <button type='button' key={index} className='w-full h-10 bg-red-900 my-1 border-0 bg-transparent flex justify-center items-center' >
              <div>
                 {d.icon}
              </div>
               <div>
                 {d.name}
               </div>
          </button>
      })}
    </div>
  )
}

export default Sidebar