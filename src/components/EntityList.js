import React from 'react'
import {NavLink, Route, Redirect} from 'react-router-dom'
import EntityForm from './EntityForm'
import Entity from './Entity'

function EntityList({players, mobs}){
    /*if(players === undefined && mobs === undefined){
        return (<Redirect to='' />)
    }*/ //Change this to checking if data is loading

    console.log(players)
    
    return(
        <div id='list'>
            <NavLink to={`/dev/${players ? 'players' : 'mobs'}/new`}>New {players ? 'Player' : 'Mob'}</NavLink>
                <Route path={`/dev/${players ? 'players' : 'mobs'}/new`}>
                    <EntityForm editingMob={mobs ? true : false}/>
                </Route>
            {players ? players.map(player => <Entity key={player.id} entity={player}/>) : mobs.map(mob => <Entity key={mob.id} entity={mob} isMob={true} />)}
        </div>
    )
}

export default EntityList