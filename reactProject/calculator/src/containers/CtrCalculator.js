import React, {Component} from 'react'

import Container from 'muicss/lib/react/container'
import Calculator from '../components/Calculator'

const API_ID = "59598"
const API_SECRET = "941661ba0a344863850ef3ae3b7d593a"

class CtrCalculator extends Component {
  state = {
    data: [],
    currentRate: '',
    count: '0'
  }

  componentDidMount = () => {
    fetch(`http://route.showapi.com/105-30?code=&showapi_appid=${API_ID}&showapi_sign=${API_SECRET}`)
      .then(res => res.json())
      .then(parsedJSON => {
        const datas = parsedJSON
          .showapi_res_body
          .list
          .filter(({zhesuan}) => zhesuan > 450 || zhesuan < 100)
        const updated = datas.map(data => {
          return {
            ...data
          }
        })
        this.setState({data: updated})
      })
  }

  // getData = () => {         //  const data =
  // res.showapi_res_body.list.slice(0,5)         //  this.setState({data: data})
  //    // .then(res => res.json())     // .then(parsedJSON =>
  // parsedJSON.showapi_res_body.list.map(item => ({name: `${item.name}`, zhesuan:
  // `${item.zhesuan}`})))     // .then(data => this.setState({data})) }

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
      <Container>
        <Calculator
          data={data}
          currentRate={currentRate}
          count={count}
          changeHandler={this.changeHandler}
          calculatorHandler={this.calculatorHandler}
          clearHandler={this.clearHandler}/>
      </Container>
    )
  }
}

export default CtrCalculator
