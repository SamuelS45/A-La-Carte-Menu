interface Data{
    data:{

        name: string,
        img: string,
        id:number
    }
}


function FluidCard({data}:Data){
    const{name, img, id} = data||{}
    return(
        <div  className="card">
            <h1 className="section">{id}</h1>
            <h1 className="section">{name}</h1>
            <div className="section" style={{
                    width:'250px',
                    height:'200px',
                    overflow: 'hidden',
                    // display:'flex',
                    // justifyContent:'center'
                }}>

            <img alt="img" src={img}></img>
                </div>
                <div className="row">

                <button className="secondary">X</button>
                </div>
            </div>
        
    )
}



export default FluidCard