import { Avatar } from '@material-ui/core';
import './FeaturedQuestions.css';
import Button from '@material-ui/core/Button';
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import ModalStyling from './ModalStyling';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import CircularProgress from "@material-ui/core/CircularProgress"
import axios from "axios"


function FeaturedQuestions() {

  const [data, setData] = useState(null)
  const [ArrowUpSelector, setArrowUpSelector] = useState(true)
  const [ArrowDownSelector, setArrowDownSelector] = useState(true)
  const [ArrowUpSelector1, setArrowUpSelector1] = useState(true)
  const [ArrowDownSelector1, setArrowDownSelector1] = useState(true)
  const [ArrowDown, setArrowDown] = useState("")
  const [ArrowUp,setArrowUp] = useState("")
  const [ArrowDown1, setArrowDown1] = useState("")
  const [ArrowUp1,setArrowUp1] = useState("")
  const [likes,setlikes] = useState(0)
  const [likes1,setlikes1] = useState(0)
  const [id, setid] = useState("")
  const [id2, setid2] = useState("")
  const [OnceTogglerData,setOnceTogglerData]= useState(true)
  const [AnswersYes,setAnswersYes]= useState(0)
  const [AnswersNo,setAnswersNo]= useState(0)
  const [AnswersYes2,setAnswersYes2]= useState(0)
  const [AnswersNo2,setAnswersNo2]= useState(0)
  const [YesToggler,setYesToggler] = useState(true)
  const [NoToggler,setNoToggler] = useState(true)
  const [YesToggler2,setYesToggler2] = useState(true)
  const [NoToggler2,setNoToggler2] = useState(true)






    Modal.setAppElement('#root')
    const [modalIsActive,setmodalIsActive] = useState(false);
    var today = new Date();
    var Day = String(today.getDate()).padStart(2, '0');
    var Month = String(today.getMonth() + 1).padStart(2, '0');
    var Year = today.getFullYear();


  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://localhost:5000/messages/question")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setlikes(data[data.length-1].likes);
        setlikes1(data[data.length-2].likes);  
        setid(data[data.length -1]._id);
        setid2(data[data.length -2]._id);
        setAnswersYes(data[data.length -1].yes)
        setAnswersNo(data[data.length -1].no)
        setAnswersYes2(data[data.length -2].yes)
        setAnswersNo2(data[data.length -2].no)
      }).catch(err => {console.log(err)});
    }, 500);
    return () => clearInterval(interval);
  }, []);


  const AddLikes = (AdditionalLikes) => {
  
    axios.put(`http://localhost:5000/messages/question/${id}`,{likes: likes +AdditionalLikes})
  
   }
   const AddLikes1 = (AdditionalLikes) => {
  
    axios.put(`http://localhost:5000/messages/question/${id2}`,{likes: likes1 +AdditionalLikes})
  
   }

  const MinusLikes = (AdditionalLikes) => {
  
    axios.put(`http://localhost:5000/messages/question/${id}`,{likes: likes -AdditionalLikes})
  
   }
   
  const MinusLikes1 = (AdditionalLikes) => {
  
    axios.put(`http://localhost:5000/messages/question/${id2}`,{likes: likes1 -AdditionalLikes})
  
   }

  
   const PlusAnswerYes = (AdditionalLikes) => {
  
    axios.put(`http://localhost:5000/messages/question/${id}/2`,{yes: AnswersYes +AdditionalLikes})
  
   }

   const PlusAnswerYes2 = (AdditionalLikes) => {
  
    axios.put(`http://localhost:5000/messages/question/${id2}/2`,{yes: AnswersYes2 +AdditionalLikes})
  
   }
   const PlusAnswerNo = (AdditionalLikes) => {
  
    axios.put(`http://localhost:5000/messages/question/${id}/1`,{no: AnswersNo +AdditionalLikes})
  
   }
   const PlusAnswerNo2 = (AdditionalLikes) => {
  
    axios.put(`http://localhost:5000/messages/question/${id2}/1`,{no: AnswersNo2 +AdditionalLikes})
  
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
    AddLikes(2);

   }
  else if ((ArrowUpSelector === true) && (ArrowDown === ""))  {
    setlikes( prev => prev+1);
    setArrowUp("Featured__ArrowUp")
    AddLikes(1);
   }
   else {
    setlikes(prev => prev -1)
     setArrowUp("")
     MinusLikes(1);
   }
 }

 const addLike1 = () =>  {
  setArrowUpSelector1(prev => !prev); 
  
  if  (ArrowDown1 === "Featured__ArrowDown")  {
   OnceTogglerMinus();
   setArrowUp1("Featured__ArrowUp")
   setArrowDown1("");
   AddLikes1(2);

  }
 else if ((ArrowUpSelector1 === true) && (ArrowDown1 === ""))  {
   setlikes1( prev => prev+1);
   setArrowUp1("Featured__ArrowUp")
   AddLikes1(1);
  }
  else {
   setlikes1(prev => prev -1)
    setArrowUp1("")
    MinusLikes1(1);
  }
}
 
 const addDislike =() => {
   
  setArrowDownSelector(prev => !prev); 
   if (ArrowUp === "Featured__ArrowUp")  {
    setlikes(prev => prev -2)
    setArrowUp("")
    setArrowDown("Featured__ArrowDown")
    MinusLikes(2)

   }
   else if ((ArrowDownSelector === true) && (ArrowUp === "")) {
    MinusLikes(1);
   setArrowDown("Featured__ArrowDown");
   setlikes( (prev) => prev -1)
   
  }
  else {

    setlikes( (prev) => prev +1);
    setArrowDown("")
    AddLikes(1);
  }
 

}



