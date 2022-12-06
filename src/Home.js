import React, {useState} from 'react';
import './App.css';
import ArticleCard from './features/ArticleCard/ArticleCard';
import Masonry from 'react-masonry-css'
import CompanyGuidePopup from './features/Dialog/CompanyGuidePopup';
import Dialog from './features/Dialog/Dialog';
import Mentor from './features/Dialog/Mentor';
import MentorConfirm from './features/Dialog/MentorConfirm';
import FeatherIcons from 'feather-icons-react'


const ARTICLES = [
  {
    authorImage: "./authors/1.png",
    bgImage: "./art/art1.png",
    link: 'https://www.udacity.com/blog/2022/04/5-tips-for-a-successful-ux-interview.html',
    title: "5 Tips for a Successful UX Interview",
    preview: "According to Career Sidekick, the typical employer will interview 6-10 candidates for a job, and candidates will go through at least 2-3 rounds of interviews bef...",
    bgHeight: "200px",
  },
  {
    authorImage: "./authors/2.png",
    link: 'https://brainstation.io/career-guides/ux-designer-interview-questions',
    bgImage: "./art/art2.png",
    title: "UX Design Interview Questions",
    preview: "BrainStation’s UX Designer career guide is intended to help you take the first steps toward a lucrative career in UX design. Read on for the top interview questions for UX Designers, as well as strategies...",
    bgHeight: "200px",
  }, {
    authorImage: "./authors/3.png",
    link: "https://www.toptal.com/designers/ux/interview-questions",
    bgImage: "./art/art3.png",
    title: "15 Essential UX Design Interview Questions ",
    preview: "Toptal sourced essential questions that the best UX designers can answer. Driven from our community, we encourage experts to submit questions and offer feedback.",
    bgHeight: "200px",
  },
  {
    authorImage: "./authors/4.png",
    link: "https://uxdesign.cc/what-to-expect-in-ux-designer-job-interviews-c7d031c9619",
    bgImage: "./art/art4.png",
    title: "What to Expect in UX Designer Job Interviews ",
    preview: "You’ve applied a few UX designer jobs. You check your email every few hours to see if there are any interview opportunities. No matter which channel you’ve used...",
    bgHeight: "200px",
  }, 
]


const COMPANIES = [
  {
    image: './company/comp1.svg',
    title: 'Interaction Designer',
    company: 'Google',
  }, {
    image: './company/comp2.svg',
    title: 'Product Designer',
    company: 'Meta',
  }, {
    image: './company/comp3.svg',
    title: 'UX Designer',
    company: 'AirBnB',
  }, {
    image: './company/comp4.svg',
    title: 'Product Designer',
    company: 'Netflix',
  },
]

const MENTORS = [
  {
    bgImage: "./mentor/ment6.png",
    name: "Leslie Alexander",
    role: "Product Designer",
    yoe: "8",
    company: 'Google'
  }, {
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
  }, {
    bgImage: "./mentor/ment3.png",
    name: "Cody Fisher",
    role: "Product Designer",
    yoe: "8",
    company: 'Google'
  }
]

