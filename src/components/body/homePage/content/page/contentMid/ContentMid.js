import React, { Component } from 'react'
import '../../css/Content.css'
export default class ContentMid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: [
                'Sed mattis quis rutrum accum',
                'Eu varius nibh suspendisse lorem',
                'Magna eget odio amet mollis justo',
                'Facilisis quis sagittis mauris',
                'Amet tellus gravida lorem ipsum'
            ]
        }
    }
    render() {
        return (
            <div class="col-4 col-6-medium col-12-small">
                <section class="section">
                    <header>
                        <h2>{this.props.Mid.title}</h2>
                        <h3>{this.props.Mid.subject}</h3>
                    </header>
                    <ul class="check-list">
                        {this.state.content.map((list, key) =>
                            <li key={key}>{list}</li>
                        )
                        }
                    </ul>
                </section>
            </div>
        )
    }
}
