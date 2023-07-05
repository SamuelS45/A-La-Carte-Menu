import axios from 'axios'
import { useState } from 'react'
import newIP from '../IP'
// import trigger from '../trigger'
interface Data{
    data:{
        name:string,
        img:string,
        price:number,
        _id:string,
    },
    tableId:string,
}
// type TableId= {
//     tableId:{
//         table:string
//     }
// }

function Card({data, tableId}:Data){
    

    const{name,price,img,_id} = data||{}
    const TableID = tableId
    const[count, setCount]=useState<number>(0)
    const handleOrder=()=>{
        if(tableId.length===0){
            alert('Select Table')
        }else{
            // setToggle(toggle!=toggle)
            addOrder()
            setCount(count+1)
        }
    }
    const handleDelete=()=>{
        if(count<=0){
            console.log('can not delete anymore')
        }else{
            // setToggle(toggle!=toggle)
            deleteOrder()
            setCount(count-1)
        }
    }
        const addOrder = ()=>{
        // setToggle(toggle!=toggle)
        // if(TableID.length===0){
        //     alert('select Table')
        // }
        // window.location.reload()
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
        axios(info).then((res)=>console.log(res.data)).catch((err)=>console.log(err))
        
    }
    const deleteOrder = ()=>{
        const info = {
            method:'get',
            url:`http://192.168.1.${newIP.ip}:3000/order/delete/${name}`,

        }
        axios(info).then(res=>console.log(res.data)).catch((err)=>{console.log(err)})

    }
    return(
        <div>
            <div className="row">

                    <div className="card">
                        <div className="section">
                            {/* <h5>{id}</h5> */}
                            <h1>{name}</h1>
                            {/* <h1>{_id}</h1> */}
                            {/* <h1>{TableID}</h1> */}
                            <div style={{
                                width:'250px',
                                height:'200px',
                                overflow: 'hidden',
                                // display:'flex',
                                // justifyContent:'center'
                            }}>
                                <img alt="img" src={img} className="section media"></img>
                            </div>
                                <h1>{price} Baht</h1>
                            <div className='row'>

                                {/* <button onClick={()=>handleOrder()} className="primary">Add</button>
                                <h1>{count}</h1>
                                <button onClick={()=>handleDelete()} className="secondary">Delete</button> */}
                            </div>
                        </div>
                        
                    </div>
                </div>
        </div>
    )
}


export default Card