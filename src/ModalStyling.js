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
    const [input2, setinput2] =useState("")
    const [input3, setinput3] =useState("")
    const [open, setOpen] = useState(false);
    const [NumOfAnswers,setNOA] = useState([0])
    const [Toggler1,setToggler1] = useState(false)
    var today = new Date();
    var Day = String(today.getDate()).padStart(2, '0');
    var Month = String(today.getMonth() + 1).padStart(2, '0');
    var Year = today.getFullYear();
    const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    setinput3("")
  };
    


    const addAnswer = () => {

      if (Toggler1 === true) {
        let a = 2
      setNOA(prev => [...prev,a])
      setToggler1(false)
      }
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
          console.log(input3)
      

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
       const ConfirmAction= () => {

          setinput3(data => [...data,input2]);

          setToggler1(prev => !prev)
        
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

<TextField id="filled-basic" label="Add Answers"  type="text"  onChange={e => setinput2(e.target.value)} className="Modal__TextField"  />
<Button  onClick={ConfirmAction}  className="Modal__Confirm">Confirm</Button>

</div>
        
          
            ))} </div> : null}
            <div className="Modal__Submit">
                 <Button   variant="text" color="inherit" fullWidth="true"  onClick= {SendMessage}  >
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
