import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  info:null,
};

export const MovieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    loadMovie: (state,action)=>{
        state.info = action.payload;
    },
    removeMovie: (state,action)=>{
        state.info = null;
    }
    }
})

// Action creators are generated for each case reducer function
export const {loadMovie,removeMovie} = MovieSlice.actions

export default MovieSlice.reducer