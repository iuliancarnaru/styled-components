import React, { Component } from 'react';
import GlobalStyle from './Global';
import Header from './components/layouts/Header';
import { Button, CancelButton } from './style/elements';



class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <GlobalStyle />
        <Button size="small">Say hello</Button>
        <Button size="small" type="cancel">Cancel</Button>
        <CancelButton size="small">Don't Say hello</CancelButton>
      </div>
    );
  }
}



export default App;
