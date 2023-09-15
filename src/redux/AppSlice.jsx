import { createSlice } from '@reduxjs/toolkit';

const AppSlice = createSlice({
  name: 'app',
  initialState: {
      appLanguage : {},
      theme : "",
  },
  reducers: {
      setAppLanguage : (state , action) => {
          state.appLanguage = action.payload;
      },
      setTheme : (state , action) =>{
        state.theme = action.payload;
      }
  },
});

export const { setAppLanguage , setTheme } = AppSlice.actions;
export default AppSlice.reducer;