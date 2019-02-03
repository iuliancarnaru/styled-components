import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

const Heading = styled.h1`
  font-size: 2rem;
  color: greenyellow;
`;

const Button = styled.button`
  background-color: ${({type}) => (type === "cancel" ? 'tomato' : 'green')};
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  color: white;
  font-size: 2rem;
  
`;



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <Heading>
            Edit <code>src/App.js</code> and save to reload.
          </Heading>
          <Button type="save">Save</Button>
          <Button type="cancel">Save</Button>
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
