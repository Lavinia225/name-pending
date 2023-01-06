import React from 'react'
import {NavLink} from 'react-router-dom'

function DevMode(){
    return(
        <div id="dev">
            <NavLink to='/players' exact>Players</NavLink>
            <NavLink to='dev/mobs' exact>Mobs</NavLink>
        </div>
    )
}

export default DevMode