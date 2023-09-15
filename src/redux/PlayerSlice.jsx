import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading : true,
    currentlyPlaying : [],
    history : [],

};

const PlayerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
     setCurrentlyPlaying : (state , action) =>{
         state.currentlyPlaying = action.payload;
     } ,
     addHistory : (state , action) => {
        const checkUnique = (x) => x.id === action.payload.id;      
        if (state.history.some(checkUnique)) {
          return {
            ...state,
            history: [...state.history],
          };
        } else {
          return {
            ...state,
            history: [...state.history, action.payload],
          };
        }  
     }       
  },  
})
export const { setCurrentlyPlaying } = PlayerSlice.actions;

export default PlayerSlice.reducer