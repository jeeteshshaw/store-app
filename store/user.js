import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { Request } from "../config/Request";


export const getUserProfile = createAsyncThunk(
    "user/getUserProfile",
    async(_,{rejectWithValue})=>{
        // console.log("getUserProfile");
        try {
            const res = await Request("get","/auth/viewprofile")
            return res.data.info
        } catch (error) {
            console.log("user/getUserProfile",error.response.data);
            rejectWithValue(JSON.stringify(error))
        }

        
    }
)


const slice = createSlice({
    name:"user",
    initialState:{
        loading:false,
        userInfo:null
    },
    reducers:{
      
    },
    extraReducers:{
        [getUserProfile.pending]:(state)=>{
            state.loading=true;
        },
        [getUserProfile.fulfilled]:(state,{payload})=>{
            state.loading=false;
            state.userInfo=payload;
        }
    }
});

export const {} = slice.actions;

export default slice.reducer;