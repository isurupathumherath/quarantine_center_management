import './App.css';
import AddPCR from './components/MedicalTests/AddPCR';
import {BrowserRouter as Router,Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <div>
         <Route path="/addPCR" exact component={AddPCR}/>

         <AddPCR/>
      </div>
    </Router> 
    
  );
}

export default App;
