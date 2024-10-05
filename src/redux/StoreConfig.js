import { configureStore } from "@reduxjs/toolkit";
import ApiSlice from "./ApiSlice";



export  const Store = configureStore({
    reducer:{ApiSlice}

})
export default Store;