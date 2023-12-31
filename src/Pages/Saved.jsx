/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";

//  importing Loader
import SavedCard from "../Components/SavedCard";
import Loader from "../Components/Loader";


const Saved = () => {
  const { loading ,saved } = useSelector((state) => state.savedWatch);

  return (
    <div className='w-screen h-screen flex flex-col justify-start items-center bg-black' style={{height : "120vh"}} >

    <div className="lg:w-11/12 w-11/12 h-1/2 flex justify-center items-end pb-8 ">
         <div className="w-full h-3/4 bg-slate-900 rounded-xl flex justify-center
          items-center" >

         </div>
    </div>

   <div className="lg:w-11/12 md:w-11/12 w-full flex flex-col justify-center
    items-center bg-gradient-to-b from-slate-900 to-black rounded-t-3xl overflow-hidden relative " >

          <div className="w-full h-10 absolute top-0 z-10 bg-gradient-to-b from-slate-900 to-transparent flex justify-start item-center
          md:text-xl text-md text-white p-4" >
           Your Saved Movies and TVshows
          </div>

          <div className=" w-full flex flex-1 flex-wrap justify-start
    items-center overflow-y-scroll lg:overflow-y-hidden py-16 px-8 text-white">
          {loading ? <Loader /> : saved.length == 0 ? "No Entries Yet!" : saved?.map((d,index)=>{
         return <SavedCard key={index} id={d.id} title={d.title} image={d.image} releaseDate = {d.release_date} />
   })}
          </div>
   </div>
</div>
  );
};

export default Saved;
