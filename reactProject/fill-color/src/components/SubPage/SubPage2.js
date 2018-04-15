import React from 'react'

import back from '../../assets/back.png'
import subpage2 from '../../assets/subpage2.png'

import { Link } from 'react-router-dom'

const SubPage2 = ({history}) => {
  const goBackHandler = e => {
    e.stopPropagation()
    history.goBack()
  }
  return (
    <div className="SubPage2">
      <div className="GoBack" onClick={goBackHandler}>
        <img src={back} alt=""/>
      </div>
      <div className="SubImg">
        <img src={subpage2} alt=""/>
      </div>
      <div className="ClickBox">
        <Link to=""></Link>
      </div>
    </div>
  )
}

export default SubPage2
