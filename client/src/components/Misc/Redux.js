// import { Action } from '@remix-run/router'
import {createStore} from 'redux'


function counterReducer(state = {value: 0}, action){
    switch(action.type){
        case 'counter/incremented':
            return {value: state.value + 1}
        case 'counter/decremented':
            return{value: state.value - 1}
        default:
            return state
    }
}
const store = createStore(counterReducer)

// var store = createStore(counterReducer, enableDevTools());

// function enableDevTools() {
//     return (
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// }
store.subscribe(()=>console.log(store.getState()))


store.dispatch({type: 'counter/incremented'}) 
store.dispatch({type: 'counter/incremented'}) 
