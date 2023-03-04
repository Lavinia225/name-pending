import React from 'react'
import EntityForm from './EntityForm'
import Card from './Card'

function Entity({entity, playerPos, updateEntities = null, editing = false, handleEditClick = null, isMob = false, isGame = false}){

    return(
        <div>
            {editing ? <EntityForm entity={entity} editingMob={isMob} editMode={true} handleEditSubmit={handleEditClick} updateEntities={updateEntities}/>
            : !isGame ? <Card entity={entity} isMob={isMob} handleEditClick={handleEditClick}/>
            : isMob ? <img id='mob' className={entity.ai} src={entity.sprite} alt='Mob Sprite'></img> 
            : <img id='player'style={playerPos} src={entity.sprite} alt='Player Sprite'></img>}
        </div>
    )
}

export default Entity