import React, {useState} from 'react'
import "./ModalStyling.css"
import Button from "@material-ui/core/Button"

function ModalStyling() {
    const [input, setinput] =useState("")
    const SendMessage =  e => {
        e.preventDefault();
        console.log(input)
        setinput("")}
    return (
        <div className="Modal">
            <div className="Modal__Header">
            Ask Us
            </div>
            <div className="Modal__Question">
               <p>Question</p> 
                <input type="text" placeholder ="Write your question here !"  value = {input} onChange= { e => setinput(e.target.value)} className="input" />
            </div>
            <div className="Modal__Submit">
                 
            <Button   variant="text" color="inherit" fullWidth="true"  onClick= {SendMessage}    >
               SUBMIT
            </Button>
            </div>
        

        
            
        </div>
    )
}

export default ModalStyling
