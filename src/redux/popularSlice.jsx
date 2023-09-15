import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading : true,
    movies: [],
    people:[],
    series:[],

};

const ProviderSlice = createSlice({
  name: 'popular',
  initialState,
  reducers: {
    getMovies: (state , action)=>{
      state.movies = action.payload
      state.loading = false
    },
    getPeople:(state , action)=>{
      state.people = action.payload
      state.loading = false
    },
    getSeries:(state , action)=>{
      state.series = action.payload
      state.loading = false
    }
  },
  extraReducers: {
     
  },
  
})
export const {getMovies} = ProviderSlice.actions;

export const {getPeople} = ProviderSlice.actions;

export const {getSeries} = ProviderSlice.actions;

export default ProviderSlice.reducer