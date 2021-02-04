import React, {useState,} from 'react'
import "./ModalStyling.css"
import Button from "@material-ui/core/Button"
import axios from "./AxiosInstance"


function ModalStyling() {

    const [input, setinput] =useState("")

    var today = new Date();
    var Day = String(today.getDate()).padStart(2, '0');
    var Month = String(today.getMonth() + 1).padStart(2, '0');
    var Year = today.getFullYear();


    const SendMessage =  e => {
       
        axios.post("/messages/question", {
            question: input,
            author: 'Anonymous',
            likes: 1,
            date: `${Day}, ${Month},${Year}`
          }).then(response => {console.log(response)}).catch( err => {
              console.log(err)});
        e.preventDefault();
        setinput("");
        window.location = `${window.location.origin}/`; }

       
        
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
