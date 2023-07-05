import { useState } from "react"
// import { useRoutes } from "react-router-dom"



function Counter(){
    const[num, setNum] = useState(0)
    const[name, setName] = useState<string[]>(['Sam'])
    const[list, setList] = useState<number[]>([])
    const countHandler = ()=>{
        setNum((num)=>num+20)
        setName(name=>[...name, ' Clair'])
        setList(list=>[...list, num])
    }
    const listList = list.map(item=><li key={item}>{item}</li>)
    return(
        <div>
            <div style={{
                width:'100px',
                height:`${num}px`,
                backgroundColor:'blue',
                transition:'.5s',
            }}></div>
            <ul>
                {listList}
            </ul>
            <h1></h1>
            <p>{name}</p>
            <p>{list}</p>
            <button className="primary" onClick={countHandler}>{num}</button>
        </div>
    )
}

export default Counter