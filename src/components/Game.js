import React, {useRef} from 'react'
import Audio from './Audio'

function Game(){
    const audioRef = useRef()

    function handleClick(){
        audioRef.current.volume = 0.33
        audioRef.current.play()
    }

    return(
        <div id='game' onClick={handleClick}>
            <Audio audioRef={audioRef}/>
        </div>
    )
}

export default Game