import { useEffect, useState } from "react";
// importing redux
import { getPeople } from "../redux/popularSlice";
import { fetchApi } from "../utils/api";
import { useDispatch } from "react-redux";

 

// components
import Populars from "./Populars";

// import images
import youtube from "../assets/youtube.avif";
import netflix from "../assets/netflix.jpg";
import amazon from "../assets/primeVideo.png";
import tata from "../assets/tataPlay.jpg";
import hotstar from "../assets/hotstar.png";


const HomeRightContent = () => {
  const dispatch = useDispatch();
  const [type, setType] = useState("movies");

  useEffect(() => {
    fetchApi("/person/popular?language=en-US&page=1").then((res) => {
      dispatch(getPeople(res.results));
    });
  }, [dispatch]);

  const providers = [
    {
      id: 1,
      name: "NetFlix",
      logo: netflix,
    },
    { id: 2, name: "Amazon Prime", logo: amazon },
    { id: 3, name: "Hotstar", logo: hotstar },
    { id: 4, name: "Youtube", logo: youtube },
    { id: 5, name: "TataPlay", logo: tata },
  ];

  return (
    <div className="lg:w-4/12 w-full lg:h-full h-screen rounded-t-3xl bg-black lg:ms-2 ms-0 lg:my-0 my-2 overflow-hidden relative ">
      <div className="bg-white text-black absolute p-2 m-4 right-0 top-0 z-20">
        Popular
        <select
          name="type"
          className="select-none outline-none border-0 bg-transparent shadow-none"
          onChange={(e) => {
            setType(e.target.value);
          }}
        >
          <option value="movies">Movies</option>
          <option value="series">Tv Shows</option>
        </select>
      </div>

      <Populars type={type} />

      {/* providers */}
      <div className="w-full h-4/6 flex flex-col justify-center items-center bg-gradient-to-b from-slate-900 to-black rounded-t-3xl">
        <div className="h-20 text-white text-xl flex justify-center items-center text-center">
          Watch All shows from following provider by subscribing
        </div>
        <div className="w-full flex flex-1 flex-col justify-start items-center">
          {providers?.map((d, index) => {
            return (
              <li
                key={index}
                className={`w-10/12 list-none h-24 ${d.id === 5 ? "border-0" : "border-b border-gray-600/50"} flex justify-between items-center `}
              >
                <span className="flex justify-center items-center">
                  <img src={d.logo} alt={d.name} className="w-5 h-5 rounded-md overflow-hidden mx-2" />
                  {d.name}
                </span>

                <button className="text-red-400 bg-white rounded-md px-4 py-2" onClick={(e)=>{
                  
                }}>
                  Subscribe
                </button>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeRightContent;
