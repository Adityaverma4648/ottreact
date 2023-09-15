import {useSelector , useDispatch} from "react-redux";

const Player = () => {

  const dispatch  = useDispatch();
  const {loading , currentlyPlaying} = useSelector((state)=>state.player);

  return (
    <div className="w-screen h-screen bg-slate-900 text-white flex justify-center items-center p-1" >
        <div className="absolute w-40 h-full flex justify-center items-center text-white">
              map
        </div>

        <div className="w-full h-full flex justify-center items-center">
             
        </div> 
    </div>
  )
}

export default Player