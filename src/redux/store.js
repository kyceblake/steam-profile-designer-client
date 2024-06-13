import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slices/searchSlice";
import itemsReducer from "./slices/itemsSlice";
import categoriesReducer from "./slices/categorySlice";
import sidebarReducer from "./slices/sidebarSlice";

export default configureStore({
  reducer: {
    search: searchReducer,
    items: itemsReducer,
    categories: categoriesReducer,
    sidebar: sidebarReducer,
  },
});
