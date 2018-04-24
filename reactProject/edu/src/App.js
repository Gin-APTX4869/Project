import React, { Component } from 'react'
import './App.css'

import Header from './components/Header/Header'
import Slick from './components/Slick/Slick'
import Category from './components/Category/Category'
import Toolbar from './components/Toolbar/Toolbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Slick />
        <Category />
        <Toolbar />
      </div>
    )
  }
}

export default App
