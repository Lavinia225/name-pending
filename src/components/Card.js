import React from 'react'
import {Card as Cardy, Image} from 'semantic-ui-react'

function Card({entity, isMob, handleEditClick}){
    return(
        <Cardy id={isMob ? 'mob-card' : 'player-card'}>
                <Image src={entity.sprite} />
                <Cardy.Content>
                    <Cardy.Header>{entity.name}</Cardy.Header>
                    <Cardy.Description>HP: {entity.hp} {isMob ? `AI: ${entity.ai}` : null}</Cardy.Description>
                </Cardy.Content>
                <Cardy.Content extra>
                    <a onClick={handleEditClick}>✏️ Edit</a>
                </Cardy.Content>
            </Cardy>
    )
}

export default Card