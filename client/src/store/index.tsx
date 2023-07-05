import { configureStore } from "@reduxjs/toolkit"
import counterReducer from './count.slice'



const store = configureStore(
    {
        reducer:{
            counter: counterReducer
        }
    }
)

export default store