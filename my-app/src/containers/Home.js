import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default class Home extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/Music">Music</Link></li>
                    <li><Link to="/Prime">Prime</Link></li>
                    <li><Link to="/Graph">Graph</Link></li>
                </ul>
            </div>
        )
    }
}
