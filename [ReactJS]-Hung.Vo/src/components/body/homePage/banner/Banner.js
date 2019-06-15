import React, { Component } from 'react'
import './css/Banner.css';
// import bannerPicture from './image/banner-picture.jpg';
export default class banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            baner: {
                title: 'We do something really useful, important, and unique. Learn all about it here ...',
                contentButton: 'Go on, click me!',
                image: 'https://html5up.net/uploads/demos/halcyonic/images/banner.jpg'
            }
        }
    }
    render() {
        console.log(this.state.baner.image);
        return (
            <section className="header">    
            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-12-medium">
                            <p>{this.state.baner.title}</p>
                            <a href="#" className="button-large">{this.state.baner.contentButton}</a>
                        </div>
                        <div className="col-6 col-12-medium imp-medium">
                            <a href="#aa" className="bordered-feature-image"><img src={this.state.baner.image} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
            </section> 
        )
    }
}
