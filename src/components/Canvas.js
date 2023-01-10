import React, {useState} from 'react'
import {SketchPicker} from 'react-color'

function Canvas({canvasRef}){
    const [fillStyle, setFillStyle] = useState('#000')
    const [mousePos, setMousePos] = useState({
        left: 0,
        top: 0
    })

    function handleMouse(e){
        setMousePos({
            left: e.pageX- 8,
            top: e.pageY - 62
        })
    }

    function updateColor(color){
        setFillStyle(color)
    }

    function handleClick(e){
        const ctx = canvasRef.current.getContext('2d')
        ctx.fillStyle = fillStyle.hex

        ctx.fillRect(mousePos.left - 10, mousePos.top - 10, 10, 10)
    }


    return(
        <div>
            <canvas onMouseMove={handleMouse} ref={canvasRef} className="drawing" height='200px' width='200px' onClick={handleClick}></canvas>
            <h1>X: {mousePos.left} Y: {mousePos.top}</h1>
            <SketchPicker className="color-picker" color={fillStyle.hex} onChange={updateColor}/>
        </div>
    )
}

export default Canvas