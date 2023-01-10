import React from 'react'
import {NavLink} from 'react-router-dom'
import NewEntity from './NewEntity'

function PlayerList(){
    return(
        <div id='list'>
            <NavLink to='dev/players/new'>New Player</NavLink>
            <NewEntity editingMob={false}/>
        </div>
    )
}

export default PlayerList