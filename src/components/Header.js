import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearch } from '../utils/gptSlice';
import { changelanguage } from '../utils/configSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user=useSelector(store=>store.user);
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch);
  const selectedLang = useSelector(store=>store.config.lang);
  const handleSignout=()=>{
    signOut(auth).then(() => {
      navigate('/');
    }).catch((error) => {
      // An error happened.
    });
  }
  const toggleGptButton =()=>{
    dispatch(toggleGptSearch())
  }
  const handleLangChange=(e)=>{
    console.log(e.target.value,"e");
    dispatch(changelanguage(e.target.value))
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
  },[dispatch,navigate])
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black w-screen z-10 flex flex-col md:flex-row justify-between'> 
        <img className='w-44 mx-auto md:mx-0' src={LOGO}
        alt="netflix-logo"></img>


{user&&<div className="flex p-2 justify-between">
{showGptSearch && <select className='p-2 m-2 bg-gray-200 text-black rounded-lg' value={selectedLang} onChange={handleLangChange}>
{SUPPORTED_LANGUAGES.map((lang)=>(
<option key={lang.identifier} value={lang.identifier}>
{lang.name}
</option>
))}
</select>}
<button className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
onClick={toggleGptButton}>
{!showGptSearch?"GPT Search":"HomePage"}
</button>
<img
className="hidden md:inline-block w-12 h-12"
alt="Usericon"
src={user?.photoURL}></img>

<button className="font-bold text-white" onClick={handleSignout}>(Sign Out)</button>
</div>
}
    </div>
    
  )
}

export default Header