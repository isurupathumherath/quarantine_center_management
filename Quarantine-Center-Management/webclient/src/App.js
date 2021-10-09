import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";


//common navigation components
import Header from "./components/Common/Navigation/Header";
import Footer from "./components/Common/Navigation/Footer";
import Register from './components/UserManagement/Register';
//import Register from "./components/UserManagement/Test";
import Home from './components/UserManagement/Home';
import Login from './components/UserManagement/Login';
import EditProfile from './components/UserManagement/EditProfile';
import { Provider } from 'react-redux';

//pages
//import Login from "./pages/Common/Loginexaple";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <div class="content">
          <div class="container-fluid">
            <Switch>
              {/*<Route path="/login" exact component={Login} />*/}
              <Route path="/register" exact component={Register} />
              <Route path="/login" exact component={Login} />
              <Route path="/home" exact component={Home}/>
              
    {/*<Route path="/edit/:id" component={EditProfile} />*/}
            </Switch>
          </div>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;