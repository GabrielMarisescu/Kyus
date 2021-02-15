
import React from 'react';
import Modal from 'react-modal';
import Question from "./Question"



function FeaturedQuestions() {


    Modal.setAppElement('#root')
    var today = new Date();
    var Day = String(today.getDate()).padStart(2, '0');
    var Month = String(today.getMonth() + 1).padStart(2, '0');
    var Year = today.getFullYear();


  return (
    <div>
      <Question />

    </div>
    
  );
}

export default FeaturedQuestions;
