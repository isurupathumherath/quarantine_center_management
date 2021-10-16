import React,{useState,useEffect} from "react"
import axios from "axios"
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';


export default function UpdateCheckup(){
const [checkupid, setcheckuptid] = useState(null);
const[PatientId,setPatientId] = useState(0);
const[CheckupId,setCheckupId] = useState("");
const[CheckupDate,setCheckupDate] = useState(null);
const[CheckupTime,setCheckupTime] = useState("");
const[Result,setResult] = useState("");


useEffect(() => {
    setcheckuptid(localStorage.getItem('checkupid'))
    setPatientId(localStorage.getItem('PatientId'));
    setCheckupId(localStorage.getItem('CheckupId'));
    setCheckupDate(localStorage.getItem('CheckupDate'));
    setCheckupTime(localStorage.getItem('CheckupTime'));
    setResult(localStorage.getItem('Result'))

}, []);




  const onDelete = () =>{
    axios.delete(`http://localhost:8000/TempCheckup/delete/${checkupid}`).then(()=>{
     
        alert("Body Temperature Checkup details deleted successfully !");
        window.location.replace('/ViewCheckups');
    }).catch((err)=>{
        alert(err)
    })
  }


  // submit = () => {
  //   confirmAlert({
  //     title: 'Confirm to Delete',
  //     message: 'Are you sure to do this.',
  //     buttons: [
  //       {
  //         label: 'Yes',
  //         onClick: () =>{deleteAPIData(checkupid)}
  //       },
  //       {
  //         label: 'No',
  //         onClick: () => alert('Click No')
  //       }
  //     ]
  //   });
  // };

    const options = {
    title: 'Delete Record',
    message: 'Are you sure to do this?',
    buttons: [
      {
        label: 'Yes',
        onClick: () => onDelete(checkupid)
      },
      {
        label: 'No',
        
      }
    ],
    
  };
  
  



 
  return(
        
    <div>
        <div style={{backgroundColor:"#AED6F1 ",position:"relative",right:"100px"}} class="page-wrapper">

        <h1 style={{
        textShadow:"5px 5px 3.5px #278ea5",
        fontWeight: "bold",
        position: "relative",
        left: "120px",
        top:"-45px"
      }}>Delete Body Temperature Checkup Details</h1>

            <div class="content container-fluid">
              <div>      
                <form style={{
                position: "relative",
                left: "175px",
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
  
                    <label for="CheckupId">Body Temperature Checkup Id</label>
                    <input type="text" class="form-control" id="CheckupId" placeholder="CheckupId" value={CheckupId}
                    onChange={(e)=>{
  
                        setCheckupId(e.target.value);
  
                    }} />
                    
     
                  </div>
  
                  
                  <div class="form-group" class="col-sm-7">
  
                    <label for="CheckupDate">Date of the checkup</label>
                    {/* <input type="text"  value={CheckupId}/> */}
                    <input type="text" class="form-control" id="CheckupDate" placeholder="CheckupDate" value={CheckupDate}
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
    
                  <button style={{
                  color:"black",
                  backgroundColor:" #278ea5",
                  position: "relative",
                  fontWeight: "bold",
                  left: "225px"
                }} type="submit" class="btn btn-primary" onClick={confirmAlert(options)}>Delete</button>
                </form>

                <a href="/Medicaltests/dashboard" style={{
                position:"relative",
                top:"-50px",
                left:"130px"
              }}>Back to the dashboard</a>

              <a href="/ViewCheckups" style={{
                position:"relative",
                top:"-50px",
                left:"500px"
              }}>View all Checkups</a>

             </div>
           </div>
       </div>
    </div>
          
  
  
      )
  }