import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import "./Booking.css"
import JoinCall from './features/Dialog/JoinCall';

const SESSIONS = [
  {
    sessionType: 'Whiteboarding Session',
    pic: "./mentor/ment1.png",
    link:'/whiteboarding',
    id:"1",
    name: "Jane Cooper",
    date: 'Mon, Nov 28th',
    time: '1:00pm - 2:00pm'
  }, {
    sessionType: 'Portfolio Presentation',
    pic: "./mentor/ment2.png",
    name: "Wade Warren",
    id:'2',
    link: '/maincall',
    date: 'Mon, Nov 28th',
    time: '1:00pm - 2:00pm'
  }, {
    sessionType: 'App Critique',
    pic: "./mentor/ment3.png",
    name: "Cody Fisher",
    id: "2",
    link: '/maincall',
    date: 'Mon, Nov 28th',
    time: '1:00pm - 2:00pm'
  },
]

function Booking() {
  const [show, setShow] = useState(false);
  const [callType, setCallType] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (props) => {
    setShow(true)
    setCallType(props.target.id)
  }

  return (
    <div className='booking flex flex-column'>
      <div className='flex home main-top'>
          {SESSIONS.map(item=> {
            return(
              <div className='home flex-1 flex flex-column session-item'>
                <div className='booking-sess-info'>
                  <img src={item.pic} className='review-image' alt="" />

                  <div>
                  <p className='session-title'>{item.sessionType} w/ {item.name}</p>

                  <div className='flex times'>
                    <div className='flex gap-4p align-center'>
                      <FeatherIcon size="16" icon="calendar"/>
                      <p>{item.date}</p>
                    </div>

                    <div className='flex gap-4p align-center'>
                      <FeatherIcon size="16" icon="clock" />
                      <p>{item.time}</p>
                    </div>
                  </div>
                  </div>

                </div>

                <div className='flex booking-sess-info-options'>
                  <div className='flex gap-8p flex-1'>
                    <Button id={item.link} variant="primary" onClick={handleShow}>
                      Join Call
                    </Button>
                    <Button variant="primary" onClick=''>
                      Reschedule
                    </Button>
                  </div>

                  <div>
                    <Button className="booking-cancel" variant="link" onClick=''>
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      <JoinCall
        show={show}
        callType={callType}
        handleClose={handleClose} />
    </div>
  );
}

export default Booking;
