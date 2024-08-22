import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./Slices/itemsSlice";

export const store = configureStore({
  reducer: { items: itemsReducer },
});
