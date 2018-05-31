import React, { Component } from 'react'
import Sound from 'react-sound'
import soundfile from '../songs/overworld.mp3'

export default class Song extends Component {
    render() {
        return (

            <Sound
                url={soundfile}
                playStatus={Sound.status.PLAYING}
                playFromPosition={300 /* in milliseconds */}
                onLoading={this.handleSongLoading}
                onPlaying={this.handleSongPlaying}
                onFinishedPlaying={this.handleSongFinishedPlaying}
            />
        )
    }
}
