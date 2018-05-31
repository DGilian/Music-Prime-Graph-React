import React, { Component } from 'react'
import TableMusic from '../components/TableMusic'
import './Music.css'

export default class Music extends Component {
    render() {
        return (
            <div>

                <div className="table">
                    <div>
                        <p>Music</p>
                        <TableMusic type="list" symbol=" ( + )" />
                    </div>

                    <div>
                        <p>My playlist</p>
                        <TableMusic type="playList" symbol=" ( X )" />
                    </div>

                </div>
            </div>
        )
    }
}
