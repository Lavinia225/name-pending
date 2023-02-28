import React, {useRef, useState} from 'react'
import PlayerSelect from './PlayerSelect'
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
    const [activePlayer, setActivePlayer] = useState(null)
    //const [activeMob, setActiveMob] = useState(null)

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

    function handleSelect(id){
        setActivePlayer(id)
    }
    
    function handleReselect(){
        setActivePlayer(null)
    }

    if(players === undefined || mobs === undefined){
        return (<h1>Loading...</h1>)
    }

    return(<>
    {activePlayer ? 
        <>
            <div id='game' tabIndex={0} onKeyDown={handleKey} style={{backgroundImage: `url(${bg})`}}>
            <button id='player-select' onClick={handleReselect}>Select New Player</button>
                <Audio audioRef={audioRef}/>
                <Entity entity={mobs[0]} isMob={true} isGame={true} />
                <Entity playerPos={playerPos} entity={players[activePlayer-1]} isMob={false} isGame={true}/>
                {fired ? <Bullet playerPos={playerPos} exit={handleBulletExit}/> : null}
            </div> 
        </>
        : <PlayerSelect players={players} handleSelect={handleSelect}/>}
        </>
    )
}
export default Game