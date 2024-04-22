import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO } from '../utils/constants';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user=useSelector(store=>store.user)
  const handleSignout=()=>{
    signOut(auth).then(() => {
      navigate('/');
    }).catch((error) => {
      // An error happened.
    });
  }
  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid,email,displayName,photoURL}))
        navigate('/browse');
      } else {
        dispatch(removeUser())
        navigate('/')
      }
    });
    return ()=>unsubscribe()
  },[dispatch])
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black w-screen z-10 flex justify-between'> 
        <img className='w-44 ' src={LOGO}
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