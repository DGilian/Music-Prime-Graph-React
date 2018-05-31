import React, { Component } from 'react'
import TableMusic from '../components/TableMusic'
import './Music.css'

export default class Music extends Component {
    render() {
        return (
            <div>
                <p>My music</p>
                <div className="table">
                    <TableMusic type="list" symbol=" ( + )" />
                    <TableMusic type="playList" symbol=" ( X )" />
                </div>

            </div>
        )
    }
}
