import React, {Component} from 'react'
import './App.css'

import Appbar from 'muicss/lib/react/appbar'
import Panel from 'muicss/lib/react/panel'
import Calculator from './components/Calculator'
import Container from 'muicss/lib/react/container'

const API_ID = "59598"
const API_SECRET = "941661ba0a344863850ef3ae3b7d593a"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      currentRate: '',
      count: '0'
    }
  }

  componentDidMount = () => {
    this.getData()
  }

  getData = () => {
    fetch(`http://route.showapi.com/105-30?code=&showapi_appid=${API_ID}&showapi_sign=${API_SECRET}`)
      .then(res => res.json())
      .then(parsedJSON => parsedJSON.showapi_res_body.list.map(item => ({name: `${item.name}`, zhesuan: `${item.zhesuan}`})))
      .then(data => this.setState({data}))
  }

  changeHandler = (e) => {
    this.setState({currentRate: e.target.value})
  }

  calculatorHandler = (e) => {
    e.preventDefault()
    const price = e.target.elements.price.value
    const rate = e.target.elements.rate.value
    const number = e.target.elements.number.value
    this.setState({
      count: price * rate / 100 / number
    })
  }

  clearHandler = () => {
    this.setState({count: '0'})
  }

  render() {
    const {data} = this.state
    const {currentRate} = this.state
    const {count} = this.state
    return (
      <div>
        <Appbar></Appbar>
        <Panel></Panel>
        <Container fluid={true}>
          <Panel>
            <Calculator
              data={data}
              currentRate={currentRate}
              count={count}
              changeHandler={this.changeHandler}
              calculatorHandler={this.calculatorHandler}
              clearHandler={this.clearHandler}/>
          </Panel>
        </Container>
        <Panel></Panel>
      </div>
    )
  }
}

export default App
