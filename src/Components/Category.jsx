import React, { useRef , useState ,useEffect } from 'react';
import {Link} from "react-router-dom";

import { useDispatch , useSelector } from 'react-redux';
``
// importing Component
import CategoryCard from "./CategoryCard";

// importing Pictures
import categoryPic from "../assets/PAYOFF_EXAMPLES_01.jpg"; 
import Loader from './Loader';
import { fetchApi } from '../utils/api';
import {getGenre} from "../redux/ProviderSlice";

function DraggableCarousel(props){
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
     
    function mouseEnter(e){
      var carousel2 = document.getElementById('carousel2');
      carousel2.classList.add("overflow-x-scroll")
    }
    function mouseOut(e){
      var carousel2 = document.getElementById('carousel2');
      carousel2.classList.remove("overflow-x-scroll")
    }

return (
  <div className='md:w-full w-11/12 md:h-full h-full flex justify-start items-center overflow-hidden relative scroll-smooth ' onMouseEnter={mouseEnter} onMouseLeave={mouseOut}  ref={slider} id='caraousel1' >
      {props.children}
   </div>
)
}


export default function Category({isAdmin}){
    
    const addCategoryModal = () =>{
        var modal = document.getElementById('categoryModal');
        modal.classList.toggle("hidden")
    }
  
     
    const {loading , genre} = useSelector((state)=>state.provider);
    const dispatch = useDispatch();

    useEffect(()=>{

       fetchApi(`/genre/movie/list?language=en`).then((res)=>{
          dispatch(getGenre(res));
       })
    },[dispatch])
   

  return (
    <div className="flex flex-col justify-center items-center relative p-2 " style={{height : "250px"}} >
      <div className="w-full relative z-30 flex justify-between items-center">
        <div className="w-full flex justify-start items-center text-lg p-2">
          Explore By Genre
        </div>

        {isAdmin && <button
          className="border-0 flex justify-center items-center p-2"
          onClick={addCategoryModal}
        >
          Add Categories
        </button>
        }
      </div>

      <div className="w-full h-full flex justify-center items-center">
        <DraggableCarousel className=""
          id="categoryContainer"
        >
          <div className="md:w-screen w-{200vw} h-11/12 flex justify-start items-center relative transition-all ease-linear delay-500 scroll-smooth">
            {loading ? <Loader /> : genre.genres?.map((d , index) => {
              return (
                <Link
                  to={`/genre/${d.id}`}
                  key={index}
                  className="h-5/6 flex justify-center items-center cursor-pointer"
                >
                  <CategoryCard id={d.id} title={d.name} fileUrl={categoryPic} />
                </Link>
              );
            })}
          </div>
        </DraggableCarousel>

      
      </div>
    </div>
  );
}
