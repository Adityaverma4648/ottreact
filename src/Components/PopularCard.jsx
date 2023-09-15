import { FaPlayCircle, FaRegPlayCircle } from "react-icons/fa";

/* eslint-disable react/prop-types */
const PopularCard = (props) => {
  return (
    <>
      {props.image && <div
      className="w-full h-full flex justify-center items-center relative overflow-hidden mx-1 select-none"
      style={{minWidth : "100%"}}
      id="carousalItem"
    >
      <div className="w-full h-full flex  md:justify-start md:items-start lg:justify-center justify-center items-center rounded-t-3xl overflow-hidden absolute">
      <img src={"https://image.tmdb.org/t/p/original/" + props.image} style={{minWidth : "100%"}} alt={props.title} />
      </div>

      <div className="w-full h-full relative z-10 flex justify-between items-end bg-gradient-to-t from-red-500/80 to-black/10 p-8">
        <div className="h-32 flex flex-col justify-center items-start">
        <span className="w-10/12 font-semibold text-xl text-white text-start ">
          {props.title}
        </span>
        <span className="w-10/12 text-gray-200 text-start text-sm">{props.overview.slice(0,100)}</span>
        </div>

        <button type="button" className="h-32 flex justify-center items-center cursor-pointer">
          <FaRegPlayCircle size={35} className="hover:text-indigo-300" />
        </button>
      </div>
    </div>}
    </>
  );
}

export default PopularCard