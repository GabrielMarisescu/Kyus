import React from 'react'
import "./FullQuestions.css"
import QuestionRight from "./QuestionRight"
import QuestionLeft  from "./QuestionLeft"

function FullQuestions() {
    return (
        <div>
        <div className="FullQuestions">
           
           <QuestionLeft />
           <QuestionRight />
       
        </div>
        </div>
    )
}

export default FullQuestions
