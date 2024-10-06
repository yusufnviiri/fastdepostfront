import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const URL ="https://localhost:5000/api"

export const registerUser = createAsyncThunk('register',async(newUserData)=>{


 var res =await axios.post(`${URL}/auth/register`,newUserData)

 return res.data;
// .then((result) => {console.log(result);return result;})
// .catch((error) => console.error(error));
// console.log(res);
// return res;

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
            state.logginError=action.payload
        },
        },
        extraReducers:(builder)=>{
            builder.addCase(registerUser.fulfilled,(state,action)=>{

                if(action.payload&&action.payload.succeeded===false){
                    state.logginError=action.payload.errors[0].description
                }
                // if(action.payload==null)
                // {
                //     state.logginError="success!!"
                // }

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
         


          
        }
})

export const {add,setLoginError}=ApiSlice.actions;
export default ApiSlice.reducer;