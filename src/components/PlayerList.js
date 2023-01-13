import React from 'react'
import {NavLink, Route} from 'react-router-dom'
import NewEntity from './NewEntity'

function PlayerList({players}){
    return(
        <div id='list'>
            <NavLink to='/dev/players/new'>New Player</NavLink>
            <Route path='/dev/players/new'>
                <NewEntity editingMob={false}/>
            </Route>
        </div>
    )
}

export default PlayerList