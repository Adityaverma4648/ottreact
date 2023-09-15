/* eslint-disable react/prop-types */
const CategoryCard = (props) => {
  return (
    <div className="lg:w-64 w-64 h-40 mx-1 relative flex justify-center items-center overflow-hidden rounded-lg cursor-pointer">
      <div className="w-full h-full flex justify-center items-center absolute z-10">
        <div className="w-full h-full p-1 absolute flex justify-center items-center">
          <div className=" w-full h-full flex justify-center items-center">
            <img
              className="w-full h-full rounded-lg"
              src={props.fileUrl}
              alt={props.title}
            />
          </div>
        </div>
        <div className="w-8/12 bg-black/30 p-2 backdrop-blur-sm text-white relative z-10 text-center">
          {props.title.toUpperCase()}
        </div>
      </div>

      <div className="h-full w-full flex justify-center items-center relative bg-red-500 animate-pulse"></div>
    </div>
  );
};

export default CategoryCard;
