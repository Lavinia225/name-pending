import React, {useEffect, useState} from 'react'
import bulletSprite from '../images/bullet.png'

function Bullet({playerPos, exit}){
    const [bulletPos, setBulletPos] = useState({
        left: `${parseInt(playerPos.left) + 50}px`,
        top: '425px'
    })
    const mob = document.getElementById('mob')

    useEffect(()=>{
        const mobHitbox = mob.getBoundingClientRect()

        if(parseInt(bulletPos.top) <= 0){
            console.warn('Terminated via boundry.')
            exit()
        }
        
        if(parseInt(bulletPos.top) <= mobHitbox.y && parseInt(bulletPos.left) > mobHitbox.left && parseInt(bulletPos.left) < mobHitbox.right){
            console.warn(`TERMINATED`)

           /*console.log(parseInt(bulletPos.left) < mobHitbox.right)
            console.log('Bullet:')
            console.table(document.getElementById('bullet').getBoundingClientRect())
            console.log('MobBox:')
            console.table(mobHitbox)
            console.log(parseInt(bulletPos.top) <= mobHitbox.y)*/
            exit()
        }

        const time = setInterval(()=>{
            setBulletPos(()=>{
                return {left: bulletPos.left, top: `${parseInt(bulletPos.top) - 10}px`}})
            }, 10)

        return function cleanup(){
            clearInterval(time)
        }
    }, )

    return(
        <img src={bulletSprite} id='bullet'
        style={{position: 'absolute', left: bulletPos.left, top: bulletPos.top}} alt='bullet'></img>
    )
}

export default Bullet