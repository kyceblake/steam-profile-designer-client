import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchURL = import.meta.env.VITE_ITEMS_FETCH_URL;

const initialState = {
  items: [],
  totalPages: 0,
  currentPage: -1,
  searchQuery: "",
  category: 0,
  status: "loading",
  hasMore: true,
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state, action) => {
      state.status = "loading";
    });

    builder.addCase(fetchItems.fulfilled, (state, action) => {
      // TODO: i hate that code'
      const diffCategory = action.meta.arg.category != state.category;
      const diffSearch = action.meta.arg.searchQuery != state.searchQuery;

      return {
        ...state,
        items:
          diffCategory || diffSearch
            ? action.payload.page
            : state.items.concat(action.payload.page),
        totalPages: action.payload.total,
        currentPage: action.payload.current,
        searchQuery: action.meta.arg.searchQuery,
        category: action.meta.arg.category,
        hasMore: action.payload.total !== action.payload.current,
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
