import React from 'react'
import {Card, Image} from 'semantic-ui-react'

function Player({player}){

    return(
        <Card id='player-card'>
            <Image src={player.sprite} />
            <Card.Content>
                <Card.Header>{player.name}</Card.Header>
                <Card.Description>HP: {player.hp}</Card.Description>
            </Card.Content>
        </Card>
    )
}

export default Player