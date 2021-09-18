import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

//common navigation components
import Header from "./components/Common/Navigation/Header";
import Footer from "./components/Common/Navigation/Footer";

//pages
import Login from "./pages/Common/Loginexaple";
// import addTicket from './pages/TicketManagement/addTicket'; //--Added by Vishara Prabuddhi--

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <div class="content">
          <div class="container-fluid">
            <Switch>
              <Route path="/login" exact component={Login} />
              {/* <Route path="/addticket" exact component={addTicket}/> --Added by Vishara Prabuddhi-- */}
            </Switch>
          </div>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;