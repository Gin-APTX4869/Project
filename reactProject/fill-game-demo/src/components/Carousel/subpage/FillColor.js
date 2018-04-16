import React, {Component} from 'react'

import back from '../../../assets/Images/back.png'
import Game from '../../../assets/Images/game.png'

import Slider from 'react-slick'

import {Link} from 'react-router-dom'

class FillColor extends Component {
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
            centerPadding: "60px",
            slidesToShow: 1,
            speed: 500
        }
        const img = [
            {
                url: 'http://p79fvdw4d.bkt.clouddn.com/1.png'
            }, {
                url: 'http://p79fvdw4d.bkt.clouddn.com/2.png'
            }, {
                url: 'http://p79fvdw4d.bkt.clouddn.com/3.png'
            }, {
                url: 'http://p79fvdw4d.bkt.clouddn.com/4.png'
            }, {
                url: 'http://p79fvdw4d.bkt.clouddn.com/5.png'
            }
        ]
        return (
            <div className="Container">
                <div className="GoBack" onClick={this.goBackHandler}>
                    <img src={back} alt=""/>
                </div>

                <div>
                    <div className="Game">
                        <Link to="/shape"><img src={Game} alt=""/></Link>
                    </div>
                    <div className="SubGame">
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

export default FillColor
