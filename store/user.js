import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import RevGeolocation from "../utility/RevGeolocation";


export const getUserLocation = createAsyncThunk(
    "user/getUserLocation",
    async({lat,lng},{rejectWithValue})=>{
        // console.log("getUserLocation");
        try {
            const res = await RevGeolocation(lat, lng);
            // console.log("getUserLocation fulfilled",res.results[0]);
            console.log("getUserLocation fulfilled");

            return res.results[0]
            
        } catch (error) {
            console.log("user/getUserLocation",{error});
            rejectWithValue(JSON.stringify(error))
        }

        
    }
)


const slice = createSlice({
    name:"user",
    initialState:{
        location:{},
        language:"",
        geolocation:{},
        loading:false

    },
    reducers:{
        LoginSuccessfully:(state)=>{
            state.token = "1234567890"
        },
        LogOutSuccessfully:(state)=>{
            state.token = ""
        },
        setGeolocation:(state,{payload})=>{
            state.geolocation = payload
        },
    },
    extraReducers:{
        [getUserLocation.pending]:(state)=>{
            state.loading=true;
        },
        [getUserLocation.fulfilled]:(state,{payload})=>{
            state.loading=false;
            state.location=payload;
        }
    }
});

export const {LoginSuccessfully,setGeolocation,LogOutSuccessfully} = slice.actions;

export default slice.reducer;