import React from 'react';
import './Dialog.css';
import Modal from 'react-bootstrap/Modal';
import FeatherIcons from 'feather-icons-react';
import { Button } from 'react-bootstrap';


function PhoneShare(props) {


    return (
        <Modal show={props.show} onHide={props.handleClose} 
        backdropClassName="join-bg"
        dialogClassName="join-mobile-call-dialog">
            <div className="model">
                <div className='mentor-model-header'>
                    <h1>Share phone screen</h1>
                    <button className='model-close mentor-dialog-icons' onClick={props.handleClose}><FeatherIcons color="white" icon="x"/></button>
                </div>
                <div className='preview-container flex-column'>
                    <img src='./QR.svg' className='qr-img' alt=""/>

                    <p className='feedback-question'>Scan QR code</p>
                    <p className='feedback-answer'>Use your phone’s camera to scan the QR code in order to share your mobile screen.

                        Your phone will share its screen and any audio from the device.</p>

                    <Button onClick={props.handleShow} className=" flex-1 booking-button-phone">Done</Button>
                </div>

            </div>
            </Modal>
    );
}

export default PhoneShare;
