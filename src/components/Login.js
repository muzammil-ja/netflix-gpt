import { useRef, useState } from "react";
import { validate } from "../utils/validate";
import Header from "./Header";
import { supabase } from "./supabseClient";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { Logo } from "../utils/constants";
const Login = ()=>{
    const dispatch=useDispatch();
    const[isSignIn,setIsSignIn]=useState(true);
    const[errorMessage,setErrorMessage]=useState(null);

    const name=useRef(null);
    const email=useRef(null);
    const password=useRef(null);

     const HandleClickButton = () =>{ 
     const message=validate(email.current.value,password.current.value);
        setErrorMessage(message);

        if(message) return;

        if(!isSignIn){
              supabase.auth.signUp({
      email: email.current.value,
      password: password.current.value,
      options:{
        data:{
          full_name:name.current.value,
        },
      },
    })
    .then(({ data, error }) => {
    if (error) throw error;
    const user=data.user;
        dispatch(
            addUser({
              id: user.id,
               email:user.email,
               displayName:user.user_metadata?.full_name||null, 
            })
        )

    return supabase.from("profiles").insert([
      {
        id: data.user.id,
        full_name: name.current.value,
      }
    ]);
  })
      // Signed up successfully
      // const user = data.user;
    .catch((error) => {
      setErrorMessage(error.message);
    });
        }else{
  supabase.auth
    .signInWithPassword({
      email: email.current.value,
      password: password.current.value,
    })
    .then(({ data, error }) => {
      if (error) {
        throw error;
      }
      // Signed in successfully
      // const user = data.user;
    })
    .catch((error) => {
      setErrorMessage(error.message);
    });
}
  }


    const toggleIsSign=()=>{
            setIsSignIn(!isSignIn)
    }


    return(
        <div>
            <Header/>
            <div className="absolute">
                <img src={Logo} alt="background-img"/>
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className="w-3/12 my-36 absolute p-12 bg-black mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">

            <h1 className="font-bold text-3xl py-4">{isSignIn?"Sign In":"Sign Up"}</h1>

               {(!isSignIn)&&<input ref={name} type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700"/>}

                <input ref={email} type="text" placeholder="Email" className="p-4 my-4 w-full bg-gray-700"/>

                <input ref={password} type="Password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700"/>
                <p className="text-red-600 px-4">{errorMessage}</p>

                <button className="p-4 my-4 bg-red-700 w-full rounded-lg" onClick={HandleClickButton}>{isSignIn?"Sign In":"Sign Up"}</button>

                <p className="py-4 cursor-pointer" onClick={toggleIsSign}>{isSignIn?"New to Netflix?Sign up now":"Already Registered ? Sign In now"}</p>
            </form>
        </div>
    )
}
export default Login;