import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

//common navigation components
import Header from "./components/Common/Navigation/Header";
import Footer from "./components/Common/Navigation/Footer";
import AllFood from "../../webclient/src/pages/FoodManagement/AllFood";
import AddFood from "./components/FoodManagement/AddFood";
import NavBar from "./components/FoodManagement/ui/NavBar";
import FoodCart from "./components/FoodManagement/FoodCart";
import FoodAdmin from "./components/FoodManagement/FoodAdmin";
import AllOrders from "./components/FoodManagement/AllOrders";
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
              <NavBar />
              <Route path="/login" exact component={Login} />
              <Route path="/allFood" exact component={AllFood} />
              <Route path="/addFood" exact component={AddFood} />
              <Route path="/foodadmin" exact component={FoodAdmin} />
              <Route path="/allOrders" exact component={AllOrders} />
              <Route path="/foodCart" exact component={FoodCart} />
            </Switch>
          </div>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;


