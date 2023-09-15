import { useState, useEffect } from "react";

//  importing redux
import { useSelector, useDispatch } from "react-redux";
import { fetchApi } from "../utils/api";
import { getUpcomingMovies , getAiringTvShows } from "../redux/UpcomingSlice";

//  importing components
import Loader from "./Loader";
import DiscoverCard from "./DiscoverCard";

const HomeDiscover = () => {
  const dispatch = useDispatch();
  const { loading, upcomingMovies ,  tvShowsAiring } = useSelector((state) => state.upcoming);

  const [page, setPage] = useState(1);
  const [type, setType] = useState("movies");
  const [array, setArray] = useState([]);

  useEffect(() => {
    fetchApi(`/movie/upcoming?language=en-US&page=${page}&region=IN`).then((res) => {
      dispatch(getUpcomingMovies(res));
    });
    
    fetchApi(`/tv/airing_today?language=en-US&page=${page}`).then((res) => {
      dispatch(getAiringTvShows(res));
    });
  }, [dispatch , page]);


  useEffect(()=>{
      if(type==="movies"){
        setArray(upcomingMovies);
        setPage(upcomingMovies.total_pages);
      }else if(type==="series"){
        setArray(tvShowsAiring);
        setPage(tvShowsAiring.total_pages)
      }
  },[type , upcomingMovies , tvShowsAiring])


  return (
    <div className="h-full bg-gradient-to-b from-slate-900 to-black rounded-t-3xl lg:my-2 my-4 flex flex-col flex-1">
      {loading ? (
        <Loader />
      ) : (
        <div
          className="h-full w-full flex flex-col justify-start items-center relative overflow-y-scroll "
          id="discoverHome"
        >
          <div className="w-full px-6 py-8 flex justify-between items-center text-lg sticky top-0 z-10 bg-gradient-to-b from-slate-900 to-transparent">
            <div>
              <span className="">Upcoming</span>
              <select
                name="type"
                className="mx-1 bg-transparent border-0 outline-none"
                onChange={(e)=>{
                  setType(e.target.value);
                }}
              >
                <option value="movies" className="text-black">
                  Movies
                </option>
                <option value="series" className="text-black">
                  TV Shows
                </option>
              </select>
            </div>

            <div>
              <select
                name="page"
                className="p-2 bg-transparent border-0 outline-none"
                onChange={(e)=>{
                  setPage(e.target.value);
                }}
              >
                {Array.from({ length: array.total_pages }, (x, i) => i).map((d,index)=>{
                   return <option key={index} value={d+1} className="text-black" >{d+1}</option>
                })}
              </select>
            </div>
            {/* set cards indexes */}
          </div>
          <div className="w-full h-auto flex flex-1 flex-wrap justify-center items-center">
            {loading ? <Loader /> :array.results?.map((d, index) => {
              return (
                <DiscoverCard
                  key={index}
                  id={d.id}
                  overview={d.overview}
                  releaseDate={d.release_date}
                  title={d.title}
                  name={d.name}
                  image={d.poster_path}
                  genreID={d.genre_ids}
                  adult={d.adult}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeDiscover;
