import React from 'react'
import GptSearchbar from './GptSearchbar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_LOGIN } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
        <div className='fixed -z-10'>
            <img className="h-screen w-screen object-cover"src={BG_LOGIN} alt="proj-bg"/>
        </div>
        <div>
        <GptSearchbar/>
        <GptMovieSuggestion/>
        </div>
    </div>

  )
}

export default GptSearch