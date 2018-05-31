import React, { Component } from 'react'

export default class Prime extends Component {
    constructor() {
        super()
        this.state = {
            input: 0,
            result: 0
        }
    }
    //arrow function for binding
    handleChange = (e) => {
        this.setState({ input: e.target.value })
        console.log(this.state.input)
    }
    handleClick() {
        console.log("test")
    }
    render() {
        return (
            <div>
                <p>Selection du n-ième chiffre premier</p>
                <input type="number" onChange={this.handleChange} />
                <button onClick={this.handleClick}> Valider</button>
                <p>result</p>
            </div>
        )
    }
}
