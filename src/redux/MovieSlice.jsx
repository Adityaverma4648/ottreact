import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading : true,
    popular :  [],
    topRated : [],
    upcoming : [],
    all : []

};

const MovieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    getPopular: (state , action)=>{
      state.popular = action.payload
      state.loading = false 
    },
    getUpcoming : (state,action)=>{
      state.upcoming = action.payload
      state.loading = false;
    },
    getTopRated : (state , action)=>{
        state.topRated = action.payload
        state.loading = false
    },
    getAll : (state) =>{
        state.all.push(state.upcoming)
        state.all.push(state.topRated)
        state.all.push(state.popular)
        state.loading = false
    }
  },
  extraReducers: {
     
  },
  
})
export const {getPopular , getUpcoming ,getTopRated ,getAll } = MovieSlice.actions;

export default MovieSlice.reducer