import React, {useEffect, useState} from 'react'
import bulletSprite from '../images/bullet.png'

function Bullet({playerPos, exit}){
    const [bulletPos, setBulletPos] = useState({
        left: `${parseInt(playerPos.left) + 50}px`,
        top: '425px',
    })

    useEffect(()=>{
        const mobHitbox = document.getElementById('mob').getBoundingClientRect()
        const bulletHitbox = document.getElementById('bullet').getBoundingClientRect()

        if(parseInt(bulletHitbox.bottom) >= mobHitbox.top &&
           parseInt(bulletHitbox.right) > mobHitbox.left &&
           parseInt(bulletHitbox.left) < mobHitbox.right &&
           parseInt(bulletHitbox.top) <= mobHitbox.bottom){
            exit(true)
        }

        if(parseInt(bulletPos.top) <= 0){
            exit(false)
        }

        const time = setInterval(()=>{
            setBulletPos(()=>{
                return {
                    left: bulletPos.left,
                    top: `${parseInt(bulletPos.top) - 10}px`,
                }})
            }, 10)

        return function cleanup(){
            clearInterval(time)
        }
    }, )

    return(
        <img src={bulletSprite} id='bullet'
        style={{left: bulletPos.left, top: bulletPos.top}} alt='bullet'></img>
    )
}

export default Bullet