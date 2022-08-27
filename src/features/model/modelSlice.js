import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const modelSlice = createSlice({
  name: "model",
  initialState,
  reducers: {
    OpenModel: (state) => {
      state.isOpen = true;
    },
    CloseModel: (state) => {
      state.isOpen = false;
    },
  },
});

export const { OpenModel, CloseModel } = modelSlice.actions;
export default modelSlice.reducer;
