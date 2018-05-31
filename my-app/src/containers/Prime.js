import React, { Component } from 'react'
import CalcPositionPrime from '../components/CalcPositionPrime'

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
        if (e.target.value < 0) {
            e.target.value = 0
        }
        this.setState({ input: e.target.value })
    }

    //arrow function for binding
    handleClick = () => {
        this.setState({ result: CalcPositionPrime(this.state.input) })
    }

    render() {
        return (
            <div>
                <p>Selection du n-ième chiffre premier (limité a 25)</p>
                <input type="number" onChange={this.handleChange} />
                <button onClick={this.handleClick}> Valider</button>
                <p>Resultat : {this.state.result}</p>
            </div>
        )
    }
}
