import React, { useState } from 'react';
import './CompanyGuides.css';
import CompanyCard from './CompanyCard/CompanyCard';
import Masonry from 'react-masonry-css';
import CompanyGuidePopup from '../features/Dialog/CompanyGuidePopup';

const ARTICLES = [
  {
    authorImage: "./company/comp1.svg",
    bgImage: "./companyArt/compA1.png",
    title: "Interaction Designer",
    preview: "Intuitive, beautiful, user-centered design is key to the success of Google’s products. Our passionate, interdisciplinary UX specialists and designers work across platforms to create powerful visuals that...",
    bgHeight: "200px",
    company: 'Google',
    interviews: '5',
    difficulty: '4.78/5'
  },
  {
    authorImage: "./company/comp2.svg",
    bgImage: "./companyArt/compA2.png",
    title: "Product Designer",
    preview: "We value great design and prioritize it across every single thing we build at Meta. From the internationally recognized Like icon to our mobile platform, all of our products feature simple human centered designs. Every product designer and content designer researches, tests, and iterates each design to ensure we launch beautiful products with a seamless user experience.",
    bgHeight: "100px",
    company: 'Meta',
    interviews: '5',
    difficulty: '4.78/5'
  }, {
    authorImage: "./company/comp3.svg",
    bgImage: "./companyArt/compA3.png",
    title: "UX Designer",
    preview: "Airbnb Design is a cross-disciplinary group of experience and production designers, researchers, technologists, writers and content strategists, graphic designers, filmmakers, producers, interior architects, project managers, photographers and more.",
    bgHeight: "150px",
    company: 'AirBnB',
    interviews: '5',
    difficulty: '4.78/5'
  },
  {
    authorImage: "./company/comp4.svg",
    bgImage: "./companyArt/compA4.png",
    title: "Product Designer",
    preview: "The Netflix Experience Design Team (XD) is responsible for the design of all Netflix products across web, mobile and television screens. Our team consists of highly specialized Visual Designers, Interaction Designers, Prototypers, and Design Hybrids, working to innovate and improve the user interfaces of over 1000 devices.",
    bgHeight: "100px",
    company: 'Netflix',
    interviews: '5',
    difficulty: '4.78/5'
  }, {
    authorImage: "./company/comp5.png",
    bgImage: "./companyArt/compA5.png",
    title: "Product Designer",
    preview: "Asana Design is an inclusive and collaborative community. We’re a diverse group of designers from different backgrounds (product, brand and content design, design operations, producers, motion design, film, copywriting) . A team that loves combining research, data insights, and peer feedback into a human-centered design process to produce designs that are core to the power of our applications. We partner with people across Asana to create our product, shape our brand, and drive greater impact through design. We use design to solve challenges and create experiences that customers love. We also take the time to get weird and have fun along the way.",
    bgHeight: "200px",
    company: 'Asana',
    interviews: '3',
    difficulty: '4/5'
  },
  {
    authorImage: "./company/comp6.svg",
    bgImage: "./companyArt/compA6.jpeg",
    title: "User Experience (UX) Designer",
    preview: "Design at Amazon has been growing steadily in reach and impact—from devices to fashion, delivery logistics to search and streaming video, from voice and sound to physical retail, and more—all while creating and cultivating experiences that touch Amazon customers everywhere, every day. Amazon design teams include every flavor of UI, UX, visual, motion, illustration, brand, and marketing design roles—as well as design technologists, researchers, writers, and more. Check out https://amazon.design/, and come build the future with us.",
    bgHeight: "100px",
    company: 'Amazon',
    interviews: '5',
    difficulty: '4.5/5'
  }, {
    authorImage: "./company/comp7.png",
    bgImage: "./companyArt/compA7.jpeg",
    title: "Product Designer",
    preview: "Trello is used by 100 million people worldwide and is part of Atlassian’s growing suite of products made for everyone from small businesses to established enterprises. We’re building a new team focused on landing new users who want to collaborate in Trello. This team will play a critical role in delivering on our product strategy and company mission to unleash the potential of all teams.",
    bgHeight: "150px",
    company: 'Atlassian',
    interviews: '4',
    difficulty: '4/5'
  },
  {
    authorImage: "./company/comp8.png",
    bgImage: "./companyArt/compA8.png",
    title: "Product Designer",
    preview: "Figma is growing our team of passionate people on a mission to make design accessible to all. Born on the Web, Figma helps entire product teams brainstorm, create, test, and ship better designs, together. From great products to long-lasting companies, we believe that nothing great is made alone—come make with us!As a Product Designer at Figma, we won't box you into a specific, narrow role. Instead, you will work fluidly and collaboratively with the rest of the organization through all aspects of the design process. Because of this, you should have a broad set of design skills!",
    bgHeight: "100px",
    company: 'Figma',
    interviews: '4',
    difficulty: '4.5/5'
  },
]

function CompanyGuides() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)

  return (
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">

        {ARTICLES.map(x => {
          return(
            <CompanyCard
              authorImage={x.authorImage}
              bgImage={x.bgImage}
              title={x.title}
              preview={x.preview}
              bgHeight={x.bgHeight}
              company={x.company}
              interviews={x.interviews}
              difficulty={x.difficulty} 
              handleShow={handleShow}
            />
          );
        })}

        <CompanyGuidePopup 
        show={show}
        handleClose={handleClose} />

      </Masonry>
  );
}

export default CompanyGuides;
