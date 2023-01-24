import React, {useRef, useState} from 'react'
import Audio from './Audio'
import Entity from './Entity'

function Game({players, mobs}){
    const audioRef = useRef()
    const [playerPos, setPlayerPos] = useState({
        position: 'absolute',
        left: `400px`,
        top: `390px`
    })

    function handleClick(){
        audioRef.current.volume = 0.01 //Temporarily not .33
        audioRef.current.play()
    }

    function handleKey(e){
        if(e.key === 'd'){
            if(parseInt(playerPos.left) <= 580){
                setPlayerPos({...playerPos, left: `${parseInt(playerPos.left) + 10}px`})
            }
        }

        if(e.key === 'a'){
            if(parseInt(playerPos.left) >= 10){
                setPlayerPos({...playerPos, left: `${parseInt(playerPos.left) - 10}px`})
            }
        }
    }

    return(
        <div id='game' onClick={handleClick} tabIndex={0} onKeyDown={handleKey}>
            <Audio audioRef={audioRef}/>
            <Entity playerPos={playerPos} entity={players[2]} isMob={false} isGame={true}/> {/*Entity, isMob, isGame are the props */}
        </div>
    )
}

export default Game