import React, {useRef, useState} from 'react'
import {Redirect} from 'react-router-dom'
import Audio from './Audio'
import Entity from './Entity'
import Bullet from './Bullet'

function Game({players, mobs}){
    const audioRef = useRef()

    const [playerPos, setPlayerPos] = useState({
        position: 'absolute',
        left: `300px`,
        top: `490px`
    })
    const [fired, setFired] = useState(false)

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
        if(e.key === ' '){
            if (fired === false){
                setFired(true)
            }
        }
    }

    function handleBulletExit(){
        console.log('Upper reached')
        setFired(false)
    }

    if(players === undefined && mobs === undefined){
        return (<Redirect to='' />)
    }

    return(
        <div id='game' onClick={handleClick} tabIndex={0} onKeyDown={handleKey}>
            <Audio audioRef={audioRef}/>
            <Entity entity={mobs[0]} isMob={true} isGame={true} />
            <Entity playerPos={playerPos} entity={players[2]} isMob={false} isGame={true}/> {/*Entity, isMob, isGame are the props */}
            {fired ? <Bullet playerPos={playerPos} exit={handleBulletExit}/> : null}
        </div>
    )
}

export default Game