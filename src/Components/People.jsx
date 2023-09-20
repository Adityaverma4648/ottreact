/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchApi } from "../utils/api";
import { getPeople } from "../redux/popularSlice";

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

  function mouseEnter(e) {
    var caraousel = document.getElementById("caraousel");
    caraousel.classList.add("overflow-x-scroll");
  }
  function mouseOut(e) {
    var caraousel = document.getElementById("caraousel");
    caraousel.classList.remove("overflow-x-scroll");
  }

  return (
    <div
      className="lg:w-full w-full md:h-full flex lg:flex-col flex-row justify-start items-center lg:overflow-y-scroll overflow-x-scroll hidescrollbar scroll-smooth lg:py-16 "
      id="caraousel"
      onMouseEnter={(e) => {
        mouseEnter(e);
      }}
      onMouseLeave={(e) => {
        mouseOut(e);
      }}
      ref={slider}
    >
      {props.children}
    </div>
  );
}

const People = () => {
  const dispatch = useDispatch();
  const { people } = useSelector((state) => state.popular);

  useEffect(() => {
    fetchApi("/person/popular?language=en-US&page=1").then((res) => {
      dispatch(getPeople(res.results));
      console.log(res);
    });
  }, [dispatch]);

  return (
    <div className="w-full h-full flex justify-start items-center overflow-y-scroll relative ">
      <div className="lg:h-16 h-10 w-full flex lg:justify-center justify-start items-center text-white absolute top-0 bg-gradient-to-b from-slate-900 to-transparent text-xl lg:p-0 p-4">
        People
      </div>

      <DraggableCarousel className="w-full py-16 flex flex-1 lg:flex-col flex-row justify-start items-center overflow-x-scroll">
        <div className="w-auto flex flex-1 lg:flex-col flex-row justify-start items-center p-2">
          {people?.map((d, index) => {
            return (
              <Link key={index} to={`/people/${d.id}`}>
                <div className="lg:w-11/12 w-64 lg:h-52 lg:h-90 h-64 flex justify-between items-center overflow-hidden bg-slate-900 cursor-pointer p-2">
                  <div className="w-40 h-40 flex justify-center items-center overflow-hidden rounded-3xl">
                    <img
                      src={
                        "https://image.tmdb.org/t/p/original/" + d.profile_path
                      }
                      className="w-full h-auto "
                      alt={d.name}
                    />
                  </div>
                  <div className="text-right flex flex-col justify-end items-end text-sm">
                    <span>{d.name}</span>
                    <span className="text-red-400">
                      {d.known_for_department}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </DraggableCarousel>
    </div>
  );
};

export default People;
