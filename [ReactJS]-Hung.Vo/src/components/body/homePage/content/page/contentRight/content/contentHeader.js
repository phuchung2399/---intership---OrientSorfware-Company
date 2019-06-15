import React, { Component } from 'react'

export default class headerContent extends Component {
    render() {
        return (
            <header>
                <h2>{this.props.contentHeader.status}</h2>
                <h3>{this.props.contentHeader.title}</h3>
            </header>
        )
    }
}
