import React, { Component } from 'react'

export default class Prime extends Component {
    handleChange(e) {
        console.log(e)
    }
    render() {
        return (
            <div>
                <p>Selection du n-ième chiffre premier</p>
                <input onChange={this.handleChange} />
                <button> Valider</button>
                <p>result</p>
            </div>
        )
    }
}
