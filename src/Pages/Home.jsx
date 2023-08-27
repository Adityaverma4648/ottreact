/* eslint-disable react-hooks/exhaustive-deps */
import React , {useState , useEffect} from 'react';
import Navbar from '../Components/Navbar';
import homeHero from "../Img/homeHero.jpeg"; 
import { FaPlay , FaPlus } from 'react-icons/fa';

//  components
import HomeHero from "../Components/HomeHero";
import HomeLeftContent from '../Components/HomeLeftContent';
import HomeRightContent from '../Components/HomeRightContent';


const Home = ({isAdmin}) => {

  return (
   <div className='md:w-full w-screen h-auto flex flex-col justify-center items-center relative overflow-hidden blackBG'>
     {/*  home  */}
     <div className='w-full flex justify-center items-center relative' id='Home' style={{height : "300vh"}} >
         <div className='w-full h-full flex flex-col justify-start items-center relative bg-gradient-to-t from-black bg-slate-900/80 z-30'>
                
                <HomeHero />

                <div className='lg:w-10/12 md:w-11/12 w-11/12 lg:h-1/2 text-white flex lg:flex-row flex-col justify-center items-center bg-transparent rounded-t-3xl transition-all ease-in-out delay-500' id='ContentContainer'>
                     
                     <HomeLeftContent id="HomeLeftContent" isAdmin={isAdmin} />

                     <HomeRightContent id="HomeRightContent" isAdmin={isAdmin} />
               </div>
         </div>
         <div className='absolute w-full h-full flex justify-start items-start top-0 lg:overflow-hidden'>
            <img src={homeHero} alt="hero" className='md:w-full md:h-auto h-2/5' />
         </div>
     </div>
 

     <div className='bg-white w-screen' style={{height : "60vh"}} >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad perspiciatis earum quia, voluptatum commodi quidem? Quae laboriosam excepturi quidem. Nobis sunt rem vero ullam inventore dicta laboriosam exercitationem maiores. Dolores nulla cumque doloremque vero quibusdam accusamus dolorum necessitatibus facilis animi, ut culpa voluptas quas impedit, voluptatibus voluptates quaerat est id. Voluptate corporis modi officiis quod praesentium quos suscipit eaque nostrum deleniti esse ipsum dolore, soluta labore perferendis eveniet, itaque ex neque. Voluptatum ex eveniet quod quia. Dignissimos, ducimus.
     </div>
     

   </div>
  )
}

export default Home