const addDislike1 =() => {
   
  setArrowDownSelector1(prev => !prev); 
   if (ArrowUp1 === "Featured__ArrowUp")  {
    setlikes1(prev => prev -2)
    setArrowUp1("")
    setArrowDown1("Featured__ArrowDown")
    MinusLikes1(2)

   }
   else if ((ArrowDownSelector1 === true) && (ArrowUp1 === "")) {
    MinusLikes1(1);
   setArrowDown1("Featured__ArrowDown");
   setlikes1( (prev) => prev -1)
   
  }
  else {

    setlikes1( (prev) => prev +1);
    setArrowDown1("")
    AddLikes1(1);
  }
 

}
const addAnswerYes = () =>  {
  if  (YesToggler === true)  {
    setAnswersYes( prev => prev +1);
   PlusAnswerYes(1);
   setYesToggler(false)
  }
}

const addAnswerYes2 = () =>  {
  if  (YesToggler2 === true)  {
    setAnswersYes2( prev => prev +1);
   PlusAnswerYes2(1);
   setYesToggler2(false)
  }
}

const addAnswerNo = () =>  {
  if  (NoToggler === true)  {
    setAnswersNo( prev => prev +1);
   PlusAnswerNo(1);
   setNoToggler(false)
  }
  
}

const addAnswerNo2 = () =>  {
  if  (NoToggler2 === true)  {
    setAnswersNo2( prev => prev +1);
   PlusAnswerNo2(1);
   setNoToggler2(false)
  }
}






  return (
    <div className='Featured'>
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
          <div className="Featured__LeftText">{AnswersYes}</div>
          <div className="Featured__RightText"><Button variant="contained" color="secondary"  onClick= {addAnswerYes} >
  Yes
</Button></div>
        </div>
        <div className="Featured__Answers">
        <div className="Featured__LeftText">{AnswersNo}</div>
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
          <ArrowDropUpIcon className={ArrowUp1}  onClick= {addLike1} />
          <span id='Featured__IndicatorNumber'> {data[data.length -2].likes}</span>
          <ArrowDropDownIcon className={ArrowDown1}  onClick= {addDislike1} />
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
          <div className="Featured__Answers">
          <div className="Featured__LeftText">{AnswersYes2}</div>
          <div className="Featured__RightText"><Button variant="contained" color="secondary"  onClick= {addAnswerYes2} >
  Yes
</Button></div>
        </div>
        <div className="Featured__Answers">
        <div className="Featured__LeftText">{AnswersNo2}</div>
          <div className="Featured__RightText">
            <Button variant="contained" color="primary"  onClick= {addAnswerNo2}>
  No
</Button></div>
        </div>
        </div>

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
  );
}

export default FeaturedQuestions;
