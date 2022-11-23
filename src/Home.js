import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import ArticleCard from './features/ArticleCard/ArticleCard';
import Masonry from 'react-masonry-css'

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

function App() {
  return (
    <div>

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
