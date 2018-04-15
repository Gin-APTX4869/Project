import React from 'react'

import back from '../../assets/back.png'
import Color1 from '../../assets/subPage/1.png'
import Color2 from '../../assets/subPage/2.png'
import Color3 from '../../assets/subPage/3.png'
import Color4 from '../../assets/subPage/4.png'
import Color5 from '../../assets/subPage/5.png'

import Game from '../../assets/Game.png'

import { Link } from 'react-router-dom'

import Slider from 'react-slick'

const SubPage3 = ({history}) => {
  const goBackHandler = e => {
    e.stopPropagation()
    history.goBack()
  }

  const settings = {
    className: "slider",
    centerMode: true,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500
  }

  return (
    <div className="SubPage3">
      <div className="GoBack" onClick={goBackHandler}>
        <img src={back} alt=""/>
      </div>
      <div className="SubPage3-Game">
      <Link to="/shape2"><img src={Game} alt=""/></Link>
        <Slider {...settings}>
          <div className="ImgSub-1">
            <img src={Color1} alt=""/>
          </div>
          <div className="ImgSub-1">
            <img src={Color2} alt=""/>
          </div>
          <div className="ImgSub-1">
            <img src={Color3} alt=""/>
          </div>
          <div className="ImgSub-1">
            <img src={Color4} alt=""/>
          </div>
          <div className="ImgSub-1">
            <img src={Color5} alt=""/>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default SubPage3
