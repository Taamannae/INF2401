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
        title: 'Your Sessions',
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

function renderNavItem(icon, path, title, id, location) {
    const active = location === path;
    const activeClass = active ? 'nav-active' : null

    console.log(active, location, path);
    
    if (id === "div") {
        return <div key="div" className='sidebar-div'/>
    }
    return(
        <a key={id} href={path} className={'nav-item ' + activeClass}>
            <FeatherIcons icon={icon} size="16"/>
            {title}
        </a>
    )

}


export function Sidebar() {
    const location = useLocation();
    return (
        <div className='side-bar'>
            <div>
                <a href="/" className='nav-item'>
                    <FeatherIcons icon='zap' size="16" />
                    <b>Menti</b>
                </a>
                
            </div>
            <div className='side-bar-content'>
            {NAVITEMS.map(item => {
                return(renderNavItem(item.icon, item.path, item.title, item.id, location.pathname))
            })}
            </div>
        </div>
    )

};