import {FaSearch} from "react-icons/fa"; 

const Search = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-black text-white p-1">
      
       <div className="lg:w-10/12 md:w-11/12 w-11/12 h-1/3 flex justify-center items-center" >
            <div className="h-full w-2/3 rounded-3xl bg-slate-900 mx-1 overflow-hidden p-2 flex flex-col justify-start items-center" >
              <div className="w-11/12 border border-gray-700 flex justify-center items-center rounded-3xl">
                  <input type="text" className="flex-1 select-none outline-none p-2  bg-transparent " placeholder="Search Your favourite collections" />
                  <div className="w-20 flex justify-center items-center 
                  " >
                     <FaSearch />
                  </div>
              </div>
            </div>
            <div className="h-full w-1/3 rounded-3xl bg-slate-900"></div>
       </div>

    </div>
  );
};

export default Search;
