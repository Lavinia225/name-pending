import React from 'react'

const nyan = [require('../music/angel-eyes.mp3'), require('../music/man-is-he-mega.mp3'), require('../music/dnx.mp3'), require('../music/leave-the-world-tonight.mp3'), require('../music/legends.mp3')]


function Game(){
    console.log(nyan)

    return(
        <div id='game'>
            <audio controls>
                <source src={nyan[Math.floor(Math.random() * nyan.length)]} type="audio/mpeg"></source>
            </audio>
        </div>
    )
}

export default Game