import { createSlice } from "@reduxjs/toolkit";



const slice = createSlice({
    name:"auth",
    initialState:{
        token:""
    },
    reducers:{
        LoginSuccessfully:(state)=>{
            state.token = "1234567890"
        },
        LogoutSuccessfully:(state)=>{
            state.token = ""
        },
    }
});

export const {LoginSuccessfully,LogoutSuccessfully} = slice.actions;

export default slice.reducer;