import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignin,setIsSignin]=useState(true);
    const toggleSigninform =()=>{
        setIsSignin(!isSignin)
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/bbfea491-8423-467c-bd2c-0502b97b76ea/AE-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="netflix-bg">

            </img>
        </div>
       
<form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70">
<h1 className="font-bold text-3xl py-4">{isSignin?"Sign In":"Sign Up"}</h1>
{!isSignin &&<input
type="text"
placeholder="FullName"
className="p-4 my-4 w-full bg-gray-700"
></input>}
<input
type="text"
placeholder="Email Address"
className="p-4 my-4 w-full bg-gray-700"
></input>
<input
type="password"
placeholder="Password"
className="p-4 my-4 w-full bg-gray-700"
/>
<button className="p-4 my-6 bg-red-700 w-full rounded-lg">
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