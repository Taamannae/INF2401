import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import "./Booking.css"
import JoinCall from './features/Dialog/JoinCall';
import FeatherIcons from 'feather-icons-react'

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

const FEEDBACK_SESSION = [
  {
    sessionType: 'App Critique',
    pic: "./mentor/ment4.png",
    name: "Annette Laue",
    id: "2",
    link: '/maincall',
    date: 'Sat Nov 28th',
    feedback_1: 'Mentoring Natalia was wonderful. She’s incredibly smart and receptive designer with a lot of growth potential. I really love her attitude and passion towards design!',
    feedback_2: 'Moving forward, Natalie should focus on digging deeper into the problems that she is trying to solve for. Think about the why. Why is this person experiencing this problem? Is this a symptom of a larger problem?'
  }, {
    sessionType: 'Whiteboarding',
    pic: "./mentor/ment5.png",
    name: "Darlene Robertson",
    id: "2",
    link: '/maincall',
    date: 'Sat Nov 28th',
    feedback_1: 'This session with Natalie went great! She was very collaborative and wasn’t afraid to ask me further questions to get a better understanding of the problem. She does a great job at breaking the problem down, defining the target user, and ideating on potential solutions',
    feedback_2: '...'
  }, {
    sessionType: 'Portfolio Presentation',
    pic: "./mentor/ment6.png",
    name: "Leslie Alexander",
    id: "2",
    link: '/maincall',
    date: 'Sat Nov 28th',
    feedback_1: 'Natalie asked some really insightful and well crafted questions during my session with her, not only did she come prepared, but she generated questions on the fly based on the conversation we were having.',
    feedback_2: 'Natalie should take some time to explore UI design principles more. She should look into laws of UX, gain a better understanding of grids, typography, and whitespace.'
  }, {
    sessionType: 'Whiteboarding',
    pic: "./mentor/ment7.png",
    name: "Guy Hawkins",
    id: "2",
    link: '/maincall',
    date: 'Sat Nov 28th',
    feedback_1: '...',
    feedback_2: '...'
  }, {
    sessionType: 'App Critique',
    pic: "./mentor/ment8.png",
    name: "Esther Howard",
    id: "2",
    link: '/maincall',
    date: 'Sat Nov 28th',
    feedback_1: '...',
    feedback_2: '...'
  }, {
    sessionType: 'Whiteboarding',
    pic: "./mentor/ment9.png",
    name: "Francisco Rivera",
    id: "2",
    link: '/maincall',
    date: 'Sat Nov 28th',
    feedback_1: '...',
    feedback_2: '...'
  },
]

function Review(props) {
  return(
    <div className='booking-review-past'>
      <div className="booking-confirm  mentor-book-prev-content review">
        <div style={{ backgroundImage: `url('${props.item.pic}')` }} alt="" className="card-avatar div-card-avatar" />
        <div>
          <h5 className='booking-review-past-brow'>{props.item.sessionType}</h5>
          <h3>{props.item.name}</h3>
          <div className='flex mentor-stats'>
            <div className='flex align-center'>
              <FeatherIcons color="#979797" icon='calendar' size="16" />
              <h5>{props.item.date}</h5>

            </div>
          </div>
        </div>
      </div>

      <div className='feedback-content'>
        <p className='feedback-question'>How did the session go with Natalie Porsche?</p>

        <p className='feedback-answer'>{props.item.feedback_1}</p>

        <p className='feedback-question'>How could Natalie Porsche improve?</p>

        <p className='feedback-answer'>{props.item.feedback_2}</p>

      </div>
    </div>
  )
}

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
      <div className='flex home main-top booking-spacer'>
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
      <div className='flex flex-1'>
        <p className='flex-1 home-title feedbackTitle'>Feedback from past sessions</p>
      </div>

      <div className='grid flex-1 review-section'>
          {FEEDBACK_SESSION.map(item => {
            return(
              <Review item={item}/>
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
