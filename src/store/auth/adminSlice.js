import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  "firstname": "",
  "lastname": "",
  "email": "",
  "phone": "",
  "accountType": "",
  "status": "",
  "role": "",
};

export const adminSlice = createSlice({
  name: 'auth/admin',
  initialState,
  reducers: {
    setAdmin: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setAdmin } = adminSlice.actions;

export default adminSlice.reducer;
