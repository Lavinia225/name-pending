import React, {useState, useRef} from 'react'
import Canvas from './Canvas'

function NewEntity({editing}){
    const canvasRef = useRef()

    
    return(
        <div id='new-form'>
            <Canvas canvasRef={canvasRef}/>
            <p>Loaded</p>
        </div>
    )
}

export default NewEntity