import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import buttons from ".//components/buttons";
import login from ".//components/login";
import Demo from './components/Demo'

import './App.css';
import { Divider } from 'antd'


class App extends Component {
  render() {
    return (
      <Router> 
        <Divider orientation='center' plain><h1 style={{color: 'white'}}>WIN AS MUCH AS YOU CAN !!</h1></Divider>
        <Route path='/demo/:team' component={Demo} />
        <Route path="/buttons" exact component={buttons} />
        <Route path="/" exact component={login} />
      </Router>
    );
  }
}

export default App;