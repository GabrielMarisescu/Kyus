import React, {useState,} from 'react'
import "./ModalStyling.css"
import Button from "@material-ui/core/Button"
import axios from "./AxiosInstance"
import Snackbar from "@material-ui/core/Snackbar"
import Alert from '@material-ui/lab/Alert';
import Checkbox from '@material-ui/core/Checkbox';
import { TextField } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';


function ModalStyling() {

    const [input, setinput] =useState("")
    const [open, setOpen] = useState(false);
    const [NumOfAnswers,setNOA] = useState([0])
    var today = new Date();
    var Day = String(today.getDate()).padStart(2, '0');
    var Month = String(today.getMonth() + 1).padStart(2, '0');
    var Year = today.getFullYear();
    const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
    


    const addAnswer = () => {
      let a = 2
      setNOA(prev => [...prev,a])
    }
    const removeAnswer = () => {
      if (NumOfAnswers <1) {
        return null

      }
      else{
        NumOfAnswers.pop()
        setNOA(prev =>[...NumOfAnswers])
      }
     
    }   

    const SendMessage =  e => {
    
        if (input === " " || input ==="" || input ==="   ") {
          console.log(":D");

        }
        else {
          setOpen(prev =>!prev)
          axios.post("/messages/question", {
            question: input,
            author: 'Anonymous',
            likes: 0,
            date: `${Day}  ${Month}  ${Year}`,
            yes:0,
            no:0

          }).then(response => {console.log(response)}).catch( err => {
              console.log(err)});
        e.preventDefault();
        setinput("");
        setTimeout(() => {
            window.location = `${window.location.origin}/`
            
        }, 1500);
        }
       
     

        }
     
    
        
          const handleClose = (event, reason) => {
            if (reason === 'clickaway') {
              return;
            }
        
            setOpen(prev => !prev);
          };
    return (
        <div className="Modal">
            <div className="Modal__Header">
            Ask Us
            </div>
            <div className="Modal__Question">
               <p>Question</p> 
                <input type="text" placeholder ="Write your question here !"  value = {input} onChange= { e => setinput(e.target.value)} className="input" />
            </div>
        
            <div className="Featured__Checkbox">
            <Checkbox className="checkbox"
        checked={checked}
        onChange={handleChange}
        color="primary"
     
      /> 
     
      <p className="Featured__PollAnswers">Add more answers</p>
      
            </div>
            { checked ? <div className="Featured__SelectAnswers"> {NumOfAnswers.map(lol => (

<div className="Modal__Question flex" >

<Button onClick={addAnswer}>  <AddIcon fontSize="large" style={{ color: "#376a99" }} /> </Button>
<Button onClick={removeAnswer}>  <RemoveIcon fontSize="large"style={{ color: "#376a99" }} /> </Button>

<TextField id="filled-basic" label="Add"   />

</div>
        
           




            ))} </div> : null}
            <div className="Modal__Submit">
                 <Button   variant="text" color="inherit" fullWidth="true"  onClick= {SendMessage} >
                    SUBMIT
                 </Button>
                 </div>
           
            
            <Snackbar open={open}   onClose={handleClose}>
  <Alert  severity="success" onClose={handleClose}>
    Success!
  </Alert>
</Snackbar>
        

        
            
        </div>
    )
}

export default ModalStyling
