import React, {useState} from 'react';
import './App.css';
import ArticleCard from './features/ArticleCard/ArticleCard';
import Masonry from 'react-masonry-css'
import CompanyGuidePopup from './features/Dialog/CompanyGuidePopup';

const ARTICLES = [
  {
    authorImage: "./authors/1.png",
    bgImage: "./art/art1.png",
    link: 'https://www.udacity.com/blog/2022/04/5-tips-for-a-successful-ux-interview.html',
    title: "5 Tips for a Successful UX Interview",
    preview: "According to Career Sidekick, the typical employer will interview 6-10 candidates for a job, and candidates will go through at least 2-3 rounds of interviews before receiving an offer. And the UX design interview process is no different. UX design interviews can range from 1:1 interviews, group interviews, hands on work and portfolio presentations... ",
    bgHeight: "200px",
  },
  {
    authorImage: "./authors/2.png",
    link: 'https://brainstation.io/career-guides/ux-designer-interview-questions',
    bgImage: "./art/art2.png",
    title: "UX Design Interview Questions",
    preview: "BrainStation’s UX Designer career guide is intended to help you take the first steps toward a lucrative career in UX design. Read on for the top interview questions for UX Designers, as well as strategies on how best to answer them...",
    bgHeight: "100px",
  }, {
    authorImage: "./authors/3.png",
    link: "https://www.toptal.com/designers/ux/interview-questions",
    bgImage: "./art/art3.png",
    title: "15 Essential UX Design Interview Questions ",
    preview: "Toptal sourced essential questions that the best UX designers can answer. Driven from our community, we encourage experts to submit questions and offer feedback.",
    bgHeight: "150px",
  },
  {
    authorImage: "./authors/4.png",
    link: "https://uxdesign.cc/what-to-expect-in-ux-designer-job-interviews-c7d031c9619",
    bgImage: "./art/art4.png",
    title: "What to Expect in UX Designer Job Interviews ",
    preview: "You’ve applied a few UX designer jobs. You check your email every few hours to see if there are any interview opportunities. No matter which channel you’ve used to send out resume/portfolio, if the hiring manager likes your info, you’ll head into further conversations.",
    bgHeight: "100px",
  }, {
    authorImage: "./authors/5.png",
    link: "https://medium.com/razorpay-design/how-to-approach-the-app-critique-round-46156b8fdbed",
    bgImage: "./art/art5.png",
    title: "How to Approach App Critiques",
    preview: "Late last year, I was actively looking for jobs — transitioning from Product Management to Product Design. This was going to be my first time interviewing for a Design role, and as someone from an engineering background, I had no clue what to expect. I spent hours reading design blogs, talking to mentors at 10k designers, and watching Indian design YouTubers to understand what the standard Product Design interview would look like.",
    bgHeight: "120px",
  },
  {
    authorImage: "./authors/6.png",
    link: "https://www.holloway.com/g/land-your-dream-design-job/sections/acing-the-app-critique",
    bgImage: "./art/art6.png",
    title: "Acting the App Critique: Land your Dream Job ",
    preview: "App critiques usually last 30–45 minutes. Typically, you'll interview with one or two designers. Either you'll be asked to bring an app for ...",
    bgHeight: "100px",
  }, {
    authorImage: "./authors/7.png",
    link: "https://uxdesign.cc/5-steps-to-master-a-whiteboard-design-challenge-6ecbe9ec38b7",
    bgImage: "./art/art7.png",
    title: "5 Steps to Master Whiteboard Design Challenge",
    preview: "It’s always exiting to get a call from the recruiter inviting you to an onsite interview. You get to see the office, meet the team, get a feel of the culture and show your work. It can also be stressful and a lot to prepare. There are plenty of resources online about interview questions, portfolio presentation, or even dress code, but there is one thing someone says that is impossible to prepare: the whiteboard design challenge at an onsite interview, where an interviewer give you a design problem and ask you to solve it right away.",
    bgHeight: "180px",
  },
  {
    authorImage: "./authors/8.png",
    link: "https://www.coursera.org/articles/preparing-for-the-whiteboard-design-challenge",
    bgImage: "./art/art8.png",
    title: "How to Prepare for the Whiteboard Design Challenge",
    preview: "As you begin to interview for UX designer roles, you may be asked to participate in a whiteboard design challenge. This typically occurs in the later stages of the interview process, such as your on-site interview. While the idea of a whiteboard challenge can seem daunting at first, you’ll find that with a little preparation, you can walk up to the whiteboard with confidence. Consider these tips to help prepare for your next whiteboard design challenge.",
    bgHeight: "100px",
  }, {
    authorImage: "./authors/9.png",
    link: "https://uxdesign.cc/how-to-break-into-the-ux-industry-land-a-job-and-keep-your-sanity-4967e78131a9",
    bgImage: "./art/art9.png",
    title: "How to Break Into the UX Industry, Land a Job, and Keep Your Sanity ",
    preview: "To all my fellow job hunters, I know how HARD job hunting is. It sucks. It’s you constantly putting yourself out there. It’s dealing with rejection and navigating through weird negotiation dances. It’s frustrating and excruciating. And why wasn’t this something we learned in school!?",
    bgHeight: "200px",
  },
  {
    authorImage: "./authors/1.png",
    link: "https://www.creativebloq.com/advice/ux-job",
    bgImage: "./art/art1.png",
    title: "How to Land Your First UX Job",
    preview: "Landing your first role as a designer can be challenging, but in this article I’ll give you the best advice I can about how to kick-start your experience design career. Whether you’re wondering where you go after walking out of the union building for the last time or you have a couple of years of design experience, I’ve made a list of five essential areas that are invaluable to propelling your career forwards.",
    bgHeight: "100px",
  }, {
    authorImage: "./authors/4.png",
    link: "https://www.uxbeginner.com/how-to-prepare-ux-interview-design-challenge/",
    bgImage: "./art/art1.png",
    title: "How to Prepare for UX Interview Design Challenges",
    preview: "Design challenges, or design assignments, are often the least enjoyable and most daunting for UX designers during the interview process. In this guide, get an in-depth understanding of how to prepare for your next design challenge. You can click to jump to each section",
    bgHeight: "200px",
  },
  {
    authorImage: "./authors/6.png",
    link: "https://www.designerfund.com/blog/designers-guide-working-tech",
    bgImage: "./art/art1.png",
    title: "A Designer’s Guide to Working in Tech",
    preview: "Many of us who trained as graphic or industrial designers could never have envisioned a career in technology — and then suddenly, given the rare combination of timing, opportunity, and market, we find ourselves thrust into an industry that we’re not just new to but is also rapidly changing how all people work.",
    bgHeight: "100px",
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
      <div className='flex flex-1'>
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
