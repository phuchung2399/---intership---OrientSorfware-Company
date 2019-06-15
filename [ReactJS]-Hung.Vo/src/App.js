import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
const Index = React.lazy(() => import('./components/index'));
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;
class App extends Component {
  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>                      
              <Route path="/" name="App" component={Index} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;