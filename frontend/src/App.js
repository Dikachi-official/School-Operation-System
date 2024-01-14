import React from "react"

import './App.css';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Main from './components/Main'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Main/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
