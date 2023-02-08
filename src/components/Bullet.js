import React from 'react'
import bulletSprite from '../images/bullet.png'

function Bullet(){
    return(
        <div>
        <img src={bulletSprite}
        style={{position: 'absolute', left: '400px', top: '400px'}} alt='boolet'></img>
        </div>
    )
}

export default Bullet