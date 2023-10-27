/* eslint-disable react/prop-types */
 const PeopleCard = (props) => {
  return (
    <div className="xl:w-80 lg:w-72 md:w-80 w-11/12 bg-gray-900 md:h-5/6 h-11/12 m-1 rounded-2xl overflow-hidden relative transition-transform transform" >
      <div
        className="h-full min-w-full z-10 absolute flex flex-col justify-end items-start transition-all delay-150 bg-gradient-to-t from-black/50 to-red-500/20 p-2"
        id="gradient"
      >
          <span className="text-xl" >
          {props.title}
          </span>
          <span className="text-red-500" >
          {props.type}
          </span>
          <span className="" >
          origin country - {props.origin}
          </span>
      </div>

      <div className="min-w-full h-full relative flex justify-center items-center overflow-hidden">
        
        {props.image ? (
          <img
            className="h-full"
            style={{minWidth : "850px"}}
            src={"https://image.tmdb.org/t/p/original/" + props.image}
            alt={props.name}
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
  )
}

export default PeopleCard