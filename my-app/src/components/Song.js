import React, { Component } from 'react'
import Sound from 'react-sound'

export default class Song extends Component {
    constructor(props) {
        super(props)
        this.state = {
            onPlaying: Sound.status.STOPPED,
            symbol: "play"
        }
    }
    handleClick = () => {
        if (this.state.onPlaying === Sound.status.STOPPED) {
            this.setState({ onPlaying: Sound.status.PLAYING, symbol: "stop" })
        } else {
            this.setState({ onPlaying: Sound.status.STOPPED, symbol: "play" })
        }
    }
    render() {
        return (
            <div>
                <Sound key={this.props.name}
                    url={this.props.path}
                    playStatus={this.state.onPlaying}
                // playFromPosition={300 /* in milliseconds */}
                // onLoading={this.handleSongLoading}
                // onPlaying={this.handleSongPlaying}
                //onFinishedPlaying={this.handleSongFinishedPlaying}
                />
                <button onClick={this.handleClick}>{this.state.symbol}</button>
            </div>
        )
    }
}
