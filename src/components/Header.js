import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user=useSelector(store=>store.user)
  const handleSignout=()=>{
    signOut(auth).then(() => {
      navigate('/');
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black w-screen z-10 flex justify-between'> 
        <img className='w-44 ' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix-logo"></img>


{user&&<div className="flex p-2">
<img
className="w-12 h-12"
alt="Usericon"
src={user?.photoURL}></img>

<button className="font-bold text-white" onClick={handleSignout}>(Sign Out)</button>
</div>
}
    </div>
    
  )
}

export default Header