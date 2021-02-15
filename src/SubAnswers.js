
import { Avatar } from '@material-ui/core';
import './Question.css';
import React from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';


function SubAnswers() {
    return (
        <div>
             <div className="Featured__Answers_Sub">
            <div className="Featured__Arrows">
              <ArrowDropUpIcon  />
              <span id='Featured__IndicatorNumber'> 0</span>
              <ArrowDropDownIcon  />
              </div>
              <div className="Featured__AnswersRight">
              <Avatar  className="Featured__Avatar__Sub"/>
        
        <p>Anonymous</p>
        <p>This is the answer to the question above</p>
              </div>
              
              
           
            
            </div>
            
        </div>
    )
}

export default SubAnswers
