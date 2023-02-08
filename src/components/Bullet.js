import React from 'react'
import bulletSprite from '../images/bullet.png'

function Bullet({playerPos}){
    return(
        <img src={bulletSprite}
        style={{position: 'absolute', left: `${parseInt(playerPos.left) + 50}px`, top: '425px'}} alt='bullet'></img>
    )
}

export default Bullet