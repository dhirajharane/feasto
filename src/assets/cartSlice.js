import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    isCart: false,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      // Remove by id, matching the id structure in your cart
      state.items = state.items.filter(
        (item) => item.card.info.id !== action.payload
      );
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
    setIsCart: (state, action) => {
      state.isCart = action.payload;
    },
  },
});

export const { addItem, removeItem, clearCart, setIsCart } = cartSlice.actions;
export default cartSlice.reducer;