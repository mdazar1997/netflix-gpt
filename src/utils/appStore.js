import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import moviereducer from './movieSlice'

const appStore = configureStore({
    reducer:{
        user:userReducer,
        movies:moviereducer
    }
})
export default appStore;