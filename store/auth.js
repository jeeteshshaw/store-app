import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";



const slice = createSlice({
    name:"auth",
    initialState:{
        token:""
    },
    reducers:{
        LoginSuccessfully:(state,{payload})=>{
            console.log("LoginSuccessfully");
            state.token = payload.token;
            // AsyncStorage.setItem("@token",payload.token);
        },
        LogoutSuccessfully:(state)=>{
            state.token = ""
        },
    }
});

export const {LoginSuccessfully,LogoutSuccessfully} = slice.actions;

export default slice.reducer;