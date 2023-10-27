/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";

// importing fetchApi
import{fetchApi} from "../utils/api";

//  importing redux
import {useDispatch , useSelector} from "react-redux";
import {getMovies , getPeople, getSeries } from "../redux/popularSlice";


//  importing components
import Loader from "./Loader";
import PopularCard from "./PopularCard";

function DraggableCarousel(props) {
  const slider = useRef(null);
  let isDown = useRef(false);
  let startX = useRef(null);
  let scrollLeft = useRef(null);

  useEffect(() => {
    if (slider && slider.current) {
      let sliderRef = slider.current;
      sliderRef.addEventListener("mousedown", one);
      sliderRef.addEventListener("mousedown", two);
      sliderRef.addEventListener("mouseleave", three);
      sliderRef.addEventListener("mouseup", four);
      sliderRef.addEventListener("mousemove", five);

      return () => {
        sliderRef.removeEventListener("mousedown", one);
        sliderRef.removeEventListener("mousedown", two);
        sliderRef.removeEventListener("mouseleave", three);
        sliderRef.removeEventListener("mouseup", four);
        sliderRef.removeEventListener("mousemove", five);
      };
    }
  }, []);

  function one(e) {
    isDown.current = true;
    startX.current = e.pageX - slider.current.offsetLeft;
    scrollLeft.current = slider.current.scrollLeft;
  }

  function two(e) {
    isDown.current = true;
    startX.current = e.pageX - slider.current.offsetLeft;
    scrollLeft.current = slider.current.scrollLeft;
  }

  function three() {
    isDown.current = false;
  }

  function four() {
    isDown.current = false;
  }

  function five(e) {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - slider.current.offsetLeft;
    const walk = x - startX.current;
    slider.current.scrollLeft = scrollLeft.current - walk;
  }

  return (
    <div
      className="flex justify-center items-center overflow-x-scroll scroll-smooth relative"
      id="caraousel2"
      style={{ width : "100%", height: "500px" }}
      ref={slider}
    >
      {props.children}
    </div>
  ); 
}

export default function Populars({type}) {
  
  const dispatch = useDispatch();
  const [array, setArray] = useState([])
  const { loading , movies , series , people } = useSelector((state)=>state.popular);
   
  useEffect(()=>{
      fetchApi('/movie/popular?language=en-US&page=1').then((res)=>{
          dispatch(getMovies(res))
      });
      fetchApi('/tv/popular?language=en-US&page=1').then((res)=>{
        dispatch(getSeries(res))
    });

  },[dispatch])

  useEffect(()=>{
    if(type === "movies"){
      setArray(movies);
    }else if(type === "series"){
      setArray(series);
    }
  },[array, movies, series,type]);

  return (
  
      <DraggableCarousel>
        {/*  slider */}
        <div className="w-full h-full flex justify-start items-center relative">
          {loading ? (
            <Loader />
          ) : (
            array.results?.map((d, indx) => {
              return (
                <PopularCard
                  key={indx}
                  id={d.id}
                  image={d.poster_path}
                  title={d.title}
                  rating={d.vote_average}
                  releaseDate={d.release_date}
                  overview={d.overview}
                />
              );
            })
          )}
        </div>

      </DraggableCarousel>

  );
}
