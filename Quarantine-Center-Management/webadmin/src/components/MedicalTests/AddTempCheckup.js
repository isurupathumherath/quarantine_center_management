import React,{useState} from "react"
  import axios from "axios"


  export default function AddTempCheckup(){

  const[PatientId,setPatientId] = useState("");
  const[CheckupId,setCheckupId] = useState("");
  const[CheckupDate,setCheckupDate] = useState("");
  const[CheckupTime,setCheckupTime] = useState("");
  const[Result,setResult] = useState("");

  function sendData(e){
    e.preventDefault();
    
    const newTempCheckup = {
      PatientId,
      CheckupId,
      CheckupDate,
      CheckupTime,
      Result
    }

    axios.post("http://localhost:8000/TempCheckup/add",newTempCheckup).then(()=>{
      alert("Body Temperature Checkup details added successfully !")
      setPatientId("");
      setCheckupId("");
      setCheckupDate("");
      setCheckupTime("");
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

                  <label for="CheckupId">Body Temperature Checkup Id</label>
                  <input type="text" class="form-control" id="CheckupId" placeholder="Enter the body temperature checkup Id"
                  onChange={(e)=>{

                      setCheckupId(e.target.value);

                  }} />
                  
   
                </div>

                
                <div class="form-group" class="col-sm-7">

                  <label for="CheckupDate">Date of the checkup</label>
                  <input type="Date" class="form-control" id="CheckupDate" placeholder="Enter the date of the checkup"
                    onChange={(e)=>{

                      setCheckupDate(e.target.value);

                  }} />
                
                </div>


                <div class="form-group" class="col-sm-7">

                  <label for="CheckupTime">Time of the checkup</label>
                  <input type="text" class="form-control" id="CheckupTime" placeholder="Enter the time of the checkup"
                    onChange={(e)=>{

                      setCheckupTime(e.target.value);

                  }} />
                
                </div>

                


                <div class="form-group" class="col-sm-7">

                  <label for="Result">Result of the checkup</label>
                  <input type="text" class="form-control" id="Result" placeholder="Enter the result of the test"
                    onChange={(e)=>{

                      setResult(e.target.value);

                  }} />
                
                </div>
  
                <br/>
                <br/>
  
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
           </div>
         </div>
     </div>
  </div>
        


    )
}