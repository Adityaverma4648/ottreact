import React, { useState , useEffect } from 'react';

//  importing components 
import Shorts from "./Shorts";
import LiveStream from "./LiveStream";
import HomeDiscover from "./HomeDiscover"
import Category from './Category';

const intialState = {
     title : "",
     caption : "",
     fileUrl : "",
}

const HomeLeftContent = ({isAdmin}) => {

  const [token, setToken] = useState("");
  const [formValue, setFormValue] = useState(intialState);
  const [file, setFile] = useState("");

  const {title , caption , fileUrl} = formValue;

    const onInputChange = (e) =>{
        let {name, value} = e.target;
        setFormValue({...formValue, [name] : value}); 
    }

    const onFileChange = (file)=>{
       console.log(file);
    }

   useEffect(()=>{
    setToken(localStorage.getItem("token"));
  },[])

   const removeModal = () =>{
       var modal = document.getElementById('modal');
       modal.classList.add('hidden');    
   }

   const removeCategoryModal = () =>{
     var modal = document.getElementById('categoryModal');
     modal.classList.add('hidden'); 
   }

//    modal funtions ends here

   const handleShortSubmit = async (e) =>{
     e.preventDefault();
     console.log(formValue , token);
//      await axios.post("http://localhost:7000/shorts/add",formValue ,{
//           method : "POST" , 
//           headers:{
//           "Content-Type" : "application/json",
//           "Authorization" : "Bearer " + token
//           },
//       body : JSON.stringify(formValue),
//     })
//     .then((res) => {
//       console.log(res);
//      })
//     .catch((err)=>{
//        console.log(err);
//     })
   }

  return (

    <>
 {/* modal */}
    <div className='w-screen h-screen flex justify-center items-center fixed top-0 hidden z-40 ' id='modal' >
         <div className='lg:w-1/2 md:w-2/3 w-11/12 h-2/3 bg-white flex flex-col justify-evenly items-center z-30 text-black p-2' >
                <div className='text-xl font-semibold text-center'>
                     Add Shorts
                </div>
                <form method="POST" onSubmit={handleShortSubmit} className='w-full h-5/6 bg-gray-100 p-2 flex flex-col justify-center items-center' encType="multipart/form-data"  >
                    <div className='w-10/12 flex flex-col justify-center items-start my-3'>
                         <label htmlFor="title">
                          Enter the Shorts Title
                          </label>
                         <input type="text" name='title' className='w-full border border-black p-2'onChange={onInputChange}   placeholder='title' />

                    </div>

                    <div className='w-10/12 flex flex-col justify-center items-start my-3'>
                         <label htmlFor="caption">
                          Enter the shorts caption
                          </label>
                         <textarea type="text" name='caption' className='w-full border border-black p-2' onChange={onInputChange} placeholder='caption' />

                    </div>

                    <div className='w-10/12 flex flex-col justify-center items-start my-3'>
                         <label htmlFor="fileUrl">
                          Enter the File
                          </label>
                         <input type="file" name='fileUrl' className='w-full border border-black p-2' onChange={(e)=>{onFileChange(e.target.files)}}
                         accept="video/*" />

                    </div>

                    <div className='w-10/12 flex flex-col justify-center items-start my-3'>
        
                         <input type="submit" className='w-full border  p-2 bg-gradient-to-br from-orange-400 to-pink-400' />

                    </div>
                </form>
         </div>
         {/* glass Bg */}
         <div className='w-screen h-screen absolute overflow-hidden flex justify-center items-center backdrop-blur-xl' onClick={removeModal} >

         </div>
    </div>

    <div className='w-screen h-screen flex justify-center items-center fixed top-0 hidden z-40' id='categoryModal' >
         <div className='lg:w-1/2 md:w-2/3 w-11/12 h-2/3 bg-white flex flex-col justify-evenly items-center z-30 text-black p-2' >
                <div className='text-xl font-semibold text-center'>
                     Add Category
                </div>
                <form method="post" action="http://localhost:7000/crud/addShorts" className='w-full h-5/6 bg-gray-100 p-2 flex flex-col justify-center items-center'
                encType='multipart/form-data'
                >
                    <div className='w-10/12 flex flex-col justify-center items-start my-3'>
                         <label htmlFor="title">
                          Enter the Category Name
                          </label>
                         <input type="text" name='title' className='w-full border border-black p-2' placeholder='Eg: Adventure, Thriller , Drama, etc' />

                    </div>

                    <div className='w-10/12 flex flex-col justify-center items-start my-3'>
                         <label htmlFor="fileUrl">
                          Enter the File
                          </label>
                         <input type="file" name='fileUrl' className='w-full border border-black p-2' accept="video/*" />

                    </div>

                    <div className='w-10/12 flex flex-col justify-center items-start my-3'>
        
                         <input type="submit" className='w-full border  p-2 bg-gradient-to-br from-orange-400 to-pink-400' />

                    </div>
                </form>
         </div>
         {/* glass Bg */}
         <div className='w-screen h-screen absolute overflow-hidden flex justify-center items-center backdrop-blur-xl' onClick={removeCategoryModal} >

         </div>
    </div>
{/*  modal container ends here  */}


    <div className='lg:w-8/12 w-full lg:h-full md:h-screen h-screen p-2 rounded-t-3xl flex lg:flex-row flex-col justify-center items-center bg-gradient-to-b to-black from-slate-900 me-2 select-none'>
    
     <div className='lg:w-9/12 w-full lg:h-full lg:overflow-y-hidden overflow-y-scroll h-4/6' id='leftLeftContent' >
     <Shorts isAdmin={isAdmin} />
     <Category isAdmin={isAdmin} />
     <HomeDiscover />
     </div>

     <div className='lg:w-3/12 w-full lg:h-full h-2/6 p-2 overflow-hidden flex flex-col justify-start items-center' >
         <LiveStream />
     </div>

 </div>

 </>
  )
}

export default HomeLeftContent