import React, { Component } from 'react'

export default class AnInformativeTextBlurb extends Component {
    render() {
        return (
            <div className="col-4 col-12-medium imp-medium">
                <section>
                    <h2>{this.props.footer.title}</h2>
                    <p>{this.props.footer.content}</p>
                </section>
            </div>
        )
    }
}
