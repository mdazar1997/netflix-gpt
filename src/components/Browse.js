import React from 'react'
import Header from './Header'
import useNowPlaying from '../hooks/useNowPlaying'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRated from '../hooks/useTopRated';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';

const Browse = () => {
  const showGptsearch = useSelector(store=>store.gpt.showGptSearch);
  console.log(showGptsearch,"shiow");
 useNowPlaying();
 usePopularMovies();
 useTopRated();
  return (
    <div>
      <Header/>
      {showGptsearch ? <GptSearch/>:
      <>
      <MainContainer/>
      <SecondaryContainer/>
      </>
  }
    </div>
  )
}

export default Browse