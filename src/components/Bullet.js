import React, {useEffect, useState} from 'react'
import bulletSprite from '../images/bullet.png'

function Bullet({playerPos, exit}){
    const [bulletPos, setBulletPos] = useState({
        left: `${parseInt(playerPos.left) + 50}px`,
        top: '425px'
    })

    useEffect(()=>{
        const time = setInterval(()=>{
            setBulletPos(()=>{
                return {left: bulletPos.left, top: `${parseInt(bulletPos.top) - 10}px`}})
            }, 10)
            
        return function cleanup(){
            clearInterval(time)
        }
    }, )

    return(
        <img src={bulletSprite}
        style={{position: 'absolute', left: bulletPos.left, top: bulletPos.top}} alt='bullet'></img>
    )
}

export default Bullet