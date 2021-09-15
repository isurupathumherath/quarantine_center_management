/*
    Created by - Vishara Prabuddhi
    On - 30/08/2021
    Name - Reply Ticket
 */

import React, { Component } from 'react'; 
import Reply from '../../components/TicketManagement/adminEditTickets'; 


export default class replyTickets extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Reply />
          </div>
          </div>
        </div>
     
    )
  }
}
