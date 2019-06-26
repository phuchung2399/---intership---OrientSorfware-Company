import React, { Component } from 'react'
import Column from '../Column'
import IpsumDolor from '../IpsumDolor'
import MagnaPhasellus from '../MagnaPhasellus'
import '../../homePage/content/css/Content.css'
export default class TwoColumn1 extends Component {

    render() {
        return (
            <section className="content">
                <div className="container">
                    <div className="row">

                        <div className="col-9 col-12-medium">
                            <Column body={this.props.body.column}></Column>
                        </div>
                        <div className="col-3 col-12-medium">
                            <MagnaPhasellus body={this.props.body.magnaPhasellus}></MagnaPhasellus>
                            <IpsumDolor body={this.props.body.ipsumDolor}></IpsumDolor>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}
