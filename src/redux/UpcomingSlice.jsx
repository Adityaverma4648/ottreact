import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading : true,
    upcomingMovies : [],
    tvShowsAiring : [],

};

const upcomingSlice = createSlice({
  name: 'discover',
  initialState,
  reducers: {
    getUpcomingMovies: (state , action)=>{
      state.upcomingMovies = action.payload
      state.loading = false 
    },
    getAiringTvShows : (state , action)=>{
      state.tvShowsAiring = action.payload
      state.loading = false
    }
  },
  extraReducers: {
     
  },
  
})
export const {getUpcomingMovies, getAiringTvShows} = upcomingSlice.actions;

export default upcomingSlice.reducer