import './css/Banner.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux'
import { actFetchBannerRequest } from './../../../../actions/index';
class banner extends Component {
    componentDidMount() {
        this.props.fetchAllBanner();
    }

    //  componentWillMount
    render() {
        // console.log(this.props.banner);
        var { banner } = this.props;
        return (
            <section className="header">
                <div className="banner">
                    <div className="container">
                        {
                            banner.map((bannerShow) => {
                                return (
                                    <div className="row">
                                        <div className="col-6 col-12-medium">
                                            <p>{bannerShow.content}</p>
                                            <a href="#" className="button-large">{bannerShow.button}</a>
                                        </div>
                                        <div className="col-6 col-12-medium imp-medium">
                                            <a href="#" className="bordered-feature-image"><img src={bannerShow.img} alt="" /></a>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        banner: state.banner
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllBanner: () => {
            dispatch(actFetchBannerRequest());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(banner)