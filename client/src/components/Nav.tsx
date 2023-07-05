// import React from "react";

import { NavLink, Outlet } from "react-router-dom"
import {MdFoodBank as Logo} from 'react-icons/md'

function Nav (){
    return(
        <div>
            {/* <img src=""></img> */}
            <div style={{
                display:'flex',
                alignItems:'center'
            }}>
                <Logo size={100}/>
                <h1>A la Carte Systems</h1>
            </div>
                {/* <nav>
                    <span>

                    </span>
                </nav> */}
            <header>
                    <NavLink className={'button'} to={'/'}>Menu</NavLink>
                    <NavLink className={'button'} to={'/bill'}>Bill</NavLink>

            </header>
            <Outlet/>
        </div>
    )
}

export default Nav