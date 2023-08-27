import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading : true,
    regions: [],
    languages:[]
};

const ProviderSlice = createSlice({
  name: 'provider',
  initialState,
  reducers: {
    getRegions: (state , action)=>{
      state.regions = action.payload
      state.loading = false
    },
    setLanguages:(state , action )=>{
      state.languages = action.payload
      state.loading = false
    }
  },
  extraReducers: {
     
  },
  
})
export const {getRegions} = ProviderSlice.actions;

export const {setLanguages} = ProviderSlice.actions;


export default ProviderSlice.reducer;