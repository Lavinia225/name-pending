import React, {useState} from 'react'
import {Card, Image} from 'semantic-ui-react'
import {useHistory} from 'react-router-dom'

function Player({player}){
    const [editing, setEditing] = useState(false)
    const history = useHistory()

    function handleEditClick(){
        setEditing(true)
        history.push(`/dev/players/${player.id}`)
    }

    function cardPrinter(){
        return(
            <Card id='player-card'>
                <Image src={player.sprite} />
                <Card.Content>
                    <Card.Header>{player.name}</Card.Header>
                    <Card.Description>HP: {player.hp}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a onClick={handleEditClick}>✏️ Edit</a>
                </Card.Content>
            </Card>
        )
    }

    return(
        <>
        {editing ? null : cardPrinter()}
        </>
    )
}

export default Player