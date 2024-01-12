import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slice/CartSlice";
import CounterSlice from "./Slice/CounterSlice";
const store = configureStore({
  reducer: {
    Cart: CartSlice,
    Counter: CounterSlice,
  },
});

export default store;
