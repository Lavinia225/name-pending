import React from 'react'
import {Card as Cardy, Image} from 'semantic-ui-react'

function Card({entity, isMob, selecting = false, handleEditClick = null, handleSelect = null}){
    return(
        <Cardy id={'card'}>
                <Image src={entity.sprite} />
                <Cardy.Content>
                    <Cardy.Header>{entity.name}</Cardy.Header>
                    <Cardy.Description>HP: {entity.hp} {isMob ? `AI: ${entity.ai}` : null}</Cardy.Description>
                </Cardy.Content>
                <Cardy.Content extra>
                    {selecting ? <a onClick={()=>handleSelect(entity.id)}>Select</a>:<a onClick={()=>handleEditClick(entity.id)}>✏️ Edit</a>}
                </Cardy.Content>
            </Cardy>
    )
}

export default Card