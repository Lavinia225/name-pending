import React, {useState, useRef} from 'react'
import Canvas from './Canvas'

function NewEntity({editingMob}){
    const canvasRef = useRef()
    const [formData, setFormData] = useState({
        name: '',
        hp: 0,
    })

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        const fullData = {...formData, sprite: canvasRef.current.toDataURL()} //Remember to later put a POST request in here
    }
    

    if (editingMob === true && !formData.ai){
        formData.ai = 'Default'
    }

    return(
        <div>
            <form id='new-form' onSubmit={handleSubmit}>
                <label htmlFor='Name'>Name: </label>
                <input type='text' name='name' placeholder='Smitty Werbenjagermanjensen...' value={formData.name} onChange={handleChange}></input>
                <label htmlFor="Health">Health: </label>
                <input type='number' name='hp' value={formData.hp} onChange={handleChange}></input>
                {editingMob ?
                <>
                <label htmlFor='AI'>AI: </label>
                <select name='ai' onChange={handleChange}>
                    <option>Default</option> {/*Remember to add these once AI is created */}
                    <option>Default 2</option>
                </select>
                </> : null}
                <button type='submit'>Submit</button>
            </form>
            <Canvas canvasRef={canvasRef}/>
        </div>
    )
}

export default NewEntity