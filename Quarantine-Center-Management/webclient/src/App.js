import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

//common navigation components

import Header from "./components/Common/Navigation/Header";
import Footer from "./components/Common/Navigation/Footer";
import AllFood from "../../webclient/src/pages/FoodManagement/AllFood";
import FoodAdmin from "../../webclient/src/pages/FoodManagement/FoodAdmin";

import FoodCart from "../../webclient/src/pages/FoodManagement/FoodCart";
import AllOrders from "../../webclient/src/pages/FoodManagement/AllOrders";
import OrderAdmin from "../../webclient/src/pages/FoodManagement/OrderAdmin";

//pages
import Login from "./pages/Common/Loginexaple";
import addTicket from './pages/TicketManagement/addTicket'; //--Added by Vishara Prabuddhi--
import formLandingPage from './pages/TicketManagement/formLandingPage'; //--Added by Vishara Prabuddhi--
// import viewMyTicket from './pages/TicketManagement/viewMyTicket'; //--Added by Vishara Prabuddhi--

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <div class="content">
          <div class="container-fluid">
            <Switch>
              {/* Janith */}
              <Route path="/login" exact component={Login} />
              {/* vishara */}
              <Route path="/addticket" exact component={addTicket}/> 
              <Route path="/formLandingPage" exact component={formLandingPage}/> 
              {/* <Route path="/viewMyTicket" exact component={viewMyTicket}/>  */}
              {/* Chamodh */}
              <Route path="/allFood" exact component={AllFood} />
              <Route path="/foodadmin" exact component={FoodAdmin} />
              <Route path="/allOrders" exact component={AllOrders} />
              <Route path="/foodCart" exact component={FoodCart} />
              <Route path="/orderAdmin" exact component={OrderAdmin} />
            </Switch>
          </div>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
