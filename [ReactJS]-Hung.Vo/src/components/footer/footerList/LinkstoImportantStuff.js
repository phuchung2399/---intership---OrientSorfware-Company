import React, { Component } from 'react'

export default class LinkstoImportantStuff extends Component {
    render() {
        return (
            <div className="col-3 col-12-small">
                <ul className="link-list last-child">
                    {this.props.footer.map((list, key) =>
                        <li key={key}><a href="#" >{list}</a></li>
                    )
                    }
                </ul>
            </div>
        )
    }
}
