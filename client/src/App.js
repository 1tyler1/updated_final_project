import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import HomePage from './components/HomePage';
import LogInPage from './components/LogInPage'
import ShowUsers from './components/Users/ShowUsers.js';
import ArtPage from './components/ArtPage';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/user" component={LogInPage} />
        <Route exact path="/user/:userId" component={ShowUsers} />
        <Route exact path="/user/:userId/art" component={ArtPage} />
        </Switch>
        </Router>
      </div>
    );
  }
}

export default App
