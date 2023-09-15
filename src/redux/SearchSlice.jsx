import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading : true,
    search: [],
    languages:[]
};

const SearchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state , action)=>{
      state.search = action.payload
      state.loading = false
    },
    
  },
  extraReducers: {
     
  },
  
})
export const {setSearch} = SearchSlice.actions;

export default SearchSlice.reducer;