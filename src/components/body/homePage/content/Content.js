import React, { Component } from 'react'
import ContentLeft from './page/contentLeft/ContentLeft'
import ContentMid from './page/contentMid/ContentMid'
import ContentRight from './page/contentRight/ContentRight'

const Left = {
    title: 'Who We Are',
    image: 'https://html5up.net/uploads/demos/halcyonic/images/pic05.jpg',
    subject: 'A subheading about who we are',
    content: ' Duis neque nisi, dapibus sed mattis quis, rutrum accumsan magna sed. Suspendisse eu varius nibh. Suspendisse vitae magna eget odio amet mollis justo facilisis quis. Sed sagittis amet lorem ipsum.'
}
let Mid = {
    title: 'What We Do',
    subject: 'A subheading about what we do',
}
export default class Content extends Component {
    render() {
        return (
            <section className="content">
                <div className="container">
                    <div className="row aln-center">
                        <ContentLeft Left={Left} />
                        <ContentMid Mid={Mid} />
                        <ContentRight />
                    </div>
                </div>
            </section>

        )
    }
}