import { useState } from "react"



function Animation(){
    const[toggle, setToggle] = useState<boolean>(false)
    const toggleHandler=()=>{
        setToggle(prevState => !prevState)
        console.log(toggle)
    }
    return(
        <div>
            <button className="primary" onClick={toggleHandler}>{toggle?'true':'false'}</button>
        </div>
    )
}

export default Animation