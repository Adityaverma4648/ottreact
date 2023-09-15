import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading : true,
    regions: [],
    languages:[],
    genre:[]
};

const ProviderSlice = createSlice({
  name: 'provider',
  initialState,
  reducers: {
    getRegions: (state , action)=>{
      state.regions = action.payload
      state.loading = false
    },
    getLanguages:(state , action )=>{
      state.languages = action.payload
      state.loading = false
    },
    getGenre:(state , action )=>{
      state.genre = action.payload
      state.loading = false
    }
  },
  extraReducers: {
     
  },
  
})
export const {getRegions , getGenre , getLanguages} = ProviderSlice.actions;

export default ProviderSlice.reducer;