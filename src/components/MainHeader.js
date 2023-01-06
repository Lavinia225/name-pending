import React from 'react'
import {NavLink} from 'react-router-dom'

function MainHeader(){
    return(
        <div id='mainheader'>
            <NavLink to="/game" exact>Game</NavLink>
            <NavLink to="/dev" exact>Dev Mode</NavLink>
        </div>
    )
}

export default MainHeader