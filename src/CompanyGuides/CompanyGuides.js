import React from 'react';
import './CompanyGuides.css';
import CompanyCard from './CompanyCard/CompanyCard';
import Masonry from 'react-masonry-css'

const ARTICLES = [
  {
    authorImage: "./user1.png",
    bgImage: "./companyArt/compA1.png",
    title: "5 tips for UX interviews",
    preview: "Intuitive, beautiful, user-centered design is key to the success of Google’s products. Our passionate, interdisciplinary UX specialists and designers work across platforms to create powerful visuals that...",
    bgHeight: "200px",
    company: 'Google',
    interviews: '5',
    difficulty: '4.78/5'
  },
  {
    authorImage: "./user1.png",
    bgImage: "./companyArt/compA2.png",
    title: "5 tips for UX interviews",
    preview: "Intuitive, beautiful, user-centered design is key to the success of Google’s products. Our passionate, interdisciplinary UX specialists and designers work across platforms to create powerful visuals that...",
    bgHeight: "100px",
    company: 'Google',
    interviews: '5',
    difficulty: '4.78/5'
  }, {
    authorImage: "./user1.png",
    bgImage: "./companyArt/compA3.png",
    title: "5 tips for UX interviews",
    preview: "Intuitive, beautiful, user-centered design is key to the success of Google’s products. Our passionate, interdisciplinary UX specialists and designers work across platforms to create powerful visuals that...",
    bgHeight: "150px",
    company: 'Google',
    interviews: '5',
    difficulty: '4.78/5'
  },
  {
    authorImage: "./user1.png",
    bgImage: "./companyArt/compA4.png",
    title: "5 tips for UX interviews",
    preview: "Intuitive, beautiful, user-centered design is key to the success of Google’s products. Our passionate, interdisciplinary UX specialists and designers work across platforms to create powerful visuals that...",
    bgHeight: "100px",
    company: 'Google',
    interviews: '5',
    difficulty: '4.78/5'
  }, {
    authorImage: "./user1.png",
    bgImage: "./companyArt/compA5.png",
    title: "5 tips for UX interviews",
    preview: "Intuitive, beautiful, user-centered design is key to the success of Google’s products. Our passionate, interdisciplinary UX specialists and designers work across platforms to create powerful visuals that...",
    bgHeight: "120px",
    company: 'Google',
    interviews: '5',
    difficulty: '4.78/5'
  },
  {
    authorImage: "./user1.png",
    bgImage: "./companyArt/compA6.png",
    title: "5 tips for UX interviews",
    preview: "Intuitive, beautiful, user-centered design is key to the success of Google’s products. Our passionate, interdisciplinary UX specialists and designers work across platforms to create powerful visuals that...",
    bgHeight: "100px",
    company: 'Google',
    interviews: '5',
    difficulty: '4.78/5'
  }, {
    authorImage: "./user1.png",
    bgImage: "./companyArt/compA7.png",
    title: "5 tips for UX interviews",
    preview: "Intuitive, beautiful, user-centered design is key to the success of Google’s products. Our passionate, interdisciplinary UX specialists and designers work across platforms to create powerful visuals that...",
    bgHeight: "180px",
    company: 'Google',
    interviews: '5',
    difficulty: '4.78/5'
  },
  {
    authorImage: "./user1.png",
    bgImage: "./companyArt/compA8.png",
    title: "5 tips for UX interviews",
    preview: "Intuitive, beautiful, user-centered design is key to the success of Google’s products. Our passionate, interdisciplinary UX specialists and designers work across platforms to create powerful visuals that...",
    bgHeight: "100px",
    company: 'Google',
    interviews: '5',
    difficulty: '4.78/5'
  }, {
    authorImage: "./user1.png",
    bgImage: "./companyArt/compA9.png",
    title: "5 tips for UX interviews",
    preview: "Intuitive, beautiful, user-centered design is key to the success of Google’s products. Our passionate, interdisciplinary UX specialists and designers work across platforms to create powerful visuals that...",
    bgHeight: "200px",
    company: 'Google',
    interviews: '5',
    difficulty: '4.78/5'
  },
  {
    authorImage: "./user1.png",
    bgImage: "./companyArt/compA1.png",
    title: "5 tips for UX interviews",
    preview: "Intuitive, beautiful, user-centered design is key to the success of Google’s products. Our passionate, interdisciplinary UX specialists and designers work across platforms to create powerful visuals that...",
    bgHeight: "100px",
    company: 'Google',
    interviews: '5',
    difficulty: '4.78/5'
  }, {
    authorImage: "./user1.png",
    bgImage: "./companyArt/compA1.png",
    title: "5 tips for UX interviews",
    preview: "Intuitive, beautiful, user-centered design is key to the success of Google’s products. Our passionate, interdisciplinary UX specialists and designers work across platforms to create powerful visuals that...",
    bgHeight: "200px",
    company: 'Google',
    interviews: '5',
    difficulty: '4.78/5'
  },
  {
    authorImage: "./user1.png",
    bgImage: "./companyArt/compA1.png",
    title: "5 tips for UX interviews",
    preview: "Intuitive, beautiful, user-centered design is key to the success of Google’s products. Our passionate, interdisciplinary UX specialists and designers work across platforms to create powerful visuals that...",
    bgHeight: "100px",
    company: 'Google',
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
