/* eslint-disable react/prop-types */
import { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";

//  importing Loader
import Loader from "../Components/Loader";

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
      className="h-full flex justify-start items-center overflow-x-scroll relative scroll-smooth hideScrollbar"
      ref={slider}
    >
      {props.children}
    </div>
  );
}

const Saved = () => {
  const { loading, saved } = useSelector((state) => state.savedWatch);

  return (
    <div className="w-screen h-screen flex flex-col justify-start items-center bg-black text-white p-1">
      <div className="lg:w-10/12 md:w-11/12 w-full h-1/3 rounded-2xl bg-red-900 mt-20 flex justify-center items-center relative overflow-hidden">
        <span className="text-lg relative">Never miss any show you like</span>
        <div className="bg-white/20 absolute w-full h-full flex justify-center items-center"></div>
      </div>

      <div className="lg:w-10/12 md:w-11/12 w-full h-full flex flex-col flex-1 justify-center items-center">
        <div className="lg:w-10/12 md:w-11/12 w-full h-16 flex justify-center items-center bg-white"></div>
        <DraggableCarousel>
          <div className="w-auto h-full flex flex-row justify-center items-center relative overflow-x-scroll hideScrollbar">
            {loading ? (
              <Loader color="#fff" />
            ) : (
              saved?.map((d, index) => {
                return (
                  <div
                    key={index}
                    className="xl:w-80 lg:w-72 md:w-64 w-8/12 m-1 rounded-2xl overflow-hidden cursor-pointer relative transition-transform transform border-4 border-red-500 "
                  >
                    {d.image ? (
                      <img
                        className="w-full h-auto"
                        src={"https://image.tmdb.org/t/p/original/" + d.image}
                        alt={d.title}
                        onError={(e) => {
                          e.target.src =
                            "https://media.istockphoto.com/id/1218831660/vector/404-error-web-page.jpg?s=612x612&w=0&k=20&c=Y1MImi60qWxBYdrU5O5DeTkMd_nl22EX7Qnh0_mw370=";
                        }}
                      />
                    ) : (
                      <img
                        className="w-full h-auto"
                        src="https://media.istockphoto.com/id/1218831660/vector/404-error-web-page.jpg?s=612x612&w=0&k=20&c=Y1MImi60qWxBYdrU5O5DeTkMd_nl22EX7Qnh0_mw370="
                      />
                    )}
                  </div>
                );
              })
            )}
          </div>
        </DraggableCarousel>
      </div>
    </div>
  );
};

export default Saved;
