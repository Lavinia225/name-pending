import React, {useState} from 'react'
import {Card, Image} from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import EntityForm from './EntityForm'

function Mob({mob}){
    const [editing, setEditing] = useState(false)
    const history = useHistory()

    
    function handleEditClick(){
        setEditing(true)
        history.push(`/dev/mobs/${mob.id}`)
    }
    return(
        <Card id='mob-card'>
            <Image src={mob.sprite} />
            <Card.Content>
                <Card.Header>{mob.name}</Card.Header>
                <Card.Description>HP: {mob.hp} AI: {mob.ai}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                    <a onClick={handleEditClick}>✏️ Edit</a>
            </Card.Content>
        </Card>
    )
}

export default Mob