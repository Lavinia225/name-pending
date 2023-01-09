import React, {useState} from 'react'

function Canvas({canvasRef}){
    const [fillStyle, setFillStyle] = useState('#000')

    function updateColor(color){
        setFillStyle(`#${color}`)
    }

    function handleClick(e){
        const ctx = canvasRef.current.getContext('2d')
        ctx.fillStyle = fillStyle
        ctx.fillRect(e.clientX, e.clientY, 10, 10)
    }

    return(
        <div>
            <canvas ref={canvasRef} className="drawing" height='150px' width='150px' onClick={handleClick}></canvas>
        </div>
    )
}

export default Canvas