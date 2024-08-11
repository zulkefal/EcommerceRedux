import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
    },
    reducers: {
        add: (state, action) => {
            state.products.push(action.payload);
        },
        removefromCart: (state, action) => {
            state.products = state.products.filter((product) => product.id !== action.payload);
        }
    }
});

export const { add, removefromCart } = cartSlice.actions;
export default cartSlice.reducer;