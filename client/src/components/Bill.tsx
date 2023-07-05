import App from '../store/App'
import store from '../store/index'
// import Count from './Count'
import {Provider} from 'react-redux'




function Bill(){
    return(
        <div>
            <h1>Bill</h1>
            {/* <Count/> */}
            <Provider store={store}>
                <App/>
            </Provider>
        </div>
    )
}


export default Bill