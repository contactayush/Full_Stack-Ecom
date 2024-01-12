import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    addCart: (state, action) => {
      console.log(action.payload);
      state.push(action.payload);
      console.log("pushed");
    },
    removeCart: (state, action) => {
      return state.filter((item) => item._id !== action.payload);
    },
  },
});

export const { addCart, removeCart } = CartSlice.actions;
export default CartSlice.reducer;
