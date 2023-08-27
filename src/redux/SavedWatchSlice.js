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
      addSaved: (state , action)=>{
        const itemSaved = state.saved.find((item)=>
          item.id === action.payload.id
        )
        if (itemSaved) {
          itemSaved.quantity++
        }else {
          state.saved.push({ ...action.payload, quantity: 1 });
        }
      },
      removeItemWatchLater: (state, action) => {
        const removeItem = state.watchLater.filter((item) => item.id !== action.payload);
        state.watchLater = removeItem;
      },
      addWatchLater:  (state , action)=>{

        const itemWatchLater = state.watchLater.find((item)=>
          item.id === action.payload.id
        )
        if (!itemWatchLater){
           state.watchLater.length = state.watchLaterlength+1;
           state.watchLater.push([ ...action.payload ]);
           state.loading = false;
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
export const {addSaved , clearSaved } = SavedWatchSlice.actions;

export const {addWatchLater , clearWatchLater } = SavedWatchSlice.actions;


export default SavedWatchSlice.reducer