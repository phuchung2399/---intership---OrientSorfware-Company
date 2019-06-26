import React, { Component } from 'react'
import FeaturesList from './featuresList/FeaturesList'
import { connect } from 'react-redux'
import { actFetchFeatureRequest } from './../../../../actions/index';
class Features extends Component {

    componentDidMount() {
        this.props.fetchAllFeatures();
    }

    render() {
        console.log(this.props.features)
        var { features } = this.props;
        return (
            <section className="features">
                <div className="container">
                    <div className="row">
                        {features.map((list, key) => {
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

const mapStateToProps = (state) => {
    return {
        features: state.features
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllFeatures: () => {
            dispatch(actFetchFeatureRequest());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Features)