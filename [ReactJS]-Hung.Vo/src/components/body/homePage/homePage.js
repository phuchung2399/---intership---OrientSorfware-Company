import React, { Component } from 'react'
import Content from './content/Content'
import Features from './features/Features'
import Banner from './banner/Banner';


export default class homePage extends Component {
    render() {
        return (
            <>
                <Banner></Banner>
                <Features></Features>
                <Content></Content>
            </>
        )
    }
}
