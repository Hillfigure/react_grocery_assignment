import React from "react"

function InputField (props) {
    return (
        <div>
            <label>New Item: </label>
            <input 
            type="text" 
            />
            <button type="submit" onClick={props.addItem}>Add</button>
        </div>
    )
}

export default InputField