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
    setMovies: (state , action)=>{
      state.movies = action.payload
      state.loading = false
    },
    setPeople:(state , action)=>{
      state.people = action.payload
      state.loading = false
    },
    setSeries:(state , action)=>{
      state.series = action.payload
      state.loading = false
    }
  },
  extraReducers: {
     
  },
  
})
export const {setMovies} = ProviderSlice.actions;

export const {setPeople} = ProviderSlice.actions;

export const {setSeries} = ProviderSlice.actions;

export default ProviderSlice.reducer