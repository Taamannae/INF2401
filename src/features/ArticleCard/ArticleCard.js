import React from 'react';
import './ArticleCard.css';

function ArticleCard(props) {
    return (
        <div>
            <div className='article-card'>
                <div alt="" className="card-bg" style={{ backgroundImage: `url("${props.bgImage}"`, height: props.bgHeight}} />
                <div className='menu'>
                    <div className="menu-item">
                        <img src={props.authorImage} alt="" className="card-avatar" />

                    </div>
                    <div className="menu-rect"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ position: "absolute", zIndex: '-1' }}>
                        <defs>
                            <filter id="goo">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                                <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                            </filter>
                        </defs>
                    </svg>

                </div>

                <div className='card-content'>
                    <h3>{props.title}</h3>
                    <p>{props.preview}
                    </p>

                </div>
            </div>
        </div>
    );
}

export default ArticleCard;
