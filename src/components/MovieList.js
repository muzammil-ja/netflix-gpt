import MovieCard from "./MovieCard";
const MovieList = ({title,movies}) =>{
    console.log(title,movies);
    

    return (
        <div className="px-6">
              <h1 className="text-3xl py-4 text-white">{title}</h1>
            <div className="flex overflow-x-scroll scrollbar-hide hide-scrollbar">
                <div className="flex">
                  {Array.isArray(movies)&& movies.map((movie)=>{
     const posterPath = movie.poster_url?.split("/posters/")[1];
                        if(!posterPath) return null;

                        return(
                            <MovieCard
                            key={movie.id}
                            posterPath={posterPath}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default MovieList;