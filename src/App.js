import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    isCheckingForWeb3: true,
    web3: null,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        web3: window.web3,
        isCheckingForWeb3: false,
      });
    }, 2000);
  }

  render() {
    const {
      isCheckingForWeb3,
      web3,
    } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {isCheckingForWeb3 && <p>Checking to see if <code>window.web3</code> exists...</p>}
          {!isCheckingForWeb3 && web3 && <p>web3 was injected!</p>}
          {!isCheckingForWeb3 && !web3 && <p>gah! web3 wasn't injected!</p>}
        </p>
      </div>
    );
  }
}

export default App;
