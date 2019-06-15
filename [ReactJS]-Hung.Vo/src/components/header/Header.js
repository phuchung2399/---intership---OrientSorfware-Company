import React, { Component } from 'react'
import './css/Header.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      namePage: {
        name: 'Halcyonic',
        url: '/'
      },
      menu: {
        homePage: {
          title: 'Homepage',
          url: '/'
        },
        threeColumn: {
          title: 'Three Column',
          url: '/ThreeColumn'
        },
        twoColumnOne: {
          title: 'Two Column #1',
          url: '/TwoColumnOne'
        },
        twoColumntwo: {
          title: 'Two Column #2',
          url: 'TwoColumnTwo'
        },
        oneColumn: {
          title: 'One Column',
          url: '/OneColumn'
        }
      }
    }
  }
  render() {
    return (
      <section className="header">
        <div className="container navbar-expand-lg">
          <div id="menu" className="row">
            <div className="col-12">
              <h1><Link to={this.state.menu.homePage.url}>{this.state.namePage.name}</Link></h1>
              <nav id="nav">
                <Link to={this.state.menu.homePage.url}>{this.state.menu.homePage.title}</Link>
                <Link to={this.state.menu.threeColumn.url}>{this.state.menu.threeColumn.title}</Link>
                <Link to={this.state.menu.twoColumnOne.url} >{this.state.menu.twoColumnOne.title}</Link>
                <Link to={this.state.menu.twoColumntwo.url} >{this.state.menu.twoColumntwo.title}</Link>
                <Link to={this.state.menu.oneColumn.url}>{this.state.menu.oneColumn.title}</Link>
              </nav>
            </div>
          </div>
        </div>
      </section >
    )
  }
}
