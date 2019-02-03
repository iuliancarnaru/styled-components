import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

const Heading = styled.h1`
  font-size: 2rem;
  color: greenyellow;
`;

const color = "white";

const Button = styled.button`
  background-color: green;
  padding: 5px 20px;
  border-radius: 5px;
  border: none;
  color: ${color};
  font-size: 2rem;
  
`;

const CancelButton = styled(Button)`
  background-color: tomato;
`;

const AppWrapper = styled.div`
  header {
    background-color: teal;
  }

  ${Button} {
    margin-bottom: 2rem;
  }
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <Heading>
            Edit <code>src/App.js</code> and save to reload.
          </Heading>
          <Button type="save">Save</Button>
          <CancelButton type="cancel">Cancel</CancelButton>
          <a
            className="App-link"
            href="https://reactjs.org" 
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </AppWrapper>
    );
  }
}

export default App;
