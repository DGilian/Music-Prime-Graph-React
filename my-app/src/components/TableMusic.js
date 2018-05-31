import React, { Component } from 'react'
import { listMusic } from './ListOfMusic'
import { listPlayList } from './ListOfMusic'

export default class TableMusic extends Component {
    render() {
        return (
            <table>
                <tbody>
                    {this.props.type === "list" ?
                        listMusic.map((value) =>
                            <tr key={value.name}>
                                <td>{value.name}</td>
                                <td><button>play</button></td>
                                <td><button>{this.props.symbol}</button></td>
                            </tr>)
                        :
                        listPlayList.map((value) =>
                            <tr key={value.name}>
                                <td>{value.name}</td>
                                <td><button>play</button></td>
                                <td><button>{this.props.symbol}</button></td>
                            </tr>)
                    }

                </tbody>
            </table>
        )
    }
}