const SESSIONS = [
  {
    sessionType: 'Whiteboarding Session',
    pic: "./mentor/ment1.png",
    name: "Jane Cooper",
    day: '28',
    month: 'Nov'
  }, {
    sessionType: 'Portfolio Presentation',
    pic: "./mentor/ment2.png",
    name: "Wade Warren",
    day: '29',
    month: 'Nov'
  }, {
    sessionType: 'App Critique',
    pic: "./mentor/ment3.png",
    name: "Cody Fisher",
    day: '01',
    month: 'Dec'
  },
]

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)



  const [showMentor, setShowMentor] = useState(false);
  const [showMentorMentor, setShowMentorMentor] = useState(false);
  const [showConfirmMentor, setShowConfirmMentor] = useState(false);

  const handleCloseMentor = () => setShowMentor(false);
  const handleShowMentor = () => {
    setShowMentor(true)
    setShowMentorMentor(false)

  };

  const handleMentorCloseMentor = () => setShowMentorMentor(false);
  const handleMentorShowMentor = () => {
    setShowMentor(false)
    setShowMentorMentor(true)
  };

  const handleConfirmCloseMentor = () => setShowConfirmMentor(false);
  const handleConfirmShowMentor = () => {
    setShowMentorMentor(false)
    setShowConfirmMentor(true)
  };


  return (
    <div className='flex flex-column home-section'>
      <div className='flex home main-top'>
        <div className='home upcoming'>
          <div className='flex flex-1'>
            <p className='flex-1 home-title'>Upcoming Sessions</p>
            <a href="/booking" className='home-title-link'>See All</a>
          </div>

          {SESSIONS.map(item=> {
            return(
              <div className='home session-item'>
                <div className='flex-1'>
                  <p className='session-title'>{item.sessionType}</p>
                  <div className='flex align-center review-person'>
                    <img src={item.pic} className='review-image' alt="" />
                    <p className='session-subtitle'>{item.name}</p>
                  </div>
                </div>

                <div className='flex flex-column align-center'>
                    <p className='session-title'>{item.day}</p>
                    <p className='session-subtitle'>{item.month}</p>
                </div>
              </div>
            )
          })}

        </div>
        <a href="#/" className='home highlighted-article flex flex-column' style={{ backgroundImage: "url('./main-article.svg')"}}>
          <div className='flex-1'>
            <img src="./mentor/main-art.png" alt=""/>

          </div>
          <div>
            <h2>How to prep for design interviews</h2>
            <div className='flex main-article-auther'>
              <p className='flex-1'>By Jane Cooper</p>
              <p>Read Now</p>
            </div>
          </div>

        </a>

      </div>

      <div className='flex flex-1 subtle-title'>
        <p className='flex-1 home-title'>Company Interview Guides</p>
        <a href="/guide" className='home-title-link'>See All</a>
      </div>

      <div className='flex companies-guides'>
        {COMPANIES.map(item=>{
          return(
            <button onClick={handleShow} className='home company-guide flex align-center flex-1'>
              <div><img src={item.image} className="company-logo" alt=""/></div>
              <div>

                <h3>{item.title}</h3>
                <h5 className='flex align-center'>{item.company} · Verified <img src="./verified.svg" className='verified' alt="" /></h5>
              </div>
            </button>
          )
        })}

      </div>

      <div className='flex flex-1 subtle-title'>
        <p className='flex-1 home-title'>Popular Mentors</p>
        <a href="/mentors" className='home-title-link'>See All</a>
      </div>

      <div className='flex companies-guides'>
        <Dialog
          show={showMentor}
          handleClose={handleCloseMentor}
          handleMentorShow={handleMentorShowMentor}
        />
        <Mentor
          show={showMentorMentor}
          handleShow={handleShowMentor}
          handleConfirmShow={handleConfirmShowMentor}
          handleClose={handleMentorCloseMentor} />
        <MentorConfirm
          show={showConfirmMentor}
          handleShow={handleConfirmShowMentor}
          handleClose={handleConfirmCloseMentor} />
        {MENTORS.map(item => {
          return (
            <button onClick={handleShowMentor} className='mentor-cont flex-1'
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


      <div className='flex flex-1'>
        <p className='flex-1 home-title'>General Articles & Advice</p>
        <a href="/articles" className='home-title-link'>See All</a>
      </div>
      <CompanyGuidePopup
        show={show}
        handleClose={handleClose} />
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">

        {ARTICLES.map(x => {
          return(
            <ArticleCard
              authorImage={x.authorImage}
              bgImage={x.bgImage}
              title={x.title}
              preview={x.preview}
              bgHeight={x.bgHeight}
              link={x.link}
            />
          );
        })}

      </Masonry>
    </div>
  );
}

export default App;
