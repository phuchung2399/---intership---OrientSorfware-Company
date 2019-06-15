import React, { Component } from 'react'
import renderHTML from 'react-render-html';
export default class Column extends Component {
    render() {
        return (
            <section>
                <header>
                    <h2>{this.props.body.title}</h2>
                    <h3>{this.props.body.description}</h3>
                </header>
                {renderHTML(this.props.body.content)}
            </section>
        )
    }
}
