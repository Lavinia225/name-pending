import React from 'react'
import {NavLink, Route} from 'react-router-dom'
import EntityForm from './EntityForm'

function EntityList({players, mobs}){
    return(
        <div id='list'>
            <NavLink to={`/dev/${players ? 'players' : 'mobs'}/new`}>New Player</NavLink>
                <Route path={`/dev/${players ? 'players' : 'mobs'}/new`}>
                    <NewEntity editingMob={mobs ? true : false}/>
                </Route>
        </div>
    )
}