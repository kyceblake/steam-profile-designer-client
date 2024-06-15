import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: {
    avatar: null,
    frame: null,
    background: null,
    profile: null,
  },
};

export const selectedItems = createSlice({
  name: "selectedItems",
  initialState,
  reducers: {
    setValue: (state, action) => {
      const item = action.payload;

      switch (item.community_item_class) {
        case 3:
          return {
            ...state,
            active: {
              ...state.active,
              background: item,
            },
          };
        case 14:
          return {
            ...state,
            active: {
              ...state.active,
              frame: item,
            },
          };
        case 15:
          return {
            ...state,
            active: {
              ...state.active,
              avatar: item,
            },
          };
        case 8:
          return {
            ...state.state,
            active: {
              ...state.active,
              profile: item,
            },
          };
        default:
          break;
      }
    },
  },
});

export const { setValue } = selectedItems.actions;

export const getSelectedItems = (state) => state.selectedItems.active;

export default selectedItems.reducer;
