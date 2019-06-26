import React, { Component } from 'react';
import Column from '../Column';
import '../../homePage/content/css/Content.css'
export default class OneColumn extends Component {
    render() {
        return (
            <section className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Column body={this.props.body} />
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}
