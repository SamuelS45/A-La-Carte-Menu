import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type } from "os";


type Item = {
    name:string,
    img:string,
    id:number
}
interface orderState{
    orders:Item[]
}

const initialState: orderState[] = []
// const initialState: orderState = {
//     orders:[]
// }

interface Data{
        name:string,
        img:string,
        id:number
}
const ordersSlice = createSlice(
    {
        name:'orders',
        initialState,
        reducers:{
            addOrder: (state, action: PayloadAction<orderState>)=>{state.push(action.payload)},
            deleteOrder:(state, action:PayloadAction<orderState>)=>{state.pop(action.payload)}
            // addOrder: (state, action: PayloadAction<Data>)=>{state.orders.push(action.payload)}
        }
    }
)


export const {addOrder, deleteOrder} = ordersSlice.actions
export default ordersSlice.reducer
// export type RootState = ReturnType<typeof initialState.getState></typeof>