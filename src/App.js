import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../src/actions/shared'
import logo from './logo.svg';
import './App.css';

class App extends Component {

   componentDidMount() {
     this.props.dispatch(handleInitialData())
   }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Would You Rather...?</h1>
        </header>
        <p className="App-intro">
          Components will go here. . . .
        </p>
      </div>
    );
  }
}

export default connect()(App)
