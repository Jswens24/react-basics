import React, { Component } from 'react';

class Parent extends Component {
    constructor() {
        super()

        this.state = {
            userInput: ''
        }
    }

    render() {
        return (
            <div>
                <h2>Parent Component</h2>
                <p>{this.state.userInput}</p>
                <input type="text" onChange={(event) => this.setState({ userInput: event.target.value })} />
            </div>
        )
    }
}

export default Parent;