import React, { Component } from 'react'
import {BrowserRouter as Router,Route} from "react-router-dom"
import axios from 'axios'
import Allstock from './components/InventoryManagement/allStock';
import Onestock from './components/InventoryManagement/onestock';
import Delete from './components/InventoryManagement/deleteBatch';
import UpdateStock from './components/InventoryManagement/updateBatch';
import Addbatch from './components/InventoryManagement/addBatch';
// import Onestocktest from './components/InventoryManagement/onestock copy';

function App() {
  
  return (
    <Router>
    <div>
       <Route path="/add" exact component={Addbatch}/> 
       <Route path="/update" exact component={UpdateStock}/>  
       <Route path="/delete" exact component={Delete}/> 
       <Route path="/" exact component={Allstock}/> 
       <Route path="/onestock/:name" exact component={Onestock}/>                       
    </div>
    </Router>
  );
}

export default App;
                           