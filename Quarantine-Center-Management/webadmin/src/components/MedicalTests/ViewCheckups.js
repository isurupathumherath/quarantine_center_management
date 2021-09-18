  import React,{useState,useEffect} from "react"
  import axios from "axios"
  import {Link} from 'react-router-dom';
 

  export default function ViewCheckups(){

    
  const [Checkups, setCheckups] = useState([]); 
  useEffect(() => {  
      function getCheckups() {     
         axios.get("http://localhost:8000/TempCheckup/display").then((res) => {  
                    console.log(res.data);   
                    setCheckups(res.data);   
             }).catch((err) => {       
               alert(err.message);     
           });  
      }   
     getCheckups();
  }, []); //when the array mentioned in the [] changes the useeffect happens..in here because we hve empty array the useeffect only run when the component refresh  const setData = (med) => {    let {_id,category,name,price_of_one,Batch} = med;    localStorage.setItem('id',_id);    localStorage.setItem('category', category);    localStorage.setItem('name', name);    localStorage.setItem('price', price_of_one);    localStorage.setItem('batch', Batch);}


const setData = (Checkups) => {



    let {_id,PatientId,CheckupId,CheckupDate,CheckupTime,Result} = Checkups;

    localStorage.setItem('checkupid',_id);

    localStorage.setItem('PatientId', PatientId);

    localStorage.setItem('CheckupId', CheckupId);

    localStorage.setItem('CheckupDate', CheckupDate);

    localStorage.setItem('CheckupTime', CheckupTime);

    localStorage.setItem('Result', Result);

}



    return (

        <div>
    
          <div class="page-wrapper">
    
            <div class="content container-fluid">
    
              <Link to={`/newitem`}>
    
                <button id="view">Add New +</button>
    
              </Link>
    
              <br></br>
              <style>{"table{border:1px solid black;}"}</style>
                <table class="table">
    
                    <th>Patient Id</th>
    
                    <th>Checkup Id</th>
    
                    <th>Checkup Date</th>

                    <th>Checkup Time</th>

                    <th>Result</th>
    
    
                    <th>Actions</th>
    
                  <tbody>
    
                    {Checkups.map((Checkups) => {
    
                      return (
    
                        <tr>
    
                          <td>{Checkups.PatientId}</td>
    
                          <td>{Checkups.CheckupId}</td>
    
                          <td>{Checkups.CheckupDate}</td>

                          <td>{Checkups.CheckupTime}</td>

                          <td>{Checkups.Result}</td>
    
                          <td>
    
                            <Link to={"/UpdateCheckup"}>
    
                              <button id="view" onClick={()=>setData(Checkups)}>Update</button>

                            </Link>
                            <Link to = {"/DeleteCheckup"}>
                              <button id="view" onClick={()=>setData(Checkups)}>Delete</button>
    
                            </Link>
    
                          </td>
    
                        </tr>
    
                      );
    
                    })}
    
                  </tbody>
    
                </table>
    
            </div>
    
          </div>
    
        </div>
    
      );

  }