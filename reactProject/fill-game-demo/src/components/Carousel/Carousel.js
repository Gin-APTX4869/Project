import React from 'react'
import '../main.css'

import Slider from 'react-slick'

import { Link } from 'react-router-dom'

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <div className="Container">
      <Slider {...settings}>
        <div className="Home">
            <Link to="/goods-menu">转到子页面</Link>
            <img src="http://p79fvdw4d.bkt.clouddn.com/slider1.png" alt=""/>
        </div>
        <div className="Home">
            <Link to="/page2">转到子页面</Link>
            <img src="http://p79fvdw4d.bkt.clouddn.com/slider2.png" alt=""/>
        </div>
        <div className="Home">
            <Link to="/fill-color">转到子页面</Link>
            <img src="http://p79fvdw4d.bkt.clouddn.com/slider3.png" alt=""/>
        </div>
      </Slider>
    </div>
  )
}

export default Carousel
