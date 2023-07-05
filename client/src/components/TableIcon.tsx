import { useEffect, useState } from 'react'
import './tableicon.css'
import { useNavigate } from 'react-router-dom'
interface tableIconData{
    data:{
        id:number,
        route:string
    }
}
// type tableNum={
//     num: number
// }

function TableIcon({data}:tableIconData){
    // const[table, setTable]= useState<string>()
    const navigate = useNavigate();
    const{id, route} = data;
    // const orderRequest = (id:number)=>{
    //     axios.get(`https://localhost:3000/${id}`).then(res=>data).then(data=>setTable(data))
    // }
    // useEffect(()=>{
    //     orderRequest()
    // },[])
    return(
        <button onClick={()=>{navigate(route)}} className='btn'>

            <div id='table-group'>
                <div id='chair'></div>
                <div id='inner-chair'>
                <div id='chair'></div>

                <div id="table">
                    <h1>{id}</h1>
                </div>
                <div id='chair'></div>
                </div>
                <div id='chair'></div>
            </div>
        </button>
    )
}


export default TableIcon