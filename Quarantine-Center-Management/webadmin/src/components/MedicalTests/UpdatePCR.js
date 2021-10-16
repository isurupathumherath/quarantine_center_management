import React,{useState,useEffect} from "react"
import axios from "axios"
import { useHistory } from 'react-router';
import { Link } from "react-router-dom";


export default function UpdatePCR(){



const [testid, settestid] = useState(null);
const[PatientId,setPatientId] = useState(0);
const[PCRTestId,setPCRTestId] = useState("");
const[TestNo,setTestNo] = useState(0);
const[TestDate,setTestDate] = useState(null);
const[TestTime,setTestTime] = useState("");
const[Result,setResult] = useState("");


useEffect(() => {
    settestid(localStorage.getItem('testid'))
    setPatientId(localStorage.getItem('PatientId'));
    setPCRTestId(localStorage.getItem('PCRTestId'));
    setTestNo(localStorage.getItem('TestNo'));
    setTestDate(localStorage.getItem('TestDate'));
    setTestTime(localStorage.getItem('TestTime'));
    setResult(localStorage.getItem('Result'))

}, []);




  const updateAPIData = () =>{
    axios.put(`http://localhost:8000/PCRTest/update/${testid}`,{
            
            PatientId,
            PCRTestId,
            TestNo,
            TestDate,
            TestTime,
            Result
    }).then(()=>{
        alert("PCR Test details updated successfully !")
        // window.location.replace('/ViewPCR');
    }).catch((err)=>{
        alert(err)
    })
  }


  const disableFutureDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
};
 


return(
      
<div>
    <div style={{backgroundColor:"#AED6F1 ",position:"relative",right:"100px"}} class="page-wrapper">
    <div class="content container-fluid">
    <h1 style={{
        textShadow:"5px 5px 3.5px #278ea5",
        fontWeight: "bold",
        position: "relative",
        left: "230px",
        top:"-70px"
      }}>Update Details of PCR Tests</h1>

       
          <div>      
            <form  style={{
                position: "relative",
                left: "200px",
                top:"-70px"
              }} >

              
              <div class="form-group" class="col-sm-7">

                <label for="PatientId">Patient ID</label>
                <input type="text" class="form-control" id="PatientId" placeholder="PatientId" value={PatientId}
                onChange={(e)=>{

                    setPatientId(e.target.value);

                }} />
                
 
              </div>


              <div class="form-group" class="col-sm-7">

                <label for="PCRTestId">PCR Test Id</label>
                <input type="text"  class="form-control" id="PCRTestId" placeholder="PCRTestId" value={PCRTestId}
                onChange={(e)=>{

                    setPCRTestId(e.target.value);

                }} />
                
 
              </div>

              
              <div class="form-group" class="col-sm-7">

                <label for="TestNo">Test Number</label>
                <input type="number"  class="form-control" id="TestNo" placeholder="TestNo" value={TestNo} 
                  onChange={(e)=>{

                    setTestNo(e.target.value);

                }} />
              
              </div>


              <div class="form-group" class="col-sm-7">

                <label for="TestDate">Test Date</label>
                <input type="text" class="form-control" id="TestDate" placeholder="TestDate" value={TestDate}/><br/>
                {/* <input type="date" class="form-control" id="TestDate" max={disableFutureDate()} placeholder="TestDate" value={TestDate}
                  onChange={(e)=>{

                    setTestDate(e.target.value);

                }} /> */}

                <input id="datepicker" class="datepicker-input" required class="form-control" max={disableFutureDate()} value={TestDate}  placeholder="Enter the date of the Test" type="date" data-date-format="yyyy-mm-dd" onChange={(e)=>{

                setTestDate(e.target.value);

                }} />
              
              </div>

              

              <div class="form-group" class="col-sm-7">

                <label for="TestTime">Test Time</label>
                
                <input type="text" class="form-control" id="TestTime" placeholder="TestTime" value={TestTime}
                  onChange={(e)=>{

                    setTestTime(e.target.value);

                }} />
              
              </div>


              <div class="form-group" class="col-sm-7">

                <label for="Result">Test Result</label>
                <input type="text"  class="form-control" id="Result" placeholder="Result" value={Result}
                  onChange={(e)=>{

                    setResult(e.target.value);

                }} />
              
              </div>

            
              <br/>

              <Link to ={`/ViewPCR`}><button style={{
                  color:"black",
                  backgroundColor:" #278ea5",
                  position: "relative",
                  left: "225px"
                }} type="submit" class="btn btn-primary" onClick={updateAPIData}>Update</button></Link>
            </form>

            <a href="/Medicaltests/dashboard" style={{
                position:"relative",
                top:"-50px",
                left:"100px"
              }}>Back to the dashboard</a>

              <a href="/ViewPCR" style={{
                position:"relative",
                top:"-50px",
                left:"500px"
              }}>View all PCR tests</a>


         </div>
       </div>
   </div>
</div>
      


  )
}