import React, {useState} from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import ArticleCard from './features/ArticleCard/ArticleCard';
import Masonry from 'react-masonry-css'
import CompanyGuidePopup from './features/Dialog/CompanyGuidePopup';

const ARTICLES = [
  {
    authorImage: "./user1.png",
    bgImage: "./art/art1.png",
    title: "5 tips for UX interviews",
    preview: "Intuitive, beautiful, user-centered design is key to the success of Google’s products. Our passionate, interdisciplinary UX specialists and designers work across platforms to create powerful visuals that...",
    bgHeight: "200px",
  },
  {
    authorImage: "./user1.png",
    bgImage: "./art/art2.png",
    title: "5 tips for UX interviews",
    preview: "Intuitive, beautiful, user-centered design is key to the success of Google’s products. Our passionate, interdisciplinary UX specialists and designers work across platforms to create powerful visuals that...",
    bgHeight: "100px",
  }, {
    authorImage: "./user1.png",
    bgImage: "./art/art3.png",
    title: "5 tips for UX interviews",
    preview: "Intuitive, beautiful, user-centered design is key to the success of Google’s products. Our passionate, interdisciplinary UX specialists and designers work across platforms to create powerful visuals that...",
    bgHeight: "150px",
  },
  {
    authorImage: "./user1.png",
    bgImage: "./art/art4.png",
    title: "5 tips for UX interviews",
    preview: "Intuitive, beautiful, user-centered design is key to the success of Google’s products. Our passionate, interdisciplinary UX specialists and designers work across platforms to create powerful visuals that...",
    bgHeight: "100px",
  }, {
    authorImage: "./user1.png",
    bgImage: "./art/art5.png",
    title: "5 tips for UX interviews",
    preview: "Intuitive, beautiful, user-centered design is key to the success of Google’s products. Our passionate, interdisciplinary UX specialists and designers work across platforms to create powerful visuals that...",
    bgHeight: "120px",
  },
  {
    authorImage: "./user1.png",
    bgImage: "./art/art6.png",
    title: "5 tips for UX interviews",
    preview: "Intuitive, beautiful, user-centered design is key to the success of Google’s products. Our passionate, interdisciplinary UX specialists and designers work across platforms to create powerful visuals that...",
    bgHeight: "100px",
  }, {
    authorImage: "./user1.png",
    bgImage: "./art/art7.png",
    title: "5 tips for UX interviews",
    preview: "Intuitive, beautiful, user-centered design is key to the success of Google’s products. Our passionate, interdisciplinary UX specialists and designers work across platforms to create powerful visuals that...",
    bgHeight: "180px",
  },
  {
    authorImage: "./user1.png",
    bgImage: "./art/art8.png",
    title: "5 tips for UX interviews",
    preview: "Intuitive, beautiful, user-centered design is key to the success of Google’s products. Our passionate, interdisciplinary UX specialists and designers work across platforms to create powerful visuals that...",
    bgHeight: "100px",
  }, {
    authorImage: "./user1.png",
    bgImage: "./art/art9.png",
    title: "5 tips for UX interviews",
    preview: "Intuitive, beautiful, user-centered design is key to the success of Google’s products. Our passionate, interdisciplinary UX specialists and designers work across platforms to create powerful visuals that...",
    bgHeight: "200px",
  },
  {
    authorImage: "./user1.png",
    bgImage: "./art/art1.png",
    title: "5 tips for UX interviews",
    preview: "Intuitive, beautiful, user-centered design is key to the success of Google’s products. Our passionate, interdisciplinary UX specialists and designers work across platforms to create powerful visuals that...",
    bgHeight: "100px",
  }, {
    authorImage: "./user1.png",
    bgImage: "./art/art1.png",
    title: "5 tips for UX interviews",
    preview: "Intuitive, beautiful, user-centered design is key to the success of Google’s products. Our passionate, interdisciplinary UX specialists and designers work across platforms to create powerful visuals that...",
    bgHeight: "200px",
  },
  {
    authorImage: "./user1.png",
    bgImage: "./art/art1.png",
    title: "5 tips for UX interviews",
    preview: "Intuitive, beautiful, user-centered design is key to the success of Google’s products. Our passionate, interdisciplinary UX specialists and designers work across platforms to create powerful visuals that...",
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
            />
          );
        })}

      </Masonry>


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
      </header>
    </div>
  );
}

export default App;
