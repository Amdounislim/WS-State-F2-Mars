import React, { Component } from 'react'

export default class Counter extends Component {
    render() {
        const{x}=this.props
        return (
            <div>
                <h1>{x}</h1>
            </div>
        )
    }
}
