import React from 'react';
import './CompanyCard.css';

function CompanyCard(props) {
    return (
        <div>
            <div className='company-card'>
                <div alt="" className="card-bg" style={{ backgroundImage: `url("${props.bgImage}"`, height: "100px"}} />
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

                <div className='card-content flex flex-column'>
                    <div>
                        <h3>{props.title}</h3>
                        <h5 className='flex align-center'>{props.company} · Verified <img src="./verified.svg" alt=""/></h5>
                        </div>
                    <p>{props.preview}
                    </p>

                    <div className='flex justify-space-between '>
                        <p>No. Interviews</p>
                        <p className='white-text'>{props.interviews}</p>
                    </div>

                    <div className='flex justify-space-between'>
                        <p>Interview Difficulty</p>
                        <p className='white-text'>{props.difficulty}</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CompanyCard;
