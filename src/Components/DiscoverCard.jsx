/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaHeart, FaRegCalendarPlus, FaRegPlayCircle } from "react-icons/fa";

// importing redux
import { useDispatch, useSelector } from "react-redux";
import { addWatchLater, addSaved } from "../redux/SavedWatchSlice";
import { setCurrentlyPlaying } from "../redux/PlayerSlice";

const DiscoverCard = (props) => {
  const dispatch = useDispatch();

  const { userInfo, userToken } = useSelector((state) => state.auth);
  const { watchLater, saved } = useSelector((state) => state.savedWatch);
  const [toolkit, setToolkit] = useState("");
  const [existsInWatchLater, setExistsInWatchLater] = useState(false);
  const [existsInSaved, setExistsInSaved] = useState(false);

  useEffect(() => {
    watchLater.filter((item) => {
      if (item.id === props.id) setExistsInWatchLater(true);
    });
  }, [props.id, watchLater, existsInWatchLater]);

  useEffect(() => {
    saved.filter((item) => {
      if (item.id === props.id) setExistsInSaved(true);
    });
  }, [props.id, saved, existsInSaved]);

  return (
    <>
      <div className="xl:w-80 lg:w-72 md:w-64 w-8/12 bg-gray-900 m-1 rounded-2xl overflow-hidden relative transition-transform transform" onClick={()=>{
          props.handleDescribe(props);
      }} >
        <div
          className="min-h-full min-w-full z-10 absolute flex flex-col justify-between items-center transition-all delay-150 hover:bg-gradient-to-t hover:from-black/60 hover:to-red-500/40 p-2"
          id="gradient"
        >
          <div className="z-20 w-full h-full flex flex-col justify-between items-end bg-clip-text absolute p-2">
            <div className="">
              <button
                type="button"
                className={`w-full p-2 flex flex-row justify-end items-center text-lg m-1 cursor-pointer ${
                  existsInWatchLater ? "text-green-400" : "text-white"
                }`}
                onMouseOver={() => {
                  setToolkit("watch");
                }}
                onMouseLeave={() => {
                  setToolkit("");
                }}
                onClick={() => {
                  if (userInfo && userToken) {
                    dispatch(
                      addWatchLater({
                        id: props.id,
                        title: props.title,
                        overview: props.overview,
                        release_date: props.releaseDate,
                        image: props.image,
                      })
                    );
                  } else {
                    alert("Please login yourself");
                  }
                }}
              >
                {toolkit === "watch" && (
                  <span
                    className="mx-1 transition-opacity ease-linear delay-700"
                    style={{ fontSize: "10px" }}
                  >
                    {existsInWatchLater ? "done!" : "Add To Watch Later"}
                  </span>
                )}

                <FaRegCalendarPlus size={20} />
              </button>

              <button
                type="button"
                className={`w-full p-2 flex flex-row justify-end items-center text-lg m-1 cursor-pointer ${
                  existsInSaved ? "text-green-400" : "text-white"
                }`}
                id="saved"
                onMouseLeave={() => {
                  setToolkit("");
                }}
                onMouseOver={() => {
                  setToolkit("saved");
                }}
                onClick={() => {
                  if (userInfo && userToken) {
                    dispatch(
                      addSaved({
                        id: props.id,
                        title: props.title,
                        overview: props.overview,
                        release_date: props.releaseDate,
                        image: props.image,
                      })
                    );
                  } else {
                    alert("Please login yourself");
                  }
                }}
              >
                {toolkit === "saved" && (
                  <span
                    className="mx-1 transition-opacity ease-linear delay-700"
                    style={{ fontSize: "10px" }}
                  >
                    {existsInSaved ? "done!" : "Add To Saved"}
                  </span>
                )}
                <FaHeart size={20} />
              </button>
            </div>

            <div className="">
              <button
                type="button"
                onClick={() => {
                  dispatch(
                    setCurrentlyPlaying({
                      id: props.id,
                      title: props.title,
                      overview: props.overview,
                      release_date: props.releaseDate,
                      image: props.image,
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

            <div className="w-1/2 absolute bottom-0 left-0 flex flex-col justify-center items-center z-10 text-white my-3 mx-1 p-2" >
                <span className="font-semibold w-full text-left text-md" >
                {props.title || props.name}
                </span>
                {props.releaseDate && <span className="w-full text-left text-gray-300 text-sm">
                  Release On - {props.releaseDate}  
                </span>}
            </div>
          </div>
        </div>

        <div className="min-w-full h-full relative flex justify-center items-center">
          {props.image ? (
            <img
              className="w-full h-auto"
              src={"https://image.tmdb.org/t/p/original/" + props.image}
              alt={props.title}
              onError={(e) => {
                console.log(e);
                e.target.src =
                  "https://media.istockphoto.com/id/1218831660/vector/404-error-web-page.jpg?s=612x612&w=0&k=20&c=Y1MImi60qWxBYdrU5O5DeTkMd_nl22EX7Qnh0_mw370=";
              }}
            />
          ) : (
            <div
              className="w-72 flex justify-center items-center text-white"
              style={{ height: "475px" }}
            >
              Image Not Found
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DiscoverCard;
