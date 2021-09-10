import axios from 'axios';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//pages
import viewTickets from './components/TicketManagement/adminAllTickets';
import replyTickets from './components/TicketManagement/adminEditTickets';

export default class App extends Component {

  render() {
    return (
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

//common navigation components
import Header from './components/Common/Navigation/Header';
import Sidebar from './components/Common/Navigation/Sidebar'; 

//component
import Login from './components/exampleComponent/Loginform';

//pages
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

            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

      <BrowserRouter>
        <div className="container">

          <Route path="/" exact component={viewTickets}></Route>
          <Route path="/edit/:id" component={replyTickets}></Route>

        </div>
      </BrowserRouter>


    )
  }
}
