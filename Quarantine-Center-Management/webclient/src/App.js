import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

//common navigation components
import Header from "./components/Common/Navigation/Header";
import Footer from "./components/Common/Navigation/Footer";

//pages
import Login from "./pages/Common/Loginexaple";
import PaymentInvoice from "./pages/FinanceManagement/PaymentInvoice";

class App extends Component {
  render() {
    return (
      <Router>
        <Header /> 
            <Switch>
              <Route path="/login" exact component={Login} />
              <Route path="/paymentinvoice" exact component={PaymentInvoice} />
            </Switch> 
        <Footer />
      </Router>
    );
  }
}

export default App;