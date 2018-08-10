import React, { Component } from 'react';
import './App.css';
import Home from './Layouts/Home';
import Detail from './Layouts/Detail';
import Layout from './Layouts/Layout';
import NotFound from './Layouts/NotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Models" component={Detail} />
            <Route  component={NotFound}/>
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
