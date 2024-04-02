import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("cart")) ?? [];
console.log("initailstate cart ", initialState);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      console.log(state);
      console.log(action.payload);
      state.push(action.payload);
    },
    deleteFromCart(state, action) {
      return state.filter((item) => item.$id != action.payload.$id);
    },
    clearCart(state) {
      console.log(state);
      // Clear the cart
      return [];
    },
  },
});

export const { addToCart, deleteFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
