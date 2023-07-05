interface Data{
    key:string,
    img:string,
    name:string,
    _id:string
}



function OrderCard({data}:Data){
    const {name,img,_id,key} = data||{}
    return(
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
        <button className="secondary"> Delete</button>
        </div>
        </div>
        </div>
    )
}


export default OrderCard