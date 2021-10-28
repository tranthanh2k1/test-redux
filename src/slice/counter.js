import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter", // tên slice
  initialState: { value: 0, showCounter: false }, // khởi tạo state
  reducers: {
    increment(state) {
      // state ~ initialState
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    increase(state, action) {
      state.value = state.value + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const { increment, decrement, increase, toggle } = counterSlice.actions;
export default counterSlice.reducer;
