  import React,{useState} from "react"
  import axios from "axios"


  export default function AddPCR(){

  const[PatientId,setPatientId] = useState(0);
  const[PCRTestId,setPCRTestId] = useState("");
  const[TestNo,setTestNo] = useState(0);
  const[TestDate,setTestDate] = useState(null);
  const[TestTime,setTestTime] = useState("");
  const[Result,setResult] = useState("");

  function sendData(e){
    e.preventDefault();
    
    const newPCRTest = {
      PatientId,
      PCRTestId,
      TestNo,
      TestDate,
      TestTime,
      Result
    }

    axios.post("http://localhost:8000/PCRTest/add",newPCRTest).then(()=>{
      alert("PCR Test details added successfully !")
      setPatientId("");
      setPCRTestId("");
      setTestNo("");
      setTestDate("");
      setTestTime("");
      setResult("");
      
    }).catch((err)=>{
      alert(err)
    })
  }
  

  return(
        
  <div>
      <div class="page-wrapper">
          <div class="content container-fluid">
            <div>      
              <form onSubmit={sendData}>

                
                <div class="form-group" class="col-sm-7">

                  <label for="PatientId">Patient ID</label>
                  <input type="text" class="form-control" id="PatientId" placeholder="Enter the Patient Id"
                  onChange={(e)=>{

                      setPatientId(e.target.value);

                  }} />
                  
   
                </div>


                <div class="form-group" class="col-sm-7">

                  <label for="PCRTestId">PCR Test Id</label>
                  <input type="text" class="form-control" id="PCRTestId" placeholder="Enter the PCR Test Id"
                  onChange={(e)=>{

                      setPCRTestId(e.target.value);

                  }} />
                  
   
                </div>

                
                <div class="form-group" class="col-sm-7">

                  <label for="TestNo">Test Number</label>
                  <input type="text" class="form-control" id="TestNo" placeholder="Enter the Test number"
                    onChange={(e)=>{

                      setTestNo(e.target.value);

                  }} />
                
                </div>


                <div class="form-group" class="col-sm-7">

                  <label for="TestDate">Test Date</label>
                  <input type="text" class="form-control" id="TestDate" placeholder="Enter the date of the Test"
                    onChange={(e)=>{

                      setTestDate(e.target.value);

                  }} />
                
                </div>

                

                <div class="form-group" class="col-sm-7">

                  <label for="TestTime">Test Time</label>
                  <input type="text" class="form-control" id="TestTime" placeholder="Enter the time of the Test"
                    onChange={(e)=>{

                      setTestTime(e.target.value);

                  }} />
                
                </div>


                <div class="form-group" class="col-sm-7">

                  <label for="Result">Test Result</label>
                  <input type="text" class="form-control" id="Result" placeholder="Enter the result of the Test"
                    onChange={(e)=>{

                      setResult(e.target.value);

                  }} />
                
                </div>
  
                <br/>
                <br/>
  
                <button  type="submit" class="btn btn-primary">Submit</button>
              </form>
           </div>
         </div>
     </div>
  </div>
        


    )
}