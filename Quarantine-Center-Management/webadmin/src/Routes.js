/*
    Created by - Isuru Pathum Herath
    On - 11/10/2021
    Name - Routes
    Last Update - 11/10/2021
    Last Update By - Isuru Pathum Herath
 */

import React from 'react';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';
import App from './App';
import { getUser, logout } from './pages/StaffMenagement/staffHelper';
import { getAdminUser } from './adminHelper';

//common navigation components
import Header from './components/Common/Navigation/Header';
import Sidebar from './components/Common/Navigation/Sidebar';

//component
import Login from './components/UserManagement/Login';
import Dashboard from './components/UserManagement/Dashboard';
import ProfileDetails from './components/UserManagement/ProfileDetails';
import EditProfile from './components/UserManagement/EditProfile';
import Register from './components/UserManagement/Register';

//Page Route
import addStaffMember from './pages/StaffMenagement/addStaffMember' //--Added by Isuru Pathum Herath--
import allStaffMembers from './pages/StaffMenagement/allStaffMembers' //--Added by Isuru Pathum Herath--
import updateStaffMember from './pages/StaffMenagement/updateStaffMember' //--Added by Isuru Pathum Herath--
import addSalary from './pages/StaffMenagement/addSalaryforStaff' //--Added by Isuru Pathum Herath--
import addQuaratineStaff from './pages/StaffMenagement/addQuaratineStaff' //--Added by Isuru Pathum Herath--
import singleProfile from './pages/StaffMenagement/singleStaffProfile'  //--Added by Isuru Pathum Herath--
import filterStaffMember from './pages/StaffMenagement/filterStaffMember'  //--Added by Isuru Pathum Herath-- | TEMP
import addTask from './pages/StaffMenagement/addTaskStaffMember'  //--Added by Isuru Pathum Herath--
import showEmployeeTask from './pages/StaffMenagement/showEmployeeTasks' //--Added by Isuru Pathum Herath--
import staffAnalytic from './pages/StaffMenagement/StaffAnalytics' //--Added by Isuru Pathum Herath--
import staffLogin from './pages/StaffMenagement/staffLogin' //--Added by Isuru Pathum Herath--
import staffLandingPage from './pages/StaffMenagement/StaffLandingPage' //--Added by Isuru Pathum Herath--
import staffFirstLogin from './pages/StaffMenagement/staffFirstLogin' //--Added by Isuru Pathum Herath--
import PrivateRoute from './PrivateRoute';
import PrivateRouteAdmin from './PrivateRouteAdmin';

import viewTickets from './components/TicketManagement/adminAllTickets';
import replyTickets from './components/TicketManagement/adminEditTickets';

import AddTempCheckup from './components/MedicalTests/AddTempCheckup';
import AddPCR from './components/MedicalTests/AddPCR';
import DashboardMed from './components/MedicalTests/Dashboard';
import ViewPCR from './components/MedicalTests/ViewPCR';
import ViewCheckups from './components/MedicalTests/ViewCheckups';
import UpdatePCR from './components/MedicalTests/UpdatePCR';
import UpdateCheckup from './components/MedicalTests/UpdateCheckup';
import DeleteCheckup from './components/MedicalTests/DeleteCheckup';
import Reportpg1 from './components/MedicalTests/Reportpg1';
import MedReport from './components/MedicalTests/MedReport';
import Repo from './components/MedicalTests/Repo';
import CheckupRepo from './components/MedicalTests/ChechupRepo';



const Routes = () => {
    return (
        <div class="page-wrapper">
            <div class="content container-fluid">

                <BrowserRouter>
                    <Switch>
                        <Route path="/staffLogin" exact component={staffLogin} />                           {/*--Added by Isuru Pathum Herath--*/}
                        <PrivateRoute path="/staffLandingPage/:id" exact component={staffLandingPage} />    {/*--Added by Isuru Pathum Herath--*/}
                        <PrivateRoute path="/staffFirstLogin/:id" exact component={staffFirstLogin} />      {/*--Added by Isuru Pathum Herath--*/}
                    </Switch>

                    {getAdminUser() && (
                        <Sidebar />
                    )}
                    {getAdminUser() && (
                        <Header />
                    )}

                    <Switch>

                        <Route path="/" exact component={App} />

                        <PrivateRouteAdmin path="/addStaffMember" exact component={addStaffMember} />                   {/*--Added by Isuru Pathum Herath--*/}
                        <PrivateRouteAdmin path="/allStaffMembers" exact component={allStaffMembers} />                 {/*--Added by Isuru Pathum Herath--*/}
                        <PrivateRouteAdmin path="/updateStaffMember/:id" exact component={updateStaffMember} />         {/*--Added by Isuru Pathum Herath--*/}
                        <PrivateRouteAdmin path="/singleProfile/:id" exact component={singleProfile} />                 {/*--Added by Isuru Pathum Herath--*/}
                        <PrivateRouteAdmin path="/filterStaffMember" exact component={filterStaffMember} />             {/*--Added by Isuru Pathum Herath--*/}
                        <PrivateRouteAdmin path="/addSalary" exact component={addSalary} />                             {/*--Added by Isuru Pathum Herath--*/}
                        <PrivateRouteAdmin path="/addQuaratineStaff" exact component={addQuaratineStaff} />             {/*--Added by Isuru Pathum Herath--*/}
                        <PrivateRouteAdmin path="/addTask" exact component={addTask} />                                 {/*--Added by Isuru Pathum Herath--*/}
                        <PrivateRouteAdmin path="/showEmployeeTask/:id" exact component={showEmployeeTask} />           {/*--Added by Isuru Pathum Herath--*/}

                        <PrivateRouteAdmin path="/viewticket" exact component={viewTickets} />
                        <PrivateRouteAdmin path="/edit/:id" component={replyTickets} />

                        <PrivateRouteAdmin path="/dashboard" exact component={Dashboard} />
                        <PrivateRouteAdmin path="/update/:id" component={EditProfile} />
                        <PrivateRouteAdmin path="/profile/:id" component={ProfileDetails} />
                        <PrivateRouteAdmin path="/register" exact component={Register} />

                        <PrivateRouteAdmin path="/addPCR" exact component={AddPCR}/>
                        <PrivateRouteAdmin path="/addCheckup" exact component={AddTempCheckup}/>
                        <PrivateRouteAdmin path="/Medicaltests/dashboard" exact component={DashboardMed}/>
                        <PrivateRouteAdmin path="/ViewPCR" exact component={ViewPCR}/>
                        <PrivateRouteAdmin path="/ViewCheckups" exact component={ViewCheckups}/>
                        <PrivateRouteAdmin path="/UpdatePCR" exact component={UpdatePCR}/>
                        <PrivateRouteAdmin path="/UpdateCheckup" exact component={UpdateCheckup}/>
                        <PrivateRouteAdmin path="/DeleteCheckup" exact component={DeleteCheckup}/>
                        <PrivateRouteAdmin path="/Reportpg1" exact component={Reportpg1}/>
                        <PrivateRouteAdmin path="/MedReport" exact component={MedReport}/>
                        <PrivateRouteAdmin path="/Repo" exact component={Repo}/>
                        <PrivateRouteAdmin path="/CheckupRepo" exact component={CheckupRepo}/>
              

                    </Switch>
                </BrowserRouter>



            </div>
        </div >


    );
};

export default Routes;