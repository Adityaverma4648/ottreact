/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

//  demo file import
import video from "../assets/test.mp4"; 
import { FaComment, FaEllipsisV, FaFlag, FaThumbsUp, FaUser } from 'react-icons/fa';

const Shorts = () => {

  const [selected, setSelected] = useState([]);
  const [id, setId] = useState(0);
  const param = useParams();
  const res = parseInt(param.id);
 

  const shorts = [{
   id  :1,
   title : "A Beautiful Seal",
   caption : "Nature is awesome",
   fileUrl : video,
   like : 0,
   comments : [],
} , {
   id  :2,
   title : "A Beautiful Seal",
   caption : "Nature is awesome",
   fileUrl : video,
   like : 0,
   comments : [],
},{
   id  :3,
   title : "A Beautiful Seal",
   caption : "Nature is awesome",
   fileUrl : video,
   like : 0,
   comments : [],
},{
   id  :4,
   title : "A Beautiful Seal",
   caption : "Nature is awesome",
   fileUrl : video,
   like : 0,
   comments : [],
},{
   id  :5,
   title : "A Beautiful Seal",
   caption : "Nature is awesome",
   fileUrl : video,
   like : 0,
   comments : [],
},{
   id  :6,
   title : "A Beautiful Seal",
   caption : "Nature is awesome",
   fileUrl : video,
   like : 0,
   comments : [],
},{
     id  :7,
     title : "A Beautiful Seal",
     caption : "Nature is awesome",
     fileUrl : video,
     like : 0,
     comments : [],
  } , {
     id  :8,
     title : "A Beautiful Seal",
     caption : "Nature is awesome",
     fileUrl : video,
     like : 0,
     comments : [],
  },{
     id  :9,
     title : "A Beautiful Seal",
     caption : "Nature is awesome",
     fileUrl : video,
     like : 0,
     comments : [],
  },{
     id  :10,
     title : "A Beautiful Seal",
     caption : "Nature is awesome",
     fileUrl : video,
     like : 0,
     comments : [],
  },{
     id  :11,
     title : "A Beautiful Seal",
     caption : "Nature is awesome",
     fileUrl : video,
     like : 0,
     comments : [],
  },{
     id  :12,
     title : "A Beautiful Seal",
     caption : "Nature is awesome",
     fileUrl : video,
     like : 0,
     comments : [],
  }] 


   useEffect(()=>{
      setId(parseInt(res));

      setSelected([shorts[id]])
   },[res , id ,shorts])

  return (
    <div className='w-screen h-screen flex justify-center items-center bg-black'>
          {selected.map((d)=>{
            return (
              <div
                key={d.id}
                className="xl:w-2/3 lg:w-4/5 w-11/12 h-4/5 bg-slate-900 flex justify-center items-center p-2 relative"
              >
                <div className="md:w-8/12 w-full h-full flex bg-gradient-to-b from-slate-900 via-slate-800 to-slate-000 relative">
                  <div className="w-full absolute bottom-0 flex justify-between items-center px-2">
                    <div className="flex flex-col justify-start items-center">
                      <div className="font-semibold text-xl text-white">
                        {d.title}
                      </div>
                      <div className="text-sm text-gray-400 ">
                        {d.caption}
                      </div>
                    </div>

                     <div className='z-10'>
                        <button type='button' className=' outline-none cursor-pointer' >
                           <FaEllipsisV className='text-white' />
                        </button>
                     </div>

                  </div>

                  <video
                    src={d.fileUrl}
                    loop
                    autoPlay
                  >
                  </video>

                </div>
                <div className="md:w-4/12 w-20 h-full flex flex-col justify-end items-center bg-transparent md:relative absolute end-0 bottom-0 z-10">
                  <div className="w-full h-full flex flex-col justify-start items-center">
                    <div className="w-11/12 h-1/6 flex justify-center items-center select-none">
                      <div className="w-1/2 h-full flex justify-start items-center">
                        <div className="w-20 h-20 bg-red-800 rounded-3xl">
                          <img src="#" alt="creatorProfile" />
                        </div>
                      </div>
                      <div className="w-1/2 h-full flex flex-col justify-center items-end text-white">
                        <div className="font-semibold text-lg flex justify-start items-center">
                          User
                        </div>
                        <button className="bg-red-900 p-2 rounded-full">
                          Subscribe
                        </button>
                      </div>
                    </div>

                    <div className="w-11/12 h-5/6 md:flex justify-center items-center relative hidden">
                      <div className="h-{100vh} flex flex-col justify-center items-center">
                        {/*  map comments */}
                      </div>

                      <div className="w-full absolute bottom-0 flex justify-center items-center z-10 p-2">
                        <input
                          type="text"
                          className="w-11/12 px-2 py-2 rounded-full select-none border-0 outline-none bg-slate-700 placeholder:text-white text-white"
                          placeholder="type a comment..."
                        />
                      </div>
                    </div>
                  </div>

                  <div className="h-3/5 md:hidden flex flex-col justify-evenly items-center">
                    <button
                      type="button"
                      className="bg-white/50 backdrop-blur-md p-3 rounded-full"
                    >
                      <FaThumbsUp className="text-white text-xl" />
                    </button>

                    <button
                      type="button"
                      className="bg-white/50 backdrop-blur-md p-3 rounded-full"
                    >
                      <FaComment className="text-white text-xl" />
                    </button>

                    <button
                      type="button"
                      className="bg-white/50 backdrop-blur-md p-3 rounded-full"
                    >
                      <FaFlag className="text-white text-xl" />
                    </button>

                    <button
                      type="button"
                      className="bg-white/50 backdrop-blur-md p-3 rounded-full"
                    >
                      <FaUser className="text-white text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
    </div>
  )
}

export default Shorts