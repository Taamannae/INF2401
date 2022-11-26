import React, { useState, useRef } from 'react';

import Tooltip from 'react-bootstrap/Tooltip';
import Overlay from 'react-bootstrap/Overlay';
import { Button } from 'react-bootstrap';
import Review from './Dialog/Review';

import "./Sidebar.css";
import { useLocation } from "react-router-dom";
import FeatherIcons from 'feather-icons-react'

const NAVITEMS = [
    {
        icon: 'home',
        path: '/',
        title: 'Home',
        id: '0'
    },{
        icon: 'calendar',
        path: '/booking',
        title: 'Your Sessions',
        id: '1'
    },{
        icon: '',
        path: '',
        title: '',
        id: 'div'
    }, {
        icon: 'user',
        path: '/mentors',
        title: 'Mentors',
        id: '2'
    }, {
        icon: 'file-text',
        path: '/articles',
        title: 'Articles',
        id: '3'
    }, {
        icon: 'book-open',
        path: '/guide',
        title: 'Company Guides',
        id: '4'
    },

]

const NOTIFS = [
    {
        image: './mentor/ment1.png',
        text: 'Booking confirmed with Savannah Nguyen',
        link: '/booking',
    },
    {
        image: './mentor/ment2.png',
        text: 'Elsa Wharburton has completed a feedback form for you for your meeting on October 31, 2022',
        link: 'popup',
    }, {
        image: './mentor/ment3.png',
        text: 'Booking confirmed with Eleanor Pena',
        link: '/booking',
    },
]

function navButton(icon) {
    return (
        <a href="#/" className='nav-header-item'>
            <FeatherIcons icon={icon} size="16" />
        </a>
    )
}


export default function Header() {
    const location = useLocation();
    const [show, setShow] = useState(false);
    const target = useRef(null);

    const [showFeedback, setShowFeedback] = useState(false);

    const handleClose = () => setShowFeedback(false);
    const handleShow = () => {
        setShowFeedback(true);
        setShow(false)
    }

    function Notif(props) {

        if (props.link === 'popup') {
            return (
                <button className="flex notif-item feedback" onClick={handleShow}>
                    <div>
                        <div style={{ backgroundImage: `url('${props.image}')` }} className="notif-avatar" />
                    </div>
                    <div className="flex-1 notif-text">
                        <p>{props.text}</p>
                        <Button>View Feedback</Button>

                    </div>
                    <div className="red-dot">

                    </div>

                </button>
            )
        }
        return (
            <a href={props.link} className="flex notif-item">
                <div>
                    <div style={{ backgroundImage: `url('${props.image}')` }} className="notif-avatar" />
                </div>
                <div className="flex-1 notif-text">
                    <p>{props.text}</p>
                    <Button>View booking </Button>

                </div>
                <div className="red-dot">

                </div>

            </a>
        )
    }


    let found = {title: 'Hello'}
    if (!location.pathname.includes('maincall') && !location.pathname.includes('whiteboarding')) {
         found = NAVITEMS.find(x => x.path === location.pathname)
    }
    return (
        <div className='header flex'>
            <div className='flex-1'><h1>{found.title}</h1></div>
            <div className='header-right-section'>
                {navButton('search')}

                <button ref={target} onClick={() => setShow(!show)} className='edit-icons-notif'>{navButton('bell')}</button>
                <Overlay target={target.current} show={show} placement="bottom">
                    {(props) => (
                        <Tooltip className="notification-cont"  id="overlay-example" {...props}>
                        {NOTIFS.map(item =>
                            <Notif
                                text={item.text}
                                image={item.image}
                                link={item.link}
                            />
                            )}

                        </Tooltip>
                    )}
                </Overlay>
                {navButton('message-circle')}
                <img alt="" className="user-avatar" src="./user.png" />
            </div>
            <Review 
                show={showFeedback}
                handleClose={handleClose} />
        </div>
    )

};