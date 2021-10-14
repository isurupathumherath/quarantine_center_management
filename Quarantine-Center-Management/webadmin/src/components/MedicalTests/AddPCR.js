  import React,{useState} from "react"
  import axios from "axios"
  // import { useTable } from 'react-table';
  import moment from 'moment';
  import DatePicker from 'react-datetime';

import 'react-datetime/css/react-datetime.css';
 

  export default function AddPCR(){

  const[PatientId,setPatientId] = useState(0);
  const[PCRTestId,setPCRTestId] = useState("");
  const[TestNo,setTestNo] = useState(0);
  const[TestDate,setTestDate] = useState(null);
  const[TestTime,setTestTime] = useState("");
  const[Result,setResult] = useState("");

  // const[PatientIdErr,setPatientIdErr] = useState({});
  // const[PCRTestIdErr,setPCRTestIdErr] = useState({});
  // const[TestNoErr,setTestNoErr] = useState({});
  // const[TestDateErr,setTestDateErr] = useState({});
  // const[TestTimeErr,setTestTimeErr] = useState({});
  // const[ResultErr,setResultErr] = useState({});

  
  function sendData(e){
    e.preventDefault();
    // const isValid=formValidation();
    
    const newPCRTest = {
      PatientId,
      PCRTestId,
      TestNo,
      TestDate,
      TestTime,
      Result
    }

    axios.post("http://localhost:8000/PCRTest/add",newPCRTest).then(()=>{
      alert("PCR Test details added successfully !");
      window.location.replace('/ViewPCR');

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

  const disableFutureDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
};
 

  // const formValidation = ()=>{

  // //   const PatientIdErr={};
  // //   const PCRTestIdErr={};
  //   const TestNoErr={};
  // //   const TestDateErr={};
  // //   const TestTimeErr={};
  // //   const ResultErr={};
  //   let isValid=true;

  //   // if(PatientId.length=0){
  //   //   PatientIdErr.PatientIdempty="This field can not be empty !";
  //   //   isValid=false;
  //   // }

  //   if(PCRTestId.trim().length=0){
  //     PCRTestIdErr.PCRTestIdempty="This field can not be empty !";
  //     isValid=false;
  //   }

    // if(TestNo!=1 || TestNo!=2 ||TestNo!=3 ){
    //   TestNoErr.TestNoempty="This field can not be empty !";
    //   isValid=false;
    // }

  //   if(TestDate.trim().length=0){
  //     TestDateErr.TestDateempty="This field can not be empty !";
  //     isValid=false;
  //   }

  //   if(TestTime.trim().length=0){
  //     TestTimeErr.TestTimedempty="This field can not be empty !";
  //     isValid=false;
  //   }

  //   if(Result.trim().length=0){
  //     ResultErr.Resultempty="This field can not be empty !";
  //     isValid=false;
  //   }

  //   setPatientIdErr(PatientIdErr);
  //   setPCRTestIdErr(PCRTestIdErr);
  //   setTestNoErr(TestNoErr);
  // //   setTestDateErr(TestDateErr);
  // //   setTestTimeErr(TestTimeErr);
  // //   setResultErr(ResultErr);
  //   return isValid;

  // }

 
  

  return(
        
  <div  >
      <div style={{backgroundColor:"#AED6F1 ",position:"relative",right:"100px"}}class="page-wrapper">
      <div class="content container-fluid">
      <h1 style={{
        textShadow:"5px 5px 3.5px #278ea5",
        fontWeight: "bold",
        position: "relative",
        left: "230px",
        top:"-70px"
      }}>Add Details of PCR Tests</h1>
          
            
            <div >    
            <div  >
              <form  style={{
                
                position: "relative",
                left: "175px",
                top:"-70px"
              }} onSubmit={sendData}>

                
                <div class="form-group" class="col-sm-7">

                  <label for="PatientId">Patient ID</label>
                  <input type="text" required class="form-control" id="PatientId" placeholder="Enter the Patient Id"
                  onChange={(e)=>{

                      setPatientId(e.target.value);

                  }} />
                  
                  
   
                </div>


                <div class="form-group" class="col-sm-7">

                  <label for="PCRTestId">PCR Test ID</label>
                  <input type="text"  required class="form-control" id="PCRTestId" placeholder="Enter the PCR Test Id"
                  onChange={(e)=>{

                      setPCRTestId(e.target.value);

                  }} />
                  
   
                </div>

                
                <div class="form-group" class="col-sm-7">

                  <label for="TestNo">Test Number</label>
                  <input type="number" required class="form-control" id="TestNo" placeholder="Enter the Test number"  min="1" max="3"
                    onChange={(e)=>{

                      setTestNo(e.target.value);

                  }} />

                   {/* {Object.keys(ResultErr).map((key)=>{

                  return <div style={{
                    color:"red"
                  }}>{ResultErr[key]}</div>

                  })}  */}
                
                </div>


                <div class="form-group" class="col-sm-7">

                  <label for="TestDate">Test Date</label>
                  {/* <input type="Date" required class="form-control" id="TestDate" placeholder="Enter the date of the Test"
                    onChange={(e)=>{

                      setTestDate(e.target.value);

                  }} /> */}
              
                <input id="datepicker" class="datepicker-input" required class="form-control" max={disableFutureDate()}   placeholder="Enter the date of the Test" type="date" data-date-format="yyyy-mm-dd" onChange={(e)=>{

                setTestDate(e.target.value);

                }} />


                
                </div>

               
                

                <div class="form-group" class="col-sm-7">

                  <label for="TestTime">Test Time</label>
                  <input type="text" required class="form-control" id="TestTime" placeholder="Enter the time of the Test"
                    onChange={(e)=>{

                      setTestTime(e.target.value);

                  }} />
                
                </div>


                <div class="form-group" class="col-sm-7">

                  <label for="Result">Test Result</label>
                  <input type="text"  required class="form-control" id="Result" placeholder="Enter the result of the Test"
                    onChange={(e)=>{

                      setResult(e.target.value);

                  }} />

                  {/* {Object.keys(ResultErr).map((key)=>{

                  return <div style={{
                    color:"red"
                  }}>{ResultErr[key]}</div>

                  })} */}
                
                </div>
  
                
                <br/>
  
                <button style={{
                  color:"black",
                  backgroundColor:" #278ea5",
                  position: "relative",
                  left: "225px"
                }}  type="submit" class="btn btn-primary">Submit</button>
              </form>
              </div>

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