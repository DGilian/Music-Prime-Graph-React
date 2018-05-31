import React, { Component } from 'react'

export default class Music extends Component {
    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        <td>Title</td>
                        <td><button>play</button></td>
                        <td><button>add</button></td>
                    </tr>
                </tbody>
            </table>
        )
    }
}
