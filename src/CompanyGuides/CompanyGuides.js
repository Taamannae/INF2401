import React from 'react';
import './CompanyGuides.css';
import CompanyCard from './CompanyCard/CompanyCard';
import Masonry from 'react-masonry-css'

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
    authorImage: "./company/comp1.svg",
    bgImage: "./companyArt/compA1.png",
    title: "Product Designer",
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
    preview: "Intuitive, beautiful, user-centered design is key to the success of Google’s products. Our passionate, interdisciplinary UX specialists and designers work across platforms to create powerful visuals that...",
    bgHeight: "100px",
    company: 'Meta',
    interviews: '5',
    difficulty: '4.78/5'
  }, {
    authorImage: "./company/comp3.svg",
    bgImage: "./companyArt/compA3.png",
    title: "Product Designer",
    preview: "Intuitive, beautiful, user-centered design is key to the success of Google’s products. Our passionate, interdisciplinary UX specialists and designers work across platforms to create powerful visuals that...",
    bgHeight: "150px",
    company: 'AirBnB',
    interviews: '5',
    difficulty: '4.78/5'
  },
  {
    authorImage: "./company/comp4.svg",
    bgImage: "./companyArt/compA4.png",
    title: "Product Designer",
    preview: "Intuitive, beautiful, user-centered design is key to the success of Google’s products. Our passionate, interdisciplinary UX specialists and designers work across platforms to create powerful visuals that...",
    bgHeight: "100px",
    company: 'Netflix',
    interviews: '5',
    difficulty: '4.78/5'
  },
]

function CompanyGuides() {
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
            />
          );
        })}

      </Masonry>
  );
}

export default CompanyGuides;
