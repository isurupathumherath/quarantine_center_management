import React,{useState} from "react"

export default function AddPCR(){

  const[PatientId,setPatientID] = useState("");
  const[PCRTestId,setPCRTestID] = useState("");
  const[TestNo,setTestNo] = useState("");
  const[TestDate,setTestDate] = useState("");
  const[TestTime,setTestTime] = useState("");
  const[Result,setResult] = useState("");
  

    return(
        <div classname="container">
            
  <form>
  <div class="form-group">

    <label for="PatientId">Patient ID</label>
    <input type="text" class="form-control" id="PatientId" placeholder="Enter the Patient ID"/>
   
  </div>

  <div class="form-group">

    <label for="PCRTestId">PCR Test ID</label>
    <input type="text" class="form-control" id="PCRTestId" placeholder="Enter the PCR Test ID"/>
   
  </div>

  <div class="form-group">

    <label for="TestNo">Test Number</label>
    <input type="text" class="form-control" id="TestNo" placeholder="Enter the Test Number"/>
   
  </div>

  <div class="form-group">

    <label for="TestDate">Test Date</label>
    <input type="text" class="form-control" id="TestDate" placeholder="Enter the date of the test"/>
   
  </div>

  <div class="form-group">

    <label for="TestTime">Test Time</label>
    <input type="text" class="form-control" id="TestTime" placeholder="Enter the time of the test"/>
   
  </div>

  <div class="form-group">

    <label for="Result">Test Result</label>
    <input type="text" class="form-control" id="Result" placeholder="Enter the result of the test"/>
   
  </div>
  

  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>

    )
}