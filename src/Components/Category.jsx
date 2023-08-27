import React, { useRef , useState ,useEffect } from 'react';
import {Link} from "react-router-dom";

// importing Component
import CategoryCard from "./CategoryCard";

// importing Pictures
import categoryPic from "../assets/PAYOFF_EXAMPLES_01.jpg"; 

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
  <div className='md:w-full w-11/12 md:h-full h-full flex justify-start items-center overflow-hidden relative scroll-smooth ' onMouseEnter={mouseEnter} onMouseLeave={mouseOut}  ref={slider} id='carousel2' >
      {props.children}
   </div>
)
}


export default function Category({isAdmin}){
    
    const addCategoryModal = () =>{
        var modal = document.getElementById('categoryModal');
        modal.classList.toggle("hidden")
    }
    const category = [
      {id : 1, title : "adventure", fileUrl : categoryPic },
      {id : 2, title : "thriller", fileUrl : categoryPic },
      {id : 3, title : "crime", fileUrl : categoryPic },
      {id : 4, title : "fantasy", fileUrl : categoryPic },
      {id : 5, title : "action", fileUrl : categoryPic },
      {id : 6, title : "drama", fileUrl : categoryPic },
      {id : 7, title : "comedy", fileUrl : categoryPic },
      {id : 8, title : "horror", fileUrl : categoryPic },
      {id : 9, title : "Sci-fi", fileUrl : categoryPic },
      {id : 10, title : "biography", fileUrl : categoryPic }
    ];



  return (
    <div className="flex flex-col justify-center items-center relative p-2 " style={{height : "250px"}} >
      <div className="w-full relative z-30 flex justify-between items-center">
        <div className="w-full flex justify-start items-center text-lg p-2">
          Explore BY Genre
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
            {category?.map((d) => {
              var path = `/category/${d.id}`;
              return (
                <Link
                  to={path}
                  key={d.id}
                  className="h-5/6 flex justify-center items-center"
                >
                  <CategoryCard id={d.id} title={d.title} fileUrl={d.fileUrl} />
                </Link>
              );
            })}
          </div>
        </DraggableCarousel>

      
      </div>
    </div>
  );
}
