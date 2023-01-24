import React, {useRef} from 'react'
import Audio from './Audio'
import Entity from './Entity'

function Game({players, mobs}){
    const audioRef = useRef()

    function handleClick(){
        audioRef.current.volume = 0.33
        audioRef.current.mute = true
        audioRef.current.play()
    }

    return(
        <div id='game' onClick={handleClick}>
            <Audio audioRef={audioRef}/>
            <Entity entity={players[0]} isMob={false} isGame={true}/> {/*Entity, isMob, isGame are the props */}
        </div>
    )
}

export default Game