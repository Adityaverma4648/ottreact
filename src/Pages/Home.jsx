/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import homeHero from "../Img/homeHero.jpeg";
//  components
import HomeHero from "../Components/HomeHero";
import HomeLeftContent from "../Components/HomeLeftContent";
import HomeRightContent from "../Components/HomeRightContent";


const Home = ({ isAdmin }) => {

  return (
        <div className="md:w-full w-screen h-auto flex flex-col justify-center items-center relative overflow-hidden blackBG">
      {/*  home  */}
      <div
        className="w-full flex justify-center items-center relative"
        id="Home"
        style={{ height: "300vh" }}
      >
        <div className="w-full h-full flex flex-col justify-start items-center relative bg-gradient-to-t from-black bg-slate-900/80 z-30">
          <HomeHero />

          <div
            className="lg:w-10/12 md:w-11/12 w-11/12 lg:h-1/2 text-white flex lg:flex-row flex-col justify-center items-center bg-transparent rounded-t-3xl transition-all ease-in-out delay-500"
            id="ContentContainer"
          >
            <HomeLeftContent id="HomeLeftContent" isAdmin={isAdmin} />

            <HomeRightContent id="HomeRightContent" isAdmin={isAdmin} />
          </div>
        </div>
        <div className="absolute w-full h-full flex justify-start items-start top-0 lg:overflow-hidden">
          <img
            src={homeHero}
            alt="hero"
            className="md:w-full md:h-auto h-2/5"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
