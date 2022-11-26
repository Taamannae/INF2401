import React from 'react';
import './Dialog.css';
import Modal from 'react-bootstrap/Modal';
import FeatherIcons from 'feather-icons-react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';


function Mentor(props) {


    return (
        <Modal show={props.show} onHide={props.handleClose} dialogClassName="mentor-dialog">
            <div className="model">
                <div className='mentor-model-header'>
                    <button className='model-close mentor-dialog-icons' onClick={props.handleShow}><FeatherIcons color="white" icon="arrow-left" /></button>
                    <h1>Book a Session</h1>
                    <button className='model-close mentor-dialog-icons' onClick={props.handleClose}><FeatherIcons color="white" icon="x"/></button>
                </div>
                <div className='mentor-book-prev'>
                    <div className="mentor-book-prev-content">
                        <img src="./mentor/ment61.png" alt="" className="card-avatar" />
                        <h3>Leslie Alexander</h3>
                        <div className='flex mentor-stats'>
                            <div className='flex align-center'>
                                <FeatherIcons color="#979797" icon='calendar' size="16" />
                                <h5>Sat Nov 26th</h5>

                            </div>
                            <div className='flex align-center'>
                                <FeatherIcons color="#979797" icon='clock' size="16" />
                                <h5>11:00-12:00pm</h5>
                            </div>
                        </div>
                    </div>
                    <div className="mentor-model-card-bg" style={{ backgroundImage: `url('./person-bg.png')` }}/>
              
                    
                </div>
                <div className='mentor-model-input-group'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Session Type</Form.Label>
                        <Form.Select>
                            <option>Portfolio Presentation</option>
                            <option>Whiteboarding</option>
                            <option>App Critique</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Label>Add an Introduction</Form.Label>

                    <Form.Control as="textarea" placeholder="Leave a comment here" />
                </div>
                <div className='mentor-book-linkset'>
                    <Button variant="link" onClick={props.handleClose}>Cancel</Button>
                    <Button onClick={props.handleConfirmShow}>Book for Nov 26th</Button>
                </div>

            </div>
            </Modal>
    );
}

export default Mentor;
