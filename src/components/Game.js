import React, {useRef, useState} from 'react'
import Audio from './Audio'
import Entity from './Entity'

function Game({players, mobs}){
    const audioRef = useRef()
    const [playerPos, setPlayerPos] = useState({
        position: 'absolute',
        left: `300px`,
        top: `490px`
    })

    function handleClick(){
        audioRef.current.volume = 0.01 //Temporarily not .33
        audioRef.current.play()
    }

    function handleKey(e){
        if(e.key === 'd' || e.key === 'ArrowRight'){
            if(parseInt(playerPos.left) <= 680){
                setPlayerPos({...playerPos, left: `${parseInt(playerPos.left) + 15}px`})
            }
        }

        if(e.key === 'a' || e.key === 'ArrowLeft'){
            if(parseInt(playerPos.left) >= 10){
                setPlayerPos({...playerPos, left: `${parseInt(playerPos.left) - 15}px`})
            }
        }
        console.log(e.key)
    }

    return(
        <div id='game' onClick={handleClick} tabIndex={0} onKeyDown={handleKey}>
            <Audio audioRef={audioRef}/>
            <Entity entity={mobs[2]} isMob={true} isGame={true} />
            <Entity playerPos={playerPos} entity={players[2]} isMob={false} isGame={true}/> {/*Entity, isMob, isGame are the props */}
        </div>
    )
}

export default Game