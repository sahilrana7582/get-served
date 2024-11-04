// store/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  cartItems: [],
  quantity: 0,
  orders: [], // array to hold cart items
  // track the total quantity of items in the cart
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity * 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: action.payload.quantity,
        });
      }
    },
    removeFromCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        state.cartItems.splice(itemIndex, 1);
      }
    },
    clearCart: (state) => {
      const ordersCopy = [...state.cartItems]; // Copy cart items
      state.orders.push(...ordersCopy);
      state.cartItems = [];
    },

    setCartItems: (state, action) => {
      // Set the cart items from the API response
      state.items = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, setCartItems } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;
