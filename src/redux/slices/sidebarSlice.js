import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: true,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setOpen: (state, action) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { setOpen } = sidebarSlice.actions;

export const getOpenState = (state) => state.sidebar.isOpen;

export default sidebarSlice.reducer;
