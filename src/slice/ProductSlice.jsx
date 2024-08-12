import { createSlice } from "@reduxjs/toolkit";
export const STATUSES = Object.freeze({
    IDLE:'ideal',
    LOADING:'loading',
    SUCCEEDED:'succeeded',
    FAILED:'failed'
});

const productSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    reducers:{
        setProducts:(state,action)=>{
            state.data=action.payload;
        },
        setStatus:(state,action)=>{
            state.status=action.payload;
        }

    }
});

export const {setProducts,setStatus}=productSlice.actions;

export default productSlice.reducer;

//middleware


export function fetchProducts(){
    return async function fetchProductsThunk(dispatch){
        dispatch(setStatus(STATUSES.LOADING));
        try{
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            dispatch(setProducts(data));
            dispatch(setStatus(STATUSES.SUCCEEDED));
        }
        catch(error){
            dispatch(setStatus(STATUSES.FAILED));
        }
    }
}
