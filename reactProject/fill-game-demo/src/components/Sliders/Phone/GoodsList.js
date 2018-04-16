import React, {Component} from 'react'

import back from '../../../assets/Images/back.png'
import price from '../../../assets/Images/price.png'

import Slider from 'react-slick'

class GoodsList extends Component {

    goBackHandler = e => {
        e.stopPropagation()
        this
            .props
            .history
            .goBack()
    }
    render() {
        const settings = {
            className: "slider",
            centerMode: true,
            infinite: false,
            centerPadding: "70px",
            slidesToShow: 1,
            speed: 500
        }
        const img = [
            {
                url: 'http://p79fvdw4d.bkt.clouddn.com/phone1.png'
            }, {
                url: 'http://p79fvdw4d.bkt.clouddn.com/phone2.png'
            }, {
                url: 'http://p79fvdw4d.bkt.clouddn.com/phone3.png'
            }, {
                url: 'http://p79fvdw4d.bkt.clouddn.com/phone4.png'
            }
        ]
        return (
            <div className="Container">
                <div className="GoBack" onClick={this.goBackHandler}>
                    <img src={back} alt=""/>
                </div>

                <div>
                    <div className="Price">
                        <img src={price} alt=""/>
                    </div>
                    <div className="SubSlider">
                        <Slider {...settings}>
                            {img.map((item, index) => {
                                return (
                                    <div key={index} className="SubImg">
                                        <img src={item.url} alt=""/>
                                    </div>
                                )
                            })
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}

export default GoodsList
