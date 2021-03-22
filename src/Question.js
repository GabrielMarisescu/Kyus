
import './Question.css';
import Button from '@material-ui/core/Button';
import React, { useState  } from 'react';
import Modal from 'react-modal';
import ModalStyling from './ModalStyling';
import QuestionLeft from "./QuestionLeft"
import QuestionRight from "./QuestionRight"


function Question() {
  Modal.setAppElement('#root')
  const [modalIsActive,setmodalIsActive] = useState(false);
    return (
        <div className="Featured">
 <div className='Featured__textWrapper'>Featured Questions</div>
 <div className="Featured__Fix">
<QuestionLeft />
<QuestionRight />
</div>


        
    
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
