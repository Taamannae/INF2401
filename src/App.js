import React from 'react';
import './App.css';
import Home from "./Home"
import Mentors from "./Mentors/Mentors"
import {Sidebar} from './features/Sidebar'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './features/Header';
import Articles from './Articles';


function App() {
  return (
    <Router>
      <Switch>
    <div className="App">
      <Sidebar/>
      <div className="main--content">
        <Header/>
        <div className='main-content-inner'>
              <Route path="/" exact component={Home} />
              <Route path="/mentors" exact component={Mentors} />
              <Route path="/articles" exact component={Articles} />
        </div>
      </div>
    </div>
      </Switch>
    </Router>
  );
}

export default App;
