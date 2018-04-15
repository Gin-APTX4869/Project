import React, { Component } from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'

import Carousel from './components/Carousel'
import Loading from './containers/Loading'

import SubPage1 from './components/SubPage/SubPage1'
import SubPage2 from './components/SubPage/SubPage2'
import SubPage3 from './components/SubPage/SubPage3'

import SubSlider from './components/Phone/SubSlider'

import Shape2 from './components/Shape/Shape2'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Loading} />
          <Route exact path="/carousel" component={Carousel} />
          <Route exact path="/subpage1" component={SubPage1} />
          <Route exact path="/subpage2" component={SubPage2} />
          <Route exact path="/subpage3" component={SubPage3} />
          <Route exact path="/shape2" component={Shape2} />
          <Route exact path="/subslider" component={SubSlider} />
        </Switch>
      </div>
    )
  }
}

export default App
