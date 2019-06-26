import React, { Component } from 'react'
import './css/Header.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux'
import { actFetchMenuRequest } from './../../actions/index';
class Header extends Component {
  componentDidMount() {
    this.props.fetchAllMenu();
  }
  render() {
    //  console.log(this.props.menu);
    var { menu,a } = this.props;
    return (
      <section className="header">
        <div className="container navbar-expand-lg">
          <div id="menu" className="row">
            <div className="col-12">
              <h1><a id='logo'>Halcyonic</a></h1>
              <nav id="nav">
                {
                  menu.map((menuShow, index) => {
                    return (
                      <Link key={index} to={menuShow.url}>{menuShow.Name}</Link>
                    )
                  })
                }
                {console.log(a)}
              </nav>
            </div>
          </div>
        </div>
      </section >
    )
  }
}
const mapStateToProps = (state) => {
  return {
    menu: state.menu
  }
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllMenu: () => {
      dispatch(actFetchMenuRequest());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)