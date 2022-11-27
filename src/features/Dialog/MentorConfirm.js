import React from 'react';
import './Dialog.css';
import Modal from 'react-bootstrap/Modal';
import FeatherIcons from 'feather-icons-react';


const ARTICLES = [
    {
        bgImage: "./mentor/ment1.png",
        name: "Jane Cooper",
        role: "Product Designer",
        yoe: "8",
        company: 'Google'
    },
    {
        bgImage: "./mentor/ment2.png",
        name: "Wade Warren",
        role: "Product Designer",
        yoe: "8",
        company: 'Google'
    }, 
]

function MentorConfirm(props) {


    return (
        <Modal show={props.show} onHide={props.handleClose} dialogClassName="mentor-dialog">
            <div className="model">
                <div className='mentor-model-header'>
                    <h1>Booking Requested</h1>
                    <button className='model-close mentor-dialog-icons' onClick={props.handleClose}><FeatherIcons color="white" icon="x"/></button>
                </div>
                <div className='mentor-book-prev'>
                    <div className="booking-confirm mentor-book-prev-content ">
                        <img src="./mentor/ment61.png" alt="" className="card-avatar" />
                        <div>
                            <h3>Whiteboarding with Leslie Alexander</h3>
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
                    </div>
                    <p className="booking-confirm-info">We sent a booking request to your mentor. If they accept, you will receive confirmation and a calendar invite.</p>
                    <a href="/booking" className="booking-button">View Booking</a>
                    
                </div>
                <div>
                    <div className='other-mentor-set'>
                        <h1>Other mentors</h1>

                            <div className='flex mentor-stats'>
                                <button className='model-close mentor-dialog-icons'><FeatherIcons size="px" color="white" icon="arrow-left" /></button>
                                <button className='model-close mentor-dialog-icons'><FeatherIcons size="px" color="white" icon="arrow-right" /></button>
                            </div>
                    </div>

                    <div className='mentor-confirm-others'>
                        {ARTICLES.map(item=> {
                            return(
                                <button className='mentor-cont flex-1'
                                    style={{ backgroundImage: `url("${item.bgImage}"` }}>

                                    <div className='mentor-content'>
                                        <div className='mentor-name'>
                                            <h2>{item.name}</h2>
                                            <h4>{item.role}</h4>
                                        </div>
                                        <div className='flex mentor-stats'>
                                            <div className='flex align-center'>
                                                <FeatherIcons color="#979797" icon='briefcase' size="16" />
                                                <h5>{item.company}</h5>

                                            </div>
                                            <div className='flex align-center'>
                                                <FeatherIcons color="#979797" icon='bar-chart' size="16" />
                                                <h5>{item.yoe} Yoe</h5>
                                            </div>
                                        </div>

                                    </div>

                                </button>
                            )
                        })}

                    </div>
                </div>


            </div>
            </Modal>
    );
}

export default MentorConfirm;
