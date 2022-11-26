import React from 'react';
import './Dialog.css';
import Modal from 'react-bootstrap/Modal';
import FeatherIcons from 'feather-icons-react';


function CompanyGuidePopup(props) {




    return (
        <Modal show={props.show} onHide={props.handleClose} dialogClassName="company-compt">
            <div className="model">
                <button className='model-close' onClick={props.handleClose}><FeatherIcons color="white" icon="x"/></button>
                <div alt="" className="model-card-bg" style={{ backgroundImage: `url('./companyArt/compA1.png')`, height: "250px" }} />

            <div className='dialog-content'>
            <div className='menu'>
                        <div className='chip interview-chip'>Interview process</div>

                <div className="menu-item">
                        <img src="./company/comp1.svg" alt="" className="card-avatar" />

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
            </div>
            

            <div className='model-content-inner company-guide-content flex-column'>

                    <div className='model-header flex company-guide-header'>
                        <div>
                            <h1>Interaction Design: Interview Process</h1>
                            <p>By Kindra Cooper · July 19, 2020 · Verified for accuracy by 4 former Google employees</p>

                            <div className='company-verfied-group'>
                                <div style={{ backgroundImage: `url('./mentor/ment1.png')` }} className="company-verified-avatar" />
                                <div style={{ backgroundImage: `url('./mentor/ment2.png')` }} className="company-verified-avatar" />
                                <div style={{ backgroundImage: `url('./mentor/ment3.png')` }} className="company-verified-avatar" />
                                <div style={{ backgroundImage: `url('./mentor/ment4.png')` }} className="company-verified-avatar" />
                            </div>
                        </div>

   
                    </div>


                <div className='model-content-inner-left'>
                        <p className='company mentor-info-content'>
                            Landing one of the most enviable jobs in tech is 26 times harder than getting into Harvard University: Google’s acceptance rate is 0.2%, while Harvard’s is 5.2%. The search engine giant on-boarded 20,000 new hires in 2019 -- shortlisted from over two million applications. Google was poised for similar growth this year, but has cut back on hiring and other nonessential expenditures as it faces an advertising slump from the pandemic.
                            <br />
                            <br />

                            That said, Google’s careers site currently boasts over 1,000 open positions worldwide.
                            In other good news, Google axed those infamous brain teaser interview questions in 2013 after internal data showed they were a weak predictor of job competency, and “served primarily to make the interviewer feel smart.”
                            <br/>
                            <br />

                            Now that you know what won't be asked, let's talk a little more about what will. This guide will answer all your burning questions about Google's interview process, and what you can do to prepare.
                            <br/>
                            <br />

                            👉 Try it out: Practice Google Interview Questions recruiters asked in the last 60 days
                        </p>
                </div>


            </div>
            </div>
            </Modal>
    );
}

export default CompanyGuidePopup;
