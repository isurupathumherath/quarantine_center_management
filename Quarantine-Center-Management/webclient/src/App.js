import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

//common navigation components  /* Janith Gamage On - 11/10/2021  */
import Header from "./components/Common/Navigation/Header";
import Footer from "./components/Common/Navigation/Footer";

/* Janith Gamage On - 11/10/2021  */
import HomePage from "./pages/FinanceManagement/Fhome";
import Checkout from "./pages/FinanceManagement/Fcheckout";
import Payment from "./pages/FinanceManagement/Fpayment";
import Inquary from './pages/FinanceManagement/Finquary';



class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          {/* Janith Gamage On - 11/10/2021    */}
          <Route path="/home" exact component={HomePage} />
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/invoice" exact component={Payment} />
          <Route path="/inquary" exact component={Inquary} />

        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
