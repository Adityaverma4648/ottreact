import { createSlice } from '@reduxjs/toolkit';

const AppSlice = createSlice({
  name: 'app',
  initialState: {},
  reducers: {
    clearAllData: () => {
      return {}; // Clear all state properties here
    },
  },
});

export const { clearAllData } = AppSlice.actions;
export default AppSlice.reducer;