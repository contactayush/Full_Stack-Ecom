import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "Cart",
  initialState: localStorage.getItem("Cart")
    ? JSON.parse(localStorage.getItem("Cart"))
    : [],
  reducers: {
    addCart: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("Cart", JSON.stringify(state));
    },
    removeCart: (state, action) => {
      return state.filter((item) => item._id !== action.payload);
    },
  },
});

export const { addCart, removeCart } = CartSlice.actions;
export default CartSlice.reducer;
