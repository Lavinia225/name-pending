import React from 'react'
import {NavLink, Route} from 'react-router-dom'
import EntityForm from './EntityForm'
import Entity from './Entity'

function EntityList({players, mobs}){
    if(players === undefined && mobs === undefined){
        return (<h1>Loading...</h1>)
    }

    
    return(
        <div id='list'>
            <nav>
            <NavLink to={`/dev/${players ? 'players' : 'mobs'}/new`}>New {players ? 'Player' : 'Mob'}</NavLink>
            </nav>
                <Route path={`/dev/${players ? 'players' : 'mobs'}/new`}>
                    <EntityForm editingMob={mobs ? true : false}/>
                </Route>
            {players ? players.map(player => <Entity key={player.id} entity={player}/>) : mobs.map(mob => <Entity key={mob.id} entity={mob} isMob={true} />)}
        </div>
    )
}

export default EntityList