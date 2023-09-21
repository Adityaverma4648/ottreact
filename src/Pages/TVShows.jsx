import { useEffect, useState } from "react";
// importig redux
import { useDispatch, useSelector } from "react-redux";

import { FaRegPlayCircle } from "react-icons/fa";

// imporitng actions
import { getTopRated, getUpcoming, getPopular, getOnAir } from "../redux/TVShowsSlice";
import { fetchApi } from "../utils/api";
import { setCurrentlyPlaying } from "../redux/PlayerSlice";

import Loader from "../Components/Loader";
import DiscoverCard from "../Components/DiscoverCard";


const TVShows = () => {
    const dispatch = useDispatch();
    const [selected, setSelected] = useState("upcoming");
    const [array, setArray] = useState([]);
    const [page, setPage] = useState(1);
    const [pageArray, setpageArray] = useState([]);
    const [minMax, setMinMax] = useState("0,9");
    // eslint-disable-next-line no-unused-vars
    const [totalRanges, setTotalRanges] = useState([]);
  
    const [describe, setDescribe] = useState([]);
  
    const { loading, upcoming, popular, topRated, onAir } = useSelector(
      (state) => state.tvshows
    );
  
    useEffect(() => {
      if (selected === "upcoming") {
        setArray(upcoming);
      } else if (selected === "toprated") {
        setArray(topRated);
      } else if (selected === "popular") {
        setArray(popular);
      } else if(selected === "onAir"){
        setArray(onAir);
      }
    }, [
      selected,
      array,
      popular,
      upcoming,
      topRated,
      onAir,
      pageArray.length,
      totalRanges,
    ]);
  
    useEffect(() => {
      setpageArray(Array.from({ length: array.total_pages }, (x, i) => i));
  
      for (let start = 0; start < pageArray.length; start += 10) {
        const end = Math.min(start + 9);
        totalRanges.push({ min: start, max: end });
      }
    }, [pageArray.length, array.total_pages, totalRanges]);
  
    //  fetch useEffects
    useEffect(() => {
      fetchApi("tv/popular?language=en-US&page=" + page).then((res) => {
        dispatch(getPopular(res));
      });

      fetchApi("/tv/on_the_air?language=en-US&page=" + page).then((res) => {
        dispatch(getOnAir(res));
      });
  
      fetchApi("/tv/top_rated?language=en-US&page=" + page).then((res) => {
        dispatch(getTopRated(res));
      });
  
      fetchApi("/tv/airing_today?language=en-US&page" + page).then((res) => {
        dispatch(getUpcoming(res));
      });
    }, [dispatch, page]);
  
    useEffect(() => {
      if (describe.length === 0 && upcoming) {
        setDescribe(
          upcoming.results[Math.floor(Math.random() * upcoming.results.length)]
        );
      }
      console.log(describe);
    }, [describe, upcoming]);
  
    const handleDescribe = (value) => {
      setDescribe(value);
    };
  
    return (
      <div
        className="w-screen flex flex-col justify-start items-center bg-slate-900 overflow-hidden relative p-2"
        style={{ height: "200vh" }}
      >
        <div className="w-screen h-full bg-gradient-to-b from-slate-900 to-black relative flex items-start justify-center">
          <div className="w-full md:h-1/2 h-1/3 top-0 relative flex justify-center items-center overflow-hidden">
            <div className="w-full h-full flex flex-col justify-start items-center relative ">
              {describe.image ? <img
                src={"https://image.tmdb.org/t/p/original" +   describe.image}
                className="w-screen h-auto"
                alt={describe.title}
              /> : <img
              src={"https://image.tmdb.org/t/p/original" +   describe.backdrop_path}
              className="w-screen h-auto"
              alt={describe.title}
            />}
            </div>
  
            <div className="w-full h-full absolute z-20 bg-gradient-to-b from-transparent to-black flex flex-col justify-center items-center">
              <div className="lg:w-10/12 md:h-32 h-40 p-3 flex items-start justify-center">
                <div className="lg:w-10/12 md:w-11/12 flex flex-col justify-start items-center">
                  <div className="w-full flex md:justify-start justify-between items-center">
                    <div className="md:text-xl text-md font-semibold text-white flex flex-col p-2">
                      {describe.title || describe.name}
                      <span className="h-3 w-30 border-b-4 border-white animate-bounce"></span>
                    </div>
  
                    <button
                  type="button"
                  onClick={() => {
                    dispatch(
                      setCurrentlyPlaying({
                        id: describe.id,
                        title: describe.title,
                        overview: describe.overview,
                        release_date: describe.releaseDate,
                        image: describe.image,
                      })
                    );
                  }}
                >
                  <FaRegPlayCircle
                    size={35}
                    color="white"
                    className="my-4 mx-2"
                  />
                </button>
                  </div>
  
                  <div className="w-full flex-1 overflow-y-scroll text-sm text-gray-300 p-2 text-left flex justify-start items-center">
                    {describe.overview}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div className="z-30 absolute bottom-0 w-11/12 md:h-2/3 h-3/4 rounded-t-3xl flex flex-col justify-start items-center bg-gradient-to-b from-slate-900 to-black overflow-hidden">
  
  
          {/*  movie filters */}
          <div className="w-full md:h-14 h-28 p-4 flex md:flex-row flex-col justify-between items-center text-white bg-gradient-to-b from-slate-900 to-transparent absolute top-0 z-10">
            <div className="w-full md:w-auto text-lg flex justify-start items-center">
              <select
                name="type"
                id="type"
                className="select-none text-white  border-0 bg-transparent outline-none text-lg"
                onChange={(e) => {
                  setSelected(e.target.value);
                }}
              >
                <option value="upcoming" className="text-black">
                  Upcoming
                </option>
                <option value="toprated" className="text-black">
                  Top Rated
                </option>
                <option value="popular" className="text-black">
                  Popular
                </option>
                <option value="onAir" className="text-black">
                  on Air
                </option>
              </select>
              TvShows
            </div>
  
            <div id="pagination">
              {pageArray
                ?.slice(
                  minMax.split(",").map(Number)[0],
                  minMax.split(",").map(Number)[1]
                )
                .map((d, index) => {
                  return (
                    <button
                      type="button"
                      key={index}
                      id={d + 1}
                      onClick={(e) => {
                        setPage(e.target.id);
                      }}
                      className="outline-none bg-gray-800 rounded-lg py-1 md:px-4 px-3 md:mx-1 mx-0.5"
                    >
                      {d + 1}
                    </button>
                  );
                })}
              {/* range */}
              <select
                name="TotalRanges"
                id="TotalRanges"
                className="w-16 select-none outline-none border-0 bg-gray-800 py-1 px-1 mx-1 rounded-lg"
                onChange={(e) => {
                  setMinMax(e.target.value);
                }}
              >
                {totalRanges
                  .filter((obj, index, self) => {
                    return (
                      self.findIndex(
                        (item) => item.min === obj.min && item.max === obj.max
                      ) === index
                    );
                  })
                  .map((d, index) => {
                    return (
                      <option
                        key={index}
                        className="text-black"
                        value={[d.min, d.max]}
                      >
                        {d.min + 1 + "-" + d.max}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>
  
  
  
  {/*  movie grid collections */}
          <div className="w-full flex flex-1 flex-wrap justify-center items-center overflow-y-scroll relative py-16">
            {loading ? (
              <Loader color="#fff" />
            ) : (
              array.results?.map((d, index) => {
                return (
                  <DiscoverCard
                    key={index}
                    id={d.id}
                    overview={d.overview}
                    releaseDate={d.release_date}
                    title={d.title}
                    image={d.poster_path}
                    handleDescribe={handleDescribe}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    );
}

export default TVShows