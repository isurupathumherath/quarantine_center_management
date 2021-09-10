import axios from 'axios';
import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

//pages
import addTicket from './pages/TicketManagement/addTicket';


export default class App extends Component {
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

//common navigation components
import Header from "./components/Common/Navigation/Header";
import Footer from "./components/Common/Navigation/Footer";

//pages
import Login from "./pages/Common/Loginexaple";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <div class="content">
          <div class="container-fluid">
            <Switch>
              <Route path="/login" exact component={Login} />
            </Switch>
          </div>
        </div>
        <Footer />
      </Router>
    );
  }
}

  render() {
    return (

      <BrowserRouter>
      <div className="container">
        
        <Route path="/add" component={addTicket}></Route>
        </div>
        </BrowserRouter>

    
    )
  }
}
