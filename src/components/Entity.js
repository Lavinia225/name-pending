import React, {useState} from 'react'
import EntityForm from './EntityForm'
import Card from './Card'

function Entity({entity, isMob = false, isGame = false, playerPos}){
    const [editing, setEditing]= useState(false)

    function handleEditClick(){
        setEditing(true)
        //history.push(`/dev/players/${player.id}`)
    }

    return(
        <div>
            {editing ? <EntityForm entity={entity} editingMob={isMob} editMode={true} />
            : !isGame ? <Card entity={entity} isMob={isMob} handleEditClick={handleEditClick}/>
            : isMob ? <img id='mob' className={entity.ai} src={entity.sprite} alt='Mob Sprite'></img> 
            : <img id='player'style={playerPos} src={entity.sprite} alt='Player Sprite'></img>}
        </div>
    )
}

export default Entity