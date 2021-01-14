import { Avatar } from '@material-ui/core'
import React from 'react'
import "./FeaturedQuestions.css"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Bean from "./Images/mr-bean.jpg"
import Button from "@material-ui/core/Button"

function FeaturedQuestions() {
    var today = new Date();
    var Day = String(today.getDate()).padStart(2, '0');
    var Month = String(today.getMonth() + 1).padStart(2, '0');
    var Year = today.getFullYear();







    return (
        <div className="Featured">
            <div className="Featured__textWrapper">
            Featured Questions
            </div>
<div className="Featured__questions">
    <div className="Featured__TotalLeft">
    <div className="Featured__left1">
      <Avatar alt="Anonymous"   src={Bean}/>
      <p className ="Featured__Text">Anonymous</p>
      <FiberManualRecordIcon style={{ color: "white" }}  fontSize="small"/>
      <p className ="Date"> {Day} , {Month}, {Year}</p>
      
     <StarBorderIcon /> 
      
      </div>
      <div className="Featured__left2">
         Do you think this question will have answers?
     </div>
    </div>
<div className="Featured__TotalRight">
<div className="Featured__right1">
      <Avatar alt="Anonymous"  src={Bean} />
      <p className ="Featured__Text">Anonymous</p>
      <FiberManualRecordIcon style={{ color: "white" }} fontSize="small" />
      <p className ="Date"> {Day} , {Month}, {Year}</p>
      <StarBorderIcon />
</div>
    

     <div className="Featured__right2">
         Can this question have replays or comments?
     </div>
     

      </div>
</div>

<div className="Featured__Button">
<Button variant="text" color="inherit" fullWidth="true">
  Submit Your Own Questions!
</Button>
</div>
  

 
 
 </div>

            
        
    )
}

export default FeaturedQuestions
