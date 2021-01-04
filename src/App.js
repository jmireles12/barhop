import React, { Component } from 'react'
import './App.css'
import Header from './Header/Header'
import About from './About/About'
import Footer from './Footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <About/>
        <Footer/>
      </div>
    );  
  }
}

export default App;
