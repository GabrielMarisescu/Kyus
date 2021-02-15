
import { Avatar } from '@material-ui/core';
import './Question.css';
import Button from '@material-ui/core/Button';
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import ModalStyling from './ModalStyling';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import CircularProgress from "@material-ui/core/CircularProgress"
import axios from  "./AxiosInstance"
import SubAnswers from './SubAnswers';

function Question() {
  Modal.setAppElement('#root')
  const [modalIsActive,setmodalIsActive] = useState(false);
  const [data, setData] = useState(null)
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
        const interval = setInterval(() => {
          fetch("https://blooming-bastion-30679.herokuapp.com/messages/question")
          .then((response) => response.json())
          .then((data) => {
            setData(data);
            setlikes(data[data.length-1].likes); 
            setid(data[data.length -1]._id);
            setAnswersYes(data[data.length -1].yes)
            setAnswersNo(data[data.length -1].no)
          }).catch(err => {console.log(err)});
        }, 500);
        return () => clearInterval(interval);
      }, []);
    
    
      const AddLikes = (AdditionalLikes,questionid,StateLikes) => {
      
        axios.put(`/messages/question/${questionid}`,{likes: StateLikes +AdditionalLikes})
       }
      const MinusLikes = (AdditionalLikes,questionid,StateLikes) => {  
        axios.put(`/messages/question/${questionid}`,{likes: StateLikes -AdditionalLikes})
       }
       const PlusAnswerYes = (AdditionalLikes,questionid,StateAnswers) => { 
        axios.put(`/messages/question/${questionid}/2`,{yes: StateAnswers +AdditionalLikes})
       }
       const PlusAnswerNo = (AdditionalLikes,questionid,StateAnswers) => {
    
        axios.put(`/messages/question/${questionid}/1`,{no: StateAnswers +AdditionalLikes})
       }
    
       const OnceTogglerMinus = () => {
        if (OnceTogglerData === true) { setlikes( prev => prev-1)
         ;}
    
         else {setlikes( prev => prev-2) }
        setOnceTogglerData( prev => !prev) ; 
      }
    
    
    
    
       const addLike = () =>  {
       setArrowUpSelector(prev => !prev); 
       
       if  (ArrowDown === "Featured__ArrowDown")  {
        OnceTogglerMinus();
        setArrowUp("Featured__ArrowUp")
        setArrowDown("");
        AddLikes(2,id,likes);
    
       }
      else if ((ArrowUpSelector === true) && (ArrowDown === ""))  {
        setlikes( prev => prev+1);
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
        <div className="Featured">
 <div className='Featured__textWrapper'>Featured Questions</div>


        {  data ? 
        <div className='Featured__Main'>
        <div className='Featured__TotalLeft'>
          <div className='Featured__Left'>
            <div className='Featured__IndicatorLeft'>
              <ArrowDropUpIcon className={ArrowUp}  onClick= {addLike}  />
              <span id='Featured__IndicatorNumber'> {data[data.length -1].likes}</span>
              <ArrowDropDownIcon className={ArrowDown} onClick={addDislike} />
            </div>
            <div className='Featured__QuestionLeft'>
              <div className='Featured__Question__Header'>
              <Avatar  className="Avatar"/>
                
                <div className='Featured__Question__Username'>{data[data.length -1].author}</div>
          
                <div className='Featured__Question__Date'>{data[data.length -1].date}</div>
               
              </div>
              <div className='Featured__Question__Question'>
                {data[data.length -1]?.question}
              </div>
              <div className="Featured__Answers">
              <div className="Featured__LeftText"> {data[data.length -1].yes}</div>
              <div className="Featured__RightText"><Button variant="contained" color="secondary"  onClick= {addAnswerYes} >
      Yes
    </Button></div>
            </div>
            <div className="Featured__Answers">
            <div className="Featured__LeftText"> {data[data.length -1].no}</div>
              <div className="Featured__RightText">
                <Button variant="contained" color="primary"  onClick= {addAnswerNo}>
      No
    </Button></div>
            </div>
  
            </div>
    








    
            
          </div>
        </div>
        <div className='Featured__TotalRight'>
          <div className='Featured__Right'>
     
            <div className='Featured__IndicatorRight'>
              <div className="Featured__Arrows">
              <ArrowDropUpIcon  />
              <span id='Featured__IndicatorNumber'> {data[data.length -2].likes}</span>
              <ArrowDropDownIcon  />
              </div>
              
              <div className='Featured__QuestionRight'>
              <div className='Featured__Question__Header'>
              <Avatar  className="Avatar"/>
                <div className='Featured__Question__Username'>{data[data.length -2].author}</div>
                <div className='Featured__Question__Date'>{data[data.length -2].date}</div>
              </div>
              <div className='Featured__Question__Question'>
              {data[data.length -2]?.question}
              </div>
              
          
            </div>
      

            </div>
            
        
           <SubAnswers />
           <SubAnswers />
           
           
          </div>
  
          
        </div>
      </div>
    : <CircularProgress  className="Featured__CircularProgress" />}  
    
    <div  className="Featured__ContainerButton">
          <div className='Featured__Button'>
            <Button
              variant='text'
              color='inherit'
              fullWidth='true'
              onClick={() => {
                setmodalIsActive((prev) => !prev);
              }}
            >
              Submit Your Own Questions!
            </Button>
            <Modal
              isOpen={modalIsActive}
              onRequestClose={() => {
                setmodalIsActive(false);
              }}
              style={{
                overlay: {
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                },
                content: {
                  position: 'absolute',
                  top: '30vh',
                  left: '35%',
                  right: '35%',
                  bottom: '30vh',
                  border: '1px solid black',
                  background: '#1A1A1B',
                  overflow: 'auto',
                  WebkitOverflowScrolling: 'touch',
                  borderRadius: '30px',
                  outline: 'none',
                  padding: '20px',
                  minWidth: '160px',
                },
              }}
            >
              <ModalStyling  />
            </Modal>
          </div>
          </div>
        </div>
    
    )
}

export default Question
