import React, { Component } from 'react';
import GlobalStyle from './Global';
import Header from './components/layouts/Header';
import { Button, Card } from './style/elements';



class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <GlobalStyle />
          <Card>
            <h2>Card heading</h2>
            <Card.Button>Say hello</Card.Button>
            <Card.Button modifiers="cancel">Don't say hellp</Card.Button>
          </Card>
          
          
          <Button modifiers={["small", "cancel"]}>Cancel</Button>
        </main>
      </div>
    );
  }
}



export default App;
