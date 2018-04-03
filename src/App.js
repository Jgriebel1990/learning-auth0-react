import React, { Component } from 'react';
import './App.css';
//components
import Home from './components/Home';
import Profile from './components/Profile';

class App extends Component {
  render() {
    return (
     <div>
       hello world
       <Home />
       <Profile />
     </div>
    );
  }
}

export default App;
