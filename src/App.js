// import logo from './logo.svg';
// import './App.css';

import React from 'react'
import "assets/scss/style.scss"
import LandingPage from 'pages/LandingPage'
import Testing from 'pages/Testing'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={LandingPage} exact></Route>
        <Route path="/test-fitur" component={Testing}></Route>

      </Router>
    </div>
  );
}

export default App;
