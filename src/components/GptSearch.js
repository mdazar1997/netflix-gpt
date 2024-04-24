import React from 'react'
import GptSearchbar from './GptSearchbar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_LOGIN } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
        <div className='fixed -z-10'>
            <img src={BG_LOGIN} alt="proj-bg"/>
        </div>
        <GptSearchbar/>
        <GptMovieSuggestion/>
    </div>

  )
}

export default GptSearch