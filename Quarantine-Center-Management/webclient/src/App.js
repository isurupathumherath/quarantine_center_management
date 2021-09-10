import axios from 'axios';
import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

//pages
import addTicket from './pages/TicketManagement/addTicket';


export default class App extends Component {

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
