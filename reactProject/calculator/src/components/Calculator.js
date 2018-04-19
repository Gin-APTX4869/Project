import React from 'react'

import Option from 'muicss/lib/react/option'
import Select from 'muicss/lib/react/select'
import Input from 'muicss/lib/react/input'
import Button from 'muicss/lib/react/button'
import Form from 'muicss/lib/react/form'

const Calculator = (props) => {
  return (
    <div>
      <Form onSubmit={props.calculatorHandler}>
        <Input label="买入价" name="price" floatingLabel={true} required={true}/>
        <Select name="input" label="选择币种" onChange={props.changeHandler}>
          {props
            .data
            .map((item, index) => {
              const {zhesuan, name} = item
              return (<Option key={index} value={zhesuan} label={name}/>)
            })
          }
        </Select>
        <Input
          onChange={props.changeHandler}
          label="当前汇率"
          name="rate"
          floatingLabel={true}
          value={props.currentRate}
          disabled/>
        <Input label="个数" name="number" floatingLabel={true} required={true}/>
        <Button variant="raised" color="primary">计算</Button>
      </Form>
      <Button variant="raised" onClick={props.clearHandler}>清零</Button>
      <div className="mui--text-caption">折合人民币：{props.count}元</div>
    </div>
  )
}

export default Calculator
