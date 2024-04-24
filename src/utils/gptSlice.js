import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        gptMovies:null,
        movieNames:null
    },
    reducers:{
        toggleGptSearch:(state)=>{
            state.showGptSearch = !state.showGptSearch
        },
        addGptMovieResult:(state,action)=>{
            const {movieNames,movieResult}=action.payload
            state.gptMovies=movieResult;
            state.movieNames=movieNames;
        }
    }
})

export default gptSlice.reducer;

export const {toggleGptSearch,addGptMovieResult} = gptSlice.actions;