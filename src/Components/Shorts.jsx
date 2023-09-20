import React , {useEffect , useRef} from "react";
import { Link } from "react-router-dom";

//  importing componenets
import ShortsCard from "./ShortsCard";

//  demo file import
import video from "../assets/test.mp4";


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
      var caraousel = document.getElementById('caraousel');
      caraousel.classList.add("overflow-x-scroll")
    }
    function mouseOut(e){
      var caraousel = document.getElementById('caraousel');
      caraousel.classList.remove("overflow-x-scroll")
    }




return (
  <div className='md:w-full w-11/12 md:h-full flex justify-start items-center overflow-hidden relative transition-all ease-linear delay-700 scroll-smooth ' id="caraousel" onMouseEnter={(e)=>{mouseEnter(e)}} onMouseLeave={(e)=>{mouseOut(e)}} ref={slider} >
      {props.children}
   </div>
)
}


const Shorts = () => {
  const addShortsModal = () => {
    var modal = document.getElementById("modal");
    modal.classList.toggle("hidden");
  };

  const shorts = [
    {
      id: 1,
      title: "A Beautiful Seal",
      caption: "Nature is awesome",
      fileUrl: video,
      like: 0,
      comments: [],
    },
    {
      id: 2,
      title: "A Beautiful Seal",
      caption: "Nature is awesome",
      fileUrl: video,
      like: 0,
      comments: [],
    },
    {
      id: 3,
      title: "A Beautiful Seal",
      caption: "Nature is awesome",
      fileUrl: video,
      like: 0,
      comments: [],
    },
    {
      id: 4,
      title: "A Beautiful Seal",
      caption: "Nature is awesome",
      fileUrl: video,
      like: 0,
      comments: [],
    },
    {
      id: 5,
      title: "A Beautiful Seal",
      caption: "Nature is awesome",
      fileUrl: video,
      like: 0,
      comments: [],
    },
    {
      id: 6,
      title: "A Beautiful Seal",
      caption: "Nature is awesome",
      fileUrl: video,
      like: 0,
      comments: [],
    },
    {
      id: 7,
      title: "A Beautiful Seal",
      caption: "Nature is awesome",
      fileUrl: video,
      like: 0,
      comments: [],
    },
    {
      id: 8,
      title: "A Beautiful Seal",
      caption: "Nature is awesome",
      fileUrl: video,
      like: 0,
      comments: [],
    },
    {
      id: 9,
      title: "A Beautiful Seal",
      caption: "Nature is awesome",
      fileUrl: video,
      like: 0,
      comments: [],
    },
    {
      id: 10,
      title: "A Beautiful Seal",
      caption: "Nature is awesome",
      fileUrl: video,
      like: 0,
      comments: [],
    },
    {
      id: 11,
      title: "A Beautiful Seal",
      caption: "Nature is awesome",
      fileUrl: video,
      like: 0,
      comments: [],
    },
    {
      id: 12,
      title: "A Beautiful Seal",
      caption: "Nature is awesome",
      fileUrl: video,
      like: 0,
      comments: [],
    },
  ];

  return (
    <div className=" flex flex-col justify-center items-center rounded-t-lg p-2 relative " style={{height : "250px"}} >
      {/* shorts heading animated */}
      <div className="w-full p-2 relative z-30 flex justify-start items-center">
        <div className="text-lg flex justify-center items-center ">
          Explore Short Videos
        </div>

      </div>

      {/*  slider */}
      <div className="w-full h-full flex justify-center items-center relative z-10 ">
        
        {/* map through data */}
        <DraggableCarousel
          className="w-full md:h-full h-11/12 flex justify-start items-center relative scroll-smooth p-2"
        >
          <div className="w-{150vw} h-full flex justify-start items-center relative transition-all ease-linear">
            {shorts?.map((d) => {
              var path = "/shorts/" + d.id;
              return (
                <Link key={d.id} to={path}>
                  <ShortsCard id={d.id} fileUrl={d.fileUrl} />
                </Link>
              );
            })}
          </div>
        </DraggableCarousel>
        
      </div>
    </div>
  );
};

export default Shorts;
