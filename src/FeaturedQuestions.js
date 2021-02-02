import { Avatar } from '@material-ui/core';
import './FeaturedQuestions.css';
import Button from '@material-ui/core/Button';
import React, { useState } from 'react';
import Modal from 'react-modal';
import ModalStyling from './ModalStyling';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import CircularProgress from "@material-ui/core/CircularProgress"

function FeaturedQuestions() {

  const [data, setData] = useState(false)
    Modal.setAppElement('#root')
    const [modalIsActive,setmodalIsActive] = useState(false);
    var today = new Date();
    var Day = String(today.getDate()).padStart(2, '0');
    var Month = String(today.getMonth() + 1).padStart(2, '0');
    var Year = today.getFullYear();


  return (
    <div className='Featured'>
      <div className='Featured__textWrapper'>Featured Questions</div>


      <div className='Featured__Main'>
        <div className='Featured__TotalLeft'>
          <div className='Featured__Left'>
            <div className='Featured__IndicatorLeft'>
              <ArrowDropUpIcon className='Featured__ArrowUp' />
              <span id='Featured__IndicatorNumber'>0</span>
              <ArrowDropDownIcon className='Featured__ArrowDown' />
            </div>
            <div className='Featured__QuestionLeft'>
              <div className='Featured__Question__Header'>
                <div className='Featured__Question__Username'>anonymous</div>
                <div className='Featured__Question__Date'>Feb 2 2021</div>


         



               
              </div>
              <div className='Featured__Question__Question'>
                What do I do? My fries are from Greece!
              </div>
            </div>
          </div>
        </div>
        <div className='Featured__Question__Separator'></div>
        <div className='Featured__TotalRight'>
          <div className='Featured__Right'>
            <div className='Featured__IndicatorRight'>
              <ArrowDropUpIcon className='Featured__ArrowUp' />
              <span id='Featured__IndicatorNumber'>0</span>
              <ArrowDropDownIcon className='Featured__ArrowDown' />
            </div>
            <div className='Featured__QuestionRight'>
              <div className='Featured__Question__Header'>
                <div className='Featured__Question__Username'>anonymous</div>
                <div className='Featured__Question__Date'>Feb 2 2021</div>
              </div>
              <div className='Featured__Question__Question'>
                What do I do? My fries are from Greece!
              </div>
            </div>

          </div>
        </div>
      </div>
</div>}


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
          <ModalStyling />
        </Modal>
      </div>
    </div>
  );
}

export default FeaturedQuestions;
