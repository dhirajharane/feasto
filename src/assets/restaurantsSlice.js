
import { createSlice } from "@reduxjs/toolkit";

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: {
    all: [],
    filtered: [],
  },
  reducers: {
    addRestaurants: (state, action) => {
      state.all = action.payload;
      state.filtered = action.payload;
    },
    filterRestaurants: (state, action) => {
      state.filtered = state.all.filter((restaurant) =>
        restaurant.info.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    filterTopRated: (state) => {
      state.filtered = state.all.filter(
        (restaurant) => restaurant.info.avgRating > 4.2
      );
    },
    resetFilter: (state) => {
      state.filtered = state.all;
    },
  },
});

export const { addRestaurants, filterRestaurants, filterTopRated, resetFilter } = restaurantsSlice.actions;
export default restaurantsSlice.reducer;