import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components/macro';
import GlobalStyle from './Global';
import Header from './components/layouts/Header';
import { Button, Card } from './style/elements';

const theme = {
  colors: {
    primary: '#e54b4b',
    secondary: '#dbd361',
  }
}

const theme2 = {
  colors: {
    primary: '#524763',
    secondary: '#82d8d8',
  }
}

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme2}>

        <div>
        <GlobalStyle />
        <Header />
        <main 
          css={`
            background: darkgreen;
          `}
        >
          <ThemeProvider theme={theme}>
            <Card>
              <h2>Card heading</h2>
              <Card.Button as="a">Say hello</Card.Button>
              <Card.Button modifiers="cancel">Don't say hellp</Card.Button>
            </Card>
          </ThemeProvider>
          <Button>hello</Button>
          <Button modifiers={["small", "cancel"]}>Cancel</Button>
        </main>
        </div>
        </ThemeProvider>

    );
  }
}



export default App;
