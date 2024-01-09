import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import rootReducer from './rootReducer';

// Create a configuration object for redux-persist
const persistConfig = {
  key: 'root', // You can customize the storage key
  storage, // This uses localStorage by default
};

// Wrap your rootReducer with redux-persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer, // Use the persisted reducer
});

export const persistor = persistStore(store); // Export persistor for later use

export default store;
