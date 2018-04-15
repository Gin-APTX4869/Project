import React from 'react'

import back from '../../assets/back.png'
import subpage1 from '../../assets/subpage1.png'

import { Link } from 'react-router-dom'

const SubPage1 = ({history}) => {
  const goBackHandler = e => {
    e.stopPropagation()
    history.goBack()
  }
  return (
    <div className="SubPage1">
      <div className="GoBack" onClick={goBackHandler}>
        <img src={back} alt=""/>
      </div>
      <div className="SubImg">
        <Link to="/subslider"></Link>
        <img src={subpage1} alt=""/>
      </div>
    </div>
  )
}

export default SubPage1
