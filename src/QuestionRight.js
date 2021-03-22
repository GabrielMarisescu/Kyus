import  {React,useState,useEffect} from 'react'
import { Avatar } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import SubAnswers from './SubAnswers';
import './QuestionRight.css';



function QuestionRight() {

  const [data, setData] = useState({})

  useEffect(() => {
    fetch("https://blooming-bastion-30679.herokuapp.com/messages/question")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setData(data);

      }).catch(err => {console.log(err)});
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
                <div className='Featured__Question__Username'>{data[0]?.author}</div>
                <div className='Featured__Question__Date'>{data[0]?.date}</div>
              </div>
              <div className='Featured__Question__Question'>
              {data[0]?.question}
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
