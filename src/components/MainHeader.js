import React from 'react'
import {NavLink} from 'react-router-dom'

function MainHeader(){
    return(
        <nav>
            <NavLink to="/game" exact>Game</NavLink>
            <NavLink to="/dev" exact>Dev Mode</NavLink>
        </nav>
    )
}

export default MainHeader