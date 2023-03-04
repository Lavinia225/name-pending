import React, {useState} from 'react'
import {NavLink, Route, useHistory} from 'react-router-dom'
import EntityForm from './EntityForm'
import Entity from './Entity'

function EntityList({players, mobs}){
    const [editing, setEditing] = useState(0)
    const history = useHistory()

    if(players === undefined && mobs === undefined){
        return (<h1>Loading...</h1>)
    }

    function handleEdit(id){
        setEditing(id)
        history.push(`/dev/${mobs ? 'mobs' : 'players'}/:${id}/edit`)
    }
    
    
    return(
        <div id='list'>
            <nav>
            <NavLink to={`/dev/${players ? 'players' : 'mobs'}/new`}>New {players ? 'Player' : 'Mob'}</NavLink>
            </nav>
                <Route path={`/dev/${players ? 'players' : 'mobs'}/new`}>
                    <EntityForm editingMob={mobs ? true : false}/>
                </Route>
            {players ? players.map(player => <Entity key={player.id} entity={player} editing={player.id === editing ? true : false} handleEditClick={handleEdit}/>) 
            : mobs.map(mob => <Entity key={mob.id} entity={mob} isMob={true}  editing={mob.id === editing ? true :false} handleEditClick={handleEdit}/>)}
        </div>
    )
}

export default EntityList