


import { useSelector, useDispatch } from "react-redux";

import {addOne, subOne} from './count.slice'





function App(){
    const dispatch = useDispatch()
    const count = useSelector(state=> state.counter.count)
    return(
        <div>
            <h1>Redux Counter</h1>
        <h1>{count}</h1>
        <div>
            <button onClick={()=>dispatch(addOne())}>Add</button>
            <button onClick={()=>dispatch(subOne())}>Sub</button>
        </div>
        </div>
    )
}


export default App