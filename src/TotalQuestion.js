import React from 'react'
import QuestionRight from "./QuestionRight"
import QuestionLeft  from "./QuestionLeft"
import "./FullQuestions.css"

function TotalQuestion() {
    return (
        <div className="FullQuestions">
             <QuestionLeft />
           <QuestionRight />
       
            
        </div>
    )
}

export default TotalQuestion
