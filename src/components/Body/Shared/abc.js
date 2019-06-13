import React, { Component } from 'react'

export default class ABC extends Component {
    render() {
        return (
            <div>
                {this.props.title}
                {this.props.content}
            </div>
        )
    }
}
