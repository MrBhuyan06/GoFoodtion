import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
    totalItemsCount: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const item = state.items[action.payload.id];
      const quantitiy =
        item && item.hasOwnProperty("quantity")
          ? state.items[action.payload.id]?.quantity + 1
          : 1;
      state.items[action.payload.id] = { ...action.payload, quantitiy };
      state.totalItemsCount = state.totalItemsCount + 1;
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
