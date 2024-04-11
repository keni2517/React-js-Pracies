import React, { Component } from 'react'

class ClassCom extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    increment = () => {
        console.log("increment");
        this.setState({count : this.state.count +1})
    }

    decrement = ()  => {
        this.setState({count : this.state.count -1})
    }
    render() {
        return (
            <>
                <h1>{this.state.count}</h1>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={this.increment}>
                   clik me
                </button>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={this.decrement}>
                   clik me
                </button>
            </>
        )
    }
}


export default ClassCom