import { useLocation, useNavigate } from "react-router-dom"
import { supabase } from "./supabseClient";
import { useEffect } from "react";
import { addUser } from "../utils/userSlice";
import { removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { toggleGptSearchView } from "../utils/gptSlice";


const Header=()=>{
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const location=useLocation();
const showGptSearch= useSelector((store)=>store.gpt.showGptSearch);

  const handleSignOut =()=>{
      supabase.auth.signOut()
      .then(({ error }) => {
        if (error) {
          console.error("Logout error:", error.message);
        } else {
          // Logout ke baad home page ya "/" route pe redirect
        }
      })
      .catch((err) => {
        navigate("/error");
      });
  };

  useEffect(()=>{
     const { data: authListener } = supabase.auth.onAuthStateChange(
    (event, session) => {
      if (session?.user) {
        // user signed in / signed up
        const {id,email,user_metadata}=session.user;
        dispatch(
            addUser({
              id: id,
               email:email,
               displayName:user_metadata?.full_name||null, 
            })
        )
        navigate("/browse")
      } else {
        // user signed out
        dispatch(removeUser());
        navigate("/");
      }
    }
  );

  return () => {
    authListener.subscription.unsubscribe();
  };
},[dispatch,navigate]);

const handleGptSearchClick = ()=>{
dispatch(toggleGptSearchView());
}

    return(
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
          <img className="w-44 mx-auto md:mx-0"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
         {location.pathname==="/browse"&&(
          <div className="flex p-2 font-bold">
            <button className="py-2 my-4 mx-4 px-4 bg-purple-800 text-white rounded-lg"
                    onClick={handleGptSearchClick}
            >
              {showGptSearch ? "Home Page": "GPT Search"}</button>
            <button onClick={handleSignOut} className="bg-red-600 w-36 rounded-lg h-12 my-4">Sign Out
            </button>
          </div>
         )}
        </div>
    );
};
export default Header