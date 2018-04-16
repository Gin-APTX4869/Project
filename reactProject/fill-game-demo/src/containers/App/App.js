import React, {Component} from 'react'
import './App.css'

import { TransitionGroup, CSSTransition } from 'react-transition-group'
import {Route, Switch} from 'react-router-dom'
import Carousel from '../../components/Carousel/Carousel'

import GoodsMenu from '../../components/Carousel/subpage/GoodsMenu'
import Page2 from '../../components/Carousel/subpage/Page2'
import FillColor from '../../components/Carousel/subpage/FillColor'

import GoodsList from '../../components/Sliders/Phone/GoodsList'
import Shape from '../../components/Shape/Shape'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route
            render={({location}) => (
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="fade" timeout={500}>
                <Switch>
                  <Route exact path="/" component={Carousel} />
                  <Route path="/goods-menu" component={GoodsMenu}/>
                  <Route path="/page2" component={Page2}/>
                  <Route path="/fill-color" component={FillColor}/>
                  <Route path="/phone" component={GoodsList}/>
                  <Route path="/shape" component={Shape}/>
                  <Route render={() => <div>Not Found</div>}/>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}/>
      </div>
    )
  }
}

export default App
