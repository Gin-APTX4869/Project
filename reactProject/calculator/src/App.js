import React, {Component} from 'react'
import './App.css'


import Layout from './components/Layout/Layout'
// import { Switch, Route } from "react-router-dom"

import CtrCalculator from './containers/CtrCalculator'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  render() {
    return (
        <Layout>
          <CtrCalculator></CtrCalculator>
        </Layout>
    )
  }
}

export default App
