import React, { useState } from "react";

import{useDispatch , useSelector} from "react-redux";

const Setting = () => {

  const { userInfo } = useSelector(state=>state.auth)

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-slate-900 to-black flex  justify-center items-center text-white">
      {userInfo ? <div className="w-full h-5/6 flex flex-col justify-start items-center">
        {/*  setting header */}
        <div className="lg:w-10/12 md:w-11/12 w-11/12 h-1/3 flex justify-center items-center relative rounded-lg bg-gradient-to-br from-slate-900 to-pink-900 ">
          <div className="absolute z-10 flex flex-col">
            <div className="text-xl">
              Personalize your account according to your need
            </div>
          </div>
          <div className="relative">{/* <img src="" alt="bgImage" />   */}</div>
        </div>

        {/*  profle pic and user Data */}
        <div className="lg:w-10/12 md:w-11/12 w-11/12 flex flex-1 flex-col justify-start items-center relative bg-slate-900">
          <div className="w-full flex justify-center items-center">
               <div className="w-3/12 bg-gray-400 h-full flex flex-row justify-center items-center">
                <ul>
                  <li>

                  </li>
                </ul>
               </div>
               <div className="w-9/12 bg-gray-500 h-full flex flex-row justify-center items-center"></div>
          </div>
        </div>
      </div> 
        :
       <div className="w-full h-5/6 flex flex-1 justify-center items-center bg-slate-900">
              <div>
                  Seems like you have logged out
              </div>   
      </div>
      }
    </div>
  );
};

export default Setting;
