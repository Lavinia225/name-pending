import React from 'react'
import Card from './Card'

function PlayerSelect({players, handleSelect}){

    return(
        <div>
            <h2>Select Player.</h2>
            {players.map(player => <Card key={player.id} entity={player} isMob={false} selecting={true} handleSelect={handleSelect}/>)}
        </div>
    )
}

export default PlayerSelect