import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchURL = import.meta.env.VITE_ITEMS_FETCH_URL;

const initialState = {
  items: [],
  pages: 0,
  page: 0,
  hasMore: true,
  status: "pending", // "pending", "fulfilled", "rejected"
  error: null,
  activeItems: [], // only selected
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    toggleActiveItem: (state, action) => {
      console.log(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state) => {
      state.status = "pending";
    });

    builder.addCase(fetchItems.fulfilled, (state, action) => {
      const res = action.payload;
      const meta = action.meta;

      if (!res.items) return state;

      return {
        ...state,
        status: "fulfilled",
        items: state.items.concat(res.items),
        pages: res.pages,
        page: meta.arg.page,
        hasMore: meta.arg.page !== res.pages,
      };
    });

    builder.addCase(fetchItems.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.error.message ?? "Unknown Error";
    });
  },
});

export const fetchItems = createAsyncThunk(
  "items/fetchItems",
  async (params) => {
    const { type, search, page } = params;
    const { data } = await axios.get(fetchURL, {
      params: {
        page: page,
        type,
        search,
      },
    });

    return JSON.parse(data);
  }
);

export const selectItems = (state) => state.items;

export const { toggleActiveItem } = itemsSlice.actions;
export default itemsSlice.reducer;
