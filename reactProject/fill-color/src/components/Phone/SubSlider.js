import React from 'react'
import back from '../../assets/back.png'

import phone1 from '../../assets/phone/phone1.png'
import phone2 from '../../assets/phone/phone2.png'
import phone3 from '../../assets/phone/phone3.png'
import phone4 from '../../assets/phone/phone4.png'

import price from '../../assets/phone/price.png'

import Slider from 'react-slick'

const SubSlider = ({history}) => {
    const goBackHandler = e => {
        e.stopPropagation()
        history.goBack()
    }

    const settings = {
        className: "center",
        centerMode: true,
        infinite: false,
        centerPadding: "60px",
        slidesToShow: 1,
        speed: 500
    }

    return (
        <div className="SubSlider">
            <div className="GoBack" onClick={goBackHandler}>
                <img src={back} alt=""/>
            </div>
            <div className="Price">
                <img src={price} alt=""/>
            </div>
            <div className="Phone-SubSlider">
                <Slider {...settings}>
                <div className="ImgSub">
                    <img src={phone1} alt=""/>
                </div>
                <div className="ImgSub">
                    <img src={phone2} alt=""/>
                </div>
                <div className="ImgSub">
                    <img src={phone3} alt=""/>
                </div>
                <div className="ImgSub">
                    <img src={phone4} alt=""/>
                </div>
                </Slider>
            </div>
        </div>
    )
}

export default SubSlider
