import { configureStore } from "@reduxjs/toolkit";
import ordersReducer from './orders.slice'



const store = configureStore({
    reducer:{
        orders: ordersReducer
    }
})

export default store