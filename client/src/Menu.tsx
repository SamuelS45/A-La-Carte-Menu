import axios from "axios"
import { useEffect, useState } from "react"
import Card from "./comp/Card"
import {FcRefresh as Refresh} from 'react-icons/fc'
import newIP from './IP'
import trigger from './Toggle'
import { createContext } from "vm"
interface Data{
    name:string,
    img:string,
    price:number,
    _id:string,
    // tableId:string
}
interface Order{
    _id:string,
    table:string,
    name:string,
    img:string,
    price:number,
    // tableId:string
}

interface TableData{
    _id:string,
    table:number
}
// interface Table{
//     tableId:{
//         table:string
//     }
// }
// const toggleContext = createContext()

function Menu(){
    // const[toggle,setToggle] = useState<boolean>(false)

    const[menuData,setMenuData] = useState<Array<Data>>([])
    const[tableData, setTableData] = useState<Array<TableData>>([])

    // This is Table Id being sent to childrent component 
    const[table,setTable] = useState<string>('')
    const[tableNum,setTableNum] = useState<number>(0)
    const[order,setOrder]=useState<Array<Order>>([])

    const handleTable = (_id:string,tableNum:number)=>{
        setTable(_id)
        setTableNum(tableNum)
        
        // setTimeout(()=>getOrder(),50)
    }

    const getFood=()=>{
        const info = {
            method:'GET',
            url:`http://192.168.1.${newIP.ip}:3000/menu`,
        }
        
        axios(info).then((res)=>setMenuData(res.data)).catch((err)=>{console.log(err)})
    }
    const getTable = async ()=>{
        const info ={
            method:'GET',
            url:`http://192.168.1.${newIP.ip}:3000/table`
        }
        await axios(info).then((res)=>setTableData(res.data)).catch((err)=>{console.log(err)})
    }
    const getOrder= ()=>{
        // if(table.length===0){
        //     alert('Select Table')
        // }else{
        // }
            const info = {
                method:'GET',
                url:`http://192.168.1.${newIP.ip}:3000/order/${table}`
                
            }
            axios(info).then((res)=>setOrder(res.data)).catch((err)=>{console.log(err)})
            // window.location.reload()
    }
    // const Card = ()=>{
    //     return(
    //         <h1>Hello</h1>
    //     )
    // }
    useEffect(()=>{
        getFood()
        getTable()
        getOrder()
    },[table])

    const addOrder= async (TableID:string,name:string,img:string,price:number)=>{
        // setToggle(toggle!=toggle)
        setTimeout(()=>getOrder(),50)
        // getOrder()
        const info = {
            method:'POST',
            url:`http://192.168.1.${newIP.ip}:3000/order/`,
            data:{
                table:TableID,
                name:name,
                img:img,
                price:price
            }
            
        }
        await axios(info).then((res)=>console.log(res.status)).catch((err)=>console.log(err))
    }

    const deleteOrder = async (name:string)=>{
        setTimeout(()=>getOrder(),50)
        // getOrder()
        const info = {
            method:'get',
            url:`http://192.168.1.${newIP.ip}:3000/order/delete/${name}`,

        }
        await axios(info).then(res=>console.log(res.data)).catch((err)=>{console.log(err)})
    }
    const listOrder = order.map(item=>

    <div key={item._id}>
        <div className="card">

        <div className="section dark">
            <div style={{
                overflow:'hidden',
                width:'100px',
                height:'100px',
                padding:'10px'
            }}>

            <img src={item.img} alt={item.name} />
            </div>
        {item.name}
        <div></div>
        <button onClick={()=>deleteOrder(item.name)} className="secondary"> Delete</button>
        </div>
        </div>
        </div>
    )


    const listMenu = menuData.map(item=>
        <button key={item._id} onClick={()=>addOrder(table,item.name,item.img,item.price)}>
    <Card  data={item} tableId={table}/>
        </button>
    )

    const listTable = tableData.map(item=>
    <div key={item._id}>
        <button className={'tertiary'} onClick={()=>handleTable(item._id, item.table)}>
            Table
        <h1>{item.table}</h1>
        </button>
    </div>)

    return(
        <>
        <div style={{
            transition:'0.5s'
        }}>
            <h1>Table</h1>
            <div className="row">
                {listTable}
            </div>
                {/* <button onClick={()=>getOrder()}>Show order of Table {tableNum}</button> */}
            <div className="row">
                <div className="col-sm">
            <h1>Menu</h1>

                {listMenu}
                </div>
                <div className="col-sm">
            <h1>{tableNum===0?'No Table Has been Selected':`Table ${tableNum} Orders`}</h1>
            <div className="row">
                {listOrder}
            </div>
                </div>
            </div>
            {/* <Card/> */}
        </div>
        </>
    )
}

export default Menu