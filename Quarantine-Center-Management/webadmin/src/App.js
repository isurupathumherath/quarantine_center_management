import React, { Component, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

//common navigation components
import Header from './components/Common/Navigation/Header';
import Sidebar from './components/Common/Navigation/Sidebar';

//component
import Login from './components/exampleComponent/Loginform';

//pages
import viewTickets from './components/TicketManagement/adminAllTickets';
import replyTickets from './components/TicketManagement/adminEditTickets';
import Dashboard from "./pages/FinanceManagement/dashboard";
import Inquary from "./pages/FinanceManagement/finceinquary";

class App extends Component {
  render() {
    
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
      <Router>
        <Header />
        <Sidebar />
        <div class="page-wrapper">
          <div class="content container-fluid">
            <Switch>
              <Route path="/login" exact component={Login} />
              <Route path="/viewticket" exact component={viewTickets} />
              <Route path="/edit/:id" component={replyTickets} />
              <Route path="/dashboard" exact component={Dashboard} />
              <Route path="/inquary" exact component={Inquary} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
