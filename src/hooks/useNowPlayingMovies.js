import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {addNowPlayingMovies} from "../utils/moviesSlice";
const useNowPlayingMovies = ()=>{
     const dispatch=useDispatch();
     
    const getNowPlayingMovies= async ()=> {
    const response=await fetch( "https://api.watchmode.com/v1/releases/?apiKey=WObdFY8joporhJdHDg2ml7DTcCItv9D56sE3q9eR&types=movie&regions=IN&limit=20");
        const json=await response.json();
        console.log(json);
        dispatch(addNowPlayingMovies(json));
    };
    useEffect(()=>{
        getNowPlayingMovies();
    },[])
}
export default useNowPlayingMovies;