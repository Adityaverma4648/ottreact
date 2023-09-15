import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading : true,
    saved: [],
    watchLater:[]
};

const SavedWatchSlice = createSlice({
  name: 'savedWatch',
  initialState,
  reducers: {
      addSaved: (state, action) => {
        const checkUnique = (x) => x.id === action.payload.id;      
        if (state.saved.some(checkUnique)) {
          return {
            ...state,
            saved: [...state.saved],
          };
        } else {
          return {
            ...state,
            saved: [...state.saved, action.payload],
          };
        }  
      },
      removeItemWatchLater: (state, action) => {
        const removeItem = state.watchLater.filter((item) => item.id !== action.payload);
        state.watchLater = removeItem;
      },
      addWatchLater: (state, action) => {
        const checkUnique = (x) => x.id === action.payload.id;      
        if (state.watchLater.some(checkUnique)) {
          return {
            ...state,
            watchLater: [...state.watchLater],
          };
        } else {
          return {
            ...state,
            watchLater: [...state.watchLater, action.payload],
          };
        }  
      },
      removeItemSaved: (state, action) => {
        const removeItem = state.saved.filter((item) => item.id !== action.payload);
        state.saved = removeItem;
      },
      clearWatchLater: (state)=>{ 
        state.watchLater = initialState.watchLater;
        state.loading = false;
      },
      clearSaved : (state)=>{ 
        state.saved = initialState.saved;
        state.loading = false;
      },
  },
  extraReducers: {
     
  },
  
})
export const {addSaved , clearSaved, addWatchLater , clearWatchLater } = SavedWatchSlice.actions;


export default SavedWatchSlice.reducer