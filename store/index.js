// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './slices/Cart';

const store = configureStore({
  reducer: {
    cart: cartReducer, // Add the cart reducer here
  },
});

export default store;
