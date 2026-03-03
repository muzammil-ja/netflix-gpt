import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!Array.isArray(movies) || movies.length === 0) return null;

  return (
    <div className="px-6">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>

      <div className="flex overflow-x-scroll scrollbar-hide hide-scrollbar">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_url}   // 👈 direct bhejo
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;