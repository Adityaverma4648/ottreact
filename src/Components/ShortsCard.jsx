import React from 'react'

const ShortsCard = (props) => {
  
  const appendAnimation = ()=>{
     var animationBlock = document.getElementById('animationBlock');
     animationBlock.classList.add("hover:animate-ping");
  }

  return (
    <div className='w-36 h-36 mx-1 flex justify-center items-center cursor-default rounded-full overflow-hidden p-1 relative'> 
    
      <div className='w-full h-full bg-red-600 animate-pulse absolute rounded-full' id='animationBlock' ></div>
     
     
     <div className='w-full h-full flex justify-center items-center relative bg-slate-900 rounded-full p-1' onMouseEnter={appendAnimation}>
         <video src={props.fileUrl} className='w-full h-full rounded-full' loop autoPlay muted></video>
     </div>
      
   
    
</div>
  )
}

export default ShortsCard