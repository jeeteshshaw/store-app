import { createSlice } from "@reduxjs/toolkit";



const slice = createSlice({
    name:"common",
    initialState:{
        token:"",
        cart:false
    },
    reducers:{
        setCart:(state,{payload})=>{
            state.cart=payload
        }
    }
});

export const {setCart} = slice.actions;

export default slice.reducer;