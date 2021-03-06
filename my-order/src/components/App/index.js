import React, { Component } from 'react';
import logo from '../../logo.svg';
import Header from '../Header'
import OrderList from '../OrderList'
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <OrderList></OrderList>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
            Hello React
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
