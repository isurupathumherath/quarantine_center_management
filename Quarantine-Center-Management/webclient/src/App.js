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
import PaymentInvoice from "./pages/FinanceManagement/PaymentInvoice";
import Home from "./pages/FinanceManagement/home";

class App extends Component {
  render() {
    return (
      <Router>
        <Header /> 
            <Switch>
              {/* Janith */}
              <Route path="/login" exact component={Login} />
              <Route path="/paymentinvoice" exact component={PaymentInvoice} /> 
              {/* Chamodh */}
              <Route path="/allFood" exact component={AllFood} />
              <Route path="/foodadmin" exact component={FoodAdmin} />
              <Route path="/allOrders" exact component={AllOrders} />
              <Route path="/foodCart" exact component={FoodCart} />
              <Route path="/orderAdmin" exact component={OrderAdmin} />
            </Switch> 
        <Footer />
      </Router>
    );
  }
}

export default App;
