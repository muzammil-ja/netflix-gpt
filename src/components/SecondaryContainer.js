import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  if (!movies?.nowPlayingMovies?.length) return null;   // 👈 ye line add karo

  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-36 pl-4 md:pl-12 relative z-20">
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MovieList title="Popular" movies={movies.nowPlayingMovies} />
        <MovieList title="Up Coming" movies={movies.nowPlayingMovies} />
        <MovieList title="Trending" movies={movies.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;