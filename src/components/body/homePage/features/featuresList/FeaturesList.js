import React, { Component } from 'react'
import '../css/FeaturesList.css';
import renderHTML from 'react-render-html';
export default class FeaturesList extends Component {
    render() {
        return (
            <div className="col-3 col-6-medium col-12-small">
                <section>
                    <a href="#q" className="bordered-feature-image"><img src={this.props.list.image} alt="" /></a>
                    <h2>{this.props.list.title}</h2>
                    <p>
                        {renderHTML(this.props.list.content)}
                    </p>
                </section>
            </div>
        )
    }
}
