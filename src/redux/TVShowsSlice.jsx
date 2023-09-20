import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading : true,
    popular :  [],
    topRated : [],
    upcoming : [],
    onAir : []

};

const TVShowsSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    getUpcoming : (state,action)=>{
      state.upcoming = action.payload
      state.loading = false
    },
    getOnAir : (state , action)=>{
      state.onAir = action.payload
      state.loading = false
    },
    getPopular: (state , action)=>{
      state.popular = action.payload
      state.loading = false 
    },
    getTopRated : (state , action)=>{
        state.topRated = action.payload
        state.loading = false
    },
  },
  extraReducers: {
     
  },
  
})
export const {getPopular , getUpcoming , getOnAir ,getTopRated ,getAll } = TVShowsSlice.actions;

export default TVShowsSlice.reducer;