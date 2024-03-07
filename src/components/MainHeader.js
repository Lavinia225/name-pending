import React from 'react'
import {NavLink, useLocation} from 'react-router-dom'

function MainHeader(){
    const {pathname} = useLocation()

    return(
        <nav>
            {pathname !== '/' ? <NavLink to="/">Home</NavLink> : null}
            <NavLink to="/game" exact>Game</NavLink>
            <NavLink to="/dev" exact>Dev Mode</NavLink>
        </nav>
    )
}

export default MainHeader