import React, { Component } from 'react'
import ABC from '../Shared/abc'

    const abcd = [ {
            title: "<a>a</a>",
            content: "aaaa"
        },
        {
            title: "a1",
            content: "aaaa1"
        }, {
            title: "2a",
            content: "aaaa2"
        }
]
export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hello: ''
        }
    }
    render() {
        console.log(this.props)

        return (
            <div>
                {
                    abcd.map(value => {
                        return (
                            <ABC
                            title={value.title} content={value.content}></ABC>
                        )
                    })
                }
                { <button onClick={() => { this.setState({ hello: "hello" }) }}></button> }
            </div>
        )
    }
}
