import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import Router from './Router'
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'prismjs/prism.js';
import 'prismjs/themes/prism.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
        <Router/>
        <Footer/>
      </div>
    );
  }
}

export default App;
