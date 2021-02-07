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
  const [ArrowDown, setArrowDown] = useState("")
  const [ArrowUp,setArrowUp] = useState("")
  const [likes,setlikes] = useState(0)
  const [id, setid] = useState("")
  const [OnceTogglerData,setOnceTogglerData]= useState(true)


  



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
        setid(data[data.length -1]._id);
      }).catch(err => {console.log(err)});
    }, 500);
    return () => clearInterval(interval);
  }, []);


  const AddLikes = (AddiotionalLikes) => {
  
    axios.put(`http://localhost:5000/messages/question/${id}`,{likes: likes +AddiotionalLikes})
  
   }

  const MinusLikes = (AddiotionalLikes) => {
  
    axios.put(`http://localhost:5000/messages/question/${id}`,{likes: likes -AddiotionalLikes})
  
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




  return (
    <div className='Featured'>
      <div className='Featured__textWrapper'>Featured Questions</div>


    {  data ? 
    <div className='Featured__Main'>
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
            {data[data.length -1]?.question}
          </div>
        </div>
      </div>
    </div>
    <div className='Featured__TotalRight'>
      <div className='Featured__Right'>
        <div className='Featured__IndicatorRight'>
          <ArrowDropUpIcon className='Featured__ArrowUp' />
          <span id='Featured__IndicatorNumber'>0</span>
          <ArrowDropDownIcon className='Featured__ArrowDown' />
        </div>
        <div className='Featured__QuestionRight'>
          <div className='Featured__Question__Header'>
          <Avatar  className="Avatar"/>
            <div className='Featured__Question__Username'>{data[data.length -1].author}</div>
            <div className='Featured__Question__Date'>Feb 2 2021</div>
          </div>
          <div className='Featured__Question__Question'>
            Right
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
