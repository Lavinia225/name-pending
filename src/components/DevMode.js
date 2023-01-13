import React from 'react'
import {NavLink, Switch, Route} from 'react-router-dom'
import PlayerList from './PlayerList'
import MobList from './MobList'


function DevMode({mobs, players}){
    return(
        <div id="dev">
            <NavLink to='/dev/players' exact>Players</NavLink>
            <NavLink to='/dev/mobs' exact>Mobs</NavLink>
            <Switch>
                <Route path='/dev/players'>
                    <PlayerList players={players}/>
                </Route>
                <Route path='/dev/mobs'>
                    <MobList mobs={mobs}/>
                </Route>
            </Switch>
        </div>
    )
}

export default DevMode