import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const URL ="https://localhost:5000/api"
let token = ""

const getToken =  () => {
    token =  sessionStorage.getItem("token"); 
    return token;
  };

    // add excell file
    export const addExcelFile = createAsyncThunk('fetchExcel',async(excelFile)=>{
      token =  getToken();
      const formData = new FormData();
      formData.append('file',excelFile)


      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      var res =await axios.post(`${URL}/deposits/fetchExceldata`,formData,config)
      return res.data;
     })
  // create deposit
  export const createDeposit = createAsyncThunk('deposit',async(deposit)=>{
    token =  getToken();
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    var res =await axios.post(`${URL}/deposits/create`,deposit,config)
    return res.data;
   })
    // get deposits 
   export const getMemberDeposits = createAsyncThunk('deposits', async () => {
    token =  getToken();
    const config = {
      headers: { Authorization: `Bearer ${token}` },      
    };
    const res = await axios.get(`${URL}/deposits/userDeposits`, config);
    return res.data;
})

 // create withdraw
 export const createWithdraw = createAsyncThunk('withdraw',async(withdraw)=>{
    token =  getToken();
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    var res =await axios.post(`${URL}/withdraws/create`,withdraw,config)
    return res.data;
   })
       // get withdraws
       export const getMemberWithdraws = createAsyncThunk('withdraws', async () => {
        token =  getToken();
        const config = {
          headers: { Authorization: `Bearer ${token}` },      
        };
        const res = await axios.get(`${URL}/withdraws/userWithdraws`, config);
        return res.data;
    })
// register user
export const registerUser = createAsyncThunk('register',async(newUserData)=>{
 var res =await axios.post(`${URL}/auth/register`,newUserData)
 return res.data;
})
//login user
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
            builder.addCase(createDeposit.fulfilled,(state,action)=>{
                state.logginError="success!!"
            })
            builder.addCase(getMemberDeposits.fulfilled, (state, action) => {
                state.deposits = action.payload;
              }); 
            
              builder.addCase(getMemberWithdraws.fulfilled, (state, action) => {
                state.withdraws = action.payload;
              }); 
              builder.addCase(createWithdraw.fulfilled,(state,action)=>{
                state.logginError="success!!"
            })  
            builder.addCase(addExcelFile.fulfilled,(state,action)=>{
              state.logginError="success!!"
          })       
        }
})

export const {add,setLoginError}=ApiSlice.actions;
export default ApiSlice.reducer;