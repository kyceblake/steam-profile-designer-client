import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchURL = import.meta.env.VITE_ITEMS_FETCH_URL;

const initialState = {
  items: [],
  totalPages: 0,
  currentPage: 0,
  searchQuery: "",
  type: "",
  status: "loading",
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state, action) => {
      state.status = "loading";
    });

    builder.addCase(fetchItems.fulfilled, (state, action) => {
      return {
        ...state,
        ...action.meta.arg,
        items: action.payload.page,
        totalPages: action.payload.total,
        status: "success",
      };
    });

    builder.addCase(fetchItems.rejected, (state, action) => {
      state.status = "error";
      state.items = [];
    });
  },
});

export const fetchItems = createAsyncThunk(
  "items/fetchItems",
  async (params) => {
    const { category, searchQuery, currentPage } = params;
    const { data } = await axios.get(fetchURL, {
      params: {
        category,
        query: searchQuery,
        page: currentPage,
      },
    });

    return JSON.parse(data);
  }
);

export const selectItems = (state) => state.items;

export default itemsSlice.reducer;
