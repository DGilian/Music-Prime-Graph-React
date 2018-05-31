import React, { Component } from 'react'
import { listMusic } from './ListOfMusic'
import { listPlayList } from './ListOfMusic'
import Song from './Song'

export default class TableMusic extends Component {
    render() {
        return (

            <table>
                <Song />
                <tbody>
                    {this.props.type === "list" ?
                        listMusic.map((value) =>
                            <tr key={value.name}>
                                <td>{value.name}</td>
                                <td><audio src="../songs/overworld.mp3" controls="controls"> </audio></td>
                                <td><button>{this.props.symbol}</button></td>
                            </tr>)
                        :
                        listPlayList.map((value) =>
                            <tr key={value.name}>
                                <td>{value.name}</td>
                                <td><audio src="../songs/overworld.mp3" controls="controls"> </audio></td>
                                <td><button>{this.props.symbol}</button></td>
                            </tr>)
                    }

                </tbody>
            </table>
        )
    }
}
