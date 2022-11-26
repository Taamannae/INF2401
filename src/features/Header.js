import React from 'react';
import "./Sidebar.css";
import { useLocation } from "react-router-dom";
import FeatherIcons from 'feather-icons-react'

const NAVITEMS = [
    {
        icon: 'home',
        path: '/',
        title: 'Home',
        id: '0'
    },{
        icon: 'calendar',
        path: '/booking',
        title: 'Your Booking',
        id: '1'
    },{
        icon: '',
        path: '',
        title: '',
        id: 'div'
    }, {
        icon: 'user',
        path: '/mentors',
        title: 'Mentors',
        id: '2'
    }, {
        icon: 'file-text',
        path: '/articles',
        title: 'Articles',
        id: '3'
    }, {
        icon: 'book-open',
        path: '/guide',
        title: 'Company Guides',
        id: '4'
    },

]

function navButton(icon) {
    return (
        <a href="#/" className='nav-header-item'>
            <FeatherIcons icon={icon} size="16" />
        </a>
    )
}

export default function Header() {
    const location = useLocation();
    let found = {title: 'Hello'}
    if (!location.pathname.includes('maincall') && !location.pathname.includes('whiteboarding')) {
         found = NAVITEMS.find(x => x.path === location.pathname)
    }
    return (
        <div className='header flex'>
            <div className='flex-1'><h1>{found.title}</h1></div>
            <div className='header-right-section'>
                {navButton('search')}
                {navButton('bell')}
                {navButton('message-circle')}
                <img alt="" className="user-avatar" src="./user.png" />
            </div>
        </div>
    )

};