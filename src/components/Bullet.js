import React, {useEffect, useState} from 'react'
import bulletSprite from '../images/bullet.png'

function Bullet({playerPos, exit}){
    const [bulletPos, setBulletPos] = useState({
        left: `${parseInt(playerPos.left) + 50}px`,
        right: `${parseInt(playerPos.left) + 54}px`,
        top: '425px',
        bottom: '490px'
    })
    const mob = document.getElementById('mob')

    useEffect(()=>{
        const mobHitbox = mob.getBoundingClientRect()

            //bottom of bullet must be less than y or 'top' of mob. Implement bottom.
            //Right of bullet must be greater than left of mob.
            //Left of bullet must be less than right of mob.
        if(parseInt(bulletPos.bottom) <= mobHitbox.top && parseInt(bulletPos.right) > mobHitbox.left && parseInt(bulletPos.left) < mobHitbox.right){
            console.warn(`TERMINATED`)
        
            /*console.log(mobHitbox)
            console.log('Bullet top', parseInt(bulletPos.top))
            console.log('Bullet left', parseInt(bulletPos.left))
            console.log('Mob y', mobHitbox.y)
            console.log('Mob left', mobHitbox.left)
            console.log('Mob right', mobHitbox.right)
            console.table(document.getElementById('bullet').getBoundingClientRect())*/
            exit()
        }

        if(parseInt(bulletPos.top) <= 0){
            console.warn('Terminated via boundry.')
            console.log('bullet')
            console.table(bulletPos)
            console.log('\nmob')
            console.table(mobHitbox)
            exit()
        }

        const time = setInterval(()=>{
            setBulletPos(()=>{
                return {
                    left: bulletPos.left,
                    right: bulletPos.right,
                    top: `${parseInt(bulletPos.top) - 10}px`,
                    bottom: `${parseInt(bulletPos.bottom) - 10}px`
                }})
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