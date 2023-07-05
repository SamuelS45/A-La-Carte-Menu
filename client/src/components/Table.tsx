import TableIcon from "./TableIcon"
interface TableData{
    id: number,
    route:string
}

const tableArray: TableData[]=[
    {
        id:1,
        route:'/1'
    },
    {
        id:2,
        route:'/2'
    }
]


function Table(){
    const listTable = tableArray.map(item=>
        
    <div>
        <TableIcon data={item}/>
    </div>)
    
    return(
        <div>
            <h1>Table</h1>
            <div className="row">
                {listTable}
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Table