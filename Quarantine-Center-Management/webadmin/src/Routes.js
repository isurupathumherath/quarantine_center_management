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

//component
import Room from './components/RoomManagement/AllRooms';
import RoomAdd from './components/RoomManagement/AddRooms';
import Report from './components/RoomManagement/Report';

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

// import viewTickets from './components/TicketManagement/adminAllTickets';
// import replyTickets from './components/TicketManagement/adminEditTickets';

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


import viewTickets from './pages/TicketManagement/viewTickets'; //--Added by Vishara Prabuddhi--
import replyTickets from './pages/TicketManagement/replyTickets'; //--Added by Vishara Prabuddhi--
import Mailer from './components/TicketManagement/mailer';

//Anupa
import Allstock from './components/InventoryManagement/allStock';
import Onestock from './components/InventoryManagement/onestock';
import Delete from './components/InventoryManagement/deleteBatch';
import UpdateStock from './components/InventoryManagement/updateBatch';
import Addbatch from './components/InventoryManagement/addBatch';
import Newitem from './components/InventoryManagement/newitem';
import MedAll from './components/InventoryManagement/MedAll';
import MedBatches from './components/InventoryManagement/MedBatches';
import MedBatchDelete from './components/InventoryManagement/medBatchDelete';
import MedBatchUpdate from './components/InventoryManagement/medbatchupdate';
import AddNewBatchMed from './components/InventoryManagement/addNewBatchmed';
import AddnewMeditem from './components/InventoryManagement/addnewMeditem';
import Meditemupdate from './components/InventoryManagement/MedItemupdate';
import UpdateFoodItem from './components/InventoryManagement/updateFooditem';
import FooditemUpdate from './components/InventoryManagement/updateFooditem';
import Summarymed from './components/InventoryManagement/summarymed';
import SummaryFood from './components/InventoryManagement/summaryFood';
//Anupa
import PayerDetails from './pages/FinanceManagement/PayerDetails';
import FinanceDashboard from './pages/FinanceManagement/FinanceDashboard';
import Inquary from './pages/FinanceManagement/Inquary';
import Payer from './pages/FinanceManagement/Payer';
import Payment from './pages/FinanceManagement/Payment';


/*--Added by Chamodh Iduranga--*/
import OrderAdmin from "../../webadmin/src/pages/FoodManagement/OrderAdmin";
import FoodAdmin from "../../webadmin/src/pages/FoodManagement/FoodAdmin";
import FoodReport from "../../webadmin/src/pages/FoodManagement/FoodReport";


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

                        <PrivateRouteAdmin path="/viewalltickets" exact component={viewTickets}/> {/*--Added by Vishara Prabuddhi--*/}
                        <PrivateRouteAdmin path="/edit/:id" exact component={replyTickets}/> {/*--Added by Vishara Prabuddhi--*/}
                        <PrivateRouteAdmin path="/Mailer" exact component={Mailer}/> {/*--Added by Vishara Prabuddhi--*/}
                        
                        <PrivateRouteAdmin path="/add/food/:food" exact component={Addbatch}/>  {/* Anupa */}
                        <PrivateRouteAdmin path="/update/:food" exact component={UpdateStock}/>  {/* Anupa */}
                        <PrivateRouteAdmin path="/delete" exact component={Delete}/> {/* Anupa */}
                        <PrivateRouteAdmin path="/Inventory/food" exact component={Allstock}/> {/* Anupa */}
                        <PrivateRouteAdmin path="/onestock/:name" exact component={Onestock}/>   {/* Anupa */}
                        <PrivateRouteAdmin path="/newitem" exact component={Newitem}/>   {/* Anupa */}
                        <PrivateRouteAdmin path="/Inventory/medall" exact component={MedAll}/>   {/* Anupa */}
                        <PrivateRouteAdmin path="/Inventory/medbatches/:med" exact component={MedBatches}/>   {/* Anupa */}
                        <PrivateRouteAdmin path="/Inventory/medDelete" exact component={MedBatchDelete}/>   {/* Anupa */}
                        <PrivateRouteAdmin path="/Inventory/medUpdate/:med" exact component={MedBatchUpdate}/>   {/* Anupa */}
                        <PrivateRouteAdmin path="/Inventory/medadd/:med" exact component={AddNewBatchMed}/>   {/* Anupa */}
                        <PrivateRouteAdmin path="/Inventory/medall/mednew" exact component={AddnewMeditem}/>   {/* Anupa */}
                        <PrivateRouteAdmin path="/Inventory/medbatches/update/whole" exact component={Meditemupdate}/>   {/* Anupa */}
                        <PrivateRouteAdmin path="/Inventory/food/update" exact component={FooditemUpdate}/>   {/* Anupa */}
                        <PrivateRouteAdmin path="/Inventory/food/summary" exact component={SummaryFood}/>   {/* Anupa */}
                        <PrivateRouteAdmin path="/Inventory/med/summarymed" exact component={Summarymed}/>   {/* Anupa */}
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
              
                        {/* <PrivateRouteAdmin path="/finance/payer" exact component={PayerDetails} /> */}
                        <PrivateRouteAdmin path="/finance/fDashboard" exact component={FinanceDashboard} />
                        <PrivateRouteAdmin path="/finance/inquary" exact component={Inquary} />
                        <PrivateRouteAdmin path="/finance/payer" exact component={Payer} />
                        <PrivateRouteAdmin path="/finance/payment" exact component={Payment} /> 

                            {/*--Added by Chamodh Iduranga--*/}
                        <PrivateRouteAdmin path="/orderAdmin" exact component={OrderAdmin} />
                        <PrivateRouteAdmin path="/foodadmin" exact component={FoodAdmin} />
                        <PrivateRouteAdmin path="/foodreports" exact component={FoodReport} />

                        <PrivateRouteAdmin path="/report" component={ Report }/>
                        <PrivateRouteAdmin path="/add_room" component={ RoomAdd }/>
                        <PrivateRouteAdmin path="/room" component={ Room }/>
                    </Switch>
                </BrowserRouter>



            </div>
        </div >


    );
};

export default Routes;