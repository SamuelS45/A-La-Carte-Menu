import { useDispatch } from "react-redux"
import { addOrder } from "./orders.slice"

interface item{
    data:{
        name:string,
        img:string,
        id:number
    }
    // handler:HTMLButtonElement
}


function Card({data}:item){
    const{name,img, id}= data
    const dispatch = useDispatch()
    // const selectHandler = ()=>{
    //     console.log(id)
    // }
    return(
        <div className="row">

        <div className="card">
            <div className="section">
                <h5>{id}</h5>
                <h1>{name}</h1>
                <div style={{
                    width:'250px',
                    height:'200px',
                    overflow: 'hidden',
                    // display:'flex',
                    // justifyContent:'center'
                }}>
                    <img alt="img" src={img} className="section media"></img>
                </div>
            <button onClick={()=>dispatch(addOrder(data))} className="primary">Add</button>
            </div>
            
        </div>
        </div>
    )
}


export default Card