import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setValue } = searchSlice.actions;

export const getValue = (state) => state.value;

export default searchSlice.reducer;
