import React, {useState} from 'react'
import EntityForm from './EntityForm'
import Card from './Card'

function Entity({entity, isMob = false, isGame = false}){
    const [editing, setEditing]= useState(false)

    function handleEditClick(){
        setEditing(true)
        //history.push(`/dev/players/${player.id}`)
    }

    return(
        <div>
            {editing && !isGame? <EntityForm entity={entity} editingMob={isMob} editMode={true} />: <Card entity={entity} isMob={isMob} handleEditClick={handleEditClick}/>}
        </div>
    )
}

export default Entity