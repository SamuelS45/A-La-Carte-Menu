// import React, {useState} from 'react'
// import Card from './ordering/Card'
// import FluidCard from './FluidCard'
import { Provider } from 'react-redux'
import App from '../components/ordering/App'
import orders from './ordering/orders'
import './menu.css'
import Table from './Table'
import { useState } from 'react'
// import orders from './ordering/orders'
// import { stat } from 'fs'


function Menu(){
    // const[food, setFood] = useState([])
    // const getFood=()=>{
    //     axios.get('')
    // }
    return(
        <div>
            <h1>Menu</h1>
            <div className='container'>
                <div>
                    <Table/>
                </div>
                <div className=''>
                    <Provider store={orders}>
                        <App/>
                    </Provider>
                </div>
                <div className='row'>
                    <h1>Hello</h1>
                </div>
            </div>
            
        </div>
    )
}

export default Menu