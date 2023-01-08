import React from 'react'
import {NavLink} from 'react-router-dom'

function PlayerList(){
    return(
        <div id='list'>
            <NavLink to='dev/players/new'>New Player</NavLink>
        </div>
    )
}

export default PlayerList