import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "productPages",
  initialState: {
    value: 0,
  },
  reducers: {
    filterPage: (state) => {
      state.value = 0;
    },
    homePage: (state) => {
      if (state.value === 5) state.value = 0;
      state.value += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { homePage } = productSlice.actions;

export default productSlice.reducer;
