import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = ()=>{
    const movies=useSelector(store=>store.movies?.nowPlayingMovies)

    if(!movies||movies.releases.length===0) return null;

    const mainMovie=movies.releases[2];
  
    const originalTitle=mainMovie.title
    const movieId=mainMovie.id;
    return <div>

    <VideoTitle title={originalTitle} id={movieId}/>
        <VideoBackground title={originalTitle}/>
    </div>

};
export default MainContainer;