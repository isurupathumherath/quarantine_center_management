import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';

//common navigation components
import Header from './components/Common/Navigation/Header';
import Sidebar from './components/Common/Navigation/Sidebar'; 

//component
import Login from './components/exampleComponent/Loginform';

//Page Route
import addStaffMember from './pages/StaffMenagement/addStaffMember' //--Added by Isuru Pathum Herath--
import allStaffMembers from './pages/StaffMenagement/allStaffMembers' //--Added by Isuru Pathum Herath--
import updateStaffMember from './pages/StaffMenagement/updateStaffMember' //--Added by Isuru Pathum Herath--
import singleProfile from './pages/StaffMenagement/singleStaffProfile'  //--Added by Isuru Pathum Herath-- | TEMP
import viewTickets from './pages/TicketManagement/viewTickets'; //--Added by Vishara Prabuddhi--
import replyTickets from './pages/TicketManagement/replyTickets'; //--Added by Vishara Prabuddhi--


const Routes =() => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/login" exact component={Login} />
                <Route path="/addStaffMember" exact component={addStaffMember} />         {/*--Added by Isuru Pathum Herath--*/}
                <Route path="/allStaffMembers" exact component={allStaffMembers} />       {/*--Added by Isuru Pathum Herath--*/}
                <Route path="/updateStaffMember/:id" exact component={updateStaffMember} />   {/*--Added by Isuru Pathum Herath--*/}
                <Route path="/singleProfile/:id" exact component={singleProfile} />   {/*--Added by Isuru Pathum Herath--*/}
                <Route path="/viewalltickets" exact component={viewTickets}/> {/*--Added by Vishara Prabuddhi--*/}
                <Route path="/edit/:id" exact component={replyTickets}/> {/*--Added by Vishara Prabuddhi--*/}
            
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;