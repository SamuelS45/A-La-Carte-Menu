import { useSelector } from "react-redux"
import Card from "./Card"
import {useEffect} from 'react'
import FluidCard from "./FluidCard"

interface FoodItem{
    name: string,
    img: string,
    id:number
}

const Food: FoodItem[]=[
    {
        name:'Oatmeal',
        img:'https://images.pexels.com/photos/90894/pexels-photo-90894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        id:1
    },
    {
        name:'Egg',
        img:'https://images.pexels.com/photos/6294377/pexels-photo-6294377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        id:2
    }
]

interface Data{
        name: string,
        img: string,
        id:number

}

type Item = {
    name:string,
    img:string,
    id:number
}
interface orderState{
    orders:Item[]
}

function App(){
    const order = useSelector((state:orderState) => state)
    // const order = useSelector((state:orderState) => state.orders)
    useEffect(()=>{
        console.log(order)
    },[order])
    const listFood = Food.map(item=>
        <Card key={item.id} data={item}/>
    )

    const list = order.orders.map((item:FoodItem)=><FluidCard key={item.img} data={item}/>)||{}
    return(
        <div>
            <div className="row">
                {listFood}
            </div>
            <div>
                <h1>Orders</h1>
                    <div className="row">
                            {order.orders.length!==0?list:<div className="spinner"></div>}
                    </div>
                </div>
            </div>
        

    )
}



export default App