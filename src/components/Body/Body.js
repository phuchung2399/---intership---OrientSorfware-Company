import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './Home/Home'
import ThreeColumn from './ThreeColumn/ThreeColumn'
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;
export default class Body extends Component {
    render() {
        return (
            <HashRouter>
                <React.Suspense fallback={loading()}>
                    <Switch>
                        <Route exact path="/home" name="Home" render={props => <Home {...props} hello={this.props.hello}/>} />   
                        <Route exact path="/three-column" name="ThreeColumn" render={props => <ThreeColumn {...props} />} />                        
                    </Switch>
                </React.Suspense>
            </HashRouter>
        )
    }
}
