import React from 'react';
import './App.css';
import Home from "./Home"
import {Sidebar} from './features/Sidebar'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FeatherIcons from 'feather-icons-react'


function navButton(icon) {
  return(
    <a href="#/" className='nav-header-item'>
      <FeatherIcons icon={icon} size="16" />
    </a>
  )
}

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <div className="main--content">
        <div className='header flex'>
          <div className='flex-1'><h1>Home</h1></div>
          <div className='header-right-section'>
            {navButton('search')}
            {navButton('bell')}
            {navButton('message-circle')}
            <img alt="" className="user-avatar" src="./user.png"/>
          </div>
        </div>
        <div className='main-content-inner'>
          <Router>
            <Switch>
              <Route path="/" exact component={Home} />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
