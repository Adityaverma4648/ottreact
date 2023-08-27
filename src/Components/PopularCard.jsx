/* eslint-disable react/prop-types */
const PopularCard = (props) => {
  return (
    <>
      {props.image && <div
      className="w-full h-full flex justify-center items-center relative overflow-hidden mx-1 select-none"
      style={{minWidth : "100%"}}
      id="carousalItem"
    >
      <div className="w-full h-full flex justify-center items-center rounded-t-3xl overflow-hidden absolute">
      <img className='lg:w-full lg:h-auto h-full w-auto' src={"https://image.tmdb.org/t/p/original/" + props.image} alt={props.title} />
      </div>

      <div className="w-full h-full relative z-10 flex flex-col justify-end p-16 items-center  bg-gradient-to-t from-red-900 to-black/30">
        <div className="w-10/12 font-semibold text-xl text-white text-start ">
          {props.title}
        </div>
        <div className="w-10/12 text-gray-400 text-start text-sm">{props.overview.slice(0,120)}</div>
      </div>
    </div>}
    </>
  );
}

export default PopularCard