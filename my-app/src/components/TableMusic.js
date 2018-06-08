import React, { Component } from 'react'
import { listMusic } from './ListOfMusic'
import { listPlayList } from './ListOfMusic'
import Song from './Song'

export default class TableMusic extends Component {
    handleClick() {
        console.log("youhou")
    }
    render() {
        return (

            <table>
                <tbody>
                    {this.props.type === "list" ?
                        listMusic.map((value) =>
                            <tr key={value.name}>
                                <td>{value.name}</td>
                                <td>
                                    <Song path={value.path} name={value.name} />
                                </td>
                                <td>
                                    <button>{this.props.symbol}</button>
                                </td>
                            </tr>)
                        :
                        listPlayList.map((value) =>
                            <tr key={value.name}>
                                <td>{value.name}</td>
                                <td><button>{this.props.symbol}</button></td>
                            </tr>)
                    }
                </tbody>
            </table>
        )
    }
}
