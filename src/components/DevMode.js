import React from 'react'
import {NavLink, Switch, Route} from 'react-router-dom'
import PlayerList from './PlayerList'
import MobList from './MobList'


function DevMode(){
    return(
        <div id="dev">
            <NavLink to='/dev/players' exact>Players</NavLink>
            <NavLink to='/dev/mobs' exact>Mobs</NavLink>
            <Switch>
                <Route path='/dev/players'>
                    <PlayerList />
                </Route>
                <Route path='/dev/mobs'>
                    <MobList />
                </Route>
            </Switch>
        </div>
    )
}

export default DevMode