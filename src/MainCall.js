import React, { useState, useRef } from 'react';
import './MainCall.css';
import FeatherIcons from 'feather-icons-react';
import Tooltip from 'react-bootstrap/Tooltip';
import Overlay from 'react-bootstrap/Overlay';
import PhoneShare from './features/Dialog/PhoneShare';
import EntireScreen from './features/Dialog/EntireScreen';


function MainCall() {
  const [show, setShow] = useState(false);
  const [showPhoneScreen, setShowPhoneScreen] = useState(false);
  const [showMobile, setShowMobile] = useState(false);
  const [showEntire, setShowEntire] = useState(false);
  const handleShowMobile = (props) => {
    setShowMobile(true);
    setShow(false)
  }
  const handleShowEntire= (props) => {
    setShow(false)
    setShowEntire(true);
  }
  const handleShowPhoneScreen= (props) => {
    setShowPhoneScreen(true);
    setShowMobile(false)

  }

  const handleCloseMobile = (props) => {
    setShowMobile(false)
  }
  const handleCloseEntire = (props) => {
    setShowEntire(false)
  }
  const target = useRef(null);

  return (
    <div className='main-call'>
      <div className='main-call-header'>
        <div>
          <a href="/" className='nav-item'>
            <FeatherIcons icon='zap' size="16" />
            <b>Menti</b>
          </a>

        </div>
        <h3>Mentorship Session | Jane Cooper</h3>
        <div className='social'>
          <a href="/booking" className='nav-header-item participants end-call'>
            <FeatherIcons icon={'phone-off'} size="16" /> Leave Call
          </a>
          <a href="#/" className='nav-header-item participants'>
            <FeatherIcons icon={'message-circle'} size="16" />
          </a>
          <a href="#/" className='nav-header-item participants'>
            <FeatherIcons icon={'user'} size="16" />
            2
          </a>

        </div>
      </div>
      <div className='main-call-video-container flex'>
        {showPhoneScreen && <img src="./phone-share.png" alt=""/>}
        
        <div className='main-call-video' style={{backgroundImage:"url('./mentor/main-caller.jpg')"}}>
          <div className='main-caller-name'>
            <FeatherIcons color="white" icon="bar-chart" />
            <h3>Jane Cooper</h3>
          </div>
          <div className='main-call-option-container'>
            <div className='left-side-spacer'>
            </div>
          <div>
            <div className='main-call-options'>
            <button className='model-close' onClick={''}><FeatherIcons color="white" icon="mic" /></button>
            <button className='model-close' onClick={''}><FeatherIcons color="white" icon="video" /></button>
                {showPhoneScreen && <button className='model-close share-screen-active' onClick={() => setShowPhoneScreen(false)}><FeatherIcons color="black" icon="share" /></button>}


                {!showPhoneScreen && <button className='model-close' onClick={() => setShow(!show)} ref={target} ><FeatherIcons color="white" icon="share" /></button>}

                <Overlay target={target.current} show={show} placement="top">
                  {(props) => (
                    <Tooltip className="video-share-cont" id="overlay-example" {...props}>
                      <h5>Present</h5>
                      <button className='share-item' onClick={handleShowEntire} >
                        <FeatherIcons color="white" icon="monitor" size="16px"/>
                        <h3>Entire screen</h3>
                      </button>
                      <button className='share-item'>
                        <FeatherIcons color="white" icon="layout" size="16px" />
                        <h3>One Window</h3>
                      </button>
                      <button className='share-item'>
                        <FeatherIcons color="white" icon="table" size="16px" />
                        <h3>Browser Tab</h3>
                      </button>
                      <button onClick={handleShowMobile} className='share-item'>
                        <FeatherIcons color="white" icon="smartphone" size="16px" />
                        <h3>Phone Screen</h3>
                      </button>

                    </Tooltip>
                  )}
                </Overlay>

            <a href="/booking" className='model-close end-call-btn'><FeatherIcons color="white" icon="phone-off" /></a>
            </div>
          </div>

          <div className='main-call-options'>
            <button className='model-close' onClick={''}><FeatherIcons color="white" icon="maximize" /></button>
            <button className='model-close' onClick={''}><FeatherIcons color="white" icon="more-vertical" /></button>

          </div>

          </div>

        </div>
      </div>

      <PhoneShare
          show={showMobile}
          handleClose={handleCloseMobile}
          handleShow={handleShowPhoneScreen}
          />
      <EntireScreen
        show={showEntire}
        handleClose={handleCloseEntire}
        handleShow={handleShowEntire}
      />

      <div style={{ backgroundImage: 'url("./mentor/you.jpeg")'}} className="mini-preview-call"></div>
    </div>
  );
}

export default MainCall;
