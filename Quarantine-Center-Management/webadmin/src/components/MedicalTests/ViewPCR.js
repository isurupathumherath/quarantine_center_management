import React,{useState,useEffect} from "react"
import axios from "axios"
import {Link} from 'react-router-dom';


export default function ViewPCR(){

  
  const [PCRTests, setPCRTests] = useState([]); 
  useEffect(() => {  
    function getPCRTests() {     
       axios.get("http://localhost:8000/PCRTest/display").then((res) => {  
                  console.log(res.data);   
                  setPCRTests(res.data);   
           }).catch((err) => {       
             alert(err.message);     
         });  
    }   
   getPCRTests();
  }, []); //when the array mentioned in the [] changes the useeffect happens..in here because we hve empty array the useeffect only run when the component refresh  const setData = (med) => {    let {_id,category,name,price_of_one,Batch} = med;    localStorage.setItem('id',_id);    localStorage.setItem('category', category);    localStorage.setItem('name', name);    localStorage.setItem('price', price_of_one);    localStorage.setItem('batch', Batch);}


const setData = (PCRTests) => {



  let {_id,PatientId,PCRTestId,TestNo,TestDate,TestTime,Result} = PCRTests;

  localStorage.setItem('testid',_id);

  localStorage.setItem('PatientId', PatientId);

  localStorage.setItem('PCRTestId', PCRTestId);

  localStorage.setItem('TestNo', TestNo);

  localStorage.setItem('TestDate',TestDate);

  localStorage.setItem('TestTime', TestTime);

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
  
              <table class="table">
  
                  <th>Patient Id</th>
  
                  <th>PCR Test Id</th>

                  <th>Test Number</th>

                  <th>Test Date</th>

                  <th>Test Time</th>

                  <th>Result</th>
  
  
                  <th>Actions</th>
  
                <tbody>
  
                  {PCRTests.map((PCRTests) => {
                   
                   
  
                    return (
  
                      <tr>
  
                        <td>{PCRTests.PatientId}</td>
  
                        <td>{PCRTests.PCRTestId}</td>
  
                        <td>{PCRTests.TestNo}</td>

                        <td>{PCRTests.TestDate}</td>

                        <td>{PCRTests.TestTime}</td>

                        <td>{PCRTests.Result}</td>
  
                        <td>
  
                          <Link to={"/UpdatePCR"}>
  
                            <button id="view" onClick={()=>setData(PCRTests)}>Update</button>

                          </Link>
                          <Link to={"/addPCR"}>
                            <button id="view" onClick={()=>setData(PCRTests)}>Delete</button>
  
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