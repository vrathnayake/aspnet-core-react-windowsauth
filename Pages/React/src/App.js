import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let userIdentity = localStorage.getItem('Identity.Name');
    return (
      <div className="App">
        {userIdentity}
      </div>
    );
  }
}

export default App;
