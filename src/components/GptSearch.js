import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { Logo } from "../utils/constants";
const GptSearch = ()=>{
    return(
        <>
        <div className="fixed inset-0 -z-10">
                 <img className="h-screen w-screen object-cover" src={Logo} alt="background-img"/>
             </div>
             <div>
          <GptSearchBar/>
          <GptMovieSuggestions/>  
        </div>
        </>
    )
}
export default GptSearch;