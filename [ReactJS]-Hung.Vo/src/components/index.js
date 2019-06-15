import React, { Component } from 'react'
import Header from './header/Header';
import Body from './body/body'
import Footer from './footer/Footer'
import '../assets/css/standard.css'
import '../assets/css/flex-row.css'
import '../assets/css/reponsive.css'

class index extends Component {
    render() {
        return (
            <div>
                <div className="page-wrapper">
                    <Header></Header>
                </div>
                <Body />
                <Footer></Footer>
            </div>
        )
    }
}
export default index