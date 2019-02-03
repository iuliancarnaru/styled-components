import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import logo from './logo.svg';
import GlobalStyle from './Global';


const size = {
  small: 400,
  medium: 960,
  large: 1140
}

// building a media query generator in px
// const above = Object.keys(size).reduce((acc, label) => {
//   acc[label] = (...args) => css`
//     @media only screen and (min-width: ${size[label]}px) {
//       ${css(...args)}
//     }
//   `;
//   return acc;
// }, {});

// building a media query generator in em
const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media only screen and (min-width: ${size[label] / 16 }em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

// const below = Object.keys(size).reduce((acc, label) => {
//   acc[label] = (...args) => css`
//     @media only screen and (max-width: ${size[label]}px) {
//       ${css(...args)}
//     }
//   `;
//   return acc;
// }, {});

console.log('above', above);

const Fake = ({ className }) => (
  <div className={className}>
    <h2>I am a test component</h2>
  </div>
)


const Heading = styled.h1`
  font-size: 2rem;
  color: greenyellow;

  ${above.medium`
    color: blue;
  `}
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

// CSS Hepler mixin

const fixedTop = css`
  position: fixed;
  top: 0;
  left: 0;
`;

const CancelButton = styled(Button)`
  background-color: tomato;
  ${fixedTop};
`;

const AppWrapper = styled.div`
  header {
    background-color: teal;
  }

  ${Button} {
    margin-bottom: 2rem;
  }
`;


const DoubleFake = styled(Fake)`
  h2 {
    color: red;
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
          <DoubleFake />
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
        <GlobalStyle />
      </AppWrapper>
    );
  }
}



export default App;
