

interface Greet{
    name: string
}


function Greeting({name}:Greet){
    return(
        <div>
            <h1>{name}</h1>
        </div>
    )
}

export default Greeting