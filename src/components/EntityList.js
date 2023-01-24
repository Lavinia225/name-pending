import React from 'react'
import {NavLink, Route, Switch} from 'react-router-dom'
import EntityForm from './EntityForm'

function EntityList({players, mobs}){
    return(
        <div id='list'>
            <NavLink to='/dev/players/new'>New Player</NavLink>
            <NavLink to='/dev/mobs/new'>New Mob</NavLink>
            <Switch>
                <Route path='/dev/players/new'>
                    <NewEntity editingMob={false}/>
                </Route>
                <Route path='/dev/mobs/new'>
                    <NewEntity editingMob={true} />
                </Route>
                <Route exact path='/dev/players'>
                    {/*Players */}
                </Route>
                <Route exact path='/dev/mobs'>
                    {/*Mobs */}
                </Route>
            </Switch>
        </div>
    )
}