import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
    totalItemsCount: 0,
    deliveryAddress: {},
    paymentMethod: {},
  },
  reducers: {
    addItem: (state, action) => {
      const item = state.items[action.payload.id];
      console.log(item);
      const quantity =
        item && item.hasOwnProperty("quantity")
          ? state.items[action.payload.id]?.quantity + 1
          : 1;
      console.log(quantity);
      state.items[action.payload.id] = { ...action.payload, quantity };
      state.totalItemsCount = state.totalItemsCount + 1;
    },
    removeItem: (state, action) => {
      const item = state.items[action.payload];
      if (!item) return;
      if (item.quantity > 1) {
        item.quantity -= 1;
        state.totalItemsCount--;
      } else {
        state.totalItemsCount--;
        delete state.items[action.payload];
      }
    },
    clearItem: (state, action) => {
      state.items = {};
      state.totalItemsCount = 0;
    },
    updateDeliveryAddress: (state, action) => {
      state.deliveryAddress = action.payload;
    },
    updatePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
  },
});

export const {
  addItem,
  removeItem,
  clearItem,
  updateDeliveryAddress,
  updatePaymentMethod,
} = cartSlice.actions;

export default cartSlice.reducer;
