import {useParams} from "react-router-dom";

const Genre = ({route}) => {
  
  const routeParams = useParams();
  const {id} = routeParams

  return (
    <div className="w-screen flex justify-center items-center bg-slate-900 text-white" style={{height : "100vh"}} >Genre {id}</div>
  )
}

export default Genre;