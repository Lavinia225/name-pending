import React from 'react'
import {Card, Image} from 'semantic-ui-react'

function Mob({mob}){

    return(
        <Card id='mob-card'>
            <Image src={mob.sprite} />
            <Card.Content>
                <Card.Header>{mob.name}</Card.Header>
                <Card.Description>HP: {mob.hp}</Card.Description>
            </Card.Content>
        </Card>
    )
}

export default Mob