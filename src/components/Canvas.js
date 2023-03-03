import React, {useState} from 'react'
import {SketchPicker} from 'react-color'
import eraser from '../images/eraser.png'

function Canvas({canvasRef}){
    const [fillStyle, setFillStyle] = useState({"hex": "#000"})
    const [mousePos, setMousePos] = useState({
        left: 0,
        top: 0
    })
    const [size, setSize] = useState(10)
    const [tool, setTool] = useState('pencil')

    function handleMouse(e){
        setMousePos({
            left: e.nativeEvent.offsetX,
            top: e.nativeEvent.offsetY
        })
    }

    function updateColor(color){
        setFillStyle(color)
    }

    function handleClick(){
        const ctx = canvasRef.current.getContext('2d')

        if (tool === 'pencil'){
            ctx.fillStyle = fillStyle.hex
            ctx.fillRect(mousePos.left - size / 2, mousePos.top - size / 2, size, size)
        }
        else{
            ctx.clearRect(mousePos.left - size / 2, mousePos.top - size / 2, size, size)
        }
    }

    function clearCanvas(){
        canvasRef.current.getContext('2d').clearRect(0, 0, 200, 200)
    }

    function handleTool(tool){
        setTool(tool)
    }

    function handleSize(e){
        if (e.target.textContent === 'Size+'){
            setSize(()=>size+5)
        }
        else if (e.target.textContent === 'Size-'){
            setSize(()=>size-5)
        }
    }
    
    return(
        <>
            <div className='drawing'>
                <canvas ref={canvasRef} className="canvas" height='200px' width='200px' onClick={handleClick} onMouseMove={handleMouse}></canvas>
                <SketchPicker disableAlpha={true} className="color-picker" color={fillStyle.hex} onChange={updateColor}/>
                <div className='canvas-buttons'>
                    <button onClick={()=>handleTool('pencil')}>✏️</button>
                    <button onClick={()=>handleTool('eraser')}>
                        <img src={eraser} alt='Eraser'></img>
                    </button>
                    <button onClick={clearCanvas}>🗑️</button>
                    <button onClick={handleSize}>Size+</button>
                    <button onClick={handleSize}>Size-</button>
                </div>
            </div>
        </>
    )
}

export default Canvas