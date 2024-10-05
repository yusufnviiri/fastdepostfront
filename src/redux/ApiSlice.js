import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const URL ="https://localhost:5000/api"

export const registerUser = createAsyncThunk('register',async(newUserData)=>{
var res = await axios.post(`${URL}/auth/register`)
return res.data;

})

export const ApiSlice=createSlice({
    name:"fastdepsoit",
    initialState: {
        age: 2, notification: ' ', user: [], logginError: '', loans: [], loanTypes: [],allLoans:[], userData: {}, accounts: [], withdraws: [], deposits: [], shares: [],
      },
    reducers:{
        add:(state)=>{
            state.age++
        }, setLoginError: (state, action) => {
            state.logginError = action.payload;
          },},extraReducers:(builder)=>{
            builder.addCase(registerUser.fulfilled,(state,action)=>{
                state.notification=action.payload
            })
        }
})

export const {add,setLoginError}=ApiSlice.actions;
export default ApiSlice.reducer;