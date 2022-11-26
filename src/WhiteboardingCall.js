import React, {useState, useRef} from 'react';
import './MainCall.css';
import FeatherIcons from 'feather-icons-react';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import { ChromePicker } from "react-color";
import Tooltip from 'react-bootstrap/Tooltip';
import Overlay from 'react-bootstrap/Overlay';
import Accordion from 'react-bootstrap/Accordion';

const styles = {
};


function WhiteboardingCall() {

  const [show, setShow] = useState(false);
  const target = useRef(null);
  const [color, setColor] = useState('#333333');
  const handleChange = color => setColor(color.hex);


  return (
    <div className='main-call'>
      <div className='main-call-header'>
        <div>
          <a href="/" className='nav-item'>
            <FeatherIcons icon='zap' size="16" />
            <b>Menta</b>
          </a>

        </div>

        <h3> Whiteboarding Session | Jane Cooper</h3>

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

      <div className='canvas-cont'>
        <div className='edit-icons-container'>
          <button className='edit-icons'><FeatherIcons icon={'mouse-pointer'} size="24" color="white" /></button>
          <button className='edit-icons'><FeatherIcons icon={'square'} size="24" color="white" /></button>
          <button className='edit-icons'><FeatherIcons icon={'type'} size="24" color="white" /></button>
          <button className='edit-icons active'><FeatherIcons icon={'pen-tool'} size="24" color="white" /></button>
          <button className='edit-icons'><FeatherIcons icon={'arrow-up-right'} size="24" color="white" /></button>
          <button className='edit-icons'><FeatherIcons icon={'image'} size="24" color="white" /></button>
          <button className='edit-icons'><FeatherIcons icon={'link'} size="24" color="white" /></button>
          <button ref={target} onClick={() => setShow(!show)} className='edit-icons'><div className='color-trigger' style={{backgroundColor: color}}></div></button>
          <Overlay target={target.current} show={show} placement="right">
            {(props) => (
              <Tooltip id="overlay-example" {...props}>
                <ChromePicker color={color} onChangeComplete={handleChange} />

              </Tooltip>
            )}
          </Overlay>

        </div>
        <ReactSketchCanvas
          style={styles}
          width="100%"
          height="100%"
          strokeWidth={2}
          strokeColor={color}
          backgroundImage="./transparent.svg"
          
        />
        <div className='dot-bg' style={{ backgroundImage:"url('./dot.svg')"}}></div>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Whiteboard Prompt</Accordion.Header>
            <Accordion.Body>
              Design an art history app for elderly couples in Brussels

              <a href="#/" className='shuffle'>
                <FeatherIcons icon={'message-circle'} size="16" color="#979797"/> Shuffle
              </a>

            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

      </div>

      <div style={{ backgroundImage: 'url("./mentor/you.jpeg")'}} className="mini-preview-call"></div>
    </div>
  );
}


export default WhiteboardingCall;
