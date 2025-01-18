// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import {Header} from './layout/Header';
import {Footer} from './layout/Footer';
import {Main} from './layout/Main';

// OMDb API
//  key: 7450963b

// https://www.postman.com - Postman is your single platform for collaborative API development (запросы)
// SoapUI - есть на mac

function App() {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default App;
