import { useState } from "react";
import Header from "./Header";
const Login = ()=>{

    const[isSignIn,setIsSignIn]=useState(true);

    const toggleIsSign=()=>{
            setIsSignIn(!isSignIn)
    }

    return(
        <div>
            <Header/>
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/29b665f6-0a62-4745-b9c2-f617fb7eadc6/web/IN-en-20251208-TRIFECTA-perspective_c78aea89-8f13-4e2c-ba7a-f9b40f53bf8c_small.jpg" alt="background-img"/>
            </div>
            <form className="w-3/12 my-36 absolute p-12 bg-black mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">

            <h1 className="font-bold text-3xl py-4">{isSignIn?"Sign In":"Sign Up"}</h1>

               {(!isSignIn)&&<input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700"/>}

                <input type="text" placeholder="Email" className="p-4 my-4 w-full bg-gray-700"/>

                <input type="Password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700"/>

                <button className="p-4 my-4 bg-red-700 w-full rounded-lg">{isSignIn?"Sign In":"Sign Up"}</button>

                <p className="py-4 cursor-pointer" onClick={toggleIsSign}>{isSignIn?"New to Netflix?Sign up now":"Already Registered ? Sign In now"}</p>
            </form>
        </div>
    )
}
export default Login;