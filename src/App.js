import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';

class App extends Component {
  
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/details/:user" component={ Details } />
      </Switch>
    );
  }  
}


export default App;
