/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { FaHeart, FaRegCalendarPlus } from "react-icons/fa";

// importing redux
import { useDispatch, useSelector } from "react-redux";
import { addWatchLater } from "../redux/SavedWatchSlice";

const DiscoverCard = (props) => {
  const dispatch = useDispatch();
  const { loading, watchLater, saved } = useSelector(
    (state) => state.savedWatch
  );
  const {userInfo , userToken} = useSelector((state)=>state.user);

  const [toolkit, setToolkit] = useState("");

  return (
    <>
      {props.image && (
        <div className="xl:w-80 lg:w-72 md:w-64 w-full bg-gray-900 m-1 overflow-hidden  cursor-pointer relative transition-transform transform hover:scale-105">
          <div className="min-h-full min-w-full z-10 absolute flex flex-col justify-between items-center transition-colors delay-300 hover:bg-gradient-to-t hover:from-black/40 hover:to-red-500/60 p-2" id="gradient" >
            <div className="z-20 w-full h-full flex flex-col justify-end items-end bg-clip-text absolute p-2">
              <button
                type="button"
                className="w-28 p-2 flex flex-row justify-end items-center text-sm m-1"
                onMouseOver={(e) => {
                  setToolkit("watch");
                }}
                onMouseLeave={(e) => {
                  setToolkit("");
                }}
                onClick={(e) => {
                  dispatch(
                    addWatchLater([
                      {
                        id: props.id,
                        title: props.title,
                        overview: props.overview,
                        release_date: props.releaseDate,
                        image: props.image,
                      },
                    ])
                  );
                  e.target.style.color = "blue";
                }}
              >
                {toolkit === "watch" && (
                  <span
                    className="mx-1 transition-opacity ease-linear delay-700"
                    style={{ fontSize: "10px" }}
                  >
                    Watch Later
                  </span>
                )}

                <FaRegCalendarPlus size={16} />
              </button>
              <button
                type="button"
                className="w-24 p-2 flex flex-row justify-end items-center text-sm m-1"
                onMouseLeave={(e) => {
                  setToolkit("");
                }}
                onMouseOver={(e) => {
                  setToolkit("saved");
                }}
              >
                {toolkit === "saved" && (
                  <span
                    className="mx-1 transition-opacity ease-linear delay-700"
                    style={{ fontSize: "10px" }}
                  >
                    saved
                  </span>
                )}
                <FaHeart size={16} />
              </button>
            </div>
          </div>

          <div className="min-w-full min-h-full relative flex justify-center items-center">
            <img
              className="w-full h-auto"
              src={"https://image.tmdb.org/t/p/original/" + props.image}
              alt={props.title}
            />
          </div>
        </div>
      ) 
      }
    </>
  );
};

export default DiscoverCard;
