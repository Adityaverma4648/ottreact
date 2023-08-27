import React, { useState, useEffect } from "react";

//  importing redux
import { useSelector, useDispatch } from "react-redux";
import { fetchApi } from "../utils/api";
import { getMovieDiscoverData } from "../redux/DiscoverSlice";
import { getRegions } from "../redux/ProviderSlice";

//  importing components
import Loader from "./Loader";
import DiscoverCard from "./DiscoverCard";

const HomeDiscover = () => {
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.discover);
  const {  watchLater} = useSelector((state) => state.savedWatch);

  const [shuffledData, setShuffledData] = useState([]);

  useEffect(() => {
    fetchApi("/movie/upcoming?language=en-US&page=1&region=IN").then((res) => {
      dispatch(getMovieDiscoverData(res));
    });
  }, [dispatch]);

  useEffect(()=>{
       const res = [data.results].sort(() => Math.random() - 0.5);
      setShuffledData(res);
  },[data]);

  useEffect(()=>{
           
    watchLater && console.log("watchLater===>",watchLater);
 
},[watchLater])

  return (
     <div className="h-full bg-gradient-to-b from-slate-900 to-black rounded-t-3xl lg:my-2 my-4 flex flex-col flex-1">
      {loading ? (
        <Loader />
      ) : (
        <div className="h-full w-full flex flex-col justify-start items-center relative overflow-y-scroll " >
          <div className="w-full px-6 py-8 flex justify-start items-start text-lg" >
             Upcoming Movies
             {/* set cards indexes */}
          </div>
          <div className="w-full h-auto flex flex-1 flex-wrap justify-center items-center" >
          {shuffledData[0]?.map((d, index) => {
            return <DiscoverCard key={index} id={d.id} overview={d.overview} releaseDate={d.release_date} title={d.title} image={d.poster_path} />;
          })}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeDiscover;
