import React from 'react';
import './Dialog.css';
import Modal from 'react-bootstrap/Modal';
import FeatherIcons from 'feather-icons-react';


function EntireScreen(props) {


    return (
        <Modal show={props.show} onHide={props.handleClose} 
        backdropClassName="join-bg"
        dialogClassName="join-entire-call-dialog">
            <div className="model">
                <div className='mentor-model-header'>
                    <h1>Share your entire screen</h1>
                    <button className='model-close mentor-dialog-icons' onClick={props.handleClose}><FeatherIcons color="white" icon="x"/></button>
                </div>
                <div className='preview-container'>
                    <div className='flex flex-column shared-screen active'>
                        <img src="./desk1.png" alt="" />
                        Desktop 1
                    </div>
                    <div className='flex flex-column shared-screen'>
                        <img src="./desk2.png" alt="" />
                        Desktop 2
                    </div>
                </div>

                <div className='join-entire-call-footer flex'>
                    <a href="#/" className="booking-button ">Share</a>
                </div>

            </div>
            </Modal>
    );
}

export default EntireScreen;
