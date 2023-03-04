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
        top: `690px`
    })
    const [fired, setFired] = useState(false)
    const [activePlayer, setActivePlayer] = useState(null)
    const [activeMob, setActiveMob] = useState(0)
    const [mobHP, setMobHP] = useState(1)

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

    function handleBulletExit(hit){
        setFired(false)
        
        if(hit){
            setMobHP(()=>mobHP - 1)
            if(mobHP - 1 <= 0){
                if(activeMob === mobs.length - 1){
                    setActiveMob(0)
                    setMobHP(mobs[0].hp)
                }
                else{
                    setActiveMob(()=>activeMob + 1)
                    setMobHP(()=>mobs[activeMob + 1].hp)
                }

            }
        }
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
            <h1>Enemy HP: {mobHP}</h1>
            <button id='player-select-button' onClick={handleReselect}>Select New Player</button>
                <Audio audioRef={audioRef}/>
                <Entity entity={mobs[activeMob]} isMob={true} isGame={true} />
                <Entity playerPos={playerPos} entity={players[activePlayer-1]} isMob={false} isGame={true}/>
                {fired ? <Bullet playerPos={playerPos} exit={handleBulletExit}/> : null}
            </div> 
        </>
        : <PlayerSelect players={players} handleSelect={handleSelect}/>}
        </>
    )
}
export default Game