import React, {useState} from 'react'
import "./ModalStyling.css"

function ModalStyling() {
    const [input, setinput] =useState("")
    const SendMessage =  e => {
        e.preventDefault();
        console.log(input)
        setinput("")}
    return (
        <div className="Modal">
            <div className="Modal__Header">
            Ask us
            </div>
            <div className="Modal__Question">
                Question
                
            </div>
            <input type="text" placeholder ="Write a question here"  value = {input} onChange= { e => setinput(e.target.value)} />
            <button   onClick= {SendMessage} type ="submit">Submit </button>

        
            
        </div>
    )
}

export default ModalStyling
