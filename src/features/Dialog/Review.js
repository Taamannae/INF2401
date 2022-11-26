import React from 'react';
import './Dialog.css';
import Modal from 'react-bootstrap/Modal';
import FeatherIcons from 'feather-icons-react';


function Review(props) {


    return (
        <Modal show={props.show} onHide={props.handleClose} dialogClassName="review-popup">
            <div className="model">
                <div className='mentor-model-header'>
                    <h1>Mentorship Feedback</h1>
                    <button className='model-close mentor-dialog-icons' onClick={props.handleClose}><FeatherIcons color="white" icon="x"/></button>
                </div>

                <div className="booking-confirm mentor-book-prev-content review">
                    <img src="./mentor/ment11.png" alt="" className="card-avatar" />
                    <div>
                        <h3>Elsa Wharburton</h3>
                        <div className='flex mentor-stats'>
                            <div className='flex align-center'>
                                <FeatherIcons color="#979797" icon='calendar' size="16" />
                                <h5>Sat Nov 26th</h5>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='feedback-content'>
                    <p className='feedback-question'>How did the session go with Natalie Porsche?</p>

                    <p className='feedback-answer'>Mentoring Natalia was wonderful. She’s incredibly smart and receptive designer with a lot of growth potential. I really love her attitude and passion towards design!</p>

                    <p className='feedback-question'>How could Natalie Porsche improve?</p>

                    <p className='feedback-answer'>Moving forward, Natalie should focus on digging deeper into the problems that she is trying to solve for. Think about the why. Why is this person experiencing this problem? Is this a symptom of a larger problem?</p>

                </div>

            </div>
            </Modal>
    );
}

export default Review;
