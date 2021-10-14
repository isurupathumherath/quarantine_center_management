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
              <Route path="/add/food/:food" exact component={Addbatch}/>  {/* Anupa */}
              <Route path="/update/:food" exact component={UpdateStock}/>  {/* Anupa */}
              <Route path="/delete" exact component={Delete}/> {/* Anupa */}
              <Route path="/Inventory/food" exact component={Allstock}/> {/* Anupa */}
              <Route path="/onestock/:name" exact component={Onestock}/>   {/* Anupa */}
              <Route path="/newitem" exact component={Newitem}/>   {/* Anupa */}
              <Route path="/Inventory/medall" exact component={MedAll}/>   {/* Anupa */}
              <Route path="/Inventory/medbatches/:med" exact component={MedBatches}/>   {/* Anupa */}
              <Route path="/Inventory/medDelete" exact component={MedBatchDelete}/>   {/* Anupa */}
              <Route path="/Inventory/medUpdate/:med" exact component={MedBatchUpdate}/>   {/* Anupa */}
              <Route path="/Inventory/medadd/:med" exact component={AddNewBatchMed}/>   {/* Anupa */}
              <Route path="/Inventory/medall/mednew" exact component={AddnewMeditem}/>   {/* Anupa */}
              <Route path="/Inventory/medbatches/update/whole" exact component={Meditemupdate}/>   {/* Anupa */}
              <Route path="/Inventory/food/update" exact component={FooditemUpdate}/>   {/* Anupa */}
              <Route path="/Inventory/food/summary" exact component={SummaryFood}/>   {/* Anupa */}
              <Route path="/Inventory/med/summarymed" exact component={Summarymed}/>   {/* Anupa */}
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
