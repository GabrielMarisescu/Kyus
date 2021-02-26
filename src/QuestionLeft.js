import React, {useState,useEffect} from 'react'
import { Avatar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import axios from "./AxiosInstance"
import CircularProgress from "@material-ui/core/CircularProgress"
import "./QuestionLeft.css"



function QuestionLeft() {


    const [data, setData] = useState("")
    const [ArrowUpSelector, setArrowUpSelector] = useState(true)
    const [ArrowDownSelector, setArrowDownSelector] = useState(true)
    const [ArrowDown, setArrowDown] = useState("")
    const [ArrowUp,setArrowUp] = useState("")
    const [likes,setlikes] = useState(0)
    const [id, setid] = useState("")
    const [OnceTogglerData,setOnceTogglerData]= useState(true)
    const [AnswersYes,setAnswersYes]= useState(0)
    const [AnswersNo,setAnswersNo]= useState(0)
    const [YesToggler,setYesToggler] = useState(true)
    const [NoToggler,setNoToggler] = useState(true)

    
    useEffect(() => {
     
        fetch("https://blooming-bastion-30679.herokuapp.com/messages/question")
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setlikes(data[data.length-1].likes); 
          setid(data[data.length -1]._id);
          setAnswersYes(data[data.length -1].yes)
          setAnswersNo(data[data.length -1].no)
        }).catch(err => {console.log(err)});
    
  }, []);

  


    const AddLikes = (AdditionalLikes,questionid,StateLikes) => {
      
        axios.put(`/messages/question/${questionid}`,{likes: StateLikes +AdditionalLikes})
       }
      const MinusLikes = (AdditionalLikes,questionid,StateLikes) => {  
        axios.put(`/messages/question/${questionid}`,{likes: StateLikes -AdditionalLikes})
       }
       const PlusAnswerYes = (AdditionalLikes,questionid,StateAnswers) => { 
        axios.put(`/messages/question/${questionid}/2`,{yes: StateAnswers +AdditionalLikes});
       }
       const PlusAnswerNo = (AdditionalLikes,questionid,StateAnswers) => {
    
        axios.put(`/messages/question/${questionid}/1`,{no: StateAnswers +AdditionalLikes})
       }
    
       const OnceTogglerMinus = () => {
        if (OnceTogglerData === true) { setlikes( prev => prev -1) }
    
         else {setlikes( prev => prev-2) }
        setOnceTogglerData( prev => !prev) ; 
      }
    
    
    
    
       const addLike = () =>  {
       setArrowUpSelector(prev => !prev); 
       
       if  (ArrowDown === "Featured__ArrowDown")  {
        OnceTogglerMinus();
        setlikes( prev => prev +3 );
        setArrowUp("Featured__ArrowUp")
        setArrowDown("");
        AddLikes(2,id,likes);
        setOnceTogglerData( prev => !prev) ;
    
       }
      else if ((ArrowUpSelector === true) && (ArrowDown === ""))  {
        setlikes( prev => prev +1);
        
        setArrowUp("Featured__ArrowUp")
        AddLikes(1,id,likes);
       }
       else {
        setlikes(prev => prev -1)
    
         setArrowUp("")
         MinusLikes(1,id,likes);
       }
     }
    
     
     
     const addDislike =() => {
       
      setArrowDownSelector(prev => !prev); 
       if (ArrowUp === "Featured__ArrowUp")  {
        setlikes(prev => prev -2)

        setArrowUp("")
        setArrowDown("Featured__ArrowDown")
        MinusLikes(2,id,likes)
    
       }
       else if ((ArrowDownSelector === true) && (ArrowUp === "")) {
        MinusLikes(1,id,likes);
       setArrowDown("Featured__ArrowDown");
       setlikes( (prev) => prev -1)
 
       
      }
      else {
    
        setlikes( (prev) => prev +1);
        setArrowDown("")
        AddLikes(1,id,likes);
      }
     
    
    }
    
    const addAnswerYes = () =>  {
      if  (YesToggler === true)  {
        setAnswersYes( prev => prev +1);
       PlusAnswerYes(1,id,AnswersYes);
       setYesToggler(false)
      }
    }
    
    const addAnswerNo = () =>  {
      if  (NoToggler === true)  {
        setAnswersNo( prev => prev +1);
       PlusAnswerNo(1,id,AnswersNo);
       setNoToggler(false)
      }
      
    }
    return (
        <div>
            {data ?  <div className='Featured__Main2'>
        <div className='Featured__TotalLeft'>
          <div className='Featured__Left'>
            <div className='Featured__IndicatorLeft'>
              <ArrowDropUpIcon className={ArrowUp}  onClick= {addLike}  />
              <span id='Featured__IndicatorNumber'> {likes}</span>
              <ArrowDropDownIcon className={ArrowDown} onClick={addDislike} />
            </div>
            <div className='Featured__QuestionLeft'>
              <div className='Featured__Question__Header'>
              <Avatar  className="Avatar"/>
                
                <div className='Featured__Question__Username'>{data[data.length -1].author}</div>
          
                <div className='Featured__Question__Date'>{data[data.length -1].date}</div>
               
              </div>
              <div className='Featured__Question__Question'>
              {data[data.length -1].question}
              </div>
              <div className="Featured__Answers">
              <div className="Featured__LeftText"> {AnswersYes}</div>
              <div className="Featured__RightText"><Button variant="contained" color="secondary"  onClick= {addAnswerYes} >
      Yes
    </Button></div>
            </div>
            <div className="Featured__Answers">
            <div className="Featured__LeftText">  {AnswersNo}</div>
              <div className="Featured__RightText">
                <Button variant="contained" color="primary"  onClick= {addAnswerNo}>
      No
    </Button></div>
            </div>
  
            </div>
           
     
        </div>
     
    
  
      </div>
      </div>  : <CircularProgress  className="Featured__CircularProgress" />}   
           
            
        </div>
    )
}

export default QuestionLeft
