import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";



export const ApiSlice=createSlice({
    name:"fastdepsoit",
    initialState:{age:7},
    reducers:{
        add:(state)=>{
            state.age++
        },


        
    }
})

export const {add}=ApiSlice.actions;
export default ApiSlice.reducer;