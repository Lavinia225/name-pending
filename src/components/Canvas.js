import React, {useState} from 'react'
import {SketchPicker} from 'react-color'

function Canvas({canvasRef}){
    const [fillStyle, setFillStyle] = useState({"hex": "#000"})
    const [mousePos, setMousePos] = useState({
        left: 0,
        top: 0
    })
    const [tool, setTool] = useState('pencil')

    function handleMouse(e){
        setMousePos({
            left: e.pageX - canvasRef.current.getBoundingClientRect().x,
            top: e.pageY - canvasRef.current.getBoundingClientRect().y
        })
    }

    function updateColor(color){
        setFillStyle(color)
    }

    function handleClick(){
        const ctx = canvasRef.current.getContext('2d')

        if (tool === 'pencil'){
            ctx.fillStyle = fillStyle.hex
            ctx.fillRect(mousePos.left - 10, mousePos.top - 10, 10, 10)
        }
        else{
            ctx.clearRect(mousePos.left - 10, mousePos.top - 10, 10, 10)
        }
    }

    function clearCanvas(){
        canvasRef.current.getContext('2d').clearRect(0, 0, 200, 200)
    }

    function handleTool(tool){
        setTool(tool)
    }

    return(
        <>
            <div className='drawing'>
                <canvas onMouseMove={handleMouse} ref={canvasRef} className="canvas" height='200px' width='200px' onClick={handleClick}></canvas>
                <SketchPicker className="color-picker" color={fillStyle.hex} onChange={updateColor}/>
                <div className='canvas-buttons'>
                    <button onClick={()=>handleTool('pencil')}>✏️</button>
                    <button onClick={()=>handleTool('eraser')}>Eraser</button>
                    <button onClick={clearCanvas}>🗑️</button>
                </div>
            </div>
        </>
    )
}

export default Canvas