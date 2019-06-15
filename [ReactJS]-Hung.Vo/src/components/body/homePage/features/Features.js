import React, { Component } from 'react'
import FeaturesList from './featuresList/FeaturesList'
const featuresList = [
    {
        image: "https://html5up.net/uploads/demos/halcyonic/images/pic01.jpg",
        title: "Welcome to Halcyonic",
        content: " This is <strong>Halcyonic</strong>, a free site template by <a href='#q'>AJ</a> for <a href='#q'>HTML5 UP</a>. It's responsive, built on HTML5 + CSS3, and includes 5 unique page layouts."
    },
    {
        image: "https://html5up.net/uploads/demos/halcyonic/images/pic02.jpg",
        title: "Responsive You Say?",
        content: "Yes! Halcyonic is built to be fully responsive so it looks great at every screen size, from desktops to tablets to mobile phones."
    },
    {
        image: "https://html5up.net/uploads/demos/halcyonic/images/pic03.jpg",
        title: "License Info",
        content: " Halcyonic is licensed under the <a href='#q'>CCA</a> license, so use it for personal/commercial use as much as you like (just keep our credits intact)."
    },
    {
        image: 'https://html5up.net/uploads/demos/halcyonic/images/pic04.jpg',
        title: 'Volutpat etiam aliquam',
        content: ' Duis neque nisi, dapibus sed mattis quis, rutrum accumsan sed. Suspendisse eu varius nibh. Suspendisse vitae magna mollis.'
    }
]
export default class Features extends Component {
    render() {
        return (
            <section className="features">
                <div className="container">
                    <div className="row">
                        {featuresList.map((list, key) => {
                            return (
                                <FeaturesList key={key} list={list} />
                            )
                        })}
                    </div>
                </div>
            </section>
        )
    }
}
