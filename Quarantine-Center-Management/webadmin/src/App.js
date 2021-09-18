import React, { Component } from 'react';
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
import AddTempCheckup from './components/MedicalTests/AddTempCheckup';
import AddPCR from './components/MedicalTests/AddPCR';
import Dashboard from './components/MedicalTests/Dashboard';
import ViewPCR from './components/MedicalTests/ViewPCR';
import ViewCheckups from './components/MedicalTests/ViewCheckups';
import UpdatePCR from './components/MedicalTests/UpdatePCR';
import UpdateCheckup from './components/MedicalTests/UpdateCheckup';
import DeleteCheckup from './components/MedicalTests/DeleteCheckup';



class App extends Component {
  render() {
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
              <Route path="/addPCR" exact component={AddPCR}/>
              <Route path="/addCheckup" exact component={AddTempCheckup}/>
              <Route path="/Medicaltests/dashboard" exact component={Dashboard}/>
              <Route path="/ViewPCR" exact component={ViewPCR}/>
              <Route path="/ViewCheckups" exact component={ViewCheckups}/>
              <Route path="/UpdatePCR" exact component={UpdatePCR}/>
              <Route path="/UpdateCheckup" exact component={UpdateCheckup}/>
              <Route path="/DeleteCheckup" exact component={DeleteCheckup}/>
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;