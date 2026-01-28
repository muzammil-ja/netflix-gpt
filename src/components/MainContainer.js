import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = ()=>{
    const movies=useSelector(store=>store.movies?.nowPlayingMovies)

    if(!movies||movies.length===0) return null;

    const mainMovie=movies[0];
    
  
    const originalTitle=mainMovie.title
    const movieId=mainMovie.id;
    return <div className="pt-[30%] md:pt-0">

    <VideoTitle title={originalTitle} id={movieId}/>
        <VideoBackground title={originalTitle}/>
    </div>

};
export default MainContainer;