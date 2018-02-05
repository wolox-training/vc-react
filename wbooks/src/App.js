import React, { Component } from 'react';
import Header from './components/header/Header.js'
import Main from './components/main/Main.js'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
