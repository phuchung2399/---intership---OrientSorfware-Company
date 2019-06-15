import React, { Component } from 'react'

export default class MagnaPhasellus extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <section>
                <header>
                    <h2>{this.props.body.title}</h2>
                </header>
                <ul className="link-list">
                    {this.props.body.listLinks.map((link, index) => {
                        return (
                            <li key={index}><a href={link.href}>{link.title}</a></li>
                        )
                    })}
                </ul>
            </section>
        )
    }
}
