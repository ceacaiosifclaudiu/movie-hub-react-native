import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './itemSlice';

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});

export default store;
