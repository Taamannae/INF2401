import React, { useState } from 'react';
import './Dialog.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FeatherIcons from 'feather-icons-react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';


function Dialog(props) {

    const [radioValue, setRadioValue] = useState('1');
    const [radioTimeValue, setRadioTimeValue] = useState('4');

    const radios = [
        { day: 'SAT', date: '26 Nov', slots: 4, value: '1' },
        { day: 'SUN', date: '27 Nov', slots: 4, value: '2' },
        { day: 'SAT', date: '03 Dec', slots: 4, value: '3' }
    ];
    const radios2 = [
        { time: "11:00AM", value: '4' },
        { time: "12:00PM", value: '5' },
        { time: "1:00PM", value: '6' },
        { time: "2:00PM", value: '7' }
    ];


    return (
            <Modal show={props.show} onHide={props.handleClose}>
            <div className="model">
                <button className='model-close' onClick={props.handleClose}><FeatherIcons color="white" icon="x"/></button>
            <div alt="" className="model-card-bg" style={{ backgroundImage: `url('./person-bg.png')`, height: "250px" }} />
            <div className='dialog-content'>
            <div className='menu'>
                <div className="menu-item">
                        <img src="./mentor/ment61.png" alt="" className="card-avatar" />

                </div>
                <div className="menu-rect"></div>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ position: "absolute", zIndex: '-1' }}>
                    <defs>
                        <filter id="goo">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className='model-header flex'>
                <div>
                    <h1>Leslie Alexander</h1>
                    <p>Google · Senior Product Designer</p>
                </div>

                <div className='social'>
                    <a href="#/" className='nav-header-item'>
                        <FeatherIcons icon={'linkedin'} size="16" />
                    </a>
                    <a href="#/" className='nav-header-item'>
                        <FeatherIcons icon={'twitter'} size="16" />
                    </a>
                    <a href="#/" className='nav-header-item'>
                        <FeatherIcons icon={'mail'} size="16" />
                    </a>

                </div>
            </div>
            </div>

            <div className='model-content-inner'>
                <div className='model-content-inner-left'>
                    <div className='flex'>
                        <p className='mentor-title'>About me</p>
                        <p className='mentor-info-content'>
                                A senior product designer at a cybersecurity insurance startup with 8 years of experience. Part-time yoga barre instructor, dog mom of two, avid traveler and dabbler of numerous hobbies
                        </p>
                    </div>
                        <div className='flex'>
                            <p className='mentor-title'>Ask About</p>
                            <p className='mentor-info-content'>
                                Portfolio presentations, white boarding, app critques, design challenges, portfolio reviews
                            </p>
                        </div>
                        <div className='flex experience'>
                            <p className='mentor-title'>Experience</p>

                            <div className='flex flex-1 flex-column'>
                                <div  className='flex flex-1'>
                                    <div className='flex-1'>
                                        <p className='mentor-info-content'>Senior Product Designer
                                        </p>
                                        <p className='mentor-title'>Google</p>

                                    </div>
                                    <p className='mentor-title dates'>2018 - Present</p>
                                </div>
                                <div className='flex flex-1'>
                                    <div className='flex-1'>
                                        <p className='mentor-info-content'>Product Designer
                                        </p>
                                        <p className='mentor-title'>Meta</p>

                                    </div>
                                    <p className='mentor-title dates'>2016 - 2018</p>
                                </div>
                                <div className='flex flex-1'>
                                    <div className='flex-1'>
                                        <p className='mentor-info-content'>Product Designer
                                        </p>
                                        <p className='mentor-title'>AirBnB</p>

                                    </div>
                                    <p className='mentor-title dates'>2014 - 2016</p>
                                </div>
                            </div>

                        </div>

                        <div className='flex reviews'>
                            <p className='mentor-title'>Reviews</p>
                            <div className='flex flex-1 flex-column'>
                                <div className='flex flex-1 flex-column review'>
                                    <p className='mentor-info-content'>Had this great session with Leslie with a lot of great feedback, details, and great design perspectives. Great talk. Booked another session, cheers :)
                                    </p>
                                    <div className='flex align-center review-person'>
                                        <img src="./mentor/ment111.png" className='review-image' alt=""/>
                                    <p className='mentor-title'>Savannah Nguyen · Nov 13th 2022</p>
                                    </div>
                                </div>
                                <div className='flex flex-1 flex-column review'>
                                    <p className='mentor-info-content'>Had this great session with Leslie with a lot of great feedback, details, and great design perspectives. Great talk. Booked another session, cheers :)
                                    </p>
                                    <div className='flex align-center review-person'>
                                        <img src="./mentor/ment111.png" className='review-image' alt="" />
                                        <p className='mentor-title'>Savannah Nguyen · Nov 13th 2022</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                </div>
                    <div className='model-content-inner-right meeting-times flex flex-column'>
                        <div >
                            <p className='mentor-info-content'>Availability</p>

                            <ButtonGroup>
                                {radios.map((radio, idx) => (
                                    <ToggleButton
                                        key={idx}
                                        id={`radio-${idx}`}
                                        type="radio"
                                        variant={'outline-secondary'}
                                        name="radio"
                                        value={radio.value}
                                        checked={radioValue === radio.value}
                                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                                    >
                                        <p className="toggle-day">{radio.day}</p>
                                        <p className="toggle-date">{radio.date}</p>
                                        <p className="toggle-slot">{radio.slots} slots</p>
                                    </ToggleButton>
                                ))}

                                <button className='time-next'><FeatherIcons color="white" icon="arrow-right" /></button>
                            </ButtonGroup>
                        </div>
                        <div className='mentor-times-choices'>
                            <p className='mentor-info-content'>Times</p>
                            <p className='mentor-title'>All times are in Eastern Standard time</p>
                            <ButtonGroup>
                                {radios2.map((radio, idx) => (
                                    <ToggleButton
                                        key={idx}
                                        id={`radio2-${idx}`}
                                        type="radio"
                                        variant={'outline-secondary'}
                                        name="radio2"
                                        value={radio.value}
                                        checked={radioTimeValue === radio.value}
                                        onChange={(e) => setRadioTimeValue(e.currentTarget.value)}
                                    >
                                        <p className="toggle-date">{radio.time}</p>
                                    </ToggleButton>
                                ))}
                            </ButtonGroup>
                        </div>

                        <Button variant="primary" onClick={props.handleMentorShow}>
                            Book Session
                        </Button>
                </div>

            </div>
            </div>
            </Modal>
    );
}

export default Dialog;
