import React from 'react'
import slider1 from '../assets/sliders/slider1.png'
import slider2 from '../assets/sliders/slider2.png'
import slider3 from '../assets/sliders/slider3.png'

import Slider from 'react-slick'

import { Link } from 'react-router-dom'

import './main.css'

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: false,
        lazyLoad: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return (
        <div className="Carousel">
            <Slider {...settings}>
                <div>
                    <Link to="/subpage1">转到子页面</Link>
                    <img src={slider1} alt=""/>
                </div>
                <div>
                    <Link to="/subpage2">转到子页面</Link>
                    <img src={slider2} alt=""/>
                </div>
                <div>
                    <Link to="/subpage3">转到子页面</Link>
                    <img src={slider3} alt=""/>
                </div>
            </Slider>
        </div>
    )
}

export default Carousel
