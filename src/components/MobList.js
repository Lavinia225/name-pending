import React from 'react'
import {NavLink, Route} from 'react-router-dom'
import NewEntity from './NewEntity'
import Mob from './Mob'

function MobList({mobs}){
    return(
        <div id='list'>
            <NavLink to='/dev/mobs/new'>New Mob</NavLink>
            <Route path='/dev/mobs/new'>
                <NewEntity editingMob={true}/>
            </Route>
            {mobs ? mobs.map(mob => <Mob key={mob.id} mob={mob} />) : <p>Loading...</p>}
        </div>
    )
}

export default MobList