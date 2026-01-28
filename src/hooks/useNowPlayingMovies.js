import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const getNowPlayingMovies = useCallback(async () => {
    const response = await fetch(
      "https://api.watchmode.com/v1/releases/?apiKey=WObdFY8joporhJdHDg2ml7DTcCItv9D56sE3q9eR&types=movie&regions=IN&limit=20"
    );
    const json = await response.json();
    dispatch(addNowPlayingMovies(json.releases));
  }, [dispatch]);

  useEffect(() => {
    if (!nowPlayingMovies) {
      getNowPlayingMovies();
    }
  }, [nowPlayingMovies, getNowPlayingMovies]);
};

export default useNowPlayingMovies;
