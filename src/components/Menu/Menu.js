import React, { Component } from 'react';
import './Menu.css'
import { Link } from 'react-router-dom';

class Menu extends Component {

    render() {
        return (
            <div className="navbar navbar-default">
                <ul className="nav navbar-nav">
                    <li >
                        <Link to="/">
                            <img className="logoMenu" src="https://image4.owler.com/logo/orient-software-development_owler_20160229_232233_large.png" alt="Image"></img>
                        </Link>

                    </li>
                </ul>

            </div>
        );
    }
}

export default Menu;
