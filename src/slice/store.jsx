import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../slice/CartSlice'
import productReducer from '../slice/ProductSlice'
import ProductSlice from "../slice/ProductSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        ProductSlice: productReducer,
    },
});

export default store;