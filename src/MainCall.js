import React from 'react';
import './MainCall.css';
import FeatherIcons from 'feather-icons-react';



function MainCall() {
  return (
    <div className='main-call'>
      <div className='main-call-header'>
        <div>
          <a href="/" className='nav-item'>
            <FeatherIcons icon='zap' size="16" />
            <b>Menta</b>
          </a>

        </div>

        <h3>Menta Mentorship Session | Jane Cooper</h3>

        <div className='social'>
          <a href="#/" className='nav-header-item participants'>
            <FeatherIcons icon={'message-circle'} size="16" />
          </a>
          <a href="#/" className='nav-header-item participants'>
            <FeatherIcons icon={'user'} size="16" />

            2
          </a>

        </div>
      </div>
      <div className='main-call-video-container'>
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
            <button className='model-close' onClick={''}><FeatherIcons color="white" icon="share" /></button>
            <a href="/booking" className='model-close'><FeatherIcons color="white" icon="phone-off" /></a>
            </div>
          </div>

          <div className='main-call-options'>

            <button className='model-close' onClick={''}><FeatherIcons color="white" icon="maximize" /></button>
            <button className='model-close' onClick={''}><FeatherIcons color="white" icon="more-vertical" /></button>

          </div>

          </div>

        </div>
      </div>

      <div style={{ backgroundImage: 'url("./mentor/you.jpeg")'}} className="mini-preview-call"></div>
    </div>
  );
}

export default MainCall;
