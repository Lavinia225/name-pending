import React from 'react'
import {NavLink, Switch, Route} from 'react-router-dom'
import EntityList from './EntityList'


function DevMode({mobs, players}){
    return(
        <div id="dev">
            <nav>
            <NavLink to='/dev/players' exact>Players</NavLink>
            <NavLink to='/dev/mobs' exact>Mobs</NavLink>
            </nav>
            <Switch>
                <Route path='/dev/players'>
                    <EntityList players={players}/>
                </Route>
                <Route path='/dev/mobs'>
                    <EntityList mobs={mobs}/>
                </Route>
            </Switch>
        </div>
    )
}

export default DevMode