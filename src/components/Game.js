import React, {useRef, useState} from 'react'
import Audio from './Audio'
import Entity from './Entity'
import Bullet from './Bullet'
import bg from '../images/For_Luna_Sketch.png'

function Game({players, mobs}){
    const audioRef = useRef()
    const [playerPos, setPlayerPos] = useState({
        position: 'absolute',
        left: `300px`,
        top: `490px`
    })
    const [fired, setFired] = useState(false)

    function handleClick(){
        audioRef.current.volume = 0.33
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
        setFired(false)
    }

    if(players === undefined || mobs === undefined){
        return (<h1>Loading...</h1>)
    }

    return(
        <div id='game' onClick={handleClick} tabIndex={0} onKeyDown={handleKey} style={{backgroundImage: `url(${bg})`}}>
            <Audio audioRef={audioRef}/>
            <Entity entity={mobs[Math.floor(Math.random() * mobs.length)]} isMob={true} isGame={true} />
            <Entity playerPos={playerPos} entity={players[Math.floor(Math.random() * players.length)]} isMob={false} isGame={true}/>
            {fired ? <Bullet playerPos={playerPos} exit={handleBulletExit}/> : null}
        </div>
    )
}

export default Game