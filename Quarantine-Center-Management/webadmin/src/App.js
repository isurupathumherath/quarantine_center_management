import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

//common navigation components
import Header from './components/Common/Navigation/Header';
import Sidebar from './components/Common/Navigation/Sidebar';

//component
import Login from './components/exampleComponent/Loginform';
import Allstock from './components/InventoryManagement/allStock';
import Onestock from './components/InventoryManagement/onestock';
import Delete from './components/InventoryManagement/deleteBatch';
import UpdateStock from './components/InventoryManagement/updateBatch';
import Addbatch from './components/InventoryManagement/addBatch';

//pages
import viewTickets from './components/TicketManagement/adminAllTickets';
import replyTickets from './components/TicketManagement/adminEditTickets';
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
              <Route path="/add" exact component={Addbatch}/>  {/* Anupa */}
              <Route path="/update" exact component={UpdateStock}/>  {/* Anupa */}
              <Route path="/delete" exact component={Delete}/> {/* Anupa */}
              <Route path="/" exact component={Allstock}/> {/* Anupa */}
              <Route path="/onestock/:name" exact component={Onestock}/>   {/* Anupa */}
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
