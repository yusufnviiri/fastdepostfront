import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const URL ="https://localhost:5000/api"

export const registerUser = createAsyncThunk('register',async(newUserData)=>{
 var res =await axios.post(`${URL}/auth/register`,newUserData)
 return res.data;
})
export const loginUser = createAsyncThunk('login',async(userDetails)=>{
    var res =await axios.post(`${URL}/auth/login`,userDetails)
    console.log(res)
    return res})

export const ApiSlice=createSlice({
    name:"fastdepsoit",
    initialState: {
        age: 2, notification: ' ', user: [], logginError: '', loans: [], loanTypes: [],allLoans:[], userData: {}, accounts: [], withdraws: [], deposits: [], shares: [],
      },
    reducers:{
        add:(state)=>{
            state.age++
        }, setLoginError: (state, action) => {
            state.logginError=action.payload
        },
        },
        extraReducers:(builder)=>{
            builder.addCase(registerUser.fulfilled,(state,action)=>{

                if(action.payload&&action.payload.succeeded===false){
                    state.logginError=action.payload.errors[0].description
               }  
            })
            builder.addCase(registerUser.rejected,(state,action)=>{
                if(action.payload&&action.payload.succeeded===false){
                    state.logginError=action.payload.errors[0].description
                }
                 if(!action.payload)
                {
                  
                    state.logginError="success!!"
                }
            })
            builder.addCase(loginUser.fulfilled,(state,action)=>{
                state.logginError="success!!"
                sessionStorage.clear();
                // sessionStorage.setItem("UserName",JSON.stringify(action.payload.data.userName))
                 sessionStorage.setItem("UserName",action.payload.data.userName)
                sessionStorage.setItem("token",action.payload.data.token)
            })
            builder.addCase(loginUser.rejected,(state,action)=>{
                state.logginError="Wrong password or email"
            })


          
        }
})

export const {add,setLoginError}=ApiSlice.actions;
export default ApiSlice.reducer;