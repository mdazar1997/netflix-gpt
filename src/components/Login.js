import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkvalidatedata } from '../utils/validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
    const [isSignin,setIsSignin]=useState(true);
    const [errorMsg,setErrorMsg]=useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const toggleSigninform =()=>{
        setIsSignin(!isSignin)
    }
    const email=useRef(null);
    const password=useRef(null);
    const name=useRef(null);
    const handleButtonClick=()=>{
        console.log(email.current.value);
        console.log(password.current.value);
       const message = checkvalidatedata(email.current.value,password.current.value);
        setErrorMsg(message);
        if(message)return;
        if(!isSignin){
            createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
              .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName:name.current.value,photoURL:"https://cdn.iconscout.com/icon/free/png-256/free-laptop-user-1-1179329.png?f=webp"
                  }).then(() => {
                    const {uid,email,displayName,photoURL} = auth.currentUser;
                    dispatch(addUser({uid,email,displayName,photoURL}))
                    navigate('/browse')
                  }).catch((error) => {
                    // An error occurred
                    // ...
                  });
                console.log(user);
                navigate('/browse')
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg(errorCode + "-" + errorMessage)
              });
        }
        else {
            signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate('/browse')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMsg(errorCode + "-" + errorMessage)
  });
        }
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/bbfea491-8423-467c-bd2c-0502b97b76ea/AE-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="netflix-bg">

            </img>
        </div>
       
<form onSubmit={(e)=>e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70">
<h1 className="font-bold text-3xl py-4">{isSignin?"Sign In":"Sign Up"}</h1>
{!isSignin &&<input
type="text"
ref={name}
placeholder="FullName"
className="p-4 my-4 w-full bg-gray-700"
></input>}
<input
type="text"
ref={email}
placeholder="Email Address"
className="p-4 my-4 w-full bg-gray-700"
></input>
<input
type="password"
ref={password}
placeholder="Password"
className="p-4 my-4 w-full bg-gray-700"
/>
<p className=' text-red-500 font-bold text-lg py-2'>{errorMsg}</p>
<button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
{isSignin?"Sign In":"Sign Up"}
</button>
<p className="py-4 cursor-pointer" onClick={toggleSigninform}>{isSignin
? "New to Netflix? Sign Up Now"
: "Already registered? Sign In Now..."}</p>
</form>
    </div>
  )
}

export default Login