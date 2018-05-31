import React, { Component } from 'react'
import Sound from 'react-sound'

export default class Song extends Component {
    constructor(props) {
        super(props)
        this.state = {
            onPlaying: Sound.status.STOPPED
        }
    }
    handleClick = () => {
        if (this.state.onPlaying === Sound.status.STOPPED) {
            this.setState({ onPlaying: Sound.status.PLAYING })
        } else {
            this.setState({ onPlaying: Sound.status.STOPPED })
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
                <button onClick={this.handleClick}>play</button>
            </div>
        )
    }
}
