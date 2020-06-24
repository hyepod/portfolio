import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from './dashboard/Dashboard';
import Header from './appBar/Header';



class App extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return (
      <Router >
        <Fragment>
          <Header ref={this.myRef} />
          <Switch>
            <Route exact path="/" component={() => <Dashboard ref={this.myRef}/>} />
            {/* <Route component={Page404} /> */}
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));