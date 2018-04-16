import React, {Component} from 'react'
import back from '../../../assets/Images/back.png'
import introduce from '../../../assets/Images/Carousel/subpage/introduce.png'

import {Link} from 'react-router-dom'

class Page2 extends Component {
    goBackHandler = e => {
        e.stopPropagation()
        this
            .props
            .history
            .goBack()
    }
    render() {
        return (
            <div className="Container">
                <div className="GoBack" onClick={this.goBackHandler}>
                    <img src={back} alt=""/>
                </div>
                <div>
                    <Link to="/phone" className="SubA" href=""></Link>
                    <img src={introduce} alt=""/>
                </div>
            </div>
        )
    }
}

export default Page2
