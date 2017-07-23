import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import welcomeText from './welcomeText';

class App extends Component {

  username = 'kous';

  render() {
    return <div>{this.username}</div>
  }
}

export default App;
