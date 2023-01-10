import React from 'react'
import {NavLink, Route} from 'react-router-dom'
import NewEntity from './NewEntity'

function MobList(){
    return(
        <div id='list'>
            <NavLink to='/dev/mobs/new'>New Mob</NavLink>
            <Route path='/dev/mobs/new'>
                <NewEntity editingMob={true}/>
            </Route>
        </div>
    )
}

export default MobList