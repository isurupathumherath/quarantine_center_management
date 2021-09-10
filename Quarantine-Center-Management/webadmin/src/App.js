import axios from 'axios';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//pages
import viewTickets from './components/TicketManagement/adminAllTickets';
import replyTickets from './components/TicketManagement/adminEditTickets';


export default class App extends Component {

  render() {
    return (

      <BrowserRouter>
        <div className="container">

          <Route path="/" exact component={viewTickets}></Route>
          <Route path="/edit/:id" component={replyTickets}></Route>

        </div>
      </BrowserRouter>


    )
  }
}
