import { createSlice } from '@reduxjs/toolkit';
import { registerUser , userLogin } from './authAction';


const initialState = {
    loading : true,
    data : [],
};

const discoverSlice = createSlice({
  name: 'discover',
  initialState,
  reducers: {
    getMovieDiscoverData: (state , action)=>{
      state.data = action.payload
      state.loading = false 
    }
  },
  extraReducers: {
     
  },
  
})
export const {getMovieDiscoverData} = discoverSlice.actions;

export default discoverSlice.reducer