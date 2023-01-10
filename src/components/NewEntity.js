import React, {useState, useRef} from 'react'
import Canvas from './Canvas'

function NewEntity({editingMob}){
    const canvasRef = useRef()
    const [formData, setFormData] = useState({
        name: '',
        hp: 0,
        sprite: '',
    })

    
    return(
        <div>
            <form id='new-form'>
                <label for='Name'>Name: </label>
                <input type='text' placeholder='Smitty Werbenjagermanjensen...' value={formData.name}></input>
                <label for="Health">Health: </label>
                <input type='number' value={formData.hp}></input>
                {editingMob ?
                <>
                <label for='AI'>AI: </label>
                <select>
                    <option>Default</option> {/*Remember to add these once AI is created */}
                </select>
                </> : null}
            </form>
            <Canvas canvasRef={canvasRef}/>
        </div>
    )
}

export default NewEntity