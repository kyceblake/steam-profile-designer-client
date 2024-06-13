import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeId: 0,
  menu: [
    {
      id: 0,
      title: "All",
    },
    {
      id: 1,
      title: "Backgrounds",
      submenus: [
        { id: 10, title: "Animated" },
        { id: 11, title: "Static" },
      ],
    },
    { id: 2, title: "Frames" },
    { id: 3, title: "Avatars" },
    { id: 4, title: "Special profiles" },
  ],
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeId = action.payload;
    },
  },
});

export const { setActiveCategory } = categoriesSlice.actions;

export const getCategories = (state) => state.categories.menu;
export const getActiveCategory = (state) => state.categories.activeId;

export default categoriesSlice.reducer;
