import React, { Component } from 'react'
import './css/Footer.css';
import LinkstoImportantStuff from './footerList/LinkstoImportantStuff'
import AnInformativeTextBlurb from './footerList/AnInformativeTextBlurb'
let footerOne = {
    listContentOne: [
        'Neque amet dapibus',
        'Sed mattis quis rutrum',
        'Accumsan suspendisse',
        'Eu varius vitae magna'
    ],
    listContentTwo: [
        'Neque amet dapibus',
        'Sed mattis quis rutrum',
        'Accumsan suspendisse',
        'Eu varius vitae magna'
    ],
    listContentThree: [
        'Neque amet dapibus',
        'Sed mattis quis rutrum',
        'Accumsan suspendisse',
        'Eu varius vitae magna'
    ],
    listContentFour: [
        'Neque amet dapibus',
        'Sed mattis quis rutrum',
        'Accumsan suspendisse',
        'Eu varius vitae magna'
    ]
}
let footerTow = {
    title: 'An Informative Text Blurb',
    content: 'Duis neque nisi, dapibus sed mattis quis, rutrum accumsan sed. Suspendisse eu varius nibh. Suspendisse vitae magna eget odio amet mollis. Duis neque nisi, dapibus sed mattis quis, sed rutrum accumsan sed. Suspendisse eu varius nibh lorem ipsum amet dolor sit amet lorem ipsum consequat gravida justo mollis.'
}

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Links to Important Stuff'
        }
    }
    render() {
        return (
            <div>
                <section className="footer">
                    <div className="container">
                        <div className="row">

                            <div className="col-8 col-12-medium">
                                <section>
                                    <h2>{this.state.title}</h2>
                                    <div>
                                        <div className="row">
                                            <LinkstoImportantStuff footer={footerOne.listContentOne}></LinkstoImportantStuff>
                                            <LinkstoImportantStuff footer={footerOne.listContentTwo}></LinkstoImportantStuff>
                                            <LinkstoImportantStuff footer={footerOne.listContentThree}></LinkstoImportantStuff>
                                            <LinkstoImportantStuff footer={footerOne.listContentFour}></LinkstoImportantStuff>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <AnInformativeTextBlurb footer={footerTow}></AnInformativeTextBlurb>
                        </div>
                    </div>
                </section>
                <footer className="copyright">
                    &copy; Untitled. All rights reserved. | Design: <a href="#">HTML5 UP</a>
                </footer>
            </div>
        )
    }
}