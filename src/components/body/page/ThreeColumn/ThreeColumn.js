import React, { Component } from 'react'
import Column from '../Column'
import IpsumDolor from '../IpsumDolor'
import '../../homePage/content/css/Content.css'

export default class ThreeColumn extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <section className="content">
                    <div className="container">
                        <div className="row">

                            <div className="col-3 col-12-medium">
                                <IpsumDolor body={this.props.body.ipsumDolor} />
                                <IpsumDolor body={this.props.body.ipsumDolor} />
                            </div>

                            <div className="col-6 col-12-medium imp-medium">
                                <Column body={this.props.body.column} />
                            </div>

                            <div className="col-3 col-12-medium">
                                <IpsumDolor body={this.props.body.ipsumDolor} />
                                <IpsumDolor body={this.props.body.ipsumDolor} />
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
