import { useRef } from "react";
import { addGptMovieResult } from "../utils/gptSlice";
import { useDispatch } from "react-redux";
const GptSearchBar = () =>{

    const searchText=useRef(null)
 const dispatch=useDispatch();
 const OPENROUTER_API_KEY = process.env.REACT_APP_OPENROUTER_API_KEY;


 const searchMovie= async (movie)=>{
  const data =await fetch(
    "https://api.watchmode.com/v1/search/?"+
    "apiKey=WObdFY8joporhJdHDg2ml7DTcCItv9D56sE3q9eR"+
    "&search_field=name"+
    "&search_value="+encodeURIComponent(movie.trim())+
    "&types=movie"
  )

     const json = await data.json()

     // 🔑 IMPORTANT
  if (!json.title_results || json.title_results.length === 0) {
    return [];
  }


 return json.title_results;

 }
    const handleGptSearchClick = async()=>{

        console.log(searchText.current.value);

        const gptQuery="Act as a movie recommendation system and suggest some movies for thr query :"
        + searchText.current.value+
        ".only give movie names, comma separated."

        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
    "Content-Type": "application/json",
     "HTTP-Referer": window.location.origin,
      "X-Title": "Netflix GPT App",
  },
  body: JSON.stringify({
    model: "openai/gpt-4o-mini",
    messages: [{role: "user",content: gptQuery}]
  }),
});
    

    const data = await response.json();
    console.log(data);

if (!data.choices) {
  console.error("AI Error:", data);
  return;
}
const gptMovies = data.choices[0].message.content
  .split(",")
  .map(movie =>
    movie.replace(/[0-9."']/g, "").trim()
  );


const promiseArray= gptMovies.map((movie) => searchMovie(movie))

const resultApi= await Promise.all(promiseArray);
console.log(resultApi);

  //  const movieNames=data.choices[0].message.content
  //  .split(",")
  //  .map((movie)=>movie.trim());
   
   
  dispatch(
    addGptMovieResult({
      movieNames:gptMovies,
     movieResults:resultApi
    })
   )
    }

    return (
       <div className="pt-[35%] md:pt-[10%] flex justify-center">
        <form className="w-full md:w-1/2 bg-black grid grid-cols-12" 
        onSubmit={(e)=>e.preventDefault()}>
        <input
        ref={searchText}
         type="text" 
        className="p-4 m-4 col-span-9" 
        placeholder="What would you like to watch today?"/>
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
        onClick={handleGptSearchClick}
        >
            Search
            </button>
        </form>
       </div>
    )
}
export default GptSearchBar;