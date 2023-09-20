/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import PeopleCard from "../Components/PeopleCard";

// eslint-disable-next-line no-unused-vars
const PeopleUnique = ({ route }) => {
  const { people } = useSelector((state) => state.popular);
  const routeParams = useParams();
  const { id } = routeParams;

  const [data, setData] = useState([]);

  useEffect(() => {
    const uniqueData = people.filter((item) => {
      return item.id === Number(id);
    });
    setData(uniqueData);
  }, [people, id]);

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      {data[0] && (
        <div
          className="w-screen flex flex-col justify-start items-center bg-black text-white"
          style={{ height: "120vh" }}
        >
          <div className="lg:w-10/12 w-11/12 h-1/2 flex justify-center items-end pb-8 ">
            <div className="w-full h-3/4 bg-slate-900 rounded-xl flex justify-evenly items-center"></div>
          </div>

          <div className="lg:w-10/12 md:w-11/12 w-full h-2/3 flex flex-col justify-center items-center bg-gradient-to-b from-slate-900 to-black rounded-t-3xl overflow-hidden relative ">
            <div className="w-full h-full lg:flex-row flex-col flex-wrap justify-center items-center relative overflow-y-scroll">
              {/* profile Image */}
              <div className="min-w-1/4 h-full flex flex-col justify-center items-center md:absolute md:left-0 bg-gradient-to-b from-slate-900 to-black z-10 bg-yellow-400">
                <div className="h-full w-full flex flex-col justify-center items-center relative ">
                  {data[0].profile_path && (
                    <img
                      src={`https://image.tmdb.org/t/p/original/${data[0].profile_path}`}
                      className="h-5/6 rounded-3xl"
                      alt={data[0].name}
                    />
                  )}
                </div>
                <div className="flex flex-col md:justify-end md:items-end justify-center items-center">
                  <span className="text-xl"> {data[0].name}</span>
                  <span className="text-md">
                    {data[0].gender === 1 ? "Female" : "Male"}
                  </span>
                  <span className="text-md text-red-400">
                    {data[0].known_for_department}
                  </span>
                </div>
              </div>

              <div className="w-full h-full flex md:justify-end justify-center items-end relative md:py-0 py-16">
                <div className="w-3/4 h-full flex flex-wrap justify-center items-center">
                  {data[0].known_for?.map((d, index) => {
                    return (
                      <PeopleCard
                        key={index}
                        name={d.name}
                        image={d.backdrop_path}
                        type={d.media_type}
                        releaseDate={d.first_air_date}
                        overview={d.overview}
                        origin={d.origin_country}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PeopleUnique;
