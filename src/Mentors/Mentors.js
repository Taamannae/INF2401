import React, { useState } from 'react';
import './Mentors.css';
import FeatherIcons from 'feather-icons-react'
import Dialog from '../features/Dialog/Dialog';
import Mentor from '../features/Dialog/Mentor';
import MentorConfirm from '../features/Dialog/MentorConfirm';
import { Form } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';


const ARTICLES = [
  {
    bgImage: "./mentor/ment6.png",
    name: "Leslie Alexander",
    role: "Product Designer",
    yoe: "8",
    company: 'Google'
  }, {
    bgImage: "./mentor/ment1.png",
    name: "Jane Cooper",
    role: "Product Designer",
    yoe: "8",
    company: 'Google'
  },
  {
    bgImage: "./mentor/ment2.png",
    name: "Wade Warren",
    role: "Product Designer",
    yoe: "8",
    company: 'Google'
  }, {
    bgImage: "./mentor/ment3.png",
    name: "Cody Fisher",
    role: "Product Designer",
    yoe: "8",
    company: 'Google'
  },
  {
    bgImage: "./mentor/ment4.png",
    name: "Annette Laue",
    role: "Product Designer",
    yoe: "8",
    company: 'Google'
  }, {
    bgImage: "./mentor/ment5.png",
    name: "Darlene Robertson",
    role: "Product Designer",
    yoe: "8",
    company: 'Google'
  }, {
    bgImage: "./mentor/ment7.png",
    name: "Guy Hawkins",
    role: "Product Designer",
    yoe: "8",
    company: 'Google'
  },
  {
    bgImage: "./mentor/ment8.png",
    name: "Esther Howard",
    role: "Product Designer",
    yoe: "8",
    company: 'Google'
  }, {
    bgImage: "./mentor/ment9.png",
    name: "Francisco Rivera",
    role: "Product Designer",
    yoe: "8",
    company: 'Google'
  },
  {
    bgImage: "./mentor/ment10.png",
    name: "Xena Woolley",
    role: "Product Designer",
    yoe: "8",
    company: 'Google'
  }, {
    bgImage: "./mentor/ment11.png",
    name: "Juliana Stein",
    role: "Product Designer",
    yoe: "8",
    company: 'Google'
  },
  {
    bgImage: "./mentor/ment12.png",
    name: "Ayva Buckner",
    role: "Product Designer",
    yoe: "8",
    company: 'Google'
  }
]

function mentor(bg, name, role, company, yoe, handleShow){

  return(
    <button onClick={handleShow} className='mentor-cont' 
      style={{backgroundImage: `url("${bg}"` }}>

        <div className='mentor-content'>
        <div className='mentor-name'>
            <h2>{name}</h2>
            <h4>{role}</h4>
          </div>
          <div className='flex mentor-stats'>
          <div className='flex align-center'>
            <FeatherIcons color="#979797" icon='briefcase' size="16" />
            <h5>{company}</h5>

            </div>
          <div className='flex align-center'>
            <FeatherIcons color="#979797" icon='bar-chart' size="16" />
              <h5>{yoe} Yoe</h5>
            </div>
          </div>

        </div>

    </button>
  )
}

function Mentors() {
  const [show, setShow] = useState(false);
  const [showMentor, setShowMentor] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [searchText, setSearchText] = useState('');

  const [result, setResult] = useState(ARTICLES);


  const checkSearch = (compare, item)=> {
    return item.name.toLowerCase().includes(compare.toLowerCase()) || item.company.toLowerCase().includes(compare.toLowerCase());
  }

  const handleSearch = async e => {
    e.preventDefault();
    await setSearchText(e.target.value);
    await setResult(ARTICLES.filter(checkSearch.bind(this, e.target.value)))
  }

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)
    setShowMentor(false)

  };

  const handleMentorClose = () => setShowMentor(false);
  const handleMentorShow = () => {
      setShow(false)
      setShowMentor(true)
  };

  const handleConfirmClose = () => setShowConfirm(false);
  const handleConfirmShow = () => {
    setShowMentor(false)
    setShowConfirm(true)
  };
  return (
    <div>
      <div className="flex search-section">
        <div className='flex-1 p-relative'>
          <Form.Control type="text" className="search-text" placeholder="Search" value={searchText} onChange={handleSearch} />
          <div className='search-icon'><FeatherIcon icon="search" size="16px" /></div>

        </div>

        <div className="flex-1 flex search-buttons-side">
          <button><FeatherIcon icon="filter" size="16px"/></button>
          <button><FeatherIcon icon="arrow-up" size="16px" /></button>
        </div>
      </div>
    <div className='mentors-cont'>
      {
          result.map(item => {
        return(mentor(item.bgImage, item.name, item.role, item.company, item.yoe, handleShow)

        )
      })}
    </div>
    <Dialog
      show={show}
      handleClose={handleClose}
      handleMentorShow={handleMentorShow}
      />
    <Mentor
        show={showMentor}
        handleShow={handleShow}
        handleConfirmShow={handleConfirmShow}
        handleClose={handleMentorClose}/>
    <MentorConfirm
      show={showConfirm}
        handleShow={handleConfirmShow}
      handleClose={handleConfirmClose} />
    </div>
  );
}

export default Mentors;
