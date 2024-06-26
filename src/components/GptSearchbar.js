import React,{useRef} from 'react'
import lang from '../utils/languageConstants';
import { useSelector ,useDispatch} from 'react-redux';
// import { openai } from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchbar = () => {
    const searchText = useRef(null);
    const dispatch= useDispatch();
    const searchMovie=async(movie)=>{
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS)
        const json= await data.json();
        console.log(json,"json");
        return json.results;
    }
    const handleSearch=async()=>{
        // const gptQuery ="Act as a movie recommendation syatem and suggest movie for given query:"+searchText.current.value+
        // "give me 5 movie names,comma seperated like the example given ahead : movie1,movie2,movie3,movie4,movie5"
        //     const result = await openai.chat.completions.create({
        //       messages: [{ role: 'user', content: gptQuery }],
        //       model: 'gpt-3.5-turbo',
        //     });
        const moviesList = ["Asuran","Leo","Jailer","Valimai","Maanadu"]

      const data =moviesList.map(o=>(searchMovie(o)));
        //returns [5] promises
        const tmdbResult = await Promise.all(data);
        //wait for all to finish
        console.log(tmdbResult,"result");
        dispatch(addGptMovieResult({movieNames:moviesList,movieResult:tmdbResult}))
    }
    const langKey= useSelector(store=>store.config.lang);
    return(
    <div className="pt-[40%] md:pt-[10%] flex justify-center">
    <form className="w-full md:w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
    <input
    type="text" ref={searchText}
    className=" p-4 m-4 col-span-9"
    placeholder={lang[langKey].gptPlaceholder}
    />
    <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
    onClick={handleSearch}>
    {lang[langKey].search}
    </button>
    </form>
    </div>
    );
    };
    export default GptSearchbar;