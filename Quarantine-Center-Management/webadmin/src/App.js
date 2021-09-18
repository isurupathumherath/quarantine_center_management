import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';



//common navigation components
import Header from './components/Common/Navigation/Header';
import Sidebar from './components/Common/Navigation/Sidebar';

//component
import Login from './components/exampleComponent/Loginform';

//Page Route
import addStaffMember from './pages/StaffMenagement/addStaffMember' //--Added by Isuru Pathum Herath--
import allStaffMembers from './pages/StaffMenagement/allStaffMembers' //--Added by Isuru Pathum Herath--
import updateStaffMember from './pages/StaffMenagement/updateStaffMember' //--Added by Isuru Pathum Herath--
import addSalary from './pages/StaffMenagement/addSalaryforStaff' //--Added by Isuru Pathum Herath--
import singleProfile from './pages/StaffMenagement/singleStaffProfile'  //--Added by Isuru Pathum Herath-- | TEMP
import filterStaffMember from './pages/StaffMenagement/filterStaffMember'  //--Added by Isuru Pathum Herath-- | TEMP

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
              <Route path="/addStaffMember" exact component={addStaffMember} />         {/*--Added by Isuru Pathum Herath--*/}
              <Route path="/allStaffMembers" exact component={allStaffMembers} />       {/*--Added by Isuru Pathum Herath--*/}
              <Route path="/updateStaffMember/:id" exact component={updateStaffMember} />   {/*--Added by Isuru Pathum Herath--*/}
              <Route path="/singleProfile/:id" exact component={singleProfile} />   {/*--Added by Isuru Pathum Herath--*/}
              <Route path="/filterStaffMember" exact component={filterStaffMember} />   {/*--Added by Isuru Pathum Herath--*/}
              <Route path="/addSalary" exact component={addSalary} />   {/*--Added by Isuru Pathum Herath--*/}
              
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