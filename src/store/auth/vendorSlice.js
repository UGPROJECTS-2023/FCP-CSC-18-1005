import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  "role": "",
  "uuid": "",
  "name": "",
  "email": "",
  "isEnabled": "",
  "rcNumber": "9",
  "gender": "",
  "categoryId": "",
  "accountType": "",
  "mobile": "",
  "status": "",
  "address": "",
  "country": "",
  "city": "",
  "dp": "",
};

export const vendorSlice = createSlice({
  name: 'auth/vendor',
  initialState,
  reducers: {
    setVendor: (state, action) => {
      return action.payload;
    },
    userLoggedOut: () => initialState,
  },
});

export const { setVendor, userLoggedOut } = vendorSlice.actions;

export default vendorSlice.reducer;
