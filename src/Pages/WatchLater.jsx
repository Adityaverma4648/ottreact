/* eslint-disable no-unused-vars */
import Loader from "../Components/Loader";
import DiscoverCard from "../Components/DiscoverCard";

// importing redux
import { useSelector } from "react-redux";
import WatchLaterCard from "../Components/WatchLaterCard";

const WatchLater = () => {
  const { loading ,watchLater } = useSelector((state) => state.savedWatch);

  return (
    <div
      className="w-screen h-screen flex flex-col justify-start items-center bg-black"
      style={{ height: "120vh" }}
    >
      <div className="lg:w-11/12 w-11/12 h-1/2 flex justify-center items-end pb-8 ">
        <div
          className="w-full h-3/4 bg-slate-900 rounded-xl flex justify-center
               items-center"
        ></div>
      </div>

      <div
        className="lg:w-11/12 md:w-11/12 w-full flex flex-col justify-center
         items-center bg-gradient-to-b from-slate-900 to-black rounded-t-3xl overflow-hidden relative "
      >
        <div
          className="w-full h-10 absolute top-0 z-10 bg-gradient-to-b from-slate-900 to-transparent flex justify-start item-center
               md:text-xl text-md text-white p-4"
        >
          Your WatchLater
        </div>

        <div
          className=" w-full flex flex-1 flex-wrap justify-start
         items-center overflow-y-scroll py-16 text-white px-8"
        >
          {loading ? <Loader /> : watchLater.length == 0 ? "No Entries Yet!" : watchLater?.map((d, index) => {
            return (
              <WatchLaterCard
                key={index}
                id={d.id}
                title={d.title}
                image={d.image}
                releaseDate={d.release_date}
              />
            );
          })}
  
        </div>
      </div>
    </div>
  );
};

export default WatchLater;
