import { combineReducers } from '@reduxjs/toolkit';
import adminReducer from './auth/adminSlice';

const rootReducer = combineReducers({
  admin: adminReducer,
});

export default rootReducer;
