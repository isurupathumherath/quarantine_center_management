import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Common/Navigation/Sidebar'

//component
import Login from './components/UserManagement/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" exact component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
