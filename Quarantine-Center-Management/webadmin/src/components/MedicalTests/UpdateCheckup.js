import React,{useState,useEffect} from "react"
import axios from "axios"


export default function UpdateCheckup(){
const [checkupid, settestid] = useState(null);
const[PatientId,setPatientId] = useState(0);
const[CheckupId,setCheckupId] = useState("");
const[CheckupDate,setCheckupDate] = useState(null);
const[CheckupTime,setCheckupTime] = useState("");
const[Result,setResult] = useState("");


useEffect(() => {
    settestid(localStorage.getItem('checkupid'))
    setPatientId(localStorage.getItem('PatientId'));
    setCheckupId(localStorage.getItem('CheckupId'));
    setCheckupDate(localStorage.getItem('CheckupDate'));
    setCheckupTime(localStorage.getItem('CheckupTime'));
    setResult(localStorage.getItem('Result'))

}, []);




  const updateAPIData = () =>{
    axios.put(`http://localhost:8000/TempCheckup/update/${checkupid}`,{
            
            PatientId,
            CheckupId,
            CheckupDate,
            CheckupTime,
            Result
    }).then(()=>{
        alert("Body Temperature Checkup details updated successfully !")
    }).catch((err)=>{
        alert(err)
    })
  }
 
  return(
        
    <div>
        <div class="page-wrapper">
            <div class="content container-fluid">
              <div>      
                <form>
  
                  
                  <div class="form-group" class="col-sm-7">
  
                    <label for="PatientId">Patient ID</label>
                    <input type="text" class="form-control" id="PatientId" placeholder="PatientId" value={PatientId}
                    onChange={(e)=>{
  
                        setPatientId(e.target.value);
  
                    }} />
                    
     
                  </div>
  
  
                  <div class="form-group" class="col-sm-7">
  
                    <label for="CheckupId">Body Temperature Checkup Id</label>
                    <input type="text" class="form-control" id="CheckupId" placeholder="CheckupId" value={CheckupId}
                    onChange={(e)=>{
  
                        setCheckupId(e.target.value);
  
                    }} />
                    
     
                  </div>
  
                  
                  <div class="form-group" class="col-sm-7">
  
                    <label for="CheckupDate">Date of the checkup</label>
                    {/* <input type="text"  value={CheckupId}/> */}
                    <input type="date" class="form-control" id="CheckupDate" placeholder="CheckupDate" value={Date.parse(CheckupDate)}
                      onChange={(e)=>{
  
                        setCheckupDate(e.target.value);
  
                    }} />
                  
                  </div>
  
  
                  <div class="form-group" class="col-sm-7">
  
                    <label for="CheckupTime">Time of the checkup</label>
                    <input type="text" class="form-control" id="CheckupTime" placeholder="CheckupTime" value={CheckupTime}
                      onChange={(e)=>{
  
                        setCheckupTime(e.target.value);
  
                    }} />
                  
                  </div>
  
                  
  
  
                  <div class="form-group" class="col-sm-7">
  
                    <label for="Result">Result of the checkup</label>
                    <input type="text" class="form-control" id="Result" placeholder="Result" value={Result}
                      onChange={(e)=>{
  
                        setResult(e.target.value);
  
                    }} />
                  
                  </div>
    
                  <br/>
                  <br/>
    
                  <button type="submit" class="btn btn-primary" onClick={updateAPIData}>Update</button>
                </form>
             </div>
           </div>
       </div>
    </div>
          
  
  
      )
  }