import { createSlice} from '@reduxjs/toolkit'


const initialState = {count: 0 }


const counterSlice = createSlice(
    {
        name:'counter',
        initialState,
        reducers:{
            addOne: state=>{state.count +=1},
            subOne: state=>{state.count-=1}
        }
    }
)

export const { addOne, subOne} = counterSlice.actions
export default counterSlice.reducer