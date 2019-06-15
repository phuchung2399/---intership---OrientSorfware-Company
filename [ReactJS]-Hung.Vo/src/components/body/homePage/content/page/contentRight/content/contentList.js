import React, { Component } from 'react'

export default class contentList extends Component {
    render() {
        return (
            <li>
                <img src={this.props.contentList.image} alt="" />
                <p>{this.props.contentList.status}</p>
                <span>{this.props.contentList.title}</span>
            </li>
        )
    }
}
