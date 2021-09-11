import './App.css';
import React from 'react';
import Room from './components/AllRooms';
import RoomAdd from './components/AddRooms';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/add_room" component={ RoomAdd }></Route>
          <Route path="/room" component={ Room }></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
