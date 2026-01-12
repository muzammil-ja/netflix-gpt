import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {addPopularMovies} from "../utils/moviesSlice";
const usePopularMovies = ()=>{
     const dispatch=useDispatch();
     
    const getPopularMovies= async ()=> {
    const response=await fetch( "https://api.watchmode.com/v1/movies/popular?apiKey=WObdFY8joporhJdHDg2ml7DTcCItv9D56sE3q9eR");
        const json=await response.json();
        console.log(json);
        dispatch(addPopularMovies(json.movies));
    };
    useEffect(()=>{
        getPopularMovies();
    },[])
}
export default usePopularMovies;