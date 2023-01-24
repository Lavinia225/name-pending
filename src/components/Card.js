import React from 'react'
import {Card, Image} from 'semantic-ui-react'

function Card({entity, isMob, handleEditClick}){
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

export default Card