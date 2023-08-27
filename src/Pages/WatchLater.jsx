// importing compoenets
import { useEffect } from "react";
import Loader from "../Components/Loader";

// importing redux 
import { useSelector } from "react-redux"

export const WatchLater = () => {

    const {loading , watchLater} = useSelector((state)=>state.savedWatch);

    // useEffect(()=>{
    //    console.log(watchLater[0][0]);
    // },[watchLater])


  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center bg-black' >
        {loading ? <Loader /> : watchLater?.map((d,index)=>{
              return <div className='text-white'  key={index} >
                        {d.title}
                  </div>
        })}
    </div>
  )
}
