import React,{useState,useEffect} from "react"
import axios from "axios"


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
    }).catch((err)=>{
        alert(err)
    })
  }
 


return(
      
<div>
    <div class="page-wrapper">
        <div class="content container-fluid">
          <div>      
            <form >

              
              <div class="form-group" class="col-sm-7">

                <label for="PatientId">Patient ID</label>
                <input type="text" class="form-control" id="PatientId" placeholder="PatientId" value={PatientId}
                onChange={(e)=>{

                    setPatientId(e.target.value);

                }} />
                
 
              </div>


              <div class="form-group" class="col-sm-7">

                <label for="PCRTestId">PCR Test Id</label>
                <input type="text" class="form-control" id="PCRTestId" placeholder="PCRTestId" value={PCRTestId}
                onChange={(e)=>{

                    setPCRTestId(e.target.value);

                }} />
                
 
              </div>

              
              <div class="form-group" class="col-sm-7">

                <label for="TestNo">Test Number</label>
                <input type="text" class="form-control" id="TestNo" placeholder="TestNo" value={TestNo}
                  onChange={(e)=>{

                    setTestNo(e.target.value);

                }} />
              
              </div>


              <div class="form-group" class="col-sm-7">

                <label for="TestDate">Test Date</label>
                <input type="Date" class="form-control" id="TestDate" placeholder="TestDate" value={Date.parse(TestDate)}
                  onChange={(e)=>{

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
                <input type="text" class="form-control" id="Result" placeholder="Result" value={Result}
                  onChange={(e)=>{

                    setResult(e.target.value);

                }} />
              
              </div>

              <br/>
              <br/>

              <button  type="submit" class="btn btn-primary" onClick={updateAPIData}>Update</button>
            </form>
         </div>
       </div>
   </div>
</div>
      


  )
}