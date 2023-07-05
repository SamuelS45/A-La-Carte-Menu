import { useReducer } from "react"


function Count(){

    interface Action{
        type:string,
    }
    interface Type{
        count:number,
    }
    function reducer(state:Type, action:Action){
        switch (action.type){
            case 'ADD': return {count: state.count + 1}
            case 'SUB': return {count: state.count - 1}
            case 'ADD10': return {count: state.count +10}
            case 'SUB10': return {count: state.count - 10}
            case 'RESET': return {count: 0}
            default: return state
        }
    }

    const[state, dispatch] = useReducer(reducer, {count: 0})

    return(
        <div>
            <h1>Redux Counter</h1>
            <h1>{state.count}</h1>
            <button onClick={()=>dispatch({type: 'ADD'})}>Add</button>
            <button onClick={()=>dispatch({type: 'SUB'})}>Sub</button>
        </div>
    )
}

export default Count