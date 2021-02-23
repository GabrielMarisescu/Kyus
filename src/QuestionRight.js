import  {React,useState,useEffect} from 'react'

import { Avatar } from '@material-ui/core';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import SubAnswers from './SubAnswers';
import './QuestionRight.css';



function QuestionRight() {

  const [data, setData] = useState(null)

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("https://blooming-bastion-30679.herokuapp.com/messages/question")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
       
      }).catch(err => {console.log(err)});
    }, 500);
    return () => clearInterval(interval);
  }, []);



    return (
  <div>
        {data ? <div className="Featured">
        <div className="Featured__Main">
             <div className='Featured__TotalRight'>
          <div className='Featured__Right'>
     <div className="IndicatorFix">
            <div className='Featured__IndicatorRight'>
              <div className="Featured__Arrows">
              <ArrowDropUpIcon  />
              <span id='Featured__IndicatorNumber'> 1</span>
              <ArrowDropDownIcon  />
              </div>
                   </div>
              <div className='Featured__QuestionRight'>
              <div className='Featured__Question__Header'>
              <Avatar  className="Avatar"/>
                <div className='Featured__Question__Username'>Anonymous</div>
                <div className='Featured__Question__Date'>DATE</div>
              </div>
              <div className='Featured__Question__Question'>
              This is a question
              </div>
              
          
    
      

            </div>
            </div>
            
        
           <SubAnswers />
           <SubAnswers />
           
           
          </div>
  
          
        </div>
        </div>
        </div>
          :   null}
          </div>
             
     
    )
}

export default QuestionRight
