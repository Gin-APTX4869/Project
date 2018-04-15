import React, {Component} from 'react'

import { Link } from 'react-router-dom'

import './main.css'

class Loading extends Component {
    state = {
        loading: true
    }
    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 1500)
    }
    render() {
        const { loading } = this.state
        if(loading) { 
            return null
        }
        return (
            <div className="Loading">
                <p>加载完毕</p>
                <button><Link to="/carousel">转到幻灯片</Link></button>
            </div>
            
        )
    }
}

export default Loading
