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
// import Invoice from "./pages/FinanceManagement/Invoice";
import Payer from "./pages/FinanceManagement/Payer";
// import Payment from "./pages/FinanceManagement/Payment"; 

import HomePage from "./pages/FinanceManagement/Fhome";
import Checkout from "./pages/FinanceManagement/Fcheckout";
import Payment from "./pages/FinanceManagement/Fpayment";
// import PaymentDetails from './pages/FinanceManagement/FpaymentDetails';



class App extends Component {
  render() {
    return (
      <Router>
        <Header /> 
            <Switch>
              {/* Janith */}
              <Route path="/login" exact component={Login} />
              <Route path="/paymentinvoice" exact component={PaymentInvoice} /> 
              {/* <Route path="/invoice" exact component={Invoice} />   */}
              <Route path="/payer" exact component={Payer} />  
              <Route path="/payment" exact component={Payment} />  


              <Route path="/home" exact component={HomePage} />   
              <Route path="/checkout" exact component={Checkout} />  
              <Route path="/invoice" exact component={Payment} />   
              {/* <Route path="/details" exact component={PaymentDetails} />    */}

 
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
