import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchURL = import.meta.env.VITE_ITEMS_FETCH_URL;

const initialState = {
  items: [],
  pages: 0,
  page: 0,
  status: "idle",
  error: null,
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state, action) => {
      state.status = "pending";
    });

    builder.addCase(fetchItems.fulfilled, (state, action) => {
      return {
        ...state,
        status: "fulfilled",
        items: state.items.concat(action.payload.page),
        pages: action.payload.pages,
        page: action.meta.arg.page,
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
    const { category, search, page } = params;
    const { data } = await axios.get(fetchURL, {
      params: {
        page,
      },
    });
    return JSON.parse(data);
  }
);

export const selectItems = (state) => state.items;

export default itemsSlice.reducer;
