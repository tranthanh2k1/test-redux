import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    value: [],
  },
  reducers: {
    adProduct(state, action) {
      state.value.push(action.payload);
    },
  },
});
export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
