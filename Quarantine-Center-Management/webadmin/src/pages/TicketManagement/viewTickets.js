import React, { Component } from 'react'; 
import Test from '../../components/TicketManagement/adminAllTickets'; 
// import Test2 from '../../components/TicketManagement/test'; 


export default class viewTickets extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Test />
          </div> 
          {/* <div className="col-lg-12">
            <Test2 />
          </div> */}
          </div>
        </div>
     
    )
  }
}
