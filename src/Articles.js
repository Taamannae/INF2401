import React, {useState} from 'react';
import './App.css';
import ArticleCard from './features/ArticleCard/ArticleCard';
import Masonry from 'react-masonry-css'
import { Form } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';

const ARTICLES = [
  {
    authorImage: "./authors/1.png",
    bgImage: "./art/art1.png",
    link:'https://www.udacity.com/blog/2022/04/5-tips-for-a-successful-ux-interview.html',
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
    link:"https://www.toptal.com/designers/ux/interview-questions",
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
    link:"https://medium.com/razorpay-design/how-to-approach-the-app-critique-round-46156b8fdbed",
    bgImage: "./art/art5.png",
    title: "How to Approach App Critiques",
    preview: "Late last year, I was actively looking for jobs — transitioning from Product Management to Product Design. This was going to be my first time interviewing for a Design role, and as someone from an engineering background, I had no clue what to expect. I spent hours reading design blogs, talking to mentors at 10k designers, and watching Indian design YouTubers to understand what the standard Product Design interview would look like.",
    bgHeight: "120px",
  },
  {
    authorImage: "./authors/6.png",
    link:"https://www.holloway.com/g/land-your-dream-design-job/sections/acing-the-app-critique",
    bgImage: "./art/art6.png",
    title: "Acting the App Critique: Land your Dream Job ",
    preview: "App critiques usually last 30–45 minutes. Typically, you'll interview with one or two designers. Either you'll be asked to bring an app for ...",
    bgHeight: "100px",
  }, {
    authorImage: "./authors/7.png",
    link:"https://uxdesign.cc/5-steps-to-master-a-whiteboard-design-challenge-6ecbe9ec38b7",
    bgImage: "./art/art7.png",
    title: "5 Steps to Master Whiteboard Design Challenge",
    preview: "It’s always exiting to get a call from the recruiter inviting you to an onsite interview. You get to see the office, meet the team, get a feel of the culture and show your work. It can also be stressful and a lot to prepare. There are plenty of resources online about interview questions, portfolio presentation, or even dress code, but there is one thing someone says that is impossible to prepare: the whiteboard design challenge at an onsite interview, where an interviewer give you a design problem and ask you to solve it right away.",
    bgHeight: "180px",
  },
  {
    authorImage: "./authors/8.png",
    link:"https://www.coursera.org/articles/preparing-for-the-whiteboard-design-challenge",
    bgImage: "./art/art8.png",
    title: "How to Prepare for the Whiteboard Design Challenge",
    preview: "As you begin to interview for UX designer roles, you may be asked to participate in a whiteboard design challenge. This typically occurs in the later stages of the interview process, such as your on-site interview. While the idea of a whiteboard challenge can seem daunting at first, you’ll find that with a little preparation, you can walk up to the whiteboard with confidence. Consider these tips to help prepare for your next whiteboard design challenge.",
    bgHeight: "100px",
  }, {
    authorImage: "./authors/9.png",
    link:"https://uxdesign.cc/how-to-break-into-the-ux-industry-land-a-job-and-keep-your-sanity-4967e78131a9",
    bgImage: "./art/art9.png",
    title: "How to Break Into the UX Industry, Land a Job, and Keep Your Sanity ",
    preview: "To all my fellow job hunters, I know how HARD job hunting is. It sucks. It’s you constantly putting yourself out there. It’s dealing with rejection and navigating through weird negotiation dances. It’s frustrating and excruciating. And why wasn’t this something we learned in school!?",
    bgHeight: "200px",
  },
  {
    authorImage: "./authors/1.png",
    link:"https://www.creativebloq.com/advice/ux-job",
    bgImage: "./art/art1.png",
    title: "How to Land Your First UX Job",
    preview: "Landing your first role as a designer can be challenging, but in this article I’ll give you the best advice I can about how to kick-start your experience design career. Whether you’re wondering where you go after walking out of the union building for the last time or you have a couple of years of design experience, I’ve made a list of five essential areas that are invaluable to propelling your career forwards.",
    bgHeight: "100px",
  }, {
    authorImage: "./authors/4.png",
    link:"https://www.uxbeginner.com/how-to-prepare-ux-interview-design-challenge/",
    bgImage: "./art/art1.png",
    title: "How to Prepare for UX Interview Design Challenges",
    preview: "Design challenges, or design assignments, are often the least enjoyable and most daunting for UX designers during the interview process. In this guide, get an in-depth understanding of how to prepare for your next design challenge. You can click to jump to each section",
    bgHeight: "200px",
  },
  {
    authorImage: "./authors/6.png",
    link:"https://www.designerfund.com/blog/designers-guide-working-tech",
    bgImage: "./art/art1.png",
    title: "A Designer’s Guide to Working in Tech",
    preview: "Many of us who trained as graphic or industrial designers could never have envisioned a career in technology — and then suddenly, given the rare combination of timing, opportunity, and market, we find ourselves thrust into an industry that we’re not just new to but is also rapidly changing how all people work.",
    bgHeight: "100px",
  },
]

function Articles() {
  const [searchText, setSearchText] = useState('');

  const [result, setResult] = useState(ARTICLES);


  const checkSearch = (compare, item) => {
    return item.preview.toLowerCase().includes(compare.toLowerCase()) || item.title.toLowerCase().includes(compare.toLowerCase());
  }

  const handleSearch = async e => {
    e.preventDefault();
    await setSearchText(e.target.value);
    await setResult(ARTICLES.filter(checkSearch.bind(this, e.target.value)))
  }

  return (
    <div>
      <div className="flex search-section">
        <div className='flex-1 p-relative'>
          <Form.Control type="text" className="search-text" placeholder="Search" value={searchText} onChange={handleSearch} />
          <div className='search-icon'><FeatherIcon icon="search" size="16px" /></div>

        </div>

        <div className="flex-1 flex search-buttons-side">
          <button><FeatherIcon icon="filter" size="16px" /></button>
          <button><FeatherIcon icon="arrow-up" size="16px" /></button>
        </div>
      </div>
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">

        {result.map(x => {
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

export default Articles;
