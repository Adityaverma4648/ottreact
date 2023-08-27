/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
//  importing icons
import { FaCog, FaLanguage, FaSignOutAlt } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";

// importing redux
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/AuthSlice";
import { fetchApi } from "../utils/api";
import { setLanguages } from "../redux/ProviderSlice";
import {clearWatchLater , clearSaved } from "../redux/SavedWatchSlice.js"

import Loader from "./Loader";

const Navbar = () => {
  const navigate = useNavigate();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(false);

  const { languages } = useSelector((state) => state.provider);

  const dispatch = useDispatch();

  const { userInfo, userToken, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    fetchApi("/configuration/languages").then((res) => {
      dispatch(setLanguages(res));
    });
  }, [dispatch]);

  const handleScroll = () => {
    // find current scroll position
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos !== 0) {
      setVisible(true);
    } else {
      setVisible(false);
    }

    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  useEffect(() => {
    var navbar = document.getElementById("Navbar");
    if (visible) {
      navbar.classList.add("glassMorphismNavbar");
    } else {
      navbar.classList.remove("glassMorphismNavbar");
    }
  }, [visible]);


  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(logout());
    dispatch(clearWatchLater());
    dispatch(clearSaved());
  };

  return (
    <div
      className="w-screen h-20 z-50 flex justify-center items-center fixed top-0 transition-all ease-linear delay-100"
      id="Navbar"
    >
      <div className="lg:w-10/12 md:w-11/12 w-full h-full flex justify-between items-center px-4 text-white bg-transparent">
        <div className="w-1/3 flex justify-between items-center me-8">
          <div className="font-bold text-xl">
            <Link to="/home" className="text-decoration-none">
              LOGO
            </Link>
          </div>

          <div className="  lg:flex justify-evenly items-center hidden list-none text-sm">
            <li className="mx-4">
              <Link to="/home">Home</Link>
            </li>

            <li className="mx-4">
              <Link to="/movies">Movies</Link>
            </li>

            <li className="mx-4">
              <Link to="/saved">Saved</Link>
            </li>

            <li className="mx-4">
              <Link to="/watchlater">WatchLater</Link>
            </li>
          </div>
        </div>

        <div className="flex flex-row">
          <input
            className="border border-white text-white bg-transparent rounded-lg p-2"
            placeholder="Search Movies, Shows..."
            onChange={(e) => {
              if (e.key === "Enter")
                navigate("/search", { data: e.target.value });
            }}
          ></input>

          <div className="flex flex-row ms-2 justify-center items-center cursor-pointer">
                <div className="md:flex flex-col justify-center items-center hidden">
                <FaLanguage />
                <select
                  name="languages"
                  id="languages"
                  className="w-24 bg-transparent text-sm mx-2 flex flex-col justify-center items-center select-none outline-none"
                >
                  {languages.slice(1,languages.length).map((d,index)=>{
                           return <option className="text-black p-2" key={index} value={d.english_name} >{d.english_name}({d.iso_639_1})</option>
                  })}
                </select>
                </div>
            
            {userInfo && userToken ? (
              <div className="flex flex-row justify-center items-center">
                <Link
                  to="/setting"
                  type="button"
                  className="text-white text-sm mx-2 flex flex-col justify-center items-center"
                >
                  <FaCog className="text-white" />
                  Setting
                </Link>

                <button
                  type="button"
                  className="text-red-500 mx-2 flex flex-col justify-center items-center"
                  onClick={(e) => {
                    handleLogOut(e);
                  }}
                >
                  <FaSignOutAlt />
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                type="button"
                className="border-0 text-red-500 font-bold"
              >
                {!loading ? "SignIn" : <Loader />}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
