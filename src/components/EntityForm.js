import React, {useState, useRef, useEffect} from 'react'
import Canvas from './Canvas'

function EntityForm({editingMob, entity = {name: '', hp: 0}, editMode = false}){
    const canvasRef = useRef()
    const [formData, setFormData] = useState({
        name: entity.name,
        hp: entity.hp,
    })

    useEffect(()=>{
        const ctx = canvasRef.current.getContext('2d')
        const img = new Image
        img.src = entity.sprite

        if (entity.name){
        ctx.drawImage(img, 0, 0)
        }
    }, [])

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        const fullData = {...formData, sprite: canvasRef.current.toDataURL()}
        let link = process.env.REACT_APP_API_URL
        let method = 'POST'

        if (editingMob){
            link += '/mobs'
        }
        else{
            link += '/players'
        }

        if(editMode){
            method = 'PATCH'
            fullData.id = entity.id
            link += `/${entity.id}`
        }

        fetch(link, {
            method: method,
            headers: {
                'Content-Type': "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify(fullData)
        })
        .then(()=>{
            setFormData({
                name: '',
                hp: 0
            })
            canvasRef.current.getContext('2d').clearRect(0, 0, 200, 200)
        })
    }
    

    if (editingMob === true && !formData.ai){
        formData.ai = 'Left and Right'
    }

    return(
        <div id='new-entity'>
            <form id='new-form' onSubmit={handleSubmit}>
                <label htmlFor='Name'>Name: </label>
                <input type='text' name='name' placeholder='Smitty Werbenjagermanjensen...' value={formData.name} onChange={handleChange}></input>
                <label htmlFor="Health">Health: </label>
                <input type='number' name='hp' value={formData.hp} onChange={handleChange}></input>
                {editingMob ?
                <>
                <label htmlFor='AI'>AI: </label>
                <select name='ai' onChange={handleChange}>
                    <option>Left and Right</option>
                    <option>Short Circular</option>
                    <option>Long Circular</option>
                    <option>Zig-Zag</option>
                </select>
                </> : null}
                <button type='submit'>Submit</button>
            </form>
            <Canvas canvasRef={canvasRef}/>
        </div>
    )
}

export default EntityForm