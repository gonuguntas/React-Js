import React, { Component } from 'react';
import User from './containers/GithubData'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <User></User>
      </div>
    );
  }
}

export default App;
