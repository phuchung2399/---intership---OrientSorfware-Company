import React, { Component } from 'react'

export default class ContentLeft extends Component {
    render() {
        return (
            <div class="col-4 col-12-medium">
                <section class="section">
                    <header>
                        <h2>{this.props.Left.title}</h2>
                        <h3>{this.props.Left.subject}</h3>
                    </header>
                    <a href="#" class="feature-image"><img src={this.props.Left.image} alt="" /></a>
                    <p>{this.props.Left.content}</p>
                </section>
            </div>
        )
    }
}
