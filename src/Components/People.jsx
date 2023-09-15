import { useEffect } from "react";
import {useDispatch , useSelector } from "react-redux";
import {fetchApi} from "../utils/api";

import {getPeople} from "../redux/popularSlice";

import Loader from "../Components/Loader";

const People = () => {

    const dispatch = useDispatch();
    const {loading , people} = useSelector((state)=>state.popular);

    useEffect(()=>{
          fetchApi('/person/popular?language=en-US&page=1').then((res)=>{
             dispatch(getPeople(res.results));
             console.log(res);
          })
    },[dispatch])

  return (
    <div className="w-full h-fulll flex flex-col justify-center  items-center" >
        {loading ? <Loader /> :  people.slice(0,10).map((d , index)=>{
            return <div key={index}  className="w-full h-20" >
                <img src={ "https://image.tmdb.org/t/p/original/"+ d.profile_path } className="w-20 h-full" alt={d.name} />
            </div>
        })  }
    </div>
  )
}

export default People