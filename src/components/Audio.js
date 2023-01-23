import React, {useState} from 'react'

const music = [require('../music/angel-eyes.mp3'), require('../music/man-is-he-mega.mp3'), require('../music/dnx.mp3'), require('../music/leave-the-world-tonight.mp3'), require('../music/legends.mp3')]

function Audio({audioRef}){
    const [index, setIndex] = useState(Math.floor(Math.random() * music.length))

    function handleEnd(e){
        setIndex(Math.floor(Math.random() * music.length))
        e.target.load()
    }

    function handleLoad(e){
        e.target.play()
    }

    return(
        <audio ref={audioRef} id='audio' onEnded={handleEnd} onLoad={handleLoad} autoPlay controls>
            <source src={music[index]} type="audio/mpeg"></source>
        </audio>
    )
}

export default Audio