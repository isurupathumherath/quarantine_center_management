import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

//common navigation components
import Header from './components/Common/Navigation/Header';
import Sidebar from './components/Common/Navigation/Sidebar';

//component
import Login from './components/exampleComponent/Loginform';

//pages
import viewTickets from './components/TicketManagement/adminAllTickets';
import replyTickets from './components/TicketManagement/adminEditTickets';
import Dashboard from './components/UserManagement/Dashboard';
class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Sidebar />
        <div class="page-wrapper">
          <div class="content container-fluid">
            <Switch>
              <Route path="/login" exact component={Login} />
              <Route path="/viewticket" exact component={viewTickets} />
              <Route path="/edit/:id" component={replyTickets} />
              <Route path="/dashboard" exact component={Dashboard} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;