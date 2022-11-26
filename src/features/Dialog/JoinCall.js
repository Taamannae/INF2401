import React from 'react';
import './Dialog.css';
import Modal from 'react-bootstrap/Modal';
import FeatherIcons from 'feather-icons-react';


function JoinCall(props) {


    return (
        <Modal show={props.show} onHide={props.handleClose} dialogClassName="join-call-dialog">
            <div className="model">
                <div className='mentor-model-header'>
                    <h1>Joining Session</h1>
                    <button className='model-close mentor-dialog-icons' onClick={props.handleClose}><FeatherIcons color="white" icon="x"/></button>
                </div>
                <div className='preview-container'>
                    <div className='preview-video' style={{backgroundImage: 'url("./mentor/you.jpeg")'}}>

                        <button className='model-close mentor-dialog-icons setting' onClick={props.handleClose}><FeatherIcons color="white" icon="settings" /></button>

                        <button className='model-close mentor-dialog-icons mic' onClick={props.handleClose}><FeatherIcons color="white" icon="mic" /></button>

                        <button className='model-close mentor-dialog-icons video' onClick={props.handleClose}><FeatherIcons color="white" icon="video" /></button>

                    </div>
                </div>

                <div className='join-call-footer flex'>
                    <div className='flex-1'>
                        <h4>Joining Call as</h4>
                        <h2>Natalie Porsche</h2>
                    </div>
                    <a href={props.callType}className="booking-button">Join Call</a>
                </div>

            </div>
            </Modal>
    );
}

export default JoinCall;
