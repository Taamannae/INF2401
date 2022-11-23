import React from 'react';
import './Mentors.css';
import FeatherIcons from 'feather-icons-react'


const ARTICLES = [
  {
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
  },
  {
    bgImage: "./mentor/ment6.png",
    name: "Leslie Alexander",
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

function mentor(bg, name, role, company, yoe){
  return(
    <button onClick="" className='mentor-cont' 
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
  return (
    <div className='mentors-cont'>
      {
        ARTICLES.map(item => {
        return(mentor(item.bgImage, item.name, item.role, item.company, item.yoe)

        )
      })}
    </div>
  );
}

export default Mentors;
