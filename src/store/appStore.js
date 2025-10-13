import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import restaurantsReducer from "./slices/restaurantsSlice";

const appStore=configureStore({
    reducer:{
        cart:cartReducer,
        restaurants:restaurantsReducer
    },
});

export default appStore;