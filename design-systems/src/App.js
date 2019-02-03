import React, { Component } from 'react';
import GlobalStyle from './Global';
import Header from './components/layouts/Header';



class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <GlobalStyle />
      </div>
    );
  }
}



export default App;
