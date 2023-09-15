import { useEffect } from "react";
// importing redux
import { getPeople } from "../redux/popularSlice";
import { fetchApi } from "../utils/api";
import { useDispatch } from "react-redux";

// components
import Populars from "./Populars";
 
const HomeRightContent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchApi("/person/popular?language=en-US&page=1").then((res) => {
      dispatch(getPeople(res.results));
    });
  }, [dispatch]);

  return (
    <div className="lg:w-4/12 w-full lg:h-full h-screen rounded-t-3xl bg-black lg:ms-2 ms-0 lg:my-0 my-2 overflow-hidden relative ">
      <div className="bg-white text-black absolute p-2 m-4 right-0 top-0 z-10">
        Popular
      </div>
      <Populars />

      {/* providers */}
      <div className="w-full h-4/6 flex justify-center items-center bg-gradient-to-b from-slate-900 to-black rounded-t-3xl">
        {/* <People /> */}
      </div>
    </div>
  );
};

export default HomeRightContent;
